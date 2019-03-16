#!/bin/python3

import sys
import math

n = int(input().strip())

# create an empty list to hold our binary numbers
binary_list = []

# fill the list with 1s and 0s from left to right using Base-Conversion Method (remainders of dividing by 2)
while True:
    if n > 1:
        if n % 2 == 0:
            binary_list.append(0)
        elif n % 2 != 0:
            binary_list.append(1)
    elif n == 1:
        binary_list.append(1)
        break
    elif n == 0:
        binary_list.append(0)
        break
    n = math.floor(n / 2)

# set a counter and a max variable
consec = 0
maximum = 0

# iterate through our list of 1s and 0s to find our max consecutive set of 1s
for i in binary_list:
    if i == 1:
        consec += 1
        if maximum <= consec:
            maximum = consec
        else:
            pass
    elif i == 0:
        consec = 0
        
print(maximum)