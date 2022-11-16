import axios from "axios";

export function CadastrarCandidato(Candidato) {
    axios.post('http://localhost:3000/api/candidatos', 
        {
            "nome": Candidato.nome,
            "numero": Candidato.numero,
            "cargo": Candidato.cargo,
            "descricao": Candidato.descricao,
            "partido": Candidato.partido
        }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
    
     
}
