db.produtos.find(
  { vendidos: { $ne: 50 }, tags: { $exists: false } },
  { nome: 1, vendidos: 1, _id: 0 },
);

// ### 7 - Retorne o `nome` e `vendidos` dos lanches que tenham sido `vendidos` com uma quantidade diferente de `50` e em que o campo `tags` não exista