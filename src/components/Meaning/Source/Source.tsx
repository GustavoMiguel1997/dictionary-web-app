import './style.css';

interface Props {
  src: string;
}

function Source({ src }: Props) {
  return (
    <div className="source">
      <h3 className="source__title">Source</h3>
      <a className="source__link" href={src} target="_blank">
        {src}
      </a>
    </div>
  );
}

export default Source;
