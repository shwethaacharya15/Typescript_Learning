
function checkStatus(
  actualStatus: number,
  expectedStatus: number
): boolean {
  return actualStatus === expectedStatus;
}

console.log(checkStatus(200, 200)); 
console.log(checkStatus(500, 200)); 
