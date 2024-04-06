import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { DashHeader } from "../components/DashHeader";
import dummyData from "../assets/dummy_non_expired";
import Card from "../components/Card";
import expiredFoodData from "../assets/dummy_expired";

export function ExpiredFood() {
  const [selectedCard, setSelectedCard] = useState(null);
  const navigate = useNavigate();

  return (
    <div className=" bg-primary-100">
      <DashHeader />
      <div className="non-expired bg-primary-100">
        <div className="cards">
          {expiredFoodData.map((data, index) => (
            <Card
              key={index}
              data={data}      
            />
          ))}
        </div>
      </div>
    </div>
  );
}
