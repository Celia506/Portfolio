// menu ************************************************************

const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuButton = document.getElementById('close-menu-button');
const mobileMenuContent = document.getElementById('mobile-menu-content');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
    mobileMenu.querySelector('div').classList.remove('-translate-x-full');
});

closeMenuButton.addEventListener('click', () => {
    mobileMenu.querySelector('div').classList.add('-translate-x-full');
    setTimeout(() => mobileMenu.classList.add('hidden'), 300);
});


document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
        closeMenuButton.click();
    }
});

mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu || e.target === mobileMenuContent) {
        closeMenuButton.click();
    }
});

// *****************************************************************

// async function loadProjects() {
//     try {
//         const response = await fetch('./index.json');
//         const projects = await response.json();
//         const container = document.getElementById('projects-container');


//         projects.forEach(projet => {
//             const card =
//                 `<div>
//                     <ul class="flex flex-col my-2 md:flex md:flex-row">
//                         <li class=" md:w-1/3">
//                             <div class=" bg-orange-50 rounded-lg overflow-hidden shadow-lg m-4">
//                                 <div>
//                                     <div>
//                                         <a href="${projects.demoLink}" target="blank">
//                                             <img class="w-full h-40" src="${projects.image}"
//                                                 alt="projet pasta la vista" />
//                                         </a>
//                                     </div>
//                                 </div>
//                                 <div class="px-6 py-4">
//                                     <h3 class="font-bold text-xl mb-2">${projects.title}</h3>
//                                     <p class="text-gray-700 text-base">
//                                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
//                                         Maiores et perferendis eaque, exercitationem praesentium nihil.
//                                     </p>
//                                 </div>
//                             </div>
//                         </li>
//                     </ul>
//                 </div>
//                 `;
//             container.innerHTML += card;
//         });
//     } catch (error) {
//         console.error(error);
//     }
// }

// document.addEventListener('DOMContentLoaded', loadProjects);

// *****************************************************************