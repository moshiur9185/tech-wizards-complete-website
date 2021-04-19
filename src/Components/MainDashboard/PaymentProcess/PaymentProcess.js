import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentCardFrom from "./PaymentCardFrom";

const stripePromise = loadStripe(
  "pk_test_51Ie1QoLcxpO5hNLEzTVQVgeEpdWZjdN6JhiA9hSwon6Y1MPMd0ePhW0XzkHk1GNrpZfouuL1R9WC2smWn4x8awN100K8v42P0A"
);

const PaymentProcess = ({handlePayment}) => {
  return (
    <div>
      
      <Elements stripe={stripePromise}>
        <PaymentCardFrom handlePayment={handlePayment}/>
      </Elements>
    </div>
  );
};

export default PaymentProcess;
