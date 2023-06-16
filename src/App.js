import "./App.scss";
import { Route, createBrowserRouter, createRoutesFromElements, Outlet, RouterProvider } from "react-router-dom";
import CreateEmployee from "./view/Create-employee/index.jsx";
import CurrentEmployees from "./view/Current-employees/index.jsx";
import Header from "./components/Header";
import Context from "./context";
import { useState } from "react";

const data = [
  // {
  //   id: 1,
  //   firstName: "Aurélie",
  //   lastName: "Bernard",
  //   startDate: "06/14/2023",
  //   department: "Sales",
  //   dateOfBirth: "10/22/1987",
  //   street: "3 rue lechat",
  //   city: "Koulouch",
  //   state: "Alabama",
  //   zipCode: "25255",
  // },
  // {
  //   id: 2,
  //   firstName: "Cyril",
  //   lastName: "Bernard",
  //   startDate: "06/15/2023",
  //   department: "Sales",
  //   dateOfBirth: "10/05/1993",
  //   street: "3 rue lechat",
  //   city: "Koulouch",
  //   state: "Alabama",
  //   zipCode: "25255",
  // },
  // {
  //   id: 3,
  //   firstName: "Pierre",
  //   lastName: "Dupont",
  //   startDate: "06/15/2023",
  //   department: "Sales",
  //   dateOfBirth: "06/11/1969",
  //   street: "3 rue lechien",
  //   city: "Koulouch",
  //   state: "Alabama",
  //   zipCode: "25255",
  // },
];

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
  const [employees, setEmployees] = useState(data);
  const employeesContext = { employees, setEmployees };

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
    <Context.Provider value={employeesContext}>
      <RouterProvider router={router} />;
    </Context.Provider>
  );
}

export default App;
