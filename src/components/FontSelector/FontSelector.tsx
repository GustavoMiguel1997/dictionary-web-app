import { useState, useRef } from 'react';
import useComponentVisible from '@/hooks/useComponentVisible';
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
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useComponentVisible(elementRef.current);

  function getFontLabel() {
    const font = AVAILABLE_FONTS.find((font) => font.name === currentFont);
    return font?.label;
  }

  return (
    <button
      ref={elementRef}
      className="fontSelector"
      onClick={() => setIsVisible(!isVisible)}
    >
      <span>{getFontLabel()}</span>
      <Icon name="arrowDown" />

      {isVisible && (
        <ul
          className="fontSelector__options"
          onClick={(e) => e.stopPropagation()}
        >
          {AVAILABLE_FONTS.map((font) => (
            <li
              key={font.name}
              style={{ fontFamily: font.name }}
              onClick={() => {
                onChange(font.name);
                setIsVisible(false);
              }}
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
