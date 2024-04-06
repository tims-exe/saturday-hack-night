import { DashHeader } from "../components/DashHeader";
import { useEffect } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import industryDummy from "../assets/dummy_industrial";
import IndustrialCard from "../components/IndustrialCard";

export function IndustrialSymbiosis(){
    
    return <div className="h-screen">
        <DashHeader/>
        <div className="non-expired bg-primary-100">
        <div className="cards">
          {industryDummy.map((data, index) => (
            <IndustrialCard
              key={index}
              data={data}
            />
          ))}
        </div>
      </div>
    </div>
}