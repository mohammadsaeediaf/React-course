import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app.js";

// const pizzaData = [
//   {
//     name: "Focaccia",
//     ingredients: "Bread with italian olive oil and rosemary",
//     price: 6,
//     photoName: "pizzas/focaccia.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Margherita",
//     ingredients: "Tomato and mozarella",
//     price: 10,
//     photoName: "pizzas/margherita.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Spinaci",
//     ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
//     price: 12,
//     photoName: "pizzas/spinaci.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Funghi",
//     ingredients: "Tomato, mozarella, mushrooms, and onion",
//     price: 12,
//     photoName: "pizzas/funghi.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Salamino",
//     ingredients: "Tomato, mozarella, and pepperoni",
//     price: 15,
//     photoName: "pizzas/salamino.jpg",
//     soldOut: true,
//   },
//   {
//     name: "Pizza Prosciutto",
//     ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
//     price: 18,
//     photoName: "pizzas/prosciutto.jpg",
//     soldOut: false,
//   },
// ];

// function Header() {
//   return (
//     <header className="header">
//       <h1>Fast React Pizza co.</h1>
//     </header>
//   );
// }
// function Menu() {
//   const pizzas = pizzaData;
//   return (
//     <div className="menu">
//       <h2>OUR MENU</h2>
//       <p>
//         Authuntic Italian cuicine. 6 creative dishes to choose from. All from
//         our stone oven, All organic, All delisious
//       </p>
//       <ul className="pizzas">
//         {pizzas.map((pizza) => {
//           return <Pizza pizzaObj={pizza} key={pizza.name} />;
//         })}
//       </ul>
//     </div>
//   );
// }
// function Pizza({ pizzaObj }) {
//   return (
//     <div>
//       <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : " "}`}>
//         <img src={pizzaObj.photoName} alt={pizzaObj.name} />
//         <div>
//           <h3>{pizzaObj.name}</h3>
//           <p>{pizzaObj.ingredients}</p>
//           <span>${pizzaObj.price}</span>
//         </div>
//       </li>
//     </div>
//   );
// }
// function Footer() {
//   const hour = new Date().getHours();
//   const openHour = 12;
//   const closeHour = 22;
//   console.log(hour);
//   const isOpen = hour > openHour && hour < closeHour;

//   return (
//     <footer className="footer">
//       <div className="order">
//         {isOpen ? (
//           <p className="order-para">
//             we're currently open from {openHour}:00 to {closeHour}:00 come visit
//             us or order online
//           </p>
//         ) : (
//           <p className="order-para">
//             We're currently closed please Visit us between {openHour}.00 and{" "}
//             {closeHour}.00 o'clock
//           </p>
//         )}
//         <button className="btn">Order Now!</button>
//       </div>
//     </footer>
//   );
// }

// function App() {
//   return (
//     <div className="container">
//       <Header />
//       <Menu />
//       <Footer />
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//*--------- End Pizza Menu project ---------*//
