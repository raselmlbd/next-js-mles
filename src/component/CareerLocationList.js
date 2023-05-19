import { useState } from "react";

export default function CareerLocationList({data}) {
  const [selected, setSelected] = useState(null);
  const handleChange = (event) => {
    const value = event.target.value;
    setSelected(value);
  };
  return (
    <div className="position wow animate__animated">
      <div className="form-group">
        <select className="select" name="" id="" onChange={handleChange}>
          <option value="">Choose location</option>
          {data && data.items.map((eachItem, i) => <option key={i} value={eachItem.locationLink}>{eachItem.locationName}</option>)}
        </select>
        <a href={selected} className="btn btn-position">View positions</a>
      </div>
    </div>
  )
}
