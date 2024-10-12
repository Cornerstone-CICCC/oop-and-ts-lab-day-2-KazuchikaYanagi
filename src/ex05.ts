// Create a function `generateSummary` that accepts an array of objects representing users with `name`, `age`, and `active` properties.
// The function should return a summary object containing the number of active users and the average age of active users.
// Return type: { activeCount: number, averageAge: number }

interface User {
  name: string;
  age: number;
  active: boolean;
}

function generateSummary(users: User[]) {
  const activeUser = users.filter((user) => user.active);
  // console.log(filter);
  const aveAge = activeUser.reduce((acc, cur) => acc + cur.age, 0);
  console.log(
    `{activeCount: ${activeUser.length}, averageAge: ${
      aveAge / activeUser.length
    }}`
  );
}

// Expected output:
generateSummary([
  { name: "Alice", age: 30, active: true },
  { name: "Bob", age: 25, active: false },
  { name: "Charlie", age: 35, active: true },
]);
// { activeCount: 2, averageAge: 32.5 }
