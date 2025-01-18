import React from "react";

const Engine = () => {
  const engineParts = [
    {
      name: "Spark Plug",
      image: "/engine/spark-plug.jpg",
      usage:
        "Spark plugs provide the spark needed to ignite the air-fuel mixture in the combustion chamber of your engine.",
      maintenance:
        "Check spark plugs for wear or carbon deposits every 30,000 miles. Ensure the gap is set correctly and clean off any deposits.",
      replacement:
        "Replace spark plugs if they show signs of fouling, corrosion, or wear, or if you notice reduced fuel efficiency or engine misfires.",
    },
    {
      name: "Ignition Coil",
      image: "/engine/ignition-coil.jpg",
      usage:
        "The ignition coil transforms the battery's low voltage to the thousands of volts needed to create an electric spark in the spark plugs.",
      maintenance:
        "Inspect the ignition coil for cracks or corrosion during routine servicing. Ensure all connections are tight and clean.",
      replacement:
        "Replace the ignition coil if you experience misfires, difficulty starting the engine, or if it fails during a diagnostic test.",
    },
    {
      name: "Injectors",
      image: "/engine/injectors.jpg",
      usage:
        "Fuel injectors deliver the right amount of fuel to the engine's cylinders at the correct pressure and timing.",
      maintenance:
        "Clean the fuel injectors every 20,000 to 30,000 miles to ensure proper fuel delivery. Use injector cleaner additives or professional cleaning services.",
      replacement:
        "Replace injectors if they are clogged, leaking, or causing uneven engine performance or reduced fuel efficiency.",
    },
    {
      name: "Air Filter",
      image: "/engine/air-filter.jpg",
      usage:
        "The air filter prevents dirt, debris, and other contaminants from entering the engine, ensuring clean airflow for combustion.",
      maintenance:
        "Check the air filter every 10,000 miles and clean it if reusable. Replace it every 15,000 to 30,000 miles or sooner in dusty conditions.",
      replacement:
        "Replace if the filter is visibly dirty, clogged, or damaged to avoid reduced engine performance and increased fuel consumption.",
    },
    {
      name: "Oil Filter",
      image: "/engine/oil-filter.jpg",
      usage:
        "The oil filter removes contaminants from engine oil, ensuring clean lubrication for moving parts.",
      maintenance:
        "Replace the oil filter during every oil change, typically every 5,000 to 7,500 miles, depending on driving conditions and oil type.",
      replacement:
        "Replace if the filter is clogged or if oil changes are overdue. Delayed replacement can lead to unfiltered oil circulating in the engine.",
    },
    {
      name: "Oil",
      image: "/engine/oil.jpg",
      usage:
        "Engine oil lubricates, cools, and cleans the engine's moving parts, preventing wear and overheating.",
      maintenance:
        "Check oil levels monthly and top off if low. Change the oil every 5,000 to 7,500 miles, or as specified in your vehicle manual.",
      replacement:
        "Replace the oil if it appears dirty or sludgy. Neglecting oil changes can cause engine wear and reduced performance.",
    },
    {
      name: "Coolant",
      image: "/engine/coolant.jpg",
      usage:
        "Coolant absorbs heat from the engine and dissipates it through the radiator, preventing overheating and freezing.",
      maintenance:
        "Check coolant levels and color every 12 months. Flush and replace the coolant every 2-3 years or as specified by the manufacturer.",
      replacement:
        "Replace if levels are low or the coolant appears rusty or contaminated to prevent overheating and damage to the cooling system.",
    },
    {
      name: "Intercooler",
      image: "/engine/intercooler.jpg",
      usage:
        "The intercooler cools the compressed air from the turbocharger, increasing engine efficiency and performance.",
      maintenance:
        "Clean the intercooler fins periodically to ensure optimal airflow. Check for any leaks or debris blocking the airflow.",
      replacement:
        "Replace if the intercooler is damaged, leaking, or not effectively cooling the air, which could reduce engine performance.",
    },
    {
      name: "Oil Cooler",
      image: "/engine/oil-cooler.jpg",
      usage:
        "The oil cooler reduces the temperature of engine oil, ensuring it remains effective under high-temperature conditions.",
      maintenance:
        "Inspect for leaks or blockages during routine servicing. Clean the cooler fins for better airflow and cooling efficiency.",
      replacement:
        "Replace if the oil cooler is leaking or not effectively reducing oil temperature, which can cause engine overheating.",
    },
    {
      name: "Timing Belt",
      image: "/engine/timing-belt.jpg",
      usage:
        "The timing belt synchronizes the camshaft and crankshaft, ensuring the engine's valves open and close at the right time.",
      maintenance:
        "Inspect the timing belt for cracks, fraying, or wear every 60,000 miles. Replace as per the manufacturer’s recommendations.",
      replacement:
        "Replace if it shows visible damage or if your car has reached the recommended mileage interval. A broken belt can cause serious engine damage.",
    },
    {
      name: "Oil Pan",
      image: "/engine/oil-pan.jpg",
      usage:
        "The oil pan stores engine oil at the bottom of the engine and provides an outlet for oil drainage during oil changes.",
      maintenance:
        "Check for leaks around the oil pan and tighten bolts if necessary. Clean the area to avoid dirt accumulation.",
      replacement:
        "Replace if the oil pan is cracked, dented, or leaking oil to prevent loss of lubrication.",
    },
    {
      name: "Head Cover",
      image: "/engine/head-cover.jpg",
      usage:
        "The head cover, or valve cover, protects the top of the engine and prevents oil leaks around the valve train.",
      maintenance:
        "Inspect the gasket for leaks and ensure the cover is securely fastened. Replace the gasket if leaking.",
      replacement:
        "Replace the head cover if it is cracked, damaged, or if leaks persist after gasket replacement.",
    },
  ];

  return (
    <div className="container mx-auto py-6">
      {/* Main Engine Image */}
      <div className="text-center">
        <img
          src="/engine/engine.png"
          alt="Main Engine"
          className="mx-auto rounded-lg shadow-lg"
          style={{ width: "500px", height: "500px", objectFit: "cover" }}
        />

        <h2 className="text-3xl font-bold mt-4">Engine Maintenance Guide</h2>
        <p className="mt-2 text-lg">
          Learn how to maintain your engine components for optimal performance
          and longevity.
        </p>
      </div>

      {/* Engine Parts List */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {engineParts.map((part, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-md">
            <img
              src={part.image}
              alt={part.name}
              className="w-full h-40 object-contain rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">{part.name}</h3>
            <p className="mt-2 text-sm text-gray-700">
              <strong>Maintenance:</strong> {part.maintenance}
            </p>
            <p className="mt-2 text-sm text-gray-700">
              <strong>Replacement:</strong> {part.replacement}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Engine;
