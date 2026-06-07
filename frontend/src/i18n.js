import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "app_name": "FORMER FRIEND",
      "premium_tag": "Premium Agri-SaaS",
      "nav": {
        "home": "Home",
        "search": "Search",
        "schemes": "Schemes",
        "profile": "Profile"
      },
      "auth": {
        "login_title": "Welcome Back",
        "login_subtitle": "Login to your account",
        "register_title": "Join Farmer Friend",
        "register_subtitle": "Start your digital farming journey",
        "email": "Email Address",
        "password": "Password",
        "name": "Full Name",
        "login_btn": "Login",
        "register_btn": "Register",
        "no_account": "Don't have an account?",
        "has_account": "Already have an account?"
      },
      "profile": {
        "title": "Your Profile",
        "logout": "Logout",
        "member_since": "Member since"
      },
      "dashboard": {
        "hero_title": "Modernizing Your Harvest.",
        "hero_subtitle": "Welcome back, Anil! Here's what's happening on your farm today.",
        "ai_assistant": "AI Assistant",
        "market_insights": "Market Insights",
        "weather": "Weather",
        "humidity": "Humidity",
        "live_prices": "Live Prices",
        "news": "News",
        "explore_categories": "Explore Categories",
        "expert_advice": "Expert Advice",
        "support_schemes": "Support Schemes"
      },
      "search": {
        "title": "Agricultural Directory",
        "subtitle": "Find pesticides, fertilizers, and tools",
        "loading": "Loading catalog...",
        "no_results": "No products found matching your search.",
        "error": "Failed to fetch products. Please check your connection."
      },
      "schemes": {
        "title": "Government Schemes",
        "subtitle": "Stay updated with latest agricultural benefits",
        "help_title": "Need Help Applying?",
        "help_text": "Visit your nearest Krishi Vigyan Kendra with your Aadhar and Land documents.",
        "loading": "Loading schemes...",
        "no_results": "No active schemes found at this moment.",
        "error": "Failed to load schemes. Please try again later."
      },
      "categories": {
        "pesticides": "Pesticides",
        "fertilizers": "Fertilizers",
        "tools": "Tools",
        "schemes": "Schemes"
      }
    }
  },
  te: {
    translation: {
      "app_name": "ఫార్మర్ ఫ్రెండ్",
      "premium_tag": "ప్రీమియం అగ్రి-సాస్",
      "nav": {
        "home": "హోమ్",
        "search": "శోధన",
        "schemes": "పథకాలు",
        "profile": "ప్రొఫైల్"
      },
      "auth": {
        "login_title": "తిరిగి స్వాగతం",
        "login_subtitle": "మీ ఖాతాకు లాగిన్ చేయండి",
        "register_title": "ఫార్మర్ ఫ్రెండ్‌లో చేరండి",
        "register_subtitle": "మీ డిజిటల్ వ్యవసాయ ప్రయాణాన్ని ప్రారంభించండి",
        "email": "ఈమెయిల్ చిరునామా",
        "password": "పాస్‌వర్డ్",
        "name": "పూర్తి పేరు",
        "login_btn": "లాగిన్",
        "register_btn": "నమోదు",
        "no_account": "ఖాతా లేదా?",
        "has_account": "ఇప్పటికే ఖాతా ఉందా?"
      },
      "profile": {
        "title": "మీ ప్రొఫైల్",
        "logout": "లాగ్ అవుట్",
        "member_since": "సభ్యత్వం ప్రారంభం"
      },
      "dashboard": {
        "hero_title": "మీ సాగును ఆధునీకరించండి.",
        "hero_subtitle": "తిరిగి స్వాగతం, అనిల్! ఈరోజు మీ పొలంలో ఏమి జరుగుతుందో ఇక్కడ ఉంది.",
        "ai_assistant": "AI అసిస్టెంట్",
        "market_insights": "మార్కెట్ సమాచారం",
        "weather": "వాతావరణం",
        "humidity": "తేమ",
        "live_prices": "లైవ్ ధరలు",
        "news": "వార్తలు",
        "explore_categories": "విభాగాలను అన్వేషించండి",
        "expert_advice": "నిపుణుల సలహా",
        "support_schemes": "మద్దతు పథకాలు"
      },
      "search": {
        "title": "వ్యవసాయ డైరెక్టరీ",
        "subtitle": "పురుగుమందులు, ఎరువులు మరియు పరికరాలను కనుగొనండి",
        "loading": "కేటలాగ్ లోడ్ అవుతోంది...",
        "no_results": "మీ శోధనకు సరిపోలే ఉత్పత్తులేవీ కనుగొనబడలేదు.",
        "error": "ఉత్పత్తులను పొందడంలో విఫలమైంది. దయచేసి మీ కనెక్షన్‌ని తనిఖీ చేయండి."
      },
      "schemes": {
        "title": "ప్రభుత్వ పథకాలు",
        "subtitle": "తాజా వ్యవసాయ ప్రయోజనాలతో అప్‌డేట్‌గా ఉండండి",
        "help_title": "దరఖాస్తు చేయడంలో సహాయం కావాలా?",
        "help_text": "మీ ఆధార్ మరియు భూమి పత్రాలతో మీ సమీప కృషి విజ్ఞాన కేంద్రాన్ని సందర్శించండి.",
        "loading": "పథకాలు లోడ్ అవుతున్నాయి...",
        "no_results": "ప్రస్తుతానికి ఎటువంటి క్రియాశీల పథకాలు కనుగొనబడలేదు.",
        "error": "పథకాలను లోడ్ చేయడంలో విఫలమైంది. దయచేసి తర్వాత మళ్ళీ ప్రయత్నించండి."
      },
      "categories": {
        "pesticides": "పురుగుమందులు",
        "fertilizers": "ఎరువులు",
        "tools": "పరికరాలు",
        "schemes": "పథకాలు"
      }
    }
  },
  hi: {
    translation: {
      "app_name": "फॉर्मर फ्रेंड",
      "premium_tag": "प्रीमियम एग्री-सास",
      "nav": {
        "home": "होम",
        "search": "खोजें",
        "schemes": "योजनाएं",
        "profile": "प्रोफ़ाइल"
      },
      "auth": {
        "login_title": "स्वागत है",
        "login_subtitle": "अपने खाते में लॉग इन करें",
        "register_title": "फॉर्मर फ्रेंड से जुड़ें",
        "register_subtitle": "अपनी डिजिटल खेती की यात्रा शुरू करें",
        "email": "ईमेल पता",
        "password": "पासवर्ड",
        "name": "पूरा नाम",
        "login_btn": "लॉग इन",
        "register_btn": "पंजीकरण",
        "no_account": "खाता नहीं है?",
        "has_account": "पहले से खाता है?"
      },
      "profile": {
        "title": "आपकी प्रोफ़ाइल",
        "logout": "लॉग आउट",
        "member_since": "सदस्यता की तिथि"
      },
      "dashboard": {
        "hero_title": "अपनी खेती को आधुनिक बनाएं।",
        "hero_subtitle": "स्वागत है, अनिल! आज आपके खेत में क्या हो रहा है, यहां देखें।",
        "ai_assistant": "AI सहायक",
        "market_insights": "बाजार जानकारी",
        "weather": "मौसम",
        "humidity": "नमी",
        "live_prices": "लाइव दरें",
        "news": "समाचार",
        "explore_categories": "श्रेणियां देखें",
        "expert_advice": "विशेषज्ञ सलाह",
        "support_schemes": "सहायता योजनाएं"
      },
      "search": {
        "title": "कृषि निर्देशिका",
        "subtitle": "कीटनाशक, उर्वरक और उपकरण खोजें",
        "loading": "कैटलॉग लोड हो रहा है...",
        "no_results": "आपकी खोज से मेल खाने वाला कोई उत्पाद नहीं मिला।",
        "error": "उत्पाद प्राप्त करने में विफल। कृपया अपना कनेक्शन जांचें।"
      },
      "schemes": {
        "title": "सरकारी योजनाएं",
        "subtitle": "नवीनतम कृषि लाभों के साथ अपडेट रहें",
        "help_title": "आवेदन करने में सहायता चाहिए?",
        "help_text": "अपने आधार और भूमि दस्तावेजों के साथ अपने नजदीकी कृषि विज्ञान केंद्र पर जाएं।",
        "loading": "योजनाएं लोड हो रही हैं...",
        "no_results": "इस समय कोई सक्रिय योजना नहीं मिली।",
        "error": "योजनाएं लोड करने में विफल। कृपया बाद में पुन: प्रयास करें।"
      },
      "categories": {
        "pesticides": "कीटनाशक",
        "fertilizers": "उर्वरक",
        "tools": "उपकरण",
        "schemes": "योजनाएं"
      }
    }
  },
  kn: {
    translation: {
      "app_name": "ಫಾರ್ಮರ್ ಫ್ರೆಂಡ್",
      "premium_tag": "ಪ್ರೀಮಿಯಂ ಅಗ್ರಿ-ಸಾಸ್",
      "nav": {
        "home": "ಹೋಮ್",
        "search": "ಹುಡುಕಾಟ",
        "schemes": "ಯೋಜನೆಗಳು",
        "profile": "ಪ್ರೊಫೈಲ್"
      },
      "auth": {
        "login_title": "ಸ್ವಾಗತ",
        "login_subtitle": "ನಿಮ್ಮ ಖಾತೆಗೆ ಲಾಗಿನ್ ಮಾಡಿ",
        "register_title": "ಫಾರ್ಮರ್ ಫ್ರೆಂಡ್ ಸೇರಿ",
        "register_subtitle": "ನಿಮ್ಮ ಡಿಜಿಟಲ್ ಕೃಷಿ ಪ್ರಯಾಣವನ್ನು ಪ್ರಾರಂಭಿಸಿ",
        "email": "ಇಮೇಲ್ ವಿಳಾಸ",
        "password": "ಪಾಸ್‌ವರ್ಡ್",
        "name": "ಪೂರ್ಣ ಹೆಸರು",
        "login_btn": "ಲಾಗಿನ್",
        "register_btn": "ನೋಂದಣಿ",
        "no_account": "ಖಾತೆ ಇಲ್ಲವೇ?",
        "has_account": "ಈಗಾಗಲೇ ಖಾತೆ ಇದೆಯೇ?"
      },
      "profile": {
        "title": "ನಿಮ್ಮ ಪ್ರೊಫೈಲ್",
        "logout": "ಲಾಗ್ ಔಟ್",
        "member_since": "ಸದಸ್ಯತ್ವದ ದಿನಾಂಕ"
      },
      "dashboard": {
        "hero_title": "ನಿಮ್ಮ ಕೃಷಿಯನ್ನು ಆಧುನೀಕರಿಸಿ.",
        "hero_subtitle": "ಸ್ವಾಗತ, ಅನಿಲ್! ಇಂದು ನಿಮ್ಮ ಹೊಲದಲ್ಲಿ ಏನಾಗುತ್ತಿದೆ ಎಂಬುದು ಇಲ್ಲಿದೆ.",
        "ai_assistant": "AI ಸಹಾಯಕಿ",
        "market_insights": "ಮಾರುಕಟ್ಟೆ ಮಾಹಿತಿ",
        "weather": "ಹವಾಮಾನ",
        "humidity": "ತೇವಾಂಶ",
        "live_prices": "ಲೈವ್ ಬೆಲೆಗಳು",
        "news": "ಸುದ್ದಿ",
        "explore_categories": "ವರ್ಗಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
        "expert_advice": "ತಜ್ಞರ ಸಲಹೆ",
        "support_schemes": "ಬೆಂಬಲ ಯೋಜನೆಗಳು"
      },
      "search": {
        "title": "ಕೃಷಿ ಮಾಹಿತಿ ಕೋಶ",
        "subtitle": "ಕೀಟನಾಶಕಗಳು, ಗೊಬ್ಬರಗಳು ಮತ್ತು ಪರಿಕರಗಳನ್ನು ಹುಡುಕಿ",
        "loading": "ಮಾಹಿತಿ ಲೋಡ್ ಆಗುತ್ತಿದೆ...",
        "no_results": "ನಿಮ್ಮ ಹುಡುಕಾಟಕ್ಕೆ ಯಾವುದೇ ಉತ್ಪನ್ನಗಳು ಕಂಡುಬಂದಿಲ್ಲ.",
        "error": "ಉತ್ಪನ್ನಗಳನ್ನು ಪಡೆಯಲು ವಿಫಲವಾಗಿದೆ. ದಯವಿಟ್ಟು ನಿಮ್ಮ ಸಂಪರ್ಕವನ್ನು ಪರಿಶೀಲಿಸಿ."
      },
      "schemes": {
        "title": "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು",
        "subtitle": "ಇತ್ತೀಚಿನ ಕೃಷಿ ಪ್ರಯೋಜನಗಳೊಂದಿಗೆ ನವೀಕೃತವಾಗಿರಿ",
        "help_title": "ಅರ್ಜಿ ಸಲ್ಲಿಸಲು ಸಹಾಯ ಬೇಕೇ?",
        "help_text": "ನಿಮ್ಮ ಆಧಾರ್ ಮತ್ತು ಭೂ ದಾಖಲೆಗಳೊಂದಿಗೆ ನಿಮ್ಮ ಹತ್ತಿರದ ಕೃಷಿ ವಿಜ್ಞಾನ ಕೇಂದ್ರಕ್ಕೆ ಭೇಟಿ ನೀಡಿ.",
        "loading": "ಯೋಜನೆಗಳು ಲೋಡ್ ಆಗುತ್ತಿವೆ...",
        "no_results": "ಈ ಸಮಯದಲ್ಲಿ ಯಾವುದೇ ಸಕ್ರಿಯ ಯೋಜನೆಗಳು ಕಂಡುಬಂದಿಲ್ಲ.",
        "error": "ಯೋಜನೆಗಳನ್ನು ಲೋಡ್ ಮಾಡಲು ವಿಫಲವಾಗಿದೆ. ದಯವಿಟ್ಟು ನಂತರ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ."
      },
      "categories": {
        "pesticides": "ಕೀಟನಾಶಕಗಳು",
        "fertilizers": "ಗೊಬ್ಬರಗಳು",
        "tools": "ಪರಿಕರಗಳು",
        "schemes": "ಯೋಜನೆಗಳು"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
