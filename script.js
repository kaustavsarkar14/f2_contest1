let arr = [
  { id: 1, name: 'john', age: 18, profession: 'developer', salary: 1000 },
  { id: 2, name: 'jack', age: 20, profession: 'developer', salary: 1100 },
  { id: 3, name: 'karen', age: 19, profession: 'admin', salary: 900 },
];

function PrintDeveloper(){
  arr.forEach(el=>console.log(el))
}


// 1. Print all developers from the array whose salary is above the average salary of the array.
function PrintHighEarningDevelopers() {
  //Write your code here , just console.log
  const averageSalary = arr.reduce((a, b) => a + b.salary, 0) / arr.length
  arr.forEach(el => {
    if (el.salary > averageSalary)
      console.log(el)
  })
}


// 2. Using a recursive function, add a new data object to the array until the user says 'no' via a prompt.
function addData() {
  //Write your code here, just console.log
  const userInput = prompt("Do you want to add a new user? (yes/no)")
  if (userInput == 'no') return
  else if (userInput == 'yes') {
    const id = parseInt(prompt("id:"))
    const name = prompt("name :")
    const age = parseInt(prompt("age:"))
    const profession = prompt("profession :")
    const salary = parseInt(prompt("salary:"))
    const newData = { id, name, age, profession, salary }
    arr.push(newData)
    console.log(arr)
  }
  else {
    alert("invalid input")
  }
}

// 3. Remove the youngest and oldest person from the array.
function removeYoungestAndOldest() {
  //Write your code here, just console.log
  let youngest = arr[0]
  let oldest = arr[0]
  arr.forEach(el => {
    if (el.age < youngest.age) youngest = el
    if (el.age > oldest.age) oldest = el
  })
  arr = arr.filter(el => el != youngest && el != oldest)
  console.log(arr)
}


// 4. Merge two arrays (use a dummy array for demonstration) such that the resulting array has no duplicate professions.
function concatenateArray() {
  //Write your code here, just console.log
  const dummyArray = [
    { id: 4, name: 'mary', age: 22, profession: 'designer', salary: 1200 },
    { id: 5, name: 'james', age: 25, profession: 'manager', salary: 1500 },
  ];
  arr = arr.concat(dummyArray)
  console.log(arr)
}

// 5. Find the person with the highest salary and reduce their salary by 10% as tax.
function applyTax() {
  //Write your code here, just console.log
  const highestSalaryPerson = arr.reduce((a, b) => (a.salary > b.salary ? a : b))
  highestSalaryPerson.salary -= highestSalaryPerson.salary * 0.1
  console.log(arr)
}

// 6. Check if every person in the array is a developer.
function isEveryoneDeveloper() {
  //Write your code here, just console.log
  const ans = arr.every(el => el.profession == "developer")
  console.log(ans)
}

// 7. Swap the professions of the first and last person in the array.
function swapProfessions() {
  //Write your code here, just console.log
  const firstPerson = arr[0]
  const lastPerson = arr[arr.length - 1]
  const temp = firstPerson.profession
  firstPerson.profession = lastPerson.profession
  lastPerson.profession = temp
  console.log(arr)
}


// 8. Using the `map` method, add a new property to each person called 'experience' with a default value of 1 year.
function addExperienceProperty() {
  //Write your code here, just console.log
  arr.map(el => el.experience = "1 year")
  console.log(arr)
}

// 9. Group persons by profession and count them. E.g., {developer: 2, admin: 1}.
function uniqueProfessions() {
  //Write your code here, just console.log
  let profession = {}
  arr.forEach(el => {
    profession[el.profession] = profession[el.profession] ? profession[el.profession] + 1 : 1
  })
  for(const p in profession){
    console.log(p)
  }
  return profession
}

// 10. Find the person who has a name with the longest length and capitalize their profession.
function capitalizeLongestNamedPersonProfession() {
  //Write your code here, just console.log
  const longestNamePerson = arr.reduce((a, b) => a.name.length > b.name.length ? a : b)
  longestNamePerson.profession = longestNamePerson.profession.toUpperCase()
  console.log(arr)
}

// 11. Create a function that shuffles the array in a random order.
function shuffleArray() {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  console.log(arr)
}


// 12. Create a function that rotates the array to the right by n steps, where n is provided as an argument.
function rotateArray(n) {
  //Write your code here, just console.log
  const len = arr.length;
  n %= len;
  const rotatedArr = [];

  for (let i = 0; i < len; i++) {
    const newIndex = (i + len - n) % len;
    rotatedArr[newIndex] = arr[i];
  }
  console.log(rotatedArr)
}

// 13. Create a function that finds the person with the closest age to a given number.
function findClosestAge(age) {
  //Write your code here, just console.log
  let closestAgePerson = arr[0]
  closestAgePerson = arr.reduce((a,b)=>Math.abs(a.age-age)<Math.abs(b.age-age)?a:b)
  console.log(closestAgePerson)
}

// 14. Create a function that checks if there's any repeated name in the array.
function hasRepeatedNames() {
  //Write your code here, just console.log
  const nameMap = {}
  let flag = false
  for(let i=0; i<arr.length ; i++){
    if(nameMap[arr[i].name]) flag = true
    nameMap[arr[i].name] = true
  }
  console.log(flag?"true": "false")
}

// remove admin 
function removeAdmin(){
  arr = arr.filter(el=>el.profession!='admin')
  console.log(arr)
}
// average age 
function averageAge(){
  const avg = arr.reduce((a,b)=>a+b.age, 0) / arr.length 
  console.log(avg)
}

// Validate if there's at least one person in the array who's older than 25.
function checkAgeAbove25(){
  let flag = false
  for(let i=0; i<arr.length ; i++){
    if(arr[i].age>25) flag = true
  }
  console.log(flag?"true":"false")
}

// sort by age
function sortByAge(){
  arr.sort((a,b)=>a.age-b.age)
  console.log(arr)
}

// Adjust 'john's profession to 'manager'.
function updateJohnsProfession(){
  let john = {}
  for(let i=0; i<arr.length; i++){
    if(arr[i].name=='john')
    john = arr[i]
  }
  john.profession = 'manager'
  console.log(arr)
}

// Calculate and print the total number of developers and admins in the array.
function getTotalProfessions(){
  let profession = {}
  arr.forEach(el => {
    profession[el.profession] = profession[el.profession] ? profession[el.profession] + 1 : 1
  })
  for(const p in profession){
    console.log(`There are ${profession[p]} ${p}`)
  }
}