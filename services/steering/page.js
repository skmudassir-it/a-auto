import React from "react";

const Steering = () => {
  const steeringParts = [
    {
      name: "Steering Column",
      image: "/steering/steering-column.jpg",
      usage:
        "Connects the steering wheel to the steering mechanism and often includes tilt and telescoping adjustments for comfort.",
      maintenance:
        "Inspect for looseness or damage periodically. Ensure tilt and telescoping mechanisms work smoothly.",
      replacement:
        "Replace if the column is damaged, excessively loose, or if the adjustments fail to function properly.",
    },
    {
      name: "Universal Joint",
      image: "/steering/universal-joint.jpg",
      usage:
        "Transfers rotational motion from the steering column to the steering gear, even if they are misaligned.",
      maintenance:
        "Check for wear, corrosion, or looseness during routine servicing.",
      replacement:
        "Replace if the joint is worn out, corroded, or causing steering play or noise.",
    },
    {
      name: "Steering Gear",
      image: "/steering/steering-gear.jpg",
      usage:
        "Converts the rotational motion of the steering wheel into linear motion for the wheels.",
      maintenance:
        "Inspect for leaks, unusual noise, or difficulty in steering during routine checks.",
      replacement:
        "Replace if it is leaking, making excessive noise, or causing poor steering response.",
    },
    {
      name: "Steering Linkage",
      image: "/steering/steering-linkage.jpg",
      usage:
        "Transfers motion from the steering gear to the wheels through a series of rods and arms.",
      maintenance:
        "Inspect for wear, looseness, or damage regularly.",
      replacement:
        "Replace if components are worn, bent, or causing uneven steering.",
    },
    {
      name: "Power Steering System",
      image: "/steering/power-steering.jpg",
      usage:
        "Assists the driver by reducing the effort required to turn the wheel.",
      maintenance:
        "Check fluid levels regularly (if hydraulic) and ensure the system is free of leaks or malfunctions.",
      replacement:
        "Repair or replace if it fails to assist steering or if fluid leaks are present.",
    },
    {
      name: "Steering Knuckle",
      image: "/steering/steering-knuckle.jpg",
      usage:
        "Connects the suspension to the wheels and provides a pivot point for turning.",
      maintenance:
        "Inspect for cracks, wear, or misalignment regularly.",
      replacement:
        "Replace if cracked, bent, or causing misalignment in the wheels.",
    },
    {
      name: "Steering Shaft",
      image: "/steering/steering-shaft.jpg",
      usage:
        "Connects the steering wheel to the steering gear or intermediate components.",
      maintenance:
        "Inspect for looseness, wear, or damage periodically.",
      replacement:
        "Replace if the shaft is excessively worn, bent, or causing steering instability.",
    },
    {
      name: "Pitman Arm",
      image: "/steering/pitman-arm.jpg",
      usage:
        "Transfers motion from the steering gear to the steering linkage in specific systems.",
      maintenance:
        "Inspect for wear or looseness during routine checks.",
      replacement:
        "Replace if the arm is worn, bent, or causing steering inaccuracies.",
    },
    {
      name: "Steering Fluid",
      image: "/steering/steering-fluid.jpg",
      usage:
        "Hydraulic fluid used in power steering systems to transfer pressure and assist in steering.",
      maintenance:
        "Check fluid levels monthly and top off as needed. Ensure there are no leaks in the system.",
      replacement:
        "Replace the fluid if it appears dirty or contaminated, or as specified by the manufacturer.",
    },
    {
      name: "Steering Fluid Reservoir",
      image: "/steering/steering-fluid-reservoir.jpg",
      usage:
        "Stores the steering fluid and supplies it to the power steering system as needed.",
      maintenance:
        "Inspect for cracks, leaks, or contamination during routine checks.",
      replacement:
        "Replace the reservoir if it is leaking, cracked, or not functioning properly.",
    },
  ];

  return (
    <div className="container mx-auto py-6">
      {/* Main Steering Image */}
      <div className="text-center">
        <img
          src="/steering/steering.png"
          alt="Main Steering System"
          className="mx-auto rounded-lg shadow-lg"
          style={{ width: "500px", height: "500px", objectFit: "contain" }}
        />

        <h2 className="text-3xl font-bold mt-4">Steering Maintenance Guide</h2>
        <p className="mt-2 text-lg">
          Learn how to maintain your steering components for safe and efficient vehicle operation.
        </p>
      </div>

      {/* Steering Parts List */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steeringParts.map((part, index) => (
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

export default Steering;
