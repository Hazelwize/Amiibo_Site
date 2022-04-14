document.querySelector('button').addEventListener('click', getName)
let resultSec = document.querySelector('#result')
document.querySelector('input').addEventListener('keyup', function(event) {
   if(event.code === "Enter"){
      document.querySelector('button').click()
   }
})



function getName() {
   document.querySelector('#result').innerHTML = ''
   let name = document.querySelector('input').value.toLowerCase()
   fetch(`https://www.amiiboapi.com/api/amiibo/?name=${name}`)
   .then(res => res.json())
   .then(data =>{
      console.log(data);
      function createCard(e) {
         let div = document.createElement('div')
         let img = document.createElement('img')
         let title = document.createElement('h3')
         let series = document.createElement('h5')
         resultSec.appendChild(div)
         div.appendChild(img)
         div.appendChild(title)
         div.appendChild(series)
         div.querySelector(`img`).src = e.image
         div.querySelector(`h3`).innerText = `Name: ${e.name}`
         div.querySelector('h5').innerText = `Series: ${e.amiiboSeries}`
      }
      data.amiibo.forEach((e) => {
        createCard(e);

      })
   })
   .catch(err =>{
      console.log(`error ${err}`)
      
   })


}
 