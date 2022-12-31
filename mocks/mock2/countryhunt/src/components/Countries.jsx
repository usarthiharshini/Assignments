
import { useEffect, useState } from "react";
import MultiActionAreaCard from "./Card";
import "../App.css"

function Countries() {

    const [country,setCountry] = useState([]);

const getData= async()=>{
    const res = await fetch(`https://restcountries.com/v2/all?_sort=population&_order=asc`);
    const data = await res.json();
   return data;
}

const DisplayData= async()=>{
    const res = await getData();
     await setCountry(res);
   //console.log(country);
   
}

useEffect(()=>{
    DisplayData();

},[])

    return ( <div id="grid-container">

{
    country.map((country)=>{
    
       
        return <MultiActionAreaCard name={country.name} image={country.flag} key={country.alpha2Code} 
      population={country.population} region = {country.region} capital={country.capital}
       subregion={country.subregion} nativename={country.nativeName} border={country.borders}
         language={country.languages}
        currency={country.currencies}  ></MultiActionAreaCard>
    })
}
    </div> );
}

export default Countries;