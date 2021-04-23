/* 
    1. 
        Use fetch() to load data from photos.json
        
        Display the photos inside of a FlexBox container
            The src will be https://picsum.photos/id/${photo.id}/100/100
            The alt text will be the photo.title from the json

        Use Flexbox to display the photos in a Row 
            The Row should Wrap to a new line on overflow
            Give each photo a white 0.1rem solid border
            Rounded corners at 0.7rem border-radius
            Each photo should be at least 1rem away from the photos around it
*/

const data = [
    {
      "id": 1,
      "title": "accusamus beatae ad facilis cum similique qui sunt"
    },
    {
      "id": 2,
      "title": "reprehenderit est deserunt velit ipsam"
    },
    {
      "id": 3,
      "title": "officia porro iure quia iusto qui ipsa ut modi"
    },
    {
      "id": 4,
      "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae"
    },
    {
      "id": 5,
      "title": "natus nisi omnis corporis facere molestiae rerum in"
    },
    {
      "id": 6,
      "title": "accusamus ea aliquid et amet sequi nemo"
    },
    {
      "id": 7,
      "title": "officia delectus consequatur vero aut veniam explicabo molestias"
    },
    {
      "id": 8,
      "title": "aut porro officiis laborum odit ea laudantium corporis"
    },
    {
      "id": 9,
      "title": "qui eius qui autem sed"
    }
  ]

function myGallery(){
    let imgHTML = data.map(photo => {
        return `<img class="my-photo" src="https://picsum.photos/id/${photo.id}/100/100" alt ="pic">` 
    }).join('')
    
    
    return imgHTML
}

const mygallery = myGallery()
console.log(mygallery)
    document.body.innerHTML = `
    <div class="my-gallery">
        
        <img class="my-photo" id="my-selected-photo" src="https://picsum.photos/id/1/200/200" alt="pic>
        <div class="my-photos">
        ${mygallery}
        </div>
    </div>
    `
const selectImg = Array.from(document.querySelectorAll(".my-photo"))

// console.log(selectImg)
const bigImg = document.querySelector("#my-selected-photo")
selectImg.slice(1).map((oneImg, index) => {
    oneImg.addEventListener("click", () => {
        bigImg.style.display = "block"
        bigImg.src = `https://picsum.photos/id/${index}/200/200`
        // console.log(oneImg.src[-1])
    })
    console.log(oneImg)
})

/* 
    2. 
       Write a function to create the my-photos Component
       
       Create a Column Flexbox container around my-photos
       
       Create a new img and place it, centered, above my-photos
        -This should be hidden initially
        -Also give it the my-photo class
    
       Create a "click" event for each photo in my-photos
        -When clicked, load the clicked photo into the new img tag
*/