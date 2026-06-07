const express = require('express');
const router = express.Router();
const { 
  getFarmingAdvice, 
  proxySummarize, 
  proxyIdentifyImage, 
  proxyVoiceProcess 
} = require('../controllers/aiController');

router.post('/chat', getFarmingAdvice);
router.post('/summarize', proxySummarize);
router.post('/identify-image', proxyIdentifyImage);
router.post('/voice-process', proxyVoiceProcess);

module.exports = router;
