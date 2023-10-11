import List from './List/List';
import Source from './Source/Source';
import Synonyms from './Synonyms/Synonyms';

import type { Meaning } from '@/types';

import './style.css';
interface Props {
  meanings: Meaning[];
  source?: string;
}

function Meaning({ meanings, source }: Props) {
  return (
    <div className="meaning">
      {meanings.map((meaning) => (
        <div className="meaning__block" key={meaning.partOfSpeech}>
          <h3 className="meaning__block__speech">{meaning.partOfSpeech}</h3>
          <h3 className="meaning__block__title">Meaning</h3>
          <List definitions={meaning.definitions} />
          {meaning.synonyms.length > 0 && (
            <Synonyms synonyms={meaning.synonyms} />
          )}
        </div>
      ))}
      {source && <Source src={source} />}
    </div>
  );
}

export default Meaning;
