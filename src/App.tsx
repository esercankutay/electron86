import { hot } from "react-hot-loader";
import * as React from "react";
import "antd/dist/antd.min.css";
import { Card } from "antd";

class App extends React.Component {
  render() {
    return (
      <Card title="Cart deneme">
        <p>Deneme içerik kart içeriği</p>
      </Card>
    );
  }
}

export default hot(module)(App);
