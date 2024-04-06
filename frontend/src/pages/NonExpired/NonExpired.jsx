import React, { useState } from "react";
import Card from "../../components/Card";
import dummyData from "../../assets/dummy_non_expired";
import "./NonExpired.css";
import { DashHeader } from "../../components/DashHeader";
import { useEffect } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NonExpired = () => {
  return (
    <>
      <DashHeader heading="Non Expired" />
      <div className="non-expired bg-primary-100">
        <div className="cards">
          {dummyData.map((data, index) => (
            <Card
              key={index}
              data={data}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default NonExpired;
