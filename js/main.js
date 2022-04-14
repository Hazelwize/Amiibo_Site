document.querySelector('button').addEventListener('click', getName)
let resultSec = document.querySelector('#result')
let seriesFilter = document.getElementById('series')
document.querySelector('input').addEventListener('keyup', function(event) {
   if(event.code === "Enter"){
      document.querySelector('button').click()
   }
})
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



function getName() {
   document.querySelector('#result').innerHTML = ''
   let name = document.querySelector('input').value.toLowerCase()
   if(seriesFilter.checked){
      fetch("https://www.amiiboapi.com/api/amiibo/")
      .then(res => res.json())
      .then(data =>{
         console.log(data);

         data.amiibo.forEach((e) => {
            if(name == e.amiiboSeries.toLowerCase()){
               createCard(e);
            }
            
         })

      })
   }else{
      fetch(`https://www.amiiboapi.com/api/amiibo/?name=${name}`)
      .then(res => res.json())
      .then(data =>{
         console.log(data);
        
         data.amiibo.forEach((e) => {
         createCard(e);

         })
      })
      .catch(err =>{
         console.log(`error ${err}`)
         
      })
   }
   


}
 





// const options = {
// 	method: 'POST',
// 	headers: {
// 		'content-type': 'application/json',
// 		'X-RapidAPI-Host': 'ebay-average-selling-price.p.rapidapi.com',
// 		'X-RapidAPI-Key': 'a5faebe2f8msha378d40ff34ef15p1021d1jsn1ab55d709ea9'
// 	},
// 	body: '{"keywords":"iPhone","excluded_keywords":"locked cracked case box read LCD","max_search_results":"200","category_id":"9355","aspects":[{"name":"Model","value":"Apple iPhone X"},{"name":"LH_ItemCondition","value":"3000"},{"name":"Network","value":"Unlocked"},{"name":"Storage Capacity","value":"64 GB"}]}'
// };

// fetch('https://ebay-average-selling-price.p.rapidapi.com/findCompletedItems', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));