// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/indexnavbar.js";
let s = document.getElementById("navbar");
s.innerHTML = navbar();

import { searchCounty, append } from "./indexfetch.js";

let Search =(e) =>{
    if(e.key === "Enter"){
        let value = document.getElementById("countrycode").value;
        searchCounty(value).then((data) =>{
            console.log(data);
            let results = document.getElementById("results")
            append(data.articles, results);
        });
    }
};          

document.getElementById("countrycode").addEventListener("keydown", Search);



