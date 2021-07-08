
window.addEventListener('load', (event) => {
    let trendingUrl = "https://api.giphy.com/v1/gifs/trending?api_key=RtWkq4uMtQ4Jnu4a2v1ktXDEwgdQOzHj&limit=25&rating=g"
    fetch(trendingUrl)
    .then ((response) => {
        return response.json()
    })
    .then ((json) => {
        for (let i = 0; i < json.data.length; i++) {
            var imagesUrl = json.data[i].images.fixed_height.url;
            console.log(imagesUrl);
            var img = document.createElement("img");
            img.setAttribute("src", imagesUrl);
            document.querySelector('.trending').appendChild(img)
        }
    })
})