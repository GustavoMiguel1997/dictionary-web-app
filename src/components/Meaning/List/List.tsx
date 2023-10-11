import type { Definition } from '@/types';
import './style.css';

interface Props {
  definitions: Definition[];
}

function List({ definitions }: Props) {
  return (
    <ul className="list">
      {definitions.map((definition) => (
        <li className="list__item" key={definition.definition}>
          {definition.definition}
        </li>
      ))}
    </ul>
  );
}

export default List;
