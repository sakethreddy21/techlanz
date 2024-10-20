import { useState } from "react";

export const useTCOCalculator = () => {
  const [totalCostIce, setTotalCostIce] = useState<number | null>(null);
  const [totalCostEv, setTotalCostEv] = useState<number | null>(null);
  const [icePieChartData, setIcePieChartData] = useState<any>(null);
  const [evPieChartData, setEvPieChartData] = useState<any>(null);
  const [lineChartData, setLineChartData] = useState<any>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (iceDetails: any, evDetails: any, customerUsage: any) => {
    setLoading(true);
    setError(null); // Reset error before submission

    try {
      console.log("Submitting:", {
        iceDetails,
        evDetails,
        customerUsage,
      });

      const response = await fetch("https://sakethbackend.vercel.app/tasks/calculate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          iceDetails,
          evDetails,
          customerUsage,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const {
        iceTotalCost,
        evTotalCost,
        icePieChartData,
        evPieChartData,
        lineChartData,
      } = data;

      console.log(data)

      setTotalCostIce(iceTotalCost);
      setTotalCostEv(evTotalCost);
      setLineChartData(lineChartData);
      setEvPieChartData(evPieChartData);
      setIcePieChartData(icePieChartData);
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting data:", error);
      setError("Failed to submit data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return {
    totalCostIce,
    totalCostEv,
    icePieChartData,
    evPieChartData,
    lineChartData,
    submitted,
    loading,
    error,
    handleSubmit,
  };
};

