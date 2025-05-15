import React, { useState } from "react";

const FuelComparisonForm = () => {
  // Add your state variables and setters here (like carPriceCNG, setCarPriceCNG, etc.)

  // Dummy initial state setup (replace with your actual)
  const [carPriceCNG, setCarPriceCNG] = useState(700000);
  const [carPricePetrol, setCarPricePetrol] = useState(600000);
  const [mileageCNG, setMileageCNG] = useState(25);
  const [mileagePetrol, setMileagePetrol] = useState(18);
  const [fuelPriceCNG, setFuelPriceCNG] = useState(60);
  const [fuelPricePetrol, setFuelPricePetrol] = useState(110);
  const [annualDriving, setAnnualDriving] = useState(15000);
  const [ownershipDuration, setOwnershipDuration] = useState(10);
  const [dp, setDp] = useState(100000);
  const [interestRate, setInterestRate] = useState(8);

  // Your existing calculateCost logic here
  const calculateCost = () => {
    // Basic example logic
    const totalFuelCostPetrol = (annualDriving / mileagePetrol) * fuelPricePetrol * ownershipDuration;
    const totalFuelCostCNG = (annualDriving / mileageCNG) * fuelPriceCNG * ownershipDuration;
    const totalLoanAmountPetrol = carPricePetrol - dp + ((carPricePetrol - dp) * (interestRate / 100) * ownershipDuration);
    const totalLoanAmountCNG = carPriceCNG - dp + ((carPriceCNG - dp) * (interestRate / 100) * ownershipDuration);
    let suggestion = "Both options are close in cost";
    if (totalFuelCostPetrol + totalLoanAmountPetrol > totalFuelCostCNG + totalLoanAmountCNG) {
      suggestion = "CNG car is more economical";
    } else if (totalFuelCostPetrol + totalLoanAmountPetrol < totalFuelCostCNG + totalLoanAmountCNG) {
      suggestion = "Petrol car is more economical";
    }
    return {
      totalFuelCostPetrol,
      totalFuelCostCNG,
      totalLoanAmountPetrol,
      totalLoanAmountCNG,
      suggestion,
    };
  };

  const result = calculateCost();

  // Input groups for DRY code
  const inputGroups = [
    {
      title: "Car Prices",
      inputs: [
        { label: "🚗 CNG Car Price", value: carPriceCNG, setter: setCarPriceCNG, placeholder: "₹ 7,00,000" },
        { label: "⛽ Petrol Car Price", value: carPricePetrol, setter: setCarPricePetrol, placeholder: "₹ 6,00,000" },
      ],
      colorFrom: "from-blue-200",
      colorTo: "to-blue-300",
    },
    {
      title: "Mileage",
      inputs: [
        { label: "⛽ CNG Mileage (km/kg)", value: mileageCNG, setter: setMileageCNG, placeholder: "25 km/kg" },
        { label: "⛽ Petrol Mileage (km/l)", value: mileagePetrol, setter: setMileagePetrol, placeholder: "18 km/l" },
      ],
      colorFrom: "from-indigo-200",
      colorTo: "to-indigo-300",
    },
    {
      title: "Fuel Prices",
      inputs: [
        { label: "🛢️ CNG Price (₹/kg)", value: fuelPriceCNG, setter: setFuelPriceCNG, placeholder: "₹ 60" },
        { label: "🛢️ Petrol Price (₹/l)", value: fuelPricePetrol, setter: setFuelPricePetrol, placeholder: "₹ 110" },
      ],
      colorFrom: "from-green-200",
      colorTo: "to-green-300",
    },
    {
      title: "Usage",
      inputs: [
        { label: "📅 Annual Driving (km)", value: annualDriving, setter: setAnnualDriving, placeholder: "15000" },
        { label: "⏳ Ownership Duration (years)", value: ownershipDuration, setter: setOwnershipDuration, placeholder: "10" },
      ],
      colorFrom: "from-purple-200",
      colorTo: "to-purple-300",
    },
    {
      title: "Loan Details",
      inputs: [
        { label: "💰 Down Payment (₹)", value: dp, setter: setDp, placeholder: "₹ 1,00,000" },
        { label: "📈 Interest Rate (%)", value: interestRate, setter: setInterestRate, placeholder: "8" },
      ],
      colorFrom: "from-teal-200",
      colorTo: "to-teal-300",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center p-6 font-sans text-gray-800">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-xl p-10 flex flex-col md:flex-row gap-10">
        
        {/* Left: Form */}
        <form className="flex-1 space-y-8">
          <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8 tracking-tight">
            FuelWise: CNG vs Petrol Cost Comparison
          </h1>

          {inputGroups.map(({ title, inputs, colorFrom, colorTo }, idx) => (
            <section key={idx} className="space-y-5">
              <h3 className="text-2xl font-semibold text-gray-700 border-b pb-2 mb-4">{title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {inputs.map(({ label, value, setter, placeholder }, i) => (
                  <div
                    key={i}
                    className={`p-5 rounded-2xl bg-white bg-opacity-70 backdrop-blur-sm shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300`}
                  >
                    <label className="block mb-2 text-lg font-medium text-gray-700">
                      {label}
                    </label>
                    <input
                      type="number"
                      value={value}
                      onChange={(e) => setter(Number(e.target.value))}
                      placeholder={placeholder}
                      className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
                      min="0"
                    />
                  </div>
                ))}
              </div>
            </section>
          ))}

          <div className="text-center mt-10">
            <button
              type="button"
              onClick={calculateCost}
              className="inline-block px-12 py-4 bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-bold rounded-3xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
            >
              Calculate
            </button>
          </div>
        </form>

        {/* Right: Results */}
        <div className="flex-1 bg-indigo-50 rounded-3xl p-8 shadow-inner border border-indigo-200 flex flex-col justify-center">
          <h2 className="text-3xl font-extrabold mb-6 text-center text-indigo-900">Comparison Results</h2>
          <div className="space-y-6 text-lg text-indigo-900 max-w-md mx-auto">

            <p className="flex justify-between border-b border-indigo-300 pb-3">
              <span>Total Petrol Running Cost:</span>
              <span>₹ {result.totalFuelCostPetrol.toFixed(2)}</span>
            </p>

            <p className="flex justify-between border-b border-indigo-300 pb-3">
              <span>Total CNG Running Cost:</span>
              <span>₹ {result.totalFuelCostCNG.toFixed(2)}</span>
            </p>

            <p className="flex justify-between border-b border-indigo-300 pb-3">
              <span>Total Petrol Ownership Cost:</span>
              <span>₹ {result.totalLoanAmountPetrol.toFixed(2)}</span>
            </p>

            <p className="flex justify-between border-b border-indigo-300 pb-3">
              <span>Total CNG Ownership Cost:</span>
              <span>₹ {result.totalLoanAmountCNG.toFixed(2)}</span>
            </p>

            <p className="mt-8 text-center text-xl font-bold">
              Suggested:{" "}
              <span
                className={`${
                  result.suggestion.includes("CNG") ? "text-green-600" : "text-red-600"
                }`}
              >
                {result.suggestion}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuelComparisonForm;
