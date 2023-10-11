import { useEffect, useState, ChangeEvent } from 'react';
import {
  Header,
  SearchField,
  NotFound,
  DefinitionPreview,
  Meaning,
} from '@/components';
import { getWord } from '@/services/dictionaryService';
import type { Definitions } from '@/types';
import './style.css';

function App() {
  useEffect(() => {
    // aqui posso setar caso tiver algo salvo no localStorage
    document.documentElement.setAttribute('data-theme', 'light');
    document.documentElement.setAttribute('data-font', 'Inter');
  }, []);

  const [definitions, setDefinitions] = useState<null | Definitions>(null);
  const [error, setError] = useState(false);

  function handleChangeSearch(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    value && fetchWord(value);
  }

  async function fetchWord(word: string) {
    try {
      const [definitionsResp] = await getWord(word);
      setDefinitions(definitionsResp);
      setError(false);
    } catch (error) {
      setError(true);
      setDefinitions(null);
    }
  }

  const hasWordDefinition = !error && definitions;

  return (
    <main className="app">
      <Header />
      <SearchField onChange={handleChangeSearch} />
      {error && <NotFound />}
      {hasWordDefinition && (
        <>
          <DefinitionPreview
            word={definitions.word}
            phonetic={definitions.phonetic}
            audioSrc={definitions.phonetics.find((item) => item.audio)?.audio}
          />
          <Meaning
            meanings={definitions.meanings}
            source={definitions.sourceUrls[0]}
          />
        </>
      )}
    </main>
  );
}

export default App;
