import { getLocales } from "expo-localization"
import { View, Text } from "react-native";

const FormattingValuesScreen = () => {
    const localeInfo = getLocales()[0];
    const locale = localeInfo.languageTag;
    const currencyCode = localeInfo.currencyCode || 'USD';

    const number = new Intl.NumberFormat(locale).format(123456.789);
    const date = new Intl.DateTimeFormat(locale).format(new Date());
    const currency = new Intl.NumberFormat(locale, { style: 'currency', currency: currencyCode }).format(123456.789);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Locale: {locale}</Text>
            <Text>Number: {number}</Text>
            <Text>Date: {date}</Text>
            <Text>Currency: {currency}</Text>
        </View>
    );
}

export default FormattingValuesScreen;
