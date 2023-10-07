import { useEffect, useState, ChangeEvent } from 'react';
import { Header, SearchField, NotFound } from '@/components';
import { getWord } from '@/services/dictionaryService';
import type { Definitions } from '@/types';
import './style.css';

function App() {
  useEffect(() => {
    // aqui posso setar caso tiver algo salvo no localStorage
    document.documentElement.setAttribute('data-theme', 'light');
    document.documentElement.setAttribute('data-font', 'Inter');
  }, []);

  const [definitions, setDefinitions] = useState<undefined | Definitions>();
  const [error, setError] = useState(false);

  function handleChangeSearch(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    value && fetchWord(value);
  }

  async function fetchWord(word: string) {
    try {
      const [definitionsResp] = await getWord(word);
      setDefinitions(definitionsResp);
    } catch (error) {
      setError(true);
      setDefinitions();
    }
  }

  console.log(definitions);

  return (
    <main className="app">
      <Header />
      <SearchField onChange={handleChangeSearch} />
      {error && <NotFound />}
    </main>
  );
}

export default App;
