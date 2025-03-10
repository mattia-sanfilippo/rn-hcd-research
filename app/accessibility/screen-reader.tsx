import { Button, Text, View } from "react-native";

/*
Support for screen readers is built into React Native. 
With the accessible prop, you can specify whether an element should be announced by the screen reader.
The implementation is easy, doesn't require any external library and the content gets successfully read through VoiceOver and TalkBack.
Most of the React Native built-in components support the accessibilityLabel prop.
*/

const ScreenReaderScreen = () => {
    return (
        <View accessible={true} accessibilityLabel="Welcome message">
            <Text>Welcome to the app!</Text>
            <Button title="Continue" accessibilityLabel="Continue button" onPress={() => console.log('Pressed')} />
        </View>
    );
}

export default ScreenReaderScreen;