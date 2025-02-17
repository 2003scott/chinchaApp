import { ScrollView, Text } from "react-native"
import { useFetch } from "../../../hooks/useFetch"
import { CardWarning } from "../../../components/custom/cardWarning"

export const Warning = () => {

    const { data, error, isLoading } = useFetch("/news/others/announcements")

    if (isLoading) {
        return <Text>Cargando...</Text>
    }

    if (error) {
        return <Text>Error</Text>
    }

    return (
        <ScrollView style={{ backgroundColor: "white" }}>
            {data.map((item: any, index: any) => (
                <CardWarning
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
