import { useQuery } from "@tanstack/react-query";
import axios from "axios";



 async function getAreas() {
    const{data}= await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
    return data
   
}


export function useArea() {
    return useQuery({
        queryKey:["area"],
        queryFn:getAreas,
        staleTime:0
    })
}