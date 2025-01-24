// *********************************************
// menu 

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
// gestion des projets


document.addEventListener("DOMContentLoaded", () => {
    fetch('projects.json')

        .then(response => response.json())
        .then(data => {

            const container = document.getElementById('projects-container');
            data.projects.forEach(project => {

                const card = document.createElement('div');
                card.className = 'card class =" flex flex-row flex-wrap my-4 md:flex md:flex-col bg-trois rounded-lg overflow-hidden shadow-lg m-4';

                const techList = project.techno.map(tech => {
                    let colorClass;
                    switch (tech) {
                        case 'HTML5':
                            colorClass = 'font-semibold bg-red-400 ';
                            break;
                        case 'CSS':
                            colorClass = 'font-semibold bg-blue-500';
                            break;
                        case 'TailwindCSS':
                            colorClass = 'font-semibold bg-teal-500';
                            break;
                        case 'JavaScript':
                            colorClass = 'font-semibold bg-yellow-500';
                            break;
                        default:
                            colorClass = 'font-semibold bg-gray-900';
                    }
                    return `<span class="text-white text-xs py-1 px-2 m-4 rounded ${colorClass} mr-2 mb-2">${tech}</span>`;
                }).join('');

                card.innerHTML = `
                <div class="bg-primary rounded-lg overflow-hidden w-auto m-auto shadow-lg divide-x-8">
                    <img src="${project.image}" alt="${project.title}" class="w-auto md:h-40 h-32 m-auto shadow-lg">
                </div>
                <div  class="px-6 py-4">   
                    <h2 class="font-bold text-xl m-2">${project.title}</h2>
                    <p class="text-gray-700 text-base flex flex-wrap m-2">${project.description}</p>
                </div>
                <div class=" flex flex-wrap mb-2 justify-center align-middle">${techList}</div>
                <div class="flex justify-evenly m-2">
                    <a href="${project.demoLink}" target="blank" class="text-gray-500 hover:underline">
                        <img src="./assets/logos/smallLink.svg" alt="Demo Link">
                    </a>
                    <a href="${project.githubLink}" target="blank" class="text-gray-500 hover:underline">
                        <img src="./assets/logos/smallGithub.svg" alt="GitHub Link">
                    </a>
                </div>
            `;


                container.appendChild(card);
            });
        });
});