import axios from "axios"

export const Pegafilmes = (setState) => {
    axios.get(`https://api.themoviedb.org/3/movie/550?api_key=477de5153f1a321756c379492521f1a4`)
    .then((resposta) =>{
        setState(resposta)
    }).catch((erro)=>{
        console.log(erro)
    })
}