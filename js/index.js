let cityInput=document.getElementById("cityinput")


let dataArr=[]

 async function GetData(city){

let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=a94f17594bfb46c3a29231332242006&q=${city}&days=3&aqi=no&alerts=no`)
let data = await response.json()
dataArr=data
console.log(dataArr)
console.log(dataArr.forecast)
display()

}


/////////////////////////////////////////////////////////////////////////////////
let dayNames = [];

function getDayNames() {
  let today = new Date();
  

  function getDayName(date) {
    return date.toLocaleDateString('en-US', { weekday: 'long' });
  }

  dayNames.push(getDayName(today));

  let tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  dayNames.push(getDayName(tomorrow));

  let dayAfterTomorrow = new Date(today);
  dayAfterTomorrow.setDate(today.getDate() + 2);
  dayNames.push(getDayName(dayAfterTomorrow));

  return dayNames;
}

let NameOfDay = getDayNames();



///////////////////////////////////////////////////////////////////////////////

let formattedDates = [];

function getFormattedDates() {
  let today = new Date();
  
  
  function getFormattedDate(date) {
    let options = { day: 'numeric', month: 'long' };
    return date.toLocaleDateString('en-US', options);
  }

  formattedDates.push(getFormattedDate(today));

 
  let tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  formattedDates.push(getFormattedDate(tomorrow));

  let dayAfterTomorrow = new Date(today);
  dayAfterTomorrow.setDate(today.getDate() + 2);
  formattedDates.push(getFormattedDate(dayAfterTomorrow));

  return formattedDates;
}

let NameOfMonth = getFormattedDates();








/////////////////////////////////////////////////////////////////////////////



function display(){



let cartona=""



cartona+=`



          <div class="lable  col-md-4 " >
<div class="date bg-danger  d-flex justify-content-between align-items-center px-1 mx-0 ">
  <p class="text-light opacity-75">${ dayNames[0]}</p>
  <p class="text-light opacity-75">${formattedDates[0]}</p>
</div>
<div class="weather">
  <div class="variables">
  <p class="text-start p-3 text-light opacity-75">${dataArr.location.name}</p>
  <h1 class="text-light my-5">${dataArr.forecast.forecastday[0].day.avgtemp_c} C</h1>
  <img src="${dataArr.forecast.forecastday[0].day.condition.icon}" alt="">  

  <span class="text-info">${dataArr.forecast.forecastday[0].day.condition.text}</span>
  </div>
  <div class="stable d-flex justify-content-around py-2">
    <span class="text-light opacity-75"><i class="fa-solid fa-umbrella fa-rotate-by" style="--fa-rotate-angle: 45deg;""></i>${dataArr.current.humidity} %</span>
    <span class="text-light opacity-75"><i class="fa-solid fa-wind"></i>${dataArr.current.wind_kph} KM/H</span>
    <span class="text-light opacity-75"><i class="fa-regular fa-compass"></i>East</span>
  </div>

</div>
          </div>

          <div class="lable  col-md-4 " >
<div class="date bg-danger  d-flex justify-content-between align-items-center px-1 mx-0 ">
  <p class="text-light opacity-75">${dayNames[1]}</p>
  <p class="text-light opacity-75">${formattedDates[1]}</p>
</div>
<div class="weather">
  <p class="text-start p-3 text-light opacity-75">${dataArr.location.name}</p>
  <h1 class="text-light my-5">${dataArr.forecast.forecastday[1].day.avgtemp_c} C</h1>
  <img src="${dataArr.forecast.forecastday[1].day.condition.icon}" alt="">  

  <span class="text-info text-center ">${dataArr.forecast.forecastday[0].day.condition.text}</span>

</div>
          </div>

          <div class="lable  col-md-4 " >
<div class="date bg-danger  d-flex justify-content-between align-items-center px-1 mx-0 ">
  <p class="text-light opacity-75">${dayNames[2]}</p>
  <p class="text-light opacity-75">${formattedDates[2]}</p>
</div>
<div class="weather">
  <p class="text-start p-3 text-light opacity-75">${dataArr.location.name}</p>
  <h1 class="text-light my-5">${dataArr.forecast.forecastday[2].day.avgtemp_c} C</h1>
  <img src="${dataArr.forecast.forecastday[2].day.condition.icon}" alt="">  

  <span class="text-info text-center">${dataArr.forecast.forecastday[2].day.condition.text}</span>

</div>
          </div>
   `

document.getElementById("row").innerHTML=cartona;

}


//////////////////////////////////////////////////////////////////////////////////////////////////

cityInput.addEventListener("input",function(){

let word=cityInput.value
console.log(word)

for(let i=0 ; i<dataArr ; i++){

if(dataArr[i].location.name.toLowerCase().includes(word.toLowerCase())){


  cartona+=`

  <div class="lable  col-md-4 " >
<div class="date bg-danger  d-flex justify-content-between align-items-center px-1 mx-0 ">
<p class="text-light opacity-75">${dayNames[0]}</p>
<p class="text-light opacity-75">${formattedDates[0]}</p>
</div>
<div class="weather">
<div class="variables">
<p class="text-start p-3 text-light opacity-75">${dataArr.location.name}</p>
<h1 class="text-light my-5">${dataArr.forecast.forecastday[0].day.avgtemp_c} C</h1>
<img src="${dataArr.forecast.forecastday[0].day.condition.icon}" alt="">  

<span class="text-info">${dataArr.forecast.forecastday[0].day.condition.text}</span>

</div>


<div class="stable d-flex justify-content-around py-2">
<span class="text-light opacity-75"><i class="fa-solid fa-umbrella fa-rotate-by" style="--fa-rotate-angle: 45deg;""></i>${dataArr.current.humidity} %</span>
<span class="text-light opacity-75"><i class="fa-solid fa-wind"></i>${dataArr.current.wind_kph} KM/H</span>
<span class="text-light opacity-75"><i class="fa-regular fa-compass"></i>East</span>

</div>

</div>

  </div>

  <div class="lable  col-md-4 " >
<div class="date bg-danger  d-flex justify-content-between align-items-center px-1 mx-0 ">
<p class="text-light opacity-75">${dayNames[1]}</p>
<p class="text-light opacity-75">${formattedDates[1]}</p>
</div>
<div class="weather">
<p class="text-start p-3 text-light opacity-75">${dataArr.location.name}</p>
<h1 class="text-light my-5">${dataArr.forecast.forecastday[1].day.avgtemp_c} C</h1>
<img src="${dataArr.forecast.forecastday[1].day.condition.icon}" alt="">  

<span class="text-info text-center ">${dataArr.forecast.forecastday[0].day.condition.text}</span>

</div>
  </div>

  <div class="lable  col-md-4 " >
<div class="date bg-danger  d-flex justify-content-between align-items-center px-1 mx-0 ">
<p class="text-light opacity-75">${dayNames[2]}</p>
<p class="text-light opacity-75">${formattedDates[2]}</p>
</div>
<div class="weather">
<p class="text-start p-3 text-light opacity-75">${dataArr.location.name}</p>
<h1 class="text-light my-5">${dataArr.forecast.forecastday[2].day.avgtemp_c} C</h1>
<img src="${dataArr.forecast.forecastday[2].day.condition.icon}" alt="">  

<span class="text-info text-center">${dataArr.forecast.forecastday[2].day.condition.text}</span>

</div>
  </div>
`
}

}

GetData(word)


document.getElementById("row").innerHTML=cartona;



})



///////////////////////////////////////////////////////////



function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  console.log("Lat: " + lat + ", Lon: " + lon);
}



///////////////////////////////////////////////////////////////////////////////////////


// document.getElementById("row").addEventListener('Load', function() {

//   console.log("loaaaad")

//   let cartona=""



//   cartona+=`
  
  
  
//             <div class="lable  col-md-4 " >
//   <div class="date bg-danger  d-flex justify-content-between align-items-center px-1 mx-0 ">
//     <p class="text-light opacity-75">${ dayNames[0]}</p>
//     <p class="text-light opacity-75">${formattedDates[0]}</p>
//   </div>
//   <div class="weather">
//     <div class="variables">
//     <p class="text-start p-3 text-light opacity-75">${dataArr.location.name}</p>
//     <h1 class="text-light my-5">${dataArr.forecast.forecastday[0].day.avgtemp_c} C</h1>
//     <img src="${dataArr.forecast.forecastday[0].day.condition.icon}" alt="">  
  
//     <span class="text-info">${dataArr.forecast.forecastday[0].day.condition.text}</span>
  
  
//     </div>
  
  
//     <div class="stable d-flex justify-content-around py-2">
//       <span class="text-light opacity-75"><i class="fa-solid fa-umbrella fa-rotate-by" style="--fa-rotate-angle: 45deg;""></i>${dataArr.current.humidity} %</span>
//       <span class="text-light opacity-75"><i class="fa-solid fa-wind"></i>${dataArr.current.wind_kph} KM/H</span>
//       <span class="text-light opacity-75"><i class="fa-regular fa-compass"></i>East</span>
  
//     </div>
  
//   </div>
  
//             </div>
  
  
  
  
  
  
//             <div class="lable  col-md-4 " >
//   <div class="date bg-danger  d-flex justify-content-between align-items-center px-1 mx-0 ">
//     <p class="text-light opacity-75">${dayNames[1]}</p>
//     <p class="text-light opacity-75">${formattedDates[1]}</p>
//   </div>
//   <div class="weather">
//     <p class="text-start p-3 text-light opacity-75">${dataArr.location.name}</p>
//     <h1 class="text-light my-5">${dataArr.forecast.forecastday[1].day.avgtemp_c} C</h1>
//     <img src="${dataArr.forecast.forecastday[1].day.condition.icon}" alt="">  
  
//     <span class="text-info text-center ">${dataArr.forecast.forecastday[0].day.condition.text}</span>
  
//   </div>
//             </div>
  
  
  
  
  
//             <div class="lable  col-md-4 " >
//   <div class="date bg-danger  d-flex justify-content-between align-items-center px-1 mx-0 ">
//     <p class="text-light opacity-75">${dayNames[2]}</p>
//     <p class="text-light opacity-75">${formattedDates[2]}</p>
//   </div>
//   <div class="weather">
//     <p class="text-start p-3 text-light opacity-75">${dataArr.location.name}</p>
//     <h1 class="text-light my-5">${dataArr.forecast.forecastday[2].day.avgtemp_c} C</h1>
//     <img src="${dataArr.forecast.forecastday[2].day.condition.icon}" alt="">  
  
//     <span class="text-info text-center">${dataArr.forecast.forecastday[2].day.condition.text}</span>
  
//   </div>
//             </div>
//      `
  

// });
