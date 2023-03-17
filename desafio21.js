db.produtos.updateMany(
  {
    nome: "Cheddar McMelt",
  },
  {
    $pop: {
      ingredientes: 1,
    },
  },
);

db.produtos.find({}, { nome: 1, ingredientes: 1, _id: 0 });

// ### 21 - Remova o último `ingrediente` do sanduíche `Cheddar McMelt`