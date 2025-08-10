from typing import List


def knapsack(w: int, profit: List[int], weight: List[int]) -> None:
    dp = [[0 for _ in range(w + 1)] for _ in range(len(weight))]
    print("dp", dp)


W, profit, weight = 4, [1, 2, 3], [4, 5, 1]
knapsack(W, profit, weight)

"""
from typing import List

def knapsack(w: int, profit: List[int], weight: List[int] ) -> None :
    dp =  [ [0 for _ in range(w+1)] for _ in range(len(weight))]
    print("dp",dp)
    
W,profit,weight = 4,[1, 2, 3],[4, 5, 1]
knapsack(W, profit, weight)
"""
