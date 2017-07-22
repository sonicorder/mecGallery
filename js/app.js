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
      const imgInfo = [
        {
          thumb: bike[0].default_image_urls.small_image_url,
          main:  bike[0].default_image_urls.main_image_url,
          name:  bike[0].full_name
        },
        {
          thumb: bike[1].default_image_urls.small_image_url,
          main:  bike[1].default_image_urls.main_image_url,
          name:  bike[1].full_name          
        },
        {
          thumb: bike[2].default_image_urls.small_image_url,
          main:  bike[2].default_image_urls.main_image_url,
          name:  bike[2].full_name          
        },
        {
          thumb: bike[3].default_image_urls.small_image_url,
          main:  bike[3].default_image_urls.main_image_url,
          name:  bike[3].full_name          
        }                        
      ]

      // Get Hero Image
      const hero = document.querySelector('.heroImg');

      // Get Thumbs
      const thumbsImg = document.querySelectorAll('.thumb');        

      // Assign initial state
      hero.src = imgInfo[0].main;
      hero.alt = imgInfo[0].name;

      // Loop Through Thumbs
      for(let i = 0; i < thumbsImg.length; i++) {

          // Assign src for Thumbs
          thumbsImg[i].src = imgInfo[i].thumb;
          thumbsImg[i].alt = imgInfo[i].name;

          // Change Hero src to match thumbmail clicked
          thumbsImg[i].onclick = function() {
            hero.src = imgInfo[i].main;
            hero.alt = imgInfo[i].name;
          }

      }      

      

      console.log(bike);
    })
    .catch((e) => {
      console.log(`Error`);
    });  

}; 

const sendIt = request();
