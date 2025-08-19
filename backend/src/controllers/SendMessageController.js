import Message from "../models/Message.js";
import transporter from "../utils/NodeMailer.js";

export const SendMessage = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  try {
    const newMessage = new Message({ name, email, message });

    transporter.sendMail({
      from: "mdrohanulhaquerohan368@gmail.com",
      to: "dev.rohan2024@gmail.com",
      replyTo: email,
      subject: `📩 New message from ${name}`,
      text: message,
      html: `
  <div style="max-width:600px;margin:20px auto;padding:20px;
              border:1px solid #e5e7eb;border-radius:12px;
              font-family:Arial, sans-serif;background:#f9fafb;">

    <h2 style="color:#2563eb;text-align:center;">📬 New Portfolio Message</h2>
    <p style="text-align:center;color:#6b7280;">
      You received a new message from your portfolio contact form.
    </p>

    <div style="margin-top:20px;padding:15px;border-radius:10px;background:#fff;
                box-shadow:0 2px 6px rgba(0,0,0,0.05);">
      <p><b style="color:#111827;">👤 Name:</b> ${name}</p>
      <p><b style="color:#111827;">📧 Email:</b> ${email}</p>
      <p><b style="color:#111827;">💬 Message:</b></p>
      <p style="background:#f3f4f6;padding:10px;border-radius:8px;">
        ${message}
      </p>
    </div>

    <p style="margin-top:20px;font-size:12px;color:#9ca3af;text-align:center;">
      This email was sent automatically from your portfolio contact form.
    </p>
  </div>
  `,
    });

    await newMessage.save();

    return res.status(200).json({
      success: true,
      message: "Message sent successfully ✅",
    });
  } catch (error) {
    console.error("Error sending message:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong, please try again later.",
    });
  }
};

export const messageList = async (req, res) => {
  try {
    const messages = await Message.find({});

    if (!messages || messages.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No messages found",
        messageList: [],
      });
    }

    return res.status(200).json({
      success: true,
      message: "Message list fetched successfully",
      messageList: messages,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Message list fetch failed",
      messageList: [],
    });
  }
};
