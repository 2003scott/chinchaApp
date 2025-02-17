import { ScrollView, Text } from "react-native"
import { useFetch } from "../../../hooks/useFetch"
import { CardNoticie } from "../../../components/custom"

export const Notices = () => {

    const { data, error, isLoading} = useFetch("/news")

    if(isLoading) {
        return <Text>Cargando...</Text>
    }

    if(error) {
        return <Text>Error</Text>
    }

    return (
        <ScrollView style={{ backgroundColor: "white" }}>
            {data.map((item : any , index : any) => (
                <CardNoticie
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
