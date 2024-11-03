const school = {
    name: "XYZ School",
    establishYear: 1990,
    departments: {
        math: { teachers: 5, students: 150 },
        science: { teachers: 4, students: 120 },
        history: { teachers: 3, students: 100 },
        english: { teachers: 4, students: 130 },
    },
    courses: ["math", "science", "history", "english"],
    students: [
        { name: "Alice", className: "Grade 5", scores: { math: 95, science: 88, history: 85, english: 92 } },
        { name: "Bob", className: "Grade 4", scores: { math: 80, science: 78, history: 92, english: 85 } },
        { name: "Charlie", className: "Grade 5", scores: { math: 88, science: 90, history: 78, english: 88 } },
        { name: "Diana", className: "Grade 4", scores: { math: 92, science: 85, history: 88, english: 90 } },
    ],
};

// Problem 10: countCalculation
function countCalculation(school) {
    const {
        departments: {
            math: { teachers: mathTeachersCount, students: mathStudentsCount },
            history: { teachers: historyTeachersCount, students: historyStudentsCount }
        }
    } = school;
    return { mathTeachersCount, historyTeachersCount, mathStudentsCount, historyStudentsCount };
}

console.log(countCalculation(school));

// Problem 11: findTopStudent
function findTopStudent(school, courseName) {
    let topStudent = school.students.reduce((top, student) => 
        student.scores[courseName] > (top?.scores[courseName] || 0) ? student : top, null
    );
    return topStudent;
}

console.log(findTopStudent(school, 'math'));

// Problem 12: addNewDept
function addNewDept(school, newDepartment) {
    return {
        ...school,
        departments: { ...school.departments, ...newDepartment }
    };
}

const newDepartment = { art: { teachers: 2, students: 50 } };
console.log(addNewDept(school, newDepartment));

// Problem 13: highestStudentCountDepartment
function highestStudentCountDepartment(school) {
    const highestDept = Object.entries(school.departments).reduce((highest, [name, dept]) =>
        dept.students > (highest.students || 0) ? { name, students: dept.students } : highest, {}
    );
    return highestDept.name;
}

console.log(highestStudentCountDepartment(school));

// Problem 14: generateGreeting
function generateGreeting(name, language = "English") {
    const greetings = {
        English: "Hello",
        Spanish: "¡Hola",
        French: "Bonjour"
    };
    return `${greetings[language] || greetings.English}, ${name}!`;
}

console.log(generateGreeting("Alice"));
console.log(generateGreeting("Bob", "Spanish"));
console.log(generateGreeting("Charlie", "French"));
