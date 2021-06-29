/**
Challenge:

1. Fetch a random image from the Dog API again 
(https://dog.ceo/api/breeds/image/random)

2. Access the DOM and insert the URL you got from the
API as an image `src` property (probably easiest if 
you create the image completely here in the JS and add 
it as the innerHTML of another element on the DOM)
*/
async function DogApiFetch(){
    const imgData = await fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => data)
    const getBodyDOM = document.body
    getBodyDOM.innerHTML = `
        <img src = ${imgData.message} alt="random image">
    `
}
DogApiFetch()
