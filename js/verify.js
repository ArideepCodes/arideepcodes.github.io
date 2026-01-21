// =============================
// EMPLOYEE DATABASE
// =============================
const employees = {
    // Arideep Kanshabanik
    "ct-sde1-2025-4829": {
        name: "Arideep Kanshabanik",
        age: "21",
        designation: "SDE I",
        education: "B.Tech CS AIML",
        institute: "Swami Vivekananda University",
        email: "arideep@codivora.tech"
    },
    "ctsde120254829": {
        name: "Arideep Kanshabanik",
        age: "21",
        designation: "SDE I",
        education: "B.Tech CS AIML",
        institute: "Swami Vivekananda University",
        email: "arideep@codivora.tech"
    },

    // Torsa Farooqi
    "ct-sde1-2025-4830": {
        name: "Torsa Farooqi",
        age: "21",
        designation: "SDE I",
        education: "B.Tech CS AIML",
        institute: "Aliah University",
        email: "torsa@codivora.tech"
    },
    "ctsde120254830": {
        name: "Torsa Farooqi",
        age: "21",
        designation: "SDE I",
        education: "B.Tech CS AIML",
        institute: "Aliah University",
        email: "torsa@codivora.tech"
    }
};

// =============================
// VERIFY FUNCTION
// =============================
function verifyEmployee() {
    const input = document.getElementById("employeeId").value.trim().toLowerCase();

    if (!input) {
        alert("Please enter an Employee ID");
        return;
    }

    if (employees[input]) {
        // Save data temporarily
        localStorage.setItem("verifiedEmployee", JSON.stringify(employees[input]));
        window.location.href = "/verify/result.html";
    } else {
        window.location.href = "/verify/not-found.html";
    }
}
