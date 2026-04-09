export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { recipient, amount } = req.body
  res.status(200).json({
    status: 'processed',
    recipient,
    amount,
    timestamp: new Date().toISOString()
  })
}
