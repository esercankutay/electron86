import { hot } from "react-hot-loader";
import * as React from "react";
import "antd/dist/antd.min.css";
import { Card } from "antd";
import TitleBar from "./Components/Titlebar/TitleBar";
import Memory from "./Components/Memory/Memory";

class App extends React.Component {
  render() {
    return (
      <div>
        <TitleBar />
        <Memory />
      </div>
    );
  }
}

export default hot(module)(App);
