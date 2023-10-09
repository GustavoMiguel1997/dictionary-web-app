import { AudioPlayer } from '@/components';
import './style.css';

interface Props {
  word: string;
  phonetic: string;
  audioSrc: string;
}

function DefinitionPreview({ word, phonetic, audioSrc }: Props) {
  return (
    <div className="definitionPreview">
      <div className="definitionPreview__word">
        <h2 className="definitionPreview__word__title">{word}</h2>
        <span className="definitionPreview__word__phonetic">{phonetic}</span>
      </div>
      <AudioPlayer source={audioSrc} />
    </div>
  );
}

export default DefinitionPreview;
