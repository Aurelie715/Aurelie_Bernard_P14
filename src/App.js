import "./App.scss";
import { SelectMenu } from "select-menu-hrnet-oc";
import { Route, redirect, createBrowserRouter, createRoutesFromElements, Outlet, RouterProvider } from "react-router-dom";
import CreateEmployee from "./view/Create-employee/index.jsx";
import CurrentEmployees from "./view/Current-employees/index.jsx";

const Root = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<CreateEmployee />} />
        <Route path="current-employees" element={<CurrentEmployees />} />
        <Route path="*" element={<div>Error404</div>} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
