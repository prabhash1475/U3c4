
let searchCounty = async (value) => {
    try{
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${value}`
        );
          let data = await res.json();
          console.log(data);  
          return data;  
    }catch (err){
        console.log(err);
    }
};
let append = (data, results) => {
    data.forEach(({urlToImage,title,description})=>{
        let div = document.createElement('div');
        let img = document.createElement("img");
        let h3 = document.createElement("h3");
        let p = document.createElement("p");

        img.src =urlToImage;
        h3.innerText = title;
        p.innerText = description;

        div.append(img,h3,p);
        results.append(div);
    });

};

export { searchCounty , append };