import express from 'express'; 
import { getAllSubmissions, submitForm } from '../controller/form.controller.js';

const router = express.Router();

// POST: Submit form
router.post('/submit', submitForm);

// GET: Fetch all submissions
router.get('/submissions', getAllSubmissions);

export default router;  
