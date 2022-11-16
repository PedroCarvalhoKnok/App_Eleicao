import Resultado from "../componentes/resultado";

export default function CadastrarCandidato(Candidato) {
    
    fetch("http://localhost:3000/api/candidatos")
       .then((response) => response.json())
       .then((json) => console.log(json));
 
}