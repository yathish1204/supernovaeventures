import { FormSubmission } from "../model/form.model.js";

// Handle form submissions
const submitForm = async (req, res) => {
    const { name, email, phone, message, eventDate } = req.body;
  
    // if (!name || !email || !phone || !message) {
    //   return res.status(400).json({ error: 'All fields are required' });
    // }
  
    try {
      const newSubmission = new FormSubmission({
        name,
        email,
        phone,
        message,
        eventDate,
      });
      await newSubmission.save();
      res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
      console.error("Error saving form submission:", error); // Log the error details
      res.status(500).json({ error: 'Failed to submit form' });
    }
  };
  

// Fetch all form submissions (for admin)
const getAllSubmissions = async (req, res) => {
  try {
    const submissions = await FormSubmission.find();
    res.status(200).json(submissions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch submissions' });
  }
};

export {getAllSubmissions,submitForm};