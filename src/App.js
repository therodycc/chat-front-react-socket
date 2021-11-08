import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
// components
import { chat } from "./components/chat";
import { join } from "./components/join";

function App() {
  return (
    <Router>
      <Route path="/" exact component={join} />
      <Route path="/chat" exact component={chat} />
    </Router>
  );
}

export default App;
