const Footer = () => {
    const footerWrapper = document.querySelector('footer');
    const listElementClass = "flex gap-5 items-center pb-3"
    const footer = `
    <div id="footer" class="bg-grey-800 border-grey-100 text-white md:px-52 px-5 py-5 items-center">
      <ul class="no-list space-y-1">
        <li class="mb-10">
            <h6 class="text-ld text-white font-bold"> Contact Information </h6>
        </li>
        <li class="${listElementClass}">
            <div class="md:h-10 h-8 pr-5 border-r-2 border-white"> <img class="object-scale-down md:h-10 h-8" src="/img/icons/phone-white.png"> </div>
            <span> (+32) 0492 83 22 09 </span>
        </li> 
        <li class="${listElementClass}">
            <div class="md:h-10 h-8 pr-5 border-r-2 border-white" > <img class="object-scale-down md:h-10 h-8" src="/img/icons/letter.png"> </div>
            <span> kimberley.blomme.pro@gmail.com </span>
        </li>
      </ul>
      <div class="text-xs text-grey-300 text-center mt-10">@made by Kimberley Blomme</div>
    </div>
  `
  
    footerWrapper.innerHTML = footer;
  };
  
  export default Footer;