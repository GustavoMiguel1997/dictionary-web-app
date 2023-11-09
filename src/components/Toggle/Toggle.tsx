import { ChangeEvent } from 'react';
import './style.css';

interface Props {
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Toggle({ checked, onChange }: Props) {
  return (
    <input
      type="checkbox"
      className="toggle"
      checked={checked}
      onChange={onChange}
    />
  );
}

export default Toggle;
