import './App.css';
import {Route} from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
      <Layout>
        <Route path={'/'} exact>
          <AllMeetupsPage />
        </Route>
        <Route path={'/new-meetup'}>
          <NewMeetupPage />
        </Route>
        <Route path={'/favorites'}>
          <FavoritesPage />
        </Route>
      </Layout>
  );
}

export default App;
