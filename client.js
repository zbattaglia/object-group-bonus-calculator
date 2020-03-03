const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

$(document).ready(readyNow)

console.log( employees );

let employeeBonusArray = [];
for(let i = 0; i < employees.length; i++) {
  console.log(employeeBonus(employees[i]));
  employeeBonusArray.push(employeeBonus(employees[i]));
}

console.log('employeeBonusArray:', employeeBonusArray);

//creates new employee objects
function Employee(name, bonusPercentage, totalCompensation, totalBonus) {
  this.name = name;
  this.bonusPercentage = bonusPercentage;
  this.totalCompensation = totalCompensation;
  this.totalBonus = totalBonus;
} //end Employee

//pushes new employee info into new object
function employeeBonus(obj) {
  let percentage = bonusCalculation(obj.employeeNumber, obj.reviewRating, Number(obj.annualSalary));
  let bonus = Math.round( Number(obj.annualSalary) * (percentage/100) );
  let totalSalary = Number(obj.annualSalary) + bonus;
  return new Employee( obj.name, percentage, totalSalary, bonus);
} //end employeeBonus

//calculate bonus percentage
function bonusCalculation(employeeNumber, rating, annualIncome) {
  let bonusPercent = 0;
  if(rating <= 2) {
    bonusPercent = 0;
  } else if( rating === 3) {
    bonusPercent = 4;
  } else if(rating === 4) {
    bonusPercent = 6;
  } else if(rating === 5) {
    bonusPercent = 10;
  }
  if(employeeNumber.length === 4) {
    bonusPercent += 5;
  }
  if(annualIncome > 65000) {
    bonusPercent -= 1;
  }
  if(bonusPercent > 13) {
    bonusPercent = 13;
  } else if(bonusPercent < 0) {
    bonusPercent = 0;
  }
  return bonusPercent;
}//end bonusCalculation

console.log(bonusCalculation(89068, 1, 35000));
console.log(bonusCalculation('6243', 5, 75000));
console.log(employeeBonus(  {
  name: 'Mayella',
  employeeNumber: '89068',
  annualSalary: '35000',
  reviewRating: 1
}));

console.log(employeeBonus({
  name: 'Atticus',
  employeeNumber: '2405',
  annualSalary: '47000',
  reviewRating: 3
}));


function readyNow() {

  let el = $( "#employeeOut");
  el.empty(); 
  console.log(el);
  for (let i = 0; i < employeeBonusArray.length; i++) { 
    el.append(`<li>` + employeeBonusArray[i].name + ' ' + employeeBonusArray[i].percentage + `</li>`)
    console.log(el);

  }
}


