
let rows = ["Naomi", "Quincy", "CamperChan"];
let cities = ["London", "New York", "Mumbai"];
console.log(cities);
cities[cities.length - 1] = "Mexico City";
console.log(cities);
console.log(rows);

//for
for (iterator; condition; iteration) {
  logic;
}
for (start; condition; update) {
}
// for of i
for (const value of iterable) {
}
for (const row of rows) {
  //“For each value of the array rows, temporarily call it row” - No indexes. No rows[i]. Just values.
}