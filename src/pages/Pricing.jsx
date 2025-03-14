import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { initiatePayment } from '../utils/stripe';

export default function Pricing() {
  const navigate = useNavigate();
  
  const subscriptionTiers = [
    {
      name: "Basic",
      price: "R499",
      features: [
        "4 loads per month",
        "Weekly pickup & delivery",
        "Standard wash & fold",
        "48-hour turnaround",
        "Basic stain removal"
      ]
    },
    {
      name: "Standard",
      price: "R699",
      features: [
        "4 loads per month",
        "Weekly pickup & delivery",
        "Premium detergents",
        "24-hour turnaround",
        "Professional ironing included",
        "Advanced stain treatment"
      ]
    },
    {
      name: "Premium Care",
      price: "R949",
      features: [
        "4 loads per month",
        "Priority pickup & delivery",
        "Premium detergents",
        "Same-day service",
        "Professional ironing included",
        "Shoe cleaning service",
        "Specialized stain treatment",
        "Special care instructions",
        "Priority customer support"
      ]
    }
  ];

  const handleSubscribe = async (tier) => {
    try {
      await initiatePayment(tier.name);
      toast.success('Redirecting to payment...');
    } catch (error) {
      toast.error('Payment initialization failed. Please try again.');
      console.error('Subscription error:', error);
    }
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
          >
            Choose Your Plan
          </motion.h2>
          <p className="mt-4 text-xl text-gray-600">
            Select the perfect subscription that fits your laundry needs
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {subscriptionTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="px-6 py-8">
                <h3 className="text-2xl font-bold text-gray-900 text-center">
                  {tier.name}
                </h3>
                <div className="mt-4 flex justify-center">
                  <span className="text-5xl font-extrabold text-gray-900">
                    {tier.price}
                  </span>
                  <span className="ml-2 text-xl font-medium text-gray-500 self-end">
                    /month
                  </span>
                </div>
                <ul className="mt-8 space-y-4">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <FaCheck className="text-primary-500 mr-3" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleSubscribe(tier)}
                  className="mt-8 w-full bg-primary-500 text-white py-3 px-6 rounded-md hover:bg-primary-600 transition-colors"
                >
                  Subscribe Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}