import { DICTIONARY_URL } from './urls';
import type { Definitions } from '@/types';

async function getWord(word: string): Promise<Definitions[]> {
  const response = await fetch(`${DICTIONARY_URL}/${word}`);
  return await response.json();
}

export { getWord };
