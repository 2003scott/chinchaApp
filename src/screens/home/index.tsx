import React, { useState } from 'react';
import { useWindowDimensions, ScrollView, Text } from "react-native"
import { TabView, SceneMap, TabBar } from "react-native-tab-view"
import { MenuBar } from '../../components/custom';
import { Notices } from './partials/Notices';
import { Events } from './partials/Events';


const primeraRuta = () => {
    return (
        <ScrollView style={{ backgroundColor: "white" }}>
            <Notices/>
        </ScrollView>
    )
}

const segundaRuta = () => {
    return (
        <ScrollView style={{ backgroundColor: "white" }}>
            <Events />
        </ScrollView>
    )
}

const terceraRuta = () => {
    return (
        <ScrollView style={{ backgroundColor: "white" }}>
            <Events />
        </ScrollView>
    )
}

const renderScene = SceneMap({
    primero: primeraRuta,
    segundo: segundaRuta,
    tercero: terceraRuta
})

export const HomeScreen = () => {

    const layout = useWindowDimensions()

    const [index, setIndex] = useState(0)
    const [routes] = useState([
        { key: 'primero', title: 'Noticias al día' },
        { key: 'segundo', title: 'Avisos' },
        { key: 'tercero', title: 'Eventos' }
    ])

    return (
        <>
            <MenuBar />
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={(props) => (
                    <TabBar
                        {...props}
                        indicatorStyle={{ backgroundColor: "#9A0518" }}
                        style={{ backgroundColor: "#ffff" }}
                        inactiveColor='#514F4F'
                        activeColor="#9A0518" />
                )} />
        </>
    )
}
