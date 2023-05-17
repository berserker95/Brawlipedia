import { useEffect, useState } from "react"
import axios from "axios"

export default function useFetch(searchType = 'brawlers'){

    const [data,setData] = useState(null)
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        (
            async function(){
                try{
                    setLoading(true)
                    const url = `https://api.brawlapi.com/v1/${searchType}`;
                    const response = await axios.get(url)
                    setData(response.data)
                }catch(err){
                    setError(err)
                }finally{
                    setLoading(false)
                }
            }
        )()
    }, [url])

    return { data, error, loading }
}
