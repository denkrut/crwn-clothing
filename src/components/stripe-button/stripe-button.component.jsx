import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForstripe = price * 100;
  const publishableKey =
    "pk_test_51L4SBGExrGaCWefGXt2VAjIYAW48TPjFOHjTmmeiZQfuH9N8rM05bwRlxUmwYeWgRXJ73uLrEQLQVxxgherZer8n00o4f21xG4";

  const onToken = (token) => {
    console.log(token);
    alert("payment successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="http://svgshare.com/i/CUz.svg"
      description={`your total is $${price}`}
      amount={priceForstripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
