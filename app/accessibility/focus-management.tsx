import { Button, Text, View } from "react-native";

/*
In React Native, the focus management is handled by the native platform. The accessibilityLabel prop is used to provide a label for the element that can be read by the screen reader.
*/

const FocusManagementScreen = () => {
    return (
        <View>
            <Text accessible={true} accessibilityLabel="User Profile">
                John Doe
            </Text>
            <Button title="Edit Profile" accessibilityLabel="Edit Profile Button" />
        </View>
    );
}

export default FocusManagementScreen;