import { Routes, Route } from "react-router-dom";
import { path } from "./ultils/constant";
import {
  Home,
  Login,
  Rental,
  HomePage,
} from "./containers/Public";
function App() {
  return (
    <Routes>
      <Route path={path.HOME} element={<Home />}>
        <Route path="*" element={<HomePage />} />
        <Route path={path.LOGIN} element={<Login />} />
        <Route path={path.CHO_THUE_PHONG_TRO} element={<Rental />} />
        <Route path={path.CHO_THUE_MAT_BANG} element={<Rental/>} />
        <Route path={path.NHA_CHO_THUE} element={<Rental />} />
        <Route path={path.CHO_THUE_CAN_HO} element={<Rental />} />
      </Route>
    </Routes>
  );
}

export default App;
