import { Icon, FontSelector, Toggle } from '@/components';
import useTheme from '@/hooks/useTheme';
import './style.css';

function Header() {
  const { theme, font, setTheme, setFont } = useTheme();

  function handleChangeTheme() {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  }

  function hasDarkTheme() {
    return theme === 'dark';
  }

  return (
    <header className="header">
      <Icon name="logo" />
      <div className="header__actions">
        <FontSelector
          currentFont={font}
          onChange={(newFont) => setFont(newFont)}
        />
        <div className="header__actions__separator"></div>
        <Toggle checked={hasDarkTheme()} onChange={handleChangeTheme} />
        <Icon name="moon" />
      </div>
    </header>
  );
}

export default Header;
