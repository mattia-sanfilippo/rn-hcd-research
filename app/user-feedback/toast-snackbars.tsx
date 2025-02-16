import { Alert, Button } from "react-native"

const ToastSnackbarsScreen = () => {
    const showAlert = () => {
        Alert.alert("Success", "Your action was successful!", [{
            text: "OK",
        }]);
    };

    return (
        <Button title="Show Alert" onPress={showAlert} />
    );
}

export default ToastSnackbarsScreen;