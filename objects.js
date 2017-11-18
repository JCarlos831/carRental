var rental = {
 "name": "Enterprise Rent A Car",
 "economyCars": 90,
 "economyCarsBooked": 0,
 "midsizeCars": 180,
 "midsizeCarsBooked": 0,
 "carClass": [
     {
         "type": "Economy",
         "price": "$30 per day"
     },
     {
         "type": "Midsize",
         "price": "$40 per day"
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

var renter = [];
var customer = {};

function updatedEconInfo() {
    var updatedEconomyInfo = document.getElementById("carTypes").value="economyUpdate";
    document.getElementById("econAvail").innerHTML = rental.economyCars;
    document.getElementById("econ").innerHTML = rental.carClass[0].type;
    document.getElementById("econPrice").innerHTML = rental.carClass[0].price;
    document.getElementById("midsizeAvail").innerHTML = "";
    document.getElementById("midsize").innerHTML = "";
    document.getElementById("midsizePrice").innerHTML = "";
}

function updatedMidInfo() {
    var updatedMidsizeInfo = document.getElementById("carTypes").value="midsizeUpdate";
    document.getElementById("midsizeAvail").innerHTML = rental.midsizeCars;
    document.getElementById("midsize").innerHTML = rental.carClass[1].type;
    document.getElementById("midsizePrice").innerHTML = rental.carClass[1].price;
    document.getElementById("econAvail").innerHTML = "";
    document.getElementById("econ").innerHTML = "";
    document.getElementById("econPrice").innerHTML = "";
}

function showNothing() {
    document.getElementById("midsizeAvail").innerHTML = "";
    document.getElementById("midsize").innerHTML = "";
    document.getElementById("midsizePrice").innerHTML = "";
    document.getElementById("econAvail").innerHTML = "";
    document.getElementById("econ").innerHTML = "";
    document.getElementById("econPrice").innerHTML = ""; 
}

function update() {
    if (document.getElementById("carTypes").value === "economyUpdate") {
        updatedEconInfo();
    } else if (document.getElementById("carTypes").value === "midsizeUpdate") {
        updatedMidInfo();
    } else {
        showNothing();
    }
}

function carRented() {
    if (document.getElementById("renterName").value && document.getElementById("carTypes").value === "economyUpdate") {
        console.log(rental.rentEcon());console.log(rental.bookedEcon());
        renter = [];
        customer = {
            "name": document.getElementById("renterName").value,
            "car": document.getElementById("carTypes").value
        };
        renter.push(customer);
        alert("Thanks for your reservation :)");
    } else if (document.getElementById("renterName").value  && document.getElementById("carTypes").value === "midsizeUpdate") {
        rental.rentMid(); rental.bookedMid();
        renter = [];
        customer = {
            "name": document.getElementById("renterName").value,
            "car": document.getElementById("carTypes")
        };
        console.log(renter.push(customer));
        alert("Thanks for your reservation :)");
    } else {
        alert("Are you sure you're not missing a field?");
    }
}