var rental = {
 name: "Enterprise Rent A Car",
 economyCars: 90,
 economyCarsBooked: 0,
 midsizeCars: 180,
 midsizeCarsBooked: 0,
 carClass: ["Economy", "Midsize"],
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

function updateAvail() {
    document.getElementById("midsizeAvail").innerHTML = rental.midsizeCars;
    document.getElementById("econAvail").innerHTML = rental.economyCars;
}

function staticValues() {
    document.getElementById("name").innerHTML = rental.name;
    document.getElementById("econ").innerHTML = rental.carClass[0];
    document.getElementById("midsize").innerHTML = rental.carClass[1];
}