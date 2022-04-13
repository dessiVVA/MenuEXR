const MenuItem = ({item}) => {
  return (
    <div className="card">
      <div className="frame">
        <img src={item.img} alt="" />
      </div>
      <div className="info">
          <div className="info__header">
              <h3>{item.title}</h3>
              <p className="price">${item.price}</p>
          </div>
          <div className="info__description">
              <p>{item.desc}</p>
          </div>
      </div>
    </div>
  );
};

export default MenuItem;
