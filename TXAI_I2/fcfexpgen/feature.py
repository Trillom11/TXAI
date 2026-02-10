# -*- coding: utf-8 -*-
"""
@author: Ilia Stepin (CiTIUS-USC)
"""

class Attribute(object):    
    def __init__(self, name, terms, minmax_interval, min_operator='<=', max_operator='<='):
        self.name = name
        self.terms = dict()
        self.parse_term_intervals(terms)
        self.min_operator = min_operator
        self.max_operator = max_operator
        self.min_value = minmax_interval["left"]
        self.max_value = minmax_interval["right"]
        
    def parse_term_intervals(self, terms):
        for term in terms:
            self.terms[term["name"]] = (term["interval"]["left"], term["interval"]["right"])
        
    def in_interval(self, value):
        return True if float(value) >= float(self.min_value) and float(value) <= float(self.max_value) else False
        
    def similarity(self, int_b):        
        int_a = [float(self.min_value), float(self.max_value)]
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
    
    def __str__(self):
        return str(self.min_value) + " "+ self.min_operator + " " + self.name + " " + self.max_operator + " " + str(self.max_value) + "\n" + str(self.terms)
