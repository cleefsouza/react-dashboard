import { URL_API } from "./BaseService";

export function listarConsultas(callback) {
    fetch(`${URL_API}/consultas`).then(resultado => resultado.json().then(callback));
}