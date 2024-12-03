import { useState } from "react";
import Counter from "./components/Counter";
import PostComponent from "./components/PostComponent";
import StopWatchComponent from "./components/StopWatchComponent";
import ToggleComponent from "./components/ToggleComponent";

const App = () => {

  const [activeTab , setActiveTab] = useState("Counter");

  function renderComponent() {
    switch (activeTab) {
      case "Counter":
        return <Counter />
      case "PostComponent":
        return (
          <div>
            <PostComponent name={"vite"} subtitle={"20,000 followers"} image={"/public/vite.svg"} time={"12m"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}/>
            <PostComponent name={"Sumit"} subtitle={"Promoter"} image={"/public/vite.svg"}  description={" Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"}/>
          </div>
        ) 
      case "StopWatch":
        return <StopWatchComponent />
      case "ToggleComponent":
        return <ToggleComponent />
      default:
        return <h1>Select a Tab</h1>
    }
  }

  return (
    <div>
        <button onClick={() => setActiveTab("Counter")}>Counter</button>
        <button onClick={() => setActiveTab("PostComponent")}>Posts</button>
        <button onClick={() => setActiveTab("StopWatch")}>StopWatch</button>
        <button onClick={() => setActiveTab("ToggleComponent")}>ToggleMessage</button>

        <div>{renderComponent()}</div>
    </div>
  );
};




export default App;
