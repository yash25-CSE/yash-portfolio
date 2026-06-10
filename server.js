const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

require("dotenv").config();


// server used to send send emails
const app = express();
app.use(
  cors({
    origin: [
      "https://portfolio-self-five-encod0w1lx.vercel.app",
      "http://localhost:3000",
    ],
    methods: ["GET", "POST"],
  })
);
app.use(express.json());
app.use("/", router);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


const contactEmail = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});


app.get("/test-mail", async (req, res) => {
  try {
    const info = await contactEmail.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "Test Email",
      text: "SMTP working",
    });

    console.log("Mail Sent:", info.response);

    res.json({
      success: true,
      response: info.response,
    });
  } catch (err) {
    console.error("FULL ERROR:", err);

    res.status(500).json({
      success: false,
      code: err.code,
      message: err.message,
    });
  }
});

app.post("/test-contact", (req, res) => {
  console.log(req.body);

  res.json({
    code: 200,
    status: "API Working",
  });
});


router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: process.env.EMAIL_USER,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});

