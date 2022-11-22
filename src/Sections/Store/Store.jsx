import "./Store.css";

const Store = () => {
  return (
    <section className="store flex_center" data-aos={"fade-up"}>
      <div className="store_info flex_center">
        <p className="store_name">eShop Store</p>
        <address>9th floor, X Faisal St, Giza, Egypt</address>
        <p className="store_open">Opening Hours</p>
        <p className="store_time">
          Monday to Friday: 9:00 AM – 9:00 PM <br />
          Saturday to Sunday: 9:30 AM – 8:00 PM
        </p>
      </div>
    </section>
  );
};

export default Store;
