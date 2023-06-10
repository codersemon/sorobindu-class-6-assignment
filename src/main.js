// id, name, age, address, blood_group, cell, donation_history[{name, date}], last_donate
// search with blood group, cell
// show who have donated more than 120 days ago
// show donation history with name and date
// show also who will be available to donate after 30days or less than 30 days

// getting search type
let searchType = prompt("Write search type. Available type blood_group, cell");
searchType = searchType.toLowerCase();

// getting all blood groups
const bloodGroups = [];
donator.forEach((item) => {
  // add blood group if it is not added to bloodGroups
  if (!bloodGroups.includes(item.blood_group)) {
    bloodGroups.push(item.blood_group);
  }
});

// getting search term
let searchTerm;
switch (searchType) {
  case "blood_group":
    searchTerm = prompt(
      `Type blood group. Available blood groups are : ${bloodGroups
        .sort()
        .join(", ")}`
    );
    break;
  case "cell":
    searchTerm = prompt(`Type cell number.`);
    break;
}

// getting available donators
let avilableDonators;
if (searchType == "blood_group") {
  avilableDonators = donator.filter((item) => {
    return (
      item.blood_group == searchTerm.toUpperCase() && item.last_donate >= 120
    );
  });
} else if (searchType == "cell") {
  avilableDonators = donator.filter((item) => {
    return item.cell == searchTerm && item.last_donate >= 120;
  });
}

// getting waiting donators
let upcomingDonators;
if (searchType == "blood_group") {
  upcomingDonators = donator.filter((item) => {
    return (
      item.blood_group == searchTerm.toUpperCase() &&
      item.last_donate >= 90 &&
      item.last_donate <= 119
    );
  });
} else if (searchType == "cell") {
  upcomingDonators = donator.filter((item) => {
    return (
      item.cell == searchTerm &&
      item.last_donate >= 90 &&
      item.last_donate <= 119
    );
  });
}

// set remaing day to upcoming donors
upcomingDonators.forEach((item) => (item.remainDays = 120 - item.last_donate));

// Ouput
if (avilableDonators) {
  console.log("Available blood donar");
  console.table(avilableDonators);
}else{
    console.log('No Donors Available');
}

if (upcomingDonators) {
  console.log("Upcoming Donors");
  console.table(upcomingDonators);
}
