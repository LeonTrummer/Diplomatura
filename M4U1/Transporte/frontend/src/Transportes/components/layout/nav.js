import '../../styles/Nav.css';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
  return (
    <nav>
      <div>
        <ul>
          <li>
            <NavLink
              to="/"
              activeClassName="active"
              isActive={(match, location) => {
                if (!match) {
                  return false;
                }
                return match.isExact;
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/nosotros"
              activeClassName="active"
              isActive={(match, location) => {
                if (!match) {
                  return false;
                }
                return match.isExact;
              }}
            >
              Nosotros
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/novedades"
              activeClassName="active"
              isActive={(match, location) => {
                if (!match) {
                  return false;
                }
                return match.isExact;
              }}
            >
              Novedades
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacto"
              activeClassName="active"
              isActive={(match, location) => {
                if (!match) {
                  return false;
                }
                return match.isExact;
              }}
            >
              Contacto
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
