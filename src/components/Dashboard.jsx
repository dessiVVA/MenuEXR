import MenuItem from "./MenuItem";
import data from "../data"
import { useState } from "react";

const Dashboard = () => {
    const [items, setItems] = useState(data);

    const handleFilter = (e) => {
        const filter = e.target.innerHTML
        const filteredItems = data.filter(x => x.category === filter);
        setItems(filteredItems)
    }
    const handleAll = () =>{
        setItems(data)
    }
    return (
    <div className="container">
      <div className="header">
        <h1>Our Menu</h1>
        <div className="line"></div>
      </div>
      <nav>
        <ul>
          <li onClick={handleAll}>all</li>
          <li onClick={handleFilter}>breakfast</li>
          <li onClick={handleFilter}>lunch</li>
          <li onClick={handleFilter}>shakes</li>
        </ul>
      </nav>
      <div className="menu">
        {items.map((x) => <MenuItem key={x.id} item={x}/>)}
      </div>
    </div>
  );
};

export default Dashboard;
