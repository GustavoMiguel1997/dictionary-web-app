import { ChangeEvent } from 'react';
import './style.css';

interface Props {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Toggle({ onChange }: Props) {
  return <input type="checkbox" className="toggle" onChange={onChange} />;
}

export default Toggle;
