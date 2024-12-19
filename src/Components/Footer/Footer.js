const Footer = () => {
    const footerWrapper = document.querySelector('footer');
    const listElementClass = "flex gap-5 items-center pb-3"
    const footer = `
    <div id="footer" class="bg-grey-800 border-grey-100 text-white px-52 py-5 items-center">
      <ul class="no-list space-y-1">
        <li class="mb-10">
            <h6 class="text-ld text-white font-bold"> Contact Information </h6>
        </li>
        <li class="${listElementClass}">
            <div class="h-10 pr-5 border-r-2 border-white"> <img class="object-scale-down h-10" src="/img/icons/phone-white.png"> </div>
            <span> (+32) 0492 83 22 09 </span>
        </li> 
        <li class="${listElementClass}">
            <div class="h-10 pr-5 border-r-2 border-white" > <img class="object-scale-down h-10" src="/img/icons/letter.png"> </div>
            <span> kimberley.blomme.pro@gmail.com </span>
        </li>
      </ul>
      <div class="text-xs text-grey-300 text-center mt-10">@made by Kimberley Blomme</div>
    </div>
  `
  
    footerWrapper.innerHTML = footer;
  };
  
  export default Footer;