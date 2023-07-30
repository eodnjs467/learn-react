import './App.css';
import Todo from "./components/Todo";
import {Route} from "react-router-dom";

function App() {
  return (
      <div>
        <h1>My Todos</h1>
        <Route path={'/'}>
          <Todo text={"펜션 예약하기"} />
        </Route>
        <Route path={'/'}>
        <Todo text={"캠핑 용품 챙기기"} />
          <Route path={'/'}>
        <Todo text={"장보기"} />
      </div>
  );
}

export default App;
