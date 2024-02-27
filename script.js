//console.log("Dog");

/*
let firstNameData = document.querySelector("#firstName");
let lastNameData = document.querySelector("#lastName");
let idData = document.querySelector("#id");
let titleData = document.querySelector("#title");
let annualSalaryData = document.querySelector("#annualSalary");
*/


let employees = []
let employeeCount = 0;


//Function to add employee to array of objects for easy reference
function createEmployee(){
    let employee = {
        firstName: document.querySelector("#firstName").value,
        lastName: document.querySelector("#lastName").value,
        id: document.querySelector("#id").value,
        title: document.querySelector("#title").value,
        annualSalary: parseInt(document.querySelector("#annualSalary").value) //parseInt so it doesn't come back as a string
    }
    console.log(employee);
    employees.push(employee);
    //console.log(employees);
};


function submitForm(event){
    //preventing page from reloading
    event.preventDefault();
    
    //targets form id with inputs
    let employeeHandbook = document.getElementById("employeeHandbook");

    createEmployee();
    //console.log(employees[employeeCount]);

    //Adds new row to table using object created in above function 
    let employeeInfoTable = document.querySelector("#employeeData");
    employeeInfoTable.innerHTML +=`
    <tr>
        <td>${employees[employeeCount].firstName}</td>
        <td>${employees[employeeCount].lastName}</td>
        <td>${employees[employeeCount].id}</td>
        <td>${employees[employeeCount].title}</td>
        <td>${employees[employeeCount].annualSalary}</td>
    </tr>
    `;
    
    monthlyCost();  
    /*--------------------------------------
    let monthlyCostVar = monthlyCost();
    
    let footerInfoTable = document.getElementById("monthlyCostData");
    footerInfoTable.innerHTML =`
    <p>Total Monthly: $${monthlyCostVar}</P>
    `;
   --------------------------------------------- */

    //updates index counter
    employeeCount++;
    //console.log(employeeCount);

    //resets form at function end
    employeeHandbook.reset();
};

//Function to figure out monthly cost using 'employees' array of objects
function monthlyCost() {
    let salarySum = 0;
    for(employeeIndiv of employees){
        salarySum += employeeIndiv.annualSalary;
        console.log(salarySum);
    }
    salarySum = salarySum / 12; 
    //console.log(salarySum);

    let footerInfoTable = document.getElementById("monthlyCostData");
    footerInfoTable.innerHTML =`
    <p>Total Monthly: $${salarySum}</P>
    `;

    return salarySum;
}
