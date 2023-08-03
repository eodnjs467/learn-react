import styles from './MeetupItem.module.css';
import Card from "../ui/Card";
import {useContext} from "react";
import FavoritesContext from "../../store/favorites-context";
function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);
  function toggleFavoriteStatusHandler() {
    if(itemIsFavorite){
      console.log('favorite item 을 삭제하겠습니다.');
      return favoritesCtx.removeFavorite(props.id);
    }
    favoritesCtx.addFavorite(props);
  }
  return (
      <li className={styles.item}>
        <Card>
          <div className={styles.image}>
            <img src={props.image} alt="meetup-image"/>
          </div>
          <div className={styles.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
          </div>
          <div className={styles.actions}>
            <button onClick={toggleFavoriteStatusHandler}>
              {itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}
            </button>
          </div>
        </Card>
      </li>
  );
}

export default MeetupItem;
