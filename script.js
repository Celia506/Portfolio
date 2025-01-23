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
// *****************************************************

// document.addEventListener("DOMContentLoaded", () => {
//     fetch('projects.json')
//         .then(response => response.json())
//         .then(data => {
//             const container = document.getElementById('projects-container');
//             data.projects.forEach(project => {
//                 const card = document.createElement('div');
//                 card.className = 'card p-6 bg-white/5 backdrop-filter backdrop-blur-lg border border-sky-900 rounded-lg shadow-lg m-4 w-5/12 hover:shadow-lg transition-shadow duration-200';

//                 const techList = project.techno.map(tech => {
//                     let colorClass;
//                     switch(tech) {
//                         case 'HTML5':
//                             colorClass = 'font-semibold bg-red-400';
//                             break;
//                         case 'CSS':
//                             colorClass = 'font-semibold bg-sky-500';
//                             break;
//                         case 'TailwindCSS':
//                             colorClass = 'font-semibold bg-teal-500';
//                             break;
//                         case 'JavaScript':
//                             colorClass = 'font-semibold bg-yellow-500';
//                             break;
//                         default:
//                             colorClass = 'font-semibold bg-gray-900';
//                     }
//                     return `<span class="text-white text-xs py-1 px-2 rounded ${colorClass} mr-2 mb-2">${tech}</span>`;
//                 }).join('');

//                 card.innerHTML = `
//                 <div class="w-full h-48 mb-4 flex items-center justify-center overflow-hidden">
//                     <img src="${project.image}" alt="${project.title}" class="w-full h-full rounded-lg">
//                 </div>
//                 <h2 class="text-2xl font-bold text-sky-500 mb-2">${project.title}</h2>
//                 <p class="text-gray-500 text-sm mb-4 hover:font-medium transition-all duration-200">${project.description}</p>
//                 <div class="flex flex-wrap mb-4">${techList}</div>
//                 <div class="flex justify-around mb-2">
//                     <a href="${project.demoLink}" class="text-gray-500 hover:underline">
//                         <img src="./assets/logos/smallLink.svg" alt="Demo Link">
//                     </a>
//                     <a href="${project.githubLink}" class="text-gray-500 hover:underline">
//                         <img src="./assets/logos/smallGithub.svg" alt="GitHub Link">
//                     </a>
//                 </div>
//             `;
            

//                 container.appendChild(card);
//             });
//         });
// });