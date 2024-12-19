const Navbar = () => {
  const navbarWrapper = document.querySelector('#navbarWrapper');
  const navbarElementClass = "p-5 text-white hover:bg-grey-300 hover:text-black md:border-0 nav-link"
  const navbar = `
    <nav class="bg-grey-800 border-grey-100 text-white fixed w-full top-0">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="#" class="self-center text-2xl font-semibold whitespace-nowrap nav-link" data-uri="/">
         Kimberley Blomme
      </a>
      <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-grey-800 rounded-lg md:hidden hover:bg-grey-100 focus:outline-none focus:ring-2 focus:ring-grey-100 aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-grey-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
          <li>
            <a href="#" class="${navbarElementClass}" aria-current="page" data-uri="/">Home</a>
          </li>

          <li>
            <a href="#" class="${navbarElementClass}" data-uri="/app">Applications</a>
          </li>

           <li>
            <a href="#" class="${navbarElementClass}" data-uri="/games">Games</a>
          </li>

           <li>
            <a href="#" class="${navbarElementClass}" data-uri="/art">Art</a>
          </li>

          <li>
            <a href="#footer" class="p-5 text-white hover:bg-grey-300 hover:text-black md:border-0">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
`

  navbarWrapper.innerHTML = navbar;
};

export default Navbar;
