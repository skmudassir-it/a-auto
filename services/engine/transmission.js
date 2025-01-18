import React from "react";

const Transmission = () => {
  const transmissionParts = [
    {
      name: "Transmission Oil",
      image: "/engine/transmission-oil.jpg",
      usage:
        "Transmission oil lubricates the gears and components inside the transmission, ensuring smooth gear shifts and reducing wear.",
      maintenance:
        "Check transmission oil levels and quality every 30,000 to 60,000 miles or as recommended by your vehicle's manual. Top off if low.",
      replacement:
        "Replace transmission oil if it appears dirty, burnt, or as specified by the manufacturer to avoid transmission damage and performance issues.",
    },
    {
      name: "Motor Mounts",
      image: "/engine/motor-mounts.jpg",
      usage:
        "Motor mounts secure the engine and transmission to the vehicle's frame, reducing vibrations and ensuring proper alignment.",
      maintenance:
        "Inspect motor mounts during routine servicing for cracks, wear, or looseness. Tighten bolts if necessary.",
      replacement:
        "Replace motor mounts if you notice excessive engine vibration, noise, or visible damage to the mounts.",
    },
    {
      name: "Transmission Mounts",
      image: "/engine/transmission-mounts.jpg",
      usage:
        "Transmission mounts stabilize the transmission and reduce vibrations, ensuring the drivetrain operates smoothly.",
      maintenance:
        "Check transmission mounts for cracks, wear, or loosening during routine inspections. Ensure bolts are tight.",
      replacement:
        "Replace transmission mounts if they are damaged or causing excessive vibrations and noise.",
    },
    {
      name: "Clutch",
      image: "/engine/clutch.jpg",
      usage:
        "The clutch engages and disengages the power transmission from the engine to the wheels, allowing smooth gear shifts.",
      maintenance:
        "Check clutch pedal free play and adjust as needed. Avoid riding the clutch to reduce wear.",
      replacement:
        "Replace the clutch if you experience slipping, difficulty shifting gears, or unusual noises when engaging the clutch.",
    },
    {
      name: "Drive Shafts",
      image: "/engine/drive-shafts.jpg",
      usage:
        "Drive shafts transmit torque from the transmission to the wheels, enabling the vehicle to move.",
      maintenance:
        "Inspect drive shafts for wear, damage, or imbalance during regular servicing. Lubricate universal joints if applicable.",
      replacement:
        "Replace drive shafts if they are bent, cracked, or causing vibrations while driving.",
    },
  ];

  return (
    <div className="container mx-auto py-6">
      {/* Main Transmission Image */}
      <div className="text-center">
        <img
          src="/engine/transmission.png"
          alt="Main Transmission"
          className="mx-auto rounded-lg shadow-lg"
          style={{ width: "500px", height: "500px", objectFit: "contain" }}
        />

        <h2 className="text-3xl font-bold mt-4">Transmission Maintenance Guide</h2>
        <p className="mt-2 text-lg">
          Learn how to maintain your transmission components for optimal performance and reliability.
        </p>
      </div>

      {/* Transmission Parts List */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {transmissionParts.map((part, index) => (
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

export default Transmission;
