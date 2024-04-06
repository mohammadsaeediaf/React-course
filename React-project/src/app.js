// import { useState } from "react";

import { useState } from "react";

// const messages = [
//   "Learn React ⚛️",
//   "Apply for jobs 💼",
//   "Invest your new income 🤑",
// ];

// export default function App() {
//   const [step, setStep] = useState(1);
//   const [isOpen, setIsOpen] = useState(true);
//   // const [test, setTest] = useState({ name: "mohammad" });

//   function handlePrevious() {
//     if (step > 1) {
//       setStep((step) => step - 1);
//     }
//   }

//   function handleNext() {
//     if (step < 3) {
//       setStep((step) => step + 1);
//     }
//     // setTest({ name: "Ali" });

//     // Bad Practice
//     // test.name = "Ali";
//   }

//   return (
//     <>
//       <div className="close" onClick={() => setIsOpen(() => !isOpen)}>
//         &times;
//       </div>
//       {isOpen && (
//         <div className="steps">
//           <div className="numbers">
//             <div className={step >= 1 ? "active" : ""}>1</div>
//             <div className={step >= 2 ? "active" : "two"}>2</div>
//             <div className={step >= 3 ? "active" : "three"}>3</div>
//           </div>
//           {/* <p className="message">{`Step ${step} : ${messages[step - 1]}`}</p> */}
//           <StepMessage step={step}>{messages[step - 1]} </StepMessage>

//           <div className="buttons">
//             <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
//               <span>👈</span> previous
//             </Button>

//             <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
//               Next <span>👉</span>
//             </Button>
//           </div>
//         </div>
//       )}
//     </>
//   );

//   function StepMessage({ step, children }) {
//     return (
//       <div className="message">
//         <h3>{`Step ${step}`} </h3>
//         {children}
//       </div>
//     );
//   }

//   function Button({ bgColor, textColor, onClick, children }) {
//     return (
//       <button
//         style={{ backgroundColor: bgColor, color: textColor }}
//         onClick={onClick}
//       >
//         {children}
//       </button>
//     );
//   }
// }

// //-----------------Date Counter-------------------//

// // export default function App() {
// //   const [step, setStep] = useState(1);
// //   const [count, setCount] = useState(1);
// //   const date = new Date();

// //   date.setDate(date.getDate() + count);

// //   function handleReset() {
// //     setCount(1);
// //     setStep(1);
// //   }

// //   return (
// //     <div>
// //       <div>
// //         <input
// //           type="range"
// //           min={1}
// //           max={10}
// //           value={step}
// //           onChange={(e) => setStep(Number(e.target.value))}
// //         />
// //         {/* <button onClick={() => setStep(step - 1)}>-</button> */}
// //         step : {step}
// //         {/* <button onClick={() => setStep(step + 1)}>+</button> */}
// //       </div>
// //       <div>
// //         <button onClick={() => setCount(count - step)}>-</button>
// //         {/* count : {count} */}
// //         <input
// //           type="number"
// //           value={count}
// //           onChange={(e) => setCount(Number(e.target.value))}
// //         />
// //         <button onClick={() => setCount(count + step)}>+</button>
// //       </div>
// //       <div>
// //         <h2>
// //           {count} Day from today is {JSON.stringify(date.toDateString())}
// //         </h2>
// //         {step !== 1 || count !== 1 ? (
// //           <button onClick={handleReset}>Reset</button>
// //         ) : null}
// //       </div>
// //     </div>
// //   );
// // }

//-----------------FAQ Section-------------------//

// import { useState } from "react";
// import "./index.css";

// const faqs = [
//   {
//     title: "Where are these chairs assembled?",
//     text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
//   },
//   {
//     title: "How long do I have to return my chair?",
//     text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
//   },
//   {
//     title: "Do you ship to countries outside the EU?",
//     text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
//   },
// ];

// export default function App() {
//   return (
//     <div>
//       <Accordion data={faqs} />
//     </div>
//   );
// }

// function Accordion({ data }) {
//   return (
//     <div className="accordion">
//       {data.map((el, i) => (
//         <AccordiaonItem text={el.text} title={el.title} num={i} key={i} />
//       ))}
//     </div>
//   );
// }

// function AccordiaonItem({ text, title, num }) {
//   const [isOpen, setIsOpen] = useState(false);
//   function handleToggle() {
//     setIsOpen((isOpen) => !isOpen);
//   }

//   return (
//     <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
//       <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
//       <p className="title">{title}</p>
//       <p className="icon">{isOpen ? "-" : "+"}</p>
//       <div className="content-box">{isOpen && text}</div>
//     </div>
//   );
// }
//------------------Bill Calculator----------------------//

export default function App() {
  return (
    <div className="percentage">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        Did you like the service?
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        Did your friend likes the service?
      </SelectPercentage>

      {bill > 0 && (
        <>
          <Output tip={tip} bill={bill} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the Bill?</label>
      <input
        type="number"
        value={bill}
        placeholder="Bill value"
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div>
      {children}
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">it was okay(5%)</option>
        <option value="10">it was good (10%)</option>
        <option value="20">Absolutely Amazing!(20%)</option>
      </select>
    </div>
  );
}

function Output({ tip, bill }) {
  return (
    <h3>
      You pay ${bill + tip} (${bill} + ${tip} tip)
    </h3>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
