import React from "react";
import { actors } from "../data";
import Actor from "./Actor";

const renderActors = (actors).map(item => <Actor key={item.name} data={item}/>)

function Actors() {
  return <div>
    <h1>Actors Page</h1>
    {renderActors}
    </div>;
}

export default Actors;
