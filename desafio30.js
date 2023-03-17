db.produtos.updateMany(
  { nome: "Big Mac" },
  { $unset: {
      curtidas: "",
    },
  },
);

db.produtos.find({}, { nome: 1, curtidas: 1, _id: 0 });

// ### 30 - Remova o campo `curtidas` do item `Big Mac`