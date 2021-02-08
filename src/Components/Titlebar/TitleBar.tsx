import React from "react";
import { LineOutlined, BorderOutlined, CloseOutlined } from "@ant-design/icons";

export default function TitleBar() {
  return (
    <div id="titleBar">
      <div id="appTitle">Electron86</div>
      <CloseOutlined style={{ color: "#fff", marginInline: "0.5rem" }} />
      <BorderOutlined style={{ color: "#fff", marginInline: "0.5rem" }} />
      <LineOutlined style={{ color: "#fff", marginInline: "0.5rem" }} />
    </div>
  );
}
