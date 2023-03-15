let search = document.getElementById("search")
let datalist = []
async function getData(city) {
  let res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=2c5964baf8864624b1f131626231802&q=${city}&days=3`)
  let data = await res.json()
  console.log(data)
  datalist = data
  display()
}
getData("lond")
function find() {
  let city = search.value
  getData(city)
  if (res.status != 200) {
    getData("lond")
  }
}
function display() {
  let temp = ""
  temp = {
    name: datalist.location.name,
    tempe: datalist.current.temp_c,
    icon: datalist.current.condition.icon,
    icontex: datalist.current.condition.text,
    km: datalist.current.wind_kph,
    is_day:datalist.current. is_day,
    last_updated:datalist.current. last_updated
  }
  let tem2= datalist.forecast.forecastday[1].day
  let info2={
    maxtempe:tem2.maxtemp_c,
    mintempe:tem2.mintemp_c,
    icon:tem2.condition.icon,
    icontex: tem2.condition.text,
  }
  let tem3= datalist.forecast.forecastday[2].day
  let info3={
    maxtempe:tem3.maxtemp_c,
    mintempe:tem3.mintemp_c,
    icon:tem3.condition.icon,
    icontex: tem3.condition.text,
  }
  console.log(tem2)
  console.log(tem3)
  let month=""
  let numberOfmonth= temp.last_updated[5]+temp.last_updated[6]
  let dayInmonth=temp.last_updated[8]+temp.last_updated[9]
  console.log(numberOfmonth)
  let day = ["Saturday","Sunday ","Monday ","Tuesday "," Thursday","Wednesday ","Friday "]
  if(numberOfmonth==01){
     month = "January"
  }
  if(numberOfmonth==02){
     month = "February"
  }
  if(numberOfmonth==03){
     month = "March"
  }
  if(numberOfmonth==04){
     month = "April"
  }
  if(numberOfmonth==05){
     month = "May"
  }
  if(numberOfmonth==06){
     month = "June"
  }
  if(numberOfmonth==07){
     month = "July"
  }
  if(numberOfmonth==08){
     month = "August"
  }
  if(numberOfmonth==09){
     month = "September"
  }
  if(numberOfmonth==10){
     month = "October"
  }
  if(numberOfmonth==11){
     month = "November"
  }
  if(numberOfmonth==12){
     month = "December"
  }
  if (temp!= undefined) {
    document.getElementById("city_name").innerHTML = temp.name
    document.getElementById("lat").innerHTML = temp.tempe + `  <span class="top">o</span>C`
    document.getElementById("Maxtemp").innerHTML = info2.maxtempe + `  <span class="top1">o</span>C`
    document.getElementById("Maxtemp2").innerHTML = info3.maxtempe + `  <span class="top1">o</span>C`
    
    document.getElementById("Mintemp").innerHTML = info2.mintempe + `  <span class="top2">o</span>`
    document.getElementById("Mintemp2").innerHTML = info3.mintempe + `  <span class="top2">o</span>`

    document.getElementById("km").innerHTML =`<img src="img/icon-wind.png" alt="">${temp.km}km/h`
    document.getElementById("icon").setAttribute("src",`https:${temp.icon}`)
    document.getElementById("icon2").setAttribute("src",`https:${info2.icon}`)
    document.getElementById("icon3").setAttribute("src",`https:${info3.icon}`)
    document.getElementById("day").innerHTML = day[temp.is_day]
    document.getElementById("day2").innerHTML = day[temp.is_day+1]
    document.getElementById("day3").innerHTML = day[temp.is_day+2]
    document.getElementById("month").innerHTML = dayInmonth+month
    document.getElementById("icontex").innerHTML = temp.icontex
    document.getElementById("icontex2").innerHTML = info2.icontex
    document.getElementById("icontex3").innerHTML = info3.icontex
  }
}