import mongoose from 'mongoose';

const formSubmissionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,  // Removes leading/trailing spaces
  },
  email: {
    type: String,
    required: true,
    match: [/^\S+@\S+\.\S+$/, 'Invalid email format'], // Basic email validation
  },
  phone: {
    type: String,  // Change from Number to String
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  eventDate: {
    type: Date,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

// Exporting FormSubmission model
export const FormSubmission = mongoose.model('FormSubmission', formSubmissionSchema);
