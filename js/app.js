// Send Request
function request() {

  let endPoint = 'https://www.mec.ca/api/v1/products/search?keywords=Mens+Road+Bikes+Ridley';

  fetch(endPoint)
    .then((response) => {
      let myResponse = response.json();
      return myResponse;
    })
    .then((productResponse) => {

      // Assign response to 'bike'
      let bike = productResponse.products;

      // Hold Src
      const imgSrc = [
        {
          thumb: bike[0].default_image_urls.small_image_url,
          main:  bike[0].default_image_urls.main_image_url,
        },
        {
          thumb: bike[1].default_image_urls.small_image_url,
          main:  bike[1].default_image_urls.main_image_url,
        },
        {
          thumb: bike[2].default_image_urls.small_image_url,
          main:  bike[2].default_image_urls.main_image_url,
        },
        {
          thumb: bike[3].default_image_urls.small_image_url,
          main:  bike[3].default_image_urls.main_image_url,
        }                        
      ]

      // Get Hero Image
      const hero = document.querySelector('.heroImg');

      // Get Thumbs
      const thumbsImg = document.querySelectorAll('.thumb');        

      // Assign initial state
      hero.src = imgSrc[0].main;

      // Loop Through Thumbs
      for(let i = 0; i < thumbsImg.length; i++) {

          // Assign src for Thumbs
          thumbsImg[i].src = imgSrc[i].thumb;

          // Change Hero src to match thumbmail clicked
          thumbsImg[i].onclick = function() {
            hero.src = imgSrc[i].main;
          }



      }      

      

      console.log(bike);
    })
    .catch((e) => {
      console.log(`Error`);
    });  

}; 

const sendIt = request();
