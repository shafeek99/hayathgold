/*var header = document.getElementById("navbarExample1");
var btns = header.getElementsByClassName("nav-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
*/
const activePage= window.location.pathname;
const navLinks=document.querySelectorAll('.nav-link').
forEach(link => {
if(link.href.includes(`${activePage}`)){
link.classList.add('active');

}
});

$('.brand-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:3
      },
      1000:{
        items:5
      }
    }
    }) 
    $('.brands-carousel').owlCarousel({
      loop:true,
      margin:10,
      autoplay:false,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:2
        },
        1000:{
          items:4
        }
      }
      }) 



      $(document).ready(function(){

        // Populate images from data attributes.
        var scrolled = $(window).scrollTop()
        $('.parallax').each(function(index) {
            var imageSrc = $(this).data('image-src')
            var imageHeight = $(this).data('height')
            $(this).css('background-image','url(' + imageSrc + ')')
            $(this).css('height', imageHeight)
      
            // Adjust the background position.
            var initY = $(this).offset().top
            var height = $(this).height()
            var diff = scrolled - initY
            var ratio = Math.round((diff / height) * 100)
            $(this).css('background-position','center ' + parseInt(-(ratio * 1.5)) + 'px')
        })
      
        // Attach scroll event to window. Calculate the scroll ratio of each element
        // and change the image position with that ratio.
        // https://codepen.io/lemagus/pen/RWxEYz
        $(window).scroll(function() {
          var scrolled = $(window).scrollTop()
          $('.parallax').each(function(index, element) {
            var initY = $(this).offset().top
            var height = $(this).height()
            var endY  = initY + $(this).height()
      
            // Check if the element is in the viewport.
            var visible = isInViewport(this)
            if(visible) {
              var diff = scrolled - initY
              var ratio = Math.round((diff / height) * 100)
              $(this).css('background-position','center ' + parseInt(-(ratio * 1.5)) + 'px')
            }
          })
        })
      })
      
      // Check if the element is in the viewport.
      // http://www.hnldesign.nl/work/code/check-if-element-is-visible/
      function isInViewport(node) {
        // Am I visible? Height and Width are not explicitly necessary in visibility
        // detection, the bottom, right, top and left are the essential checks. If an
        // image is 0x0, it is technically not visible, so it should not be marked as
        // such. That is why either width or height have to be > 0.
        var rect = node.getBoundingClientRect()
        return (
          (rect.height > 0 || rect.width > 0) &&
          rect.bottom >= 0 &&
          rect.right >= 0 &&
          rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.left <= (window.innerWidth || document.documentElement.clientWidth)
        )
      }
      

  let slides= document.querySelectorAll('.slide-container');
  index=0;
  function next(){
    slides[index].classList.remove('active');
    index=(index+1) % slides.length;
    slides[index].classList.add('active');
  }
  function prev(){
    slides[index].classList.remove('active');
    index=(index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
  }
  // =========== =========================================================================================================================

  // =================================== Product ==========================================================
  //selecting all required elements
  const filterItem = document.querySelector(".items");
  const filterImg = document.querySelectorAll(".gallery .image");
  
  window.onload = ()=>{ //after window loaded
    filterItem.onclick = (selectedItem)=>{ //if user click on filterItem div
      if(selectedItem.target.classList.contains("item")){ //if user selected item has .item class
        filterItem.querySelector(".active").classList.remove("active"); //remove the active class which is in first item
        selectedItem.target.classList.add("active"); //add that active class on user selected item
        let filterName = selectedItem.target.getAttribute("data-name"); //getting data-name value of user selected item and store in a filtername variable
        filterImg.forEach((image) => {
          let filterImges = image.getAttribute("data-name"); //getting image data-name value
          //if user selected item data-name value is equal to images data-name value
          //or user selected item data-name value is equal to "all"
          if((filterImges == filterName) || (filterName == "all")){
            image.classList.remove("hide"); //first remove the hide class from the image
            image.classList.add("show"); //add show class in image
          }else{
            image.classList.add("hide"); //add hide class in image
            image.classList.remove("show"); //remove show class from the image
          }
        });
      }
    }
    for (let i = 0; i < filterImg.length; i++) {
      filterImg[i].setAttribute("onclick", "preview(this)"); //adding onclick attribute in all available images
    }
  }
  
  //fullscreen image preview function
  //selecting all required elements
  const previewBox = document.querySelector(".preview-box"),
  categoryName = previewBox.querySelector(".title p"),
  previewImg = previewBox.querySelector("img"),
  closeIcon = previewBox.querySelector(".icon"),
  shadow = document.querySelector(".shadow");
  
  function preview(element){
    //once user click on any image then remove the scroll bar of the body, so user cant scroll up or down
    document.querySelector("body").style.overflow = "hidden";
    let selectedPrevImg = element.querySelector("img").src; //getting user clicked image source link and stored in a variable
    let selectedImgCategory = element.getAttribute("data-name"); //getting user clicked image data-name value
    previewImg.src = selectedPrevImg; //passing the user clicked image source in preview image source
    categoryName.textContent = selectedImgCategory; //passing user clicked data-name value in category name
    previewBox.classList.add("show"); //show the preview image box
    shadow.classList.add("show"); //show the light grey background
    closeIcon.onclick = ()=>{ //if user click on close icon of preview box
      previewBox.classList.remove("show"); //hide the preview box
      shadow.classList.remove("show"); //hide the light grey background
      document.querySelector("body").style.overflow = "auto"; //show the scroll bar on body
    }
  }

  // =================================================
  //   Product display
