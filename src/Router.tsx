import { Routes, Route } from "react-router-dom";
import Login from "./component/pages/Login";
import Menu from "./component/pages/Menu";

export const path = {
  login: "/",
  menu: "/menu",
};

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route path={path.login} element={<Login />} />
      <Route path={path.menu} element={<Menu />} />
    </Routes>
  );
};

export default Router;
