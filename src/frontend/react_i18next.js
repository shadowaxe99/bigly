```javascript
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "Welcome to AI Assistant": "Welcome to AI Assistant",
          "Natural language understanding": "Natural language understanding",
          "Task decomposition": "Task decomposition",
          "Code generation": "Code generation",
          "Conversational interface": "Conversational interface",
          "Integration with tools": "Integration with tools",
          "Testing capabilities": "Testing capabilities",
          "Documentation": "Documentation"
        }
      }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
```