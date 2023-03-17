db.produtos.updateMany(
  {},
  {
    $push: {
      valoresNutricionais: {
        $each: [],
        $sort: { percentual: -1 },
        },
      },
    },
);

db.produtos.find({}, { nome: 1, valoresNutricionais: 1, _id: 0 });

// ### 24 - Ordene em todos os documentos os valores do _array_ `valoresNutricionais` pelo campo `percentual` de forma decrescente