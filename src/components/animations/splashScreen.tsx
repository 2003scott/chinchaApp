import { View, Image, StyleSheet } from "react-native"

export const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/iconchincha.png')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DD0E28',
    }
})
