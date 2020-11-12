import React, { useState } from "react";
import { Button, Typography } from "antd";
import logo from "../hbo_max.png";
const Cryptostring = require("crypto-random-string");
const { Title, Text } = Typography;
export default function SpecialGenerateCode(props) {
  const [code, setCode] = useState(null);
  const [opencode, setOpencode] = useState(false);

  const generateCode = () => {
    setCode(Cryptostring({ length: 10, type: "alphanumeric" }));
    setOpencode(true);
  };
  const cancelcode = () => {
    setCode(null);
    setOpencode(false);
  };

  return (
    <div className="special-setup">
      {/* <img src={logo} alt="logo" className="photo" /> */}
      <div className="special-view">
        <br />
        <Title level={5}>
          {props.title} <br />
          {props.subtitle}
        </Title>
        <br />
        <Text>Use By {props.description}</Text>
        <br />
        <br />
        <div>
          {opencode ? (
            <div>
              <Text type="success">{code}</Text>
              <br />
              <Button onClick={cancelcode}>Cancel</Button>
            </div>
          ) : (
            <Button onClick={generateCode}>
              <Text type="success">GENERATE CODE</Text>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
