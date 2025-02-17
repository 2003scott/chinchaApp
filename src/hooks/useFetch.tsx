import { useQuery, UseQueryResult } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { http } from "../proxys/http"

const fetchQuery = async (url: string) => {
    try {
        const response = await http.get(`${url}`)
        if (response.status === 200) {
            return response.data.result
        }
    } catch (error) {
        if (error instanceof AxiosError) {
            throw new Error(error.response?.data?.message || error.message)
        }
    }
}

export function useFetch<T>(endpoint: string): UseQueryResult<T | any> {
    const usequery = useQuery<T | any>({ queryKey: [`${endpoint}`], queryFn: () => fetchQuery(endpoint) })
    return usequery
}
