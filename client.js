// array of employee objects
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

// console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.


// use each employee object as the input to the function described below.
// * `console.log` the results of each iteration.
//     - The `log` should be in the loop, not the function.

// "make it work for one thing" before making it work for all the things. In this case, we could work on getting the bonus calculation function working for just one employee before trying to call it multiple times inside of a loop. 

// Consider starting by getting this function to work only for Atticus.

// ## The Bonus Calculation Function

// Write a declared function that takes in one **Employee** object (as an argument to the function), and `return` a new **object** with the following properties. _Note these properties are different than the ones you start with!_

// * The `name` property should contain the employee's name.
// * The `bonusPercentage` property should contain the bonus percentage the employee is to receive. See section below for calculation instructions.
// * The `totalCompensation` property should be the adjusted annual compensation (base annual + bonus)
// * The `totalBonus` should be the employee's total bonus rounded to the nearest dollar.




// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {  //this employee parameter should be an object of employee array
  const bonusDetails = [];
    for(let person of employees){
      if (person.name === employee){                     //checking for a match withing employees array
          console.log('You have found a match!:', employee);
          bonusDetails.push({name:person.name, bonusPercentage: 'testPercentage' , totalCompensation:'testCompensation' , totalBous:'testBonus' });
          console.log('bonus detals', bonusDetails);  //testing new object creation with required properties
      }
    }
  
  
  // return new object with bonus results
  return
}
calculateIndividualEmployeeBonus('Atticus');  //testing if for loop will find atticus in 'employees' array. 
calculateIndividualEmployeeBonus('Barbara');

// for(let person of employees){
//   console.log('the list of employees is:', person); //test to log each employee 
//} // end loop
// calculateIndividualEmployeeBonus();