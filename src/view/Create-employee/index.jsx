import React, { Suspense, useContext, useState } from "react";
import Field from "../../components/Field";
// import Datepicker from "../../components/Datepicker";
import Select from "../../components/Select";
import Title from "../../components/common/Title";
import styles from "./style.module.scss";
import Button from "../../components/common/Button";
import Modal from "react-modal";
import { lazy } from 'react';
import Context from "../../context";

const Datepicker = lazy(() => import('../../components/Datepicker'));

const states = [
  {
    name: "Alabama",
    abbreviation: "AL",
  },
  {
    name: "Alaska",
    abbreviation: "AK",
  },
  {
    name: "American Samoa",
    abbreviation: "AS",
  },
  {
    name: "Arizona",
    abbreviation: "AZ",
  },
  {
    name: "Arkansas",
    abbreviation: "AR",
  },
  {
    name: "California",
    abbreviation: "CA",
  },
  {
    name: "Colorado",
    abbreviation: "CO",
  },
  {
    name: "Connecticut",
    abbreviation: "CT",
  },
  {
    name: "Delaware",
    abbreviation: "DE",
  },
  {
    name: "District Of Columbia",
    abbreviation: "DC",
  },
  {
    name: "Federated States Of Micronesia",
    abbreviation: "FM",
  },
  {
    name: "Florida",
    abbreviation: "FL",
  },
  {
    name: "Georgia",
    abbreviation: "GA",
  },
  {
    name: "Guam",
    abbreviation: "GU",
  },
  {
    name: "Hawaii",
    abbreviation: "HI",
  },
  {
    name: "Idaho",
    abbreviation: "ID",
  },
  {
    name: "Illinois",
    abbreviation: "IL",
  },
  {
    name: "Indiana",
    abbreviation: "IN",
  },
  {
    name: "Iowa",
    abbreviation: "IA",
  },
  {
    name: "Kansas",
    abbreviation: "KS",
  },
  {
    name: "Kentucky",
    abbreviation: "KY",
  },
  {
    name: "Louisiana",
    abbreviation: "LA",
  },
  {
    name: "Maine",
    abbreviation: "ME",
  },
  {
    name: "Marshall Islands",
    abbreviation: "MH",
  },
  {
    name: "Maryland",
    abbreviation: "MD",
  },
  {
    name: "Massachusetts",
    abbreviation: "MA",
  },
  {
    name: "Michigan",
    abbreviation: "MI",
  },
  {
    name: "Minnesota",
    abbreviation: "MN",
  },
  {
    name: "Mississippi",
    abbreviation: "MS",
  },
  {
    name: "Missouri",
    abbreviation: "MO",
  },
  {
    name: "Montana",
    abbreviation: "MT",
  },
  {
    name: "Nebraska",
    abbreviation: "NE",
  },
  {
    name: "Nevada",
    abbreviation: "NV",
  },
  {
    name: "New Hampshire",
    abbreviation: "NH",
  },
  {
    name: "New Jersey",
    abbreviation: "NJ",
  },
  {
    name: "New Mexico",
    abbreviation: "NM",
  },
  {
    name: "New York",
    abbreviation: "NY",
  },
  {
    name: "North Carolina",
    abbreviation: "NC",
  },
  {
    name: "North Dakota",
    abbreviation: "ND",
  },
  {
    name: "Northern Mariana Islands",
    abbreviation: "MP",
  },
  {
    name: "Ohio",
    abbreviation: "OH",
  },
  {
    name: "Oklahoma",
    abbreviation: "OK",
  },
  {
    name: "Oregon",
    abbreviation: "OR",
  },
  {
    name: "Palau",
    abbreviation: "PW",
  },
  {
    name: "Pennsylvania",
    abbreviation: "PA",
  },
  {
    name: "Puerto Rico",
    abbreviation: "PR",
  },
  {
    name: "Rhode Island",
    abbreviation: "RI",
  },
  {
    name: "South Carolina",
    abbreviation: "SC",
  },
  {
    name: "South Dakota",
    abbreviation: "SD",
  },
  {
    name: "Tennessee",
    abbreviation: "TN",
  },
  {
    name: "Texas",
    abbreviation: "TX",
  },
  {
    name: "Utah",
    abbreviation: "UT",
  },
  {
    name: "Vermont",
    abbreviation: "VT",
  },
  {
    name: "Virgin Islands",
    abbreviation: "VI",
  },
  {
    name: "Virginia",
    abbreviation: "VA",
  },
  {
    name: "Washington",
    abbreviation: "WA",
  },
  {
    name: "West Virginia",
    abbreviation: "WV",
  },
  {
    name: "Wisconsin",
    abbreviation: "WI",
  },
  {
    name: "Wyoming",
    abbreviation: "WY",
  },
];

const department = ["Sales", "Marketing", "Engineering", "Human Resources", "Legal"];

export default function CreateEmployee() {
  const {employees, setEmployees} = useContext(Context);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [startDate, setStartDate] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#000";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const submit = (e) => {
    setIsOpen(true);
    const lastId = employees.length > 0 ? Math.max(...employees.map((employee) => employee.id)) : 0;
    const employee = {id: lastId + 1, firstName, lastName, dateOfBirth, startDate, street, city, state, zipCode};
    setEmployees([...employees, employee]);
  };

  return (
    <>
      <Title title="Create Employee" />
      <form>
        <Field type="text" id="first-name" name="First Name" value={firstName} onChange={(e) => setFirstName(e.currentTarget.value)} />
        <Field type="text" id="last-name" name="Last Name" value={lastName} onChange={(e) => setLastName(e.currentTarget.value)} />
        <Suspense fallback={"chargement"}>
          <Datepicker id="date-of-birth" name="Date of Birth" />
          <Datepicker id="start-date" name="Start Date" />
        </Suspense>
        
        <div className={styles["address-container"]}>
          <h2 className={styles.subtitle}>Address</h2>
          <Field type="text" id="street" name="Street" value={street} onChange={(e) => setStreet(e.currentTarget.value)} />
          <Field type="text" id="city" name="City" value={city} onChange={(e) => setCity(e.currentTarget.value)} />
          <Select
            name="State"
            list={states.map((state) => state.name)}
            value="Alabama"
            classNameSelect="class-name-select"
            classNameValue="class-name-value"
            classNameIcon="class-name-icon"
            classNameListContainer="class-name-container"
            classNameList="class-name-list"
            classNameElement="class-name-element"
          />
          <Field type="number" id="zip-code" name="Zip Code" value={zipCode} onChange={(e) => setZipCode(e.currentTarget.value)} />
        </div>
        <Select name="Department" list={department} value="Engineering" classNameSelect="class-name-select" classNameValue="class-name-value" classNameIcon="class-name-icon" classNameListContainer="class-name-container" classNameList="class-name-list" classNameElement="class-name-element" />
        <div className={styles["button-container"]}>
          <Button text="Save" onClick={submit} />
        </div>
      </form>
      <div>
        <Modal
          appElement={document.getElementById("root") || undefined}
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={{
            overlay: {
              backgroundColor: "rgba(0,0,0, 0.8)",
            },
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              borderRadius: 0,
            },
          }}
          contentLabel="Modal"
        >
          <p ref={(_subtitle) => (subtitle = _subtitle)}>Employee Created!</p>
          <Button text="Close" onClick={closeModal} />
        </Modal>
      </div>
    </>
  );
}
