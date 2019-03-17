class Difference:
    def __init__(self, a):
        self.__elements = a

	# Add your code here
    def computeDifference(self):
        sorted_elements = sorted(self.__elements)
        self.maximumDifference = abs(sorted_elements[-1] - sorted_elements[0])

# End of Difference class