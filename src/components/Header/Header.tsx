import { Icon, FontSelector, Toggle } from '@/components';
import './style.css';

function Header() {
  function handleChangeTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');

    if (!currentTheme) {
      document.documentElement.setAttribute('data-theme', 'dark');
      return;
    }
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
  }

  return (
    <header className="header">
      <Icon name="logo" />
      <div className="header__actions">
        <FontSelector />
        <div className="header__actions__separator"></div>
        <Toggle onChange={handleChangeTheme} />
        <Icon name="moon" />
      </div>
    </header>
  );
}

export default Header;
