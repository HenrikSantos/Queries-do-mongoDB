db.produtos.count(
  {
    ingredientes: { $size: 4 },
  },
);

// ### 28 - Conte quantos produtos têm `4` ingredientes