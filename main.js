
let searhName=document.getElementById("input");
let city;
let finalRes;
let days=["Sunday","Monday","Tuseday","Wednesday","Thursday","Friday","Saturday"];
let months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//getweather data
async function key (city="cairo"){
  let res= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=ec6208a3555f4396921130753232402&q=${city}&days=3`);
   finalRes= await res.json();
 currentDay();
 nextDay();
}

 await key();
 console.log(finalRes);
function currentDay(){
  document.querySelector(".cday").innerHTML= days[new Date().getDay()];
  document.querySelector(".cdate").innerHTML=new Date().getDate();
  document.querySelector(".cmonth").innerHTML= months[new Date().getMonth()];document.getElementById("cBody").innerHTML=`
<h5 class="card-title text-center text-decoration-underline text-uppercase ">${finalRes.location.name}</h5>
<div class="card-text text-center">
<span class=" fs-1   d-inline-block   fw-bold ps-3">${finalRes.current.temp_c}℃</span>
<span><img src=${finalRes.current.condition.icon} alt="" ></span>
<p class=" fs-5">${finalRes.current.condition.text}</p>
</div>
<div class=" py-lg-4 text-center">
<i class="fa-solid fa-umbrella "></i> ${finalRes.forecast.forecastday[0].day.daily_chance_of_rain}
<i class="fa-solid fa-wind ps-3"></i>${finalRes.current.wind_kph}Km/h
<i class="fa-regular fa-compass ps-3 pe-1"></i>${finalRes.current.wind_dir}
</div>
`

}

function nextDay(){
  
document.querySelector(".tday").innerHTML= days[new Date().getDay()+1]

document.getElementById("tBody").innerHTML=`
<div class="card-text text-center">
<span><img src=${finalRes.forecast.forecastday[1].day.condition.icon} alt=""></span>
<p class=" fs-3 ps-3 mb-0">${finalRes.forecast.forecastday[1].day.maxtemp_c}℃</p>
<p class=" fs-5 ps-3">${finalRes.forecast.forecastday[1].day.mintemp_c}℃</p>
<p class=" fs-5">${finalRes.forecast.forecastday[1].day.condition.text}</p>
</div>
<div class=" text-center">
<i class="fa-solid fa-umbrella "></i> ${finalRes.forecast.forecastday[1].day.daily_chance_of_rain}
<i class="fa-solid fa-wind ps-3"></i>${finalRes.forecast.forecastday[1].day.maxwind_kph}Km/h
<i class="fa-regular fa-compass ps-3 pe-1"></i>${finalRes.current.wind_dir}
</div>
`

document.querySelector(".nday").innerHTML= days[new Date().getDay()+2]

document.getElementById("nBody").innerHTML=`
<div class="card-text text-center">
<span><img src=${finalRes.forecast.forecastday[2].day.condition.icon} alt=""></span>
<p class=" fs-3 ps-3 mb-0">${finalRes.forecast.forecastday[2].day.maxtemp_c}℃</p>
<p class=" fs-5 ps-3">${finalRes.forecast.forecastday[2].day.mintemp_c}℃</p>
<p class=" fs-5">${finalRes.forecast.forecastday[2].day.condition.text}</p>
</div>
<div class="text-center">
<i class="fa-solid fa-umbrella "></i> ${finalRes.forecast.forecastday[1].day.daily_chance_of_rain}
<i class="fa-solid fa-wind ps-3"></i>${finalRes.forecast.forecastday[2].day.maxwind_kph}Km/h
<i class="fa-regular fa-compass ps-3 pe-1"></i>${finalRes.current.wind_dir}
</div>
`

}


searhName.addEventListener("keyup",async  function(){
  city= searhName.value;

 key(city)
})