fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature", {
  method: "GET"
}).then(res => res.json())
  .then(data => {
    // console.log(data)
    document.body.style.backgroundImage = `url(${data.urls.full})`
    document.getElementById("author").textContent = `By: ${data.user.name}`
  })
  .catch(err => {
    document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjU5MzY3OTU&ixlib=rb-1.2.1&q=80&w=1080)"
  })

const crypto = document.getElementById("crypto")
fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
  .then(res => {
    if (!res.ok) {
      throw ("Something Wnt Wrong")
    }
    console.log(res.status)
    return res.json()
  }
  )
  .then(data => {
    console.log(data)
    crypto.innerHTML = `
    <div class="crypto-top">
      <img src="${data.image.small}" alt="Crypto Image" />
      <span>${data.name}</span>
    </div>
    <div class="crypto-bottom">
      <h2>&#8377;${data.market_data.current_price.inr}</h2>
      <h2>&#8377;${data.market_data.high_24h.inr}</h2>
      <h2>&#8377;${data.market_data.low_24h.inr}</h2>
    </div>
    `
  })

// let currHour = dt.getHours()
// const currAMPM = currHour > 12 ? "PM" : "AM"
// currHour = currHour > 12 ? currHour - 12 : currHour
// document.querySelector(".time").textContent = `${currHour}:${dt.getMinutes()} ${currAMPM}`

setInterval(() => {
  var dt = new Date();
  document.querySelector(".time").textContent = dt.toLocaleTimeString("en-us", { timeStyle: "short" })
}, 1000)
/**
 * Challenge: log the current time to the console, formatted
 * like this:
 *
 * 1:30 PM
 *
 * Use Google and Stack Overflow to find the best way.
 *
 * Good luck! 👍
 */
//  getFullYear() - Returns the 4-digit year
//  getMonth() - Returns a zero-based integer (0-11) representing the month of the year.
//  getDate() - Returns the day of the month (1-31).
//  getDay() - Returns the day of the week (0-6). 0 is Sunday, 6 is Saturday.
//  getHours() - Returns the hour of the day (0-23).
//  getMinutes() - Returns the minute (0-59).
//  getSeconds() - Returns the second (0-59).
//  getMilliseconds() - Returns the milliseconds (0-999).
//  getTimezoneOffset() - Returns the number of minutes between the machine local time and UTC.

navigator.geolocation.getCurrentPosition(position => {
  fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
    .then(res => res.json())
    .then(data => console.log(data))
});

/**
 * Challenge: Get the user's current weather for their area and
 * log it to the console
 *
 * BaseURL: https://apis.scrimba.com/openweathermap/data/2.5/weather
 * Queries to include:
 *     - lat (latitude)
 *     - lon (longitude)
 *     - units (imperial or metric)
 */
