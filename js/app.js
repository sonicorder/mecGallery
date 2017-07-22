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

      // Declare imgInfo
      const imgInfo = [];

      // Get Hero Image
      const hero = document.querySelectorAll('.hero-img.container img');

      function clickity() {

        if( hero[ Number(this.className) - 1 ].className.indexOf('current') > -1 ) {
          // console.log("Already selected");
        }else {

          for(var j = 0; j < hero.length; j++) {
            hero[j].className = "";
            hero[ Number(this.className) - 1 ].className = "current";
          } // End For
        
        } // End Else
        
      }

      // Get Thumbs
      const thumbsImg = document.querySelectorAll('.thumbs a img');       

      // Loop Through Thumbs
      for(let i = 0; i < thumbsImg.length; i++) {
          
          // Populate imgInfo
          imgInfo[i] = {
            thumb: bike[i].default_image_urls.small_image_url,
            main:  bike[i].default_image_urls.main_image_url,
            name:  bike[i].full_name            
          }

          // Assign src for Thumbs
          thumbsImg[i].src = imgInfo[i].thumb;
          thumbsImg[i].alt = imgInfo[i].name;

          // Assign initial state
          hero[i].src = imgInfo[i].main;
          hero[i].alt = imgInfo[i].name;          

          thumbsImg[i].onclick = clickity;      

      } // End outer for      

    })
    .catch((e) => {
      console.log(`Error`);
    });  

}; 

const sendIt = request();
