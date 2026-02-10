# -*- coding: utf-8 -*-
"""
@author: Ilia Stepin (CiTIUS-USC)
"""

class Simple_Rule(object):   
    def __init__(self, feature, operator, value, activation=1.0, weight=1.0, distance=None, row_matrix=None, interval=None):
        self.feature = feature
        self.operator = operator
        self.value = value
        self.interval = interval
        
    def is_satisfied(self, data_instance):
        value_in_question = data_instance.instance[self.feature]
        if self.operator == "<" and float(value_in_question) < float(self.value):
            return True
        if self.operator == "<=" and float(value_in_question) <= float(self.value):
            return True
        if self.operator == ">" and float(value_in_question) > float(self.value):
            return True
        if self.operator == ">=" and float(value_in_question) >= float(self.value):
            return True
        if self.operator == "=" and float(value_in_question) == float(self.value):
            return True
        if self.operator == "<>" and float(value_in_question) != float(self.value):
            return True
        return False
    
    def is_equal(self, cond2):
        if self.feature == cond2.feature and self.operator == cond2.operator and self.value == cond2.value:
            return True
        return False
        
    def __str__(self):
        return str(self.feature)+" "+str(self.operator)+" "+str(self.value)