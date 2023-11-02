import { Link } from 'react-router-dom';
import './BtnSet.css';

export function BtnSet({ name }) {
  return (
    <li className="list-set__item">
      <Link className="list-set__btn" to="/set" state={{ set: name }}>
        {name} -
      </Link>
    </li>
  );
}