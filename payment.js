const stripe = require('stripe')('your-stripe-secret-key');

app.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount * 100, // Перевод суммы в копейки
    currency: 'usd',
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});
