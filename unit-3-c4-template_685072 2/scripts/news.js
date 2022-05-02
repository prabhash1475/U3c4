// Ude Import export (MANDATORY)
import { navbar } from "../components/navbar.js";
let n = document.getElementById("navbar");
n.innerHTML = navbar();

import { searchNews, append } from "./newsfetch.js";

let search =(e) =>{
    if(e.key === "Enter"){
        let value = document.getElementById("q").value;
        searchNews(value).then((data) =>{
            console.log(data);
            let detailed_news = document.getElementById("detailed_news")
            append(data.articles, detailed_news);
        });
    }
};          

document.getElementById("q").addEventListener("keydown", search);