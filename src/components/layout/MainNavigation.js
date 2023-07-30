import {Link} from "react-router-dom";
import styles from './MainNavigation.module.css';
function MainNavigation() {
  return (
      <header className={styles.header}>
        <div className={styles.logo}>All Meet ups</div>
        <ul>
          <li><Link to={"/"}>All Meet ups</Link></li>
          <li><Link to={"/new-meetup"}>New Meet up</Link></li>
          <li><Link to={"/favorites"}>Favorites</Link></li>
        </ul>
      </header>
  );
}
export default MainNavigation;
