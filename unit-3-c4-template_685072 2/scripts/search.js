// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js";
let n = document.getElementById("navbar");
n.innerHTML = navbar();

import { searchImages, append } from "./searchfetch.js";

let search =(e) =>{
    if(e.key === "Enter"){
        let value = document.getElementById("q").value;
        searchImages(value).then((data) =>{
            console.log(data);
            let results = document.getElementById("results")
            append(data.articles, results);
        });
    }
};          

document.getElementById("q").addEventListener("keydown", search);

// let  searchImages = async() =>{
//     let value = document.getElementById("q").value;
//     try{
//         let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${value}`);

//         let data = await res.json();
//         console.log(data);
//     }
//     catch(err){
//         console.log(err);
//     }
// };

