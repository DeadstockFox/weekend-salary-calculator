//console.log("Dog");

let firstNameData = document.querySelector("#firstName");
let lastNameData = document.querySelector("#lastName");
let idData = document.querySelector("#id");
let titleData = document.querySelector("#title");
let annualSalaryData = document.querySelector("#annualSalary")



function submitForm(event){
    event.preventDefault();
    let employeeInfoTable = document.querySelector("#employeeData");
    employeeInfoTable.innerHTML +=`
    <tr>
        <td>${firstNameData.value}</td>
        <td>${lastNameData.value}</td>
        <td>${idData.value}</td>
        <td>${titleData.value}</td>
        <td>${annualSalaryData.value}</td>
    </tr>
    `;


    //testing variables work in function
    //console.log(firstNameData.value, lastNameData.value, idData.value, titleData.value, annualSalaryData.value);
    
};


