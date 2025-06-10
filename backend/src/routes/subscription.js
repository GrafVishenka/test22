const express = require('express');
const router = express.Router();

// simple in-memory store
let subscriptions = [];

function calculateNextDelivery(schedule) {
  const now = new Date();
  const days = parseInt(schedule, 10) || 30;
  return new Date(now.getTime() + days * 24 * 60 * 60 * 1000);
}

router.post('/', (req, res) => {
  const { userId, products, deliverySchedule } = req.body;

  const subscription = {
    id: subscriptions.length + 1,
    userId,
    products,
    deliverySchedule,
    status: 'active',
    nextDelivery: calculateNextDelivery(deliverySchedule)
  };

  subscriptions.push(subscription);
  res.json({ success: true, subscription });
});

module.exports = router;
