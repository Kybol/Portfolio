import { clearPage } from '../../utils/render';

const ArtPage = () => {
  clearPage();
  renderArtPage();
};

function renderArtPage() {
  const main = document.querySelector('main');
  main.innerHTML += `
    <div class="flex flex-col m-32">
      <h1 class="text-4xl font-bold ml-52"> Art Gallery </h1>
      <div class="ml-52"> You will find here some of my art creation </div>
    </div>
      <div id="gallery" class="mx-80 mb-32" ></div>
    </div>
  `;

  renderArtGallery();
}


function renderArtGallery(){
  const galleryContainer = document.querySelector('#gallery');

  const gallery = renderGallery();
  galleryContainer.innerHTML += gallery;

}

function renderGallery() {
    const gallery = `
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div>
                <img class="h-auto max-w-full rounded-lg" src="/img/art/robot1.png" alt="">
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src="/img/art/robot2.png" alt="">
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src="/img/art/robot3.png" alt="">
            </div>

            <div class="col-span-2">
                <img class="h-auto max-w-full rounded-lg" src="/img/art/ThirdEyeModelSheet.png" alt="">
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src="/img/art/ThirdEye.jpg" alt="">
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src="/img/art/macHanzo.png" alt="">
            </div>
            <div class="col-span-2">
                <img class="h-auto max-w-full rounded-lg" src="/img/art/ow_shi.jpg" alt="">
            </div>

            <div class="col-span-2">
                <img class="h-auto max-w-full rounded-lg" src="/img/art/AnimalMix.png" alt="">
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src="/img/art/robotLandscape_withoutflare.png" alt="">
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src="/img/art/RabbitMotherIllu.png" alt="">
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src="/img/art/RabbitMotherIlluLine.png" alt="">
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src="/img/art/RabbitMotherIlluSketch.png" alt="">
            </div>
            <div class="col-span-3">
                <a href="https://www.youtube.com/watch?v=cadpK2uNZn0" target="_blank" rel="noopener noreferrer"> <img class="h-auto max-w-full rounded-lg" src="/img/art/day_night.jpg" alt=""> </a>
            </div>
            
        </div>
    `

    return gallery;
}



export default ArtPage;
