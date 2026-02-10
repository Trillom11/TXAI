# -*- coding: utf-8 -*-
"""
@author: Ilia Stepin (CiTIUS-USC)
"""

from simplenlg.framework import *
from simplenlg.lexicon import *
from simplenlg.realiser.english import *
from simplenlg.phrasespec import *
from simplenlg.features import *
from copy import deepcopy
from ast import literal_eval

class Factual_Explanation(object):
    def __init__(self, factual_explanation_rule, features_from_json, features_from_fis, linguistic_terms_known):
        self.factual_explanation_rule = factual_explanation_rule        
        self.features_from_json = features_from_json
        self.features_from_fis = features_from_fis
        self.linguistic_terms_known = linguistic_terms_known
               
    def surface_realisation(self, approximated_antecedent=None):
        lexicon = Lexicon.getDefaultLexicon()
        nlgFactory = NLGFactory(lexicon)
        realiser = Realiser(lexicon)

        subj = nlgFactory.createNounPhrase("instance") #"The test instance"
        subj.addPreModifier("test")
        subj.setDeterminer("the")
        verb = "be"
        
        expl_sentence = nlgFactory.createClause(subj, verb)
        expl_sentence.setSubject(subj)
        expl_sentence.setVerb(verb)        
        expl_sentence.setObject("of class " + self.factual_explanation_rule.consequent.lower()) 
        
        subord_clause = nlgFactory.createClause()
        subord_clause.setFeature(Feature.COMPLEMENTISER, "because")
        coordinated_clause = nlgFactory.createCoordinatedPhrase()#"color is brown", "strength is low"
        
        if self.linguistic_terms_known:
            self.factual_explanation_rule.antecedent = {rule.feature: rule.value for rule in self.factual_explanation_rule.antecedent}
        else:
            self.factual_explanation_rule.antecedent = approximated_antecedent
        
        for feature, value in self.factual_explanation_rule.antecedent.items():
            #feature_value_pair = nlgFactory.createClause()            
            #feature_value_pair.setSubject(feature.lower())
            #feature_value_pair.setVerb(verb)
            #feature_value_pair.setObject(value.lower())
            if self.linguistic_terms_known:
                coordinated_clause.addCoordinate(feature.lower()+' is '+value.lower())
            else:
                coordinated_clause.addCoordinate(feature.lower()+' is '+value[0].lower())
                
        subord_clause.setSubject(coordinated_clause)
        expl_sentence.addComplement(subord_clause)        
        explanation = realiser.realiseSentence(expl_sentence)
        return explanation
    
    def generate_ling_approx_explanation(self, features_from_json, trapezoid_shapes):
        
        def similarity(int_a, int_b):        
            ends = [int_a[1], int_b[1]] 
            if ends[1] < ends[0]: 
                ends.reverse() 
            starts = [int_a[0], int_b[0]] 
            if starts[1] < starts[0]: 
                starts.reverse() 
        
            intersection = ends[0] - starts[1] 
            if intersection < 0: 
                intersection = 0.
            union = ends[1] - starts[0] 
            if union > 0: 
                return intersection / union 
            return 0.0

        def define_interval_to_compare_with(shape, delta):
            adapted_interval_a = (shape[1] - shape[0]) * delta + shape[0]
            if len(shape) == 3: # triangular MF
                adapted_interval_b = shape[2] - (shape[2] - shape[1]) * delta
            elif len(shape) == 4: # trapezoidal MF
                adapted_interval_b = shape[3] - (shape[3] - shape[2]) * delta
            return [adapted_interval_a, adapted_interval_b]
        
        def approx_ling_term(interval, exp_values):
            sim = 0
            term = ""
            exp_values = {ling_term: [ling_term_interval[0], ling_term_interval[1]] for ling_term, ling_term_interval in exp_values.terms.items()}
            for ling_term, ling_term_interval in exp_values.items():   
                current_sim = similarity(interval, ling_term_interval)
                if current_sim > sim: 
                    sim = current_sim
                    term = ling_term
            return term, sim    
        
        def generate_single_approx_explanation(delta=0.5):
            approx_fact_expl = dict()
            for rule in self.factual_explanation_rule.antecedent:
                expert_values = features_from_json[rule.feature]
                rule_interval = define_interval_to_compare_with(rule.interval, delta)
                best_approximated_term, similarity_degree = deepcopy(approx_ling_term(rule_interval, expert_values))
                approx_fact_expl[rule.feature] = (best_approximated_term, similarity_degree)
            return approx_fact_expl

        for rule in self.factual_explanation_rule.antecedent:
            rule.interval = trapezoid_shapes[rule.feature][rule.value]

        approximated_antecedent = generate_single_approx_explanation()
        return approximated_antecedent