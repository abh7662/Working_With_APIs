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
