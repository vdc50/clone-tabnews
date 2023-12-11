function status(request, response) {
  // e response devolve a resposta == por convensão 200 é resposta ok
  // trocamos o 'send' por 'json' que adimite charset=utf-8
  // response.status(200).send("são acima da média");
  response.status(200).json({ chave: "status do serviço" });

  //request para requisição externa
}

export default status;
