import './style.css';
import type { Meaning } from '@/types';

interface Props {
  meanings: Meaning[];
}

function Meaning({ meanings }: Props) {
  return (
    <div className="meaning">
      {meanings.map((meaning) => (
        <div key={meaning.partOfSpeech}>
          <div>
            <h3>{meaning.partOfSpeech}</h3>
          </div>
          <h3>Meaning</h3>
          <ul>
            {meaning.definitions.map((definition) => (
              <li>{definition.definition}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Meaning;
