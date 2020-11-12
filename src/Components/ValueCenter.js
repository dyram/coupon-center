import React from "react";
import { Card, Col, Row, Typography } from "antd";
import GenerateCode from "./OtherGenerateCode";
import SpecialGenerateCode from "./SpecialGenerateCode";
const { Title } = Typography;
export default function ValueCenter(props) {
  let data;
  if (!data) {
    data = [
      {
        type: "Special",
        params: {
          title: "Introducting HBO MAX.",
          subtitle: "On Cricket Wireless.",
          description:
            "Redeem promo code at hbomax.com.HBO Max auto-renews after 30 days at then prevailing rate unless you cancel through HBO Max."
        }
      },
      {
        type: "ordinary",
        params: {
          title: "NetFlix",
          type: "Free Subscription",
          useby: "Oct 31 2020"
        }
      },
      {
        type: "ordinary",
        params: {
          title: "15% Discount",
          type: "On First Payment",
          useby: "Oct 20 2020"
        }
      },
      {
        type: "ordinary",
        params: {
          title: "Spotify Music",
          type: "3 Month Free Trial",
          useby: "Oct 21 2020"
        }
      }
    ];
  }

  return (
    <div className="setup-view">
      <div id="colorstrip"></div>
      <Title className="text-setup" level={5}>
        Value Center
      </Title>
      <div className="value-view">
        {data &&
          data.map((plan, planIndex) =>
            plan.type === "Special" ? (
              <div>
                <div className="special-align1" index={planIndex}>
                  <SpecialGenerateCode
                    title={plan.params.title}
                    subtitle={plan.params.subtitle}
                    description={plan.params.description}
                  />
                </div>
                <br />
              </div>
            ) : (
              plan.type === "ordinary" && (
                <div>
                  <div className="special-align1" index={planIndex}>
                    <GenerateCode
                      title={plan.params.title}
                      type={plan.params.type}
                      useby={plan.params.useby}
                    />
                  </div>
                  <br />
                </div>
              )
            )
          )}
      </div>
    </div>
  );
}
