db.produtos.find(
  { curtidas: { $gt: 10, $lt: 100 } },
  { nome: 1, curtidas: 1, _id: 0 },
);
// ### 6 - Retorne o `nome` e as `curtidas` dos lanches que tiveram curtidas maiores que `10` e menores que `100`
