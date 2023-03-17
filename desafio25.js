db.produtos.updateMany(
  {
    "valoresNutricionais.2.percentual": { $gte: 40 }, 
  },
  {
    $push: {
      tags: {
        $each: ["muito sódio"],
      },
    },
  },
);

db.produtos.find(
  {},
  { nome: 1, tags: 1, _id: 0 },
);

// ### 25 - Adicione o valor `muito sódio` ao final do _array_ `tags` nos produtos em que o `percentual` de `sódio` seja maior ou igual a `40`