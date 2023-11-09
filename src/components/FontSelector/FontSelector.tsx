import { useState } from 'react';
import { Icon } from '@/components';
import './style.css';

const AVAILABLE_FONTS = [
  { label: 'Sans Serif', name: 'Inter' },
  { label: 'Serif', name: 'Lora' },
  { label: 'Mono', name: 'Mono' },
];

interface Props {
  currentFont: string;
  onChange: (font: string) => void;
}

function FontSelector({ currentFont, onChange }: Props) {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);

  function getFontLabel() {
    const font = AVAILABLE_FONTS.find((font) => font.name === currentFont);
    return font?.label;
  }

  // Precisa ajustar o clique do botão, ta fechando de forma incorreta

  return (
    <button
      className="fontSelector"
      onClick={() => setIsOptionsVisible(!isOptionsVisible)}
    >
      <span>{getFontLabel()}</span>
      <Icon name="arrowDown" />

      {isOptionsVisible && (
        <ul className="fontSelector__options">
          {AVAILABLE_FONTS.map((font) => (
            <li
              key={font.name}
              style={{ fontFamily: font.name }}
              onClick={() => onChange(font.name)}
            >
              {font.label}
            </li>
          ))}
        </ul>
      )}
    </button>
  );
}

export default FontSelector;
