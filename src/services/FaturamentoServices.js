import { URL_API } from "./BaseService";

export function consultarFaturamento(callback) {
    fetch(`${URL_API}/faturamento`).then(resultado => resultado.json().then(callback));
}