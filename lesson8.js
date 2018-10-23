//Desired result Print out all people under age 50

var people = [
    { name: "John", age: 55 },
    { name: "Roger", age: 44 },
    { name: "Betty", age: 37 }
    ]

var nameFilter = function() {
    for (var i = 0; i < people.length; i++) {
        if (people[i].age < 50) {
            console.log("My Name is " + people[i].name)
        }
    }
}
nameFilter()
