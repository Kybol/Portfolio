const Navbar = () => {
  const navbarWrapper = document.querySelector('#navbarWrapper');
  const navbarElementClass = "block py-2 px-3 text-grey-800 rounded hover:bg-grey-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-grey-800 dark:hover:bg-grey-800 dark:hover:text-white md:dark:hover:bg-transparent nav-link"
  const navbar = `
    <nav class="bg-white border-grey-100 bg-grey-800">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="#" class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white nav-link" data-uri="/">
         Kimberley Blomme
      </a>
      <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-grey-800 rounded-lg md:hidden hover:bg-grey-100 focus:outline-none focus:ring-2 focus:ring-grey-100 dark:text-grey-100 dark:hover:bg-grey-800 dark:focus:ring-grey-800" aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-grey-100 rounded-lg bg-grey-100 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-grey-800 md:dark:bg-grey-800 dark:border-grey-100">
          <li>
            <a href="#" class="${navbarElementClass}" aria-current="page" data-uri="/">Home</a>
          </li>

          <li>
            <a href="#" class="${navbarElementClass}" data-uri="/app">Application</a>
          </li>
          <li>
            <a href="#" class="${navbarElementClass}" data-uri="/new">New Page</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
`

  navbarWrapper.innerHTML = navbar;
};

export default Navbar;