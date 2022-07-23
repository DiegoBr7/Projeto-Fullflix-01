import { useEffect,useState } from "react"
import { Pegafilmes } from "../assets/api/api";

export function Cards (){
    const [filmes , setFilmes] = useState();

    useEffect(()=>{
        Pegafilmes(setFilmes)
    },[])

    return (
        <div>
               {!filmes ? "loading": <>
                {filmes.map((filmes) => {
                    return<p>{filmes.title}</p>
                })}
               </>}
        </div>
    )
}