// DOM variables
let mainHeading = document.getElementById("main-heading")
let convertVal = document.getElementById("convert-value").value
let calcBtn = document.getElementById("calc-btn")

let lengthHeading = document.getElementById("length-heading")
let lengthCalc = document.getElementById("length-calc")

let volumeHeading = document.getElementById("volume-heading")
let volumeCalc = document.getElementById("volume-calc")

let massHeading = document.getElementById("mass-heading")
let massCalc = document.getElementById("mass-calc")

// Strings
let appTitle = "Unit Converter"
mainHeading.textContent = "Metric/Imperial unit conversion"

// Set text content
calcBtn.textContent = "Calculate"
lengthHeading.textContent = "Length (Meter/Feet)"
volumeHeading.textContent = "Volume (Liters/Gallons)"
massHeading.textContent = "Mass (Kilograms/Pounds)"

// length values
// to convert meters to feet: for an approximate result, multiply the length value by 3.281
let meter = convertVal
let feet = convertVal

// volume values
let liters = convertVal
let gallons = convertVal

// mass values
let kilos = convertVal
let pounds = convertVal

lengthCalc.textContent = "0 meters = 0.000 feet | 0 feet = 0.000 meters"
volumeCalc.textContent = "0 liters = 0.000 gallons | 0 gallons = 0.000 liters"
massCalc.textContent = "0 kilos = 0.000 pounds | 0 pounds = 0.000 kilos"

// Functions
function convertNumber() {
    convertVal = document.getElementById("convert-value").value

    meter = convertVal
    feet = convertVal
    let meterConverted = convertVal * 3.281
    let feetConverted = convertVal / 3.281
    lengthCalc.textContent = meter + " meters = " + feetConverted.toFixed(3)  + " feet | " + feet + " feet = " + meterConverted.toFixed(3) + " meters"
    
    liters = convertVal
    gallons = convertVal
    let litersConverted = convertVal * 3.281
    let gallonsConverted = convertVal * 3.281
    volumeCalc.textContent = liters + " liters = " + gallonsConverted.toFixed(3)  + " gallons | " + gallons + " gallons = " + litersConverted.toFixed(3) + " liters"

    kilos = convertVal
    pounds = convertVal
    let kilosConverted = convertVal * 3.281
    let poundsConverted  = convertVal * 3.281
    massCalc.textContent = kilos + " kilos = " + poundsConverted.toFixed(3)  + " pounds | " + pounds + " pounds = " + kilosConverted.toFixed(3) + " kilos"
};