// ================================================
// DONNÉES - Liste de tous les cours
// ================================================
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: ['Python', 'Git/Github'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: ['HTML', 'CSS', 'Git/Github'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: ['Python', 'Git/Github'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: ['C#'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: ['HTML', 'CSS', 'JavaScript', 'Git/Github'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: ['HTML', 'CSS', 'JavaScript', 'Git/Github'],
        completed: true
    },
    {
        subject: 'ITM',
        number: 111,
        title: 'Introduction to Database',
        credits: 3,
        certificate: 'Web Development',
        description: 'This course covers the basic elements of database management systems. It introduces students to the concepts of logical and physical relationships in a data model and the concepts of inner and outer joins. Students will use a computer aided software engineering (CASE) tool to design, create, and query a database.',
        technology: ['Mysql', 'MySQL Workbench'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 340,
        title: 'Web Backend Development',
        credits: 3,
        certificate: 'Web Development',
        description: 'This programming course focuses on constructing dynamic web sites using server-side languages, making use of databases and design patterns.',
        technology: ['Node.js', 'Express', 'Pnpm', 'EJS Template', 'Express EJS Layouts', 'PostgreSQL', 'Git/Github'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 330,
        title: 'Frontend Web Development II',
        credits: 3,
        certificate: 'Web Development',
        description: "This course dives deeper into building dynamic web applications using the power of pure JavaScript, HTML, CSS, and Node.js – no frameworks required! You'll gain a stronger foundation in web frontend development and learn how to create interactive user interfaces, handle data, consume APIs, manage a collaborative project, and build complete web applications from scratch in a team environment.",
        technology: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Git/Github'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 341,
        title: 'Web Services',
        credits: 3,
        certificate: 'Web Development',
        description: 'This course focuses on the backend development of dynamic, service-oriented web applications. Students will learn how to design and implement web services, how to interact with data storage, and how to use these tools to build functioning web applications.',
        technology: ['Rest Api', 'MongoDB', 'Git/Github'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 430,
        title: 'Web Full-Stack Development',
        credits: 3,
        certificate: 'Web Development',
        description: "This course will teach you how to design and build interactive web based applications using HTML, CSS, JavaScript, and a web development stack.",
        technology: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'ReactJs', 'Next.js', 'Tailwind Css', 'Git/Github', 'GitHub Project Boards'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 212,
        title: 'Programming w/Data Struct',
        credits: 2,
        certificate: 'Software Development',
        description: "This course will introduce students to the common programming data structures with an emphasis on how to use them to solve practical, real-world problems.",
        technology: ['C#', '.Net'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 270,
        title: 'Software Testing',
        credits: 3,
        certificate: 'Software Development',
        description: "Software Testing is a systematic process of verifying requirements and design elements, features, or standards against the implementation to increase product success. The verification process uses a set of test paths starting from the minor units up to the entire deliverable system using predetermined or live data to build confidence that the product works right (as specified). CSE 270 will explore testing standards, techniques, tools, and cases.",
        technology: ['Python', 'Squash', 'Selenium IDE', 'Github Actions'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 300,
        title: 'Professional Readiness',
        credits: 1,
        certificate: 'Software Development',
        description: "This course will help prepare students to be professionals in their major by completing activities that will provide professional connections, confidence, and employability.",
        technology: [],
        completed: true
    },
    {
        subject: 'CSE',
        number: 310,
        title: 'Applied Programming',
        credits: 3,
        certificate: 'Software Development',
        description: "This course will teach students to work in teams on large projects using new technology on self-defined projects. The class will simulate real-word programming projects with the aim of producing workable solutions that have potential impact.",
        technology: ['Firebase', 'FastApi', 'React/NextJs'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 325,
        title: '.NET Software Development',
        credits: 2,
        certificate: 'Software Development',
        description: "This course leverages a student's fundamental software development and core web technology background with the Microsoft .NET framework with C# using the Visual Studio Integrated Development Environment. Students will build upon a C# foundation using the ASP.NET framework to design and develop scalable, standards-based web sites, applications, and services using contemporary methodologies and established design patterns. Team work and programming deliverables will be required.",
        technology: ['C#', 'Azure', 'ASP.NET'],
        completed: false
    },
    {
        subject: 'CSE',
        number: 370,
        title: 'Software Eng. Principles',
        credits: 3,
        certificate: 'Software Development',
        description: "Students learn to analyze and make decisions in software projects through all phases of the software development lifecycle, including requirements elicitation, design, testing, verification, and maintenance.",
        technology: ['Agile', 'Scrum', 'Kanban'],
        completed: true
    }
];


const certificateList = document.querySelector('#certificateList');
const dialogBox = document.querySelector('#dialogBox');

// ================================================
// FONCTIONS UTILITAIRES
// ================================================

/**
 * Filtre les cours par sujet
 * @param {Array} courses - Liste de tous les cours
 * @param {string} subject - Le sujet à filtrer (ou "ALL")
 * @returns {Array} - Les cours filtrés
 */
function filterCoursesBySubject(courses, subject) {
    if (subject === "ALL") {
        return courses;
    }
    return courses.filter(course => course.subject === subject);
}

/**
 * Calcule le total des crédits
 * @param {Array} courses - Liste des cours
 * @returns {number} - Total des crédits
 */
function calculateTotalCredits(courses) {
    return courses.reduce((total, course) => total + course.credits, 0);
}

/**
 * Groupe les cours par certificat
 * @param {Array} courses - Liste de tous les cours
 * @returns {Object} - Cours groupés par nom de certificat
 */
function groupCoursesByCertificate(courses) {
    return courses.reduce((acc, course) => {
        if (!acc[course.certificate]) {
            acc[course.certificate] = [];
        }
        acc[course.certificate].push(course);
        return acc;
    }, {});
}

/**
 * Crée la liste HTML des technologies
 * @param {Array} technologies - Liste des technologies
 * @returns {string} - HTML de la liste
 */
function buildCourseTechnologyList(technologies) {
    if (!technologies || technologies.length === 0) {
        return '<li>Aucune technologie spécifiée</li>';
    }
    return technologies.map(tech => `<li>${tech}</li>`).join("");
}

// ================================================
// CONSTRUCTION DES CARTES DE COURS
// ================================================

/**
 * Crée une carte de cours (un bouton cliquable)
 * @param {Object} course - Les données du cours
 * @returns {HTMLElement} - L'élément DOM de la carte
 */
function buildCourseCard(course) {
    const container = document.createElement('div');
    container.classList.add('course');

    const button = document.createElement('button');
    button.classList.add('btn', 'btn-course');
    button.classList.add(course.completed ? 'complete' : 'not-complete');
    button.textContent = `${course.subject} ${course.number}`;
    
    // Quand on clique, on affiche la description
    button.addEventListener('click', () => showDescription(course));

    container.appendChild(button);
    return container;
}

/**
 * Affiche la description d'un cours dans le dialog
 * @param {Object} course - Les données du cours
 */
function showDescription(course) {
    dialogBox.innerHTML = `
        <div class="dialog-header">
            <h2 id="dialog-title">${course.subject} ${course.number}</h2>
            <button aria-label="Fermer">X</button>
        </div>
        <div class="dialog-body">
            <h3>${course.title}</h3>
            <p class="credit">Crédits: <span>${course.credits}</span></p>
            <p class="desc">${course.description}</p>
            ${course.technology.length > 0 ? `
                <div class="tech">
                    <h4>Technologies :</h4>
                    <ul>${buildCourseTechnologyList(course.technology)}</ul>
                </div>
            ` : ''}
        </div>
    `;
    
    dialogBox.showModal();
    
    // Fermeture avec le bouton X
    const closeBtn = dialogBox.querySelector('.dialog-header button');
    closeBtn.addEventListener('click', () => dialogBox.close());
}

/**
 * Crée la liste des boutons de filtrage par sujet
 * @param {Array} subjects - Liste des sujets uniques
 * @returns {HTMLElement} - Le conteneur des boutons
 */
function buildSubjectButtonList(subjects) {
    const container = document.createElement('div');
    container.classList.add('subject-nav');

    // Bouton "ALL"
    const allButton = document.createElement('button');
    allButton.type = 'button';
    allButton.classList.add('btn', 'btn-subject', 'active');
    allButton.dataset.subject = 'ALL';
    allButton.textContent = 'ALL';
    container.appendChild(allButton);

    // Un bouton pour chaque sujet
    subjects.forEach(subject => {
        const button = document.createElement('button');
        button.type = 'button';
        button.classList.add('btn', 'btn-subject');
        button.dataset.subject = subject;
        button.textContent = subject;
        container.appendChild(button);
    });

    return container;
}

/**
 * Crée le corps de la carte (navigation + liste de cours)
 * @param {Array} courses - Les cours du certificat
 * @returns {HTMLElement} - Le corps de la carte
 */
function buildCardBody(courses) {
    const container = document.createElement('div');
    container.classList.add('card-body');

    // Extraire les sujets uniques
    const uniqueSubjects = [...new Set(courses.map(course => course.subject))];

    // Navigation par sujet
    const subjectButtonList = buildSubjectButtonList(uniqueSubjects);

    // Conteneur de la liste des cours
    const subjectCourseList = document.createElement('div');
    subjectCourseList.classList.add('subject-courses');

    // Affichage initial : tous les cours
    filterCoursesBySubject(courses, "ALL").forEach(course => {
        subjectCourseList.appendChild(buildCourseCard(course));
    });

    // Filtrage au clic sur un bouton de sujet
    subjectButtonList.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-subject')) {
            const subject = e.target.dataset.subject;
            
            // Mise à jour visuelle du bouton actif
            subjectButtonList.querySelectorAll('.btn-subject').forEach(btn => {
                btn.classList.remove('active');
            });
            e.target.classList.add('active');
            
            // Afficher les cours filtrés
            subjectCourseList.innerHTML = "";
            filterCoursesBySubject(courses, subject).forEach(course => {
                subjectCourseList.appendChild(buildCourseCard(course));
            });
        }
    });

    container.appendChild(subjectButtonList);
    container.appendChild(subjectCourseList);

    return container;
}

/**
 * Crée l'en-tête de la carte de certificat
 * @param {string} certificateTitle - Nom du certificat
 * @param {number} totalCredit - Total des crédits
 * @returns {HTMLElement} - L'en-tête
 */
function buildCardHeader(certificateTitle, totalCredit) {
    const cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');

    cardHeader.innerHTML = `
        <div>
            <h2>Certificat ${certificateTitle}</h2>
            <p class="totalCredit">Total Crédits: ${totalCredit}</p>
        </div>
    `;

    return cardHeader;
}

// ================================================
// CONSTRUCTION FINALE ET AFFICHAGE
// ================================================

/**
 * Construit toutes les cartes de certificats et les affiche
 */
function buildCardCertificateList() {
    // Grouper les cours par certificat
    const coursesByCertificate = groupCoursesByCertificate(courses);

    // Pour chaque certificat, créer une carte
    for (const certificate in coursesByCertificate) {
        const coursesForCertificate = coursesByCertificate[certificate];

        // Créer la carte
        const card = document.createElement('section');
        card.classList.add('card');

        // Calculer le total des crédits
        const totalCredit = calculateTotalCredits(coursesForCertificate);

        // Créer header et body
        const cardHeader = buildCardHeader(certificate, totalCredit);
        const cardBody = buildCardBody(coursesForCertificate);

        // Assembler
        card.appendChild(cardHeader);
        card.appendChild(cardBody);

        // Ajouter à la liste
        certificateList.appendChild(card);
    }
}

// ================================================
// GESTION DE LA DIALOG
// ================================================

// Fermer la dialog en cliquant en dehors
window.addEventListener('click', (event) => {
    if (event.target === dialogBox) {
        dialogBox.close();
    }
});

// ================================================
// LANCEMENT - On construit tout au chargement
// ================================================
buildCardCertificateList();