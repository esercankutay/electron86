import { hot } from "react-hot-loader";
import * as React from "react";
import "antd/dist/antd.min.css";
import { Card } from "antd";
import TitleBar from "./Components/Titlebar/TitleBar";
import Memory from "./Components/Memory/Memory";
import Editor from "./Components/Editor/Editor";
import Registers from "./Components/Registers/Registers";

class App extends React.Component {
  render() {
    return (
      <div id="main-container">
        <TitleBar />
        <div id="component-container">
          <Memory />
          <Editor />
        </div>
        <Registers />
      </div>
    );
  }
}

export default hot(module)(App);
