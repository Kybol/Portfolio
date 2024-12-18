import { clearPage } from '../../utils/render';

const AppPage = () => {
  clearPage();
  renderAppPage();
};

function renderAppPage() {
  const main = document.querySelector('main');
  main.innerHTML += `
    <div class="flex flex-col m-32">
      <h1 class="text-4xl font-bold ml-52"> Application </h1>
      <div class="ml-52"> You will find here all the application I developed </div>
    </div>
    <div>
      <div id="mobile-app">
        <div class="w-screen h-20 flex justify-stretch">
          <div class="bg-grey-100 w-8/12"></div>
          <div class="w-2/12 text-end content-end mx-5 text-2xl font-bold text-grey-300" >Mobile Applications</div>
          <div class="bg-grey-100 w-2/12"></div>
        </div>
        <div id="mobile-app-content" class="ml-80"></div>
      </div>
      <div id="web-app">
      </div>
    </div>
  `

  renderMobileApps()
}


function renderMobileApps(){
  const mobileAppsContainer = document.querySelector('#mobile-app-content');

  const clemo = renderClemo()
  mobileAppsContainer.innerHTML += clemo
}

function renderClemo() {
  const carousel = renderCarousel()

  const clemoPresentation = `
    <div class="max-w-screen mt-32">
      <div class="max-w-full">
        <h3 class="text-2xl font-bold"> Clemo </h3>
        <div class="text-lg"> The diary app </div>
      </div>
      <div class="mt-3 text-grey-300">
        Clemo is a personal diary on your phone. You can write notes, take pictures and record your mood everywhere, at anytime.
      </div>
      <div class="flex justify-start gap-52 mt-20 max-w-full" >
        <div class="flex w-1/3 gap-1 min-w-96">
          <div>
            <img class="object-contain h-full" src="/src/img/clemo/Screen0.png">
          </div>
          <div>
            <img class="object-contain h-full" src="/src/img/clemo/Screen5.png">
          </div>
        </div>
        <div class="min-w-80 max-w-96">
          <ul class="space-y-5 list-none list-inside p-1">
            <li class="flex gap-10 items-center"> 
              <div class="h-10 w-10 rounded-full bg-grey-800 p-2">
                <img class="object-contain h-full" src="/src/img/icons/code.png">
              </div>
              <div> Developed with Java on AndroidStudio </div>
            </li>
            <li class="flex gap-10 items-center"> 
              <div class="h-10 w-10 rounded-full bg-grey-800 p-2">
                <img class="object-contain h-full" src="/src/img/icons/letter-i.png">
              </div>
              <div> Mobile App for Android </div>
            </li>
            <li class="flex gap-10 items-center"> 
              <div class="h-10 w-10 rounded-full bg-grey-800 p-2">
                <img class="object-contain h-full" src="/src/img/icons/team.png">
              </div>
              <div> Developed by a team of 3 people </div>
            </li>
            <li class="flex gap-10 items-center"> 
              <div class="h-10 w-10 rounded-full bg-grey-800 p-2">
                <img class="object-contain h-full" src="/src/img/icons/calendar.png">
              </div>
              <div> Made in 2024 </div>
            </li>
            <li>
            <div class="border-2 border-grey-800 rounded-md p-5">
                <h6 class="font-bold mb-5">My Role</h6>
                <span>
                  I was in charge of the graphical aspect of the application. I designed all the screens on Figma and transferred them in Android Studio using XML.
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      </div>
      ${carousel}
    </div>
  `

  return clemoPresentation
}


function renderCarousel() {
  const carouselElementClass = "hover:scale-150 hover:border-white hover:border-2"
  const carousel = `
    <ul class="flex w-3/4 gap-1 mt-32">
      <li class="${carouselElementClass}">
        <img class="object-contain h-full" src="/src/img/clemo/Screen1.png">
      </li>
      <li class="${carouselElementClass}">
        <img class="object-contain h-full" src="/src/img/clemo/Screen2-Login.png">
      </li>
      <li class="${carouselElementClass}">
        <img class="object-contain h-full" src="/src/img/clemo/Screen2-Register.png">
      </li>
      <li class="${carouselElementClass}">
        <img class="object-contain h-full" src="/src/img/clemo/Screen3.png">
      </li>
      <li class="${carouselElementClass}">
        <img class="object-contain h-full" src="/src/img/clemo/Screen5-Calendar.png">
      </li>
      <li class="${carouselElementClass}">
        <img class="object-contain h-full" src="/src/img/clemo/Screen5-EntryDetails.png">
      </li>
      <li class="${carouselElementClass}">
        <img class="object-contain h-full" src="/src/img/clemo/Screen6.png">
      </li>
      <li class="${carouselElementClass}">
        <img class="object-contain h-full" src="/src/img/clemo/Screen6-EntryStarted.png">
      </li>
    </ul>
  `

  return carousel
}


export default AppPage;
