# To calculate Median

#fun to cal median
def find_median(n):
    n.sort()
    length = len(n)
    if length % 2 == 0:               #for evn num
        median = (n[length//2 - 1] + n[length//2]) / 2
    else:
        median = n[length//2]        # for odd num
    return median

n = input("Enter a list of numbers separated by space: ").split()
n = [int(n) for n in n]

median = find_median(n)
print("The median of numbers is : ", median)   #res
