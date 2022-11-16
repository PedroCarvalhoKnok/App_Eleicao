import axios from "axios";

export function CadastrarPartido(Partido) {
    console.log(Partido)
    axios.post('http://localhost:3000/api/partidos', 
    {
        "descricao": Partido.descricao,
        "nome": Partido.nome,
        "numero": Partido.numero,
   
    }
  )
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.error(error);
  });
    
}