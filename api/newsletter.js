const nodemailer = require("nodemailer");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method Not Allowed",
    });
  }

  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required.",
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to You
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Newsletter Subscription",
      html: `
        <h2>New Newsletter Subscription</h2>

        <p><strong>Email:</strong> ${email}</p>

        <p>A new visitor has subscribed to your portfolio newsletter.</p>
      `,
    });

    // Email to Subscriber
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank You for Subscribing!",
      html: `
        <h2>Thank You!</h2>

        <p>Hello,</p>

        <p>
          Thank you for subscribing to my portfolio newsletter.
        </p>

        <p>
          You'll receive future updates whenever I publish new projects,
          achievements or important announcements.
        </p>

        <br>

        <p>Regards,</p>

        <h3>Yash Sahejwani</h3>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Subscription successful!",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Unable to subscribe right now.",
    });
  }
};