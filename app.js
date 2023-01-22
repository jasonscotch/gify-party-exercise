console.log("Let's get this party started!");
const gifs = document.querySelector('#gifs');


async function getRandomGif() {
    const res = await axios.get('https://api.giphy.com/v1/gifs/random?api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym');
    // console.log(res);
    // console.log(res.data.data.images.fixed_height.url);
    const newItem = document.createElement('div');
      const img = document.createElement('img');
      
      img.src = res.data.data.images.original.url;

        newItem.appendChild(img);
        gifs.appendChild(newItem);
}

async function getGifSearch(keyword) {
    try {
      const url = `https://api.giphy.com/v1/gifs/search?api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym&q=${keyword}`;
      const res = await axios.get(url);
      let num = res.data.data.length;
      let rand = Math.floor(Math.random()*num);
      console.log(res.data.data)
      console.log(res.data.data[rand].images.original.url)
      
      const newItem = document.createElement('div');
      const img = document.createElement('img');
    
      img.src = res.data.data[rand].images.original.url;

        newItem.appendChild(img);
        gifs.appendChild(newItem);


    } catch (e) {
      alert("NO GIFS FOUND!");
      getRandomGif();
    }
  }
  
  const search = document.querySelector('#searchBtn');
  search.addEventListener("click", function (e) {
    const input = document.querySelector('#search');
    e.preventDefault();
    getGifSearch(input.value);
    input.value = '';
  })
  
const remove = document.querySelector('#removeBtn');
remove.addEventListener('click', function (e) {
    const gifs = document.querySelector('#gifs');
    gifs.children.remove();
})



