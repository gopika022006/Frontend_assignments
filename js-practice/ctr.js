// Exercise 1
{
  let a = 1;
  console.log(a);
  let b = ++a;
  console.log(b);
  let c = a++;
  console.log(c);
  console.log(a + b + c);
}

// Exercise 2
{
  const a = 5;
  const b = 5;
  const c = a - b;
  const d = c;
  console.log(d);
}

// Exercise 3
console.log(typeof []);

{
  let user = { name: "gopi", age: 20 };
  const { name } = user;
  console.log(name);
}

// Exercise 4
{
  const a = "5";
  const b = "10";
  const c = (b + a) - (a + b);
  console.log(c);
}

// Exercise 5
{
  const a = "5";
  const b = "10";
  const c = (Number(b) * a) + (a * b);
  console.log(c);
}

// Exercise 6
{
  const a = "5";
  const b = "10";
  const c = (Number(b) * a) + (a + b);
  console.log(c);
}

// Exercise 7
{
  const a = "5";
  const b = 5;
  const c = a == b;
  console.log(c);
}

// Exercise 8
{
  const a = "5";
  const b = 5;
  const c = a === b;
  console.log(c);
}

console.log("1" === 1); // false
console.log("1" === String(1)); // true
