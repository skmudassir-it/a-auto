import React from "react";

const Suspension = () => {
  const suspensionParts = [
    {
      name: "Shocks/Struts",
      image: "/suspension/shocks-struts.jpg",
      usage: "Absorb impacts from road bumps and provide a smooth ride.",
      maintenance: "Inspect for leaks, damage, or wear every 50,000 miles. Replace if necessary to ensure ride quality.",
      replacement: "Replace if leaking, worn, or causing excessive bouncing or uneven tire wear."
    },
    {
      name: "Control Arms",
      image: "/suspension/control-arms.jpg",
      usage: "Connect the suspension to the vehicle's frame and allow smooth up-and-down movement.",
      maintenance: "Check bushings and ball joints for wear or damage during regular servicing.",
      replacement: "Replace if bent, cracked, or causing alignment issues."
    },
    {
      name: "Ball Joints",
      image: "/suspension/ball-joints.jpg",
      usage: "Act as pivot points for steering and suspension movement.",
      maintenance: "Inspect for wear, looseness, or noise during turning. Lubricate if applicable.",
      replacement: "Replace if loose, noisy, or causing uneven tire wear."
    },
    {
      name: "Tie Rods",
      image: "/suspension/tie-rods.jpg",
      usage: "Connect the steering rack to the steering knuckles, transmitting motion to the wheels.",
      maintenance: "Inspect for wear or play during regular alignment checks.",
      replacement: "Replace if worn, loose, or causing steering instability."
    },
    {
      name: "Bushings",
      image: "/suspension/bushings.jpg",
      usage: "Reduce friction and wear between suspension components.",
      maintenance: "Check for cracks, wear, or deterioration during routine inspections.",
      replacement: "Replace if cracked, worn, or causing squeaking or poor alignment."
    },
    {
      name: "Suspension Bearings",
      image: "/suspension/suspension-bearings.jpg",
      usage: "Facilitate movement and reduce friction in suspension components.",
      maintenance: "Inspect for noise or rough operation during suspension movement.",
      replacement: "Replace if noisy, worn, or causing poor suspension performance."
    },
    {
      name: "Suspension Arms",
      image: "/suspension/suspension-arms.jpg",
      usage: "Support wheel assembly movement and maintain alignment.",
      maintenance: "Check for cracks, bends, or worn bushings during servicing.",
      replacement: "Replace if damaged or causing alignment issues."
    },
    {
      name: "Knuckles/Spindles",
      image: "/suspension/knuckles-spindles.jpg",
      usage: "Mount the wheel hub and provide a connection between the control arms and the steering system.",
      maintenance: "Inspect for cracks or damage during servicing.",
      replacement: "Replace if cracked, bent, or causing uneven tire wear."
    },
    {
      name: "Wheel Hub Assemblies",
      image: "/suspension/wheel-hub-assemblies.jpg",
      usage: "Connect the wheels to the vehicle and house the wheel bearings.",
      maintenance: "Check for noise, looseness, or play during regular inspections.",
      replacement: "Replace if noisy, loose, or causing uneven tire wear."
    },
  ];

  return (
    <div className="container mx-auto py-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Suspension Maintenance Guide</h2>
        <p className="mt-2 text-lg">
          Learn how to maintain your suspension components for optimal ride quality and vehicle stability.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {suspensionParts.map((part, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-md">
            <img
              src={part.image}
              alt={part.name}
              className="w-full h-40 object-contain rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">{part.name}</h3>
            <p className="mt-2 text-sm text-gray-700">
              <strong>Usage:</strong> {part.usage}
            </p>
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

export default Suspension;
