import { Button, Text, View } from "react-native";

/*
The following snippet shows how to make a component accessible and navigable using the keyboard.
*/

const KeyboardNavigationScreen = () => {
    return (
        <View
            accessible={true}
            accessibilityActions={[
                { name: 'activate', label: 'Press Enter' },
            ]}
            onAccessibilityAction={(event) => {
                if (event.nativeEvent.actionName === 'activate') {
                    console.log('Activated');
                }
            }}>
            <Text>Press Enter to activate</Text>
        </View>
    );
}

export default KeyboardNavigationScreen;