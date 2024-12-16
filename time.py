#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'timeInWords' function below.
#
# The function is expected to return a STRING.
# The function accepts following parameters:
#  1. INTEGER h
#  2. INTEGER m
#

def timeInWords(h, m):
    num_words = {
        0: "o' clock", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six",
        7: "seven", 8: "eight", 9: "nine", 10: "ten", 11: "eleven",
        12: "twelve", 13: "thirteen", 14: "fourteen", 15: "quarter",
        16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen",
        20: "twenty", 21: "twenty one", 22: "twenty two", 23: "twenty three",
        24: "twenty four", 25: "twenty five", 26: "twenty six", 27: "twenty seven",
        28: "twenty eight", 29: "twenty nine", 30: "half"}
    print(h, m)# Write your code here
    
    # hour 
    if h in num_words:
        hour_in_words = num_words[h]
    if m <= 30:
        minute_in_words = num_words[h]
    else:
        p = 60 - m
        minute_in_words = num_words[p]
        print(p)
    #if h in Hour[0]:
     #   console(Hour[1],":")
      #  if m
    
    # m >1 and < 30 => past
     #m = 0 equal o' clock
     #m= 30 use half
     #m = 15, 45 use quarter
    #m > 30 to 60  =>60
    print(hour_in_words," ", minute_in_words) 
    return(hour_in_words," ", minute_in_words) 

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    h = int(input().strip())

    m = int(input().strip())

    result = timeInWords(h, m)

    fptr.write(result + '\n')

    fptr.close()
    
