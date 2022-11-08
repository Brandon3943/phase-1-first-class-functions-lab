// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(arr) {
  return arr.slice(0, 2);
}

returnFirstTwoDrivers(drivers);


const returnLastTwoDrivers = function(arr) {
  return arr.slice(arr.length -2);
}

returnLastTwoDrivers(drivers);


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return function(fareRide) {
    return fareRide * multiplier;
  }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)


function selectDifferentDrivers(drivers1, func) {
  return func(drivers1);
}  
