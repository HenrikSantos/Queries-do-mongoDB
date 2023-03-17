db.produtos.find(
  {
    ingredientes: {
      $elemMatch: { $eq: "picles" },
    },
  },
  {
    nome: 1,
    ingredientes: 1,
    valoresNutricionais: { $slice: 3 },
    _id: 0,
  },
);

// ### 14 - Crie uma query que retorne todos os lanches que possuem *picles* em seus ingredientes e mostre apenas os `3` primeiros itens contidos no array `valoresNutricionais`