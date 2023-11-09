import { useState, useEffect } from 'react';
import localStorageSetup from '@/utils/localStorageSetup';
import { setDataAttributes } from '@/utils/dom';

function useTheme() {
  const themeStorage = localStorageSetup('theme');
  const fontStorage = localStorageSetup('font');

  const [theme, setTheme] = useState('');
  const [font, setFont] = useState('');

  useEffect(() => {
    const currentTheme = themeStorage.get() || 'light';
    const currentFont = fontStorage.get() || 'Inter';

    setTheme(currentTheme);
    setFont(currentFont);
    setDataAttributes(currentTheme, currentFont);
  }, []);

  useEffect(() => {
    themeStorage.set(theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    fontStorage.set(font);
    document.documentElement.setAttribute('data-font', font);
  }, [font]);

  return { theme, font, setTheme, setFont };
}

export default useTheme;
