import { useState } from 'react';
import { Icon } from '@/components';
import './style.css';

interface Font {
  label: string;
  name: string;
}

const AVAILABLE_FONTS = [
  { label: 'Sans Serif', name: 'Inter' },
  { label: 'Serif', name: 'Lora' },
  { label: 'Mono', name: 'Mono' },
];

function FontSelector() {
  const [currentFont, setCurrentFont] = useState<Font>(AVAILABLE_FONTS[0]);
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);

  function handleChangeFont(
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    font: Font,
  ) {
    e.preventDefault();
    setCurrentFont(font);
    document.documentElement.setAttribute('data-font', font.name);
  }

  // Precisa ajustar o clique do botão, ta fechando de forma incorreta

  return (
    <button
      className="fontSelector"
      onClick={() => setIsOptionsVisible(!isOptionsVisible)}
    >
      <span>{currentFont.label}</span>
      <Icon name="arrowDown" />

      {isOptionsVisible && (
        <ul className="fontSelector__options">
          {AVAILABLE_FONTS.map((font) => (
            <li
              key={font.name}
              onClick={(e) => handleChangeFont(e, font)}
              style={{ fontFamily: font.name }}
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
