const sales = [
    { amount: 10000, quantity: 10 },
    { amount: 5000, quantity: 5 },
    { amount: 15000, quantity: 3 },
    { amount: 2000, quantity: 8 },
  ];
  
  const salesWithTotal = sales.map(sale => {
    return {
      ...sale, 
      Total: sale.amount * sale.quantity 
    };
  });
  
  const sortedSales = salesWithTotal.sort((a, b) => b.Total - a.Total);
  
  console.log(sortedSales);
  