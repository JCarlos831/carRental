var rental = {
 name: "Enterprise Rent A Car",
 economyCars: 90,
 economyCarsBooked: 0,
 midsizeCars: 180,
 midsizeCarsBooked: 0,
 carClass: ["Economy", "Midsize"],
 rentMid: function() {
    document.getElementById("midszAvail").innerHTML = --this.midsizeCars;
 },
 rentEcon: function() {
    document.getElementById("econAvail").innerHTML = --this.economyCars;
 },
 bookedEcon: function() {
    document.getElementById("econAvail").innerHTML = ++this.economyCarsBooked;
 },
 bookedMid: function() {
    document.getElementById("econAvail").innerHTML = ++this.midsizeCarsBooked;
 }
 
};

function updateAvail() {
    document.getElementById("midszAvail").innerHTML = rental.midsizeCars;
    document.getElementById("econAvail").innerHTML = rental.economyCars;
}

function staticValues() {
    document.getElementById("name").innerHTML = rental.name;
    document.getElementById("econ").innerHTML = rental.carClass[0];
    document.getElementById("midsz").innerHTML = rental.carClass[1];
}