"use client";
import { useState } from "react";
import Calculator from "@/app/components/CalucalotorInput";
import { LineChart, PieChart } from "./components/Charts";
import { intialEVDetails, intialICEDetails } from "@/lib/contants";
import SubmitReset from "./components/SubmitReset";
import TopBar from "./components/TopBar";
import CheckBox from "./components/CheckBox";
import { useTCOCalculator } from "../hooks/index"; 

export default function Home() {
  const [iceDetails, setIceDetails] = useState(intialICEDetails);
  const [evDetails, setEvDetails] = useState(intialEVDetails);
  const [customerUsage, setCustomerUsage] = useState({monthlyKM: 1000,calculationDuration: 5,});
  const [considerBatteryReplacement, setConsiderBatteryReplacement] = useState(false);
  const iceInputFields = [
    {
      label: "Vehicle Price",
      spanText: "$",
      showRange: false,
      value: iceDetails.vehiclePrice,
      placeholder: "Enter vehicle price",
      alert: "Vehicle price cannot be negative",
      onChange: (value: any) => setIceDetails({ ...iceDetails, vehiclePrice: value }),
    },
    {
      label: "Maintenance costs",
      spanText: "$",
      showRange: false,
      value: iceDetails.maintenanceCost,
      placeholder: "Enter maintenance costs",
      alert: "Maintenance costs cannot be negative",
      onChange: (value: any) => setIceDetails({ ...iceDetails, maintenanceCost: value }),
    },
    {
      label: "Insurance costs",
      spanText: "$",
      showRange: false,
      value: iceDetails.insuranceCost,
      placeholder: "Enter insurance costs",
      alert: "Insurance costs cannot be negative",
      onChange: (value: any) => setIceDetails({ ...iceDetails, insuranceCost: value }),
    },
    {
      label: "Resale Percentage",
      spanText: "%",
      showRange: false,
      value: iceDetails.resaleValue,
      placeholder: "Enter resale percentage",
      alert: "Resale percentage must be between 0 and 100",
      onChange: (value: any) => setIceDetails({ ...iceDetails, resaleValue: value }),
    },
    {
      label: "Year of Ownership",
      spanText: "Year",
      showRange: false,
      value: iceDetails.yearOfQwnerShip,
      placeholder: "Enter years of ownership",
      alert: "Year of ownership cannot be negative",
      onChange: (value: any) => setIceDetails({ ...iceDetails, yearOfQwnerShip: value }),
    },
    {
      label: "Vehicle Mileage",
      spanText: "KM",
      showRange: true,
      value: iceDetails.vehicleMileage,
      placeholder: "Enter vehicle mileage",
      alert: "Vehicle mileage cannot be negative",
      onChange: (value: any) => setIceDetails({ ...iceDetails, vehicleMileage: value }),
    },
    {
      label: "Fuel Cost",
      spanText: "$",
      showRange: true,
      value: iceDetails.fuelCost,
      placeholder: "Enter fuel cost",
      alert: "Fuel cost cannot be negative",
      onChange: (value: any) => setIceDetails({ ...iceDetails, fuelCost: value }),
    },
  ];
  
  const evInputFields = [
    {
      label: "EV Price",
      spanText: "$",
      showRange: false,
      value: evDetails.vehiclePrice,
      placeholder: "Enter EV price",
      alert: "EV price cannot be negative",
      onChange: (value: any) => setEvDetails({ ...evDetails, vehiclePrice: value }),
    },
    {
      label: "Maintenance costs",
      spanText: "$",
      showRange: false,
      value: evDetails.maintenanceCost,
      placeholder: "Enter maintenance costs",
      alert: "Maintenance costs cannot be negative",
      onChange: (value: any) => setEvDetails({ ...evDetails, maintenanceCost: value }),
    },
    {
      label: "Insurance costs",
      spanText: "$",
      showRange: false,
      value: evDetails.insuranceCost,
      placeholder: "Enter insurance costs",
      alert: "Insurance costs cannot be negative",
      onChange: (value: any) => setEvDetails({ ...evDetails, insuranceCost: value }),
    },
    {
      label: "Resale Percentage",
      spanText: "%",
      showRange: false,
      value: evDetails.resaleValue,
      placeholder: "Enter resale percentage",
      alert: "Resale percentage must be between 0 and 100",
      onChange: (value: any) => setEvDetails({ ...evDetails, resaleValue: value }),
    },
    {
      label: "Year of Ownership",
      spanText: "Year",
      showRange: false,
      value: evDetails.yearOfQwnerShip,
      placeholder: "Enter years of ownership",
      alert: "Year of ownership cannot be negative",
      onChange: (value: any) => setEvDetails({ ...evDetails, yearOfQwnerShip: value }),
    },
    {
      label: "True Range",
      spanText: "KM",
      value: evDetails.trueRange,
      placeholder: "Enter true range",
      alert: "True range cannot be negative",
      onChange: (value: any) => setEvDetails({ ...evDetails, trueRange: value }),
    },
    {
      label: "Battery Capacity",
      spanText: "kWh",
      value: evDetails.batteryCapacity,
      placeholder: "Enter battery capacity",
      alert: "Battery capacity cannot be negative",
      onChange: (value: any) => setEvDetails({ ...evDetails, batteryCapacity: value }),
    },
    {
      label: "Charging Cost",
      spanText: "$",
      value: evDetails.chargingCost,
      placeholder: "Enter charging cost",
      alert: "Charging cost cannot be negative",
      onChange: (value: any) => setEvDetails({ ...evDetails, chargingCost: value }),
    },
    {
      label: "Battery Replacement Cost",
      spanText: "$",
      showRange: false,
      value: evDetails.batteryReplacementCost,
      placeholder: "Enter battery replacement cost",
      alert: "Battery replacement cost cannot be negative",
      onChange: (value: any) => setEvDetails({ ...evDetails, batteryReplacementCost: value }),
    },
    {
      label: "Battery Replacement Interval",
      spanText: "Years",
      showRange: true,
      value: evDetails.batteryReplacementInterval,
      placeholder: "Enter battery replacement interval",
      alert: "Battery replacement interval cannot be negative",
      onChange: (value: any) => setEvDetails({ ...evDetails, batteryReplacementInterval: value }),
    },
  ];
  
  const customerUsageFields = [
    {
      label: "Monthly KM",
      spanText: "KM",
      showRange: true,
      value: customerUsage.monthlyKM,
      placeholder: "Enter monthly KM",
      alert: "Monthly KM cannot be negative",
      onChange: (value: any) => setCustomerUsage({ ...customerUsage, monthlyKM: value }),
    },
    {
      label: "Calculation Duration",
      spanText: "Years",
      showRange: true,
      value: customerUsage.calculationDuration,
      placeholder: "Enter calculation duration",
      alert: "Calculation duration cannot be negative",
      onChange: (value: any) => setCustomerUsage({ ...customerUsage, calculationDuration: value }),
    },
  ];
  
  
  const { totalCostIce,totalCostEv,icePieChartData,evPieChartData,lineChartData,submitted,loading,error,handleSubmit, } = useTCOCalculator();
  const handleReset = () => {
    setEvDetails(intialEVDetails);
    setIceDetails(intialICEDetails);
    setCustomerUsage({ monthlyKM: 1000, calculationDuration: 5 });
    setConsiderBatteryReplacement(false);
  };

  return (
    <div className="pb-10">
      <TopBar />
      <div className="flex sm:px-24 px-2 flex-col pt-20 ">
        <div className="text-[#19AEA5] p-2 font-bold text-[26px]">TCO Calculator</div>
        {/* ICE Details */}
        <Calculator heading="ICE Details" inputFields={iceInputFields} />
        {/* EV Details */}
        <Calculator heading="EV Details" inputFields={evInputFields} />
        {/* Customer Usage */}
        <Calculator heading="Customer Usage" inputFields={customerUsageFields} />
        <CheckBox
          state={considerBatteryReplacement}
          setState={setConsiderBatteryReplacement}
          title={"Consider Battery Replacement"}
        />
        <SubmitReset handleSubmit={() => handleSubmit(iceDetails, evDetails, customerUsage)} handleReset={handleReset} />
        {submitted && !loading && (
          <div className="flex flex-col mt-5 w-full justify-between items-center ">
            <PieChart data={icePieChartData} totalCost={totalCostIce?.toFixed(2)} title={'ICE Total Price'}/>
            <PieChart data={evPieChartData} totalCost={totalCostEv?.toFixed(2)} title={'EV Total Price'}/>
            <LineChart data={lineChartData} title={"Total Cost of Ownership (TCO) Comparison for ICE and EV"} />
          </div>
        )}
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
      </div>
    </div>
  );
}
