import { getLocales } from "expo-localization";
import { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";

const translations = {
    en: { greeting: "Hello", button: "Change to French" },
    fr: { greeting: "Bonjour", button: "Changer en anglais" },
  };

const MultiLanguageSupportScreen = () => {
    const [language, setLanguage] = useState('en');


  useEffect(() => {
    const locales = getLocales();
    if (locales.length > 0) {
      const systemLang = locales[0].languageCode;
      setLanguage(translations[systemLang] ? systemLang : 'en');
    }
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{translations[language]?.greeting || translations['en'].greeting}</Text>
      <Button
        title={translations[language]?.button || translations['en'].button}
        onPress={() => setLanguage(language === 'en' ? 'fr' : 'en')}
      />
    </View>
  );
}

export default MultiLanguageSupportScreen;