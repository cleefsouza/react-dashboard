import { URL_API } from "./BaseService";

export function consultarResumo(callback) {
    fetch(`${URL_API}/resumo`).then(resultado => resultado.json().then(callback));
}