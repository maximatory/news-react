import { useState } from "react";

export const useFilters = (initinalFilters) => {
    const [filters, setFilters] = useState(initinalFilters)
    
    const changeFilter = (key, value)=>{
        setFilters({...filters, [key]: value})
    }

    return {filters, changeFilter}
}