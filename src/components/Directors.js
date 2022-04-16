import React from "react";
import { directors } from "../data";
import Director from "./Director";

const renderDirectors = (directors).map(item => {console.log(item)
return <Director key={item.name} data={item}/>})


function Directors() {
  return <div>
    <h1>Directors Page</h1>
    {renderDirectors}
    </div>;
}

export default Directors;
