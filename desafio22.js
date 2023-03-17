db.produtos.updateMany(
  {},
  {
    $set: {
      vendasPorDia: [0, 0, 0, 0, 0, 0, 0],
    },
  },
);

db.produtos.update(
  {
    nome: "Big Mac",
  },
  {
    $inc: {
      "vendasPorDia.3": 60, 
    },
  },
);

db.produtos.updateMany(
  {
    tags: { $in: ["bovino"] },
  },
  {
    $inc: {
      "vendasPorDia.6": 120, 
    },
  },
);

db.produtos.find(
  {},
  { nome: 1, vendasPorDia: 1, _id: 0 },
);

// ### 22 - Adicione a quantidade de vendas dos sanduíches por dia da semana