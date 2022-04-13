const MenuItem = () => {
  return (
    <div className="card">
      <div className="frame">
        <img src="./" alt="" />
      </div>
      <div className="info">
          <div className="info__header">
              <h3>Title</h3>
              <p className="price">$15</p>
          </div>
          <div className="info__description">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum perferendis enim culpa ut ipsa, nobis assumenda cupiditate eius quisquam veniam.</p>
          </div>
      </div>
    </div>
  );
};

export default MenuItem;
