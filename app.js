const experienceDetails = [
    {
        "timeline": "Jan 2022 - Feb 2025",
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
        "projectTitle": "Horizon",
        "projectImgUrl": "./asset/horizon_weather_app.png",
        "projectLink": "https://openhorizon.netlify.app/",
        "githubLink": "https://github.com/Franklin-017/Horizon",
        "projectDescription": "A weather forecasting app that provides real-time temperature updates, wind speed, sunrise/sunset times, and a 5-day forecast. It features a graphical temperature trend, city search, and a favorites system for quick access. Data is persisted for a seamless user experience.",
        "techUsed": ["React.js", "JavaScript", "TypeScript", "TailwindCSS", "Rechart", "React Query", "React Router", "Open Weather APIs", "Local Storage", "Navigator API"]
    },
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
    const projectAnchorContainer = document.createElement('a');
    const projectImage = document.createElement('img');
    const projectDescriptionContainer = document.createElement('div');
    const projectTitle = document.createElement('h3');
    const projectDescription = document.createElement('p');
    const techStackUsedContainer = document.createElement('div');
    const githubLinkIcon = document.createElement('div');

    projectListContainer.setAttribute('class', 'project-container');
    projectAnchorContainer.setAttribute('class', 'anchor-container');
    projectAnchorContainer.setAttribute('href', d.projectLink);
    projectAnchorContainer.setAttribute('target', "_blank");
    projectImage.setAttribute('class', 'project-image');
    projectDescriptionContainer.setAttribute('class', 'project-description-container')
    projectTitle.setAttribute('class', "section-subtitle");
    projectDescription.setAttribute('class', 'project-description section-description');
    techStackUsedContainer.setAttribute("class", "tech-used-container");
    githubLinkIcon.setAttribute('class', 'githublink-container');

    githubLinkIcon.innerHTML = `
                            <a href="${d.githubLink}" target="_blank">
                                <svg class="github-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
                                    id="Capa_1" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;"
                                    xml:space="preserve" width="512" height="512">
                                    <g>
                                        <path style="fill-rule:evenodd;clip-rule:evenodd;"
                                            d="M12,0.296c-6.627,0-12,5.372-12,12c0,5.302,3.438,9.8,8.206,11.387   c0.6,0.111,0.82-0.26,0.82-0.577c0-0.286-0.011-1.231-0.016-2.234c-3.338,0.726-4.043-1.416-4.043-1.416   C4.421,18.069,3.635,17.7,3.635,17.7c-1.089-0.745,0.082-0.729,0.082-0.729c1.205,0.085,1.839,1.237,1.839,1.237   c1.07,1.834,2.807,1.304,3.492,0.997C9.156,18.429,9.467,17.9,9.81,17.6c-2.665-0.303-5.467-1.332-5.467-5.93   c0-1.31,0.469-2.381,1.237-3.221C5.455,8.146,5.044,6.926,5.696,5.273c0,0,1.008-0.322,3.301,1.23   C9.954,6.237,10.98,6.104,12,6.099c1.02,0.005,2.047,0.138,3.006,0.404c2.29-1.553,3.297-1.23,3.297-1.23   c0.653,1.653,0.242,2.873,0.118,3.176c0.769,0.84,1.235,1.911,1.235,3.221c0,4.609-2.807,5.624-5.479,5.921   c0.43,0.372,0.814,1.103,0.814,2.222c0,1.606-0.014,2.898-0.014,3.293c0,0.319,0.216,0.694,0.824,0.576   c4.766-1.589,8.2-6.085,8.2-11.385C24,5.669,18.627,0.296,12,0.296z" />
                                        <path
                                            d="M4.545,17.526c-0.026,0.06-0.12,0.078-0.206,0.037c-0.087-0.039-0.136-0.121-0.108-0.18   c0.026-0.061,0.12-0.078,0.207-0.037C4.525,17.384,4.575,17.466,4.545,17.526L4.545,17.526z" />
                                        <path
                                            d="M5.031,18.068c-0.057,0.053-0.169,0.028-0.245-0.055c-0.079-0.084-0.093-0.196-0.035-0.249   c0.059-0.053,0.167-0.028,0.246,0.056C5.076,17.903,5.091,18.014,5.031,18.068L5.031,18.068z" />
                                        <path
                                            d="M5.504,18.759c-0.074,0.051-0.194,0.003-0.268-0.103c-0.074-0.107-0.074-0.235,0.002-0.286   c0.074-0.051,0.193-0.005,0.268,0.101C5.579,18.579,5.579,18.707,5.504,18.759L5.504,18.759z" />
                                        <path
                                            d="M6.152,19.427c-0.066,0.073-0.206,0.053-0.308-0.046c-0.105-0.097-0.134-0.234-0.068-0.307   c0.067-0.073,0.208-0.052,0.311,0.046C6.191,19.217,6.222,19.355,6.152,19.427L6.152,19.427z" />
                                        <path
                                            d="M7.047,19.814c-0.029,0.094-0.164,0.137-0.3,0.097C6.611,19.87,6.522,19.76,6.55,19.665   c0.028-0.095,0.164-0.139,0.301-0.096C6.986,19.609,7.075,19.719,7.047,19.814L7.047,19.814z" />
                                        <path
                                            d="M8.029,19.886c0.003,0.099-0.112,0.181-0.255,0.183c-0.143,0.003-0.26-0.077-0.261-0.174c0-0.1,0.113-0.181,0.256-0.184   C7.912,19.708,8.029,19.788,8.029,19.886L8.029,19.886z" />
                                        <path
                                            d="M8.943,19.731c0.017,0.096-0.082,0.196-0.224,0.222c-0.139,0.026-0.268-0.034-0.286-0.13   c-0.017-0.099,0.084-0.198,0.223-0.224C8.797,19.574,8.925,19.632,8.943,19.731L8.943,19.731z" />
                                    </g>
                                </svg>
                            </a>
                        `


    projectTitle.innerText = d.projectTitle;
    projectTitle.appendChild(githubLinkIcon);
    projectDescription.innerText = d.projectDescription;
    renderTagsContainer(d.techUsed, techStackUsedContainer);

    projectDescriptionContainer.append(projectTitle, projectDescription, techStackUsedContainer);

    if (d.projectImgUrl) {
        projectImage.src = d.projectImgUrl;
        projectImage.alt = d.projectTitle;
        projectAnchorContainer.append(projectDescriptionContainer, projectImage);
    } else {
        projectAnchorContainer.append(projectDescriptionContainer);
    }

    projectListContainer.append(projectAnchorContainer);


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

let screenWidth = innerWidth;
function handleResizeHandler() {
    screenWidth = innerWidth;
}


const spotlightContainer = document.getElementById('spotlight');
function createSpotlight(event) {
    const mouseXPosition = event.clientX;
    const mouseYPosition = event.clientY;
    (mouseXPosition && mouseYPosition) && (spotlightContainer.style.background = `radial-gradient(600px at ${mouseXPosition}px ${mouseYPosition}px , rgba(29, 78, 216, 0.15), transparent 80%)`);
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
