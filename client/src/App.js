import {Routes, Route} from 'react-router-dom'
import {path} from './ultills/constant'
import {Home, Login} from './containers/Public'
function App() {
  return (
    <Routes>
      <Route path={path.HOME} element = {<Home />}>
        <Route path={path.LOGIN} element = {<Login />}/>
      </Route>
    </Routes>
  );
}

export default App;
