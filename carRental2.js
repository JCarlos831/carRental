var rental = {
 "name": "Enterprise Rent A Car",
 "economyCars": 90,
 "economyCarsBooked": 0,
 "midsizeCars": 180,
 "midsizeCarsBooked": 0,
 "carClass": [
     {
         type: "Economy",
         price: "$30 per day",
         available: 90
     },
     {
         type: "Midsize",
         price: "$40 per day",
         available: 180
     }
     ],
 rentMid: function() {
    document.getElementById("midsizeAvail").innerHTML = --this.midsizeCars;
 },
 rentEcon: function() {
    document.getElementById("econAvail").innerHTML = --this.economyCars;
 },
 bookedEcon: function() {
    ++this.economyCarsBooked;
 },
 bookedMid: function() {
    ++this.midsizeCarsBooked;
 }

};
//
// var renter = [];
// var customer = {};
//
// function updatedEconInfo() {
//     var updatedEconomyInfo = document.getElementById("carTypes").value="Economy";
//     document.getElementById("econAvail").innerHTML = rental.economyCars;
//     document.getElementById("econ").innerHTML = rental.carClass[0].type;
//     document.getElementById("econPrice").innerHTML = rental.carClass[0].price;
//     document.getElementById("midsizeAvail").innerHTML = "";
//     document.getElementById("midsize").innerHTML = "";
//     document.getElementById("midsizePrice").innerHTML = "";
// }
//
// function updatedMidInfo() {
//     var updatedMidsizeInfo = document.getElementById("carTypes").value="Midsize";
//     document.getElementById("midsizeAvail").innerHTML = rental.midsizeCars;
//     document.getElementById("midsize").innerHTML = rental.carClass[1].type;
//     document.getElementById("midsizePrice").innerHTML = rental.carClass[1].price;
//     document.getElementById("econAvail").innerHTML = "";
//     document.getElementById("econ").innerHTML = "";
//     document.getElementById("econPrice").innerHTML = "";
// }
//
// function showNothing() {
//     document.getElementById("midsizeAvail").innerHTML = "";
//     document.getElementById("midsize").innerHTML = "";
//     document.getElementById("midsizePrice").innerHTML = "";
//     document.getElementById("econAvail").innerHTML = "";
//     document.getElementById("econ").innerHTML = "";
//     document.getElementById("econPrice").innerHTML = "";
// }
//
// function update() {
//     if (document.getElementById("carTypes").value === "Economy") {
//         updatedEconInfo();
//     } else if (document.getElementById("carTypes").value === "Midsize") {
//         updatedMidInfo();
//     } else {
//         showNothing();
//     }
// }
//
// function carRented() {
//     if (document.getElementById("renterName").value && document.getElementById("carTypes").value === "Economy") {
//         rental.rentEcon();rental.bookedEcon();
//         customer = {
//             "name": document.getElementById("renterName").value,
//             "car": document.getElementById("economySelection").value
//         };
//         renter.push(customer);
//         console.log(renter);
//         alert("Thanks for your reservation :)");
//     } else if (document.getElementById("renterName").value && document.getElementById("carTypes").value === "Midsize") {
//         rental.rentMid(); rental.bookedMid();
//         customer = {
//             "name": document.getElementById("renterName").value,
//             "car": document.getElementById("midsizeSelection").value
//         };
//         renter.push(customer);
//         console.log(renter);
//         alert("Thanks for your reservation :)");
//     } else {
//         alert("Please fill out all fields and make a selection");
//     }
// }


// Dynamic form

function carInfo(car) {
     document.getElementById("available").innerHTML = rental.carClass[car].available;
     document.getElementById("price").innerHTML = rental.carClass[car].price;
}

for(var i = 0; i < rental.carClass.length; i++) {
     console.log("start");
     var carBtn = document.createElement("INPUT");
     carBtn.setAttribute("type", "radio");
     carBtn.setAttribute("name", "carType");
     carBtn.setAttribute("value", i);
     carBtn.setAttribute("id", "room" + i);
     carBtn.setAttribute("onclick", "carInfo(" + i +")");
     console.log("stop");
     var carLbl = document.createElement("LABEL");
     carLbl.innerHTML = rental.carClass[i].type;
     document.getElementById("radialSection").appendChild(carBtn);
     document.getElementById("radialSection").appendChild(carLbl);
}

