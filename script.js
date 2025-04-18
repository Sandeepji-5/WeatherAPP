const button = document.getElementById("search-button");
const input = document.getElementById("city-input");  
const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const  cityTemp = document.getElementById("city-temp") 



const button2 = document.getElementById("getLocation-button");


async function getDataUsingLatLong(lat, lon)
{
    const promise =  await fetch(
        `https://api.weatherapi.com/v1/current.json?key=3b0362f91d2148fea92103214251804&q=${lat},${lon}&aqi=yes`)
    return await promise.json();
}


async function gotLocation(position) {

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
   const result = await getDataUsingLatLong(lat, lon);

    cityName.innerText =  "Location : " +`${result.location.name} - ${result.location.region},${result.location.country}`,
    cityTime.innerText = "Time : " +result.location.localtime;
    cityTemp.innerText =  "Temperature : " +result.current.temp_c;
    
    console.log(result);
    
}


function failedToGet(){
    console.log('There Was Some issue')
}


button2.addEventListener("click",async ()=>{
    const result =  navigator.geolocation.getCurrentPosition(gotLocation,   failedToGet);
  
})





async function getData(cityName)
{
    const promise =  await fetch(
        `https://api.weatherapi.com/v1/current.json?key=3b0362f91d2148fea92103214251804&q=${cityName}&aqi=yes`)
    return await promise.json();
}

button.addEventListener("click",async ()=>{
const value = input.value;
const result =  await getData(value)
cityName.innerText = "Location : " + `${result.location.name} - ${result.location.region},${result.location.country} `,
cityTime.innerText =  "Time : " +result.location.localtime;
cityTemp.innerText = "Temperature : "+ result.current.temp_c;
})











//https://api.weatherapi.com/v1/current.json?key=3b0362f91d2148fea92103214251804&q=London&aqi=yes