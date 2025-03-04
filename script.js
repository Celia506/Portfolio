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
                        case 'JSON':
                            colorClass = 'font-semibold bg-green-500';
                            break;
                        case 'API':
                            colorClass = 'font-semibold bg-pink-500';
                            break;
                        case 'PHP':
                            colorClass = 'font-semibold bg-orange-500';
                            break;
                        case 'SQL':
                            colorClass = 'font-semibold bg-gray-500';
                            break;
                        case 'React':
                            colorClass = 'font-semibold bg-orange-100';
                            break;
                        default:
                            colorClass = 'font-semibold bg-gray-800';
                    }
                    return `<span class="text-white text-xs py-1 px-2 m-4 gap-2 rounded ${colorClass} mr-2 mb-2">${tech}</span>`;
                }).join('');

                card.innerHTML = `
                    <div class="bg-primary max-w-sm rounded-lg overflow-hidden shadow-md shadow-400 h-full flex flex-col ">
                        <a href="${project.demoLink}" target="blank"><img class=" w-full shadow-md" src="${project.image}" alt="${project.title}"></a>
                        <div class="font-bold text-xl m-2 text-center">${project.title}</div>
                        <div class="bg-zero px-2 py-2 flex-grow flex-col text-center">
                            <p class="text-gray-700 text-base  px-4">${project.description}</p>
                            <span class=" inline-block  p-3">
                                <a href="${project.demoLink}" target="blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>
                                </a>
                            </span>
                            <span class=" inline-block   text-gray-700 p-3">
                                <a href="${project.githubLink}" target="blank">
                                    <img src="./images/icons8-github.svg" alt="Github Link">
                                </a>
                            </span>
                        </div>
                        <div class="flex flex-wrap mb-2 justify-center align-middle">${techList}
                        </div>
                    </div>
            `;
                container.appendChild(card);
            });
        });
});


// *************************************************
// bouton haut de page 

window.addEventListener('scroll', function () {
    var scrollButton = document.getElementById("scrollButton");

    if (scrollButton) {
        // Si le scroll est moins de 100 pixels : cacher le bouton
        if (document.documentElement.scrollTop > 100) {
            scrollButton.classList.remove("hidden");
        } else {
            scrollButton.classList.add("hidden");
        }
    }
});

//******************************************* */
// gestion formulaire

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche l'envoi immédiat

    let isValid = true;

    // Récupération des champs
    let nameField = document.getElementById("name");
    let emailField = document.getElementById("email");
    let messageField = document.getElementById("message");

    let name = nameField.value.trim();
    let email = emailField.value.trim();
    let message = messageField.value.trim();

    // Supprime uniquement les erreurs des champs modifiés
    clearError(nameField);
    clearError(emailField);
    clearError(messageField);

    // Vérification du nom
    if (name.length < 3) {
        showError(nameField, "Le nom doit contenir au moins 3 caractères.");
        isValid = false;
    }

    // Vérification de l'email
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showError(emailField, "Veuillez entrer une adresse email valide.");
        isValid = false;
    }

    // Si toutes les validations sont OK
    if (isValid) {
        let mailtoLink = `mailto:celia.sansano@gmail.com?subject=Contact%20depuis%20le%20site&body=Nom:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0AMessage:%20${encodeURIComponent(message)}`;
        window.location.href = mailtoLink;
    }
});

// Fonction pour afficher un message d'erreur sous un champ
function showError(inputField, message) {
    let error = document.createElement("p");
    error.classList.add("error-message", "text-red-500", "text-sm", "mt-1");
    error.textContent = message;
    inputField.insertAdjacentElement("afterend", error);
    inputField.focus(); // Mets le focus sur le champ en erreur
}

// Fonction pour supprimer l'erreur d'un champ si l'utilisateur le modifie
function clearError(inputField) {
    let errorMessage = inputField.nextElementSibling;
    if (errorMessage && errorMessage.classList.contains("error-message")) {
        errorMessage.remove();
    }
}