import notFoundImg from '@/assets/images/notFoundIcon.png';
import './style.css';

function NotFound() {
  return (
    <div className="notFound">
      <img src={notFoundImg} />
      <h2>No Definitions Found</h2>
      <p>
        We couldn't find definitions for the word you were looking for. You can
        try the search again at later time or head to the web instead.
      </p>
    </div>
  );
}

export default NotFound;
