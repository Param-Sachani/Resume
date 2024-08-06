document.addEventListener("DOMContentLoaded", function () {
    // Skills
    const skills = [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "Bootstrap", level: 85 },
        { name: "React", level: 75 },
        { name: "Node.js", level: 70 },
    ];

    const skillsContainer = document.getElementById("skills-container");

    skills.forEach((skill) => {
        const skillDiv = document.createElement("div");
        skillDiv.className = "col-md-4 col-sm-6";
        skillDiv.innerHTML = `
            <div class="skill-item">
                <h4>${skill.name}</h4>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: ${skill.level}%;" 
                         aria-valuenow="${skill.level}" aria-valuemin="0" aria-valuemax="100">
                        ${skill.level}%
                    </div>
                </div>
            </div>
        `;
        skillsContainer.appendChild(skillDiv);
    });

    // Projects
    const projects = [
        {
            name: "Project 1",
            description: "Short description of Project 1",
            image: "https://via.placeholder.com/300x200",
        },
        {
            name: "Project 2",
            description: "Short description of Project 2",
            image: "https://via.placeholder.com/300x200",
        },
        {
            name: "Project 3",
            description: "Short description of Project 3",
            image: "https://via.placeholder.com/300x200",
        },
    ];

    const projectsContainer = document.getElementById("projects-container");

    projects.forEach((project) => {
        const projectDiv = document.createElement("div");
        projectDiv.className = "col-md-4 mb-4";
        projectDiv.innerHTML = `
            <div class="card project-card">
                <img src="${project.image}" class="card-img-top" alt="${project.name}">
                <div class="card-body">
                    <h5 class="card-title">${project.name}</h5>
                    <p class="card-text">${project.description}</p>
                    <a href="#" class="btn btn-primary">Learn More</a>
                </div>
            </div>
        `;
        projectsContainer.appendChild(projectDiv);
    });
});
