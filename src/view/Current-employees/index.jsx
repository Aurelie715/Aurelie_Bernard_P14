import React from "react";
import Title from "../../components/common/Title";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "First Name",
    selector: (row) => row.firstName,
    sortable: true,
  },
  {
    name: "Last Name",
    selector: (row) => row.lastName,
    sortable: true,
  },
  {
    name: "Start Date",
    selector: (row) => row.startDate,
    sortable: true,
    sortFunction: (a, b) => new Date(a.startDate) - new Date(b.startDate)
  },
  {
    name: "Department",
    selector: (row) => row.department,
    sortable: true,
  },
  {
    name: "Date of Birth",
    selector: (row) => row.dateOfBirth,
    sortable: true,
    // sortFunction: (a, b) => {
    //   const dateA = new Date(a.dateOfBirth);
    //   const dateB = new Date(b.dateOfBirth);

    //   if (dateA > dateB) {
    //     return 1;
    //   }

    //   if (dateA < dateB) {
    //     return -1;
    //   }

    //   return 0;
    // },
    sortFunction: (a, b) => new Date(a.dateOfBirth) - new Date(b.dateOfBirth)
  },
  {
    name: "Street",
    selector: (row) => row.street,
    sortable: true,
  },
  {
    name: "City",
    selector: (row) => row.city,
    sortable: true,
  },
  {
    name: "State",
    selector: (row) => row.state,
    sortable: true,
  },
  {
    name: "Zip Code",
    selector: (row) => row.zipCode,
    sortable: true,
  },
];

const data = [
  {
    id: 1,
    firstName: "Aurélie",
    lastName: "Bernard",
    startDate: "06/14/2023",
    department: "Sales",
    dateOfBirth: "10/22/1987",
    street: "3 rue lechat",
    city: "Koulouch",
    state: "Alabama",
    zipCode: "25255"
  },
  {
    id: 2,
    firstName: "Cyril",
    lastName: "Bernard",
    startDate: "06/15/2023",
    department: "Sales",
    dateOfBirth: "10/05/1993",
    street: "3 rue lechat",
    city: "Koulouch",
    state: "Alabama",
    zipCode: "25255"
  },
  {
    id: 3,
    firstName: "Pierre",
    lastName: "Dupont",
    startDate: "06/15/2023",
    department: "Sales",
    dateOfBirth: "06/11/1969",
    street: "3 rue lechien",
    city: "Koulouch",
    state: "Alabama",
    zipCode: "25255"
  },
];

const TextField = ({ filterText, onFilter }) => <input id="search" type="text" placeholder="Filter By Name" aria-label="Search Input" value={filterText} onChange={onFilter} />;

const ClearButton = ({ onClear }) => (
  <button type="button" onClick={onClear}>
    X
  </button>
);

const FilterComponent = ({ filterText, onFilter, onClear }) => {
  return (
  <>
  <TextField id="search" type="text" placeholder="Filter By Name" aria-label="Search Input" filterText={filterText} onFilter={onFilter} />
    <ClearButton onClear={onClear}>X</ClearButton>
  </>
  );
};

export default function CurrentEmployees() {
  const [filterText, setFilterText] = React.useState("");
  const filteredItems = data.filter((item) => item.firstName && item.firstName.toLowerCase().includes(filterText.toLowerCase()));

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setFilterText("");
      }
    };

    return <FilterComponent onFilter={(e) => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />;
  }, [filterText]);

  return (
    <>
      <Title title="Current Employees" />
      <DataTable title="Contact List" columns={columns} data={filteredItems} pagination subHeader subHeaderComponent={subHeaderComponentMemo} selectableRows persistTableHead />
    </>
  );
}
