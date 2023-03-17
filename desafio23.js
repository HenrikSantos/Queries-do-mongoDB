db.produtos.updateMany(
  {},
  {
    $push: {
      tags: { $each: ["combo", "tasty"], $sort: 1 },
    },
  },
);

db.produtos.find({}, { nome: 1, tags: 1, _id: 0 });

// ### 23 - Insira os valores `combo` e `tasty` no _array_ `tags` de todos os sanduíches e aproveite para deixar os valores em ordem alfabética ascendente (A a Z)