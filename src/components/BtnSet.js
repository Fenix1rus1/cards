import { Link } from 'react-router-dom';
import './BtnSet.css';

export function BtnSet({ name,id }) {
  return (
    <div className='list-set__item'>
      <div className='list-set__block'>
      <Link className='list-set__btn' to='/set/${id}' state={{ set: name }}>
        {name}
      </Link>
      </div>
    </div>
  );
}