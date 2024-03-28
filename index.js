const button = document.getElementById("btn");
let placeName = document.getElementById("placeName");
let longi = document.getElementById("longi");
let lati = document.getElementById("lati");
let state = document.getElementById("state");
let abr = document.getElementById("abv");



let url = "https://api.zippopotam.us";


button.addEventListener("click", async () => {
    let pincode = document.getElementById("pincode").value;
    let countrycode = document.getElementById("countrycode").value;
    if (countrycode == "") countrycode = "in";
    else countrycode.toLowerCase();
    let finalUrl = `${url}/${countrycode}/${pincode}`;
    console.log(finalUrl);
    try {
        document.querySelector(".infoBox").style.display = "block";
        document.querySelector(".msg").classList.remove("zipDisplay");
        document.querySelector("table").style.display = "block"
        let response = await fetch(finalUrl);
        let object = await response.json();
        state.innerText = object.places[0]["state"];
        placeName.innerText = object.places[0]["place name"];
        longi.innerText = object.places[0]["longitude"];
        lati.innerText = object.places[0]["latitude"];
        abr.innerText = object.places[0]["state abbreviation"];
        console.log(object.places[0])
        document.querySelector(".msg").innerText = `PINCODE : ${pincode}`

    } catch (err) {
        console.log("Gand Marao", err);
        document.querySelector(".msg").classList.add("zipDisplay");
        document.querySelector(".msg").innerText = ``;
        document.querySelector(".infoBox").style.display = "none";
    }



});