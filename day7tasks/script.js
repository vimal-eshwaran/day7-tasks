
// all the countries from the asia region using filter

var request= new XMLHttpRequest();
request.open('Get','https://restcountries.com/v3.1/all')
    request.send()
    request.onload=function(){

     var data=request.response
      var arr=(JSON.parse(data))
     var countries=arr.filter((elements)=>elements.region == 'Asia')
     console.log(...countries);
    

  // countries with population less than 2 lakhs using filter  

     var lessPopulation=arr.filter((elements)=>elements.population<200000)
     console.log(...lessPopulation);


  // print name, capital, flag using forEach function

     arr.forEach((element)=>{
        let a = {
            name: element.name,
            capital: element.capital,
            flag: element.flag,
        }
        console.log(a)
     })

    
     // total population using reduce function

     var totalPopulation=arr.reduce((accumulator,elements)=> elements.population+accumulator,0)
   console.log(totalPopulation);
       
   
   // countries using US dollar as currency
       
   var dollarCurrency = arr.filter((element) => {
      for(let key in element.currencies){
          if(element.currencies[key].name == 'United States dollar') return element
      }
   })
   
    console.log(dollarCurrency);

    }



         



 
 
        