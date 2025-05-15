import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import "./App.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function App() {
  const [carPriceCNG, setCarPriceCNG] = useState(500000);
  const [carPricePetrol, setCarPricePetrol] = useState(450000);
  const [mileageCNG, setMileageCNG] = useState(20);
  const [mileagePetrol, setMileagePetrol] = useState(15);
  const [fuelPriceCNG, setFuelPriceCNG] = useState(50);
  const [fuelPricePetrol, setFuelPricePetrol] = useState(110);
  const [annualDriving, setAnnualDriving] = useState(15000);
  const [ownershipDuration, setOwnershipDuration] = useState(5);

  const [errors, setErrors] = useState({});
  const [result, setResult] = useState(null);

  const validateInputs = () => {
    const errs = {};
    if (!carPriceCNG || carPriceCNG <= 0)
      errs.carPriceCNG = "Enter valid CNG car price";
    if (!carPricePetrol || carPricePetrol <= 0)
      errs.carPricePetrol = "Enter valid Petrol car price";
    if (!mileageCNG || mileageCNG <= 0)
      errs.mileageCNG = "Enter valid CNG mileage";
    if (!mileagePetrol || mileagePetrol <= 0)
      errs.mileagePetrol = "Enter valid Petrol mileage";
    if (!fuelPriceCNG || fuelPriceCNG <= 0)
      errs.fuelPriceCNG = "Enter valid CNG fuel price";
    if (!fuelPricePetrol || fuelPricePetrol <= 0)
      errs.fuelPricePetrol = "Enter valid Petrol fuel price";
    if (!annualDriving || annualDriving <= 0)
      errs.annualDriving = "Enter valid annual driving km";
    if (!ownershipDuration || ownershipDuration <= 0)
      errs.ownershipDuration = "Enter valid ownership duration";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  useEffect(() => {
    if (validateInputs()) {
      const totalFuelCostCNG =
        ((annualDriving / mileageCNG) * fuelPriceCNG) * ownershipDuration;
      const totalFuelCostPetrol =
        ((annualDriving / mileagePetrol) * fuelPricePetrol) * ownershipDuration;

      const totalCostCNG = carPriceCNG + totalFuelCostCNG;
      const totalCostPetrol = carPricePetrol + totalFuelCostPetrol;

      let suggestion = "";
      if (totalCostCNG < totalCostPetrol) suggestion = "CNG is more economical.";
      else if (totalCostPetrol < totalCostCNG)
        suggestion = "Petrol is more economical.";
      else suggestion = "Both options cost about the same.";

      setResult({
        totalFuelCostCNG,
        totalFuelCostPetrol,
        totalCostCNG,
        totalCostPetrol,
        suggestion,
      });
    } else {
      setResult(null);
    }
  }, [
    carPriceCNG,
    carPricePetrol,
    mileageCNG,
    mileagePetrol,
    fuelPriceCNG,
    fuelPricePetrol,
    annualDriving,
    ownershipDuration,
  ]);

  const chartData = {
    labels: Array.from({ length: ownershipDuration }, (_, i) => `Year ${i + 1}`),
    datasets: [
      {
        label: "CNG Total Cost",
        data: Array.from({ length: ownershipDuration }, (_, i) =>
          (carPriceCNG + ((annualDriving / mileageCNG) * fuelPriceCNG) * (i + 1)).toFixed(2)
        ),
        borderColor: "#2a9d8f",
        backgroundColor: "rgba(42, 157, 143, 0.3)",
        tension: 0.3,
      },
      {
        label: "Petrol Total Cost",
        data: Array.from({ length: ownershipDuration }, (_, i) =>
          (carPricePetrol + ((annualDriving / mileagePetrol) * fuelPricePetrol) * (i + 1)).toFixed(2)
        ),
        borderColor: "#e76f51",
        backgroundColor: "rgba(231, 111, 81, 0.3)",
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="container">
      <h1 className="title">FuelWise Calculator</h1>

      <div className="form-grid">
        <div className="form-group">
          <label>Car Price (CNG): ₹{carPriceCNG.toLocaleString()}</label>
          <input
            type="range"
            min="100000"
            max="2000000"
            step="10000"
            value={carPriceCNG}
            onChange={(e) => setCarPriceCNG(Number(e.target.value))}
          />
          {errors.carPriceCNG && <small className="error">{errors.carPriceCNG}</small>}
        </div>

        <div className="form-group">
          <label>Car Price (Petrol): ₹{carPricePetrol.toLocaleString()}</label>
          <input
            type="range"
            min="100000"
            max="2000000"
            step="10000"
            value={carPricePetrol}
            onChange={(e) => setCarPricePetrol(Number(e.target.value))}
          />
          {errors.carPricePetrol && <small className="error">{errors.carPricePetrol}</small>}
        </div>

        <div className="form-group">
          <label>Mileage (CNG km/kg): {mileageCNG}</label>
          <input
            type="range"
            min="5"
            max="40"
            step="1"
            value={mileageCNG}
            onChange={(e) => setMileageCNG(Number(e.target.value))}
          />
          {errors.mileageCNG && <small className="error">{errors.mileageCNG}</small>}
        </div>

        <div className="form-group">
          <label>Mileage (Petrol km/l): {mileagePetrol}</label>
          <input
            type="range"
            min="5"
            max="40"
            step="1"
            value={mileagePetrol}
            onChange={(e) => setMileagePetrol(Number(e.target.value))}
          />
          {errors.mileagePetrol && <small className="error">{errors.mileagePetrol}</small>}
        </div>

        <div className="form-group">
          <label>Fuel Price (CNG ₹/kg): ₹{fuelPriceCNG}</label>
          <input
            type="range"
            min="10"
            max="100"
            step="1"
            value={fuelPriceCNG}
            onChange={(e) => setFuelPriceCNG(Number(e.target.value))}
          />
          {errors.fuelPriceCNG && <small className="error">{errors.fuelPriceCNG}</small>}
        </div>

        <div className="form-group">
          <label>Fuel Price (Petrol ₹/liter): ₹{fuelPricePetrol}</label>
          <input
            type="range"
            min="50"
            max="200"
            step="1"
            value={fuelPricePetrol}
            onChange={(e) => setFuelPricePetrol(Number(e.target.value))}
          />
          {errors.fuelPricePetrol && <small className="error">{errors.fuelPricePetrol}</small>}
        </div>

        <div className="form-group">
          <label>Annual Driving (km): {annualDriving.toLocaleString()}</label>
          <input
            type="range"
            min="1000"
            max="50000"
            step="500"
            value={annualDriving}
            onChange={(e) => setAnnualDriving(Number(e.target.value))}
          />
          {errors.annualDriving && <small className="error">{errors.annualDriving}</small>}
        </div>

        <div className="form-group">
          <label>Ownership Duration (years): {ownershipDuration}</label>
          <input
            type="range"
            min="1"
            max="15"
            step="1"
            value={ownershipDuration}
            onChange={(e) => setOwnershipDuration(Number(e.target.value))}
          />
          {errors.ownershipDuration && <small className="error">{errors.ownershipDuration}</small>}
        </div>
      </div>

      {result && (
        <div className="result-card" aria-live="polite">
          <p>
            <strong>Total Fuel Cost (CNG):</strong> ₹{result.totalFuelCostCNG.toFixed(2)}
          </p>
          <p>
            <strong>Total Fuel Cost (Petrol):</strong> ₹{result.totalFuelCostPetrol.toFixed(2)}
          </p>
          <p>
            <strong>Total Ownership Cost (CNG):</strong> ₹{result.totalCostCNG.toFixed(2)}
          </p>
          <p>
            <strong>Total Ownership Cost (Petrol):</strong> ₹{result.totalCostPetrol.toFixed(2)}
          </p>
          <p className="suggestion">{result.suggestion}</p>
        </div>
      )}

      {result && (
        <div className="chart-container" aria-label="Cost comparison chart">
          <Line data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      )}
    </div>
  );
}
