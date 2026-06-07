const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');

dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Former Friend MCP Server is running...');
});

// Mock AI Summarization
app.post('/api/ai/summarize', (req, res) => {
  const { text } = req.body;
  // Mock logic
  const summary = `AI SUMMARY: This guidance highlights the importance of ${text.substring(0, 20)}... and suggests best practices for sustainable farming.`;
  res.json({ summary });
});

// Mock Image Identification
app.post('/api/ai/identify-image', (req, res) => {
  const { imageUrl } = req.body;
  // Mock logic
  const results = {
    detected: "Neem Oil Pesticide",
    confidence: 0.98,
    category: "Pesticide",
    description: "Natural and effective against various pests."
  };
  res.json(results);
});

// Mock Voice Processing
app.post('/api/ai/voice-process', (req, res) => {
  const { audioData } = req.body;
  // Mock logic
  const transcription = "Best fertilizers for wheat in winter";
  res.json({ transcription, intent: "search_fertilizer" });
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`MCP Server running on port ${PORT}`);
});
