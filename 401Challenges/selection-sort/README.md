

## Code Challenges 26-28

### Movie Sort
- 

### Sort 
  - Write an algorithm to sort the given array ```[8,4,23,42,16,15]```
  - verify proper implmentation by typing ```npm run test``` in the console. 
### Insertion Sort Visual 
![](./CC26.PNG)
### Insertion Sort
- Goes through every element in the array, keeping track of 2 variables, i and j. 
- i is one index ahead of j.
- if i is greater than j, then i and j swap places. 
- Once the swap occurs, the process begins again from the start of the array and repeats, until it can no longer find any instances of i > j. 

### Merge Sort Visual 
![](./CC27.PNG)
### Merge Sort 
- Goes through the array, and divides each element into its own separate array by cutting bisections recursively.
- The arrays are then reassembled piece by piece. In each, the larger value is pushed into the array first. 
- The process continues until the array is completely reassembled and all the pieces are in their proper order. 
