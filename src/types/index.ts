interface Definitions {
  word: string;
  phonetic: string;
  meanings: Meaning[];
  phonetics: Phonetic[];
  sourceUrls: string[];
}

interface Meaning {
  antonyms: string[];
  synonyms: string[];
  partOfSpeech: string;
  definitions: Definition[];
}

interface Definition {
  definition: string;
  antonyms: string[];
  synonyms: string[];
}

interface Phonetic {
  text: string;
  audio: string;
}

export type { Definitions, Definition, Meaning };
