import { clearPage } from '../../utils/render';

const GamePage = () => {
  clearPage();
  renderGamePage();
};

function renderGamePage() {
  const sideBar = renderSideBar();
  const main = document.querySelector('main');
  main.innerHTML += `
    <div class="flex flex-col m-32">
      <h1 class="text-4xl font-bold ml-52"> Games </h1>
      <div class="ml-52"> You will find here all the games I developed </div>
    </div>
    <div class="flex">
    <div id="side-bar-wrapper"> ${sideBar} </div>
      <div>
        <div id="studio-work">
          <div class="w-screen h-20 flex justify-stretch">
            <div class="bg-grey-100 w-8/12"></div>
            <div class="w-2/12 text-end content-end mx-5 text-2xl font-bold text-grey-300"> Studio Work</div>
            <div class="bg-grey-100 w-2/12"></div>
          </div>
          <div id="studio-work-content" class="ml-80 mr-96 mb-52"></div>
        </div>
        <div id="game-jam">
          <div class="w-screen h-20 flex justify-stretch">
            <div class="bg-grey-100 w-8/12"></div>
            <div class="w-2/12 text-end content-end mx-5 text-2xl font-bold text-grey-300"> Game Jam</div>
            <div class="bg-grey-100 w-2/12"></div>
          </div>
          <div id="game-jam-content" class="ml-80 mr-96 mb-52"></div>
        </div>
        <div id="personal-work">
          <div class="w-screen h-20 flex justify-stretch">
            <div class="bg-grey-100 w-8/12"></div>
            <div class="w-2/12 text-end content-end mx-5 text-2xl font-bold text-grey-300"> Personal Work</div>
            <div class="bg-grey-100 w-2/12"></div>
          </div>
          <div id="personal-work-content" class="ml-80 mr-96 mb-52"></div>
        </div>
      </div>
    </div>
  `;

  renderStudioWork();
  renderGameJam();
  renderPersonalWork();

}


function renderStudioWork(){
  const studioWorkContainer = document.querySelector('#studio-work-content');

  const koira = renderKoira();
  studioWorkContainer.innerHTML += koira;

}

function renderKoira() {
  const koiraPresentation = `
    <div id="koira" class="mt-32 pt-10 border-t-2 border-grey-800">
      <div class="w-1/2">
        <h3 class="text-2xl font-bold"> Koira </h3>
        <div class="text-lg"> Musical game developed by <a href="https://studiotolima.com/" class="underline text-grey-300 hover:text-black"> Studio Tolima </a> </div>
      </div>
      <div class="mt-3 text-grey-300">
       <div class="mt-3 text-grey-300 flex flex-col">
        <span> Koira is a wholesome tale of friendship where you and your new puppy traverse a musical forest, solve ancient puzzles, befriend woodland creatures, and try to find your way home.</span>
        <a href="https://store.steampowered.com/app/1626620/Koira/" class="text-grey-300 hover:text-black underline w-fit">See Steam Page</a>
      </div>
        
      </div>
      <div class="flex justify-start justify-between mt-20 max-w-full gap-2" >
        <div class="flex w-5/6 gap-1 min-w-96">
          <div>
            <img class="object-contain h-full" src="/src/img/koira/DONTNOD_KOIRA_keyart_extended.jpg">
          </div>
        </div>
        <div class="max-w-52 min-w-32 p-5 pt-20 bg-grey-100">
          <div>
            <img class="object-contain h-full" src="/src/img/koira/studio-tolima-email-banner_Artboard_6.png">
          </div>
          <div>
            <img class="object-contain h-full" src="/src/img/koira/dontNodLogo.webp">
          </div>
        </div>
      </div>
      <div class="w-full flex justify-between mt-10">
       <div class="min-w-80 max-w-96">
          <ul class="space-y-5 list-none list-inside p-1">
            <li class="flex gap-10 items-center"> 
              <div class="h-10 w-10 rounded-full bg-grey-800 p-2">
                <img class="object-contain h-full" src="/src/img/icons/code.png">
              </div>
              <div> Developed with GDScript in Godot 3.5 </div>
            </li>
            <li class="flex gap-10 items-center"> 
              <div class="h-10 w-10 rounded-full bg-grey-800 p-2">
                <img class="object-contain h-full" src="/src/img/icons/letter-i.png">
              </div>
              <div> Godot 2D Game </div>
            </li>
            <li class="flex gap-10 items-center"> 
              <div class="h-10 w-10 rounded-full bg-grey-800 p-2">
                <img class="object-contain h-full" src="/src/img/icons/team.png">
              </div>
              <div> Developed by a team of 4 developer and 4 artists </div>
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
                  I helped the team on the code for 10 months, by creating new functionalities, mini-games, doing bug tracking and bug fixing.
                  We used Agile strategies to work as a team (Scrum, daily meeting and weekly meeting).
                </span>
              </div>
            </li>
          </ul>
        </div>
          
          <div class="w-6/12 min-w-96 flex flex-col gap-2">
            <div>
              <img class="object-contain h-full" src="/src/img/koira/Screenshot 2023-06-26 at 12.10.26.png">
            </div>
            <div class="flex gap-1">
              <div>
                <img class="object-contain hover:scale-150 hover:cursor-zoom-in max-h-44" src="/src/img/koira/Screenshot 2023-06-27 at 15.36.56.png">
              </div>
              <div>
                <img class="object-contain hover:scale-150 hover:cursor-zoom-in max-h-44" src="/src/img/koira/Screenshot 2023-06-27 at 13.27.45.png">
              </div>
            </div>
          </div>

      </div>
      </div>
    </div>
  `;

  return koiraPresentation;
}

function renderGameJam(){
  const gameJamContainer = document.querySelector('#game-jam-content');

  const summoningDemonning = renderSummoningDemonning();
  gameJamContainer.innerHTML += summoningDemonning;

  const goodBoyWanWan = renderGoodBoyWanWan();
  gameJamContainer.innerHTML += goodBoyWanWan;

}

function renderSummoningDemonning() {
  const summoningDemonningPresentation = `
    <div id="summoning-demonning" class="max-w-screen mt-32 pt-10 border-t-2 border-grey-800">
      <div class="max-w-full">
        <h3 class="text-2xl font-bold"> Summoning the Demonning </h3>
        <div class="text-lg"> Cooking game - Made for the Ludum Dare 55 on the theme "summoning"</div>
      </div>
      <div class="mt-3 text-grey-300 flex flex-col">
        <span> 
        Help Castiel the summoner to summon the demons ! Read the parchments to find the correct recipe for the ritual.
        Cook the ingredients and put them in the demonic portal and see what happend... </span>
        <a href="https://kybol.itch.io/summoning-the-demmoning" class="text-grey-300 hover:text-black underline w-fit">Play it here!</a>
      </div>
      <div class="w-full flex justify-between mt-10">
        <div class="w-6/12 min-w-96 flex flex-col gap-2">
          <div>
            <img class="object-contain h-full" src="/src/img/summoningDemonning/intro.png">
          </div>
          <div class="flex gap-1">
            <div>
              <img class="object-contain max-h-44 hover:scale-150 hover:cursor-zoom-in" src="/src/img/summoningDemonning/screenshot1.png">
            </div>
            <div>
              <img class="object-contain max-h-44 hover:scale-150 hover:cursor-zoom-in" src="/src/img/summoningDemonning/fin.png">
            </div>
          </div>
        </div>

       <div class="min-w-80 max-w-96">
          <ul class="space-y-5 list-none list-inside p-1">
            <li class="flex gap-10 items-center"> 
              <div class="h-10 w-10 rounded-full bg-grey-800 p-2">
                <img class="object-contain h-full" src="/src/img/icons/code.png">
              </div>
              <div> Developed with GDScript in Godot 3.5 </div>
            </li>
            <li class="flex gap-10 items-center"> 
              <div class="h-10 w-10 rounded-full bg-grey-800 p-2">
                <img class="object-contain h-full" src="/src/img/icons/letter-i.png">
              </div>
              <div> Godot 2D Game </div>
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
                  I coded all the game functionalities excepted the menu's and score. The game was made in 3 days.
                </span>
              </div>
            </li>
          </ul>
        </div>
  
      </div>
    </div>
  `;

  return summoningDemonningPresentation;
};


function renderGoodBoyWanWan() {
  const goodBoyWanWan = `
    <div id="good-boy-wanwan" class="max-w-screen mt-32 pt-10 border-t-2 border-grey-800">
      <div class="max-w-full">
        <h3 class="text-2xl font-bold"> Good Boy WanWan </h3>
        <div class="text-lg"> Walking game - Made for the Ludum Dare 46 on the theme "keep it alive"</div>
      </div>
      <div class="mt-3 text-grey-300 flex flex-col">
        <span> 
        Wanwan seems to be a very good dog. He takes well care of Blind Granny ! At least she thinks that he does... 
        Lead this poor old and blind lady in the modern city close to her house so she can take care of a few errands...  
        But, be careful, walking in a city can be dangerous !
        </span>
        <a href="https://agrou-studio.itch.io/good-boy-wanwan" class="text-grey-300 hover:text-black underline w-fit">Play it here!</a>
      </div>
      <div class="w-full flex justify-between mt-10 gap-10">

       <div class="min-w-80 max-w-96">
          <ul class="space-y-5 list-none list-inside p-1">
            <li class="flex gap-10 items-center"> 
              <div class="h-10 w-10 rounded-full bg-grey-800 p-2">
                <img class="object-contain h-full" src="/src/img/icons/code.png">
              </div>
              <div> Developed with C# in Unity </div>
            </li>
            <li class="flex gap-10 items-center"> 
              <div class="h-10 w-10 rounded-full bg-grey-800 p-2">
                <img class="object-contain h-full" src="/src/img/icons/letter-i.png">
              </div>
              <div> Unity 3D Game </div>
            </li>
            <li class="flex gap-10 items-center"> 
              <div class="h-10 w-10 rounded-full bg-grey-800 p-2">
                <img class="object-contain h-full" src="/src/img/icons/team.png">
              </div>
              <div> Developed by a team of 4 people </div>
            </li>
            <li class="flex gap-10 items-center"> 
              <div class="h-10 w-10 rounded-full bg-grey-800 p-2">
                <img class="object-contain h-full" src="/src/img/icons/calendar.png">
              </div>
              <div> Made in 2019 </div>
            </li>
            <li>
            <div class="border-2 border-grey-800 rounded-md p-5">
                <h6 class="font-bold mb-5">My Role</h6>
                <span>
                  I worked on the artistic side of the project.
                  I create all the concept art for the characters, made the 3D models and created illustrations for the game's cinematics.
                </span>
              </div>
            </li>
          </ul>
        </div>

        <div class="w-3/4 min-w-96">
          <img class="object-contain h-full" src="/src/img/goodBoyWanWan/cover.png">
        </div>

      </div>
      <div class="flex gap-1 mt-10 justify-between">
            <div>
              <img class="object-contain max-h-44 hover:scale-150 hover:cursor-zoom-in" src="/src/img/goodBoyWanWan/ConceptDoggo.png">
            </div>
            <div>
              <img class="object-contain max-h-44 hover:scale-150 hover:cursor-zoom-in" src="/src/img/goodBoyWanWan/Illustration1.png">
            </div>
            <div>
              <img class="object-contain max-h-44 hover:scale-150 hover:cursor-zoom-in" src="/src/img/goodBoyWanWan/ConceptMamie.png">
            </div>
            <div>
              <img class="object-contain max-h-44 hover:scale-150 hover:cursor-zoom-in" src="/src/img/goodBoyWanWan/Illustration5.png">
            </div>
      </div>
    </div>
  `;

  return goodBoyWanWan;
};


function renderPersonalWork(){
  const personalWorkContainer = document.querySelector('#personal-work-content');

  const rainbowGame = renderRainbowGame();
  personalWorkContainer.innerHTML += rainbowGame;

}

function renderRainbowGame() {
    const rainbowGame = `
        <div id="rainbow" class="max-w-screen mt-32 pt-10 border-t-2 border-grey-800">
          <div class="max-w-full">
            <h3 class="text-2xl font-bold"> The Rainbow Game </h3>
            <div class="text-lg"> Runner-coloring game </div>
          </div>
          <div class="mt-3 text-grey-300 flex flex-col">
            <span> 
            The rainbow game is a game where you have to collect colored balled in order to paint the background.
            </span>
            <a href="https://youtu.be/27rQlS_k0DQ" class="text-grey-300 hover:text-black underline w-fit">See presentation video</a>
          </div>
          <div class="w-full flex justify-between mt-10 gap-10">
            <div class="w-3/4 min-w-96">
              <img class="object-contain h-full" src="/src/img/rainbowGame/RainbowFiller.jpg">
            </div>

          <div class="min-w-80 max-w-96">
              <ul class="space-y-5 list-none list-inside p-1">
                <li class="flex gap-10 items-center"> 
                  <div class="h-10 w-10 rounded-full bg-grey-800 p-2">
                    <img class="object-contain h-full" src="/src/img/icons/code.png">
                  </div>
                  <div> Developed with C# in Unity </div>
                </li>
                <li class="flex gap-10 items-center"> 
                  <div class="h-10 w-10 rounded-full bg-grey-800 p-2">
                    <img class="object-contain h-full" src="/src/img/icons/letter-i.png">
                  </div>
                  <div> Unity 3D Game </div>
                </li>
                <li class="flex gap-10 items-center"> 
                  <div class="h-10 w-10 rounded-full bg-grey-800 p-2">
                    <img class="object-contain h-full" src="/src/img/icons/team.png">
                  </div>
                  <div> Solo project </div>
                </li>
                <li class="flex gap-10 items-center"> 
                  <div class="h-10 w-10 rounded-full bg-grey-800 p-2">
                    <img class="object-contain h-full" src="/src/img/icons/calendar.png">
                  </div>
                  <div> Made in 2020 </div>
                </li>
                <li>
                <div class="border-2 border-grey-800 rounded-md p-5">
                    <h6 class="font-bold mb-5">My Role</h6>
                    <span>
                      I developed the whole project myself. I first created a very short one page game pitch. I then made a quick 3D model for the triangle and coded the functionalities. 
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      `;

  return rainbowGame;
}

function renderSideBar() {
  const titleClass = "px-5 pt-5 font-bold border-white border-b-2 hover:bg-grey-300 hover:text-black"
  const subTitleClass = "pr-5 pl-3 py-2 w-full hover:border-white border-transparent border-l ml-5"
  const sideBar = `
    <div class="fixed bg-grey-800 text-white min-w-20 min-h-34 h-1/2 rounded-xl ml-5 border-2 border-white">
      <div class="flex flex-col gap-5 mb-5">
         <a href="#studio-work" class="${titleClass} rounded-tl-xl rounded-tr-xl" > Studio </a>
        <ul class="space-y-5">
          <li> <a href="#koira" class="${subTitleClass}"> Koira </a> </li>
        </ul>
      </div>
      <div class="flex flex-col gap-5 mb-5">
         <a href="#game-jam" class="${titleClass}" > Jam </a>
        <ul class="space-y-5">
          <li> <a href="#summoning-demonning" class="${subTitleClass}"> Summoning </a> </li>
          <li> <a href="#good-boy-wanwan" class="${subTitleClass}"> GoodBoy WanWan </a> </li>
        </ul>
      </div>
      <div class="flex flex-col gap-10 mb-5">
        <a href="#personal-work" class="${titleClass}" > Personal </a>
        <ul class="space-y-5">
          <li> <a href="#rainbow" class="${subTitleClass}"> Rainbow </a> </li>
        </ul>
      </div>
    </div>
  `

  return sideBar
};

export default GamePage;
