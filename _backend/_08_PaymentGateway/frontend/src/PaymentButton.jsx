import React from 'react';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5001';
const RAZORPAY_CHECKOUT_URL = 'https://checkout.razorpay.com/v1/checkout.js';

const loadRazorpayCheckout = () =>
  new Promise((resolve, reject) => {
    if (window.Razorpay) {
      resolve();
      return;
    }

    const existingScript = document.querySelector(`script[src="${RAZORPAY_CHECKOUT_URL}"]`);

    if (existingScript) {
      existingScript.addEventListener('load', resolve, { once: true });
      existingScript.addEventListener(
        'error',
        () => reject(new Error('Razorpay Checkout SDK failed to load.')),
        { once: true }
      );
      return;
    }

    const script = document.createElement('script');
    script.src = RAZORPAY_CHECKOUT_URL;
    script.async = true;
    script.onload = resolve;
    script.onerror = () => reject(new Error('Razorpay Checkout SDK failed to load.'));
    document.body.appendChild(script);
  });

export default function PaymentButton() {
  const handlePayment = async () => {
    
    try {
      // Load Razorpay's browser SDK before creating the checkout modal.
      await loadRazorpayCheckout();

      if (!window.Razorpay) {
        throw new Error('Razorpay Checkout SDK is unavailable.');
      }

      // 1. Fetch public Key ID
      const { data: keyData } = await axios.get(`${API_BASE_URL}/api/payment/get-key`);

      // 2. Create Order on backend
      const { data: order } = await axios.post(`${API_BASE_URL}/api/payment/create-order`, {
        amount: 50, // Amount in Rupees
      });

      // 3. Configure Razorpay modal
      const options = {
        key: keyData.key,
        amount: order.amount, // paise
        currency: order.currency,
        name: 'Sheryians / KODR',
        description: 'Backend Course Enrollment',
        order_id: order.id,
        handler: async function (response) {
          try {
            await axios.post(`${API_BASE_URL}/api/payment/verify`, {
              razorpayOrderId: response.razorpay_order_id,
              razorpayPaymentId: response.razorpay_payment_id,
              signature: response.razorpay_signature,
            });
            alert('Payment Successful & Verified! 🎉');
          } catch (err) {
            console.error('Payment verification error:', err);
            alert('Verification Failed!');
          }
        },
        prefill: {
          name: 'Test Student',
          email: 'student@example.com',
          contact: '9999999999',
        },
        theme: {
          color: '#2563eb',
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error('Payment error:', err);
      alert(err.message || 'Unable to start payment. Please try again.');
    }
  };

  return (
    <button
      onClick={handlePayment}
      style={{
        padding: '12px 24px',
        background: '#2563eb',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: 'bold',
      }}
    >
      Pay with Razorpay
    </button>
  );
}
