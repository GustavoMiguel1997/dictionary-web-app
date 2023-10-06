import { useEffect } from 'react';
import { Header } from '@/components';
import './style.css';

function App() {
  useEffect(() => {
    // aqui posso setar caso tiver algo salvo no localStorage
    document.documentElement.setAttribute('data-theme', 'light');
    document.documentElement.setAttribute('data-font', 'Inter');
  }, []);

  return (
    <main className="app">
      <Header />
    </main>
  );
}

export default App;
