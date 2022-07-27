import React, { useState } from "react";

function DropDown() {
  const [selectedItem, setSelectedItem] = useState();
  const [loading, setLoading] = useState(false);

  const changeHander = (e) => {
    setSelectedItem(e.target.value);
    setLoading(true);
  };

  const placeChangeHander = (e) => {
    setSelectedItem(e.target.value);
    setLoading(true);
  };

  return (
    <div  data-testid="dropDown">
      <h1>{loading && selectedItem}</h1>
      <select
        data-testid="dropDown"
        name="drop"
       // value={selectedItem}
        onChange={changeHander}
      >
        <option value="Mango">Mango</option>
        <option value="Apple">Apple</option>
        <option value="Pomogranate">pomogranate</option>
      </select>

      <select
        data-testid="placeDropDown"
        name="drop"
       // value={selectedItem}
        onChange={placeChangeHander}
      >
        <option value="London">London</option>
        <option value="Cananda">Cananda</option>
        <option value="Newzealand">Newzealand</option>
      </select>

    </div>
  );
}

export default DropDown;
