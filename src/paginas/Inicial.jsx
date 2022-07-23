import {Footer} from "../componente/Footer";
import {Cards} from "../componente/Cards";
import { useEffect, useState } from "react";


 function Inicial(){
     const [imagens , setImagens] = useState("Div da imagem")

      useEffect(()=>{
        setTimeout(()=>setImagens("Novo Valor"),5000)
      },[])

    return(
        <div>
          <div>{imagens}</div>
          <div>
            <h2>Filmes Populares(div dos cards)</h2>
            <Cards/>
          </div>
          <Footer texto="Chorei Largado"  />
        </div>
        
    )
}

export default Inicial;