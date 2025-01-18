import Link from 'next/link';

export default function Services() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Our Services</h1>
      <ul className="space-y-2">
        <li><Link href="/services/engine" className="text-blue-600 hover:underline">Engine Service</Link></li>
        <li><Link href="/services/suspension" className="text-blue-600 hover:underline">Suspension Service</Link></li>
        <li><Link href="/services/steering" className="text-blue-600 hover:underline">Steering Service</Link></li>
        <li><Link href="/services/brakes" className="text-blue-600 hover:underline">Brakes Service</Link></li>
        <li><Link href="/services/electrical" className="text-blue-600 hover:underline">Electrical System Service</Link></li>
      </ul>
    </div>
  );
}
