# Challenge Summary
Create a class called AnimalShelter which holds only dogs and cats.
The shelter operates using a first-in, first-out approach.
Implement the following methods:
enqueue
Arguments: animal
animal can be either a dog or a cat object.
dequeue
Arguments: pref
pref can be either "dog" or "cat"
Return: either a dog or a cat, based on preference.
If pref is not "dog" or "cat" then return null.

## Whiteboard Process
![](CC%2012.PNG)

## Approach & Efficiency
I utilized a an array setup to design my queue. In the shelter class we set an array to be filled with Animal types, which are created in the Animal interface. We then create a new Animal for the enqueue method and pass it the name and type from the arguements of the enqueue function. This new animal is then pushed into the array, and takes 0(1). For the dequeue, we check to see if there are any animals in the shelter, and if so, we run a for loop to check if the desired type (cat or dog), and if it does splice the animal out of the array at its given index. If the type isnt specified, it returns the first animal in the queue. If there are no animals in the que, it throws an error. In all cases it is O(n)

## Solution
- To test, run npm test