import { Button, Text, View } from "react-native";

/*
In React Native, the text scales with the device settings by default.
*/

const DynamicTextScalingScreen = () => {
    return (
        <View>
            <Text style={{ fontSize: 16 }}>
                This text will scale with the device settings
            </Text>
        </View>
    );
}

export default DynamicTextScalingScreen;