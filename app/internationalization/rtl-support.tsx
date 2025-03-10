import { getLocales } from "expo-localization";
import { useEffect, useState } from "react";
import { Button, I18nManager, View, Text } from "react-native";

/**
 * RTL is supported by default on React Native, 
 * but the I18nManager needs to call the forceRTL method to change language and direction while the app is running.
 */

const translations = {
    en: { greeting: "Hello", button: "Change to Arabic" },
    ar: { greeting: "مرحبا", button: "تغيير الى الانجليزية" },
  };

const RtlSupportScreen = () => {
    const locale = getLocales()[0].languageCode;
    const [language, setLanguage] = useState<keyof typeof translations>(locale && locale in translations ? locale as keyof typeof translations : 'en');

  useEffect(() => {
    const isRTL = language === 'ar';
    I18nManager.forceRTL(isRTL);
  }, [language]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
      }}
    >
      <Text>{translations[language]?.greeting}</Text>
      <Button
        title={translations[language]?.button}
        onPress={() => setLanguage(language === 'en' ? 'ar' : 'en')}
      />
    </View>
  );
}

export default RtlSupportScreen;