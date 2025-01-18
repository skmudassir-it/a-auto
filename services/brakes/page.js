import React from "react";

const Brakes = () => {
  const brakeParts = [
    {
      name: "Brake Pads",
      image: "/brakes/brake-pads.jpg",
      usage:
        "Brake pads create the friction necessary to slow or stop the vehicle by pressing against the brake rotors.",
      maintenance:
        "Inspect brake pads for wear every 10,000 miles. Replace if the thickness is below the manufacturer's recommended minimum.",
      replacement:
        "Replace if you hear squealing, grinding noises, or experience reduced braking performance.",
    },
    {
      name: "Brake Rotors",
      image: "/brakes/brake-rotors.jpg",
      usage:
        "Brake rotors work with the brake pads to slow the vehicle by creating friction during braking.",
      maintenance:
        "Inspect rotors for grooves or warping during brake pad changes. Resurface if slightly worn or replace if heavily damaged.",
      replacement:
        "Replace if warped, excessively worn, or below the minimum thickness specified by the manufacturer.",
    },
    {
      name: "Brake Calipers",
      image: "/brakes/brake-calipers.jpg",
      usage:
        "Brake calipers house the brake pads and apply pressure to them against the rotors to create braking force.",
      maintenance:
        "Check calipers for leaks, stuck pistons, or uneven wear during servicing. Clean and lubricate sliding components.",
      replacement:
        "Replace if leaking, seized, or causing uneven brake pad wear.",
    },
    {
      name: "Brake Lines",
      image: "/brakes/brake-lines.jpg",
      usage:
        "Brake lines transfer hydraulic fluid from the master cylinder to the brake calipers or wheel cylinders.",
      maintenance:
        "Inspect brake lines for leaks, cracks, or corrosion during routine maintenance.",
      replacement:
        "Replace if leaking, damaged, or showing signs of corrosion to maintain safe braking performance.",
    },
    {
      name: "Master Cylinder",
      image: "/brakes/master-cylinder.jpg",
      usage:
        "The master cylinder generates hydraulic pressure that operates the braking system.",
      maintenance:
        "Check brake fluid levels and condition regularly. Inspect the master cylinder for leaks or damage.",
      replacement:
        "Replace if leaking, failing to maintain pressure, or causing a spongy brake pedal.",
    },
    {
      name: "Brake Fluid",
      image: "/brakes/brake-fluid.jpg",
      usage:
        "Brake fluid transfers force through the brake lines to the calipers or wheel cylinders.",
      maintenance:
        "Replace brake fluid every 2 years or as recommended by the manufacturer to prevent contamination and moisture buildup.",
      replacement:
        "Flush and replace if the fluid appears dirty or the brake system performance is compromised.",
    },
  ];

  return (
    <div className="container mx-auto py-6">
      {/* Main Brakes Image */}
      <div className="text-center">
        <img
          src="/brakes/brakes.png"
          alt="Main Brakes"
          className="mx-auto rounded-lg shadow-lg"
          style={{ width: "500px", height: "500px", objectFit: "contain" }}
        />

        <h2 className="text-3xl font-bold mt-4">Brakes Maintenance Guide</h2>
        <p className="mt-2 text-lg">
          Learn how to maintain your braking system for safety and optimal performance.
        </p>
      </div>

      {/* Brake Parts List */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {brakeParts.map((part, index) => (
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

export default Brakes;
