fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature",{
  method: "GET"
}).then(res => res.json())
.then(data => {
  console.log(data)
  document.body.style.backgroundImage = `url(${data.urls.full})`
  document.getElementById("author").textContent = `By: ${data.user.name}`
})
.catch(err => {
  document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjU5MzY3OTU&ixlib=rb-1.2.1&q=80&w=1080)"
})

fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err))