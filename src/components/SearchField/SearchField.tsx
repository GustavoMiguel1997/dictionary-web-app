import { ChangeEvent } from 'react';
import { Icon } from '@/components';
import debounce from '@/utils/debounce';
import './style.css';

interface Props {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function SearchField({ onChange }: Props) {
  const onChangeDebounced = debounce(onChange, 750);

  return (
    <div className="inputField">
      <input
        className="inputField__input"
        placeholder="Search for any word"
        onChange={onChangeDebounced}
      />
      <Icon name="search" />
    </div>
  );
}

export default SearchField;
