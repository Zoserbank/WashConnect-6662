import { loadStripe } from '@stripe/stripe-js';

// Replace with your Stripe publishable key
const stripePromise = loadStripe('your_publishable_key');

export const initiatePayment = async (subscriptionType) => {
  try {
    const stripe = await stripePromise;
    
    // This would typically come from your backend
    const prices = {
      'Basic': 'price_basic_id',
      'Standard': 'price_standard_id',
      'Premium Care': 'price_premium_id'
    };

    const priceId = prices[subscriptionType];

    // In production, this would be your backend endpoint
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        priceId,
        subscriptionType
      }),
    });

    const session = await response.json();

    // Redirect to Stripe Checkout
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      throw new Error(result.error.message);
    }
  } catch (error) {
    console.error('Payment error:', error);
    throw error;
  }
};