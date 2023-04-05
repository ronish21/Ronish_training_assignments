import React from 'react';
import './chocolate.css';

const chocolates = [
  {
    id: 1,
    name: "Chocolate",
    price: "Rs.200",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_6FNfYP_f4FEki4w_pLvrhl1h0h28kPRYXg&usqp=CAU"
  },
  {
    id: 2,
    name: "Oreo",
    price: "Rs.100",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY5fi3GVS5mC4Z4JBQPddIfuz0cAm4jzmvBw&usqp=CAU"
  },
  {
    id: 3,
    name: "Nutty Chocobar",
    price: "Rs.120",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ1PkJ-tv4pA7ZxsMtBuTDDMJCXKxvUJeI0A&usqp=CAU"
  }
];

function Chocolate() {
  return (
    <div>
      <h1>Ice cream</h1>
      <div className="chocolate-container">
        {chocolates.map((chocolate) => (
          <div className="chocolate-card" key={chocolate.id}>
            <img src={chocolate.image} alt={chocolate.name} />
            <h2>{chocolate.name}</h2>
            <p>{chocolate.price}</p>
            <button>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chocolate;
