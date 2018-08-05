export const formatCurrency = (formatCurrency, value, precision = 2) => {
  let num = Number(value)
  return num.toLocaleString("en-US", { 
    style: 'currency', 
    currency: formatCurrency,
    minimumFractionDigits: precision
  });
};