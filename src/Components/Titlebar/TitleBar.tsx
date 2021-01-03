import React from "react";
import { DownOutlined, UpOutlined, CloseOutlined } from "@ant-design/icons";

export default function TitleBar() {
  return (
    <div id="titleBar">
      <div id="appTitle">Electron86</div>
      <div id="buttonGroup">
        <DownOutlined style={{ color: "#fff", margin: "0.4rem" }} />
        <UpOutlined style={{ color: "#fff", margin: "0.4rem" }} />
        <CloseOutlined style={{ color: "#fff", margin: "0.4rem" }} />
      </div>
    </div>
  );
}
