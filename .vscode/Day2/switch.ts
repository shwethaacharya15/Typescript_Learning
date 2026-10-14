
const testStatus: string = "Failed";

switch (testStatus) {
  case "Passed":
    console.log("Test completed successfully");
    break;

  case "Failed":
    console.log("Investigate the defect");
    break;

  case "Skipped":
    console.log("Test was not executed");
    break;

  default:
    console.log("Unknown test status");
}
