function apiRequest() {
	var userInput = document.querySelector(".search").value;
	console.log(userInput);
	var apiKey = "RtWkq4uMtQ4Jnu4a2v1ktXDEwgdQOzHj";
	var url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${userInput}d&limit=25&offset=0&rating=g&lang=en`;

	fetch(url)
		.then(function (data) {
			return data.json();
		})

		.then(function (json) {
			document.querySelector(".pictures").innerHTML = "";
			for (let i = 0; i < json.data.length; i++) {
				var imgPath = json.data[i].images.fixed_height.url;
				var img = document.createElement("img");
				img.setAttribute("src", imgPath);
				document.querySelector(".pictures").appendChild(img);
			}
		});
}
document.querySelector(".search-btn").addEventListener("click", apiRequest);
