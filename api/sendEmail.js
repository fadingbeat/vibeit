export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  console.log('✅ Incoming request body:', req.body);

  const { email } = req.body;

  const serviceID = process.env.EMAILJS_SERVICE_ID;
  const templateID = process.env.EMAILJS_TEMPLATE_ID;
  const userID = process.env.EMAILJS_USER_ID;
  const accessToken = process.env.EMAILJS_PRIVATE_KEY;

  if (!email) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  if (!serviceID || !templateID || !userID) {
    console.error('❌ Missing environment variables');
    return res.status(500).json({ error: 'Server misconfiguration' });
  }

  try {
    const response = await fetch(
      'https://api.emailjs.com/api/v1.0/email/send',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: serviceID,
          template_id: templateID,
          user_id: userID,
          accessToken: accessToken,
          template_params: {
            user_email: email,
          },
        }),
      }
    );

    const result = await response.text();
    console.log('✅ EmailJS Response:', result);

    if (!response.ok) {
      throw new Error(`EmailJS Error: ${result}`);
    }

    return res
      .status(200)
      .json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('❌ Email sending failed:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
