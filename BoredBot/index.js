/**
Challenge: 

- Start building out the BoredBot Skeleton however you'd like. 
    That will include:
    - A title for the app ("BoredBot" might be a good start 😉)
    - A placeholder element that will be populated with the random 
      idea we get from the API
    - A button to click for triggering the GET request to the Bored API. 
      (Don't worry about implementing the button quite yet)
*/


/**
Challenge: 

1. Fetch a random activity from the Bored API
url: https://apis.scrimba.com/bored/api/activity

2. Display the text of the activity in the browser
*/

document.querySelector(".btn").addEventListener("click",()=>{
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
        document.querySelector(".random-idea").innerHTML = `
            ${data.activity}
        `
    })
})




/**
Challenge:

1. Fetch a random image from the Dog API again 
(https://dog.ceo/api/breeds/image/random)

2. Access the DOM and insert the URL you got from the
API as an image `src` property (probably easiest if 
you create the image completely here in the JS and add 
it as the innerHTML of another element on the DOM)
*/
// async function DogApiFetch(){
//     const imgData = await fetch("https://dog.ceo/api/breeds/image/random")
//         .then(response => response.json())
//         .then(data => data)
//     const getBodyDOM = document.body
//     getBodyDOM.innerHTML = `
//         <img src = ${imgData.message} alt="random image">
//     `
// }
// DogApiFetch()
