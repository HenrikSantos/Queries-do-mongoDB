db.produtos.updateMany(
  {},
  { $rename: {
      descricao: "descricaoSite",
    },
  },
);

db.produtos.find({}, { nome: 1, descricaoSite: 1, _id: 0 });

// ### 29 - Renomeie o campo `descricao` para `descricaoSite` em todos os documentos