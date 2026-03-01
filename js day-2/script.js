// Create
const student = {
    "name": "Aaditya",
    "city": "Moradabad",
};

// Read
console.log(student);
console.log(student.name);
console.log(student['city']);

// Update
student["Country"] = "India";
student["city"] = "Mumbai" // Replacing the new value with the old value
console.log(student);

// Delete
delete student.name;

// Copy
const student2 = student;
student2.city = "Jaipur";

console.log(student);
console.log(student2);