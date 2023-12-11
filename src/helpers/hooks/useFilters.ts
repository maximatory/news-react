import { useState } from "react";
import { IFilters } from "../../interfaces/interfaxes";

export const useFilters = (initinalFilters:IFilters) => {
    const [filters, setFilters] = useState<IFilters>(initinalFilters)
    
    const changeFilter = (key:string, value:string | number | null)=>{
        setFilters({...filters, [key]: value})
    }

    return {filters, changeFilter}
}