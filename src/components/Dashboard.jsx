import MenuItem from "./MenuItem";

const Dashboard = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>Our Menu</h1>
        <div className="line"></div>
      </div>
      <nav>
          <ul>
              <li>all</li>
              <li>breakfast</li>
              <li>lunch</li>
              <li>shakes</li>
          </ul>
      </nav>
      <MenuItem />
    </div>
  );
};

export default Dashboard;
