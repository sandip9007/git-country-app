
const getCountry = (contryCode, callback)=>{
   fetch('http://restcountries.eu/rest/v2/all').then((response)=>{
       const data = response.json()
       return data
   }).then((data)=>{
       const newDdata = data.find((country)=>{
          return country.alpha2Code.includes(contryCode)
       })
        callback(undefined, newDdata)
   }).catch((error)=>{
        callback("Error", undefined)
   })
}

const showData = document.querySelector('#searchCountry');

document.querySelector('#search_btn').addEventListener('click', (e)=>{
    e.preventDefault();
    getCountry(showData.value, (error, data)=>{
       if(error){
           alert('Invalid search, please search by country code')
       }
       else{
           console.log(data)
        document.querySelector('#showdata').innerHTML = 
        `
        <img src='${data.flag}'>
        <p>Country :  ${data.name}</p>
        <p>Capital :  ${data.capital}</p>
        <p>Region :  ${data.region}</p>
        <p>Population :  ${data.population}</p>
        <p>CallingCodes :  ${data.callingCodes}</p>
        `
       }
    })
})  