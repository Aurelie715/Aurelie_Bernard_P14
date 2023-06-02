import React, {useState} from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";



const InputDate = ({id}) => {

  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  );
//   const [startDate, setStartDate] = useState(new Date());
//   const years = Math.range(1990, new Date().getFullYear() + 1, 1);
//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];
//   return (
//     <DatePicker
//       renderCustomHeader={({
//         date,
//         changeYear,
//         changeMonth,
//         decreaseMonth,
//         increaseMonth,
//         prevMonthButtonDisabled,
//         nextMonthButtonDisabled,
//       }) => (
//         <div
//           style={{
//             margin: 10,
//             display: "flex",
//             justifyContent: "center",
//           }}
//         >
//           <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
//             {"<"}
//           </button>
//           <select
//             value={date.getFullYearYear(date)}
//             onChange={({ target: { value } }) => changeYear(value)}
//           >
//             {years.map((option) => (
//               <option key={option} value={option}>
//                 {option}
//               </option>
//             ))}
//           </select>

//           <select
//             value={months[date.getMonth()]}
//             onChange={({ target: { value } }) =>
//               changeMonth(months.indexOf(value))
//             }
//           >
//             {months.map((option) => (
//               <option key={option} value={option}>
//                 {option}
//               </option>
//             ))}
//           </select>

//           <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
//             {">"}
//           </button>
//         </div>
//       )}
//       selected={startDate}
//       onChange={(date) => setStartDate(date)}
//     />
//   );
  };

  export default InputDate;