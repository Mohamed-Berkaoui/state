function Navbar({ setState }) {
  return (
    <div className="navbar">
      <h2>logo</h2>

      <div>
        <p>home </p>
        <p>about</p>
        <input
          type="text"
          onChange={function (e) {
            setState(e.target.value);
          }}
        />
        <select  id="" >
          <option value="all">all</option>
          <option value="men's clothing">men's clothing</option>
          <option value="women's clothing">women's clothing</option>
          <option value="jewelery">jewelery</option>
          <option value="electronics">electronics</option>
        </select>
      </div>
    </div>
  );
}

export default Navbar;
