import React, { useContext, useMemo, useState } from "react";
import Title from "../../components/common/Title";
import DataTable from "react-data-table-component";
import EmployeesContext from "../../context";
import styles from "./style.module.scss";

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
    sortFunction: (a, b) => {
      if (a.startDate === b.startDate) {
        return 0;
      }

      if (!a.startDate) {
        return -1;
      }

      if (!b.dateOfBirth) {
        return 1;
      }

      return new Date(a.startDate) - new Date(b.startDate);
    },
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
    sortFunction: (a, b) => {
      if (a.dateOfBirth === b.dateOfBirth) {
        return 0;
      }

      if (!a.dateOfBirth) {
        return -1;
      }

      if (!b.dateOfBirth) {
        return 1;
      }

      return new Date(a.dateOfBirth) - new Date(b.dateOfBirth);
    },
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

const FilterComponent = ({ filterText, onFilter, onClear }) => {
  return (
    <>
      <div className={styles.searchbar}>
        <input id="search" type="text" placeholder="Search" aria-label="Search Input" onChange={onFilter} value={filterText} />
        <button className={styles["search-button"]} type="button" onClick={onClear}>
          X
        </button>
      </div>
    </>
  );
};

export default function CurrentEmployees() {
  const { employees } = useContext(EmployeesContext);
  const [filterText, setFilterText] = useState("");
  const filteredItems = filterText
    ? employees.filter((item) => {
        return (
          (item.firstName && item.firstName.toLowerCase().includes(filterText.toLowerCase())) ||
          (item.lastName && item.lastName.toLowerCase().includes(filterText.toLowerCase())) ||
          (item.startDate && item.startDate.toLowerCase().includes(filterText.toLowerCase())) ||
          (item.department && item.department.toLowerCase().includes(filterText.toLowerCase())) ||
          (item.dateOfBirth && item.dateOfBirth.toLowerCase().includes(filterText.toLowerCase())) ||
          (item.street && item.street.toLowerCase().includes(filterText.toLowerCase())) ||
          (item.city && item.city.toLowerCase().includes(filterText.toLowerCase())) ||
          (item.state && item.state.toLowerCase().includes(filterText.toLowerCase())) ||
          (item.zipCode && item.zipCode.toLowerCase().includes(filterText.toLowerCase()))
        );
      })
    : employees;

  const subHeaderComponentMemo = useMemo(() => {
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
      <DataTable columns={columns} data={filteredItems} pagination subHeader subHeaderComponent={subHeaderComponentMemo} persistTableHead />
    </>
  );
}
