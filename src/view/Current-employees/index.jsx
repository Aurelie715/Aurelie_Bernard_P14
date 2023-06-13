import React, { useState } from "react";
import Title from "../../components/common/Title";
import DataTable from "react-data-table-component";

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
  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Director",
      selector: (row) => row.director,
      sortable: true,
    },
    {
      name: "Year",
      selector: (row) => row.year,
      sortable: true,
    },
  ];

  const data = [
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 2,
      title: "Ghostbusters",
      year: "1984",
    },
  ];

  const [filterText, setFilterText] = React.useState("");
  const filteredItems = data.filter((item) => item.title && item.title.toLowerCase().includes(filterText.toLowerCase()));

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
