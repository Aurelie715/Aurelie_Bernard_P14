import "./App.scss";
import { Route, createBrowserRouter, createRoutesFromElements, Outlet, RouterProvider } from "react-router-dom";
import CreateEmployee from "./view/Create-employee/index.jsx";
import CurrentEmployees from "./view/Current-employees/index.jsx";
import Header from "./components/Header";
import EmployeesContext from "./context";
import { useState } from "react";

const Root = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        <Outlet />
      </div>
    </>
  );
};

function App() {
  //stocke la liste des employés et la met à jour
  const [employees, setEmployees] = useState([]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<CreateEmployee />} />
        <Route path="current-employees" element={<CurrentEmployees />} />
        <Route path="*" element={<div>Error404</div>} />
      </Route>
    )
  );

  return (
    <EmployeesContext.Provider value={{ employees, setEmployees }}>
      <RouterProvider router={router} />;
    </EmployeesContext.Provider>
  );
}

export default App;
