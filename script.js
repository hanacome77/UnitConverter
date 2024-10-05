function temperature(){
    //To convert celcius to farenheit
    //(CEL * 9/5) + 32
    var c = document.getElementById("celsius").value;
    var f = (c * 9/5) + 32
    document.getElementById("fahrenheit").value = f
}

function weight(){
    //To convert kilograms to pounds
    //KG * 2.20462
    var kg = document.getElementById("kilograms").value;
    var lb = kg * 2.20462
    document.getElementById("pounds").value = lb
}

function distance(){
    //To convert kilometers to miles
    //KM * 0.621371
    var km = document.getElementById("kilometers").value;
    var miles = km * 0.621371
    document.getElementById("miles").value = miles
}