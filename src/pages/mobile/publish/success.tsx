import React, { useEffect, useState } from "react";
import { WhiteSpace, WingBlank, List, Button } from "antd-mobile";
import { useParams, useHistory } from "react-router-dom";
import orderService from "../../../service/order.service";

function PublishSuccess() {
  let { id } = useParams<{ id: string }>();
  const history = useHistory();
  function handleClick() {
    history.push(`/mobile/publish/${id}`);
  }
  return (
    <WingBlank size="lg">
      <h2>預購成功</h2>
      <div style={{ height: "65px" }}></div>
      <div
        style={{
          width: "100%",
          height: "60px",
          borderTop: "1px solid #CCCCCC",
          background: "#F5F5F5",
          position: "fixed",
          bottom: 0,
          left: 0,
          zIndex: 4,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            style={{ width: "120px", margin: "5px" }}
            type="primary"
            onClick={handleClick}
          >
            再預購一次
          </Button>
        </div>
      </div>
    </WingBlank>
  );
}
export default PublishSuccess;
