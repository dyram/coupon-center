import React, { useState, useEffect } from "react";
import { Button, Typography, Divider } from "antd";
const Cryptostring = require("crypto-random-string");
const { Title, Text } = Typography;
export default function GenerateCode(props) {
  const [code, setCode] = useState(null);
  const [currentdate, setCurrentdate] = useState(null);
  const [openoffer, setOpenOffer] = useState(false);
  const [opencode, setOpencode] = useState(false);

  const generateCode = () => {
    setCode(Cryptostring({ length: 10, type: "alphanumeric" }));
    setOpencode(true);
  };
  function isLater(dateString1, dateString2) {
    return dateString1 > dateString2;
  }
  useEffect(() => {
    let separator = " ";
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    let newDate = new Date();
    let date = newDate.getDate();
    // let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    setCurrentdate(
      `${monthNames[newDate.getMonth()]}${separator}${date}${separator}${year}`
    );
    if (isLater(props.useby, currentdate)) {
      // console.log(true, openoffer);
      setOpenOffer(true);
    } else {
      setOpenOffer(false);
    }
  });
  // const getCurrentDate = (separator = "") => {
  //   let newDate = new Date();
  //   let date = newDate.getDate();
  //   let month = newDate.getMonth() + 1;
  //   let year = newDate.getFullYear();
  //   setCurrentdate(
  //     `${year}${separator}${
  //       month < 10 ? `0${month}` : `${month}`
  //     }${separator}${date}`
  //   );
  // };
  const cancelcode = () => {
    setCode(null);
    setOpencode(false);
  };

  return (
    <div className="ticket-view1">
      <div className="ticket-internal">
        <Divider className="divide-setup" dashed></Divider>
        <Title level={5}>{props.title}</Title>
        <Text>{props.type}</Text>
        <Divider className="divide-setup" dashed></Divider>
        <div className="element">
          <Text>Use By {props.useby}</Text>
        </div>
        <Divider className="divide-setup" dashed></Divider>
        <div>
          {opencode ? (
            <div>
              <Text type="success">{code}</Text>
              <br />
              <Button onClick={cancelcode}>Cancel</Button>
            </div>
          ) : (
            <div>
              {openoffer ? (
                <Button onClick={generateCode}>
                  <Text type="success">REDEEM COUPON</Text>
                </Button>
              ) : (
                <Button>
                  <Text type="danger">OFFER EXPIRED</Text>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
