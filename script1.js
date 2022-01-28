// დავალება 1

let user = {
    firstName: 'Giorgi',
    lastName: "Karosanidze",
    age: 27,
    studentStatus: 'Active'
};

console.log(user.studentStatus);


// -----------------------------------------------

//დავალება 2

let userNames = ['giorgi', 'khatia', 'nana', 'merabi'];

for (let i = 0; i < userNames.length; i++) {
    console.log(userNames[i]);
}

let item = 0;
while (item < userNames.length) {
    console.log(userNames[item]);
    item++
}

//-------------------------------------------------

// დავალება 3

let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];

for (let x = 0; x < numbers.length; x++) {
    if (numbers[x] > 5) {
        console.log(numbers[x]);
    }
}

//--------------------------------------------------

// დავალება 4 (მოცემული მასივიდან კონსოლში გამოვიტანოთ მარტო ის ობიექტი რომლის status პროპერტი მნიშვნელობა არის true;)

let users = [
    { username: 'test1', status: false },
    { username: 'test2', status: false },
    { username: 'test3', status: true }
];

for (let y = 0; y < users.length; y++) {
    if (users[y].status === true) {
        console.log(users[y]);
    }
}

//------------------------------------------------------

// დავალება 5 

let newUser = {
    name: 'giorgi',
    age: 27,
    studentstatus: 'active'
}

if (newUser.age > 18 && newUser.studentstatus === 'active') {
    console.log("HELLO");
}

if (newUser.name === 'giorgi') {
    console.log("Hello Giorgi");
}

if (newUser.studentstatus === "active" || newUser.age < 25) {
    console.log("Hello World");
} else {
    console.log("ERROR");
}

//-----------------------------------------------------------------

//დავალება 6 (გამოიტანეთ მარტო სრტინგები)

let array = ['watermelon', 'pear', 10, 45, 50, 'apple', 'ananas'];
for (let newItem = 0; newItem < array.length; newItem++) {
    if (typeof array[newItem] === "string") {
        console.log(array[newItem]);
    }
}