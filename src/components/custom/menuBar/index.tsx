import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { format } from "date-fns";
import { es } from "date-fns/locale/es";

export const MenuBar: React.FC = () => {
    const fechaActual = new Date();
    const diaSemana = format(fechaActual, "EEEE", { locale: es });
    const diaMes = format(fechaActual, "d");
    const mesAbreviado = format(fechaActual, "MMM", { locale: es });
    const anio = format(fechaActual, "yyyy");

    const fechita = `${diaSemana}, ${diaMes} de ${mesAbreviado} ${anio}`;

    return (
        <View style={styles.container}>
            <Image source={require("../../../assets/logo.png")} style={{ width: 85, height: 45 }} />
            <Text style={styles.fechitaa}>{fechita}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingHorizontal: 20,
        backgroundColor: "#ffff",
        height: 85,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    fechitaa: {
        fontFamily: "Poppins-Bold",
        fontSize: 12,
        color: "#878787",
    },
});
