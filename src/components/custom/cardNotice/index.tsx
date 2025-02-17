import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, RefreshControl, SafeAreaView, ScrollView } from "react-native"

interface CardNoticeProps {
    title: string
    redactionBy: string
    date: string
    image: string
}

export const CardNoticie = ({ title, redactionBy, date, image }: CardNoticeProps) => {
    return (
        <View style={styles.containerCard}>
            <TouchableOpacity>
                <View style={styles.cardBody}>
                    <View style={styles.sectiondata}>
                        <View style={styles.cardBodyTitle}>
                            <Text style={styles.titlestyle}>{title}</Text>
                            <Text style={styles.autorcito}>{redactionBy}</Text>
                            <Text style={styles.fechita}>{date}</Text>
                        </View>
                        <Image source={{ uri: image }} style={{ width: 108, height: 83 }} />
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    textError: {
        color: "red",
        textAlign: "center",
        fontSize: 35
    },
    containerCard: {
        flex: 1,
        justifyContent: "center",
        paddingBottom: 20,
    },
    titleCard: {
        fontSize: 18,
        paddingVertical: 5,
        textAlign: "center",
        color: "#ffff",
        fontWeight: "bold",
        marginVertical: 25,
        marginHorizontal: 25,
        backgroundColor: "#9A0518"
    },
    fechita: {
        color: "#878787",
        fontSize: 10,
    },
    autorcito: {
        color: "#9A0518",
        fontSize: 11,
    },
    cardBody: {
        width: "auto",
        gap: 10,
        backgroundColor: "#ffffff",
        padding: 20,
        borderColor: "#ccc",
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    cardBodyTitle: {
        width: "55%",
        gap: 2,
    },
    cardBodyDescription: {
        fontSize: 15,
        color: "#514F4F",
    },
    titlestyle: {
        fontSize: 12.5,
        color: "#000",
    },
    sectiondata: {
        flexDirection: "row",
        gap: 40,
        alignItems: "center",
    },
    modalContainer: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.7)",
        maxHeight: "100%",
    },
    modalContent: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
        maxHeight: "100%"
    },
    closeButton: {
        backgroundColor: "#9A0518",
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    }
})
