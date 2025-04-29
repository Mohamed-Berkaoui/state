function Navbar({ setState ,state}) {
  return (
    <div className="navbar">
      <h2>logo</h2>

      <div>
        <p>home </p>
        <p>about</p>
        <input
          type="text"
          onChange={function (e) {
            setState({...state,title:e.target.value});//"ùd:f"
          }}
        />
        <select  id=""  onChange={function(e){
          setState({...state,category:e.target.value})
        }}>
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
