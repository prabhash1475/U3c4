let cartArr = JSON.parse(localStorage.getItem("news"))||[]
console.log(cartArr);

let searchNews = async (value) => {
    try{
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${value}`
        );
          let data = await res.json();
          console.log(data);  
          return data;
    }catch (err){
        console.log(err);
    }
};

let append = (data, detailed_news) => {
    data.forEach(({urlToImage,title,content})=>{
        let div = document.createElement('div');
        let div2 = document.createElement("div2")
        let img = document.createElement("img");
        let h3 = document.createElement("h3");
        let p = document.createElement("p");

        img.src =urlToImage;
        div2.setAttribute("class","news");
        h3.innerText = title;
        p.innerText = content;

        div.append(div2,img,h3,p);
        detailed_news.append(div);
    });

};

export { searchNews , append };