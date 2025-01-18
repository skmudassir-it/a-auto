import React from "react";

const Electricals = () => {
  const electricalParts = [
    {
      name: "Starter Motor",
      image: "/electrical/starter-motor.jpg",
      usage:
        "The starter motor converts electrical energy from the battery into mechanical energy to start the engine.",
      maintenance:
        "Check for wear and tear, and ensure the connections are tight and free of corrosion.",
      replacement:
        "Replace if the motor fails to engage or shows signs of electrical failure.",
    },
    {
      name: "Starter Relay (Solenoid)",
      image: "/electrical/starter-relay.jpg",
      usage:
        "The relay acts as a switch to direct electrical current from the battery to the starter motor.",
      maintenance:
        "Inspect the relay for proper operation and check for loose connections.",
      replacement:
        "Replace if the relay fails to engage the starter motor consistently.",
    },
    {
      name: "Ignition Switch",
      image: "/electrical/ignition-switch.jpg",
      usage:
        "The ignition switch controls the flow of current to the starter motor and other electrical systems.",
      maintenance:
        "Check for smooth operation and ensure proper connection of wires.",
      replacement:
        "Replace if the switch becomes loose, worn, or fails to start the vehicle.",
    },
    {
      name: "Alternator",
      image: "/electrical/alternator.jpg",
      usage:
        "The alternator generates electricity to charge the car battery and power the electrical systems while the engine runs.",
      maintenance:
        "Inspect the alternator belt and ensure there are no unusual noises or voltage drops.",
      replacement:
        "Replace if the alternator fails to charge the battery or shows signs of malfunction.",
    },
    {
      name: "Voltage Regulator",
      image: "/electrical/voltage-regulator.jpg",
      usage:
        "The voltage regulator ensures the alternator provides a steady and appropriate voltage to the battery and electrical systems.",
      maintenance:
        "Test voltage output regularly and inspect for overheating or physical damage.",
      replacement:
        "Replace if the regulator fails to maintain proper voltage levels.",
    },
    {
      name: "Drive Belt",
      image: "/electrical/drive-belt.jpg",
      usage:
        "The drive belt connects the alternator to the engine's crankshaft, allowing it to generate power as the engine runs.",
      maintenance:
        "Inspect for cracks, wear, or slackness. Ensure proper tension.",
      replacement:
        "Replace if the belt is frayed, cracked, or loose.",
    },
    {
      name: "Battery",
      image: "/electrical/battery.jpg",
      usage:
        "The battery stores electrical energy to start the car and supply power when the engine is off or idling.",
      maintenance:
        "Check battery terminals for corrosion and ensure it holds a proper charge.",
      replacement:
        "Replace if the battery fails to hold a charge or is older than 3-5 years.",
    },
    {
      name: "Wiring",
      image: "/electrical/wiring.jpg",
      usage:
        "Cables and wiring connect the battery, starter motor, alternator, and electrical systems.",
      maintenance:
        "Inspect wiring for damage, loose connections, or corrosion.",
      replacement:
        "Replace damaged or corroded wires to avoid electrical failures.",
    },
    {
      name: "Fuses",
      image: "/electrical/fuses.jpg",
      usage:
        "Fuses protect electrical circuits from overcurrent or short circuits.",
      maintenance:
        "Check for blown fuses and replace as necessary.",
      replacement:
        "Replace fuses immediately if they are blown or damaged.",
    },
  ];

  return (
    <div className="container mx-auto py-6">
      {/* Main Electrical System Image */}
      <div className="text-center">
        <img
          src="/electrical/electrical-system.jpg"
          alt="Main Electrical System"
          className="mx-auto rounded-lg shadow-lg"
          style={{ width: "500px", height: "500px", objectFit: "contain" }}
        />

        <h2 className="text-3xl font-bold mt-4">Electrical System Maintenance Guide</h2>
        <p className="mt-2 text-lg">
          Learn how to maintain your vehicle's electrical components for optimal performance.
        </p>
      </div>

      {/* Electrical Parts List */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {electricalParts.map((part, index) => (
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

export default Electricals;
