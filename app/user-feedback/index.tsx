import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import { Link } from "expo-router";

const UserFeedback = () => {
    return (
        <SafeAreaView>
            <Link href="/user-feedback/toast-snackbars"><Text>Toast & Snackbars</Text></Link>
            <Link href="/user-feedback/activity-indicator"><Text>Activity Indicators</Text></Link>
            <Link href="/user-feedback/form-errors"><Text>Form Errors</Text></Link>
            <Link href="/user-feedback/haptics"><Text>Haptics</Text></Link>
        </SafeAreaView>
    );
};

export default UserFeedback;