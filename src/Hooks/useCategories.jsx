import { useQuery } from "@tanstack/react-query";
import axios from "axios";


async function getCategories(){
    const {data}=await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
    return data
}


export function useCategories(){
    return useQuery({
        queryKey:["categories"],
        queryFn:getCategories,
        staleTime:0
    })
}