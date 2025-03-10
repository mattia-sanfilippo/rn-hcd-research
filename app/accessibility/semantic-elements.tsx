import { Button, Text, View } from "react-native";

/*
The accessibilityRole prop is used to specify the role of the element, which can be used by screen readers to provide more context to the user.
the role is available for all the Views with the accessibilityRole prop.
*/

const SemanticElementsScreen = () => {
    return (
        <View>
        <View accessibilityRole="header">
            <Text>Welcome to the app!</Text>
        </View>
            <Button title="Continue" accessibilityLabel="Continue button" onPress={() => console.log('Pressed')} />
        </View>
    );
}

export default SemanticElementsScreen;