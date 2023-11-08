import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_KEY);

const customer = await stripe.customers.create({
  email: "customer@example.com",
});

console.log(customer.id);
