// Send Request
const sendRequest = () => {

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
      
      // Assign initial "State" for Hero Img.
      let state = 0;  

      // Loop through and remove 'current' class
      const removeCurrentClass = () => {
        for(let k = 0; k < hero.length; k++) {
          hero[k].className = "";
        }
      }

      // Nav Rewind
      const rw = () => {
        if(state > 0) {
          state -= 1;    
          removeCurrentClass();
          hero[state].className = "current";              
        }              
      }

      // Nav FF
      const ff = () => {
        if(state < 3) {
          state += 1;
          removeCurrentClass();
          hero[state].className = "current";              
        }
      } 

      function clickity() {

        if( hero[ Number(this.className) - 1 ].className.indexOf('current') > -1 ) {
          // console.log("Already selected");
        }else {
            state = Number(this.className) - 1;
          for(let j = 0; j < hero.length; j++) {
            removeCurrentClass();
            hero[ Number(this.className) - 1 ].className = "current";
          } // End For
        
        } // End Else
        
      }

      // Get Nav Arrows Assign RW/FF
      const before = document.querySelector('.before')
                     .onclick = rw;
      const after = document.querySelector('.after')
                    .onclick = ff;         

      // Get Thumbs
      const thumbsImg = document.querySelectorAll('.thumbs a img');       

      // Loop Through Thumbs
      for(let i = 0; i < thumbsImg.length; i++) {
          
          // Populate imgInfo object
          imgInfo[i] = {
            thumb: bike[i].default_image_urls.small_image_url,
            main:  bike[i].default_image_urls.main_image_url,
            name:  bike[i].full_name            
          }

          // Assign src to Thumbs
          thumbsImg[i].src = imgInfo[i].thumb;
          thumbsImg[i].alt = imgInfo[i].name;

          // Assign initial Hero position
          hero[i].src = imgInfo[i].main;
          hero[i].alt = imgInfo[i].name;          

          
          thumbsImg[i].onclick = clickity;      

      } // End outer for      

    })
    .catch((e) => {
      console.log(`Error`);
    });  

}; 

sendRequest();
