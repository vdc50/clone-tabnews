import database from "infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 as sum;");
  console.log(result.rows);
  response.status(200).json({ chave: "status do serviço" });
}

export default status;
//request para requisição externa
// response devolve a resposta == por convensão 200 é resposta ok
// trocamos o 'send' por 'json' que adimite charset=utf-8
// response.status(200).send("são acima da média");
