const url = 'https://api.openweathermap.org/data/2.5/';
const key = 'f6f8aec00b65a9288fc9269ec1b949ba';

const setQuery = (event) => {
    if(event.keyCode == '13')
        {
           document.querySelector("#loading").style.display = "block"; 
           getResult(searchBar.value) 
        }
}

document.querySelector('#btnSearch').addEventListener("click", () =>{
    document.querySelector("#loading").style.display = "block";
    getResult(searchBar.value);
})



const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
    .then(weather => { 
        if(!weather.ok)
            throw new Error("şehir bulunamadı.");
          
        console.log(weather);    
       return weather.json();
    })
    .then(displayResult)
    .catch(err => {
        renderError(err);
    })
}

const displayResult = (result) => {
    document.querySelector("#loading").style.display = "none";
    document.querySelector("#errors").innerHTML = "";
    console.log(result);
    let city = document.querySelector('.city');
    city.innerText = `${result.name}, ${result.sys.country}`;

    let temp = document.querySelector('.temp');
    temp.innerText = `${Math.round(result.main.temp)}°C`;

    let desc = document.querySelector('.desc');
    desc.innerText = result.weather[0].description;

    let minmax = document.querySelector('.minmax');
    minmax.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C`
}


function renderError(err){
    const html = `
        <div class="alert alert-danger">   
            ${err.message}
        </div>
    `;
    document.querySelector("#errors").innerHTML = html;
}



const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keypress',setQuery);




document.querySelector("#btnLocation").addEventListener("click", () => {
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
});

function onError(err){
    console.log(err);
}

async function onSuccess(position){
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;

   const api_key = "f1e9c15567e5457b9781a0354ed61d96";
   const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${api_key}`;

   const response = await fetch(url);
   const data = await response.json();

   const city = data.results[0].components.province;
   
   document.getElementById('searchBar').value = city;   
   

   document.querySelector("#btnSearch").click();
   document.querySelector("#loading").style.display = "block"; 
}