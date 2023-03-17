db.produtos.updateMany(
  {
    "valoresNutricionais.2.percentual": { $gt: 20, $lt: 40 }, 
  },
  {
    $push: {
      tags: {
        $each: ["contém sódio"],
      },
    },
  },
);

db.produtos.find(
  {},
  { nome: 1, tags: 1, _id: 0 },
);

// ### 26 - Adicione o valor `contém sódio` ao final do _array_ `tags` nos produtos em que o `percentual` de `sódio` seja maior do que `20` e menor do que `40`