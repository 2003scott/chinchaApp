import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface CarNoticeProps {
    img?: string;
    text?: string;
    subtitle?: string;
    date?: string;
    id?: string;
}

export const CardNotice: React.FC<CarNoticeProps> = ({ img, text, subtitle, date }) => {
    return (
        <View style={styles.container}>
            <View>
                <Image source={{ uri: img }} style={styles.image} />
            </View>
            <View style={styles.content}>
                <Text>{text}</Text>
                <View style={styles.details}>
                    <View style={styles.subtitleContainer}>
                        <Text>{subtitle}</Text>
                        <Text>{date}</Text>
                    </View>
                    <View style={styles.icons}>

                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    image: {

    },
    content: {

    },
    details: {

    },
    subtitleContainer: {

    },
    icons: {

    },
    icon: {

    },
});
