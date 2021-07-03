fetch("https://apis.scrimba.com/jsonplaceholder/posts/")
    .then(response => response.json())
    .then(data => {
      const postArr = data.slice(0,5)
      document.querySelector("#main").innerHTML = postArr.map(arr => `
      <div>
        <h1>${arr.title}</h1>
        <p>${arr.body}</p>
        <hr />
        <h1>${arr.title}</h1>
        <p>${arr.body}</p>
        <hr />

      </div>`).join("")
    })

function getIds(value){
  return document.getElementById(value)
}
document.querySelector(".btn").addEventListener("click",()=>{
  const title = getIds("title").value
  const body = getIds("body").value
  let myData = {
    title,
    body
  }
  console.log(myData)
})
    /**
 Challenge:
 
 * Listen for the "submit" event on the form (which will happen when the button is clicked)
    * (Don't forget to preventDefault on the form so it doesn't refresh your page. Google "form preventDefault" if you're not sure what I'm talking about)
 * Combine the title value and body value into an object (with a "title" property and "body" property)
 * Log the object to the console
 * 
 */