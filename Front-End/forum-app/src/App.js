import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainView from "./MainView";
import ThreadView from "./ThreadView";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainView />}></Route>
        <Route path="/thread/:threadId" element={<ThreadView />}></Route>
      </Routes>
    </>
  );
}

export default App;
