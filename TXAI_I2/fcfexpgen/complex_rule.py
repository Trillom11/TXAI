# -*- coding: utf-8 -*-
"""
@author: Ilia Stepin (CiTIUS-USC)
"""

class Complex_Rule(object):   
    def __init__(self, rule_id, antecedent=[], consequent=None, activation=1.0, weight=1.0, dist=1.0, mv=list(), matrix_row=list(), vector=list()):
        self.rule_id = rule_id
        self.activation = activation
        self.antecedent = antecedent
        self.consequent = consequent
        self.weight = weight
        self.mv = mv
        self.dist = dist
        self.matrix_row = matrix_row
        self.vector = vector
        
    def findFuzzySimpleRule(self, feature, value):
        for simple_rule in self.antecedent:
            if simple_rule.feature == feature and simple_rule.value == value:
                return True
        return False
    
    def __str__(self):
        if isinstance(self.antecedent, list):
            ante = [rule.__str__() for rule in self.antecedent]
        elif isinstance(self.antecedent, dict):
            ante = [feature + ": " + str(interval) for feature, interval in self.antecedent.items()]            
        return "\nRULE_ID: "+str(self.rule_id)+"\nACTIVATION: "+str(self.activation)+"\nANTECEDENT: "+str(ante)+"\nCONSEQUENT: "+str(self.consequent)+"\nWEIGHT: "+str(self.weight)+"\nMATRIX_ROW: "+str(self.matrix_row)