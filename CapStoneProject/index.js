fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature",{
  method: "GET"
}).then(res => res.json())
.then(data => {
  console.log(data)
  document.body.style.backgroundImage = `url(${data.urls.full})`
  document.getElementById("author").textContent = `By: ${data.user.name}`
})
.catch(err => {
  document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1575720303061-9a8b23e2ca92?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjU4MjIyNzI&ixlib=rb-1.2.1&q=85)"
})

/**
         * Challenge: get a URL for a default background image and set it here
         * 
         * 1. Change the query in the URL above back to something real
         * 2. Log the image url to the console (replacing console.log(data) above)
         * 3. Use that URL as the "default" background image to be used if 
         *    the promise is ever rejected.
         */