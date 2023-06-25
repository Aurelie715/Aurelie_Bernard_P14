import "./App.scss";
import { Route, createBrowserRouter, createRoutesFromElements, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import EmployeesContext from "./context";
import React, { useState, lazy, Suspense } from "react";

const CreateEmployee = lazy(() => import("./view/Create-employee"));
const CurrentEmployees = lazy(() => import("./view/Current-employees"));

const Root = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        <Suspense fallback={"chargement"}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

function App() {
  //stocke la liste des employés et la met à jour
  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem("employees")) || []);

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
    //valeur = la liste des employés et un moyen de la mettre à jour
    <EmployeesContext.Provider value={{ employees, setEmployees }}>
      <RouterProvider router={router} />;
    </EmployeesContext.Provider>
  );
}

export default App;
