// This file tests that TypeScript 2.2.0+ compiles successfully using the type definitions
import safe, { either, Undefined } from "./index";

interface StarWarsCharacter {
  name: string;
  mother?: StarWarsCharacter;
}

const safeDarthVader: StarWarsCharacter = {
  name: 'Anakin',
  mother: {
    name: 'Shmi'
  }
};

const isUndefined: boolean = safe(safeDarthVader).mother.mother === Undefined;
const result: StarWarsCharacter | string = either(safeDarthVader.mother.mother, "other");
