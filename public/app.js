// Afficher la vidéo uploadée
document.getElementById("video-upload").addEventListener("change", function (event) {
    const file = event.target.files[0];
    const video = document.getElementById("video-preview");

    if (file) {
        const videoURL = URL.createObjectURL(file);
        video.src = videoURL;
        video.play();
    }
});

// Utiliser la caméra
document.getElementById("start-camera").addEventListener("click", function () {
    const video = document.getElementById("video-preview");

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
                video.srcObject = stream;
                video.play();
            })
            .catch(function (err) {
                alert("Erreur lors de l'accès à la caméra : " + err.message);
            });
    } else {
        alert("Votre navigateur ne supporte pas l'accès à la caméra.");
    }
});
document.getElementById('search-input').addEventListener('input', function () {
    const searchValue = this.value.toLowerCase();
    const elementsToSearch = document.querySelectorAll('main, .intro, .translation-area');

    let found = false;

    elementsToSearch.forEach(element => {
        if (element.textContent.toLowerCase().includes(searchValue) && searchValue !== "") {
            element.style.border = "2px dashed orange";
            found = true;
        } else {
            element.style.border = "none";
        }
    });

    if (!found && searchValue !== "") {
        console.log("No match found for:", searchValue);
    }
});
function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// search bar
const searchInput = document.getElementById("search-input");
const sections = document.querySelectorAll("main, #about-us");

// On stocke l'HTML original de chaque section pour pouvoir y revenir
sections.forEach(sec => {
    sec.dataset.original = sec.innerHTML;
});

searchInput.addEventListener("input", function () {
    const query = this.value.trim();
    const regex = new RegExp(`(${escapeRegex(query)})`, "gi");

    sections.forEach(sec => {
        // Restaure d'abord la version non modifiée
        sec.innerHTML = sec.dataset.original;

        if (query !== "") {
            // Remplace chaque occurrence du mot par un <span class="highlight">
            sec.innerHTML = sec.innerHTML.replace(regex, '<span class="highlight">$1</span>');
        }
    });
});