db.produtos.find(
  { $expr: { $gt: ["$curtidas", "$vendidos"] } },
  { nome: 1, _id: 0 },
);

// ### 31 - Retorne o `nome` dos sanduíches em que o número de `curtidas` é maior que o número de sanduíches `vendidos`