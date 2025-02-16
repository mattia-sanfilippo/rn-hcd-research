import { StyleSheet, View, Text } from "react-native"

const StylingFlexibilityScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Styling Flexibility Screen</Text>
            <View style={styles.rectangle} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 24,
        color: "#ff9900",
    },
    rectangle: {
        width: 100,
        height: 50,
        backgroundColor: "blue",
    },
});

export default StylingFlexibilityScreen;