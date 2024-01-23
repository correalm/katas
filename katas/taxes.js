function applyTaxes(salary) {
  let tax = 0

  if (salary <= 2000) {
    return "Isento";
  }

  tax += Math.min(1000, salary - 2000) * 0.08
  if(salary > 3000) tax += Math.min(1500, salary - 3000) * 0.18 
  if(salary > 4500) tax += (salary - 4500) * 0.28

  return formatToCurrency(tax);
}

function formatToCurrency(value){
  return "R$ " + value.toFixed(2).toLocaleString();
}

export default applyTaxes;