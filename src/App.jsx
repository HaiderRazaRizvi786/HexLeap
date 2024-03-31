
import "./App.css";
import { Component1 } from "./components/Component1";
import { Component2 } from "./components/Component2";
import { SwitchButton } from "./components/SwitchButton";

function App() {
  return (
    <div className="h-full w-full flex flex-col APP ">
      <SwitchButton></SwitchButton>
      <Component1></Component1>
      <Component2></Component2>
    </div>
  );
}

export default App;
