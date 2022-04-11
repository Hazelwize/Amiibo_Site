document.querySelector('button').addEventListener('click', getName)
function capFirst(str) {
   
   
   
}

function getName() {
   fetch("https://www.amiiboapi.com/api/amiibo")
   .then(res => res.json())
   .then(data =>{
      console.log(data.amiibo);
      let name = document.querySelector('input').value.toLowerCase()
      let nav = data.amiibo.findIndex(e => e.character.toLowerCase() == name);
      console.log(nav);
      console.log(name)
      document.querySelector('h2').innerText = data.amiibo[nav].name
      document.querySelector('img').src = data.amiibo[nav].image
      document.querySelector('h3').innerText = `Series: ${data.amiibo[nav].gameSeries}`
   })
   .catch(err =>{
      console.log(`error ${err}`)
      
   })


}
 