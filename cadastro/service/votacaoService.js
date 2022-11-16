import axios from "axios";

export function InserirVoto(voto, cargo) {

    axios.post('http://localhost:3000/api/votacao',
        {
            "voto": voto,
            "cargo": cargo,

        }
    )
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.error(error);
        });


}
