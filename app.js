const experienceDetails = [
    {
        "timeline": "Jan 2021 - present",
        "jobRole": "Member Technical Staff ",
        "companyName": "- Zoho Corporation",
        "workDetails": "Build and maintain components used across the frontends of multiple products. By collaborating closely with cross-functional teams, including developers, designers, and product managers, I ensure the seamless implementation of user interfaces while advocating for best practices in web development. My work emphasizes optimizing performance and promoting code reusability to deliver high-quality, inclusive user experiences.",
        "techUsed": ["JavaScript", "React.js", "Tailwind CSS", "Chart.js", "Canvas", "HTML5", "CSS3", "LESS"]
    },
    {
        "timeline": "Nov 2020 - Dec 2021",
        "jobRole": "Software Engineer - Intern ",
        "companyName": "- iamneo",
        "workDetails": "Build and deliver features for Enterprise and University Assessment Solutions platforms. Collaborating with senior developers, I contribute to designing and architecting functionality. My primary responsibilities include creating APIs, integrating them with the client, and styling the client interface to ensure a seamless user experience.",
        "techUsed": ["React.js", "JavaScript", "Express.js", "Sequelize ORM", "SQL", "Node.js", "CSS", "Sass/Less", "HTML"]
    }
];

const projectDetails = [
    {
        "projectTitle": "Expense Tracker",
        "projectImgUrl": "https://uizard.io/static/287441b8aef46af88356501c9c8ca90e/a8e47/c2e8d88f5ac1291dd9109d5a4f76a1ac54d7fae7-1440x835.png",
        "projectDescription": "Lorem ipsum odor amet, consectetuer adipiscing elit. Nisl montes sapien leo placerat placerat enim parturient vehicula vivamus. Lobortis sollicitudin leo luctus magnis quam montes nunc blandit tincidunt. Sapien eu mus sapien magnis",
        "techUsed": ["Vue", "ChartJs", "Canvas", "HTML5", "CSS3", "LESS", "JSP", "JavaScript"]
    }
]

function constructExperienceContainer(d) {
    const experienceDetailContainer = document.createElement("div");
    const jobTimeLine = document.createElement("p")
    const detailsWrapper = document.createElement("div");
    const jobRoleHeader = document.createElement('h3');
    const jobRole = document.createElement('span');
    const companyName = document.createElement('span');
    const workDetails = document.createElement('p');
    const techStackUsedContainer = document.createElement('div');


    experienceDetailContainer.setAttribute("class", "experience-details-container");
    jobRoleHeader.setAttribute('class', 'section-subtitle');
    jobTimeLine.setAttribute("class", "timeline");
    detailsWrapper.setAttribute("class", "details-wrapper")
    jobRole.setAttribute("class", "job-role");
    companyName.setAttribute("class", "company-name");
    workDetails.setAttribute("class", "experience-description section-description");
    techStackUsedContainer.setAttribute("class", "tech-used-container");

    jobTimeLine.innerText = d.timeline;
    jobRole.innerText = d.jobRole;
    companyName.innerText = d.companyName;
    workDetails.innerText = d.workDetails;

    renderTagsContainer(d.techUsed, techStackUsedContainer);

    jobRoleHeader.append(jobRole, companyName);
    detailsWrapper.append(jobRoleHeader, workDetails, techStackUsedContainer);
    experienceDetailContainer.append(jobTimeLine, detailsWrapper);

    return experienceDetailContainer
}

function constructProjectContainer(d) {
    const projectListContainer = document.createElement('div');
    const projectImage = document.createElement('img');
    const projectDescriptionContainer = document.createElement('div');
    const projectTitle = document.createElement('h3');
    const projectDescription = document.createElement('p');
    const techStackUsedContainer = document.createElement('div');

    projectListContainer.setAttribute('class', 'project-container');
    projectImage.setAttribute('class', 'project-image');
    projectDescriptionContainer.setAttribute('class', 'project-description-container')
    projectTitle.setAttribute('class', "section-subtitle");
    projectDescription.setAttribute('class', 'project-description section-description');
    techStackUsedContainer.setAttribute("class", "tech-used-container");


    projectTitle.innerText = d.projectTitle;
    projectDescription.innerText = d.projectDescription;
    renderTagsContainer(d.techUsed, techStackUsedContainer);

    projectDescriptionContainer.append(projectTitle, projectDescription, techStackUsedContainer);

    if (d.projectImgUrl) {
        projectImage.src = d.projectImgUrl;
        projectImage.alt = d.projectTitle;
        projectListContainer.append(projectDescriptionContainer, projectImage);
    } else {
        projectListContainer.append(projectDescriptionContainer);
    }


    return projectListContainer;
}

function renderTagsContainer(techUsed, container) {
    techUsed.forEach(stack => {
        const techTag = document.createElement('span');
        techTag.setAttribute("class", "tech-used-tag");
        techTag.innerText = stack;
        container.append(techTag);
    })
}

function renderExperienceSection() {
    const experienceContainer = document.getElementById("experienceTimeLineContainer");
    experienceDetails.forEach(details => {
        const experienceSectionContent = constructExperienceContainer(details);
        experienceContainer.append(experienceSectionContent);
    }) 
}

function renderProjectsSection() {
    const projectsContainer = document.getElementById("projectsList");
    projectDetails.forEach(details => {
        const projectSectionContent = constructProjectContainer(details);
        projectsContainer.append(projectSectionContent);
    })
}


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link .nav-anchor");
function handleNavigationOnScroll() {
    let currentSection = "";
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();

        if (rect.top + section.offsetHeight >= 0 && rect.top <= window.innerHeight / 2) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
}

function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

const debouncedScrollHandler = debounce(handleNavigationOnScroll, 20);
const debouncedResizeHandler = debounce(handleResizeHandler, 20);

let screenWidth;
function handleResizeHandler() {
    screenWidth = innerWidth;
}


const spotlightContainer = document.getElementById('spotlight');
function createSpotlight(event) {
    const mouseXPosition = event.clientX;
    const mouseYPosition = event.clientY;
    (mouseXPosition && mouseYPosition) && (spotlightContainer.style.background = `radial-gradient(600px at ${ mouseXPosition }px ${ mouseYPosition }px , rgba(29, 78, 216, 0.15), transparent 80%)`);
}

const experienceSection = document.getElementById('experience');
const projectSection = document.getElementById('projects');

experienceSection.addEventListener('mouseenter', () => {
    if (screenWidth > 1023) {
        const experienceListItem = document.querySelectorAll('.experience-details-container');
        changeOpacity(experienceListItem, 50);
    }
})

experienceSection.addEventListener('mouseleave', () => {
    const experienceListItem = document.querySelectorAll('.experience-details-container');
    changeOpacity(experienceListItem, 100); 
})

projectSection.addEventListener('mouseenter', () => {
    if (screenWidth > 1023) {
        const projectListItem = document.querySelectorAll('.project-container');
        changeOpacity(projectListItem, 50); 
    }
})

projectSection.addEventListener('mouseleave', () => {
    const projectListItem = document.querySelectorAll('.project-container');
    changeOpacity(projectListItem, 100); 
})


function changeOpacity(listItem, opacityValue) {
    listItem.forEach(item => {
        item.style.opacity = `${opacityValue}%`;
    }) 
}

renderExperienceSection();
renderProjectsSection();

window.addEventListener('scroll', debouncedScrollHandler);
window.addEventListener('resize', debouncedResizeHandler);
window.addEventListener('mousemove', createSpotlight);