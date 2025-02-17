import { ScrollView, Text } from "react-native"
import { useFetch } from "../../../hooks/useFetch"
import { CardEvent } from "../../../components/custom"

export const Events = () => {

    const { data, error, isLoading } = useFetch("/news")

    if (isLoading) {
        return <Text>Cargando...</Text>
    }

    if (error) {
        return <Text>Error</Text>
    }

    return (
        <ScrollView style={{ backgroundColor: "white" }}>
            {data.map((item: any, index: any) => (
                <CardEvent
                    key={index}
                    date={item.date}
                    title={item.title}
                    image={item.image}
                    redactionBy={item.redactionBy}
                />
            ))}
        </ScrollView>
    )
}
