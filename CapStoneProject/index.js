let postsArray = []

function renderPosts(postsArray) {
  document.querySelector("#main").innerHTML = postsArray
    .map(
      (arr) => `
      <h1>${arr.title}</h1>
        <p>${arr.body}</p>
        <hr />
      `
    )
    .join("");
}
function clearForm() {
  getIds("title").value = "";
  getIds("body").value = "";
}
fetch("https://apis.scrimba.com/jsonplaceholder/posts/")
  .then((response) => response.json())
  .then((data) => {
    postsArray = data.slice(0, 5);
    renderPosts(postsArray);
  })

function getIds(value) {
  return document.getElementById(value);
}
let myData = {};
document.querySelector(".btn").addEventListener("click", () => {
  const title = getIds("title").value;
  const body = getIds("body").value;
  myData = {
    title,
    body,
  }
  fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
    method: "POST",
    body: JSON.stringify(myData),
    headers: { "content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => {
      postsArray.unshift(data)
      renderPosts(postsArray)
    });
  clearForm()
});

/**
 * Challenge: Send this off to the server!
 *
 * 1. BaseURL: https://apis.scrimba.com/jsonplaceholder/
 * 2. Endpoint: /posts
 * 3. method: ???
 * 4. Request body: ??? (Remember to turn it into JSON)
 * 5. Headers: ??? (Check the JSON Placeholder API docs or past casts for help)
 */
/**
 Challenge:
 
 * Listen for the "submit" event on the form (which will happen when the button is clicked)
    * (Don't forget to preventDefault on the form so it doesn't refresh your page. Google "form preventDefault" if you're not sure what I'm talking about)
 * Combine the title value and body value into an object (with a "title" property and "body" property)
 * Log the object to the console
 * 
 */
