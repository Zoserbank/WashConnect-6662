import { motion } from 'framer-motion';
import { FaTshirt, FaCalendarCheck, FaTruck } from 'react-icons/fa';

export default function Home() {
  const subscriptionTiers = [
    {
      name: "Basic",
      price: "R499",
      features: [
        "Weekly pickup & delivery",
        "Standard wash & fold",
        "48-hour turnaround",
        "Up to 4 loads per month"
      ]
    },
    {
      name: "Standard",
      price: "R699",
      features: [
        "Weekly pickup & delivery",
        "Premium detergents",
        "24-hour turnaround",
        "Up to 6 loads per month",
        "Stain treatment"
      ]
    },
    {
      name: "Premium Care",
      price: "R949",
      features: [
        "Priority pickup & delivery",
        "Premium detergents",
        "Same-day service",
        "Unlimited loads",
        "Stain treatment",
        "Special care instructions"
      ]
    }
  ];

  return (
    <div className="space-y-16 py-12">
      {/* Component content remains the same */}
    </div>
  );
}