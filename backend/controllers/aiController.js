const Groq = require('groq-sdk');
const axios = require('axios');

// Initialize Groq only if API key is present
let groq;
if (process.env.GROQ_API_KEY) {
  groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
}

const getFarmingAdvice = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ message: 'Please provide a message.' });
    }

    if (!groq) {
      console.warn("GROQ_API_KEY is not set. Using mocked AI response.");
      return res.json({
        reply: `This is a simulated AI response to: "${message}". Please add your GROQ_API_KEY to the .env file to enable real AI capabilities.`
      });
    }

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'You are Former Friend, a highly knowledgeable and friendly agricultural AI assistant. You help farmers with crop advice, weather implications, pest control, and farming best practices.'
        },
        { role: 'user', content: message }
      ],
      model: 'llama3-8b-8192',
      temperature: 0.7,
      max_tokens: 500,
    });

    const reply = chatCompletion.choices[0]?.message?.content || "Sorry, I couldn't generate a response.";
    res.json({ reply });

  } catch (error) {
    console.error('AI Controller Error:', error);
    res.status(500).json({ message: 'Failed to process AI request', error: error.message });
  }
};

const proxySummarize = async (req, res) => {
  try {
    const { text } = req.body;
    const { data } = await axios.post(`${process.env.MCP_SERVER_URL}/ai/summarize`, { text });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'MCP Summarize failed', error: error.message });
  }
};

const proxyIdentifyImage = async (req, res) => {
  try {
    const { imageUrl } = req.body;
    const { data } = await axios.post(`${process.env.MCP_SERVER_URL}/ai/identify-image`, { imageUrl });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'MCP Image Identification failed', error: error.message });
  }
};

const proxyVoiceProcess = async (req, res) => {
  try {
    const { audioData } = req.body;
    const { data } = await axios.post(`${process.env.MCP_SERVER_URL}/ai/voice-process`, { audioData });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'MCP Voice Processing failed', error: error.message });
  }
};

module.exports = { 
  getFarmingAdvice, 
  proxySummarize, 
  proxyIdentifyImage, 
  proxyVoiceProcess 
};
