import { loadStripe } from '@stripe/stripe-js';

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe('pk_test_51N7NHBA0xnkTOfH1nGiifecWIn1z2bYxFVDv42ewQVsD9WmJhHElCDWT7TOAWCzkXZznkM5Wqo3CYf83cgiEXrKo00KJAbcHRu');
  }
  return stripePromise;
};
export default getStripe;