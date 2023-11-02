import { Link } from 'react-router-dom';
import './Header.css';

export function Header() {
  return (
    <div className="header">
      <h1>
        <Link to="/">Oneu-apTouku</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link className="main-menu_link" to="/admin">Cospate cet</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}