import { clearPage } from '../../utils/render';

const AppPage = () => {
  clearPage();
  renderAppPage();
};

function renderAppPage() {
  const sideBar = renderSideBar();
  const main = document.querySelector('main');
  main.innerHTML += `
    <div class="flex flex-col m-32">
      <h1 class="text-4xl font-bold ml-52"> Application </h1>
      <div class="ml-52"> You will find here all the application I developed </div>
    </div>
    <div class="flex">
    <div id="side-bar-wrapper"> ${sideBar} </div>
      <div>
        <div id="mobile">
          <div class="w-screen h-20 flex justify-stretch">
            <div class="bg-grey-100 w-8/12"></div>
            <div class="w-2/12 text-end content-end mx-5 text-2xl font-bold text-grey-300"> Mobile Applications</div>
            <div class="bg-grey-100 w-2/12"></div>
          </div>
          <div id="mobile-app-content" class="ml-80 mr-96 mb-52"></div>
        </div>
        <div id="web">
          <div class="w-screen h-20 flex justify-stretch">
            <div class="bg-grey-100 w-8/12"></div>
            <div class="w-2/12 text-end content-end mx-5 text-2xl font-bold text-grey-300"> Web Applications</div>
            <div class="bg-grey-100 w-2/12"></div>
          </div>
          <div id="web-app-content" class="ml-80 mr-96 mb-52"></div>
        </div>
      </div>
    </div>
  `;

  renderMobileApps();
  renderWebApps();

}


function renderMobileApps(){
  const mobileAppsContainer = document.querySelector('#mobile-app-content');

  const clemo = renderClemo();
  mobileAppsContainer.innerHTML += clemo;

  const sketchHub = renderSketchHub();
  mobileAppsContainer.innerHTML += sketchHub;

}

function renderClemo() {
  const carousel = renderCarousel();

  const clemoPresentation = `
    <div id="clemo" class="max-w-screen mt-32 pt-10 border-t-2 border-grey-800">
      <div class="max-w-full">
        <h3 class="text-2xl font-bold"> Clemo </h3>
        <div class="text-lg"> The diary app </div>
      </div>
      <div class="mt-3 text-grey-300">
        Clemo is a personal diary on your phone. You can write notes, take pictures and record your mood everywhere, at anytime.
      </div>
      <div class="flex justify-between gap-2 mt-20 max-w-full" >
        <div class="flex w-5/12 gap-1 min-w-96">
          <div>
            <img class="object-contain h-full" src="/img/clemo/Screen0.png">
          </div>
          <div>
            <img class="object-contain h-full" src="/img/clemo/Screen5.png">
          </div>
        </div>
        <div class="min-w-80 max-w-96">
          <ul class="space-y-5 list-none list-inside p-1">
            <li class="flex gap-10 items-center"> 
              <div class="h-10 w-10 rounded-full bg-grey-800 p-2">
                <img class="object-contain h-full" src="/img/icons/code.png">
              </div>
              <div> Developed with Java on AndroidStudio </div>
            </li>
            <li class="flex gap-10 items-center"> 
              <div class="h-10 w-10 rounded-full bg-grey-800 p-2">
                <img class="object-contain h-full" src="/img/icons/letter-i.png">
              </div>
              <div> Mobile App for Android </div>
            </li>
            <li class="flex gap-10 items-center"> 
              <div class="h-10 w-10 rounded-full bg-grey-800 p-2">
                <img class="object-contain h-full" src="/img/icons/team.png">
              </div>
              <div> Developed by a team of 3 people </div>
            </li>
            <li class="flex gap-10 items-center"> 
              <div class="h-10 w-10 rounded-full bg-grey-800 p-2">
                <img class="object-contain h-full" src="/img/icons/calendar.png">
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
      ${carousel}

      <div class="mt-52">
        <span class="font-bold"> Application Site Map </span>
        <div >
          <img class="object-contain h-full" src="/img/clemo/SiteMap.png">
        </div>
      </div>
      </div>
    </div>
  `;

  return clemoPresentation;
}


function renderCarousel() {
  const carouselElementClass = "border-2 border-transparent hover:scale-150 hover:border-white hover:cursor-zoom-in";
  const carousel = `
    <ul class="flex gap-1 mt-32">
      <li class="${carouselElementClass}">
        <img class="object-contain h-full" src="/img/clemo/Screen1.png">
      </li>
      <li class="${carouselElementClass}">
        <img class="object-contain h-full" src="/img/clemo/Screen2-Login.png">
      </li>
      <li class="${carouselElementClass}">
        <img class="object-contain h-full" src="/img/clemo/Screen2-Register.png">
      </li>
      <li class="${carouselElementClass}">
        <img class="object-contain h-full" src="/img/clemo/Screen3.png">
      </li>
      <li class="${carouselElementClass}">
        <img class="object-contain h-full" src="/img/clemo/Screen5-Calendar.png">
      </li>
      <li class="${carouselElementClass}">
        <img class="object-contain h-full" src="/img/clemo/Screen5-EntryDetails.png">
      </li>
      <li class="${carouselElementClass}">
        <img class="object-contain h-full" src="/img/clemo/Screen6.png">
      </li>
      <li class="${carouselElementClass}">
        <img class="object-contain h-full" src="/img/clemo/Screen6-EntryStarted.png">
      </li>
    </ul>
  `;

  return carousel;
}


function renderSketchHub() {
  const gridElementClass =  "h-auto max-w-32 rounded-lg hover:scale-150 hover:cursor-zoom-in"
  const sketchHubPresentation = `
    <div id="sketch-hub" class="max-w-screen mt-32 pt-10 border-t-2 border-grey-800">
      <div class="max-w-full">
        <h3 class="text-2xl font-bold"> SketchHub </h3>
        <div class="text-lg"> The drawing counter app </div>
      </div>
      <div class="mt-3 text-grey-300 flex flex-col">
        <span> SketchHub is a mobile application made to count your drawings. You can quickly add your drawing and see the count for each month. </span>
        <a href="https://youtube.com/shorts/GgBCFQ8BAC8?feature=share" class="text-grey-300 hover:text-black underline w-fit">See presentation video</a>
      </div>
      <div class="flex justify-between gap-3 mt-20 max-w-full" >
        <div class="min-w-80 max-w-96">
          <ul class="space-y-5 list-none list-inside p-1">
            <li class="flex gap-10 items-center"> 
              <div class="h-10 w-10 rounded-full bg-grey-800 p-2">
                <img class="object-contain h-full" src="/img/icons/code.png">
              </div>
              <div> Developed with Java on AndroidStudio </div>
            </li>
            <li class="flex gap-10 items-center"> 
              <div class="h-10 w-10 rounded-full bg-grey-800 p-2">
                <img class="object-contain h-full" src="/img/icons/server-storage.png">
              </div>
              <div> Room Database - SQLite </div>
            </li>
            <li class="flex gap-10 items-center"> 
              <div class="h-10 w-10 rounded-full bg-grey-800 p-2">
                <img class="object-contain h-full" src="/img/icons/letter-i.png">
              </div>
              <div> Mobile App for Android </div>
            </li>
            <li class="flex gap-10 items-center"> 
              <div class="h-10 w-10 rounded-full bg-grey-800 p-2">
                <img class="object-contain h-full" src="/img/icons/team.png">
              </div>
              <div> Solo Project </div>
            </li>
            <li class="flex gap-10 items-center"> 
              <div class="h-10 w-10 rounded-full bg-grey-800 p-2">
                <img class="object-contain h-full" src="/img/icons/calendar.png">
              </div>
              <div> Made in 2023 </div>
            </li>
            <li>
              <div class="border-2 border-grey-800 rounded-md p-5">
                  <h6 class="font-bold mb-5">My Role</h6>
                  <span>
                    I designed the application from start to finish. It was a two weeks project so I implemented rather simple visuals and concentrated on the technical part.
                  </span>
              </div>
            </li>
          </ul>
        </div>
        <div class="w-1/2 text-right">
          <span class="pr-8 font-bold">Use Case Diagram</span>
          <img class="object-contain" src="/img/sketchHub/UseCase.png">
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <img class="${gridElementClass}" src="/img/sketchHub/main.png">
          </div>
          <div>
            <img class="${gridElementClass}" src="/img/sketchHub/add.png">
          </div>
          <div>
            <img class="${gridElementClass}" src="/img/sketchHub/all.png">
          </div>
          <div>
            <img class="${gridElementClass}" src="/img/sketchHub/stats.png">
          </div>
        </div>
      </div>
      <div class="mt-52">
        <span class="font-bold">Class Diagram</span>
        <img class="object-contain" src="/img/sketchHub/ClassDiag.png">
      </div>
    </div>
  `;

  return sketchHubPresentation;
};

function renderWebApps(){
  const webAppsContainer = document.querySelector('#web-app-content');

  const riez = renderRiez();
  webAppsContainer.innerHTML += riez;

};

function renderRiez() {
  const riezPresentation = `
    <div id="riez" class="max-w-screen mt-32 pt-10 border-t-2 border-grey-800">
      <div class="max-w-full">
        <h3 class="text-2xl font-bold"> Ressource Riez </h3>
        <div class="text-lg"> Recycling website </div>
      </div>
      <div class="mt-3 text-grey-300">
        Ressource Riez is a showcasing website for second hand furniture. On the website, the admin can add any item with a picture, a description, a price and a date of selling. 
        Any customer can then see the catalogue with the furniture and determine if an item is to sell, already sold or in reparation.
      </div>
      <div class="flex justify-between gap-2 mt-5 max-w-full" >
          <div>
            <img class="object-contain h-full" src="/img/ressourceRiez/02_Responsable_Objets.jpg">
          </div>
        <div class="min-w-80 max-w-96">
          <ul class="space-y-5 list-none list-inside p-1">
            <li class="flex gap-10 items-center"> 
              <div class="h-10 w-10 rounded-full bg-grey-800 p-2">
                <img class="object-contain h-full" src="/img/icons/code.png">
              </div>
              <div> Developed with JavaScript using NodeJs and Webpack - 3 Layer Architecture </div>
            </li>
            <li class="flex gap-10 items-center"> 
              <div class="h-10 w-10 rounded-full bg-grey-800 p-2">
                <img class="object-contain h-full" src="/img/icons/server-storage.png">
              </div>
              <div> SQL Relational Database - Java Backend </div>
            </li>
            <li class="flex gap-10 items-center"> 
              <div class="h-10 w-10 rounded-full bg-grey-800 p-2">
                <img class="object-contain h-full" src="/img/icons/letter-i.png">
              </div>
              <div> Website </div>
            </li>
            <li class="flex gap-10 items-center"> 
              <div class="h-10 w-10 rounded-full bg-grey-800 p-2">
                <img class="object-contain h-full" src="/img/icons/team.png">
              </div>
              <div> Developed by a team of 5 people </div>
            </li>
            <li class="flex gap-10 items-center"> 
              <div class="h-10 w-10 rounded-full bg-grey-800 p-2">
                <img class="object-contain h-full" src="/img/icons/calendar.png">
              </div>
              <div> Made in 2022 </div>
            </li>
            <li>
            <div class="border-2 border-grey-800 rounded-md p-5">
                <h6 class="font-bold mb-5">My Role</h6>
                <span>
                  I did a little bit of everything in this project :
                  I created wireframes to illustrate the website to the client.
                  I then coded both for the frontend and the backend. For the frontend, I used tailwind to create smooth interface.
                  For the backend, I programmed functionalities such as addind or updating an item in the database (CRUD).
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-52">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="grid gap-4">
                <div>
                    <img class="h-auto max-w-full rounded-lg hover:scale-150 hover:cursor-zoom-in" src="/img/ressourceRiez/02_Quidam_Accuiel.jpg" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg hover:scale-150 hover:cursor-zoom-in" src="/img/ressourceRiez/02_Aidant_tableauBord.jpg" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg hover:scale-150 hover:cursor-zoom-in" src="/img/ressourceRiez/Aidant_ApresVente.jpg" alt="">
                </div>
            </div>
            <div class="grid gap-4">
                <div>
                    <img class="h-auto max-w-full rounded-lg hover:scale-150 hover:cursor-zoom-in" src="/img/ressourceRiez/Quidam_Inscription.jpg" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg hover:scale-150 hover:cursor-zoom-in" src="/img/ressourceRiez/Responsable_profil.jpg" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg hover:scale-150 hover:cursor-zoom-in" src="/img/ressourceRiez/Utilisateur_Profil.jpg" alt="">
                </div>
            </div>
            <div class="grid gap-4">
                <div>
                    <img class="h-auto max-w-full rounded-lg hover:scale-150 hover:cursor-zoom-in" src="/img/ressourceRiez/Aidant_calendrier.jpg" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg hover:scale-150 hover:cursor-zoom-in" src="/img/ressourceRiez/Aidant_ModObj.jpg" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg hover:scale-150 hover:cursor-zoom-in" src="/img/ressourceRiez/Quidam_Connexion.jpg" alt="">
                </div>
            </div>
            <div class="grid gap-4">
                <div>
                    <img class="h-auto max-w-full rounded-lg hover:scale-150 hover:cursor-zoom-in" src="/img/ressourceRiez/Responsable_inscriptions.jpg" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg hover:scale-150 hover:cursor-zoom-in" src="/img/ressourceRiez/Utilisateur_PropoObj.jpg" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg hover:scale-150 hover:cursor-zoom-in" src="/img/ressourceRiez/Utilisateurs_Notif.jpg" alt="">
                </div>
            </div>
        </div>
      </div>
    </div>
  `;

  return riezPresentation;
};

function renderSideBar() {
  const titleClass = "px-5 pt-5 font-bold border-white border-b-2 hover:bg-grey-300 hover:text-black"
  const subTitleClass = "pr-5 pl-3 py-2 w-full hover:border-white border-transparent border-l ml-5"
  const sideBar = `
    <div class="fixed bg-grey-800 text-white min-w-20 min-h-34 h-1/2 rounded-xl ml-5 border-2 border-white">
      <div class="flex flex-col gap-5 mb-20">
         <a href="#mobile" class="${titleClass} rounded-tl-xl rounded-tr-xl" > Mobile </a>
        <ul class="space-y-5">
          <li> <a href="#clemo" class="${subTitleClass}"> Clemo </a> </li>
          <li> <a href="#sketch-hub" class="${subTitleClass}"> SketchHub </a> </li>
        </ul>
      </div>
      <div class="flex flex-col gap-10 mb-10">
        <a href="#web" class="${titleClass}" > Web </a>
        <ul class="space-y-5">
          <li> <a href="#riez" class="${subTitleClass}"> Riez </a> </li>
        </ul>
      </div>
    </div>
  `

  return sideBar
};

export default AppPage;
