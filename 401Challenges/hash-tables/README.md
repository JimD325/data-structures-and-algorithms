# Hashtables
<!-- Short summary or background information -->

## Challenge
- Implment a hashtable Class with the following methods:
1. Set(key, value) => void
    - should hash the key, set the key/val pair in the table, handling collisions as needed.
    - If a key already exists, replace its value from the value arguement given to this method. 
2. Get(key) => value associated with key in the table.
3. Has(key) => boolean indicating if key exists in table already
4. keys => collection of keys
5. hash(key)=> index in collection for that key. 

## Testing
1. Setting a key/value to your hashtable results in the value being in the data structure
2. Retrieving based on a key returns the value stored
3. Successfully returns null for a key that does not exist in the hashtable
4. Successfully returns a list of all unique keys that exist in the hashtable
5. Successfully handle a collision within the hashtable
6. Successfully retrieve a value from a bucket within the hashtable that has a collision
7. Successfully hash a key to an in-range value

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

## API
<!-- Description of each method publicly available in each of your hashtable -->