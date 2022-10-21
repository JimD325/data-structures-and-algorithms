import { HashTable } from "./hash_tables";
import { repeatedWord } from "./repeatedWords"

export interface BirdLog {
  species: string;
}

// s the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only..."

const repeat: string = "the ! worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only"

const TEST_LOG: BirdLog[] = [
  { species: "Duck"},
  { species: "Duck"},
  { species: "Goose"},
  { species: "Tufted Titmouse"},
  { species: "Duck"},
  { species: "Duck"},
  { species: "Tufted Titmouse"},
  { species: "Goose"},
  { species: "Duck"},
  { species: "Goose"},
  { species: "Duck"},
  { species: "Tufted Titmouse"},
  { species: "Goose"},
];

describe("repeat words", () => {
  it("returns first character to repeat", () => {
    const table = new HashTable<number>(10000);

    // for (const char of TEST_LOG) {

    //   if (table.has(char.value)) {
        
    //     table.set(char.value, table.get(char.value) + 1);
  
    //   } else {
    //     table.set(char.value, 1);
  
    //   }
    // }
    expect(repeatedWord(repeat)).toBe("the");
  })
})


xtest("HashTable is created properly", () => {
  const table = new HashTable<number>(2);

  for (const log of TEST_LOG) {

    if (table.has(log.species)) {
      
      table.set(log.species, table.get(log.species) + 1);

    } else {
      table.set(log.species, 1);

    }
  }
  console.log('table[0] after changes---->', table?.data[0])
  console.log('table[1] after changes---->', table?.data[1])
  expect(table.get("Duck")).toBe(6);
  expect(table.get("Goose")).toBe(4);
  expect(table.get("Tufted Titmouse")).toBe(3);
  expect(() => table.get("Owl")).toThrowError();
  expect(table.keys()).toEqual(["Tufted Titmouse", "Goose",
  "Duck"])
});

