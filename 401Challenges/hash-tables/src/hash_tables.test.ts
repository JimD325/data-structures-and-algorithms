import { HashTable } from "./hash_tables";

export interface BirdLog {
  species: string;
 
}

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



test("HashTable is created properly", () => {
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

