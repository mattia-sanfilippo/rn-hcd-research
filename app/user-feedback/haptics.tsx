import { Button, Vibration } from "react-native"

const HapticsScreen = () => {
    const triggerHaptic = () => {
       Vibration.vibrate([100, 200, 100]);
    }

    return (
        <Button title="Trigger Haptic" onPress={triggerHaptic} />
    )
}

export default HapticsScreen;