const gettingNewsApi = async () => {

    try {

const url = `https://newsapi.org/v2/everything?q=apple&from=2022-09-21&to=2022-09-21&sortBy=popularity&apiKey=089c151ad422410dad39c767c6445a9a`;
   const news = await fetch(url);
    if(news){news = json().then((data) =>{
            console.log(data.articles)
        })
            
    }
} catch (error) {
    console.log(error)
}


}
