import React from "react";
import { createRoot } from "react-dom";
import Item from "./Item";


const App = () => {
  return <div>
    <h1>Playground</h1>
    <Item name="some item" sn="1234" isAvailable={true} />
    <Item name="some other item" sn="dg5s6" isAvailable={false} />
    <Item name="another item" sn="1s3d4f5g" isAvailable={true} />
  </div>
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
