/* =========================================================
   ASMIT RAJ PORTFOLIO
   JAVASCRIPT
========================================================= */


/* =========================================================
   1. TYPING ANIMATION
========================================================= */

const typingText =
    document.getElementById("typingText");


const typingWords = [

    "Market Research",
    "Data Analysis",
    "Web Development",
    "IoT & Automation",
    "Business Operations",
    "Leadership"

];


let wordIndex = 0;

let characterIndex = 0;

let deleting = false;


function typeWriter() {

    const currentWord =
        typingWords[wordIndex];


    if (!deleting) {

        characterIndex++;

        typingText.textContent =
            currentWord.substring(
                0,
                characterIndex
            );

    }

    else {

        characterIndex--;

        typingText.textContent =
            currentWord.substring(
                0,
                characterIndex
            );

    }


    let speed =
        deleting ? 45 : 80;


    if (
        !deleting &&
        characterIndex === currentWord.length
    ) {

        speed = 1300;

        deleting = true;

    }


    if (
        deleting &&
        characterIndex === 0
    ) {

        deleting = false;

        wordIndex =
            (wordIndex + 1)
            % typingWords.length;

        speed = 300;

    }


    setTimeout(
        typeWriter,
        speed
    );

}


typeWriter();



/* =========================================================
   2. MOBILE NAVIGATION
========================================================= */

const mobileMenu =
    document.getElementById(
        "mobileMenu"
    );


const navMenu =
    document.getElementById(
        "navMenu"
    );


mobileMenu.addEventListener(
    "click",
    function() {

        navMenu.classList.toggle(
            "open"
        );


        const icon =
            mobileMenu.querySelector(
                "i"
            );


        if (
            navMenu.classList.contains(
                "open"
            )
        ) {

            icon.className =
                "fa-solid fa-xmark";

        }

        else {

            icon.className =
                "fa-solid fa-bars";

        }

    }
);



/* =========================================================
   3. CLOSE MOBILE MENU AFTER CLICK
========================================================= */

document
    .querySelectorAll(".nav-menu a")
    .forEach(
        function(link) {

            link.addEventListener(
                "click",
                function() {

                    navMenu.classList.remove(
                        "open"
                    );


                    mobileMenu
                        .querySelector("i")
                        .className =
                        "fa-solid fa-bars";

                }
            );

        }
    );



/* =========================================================
   4. ACTIVE NAVIGATION
========================================================= */

const pageSections =
    document.querySelectorAll(
        "section[id]"
    );


const navigationLinks =
    document.querySelectorAll(
        ".nav-menu a"
    );


function updateNavigation() {

    let currentSection =
        "home";


    pageSections.forEach(
        function(section) {

            const sectionTop =
                section.offsetTop - 160;


            if (
                window.scrollY >=
                sectionTop
            ) {

                currentSection =
                    section.id;

            }

        }
    );


    navigationLinks.forEach(
        function(link) {

            link.classList.remove(
                "active"
            );


            if (
                link.getAttribute("href") ===
                "#" + currentSection
            ) {

                link.classList.add(
                    "active"
                );

            }

        }
    );

}


window.addEventListener(
    "scroll",
    updateNavigation
);


updateNavigation();



/* =========================================================
   5. SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


const revealObserver =
    new IntersectionObserver(
        function(entries) {

            entries.forEach(
                function(entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add("visible");


                        revealObserver
                            .unobserve(
                                entry.target
                            );

                    }

                }
            );

        },
        {
            threshold: 0.10
        }
    );


revealElements.forEach(
    function(element) {

        revealObserver.observe(
            element
        );

    }
);



/* =========================================================
   6. PROJECT DATA
========================================================= */

const projects = {

    hospital: {

        title:
            "Hospital Management System",

        description:
            "BCA final-semester project focused on designing a hospital management workflow. The system can cover patient records, doctors, appointments, staff, departments, billing and administrative operations."

    },


    student: {

        title:
            "ProjectStudent",

        description:
            "A student-focused platform concept designed to provide notes, latest job updates, admit-card information and other academic resources in one place."

    },


    realex: {

        title:
            "Realex",

        description:
            "A real-estate website concept with database planning and a blue/light-pink visual direction. The project focuses on presenting properties and organizing real-estate information."

    },


    school: {

        title:
            "School Portal",

        description:
            "A school management portal concept covering student details, attendance, staff information, examination questions, results and separate student and teacher access."

    },


    canteen: {

        title:
            "Canteen @ Campus",

        description:
            "A campus canteen project focused on developing a practical digital/student-service experience for a college environment."

    }

};



/* =========================================================
   7. PROJECT MODAL
========================================================= */

const projectModal =
    document.getElementById(
        "projectModal"
    );


const projectTitle =
    document.getElementById(
        "projectTitle"
    );


const projectDescription =
    document.getElementById(
        "projectDescription"
    );


const projectClose =
    document.getElementById(
        "projectClose"
    );


document
    .querySelectorAll(".details-button")
    .forEach(
        function(button) {

            button.addEventListener(
                "click",
                function() {

                    const project =
                        projects[
                            button.dataset.project
                        ];


                    if (!project) {

                        return;

                    }


                    projectTitle.textContent =
                        project.title;


                    projectDescription.textContent =
                        project.description;


                    projectModal.classList.add(
                        "open"
                    );


                    document.body.classList.add(
                        "modal-open"
                    );

                }
            );

        }
    );



/* =========================================================
   8. CLOSE PROJECT MODAL
========================================================= */

function closeProjectModal() {

    projectModal.classList.remove(
        "open"
    );


    document.body.classList.remove(
        "modal-open"
    );

}


projectClose.addEventListener(
    "click",
    closeProjectModal
);


projectModal.addEventListener(
    "click",
    function(event) {

        if (
            event.target ===
            projectModal
        ) {

            closeProjectModal();

        }

    }
);



/* =========================================================
   9. CERTIFICATE MODAL
========================================================= */

const certificateModal =
    document.getElementById(
        "certificateModal"
    );


const certificateImage =
    document.getElementById(
        "certificateImage"
    );


const certificateTitle =
    document.getElementById(
        "certificateTitle"
    );


const certificateMissing =
    document.getElementById(
        "certificateMissing"
    );


const certificateClose =
    document.getElementById(
        "certificateClose"
    );



/* =========================================================
   10. OPEN CERTIFICATE
========================================================= */

document
    .querySelectorAll(".certificate-card")
    .forEach(
        function(card) {

            card.addEventListener(
                "click",
                function() {

                    const imagePath =
                        card.dataset.certificate;


                    const title =
                        card.dataset.title;


                    certificateTitle.textContent =
                        title;


                    certificateImage.style.display =
                        "block";


                    certificateMissing.style.display =
                        "none";


                    certificateImage.src =
                        imagePath;


                    certificateModal.classList.add(
                        "open"
                    );


                    document.body.classList.add(
                        "modal-open"
                    );

                }
            );

        }
    );



/* =========================================================
   11. CERTIFICATE LOAD ERROR
========================================================= */

certificateImage.addEventListener(
    "error",
    function() {

        certificateImage.style.display =
            "none";


        certificateMissing.style.display =
            "block";

    }
);



/* =========================================================
   12. CERTIFICATE LOADED
========================================================= */

certificateImage.addEventListener(
    "load",
    function() {

        certificateImage.style.display =
            "block";


        certificateMissing.style.display =
            "none";

    }
);



/* =========================================================
   13. CLOSE CERTIFICATE
========================================================= */

function closeCertificateModal() {

    certificateModal.classList.remove(
        "open"
    );


    certificateImage.src =
        "";


    document.body.classList.remove(
        "modal-open"
    );

}


certificateClose.addEventListener(
    "click",
    closeCertificateModal
);


certificateModal.addEventListener(
    "click",
    function(event) {

        if (
            event.target ===
            certificateModal
        ) {

            closeCertificateModal();

        }

    }
);



/* =========================================================
   14. ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key ===
            "Escape"
        ) {

            closeProjectModal();

            closeCertificateModal();

        }

    }
);