
const testName: string = "Login API";
const expectedStatus: number = 200;
let actualStatus: number = 200;

const isStatusCorrect: boolean =
  actualStatus === expectedStatus;

const testResult: string =
  isStatusCorrect ? "PASSED" : "FAILED";

console.log("Test Name:", testName);
console.log("Expected Status:", expectedStatus);
console.log("Actual Status:", actualStatus);
console.log("Result:", testResult);
