// You're given strings J representing the types of stones that are jewels,
//and S representing the stones you have.
//Each character in S is a type of stone you have.
//You want to know how many of the stones you have are also jewels.
//
// The letters in J are guaranteed distinct, and all characters
// in J and S are letters. Letters are case sensitive, so "a" is
//considered a different type of stone from "A".

export function jewelsAndStones(jewels: string, rocks: string) {
  let total = 0;

  let rocksThatAreJewelsArray: string[] = [];
  for (const rock of rocks.split('')) {
    if (jewels.includes(rock))
      rocksThatAreJewelsArray.push(rock);
  }

  for (const rock of rocksThatAreJewelsArray)
    if (jewels.includes(rock)) total++;

  return total;
}
