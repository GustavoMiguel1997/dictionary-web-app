import './style.css';

interface Props {
  synonyms: string[];
}

function Synonyms({ synonyms }: Props) {
  return (
    <div className="synonyms">
      <h3 className="synonyms__title">Synonyms</h3>
      <span>{synonyms.join(', ')}</span>
    </div>
  );
}

export default Synonyms;
