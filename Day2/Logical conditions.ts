
export {};

const username: string = "john";
const password: string = "test123";
const accountLocked: boolean = false;

if (username !== "" && password !== "" && !accountLocked) {
  console.log("Login conditions satisfied");
} else {
  console.log("Login conditions not satisfied");
}
