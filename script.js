document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('subtitle').textContent = "Python Developer with experience in Machine Learning, Computer Vision, and Data Analysis.";

    document.getElementById('about-content').textContent = "Python developer with experience in data analysis, computer vision, and AI applications. Skilled in using libraries such as NumPy, Pandas, and SciPy for comprehensive data handling and analysis. Proficient in creating visualizations with Matplotlib and Seaborn. Familiar with SQL and web scraping techniques for data collection. Experienced in Jetson, CUDA, and PyTorch, with a focus on deploying models like YOLO for object detection. Additionally skilled in monocular camera techniques and 3D object localization.";

    const skills = [
        { name: "Python", icon: "fab fa-python" },
        { name: "Machine Learning", icon: "fas fa-brain" },
        { name: "Computer Vision", icon: "fas fa-eye" },
        { name: "Data Analysis", icon: "fas fa-chart-bar" },
        { name: "PyTorch", icon: "fas fa-fire" },
        { name: "scikit-learn", icon: "fas fa-cogs" },
        { name: "Open3D", icon: "fas fa-cube" },
        { name: "SQL", icon: "fas fa-database" },
        { name: "C/C++", icon: "fas fa-code" },
        { name: "Docker", icon: "fab fa-docker" },
        { name: "HTML/CSS", icon: "fab fa-html5" },
        { name: "JavaScript", icon: "fab fa-js-square" },
        { name: "Linux", icon: "fab fa-linux" },
        { name: "Git", icon: "fab fa-git-alt" }
    ];
    const skillsContent = document.getElementById('skills-content');
    skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.setAttribute('data-skill', skill.name);
        skillItem.innerHTML = `<i class="${skill.icon}"></i>`;
        skillsContent.appendChild(skillItem);
    });

    const education = [
        {
            school: "Kadir Has University",
            logo: "images/kadirHasLogo.png",
            degree: "Bachelor of Science in Computer Engineering",
            duration: "September 2022 - Present",
            description: "Focusing on advanced topics such as machine learning, computer vision, and data analysis. Gained comprehensive experience working with Python libraries and developing practical projects."
        },
        {
            school: "Hong Kong University of Science and Technology",
            logo: "images/hkustLogo.png",
            degree: "Big Data MicroMaster Program (edX)",
            duration: "August 2024 - Present",
            description: "Studying advanced techniques in big data analytics, focusing on handling and processing large datasets efficiently."
        }
    ];
    const educationContent = document.getElementById('education-content');
    education.forEach(edu => {
        educationContent.innerHTML += `
            <div class="item-card">
                <img src="${edu.logo}" alt="${edu.school} Logo" class="item-logo">
                <div class="item-content">
                    <h3>${edu.school}</h3>
                    <p class="item-subtitle">${edu.degree}</p>
                    <p class="item-duration">${edu.duration}</p>
                    <p>${edu.description}</p>
                    ${edu.bullets ? edu.bullets.map(bullet => `<p class="education-bullet">${bullet}</p>`).join('') : ''}
                </div>
            </div>
        `;
    });

    const experiences = [
        {
            company: "DRONOS",
            logo: "images/dronos.png",
            title: "Software Engineer",
            duration: "May 2024 - Present",
            description: "Working on various computer vision and signal processing projects including:",
            bullets: [
                "Point cloud WiFi RSSI signal processing for indoor positioning",
                "Monocular camera depth estimation",
                "3D object localization",
                "Developing algorithms for signal strength analysis and mapping"
            ]
        }
    ];
    const experienceContent = document.getElementById('experience-content');
    experiences.forEach(exp => {
        experienceContent.innerHTML += `
            <div class="item-card">
                <img src="${exp.logo}" alt="${exp.company} Logo" class="item-logo">
                <div class="item-content">
                    <h3>${exp.company}</h3>
                    <p class="item-subtitle">${exp.title}</p>
                    <p class="item-duration">${exp.duration}</p>
                    <p>${exp.description}</p>
                    ${exp.bullets ? exp.bullets.map(bullet => `<p class="experience-bullet">${bullet}</p>`).join('') : ''}
                </div>
            </div>
        `;
    });

   
const projects = [
    {
        title: "Wi-Fi Signal Localization System",
        description: "Developed a Python-based system to optimize Wi-Fi signal strength in indoor environments. Utilized Open3D for point cloud analysis and modeled wall signal losses to determine the best modem placement.",
        technologies: ["Python", "Open3D", "NumPy", "scikit-learn"]
    },
    {
        title: "WebSocket Binance Trading Bot",
        description: "Created a real-time trading bot using Binance API and WebSocket connections. Implemented strategies for detecting market trends and executing trades with quant-based analysis.",
        technologies: ["Python", "Binance API", "WebSocket", "Pandas"]
    },
    {
        title: "AI-Based Object Detection System",
        description: "Built a computer vision model using YOLOv5 and PyTorch to detect and classify objects in real time.",
        technologies: ["Python", "YOLOv5", "PyTorch", "OpenCV"]
    }
];

const projectsContent = document.getElementById('projects-content');
projects.forEach(project => {
    projectsContent.innerHTML += `
        <div class="project-card fade-in">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                ${project.github ? `<a href="${project.github}" target="_blank" class="project-link">GitHub</a>` : ''}
                ${project.demo ? `<a href="${project.demo}" target="_blank" class="project-link">Live Demo</a>` : ''}
            </div>
        </div>
    `;
});
    
    const achievements = [
        {
            title: "HarvardX Data Analysis Certificate",
            description: "Earned certificates in Data Analysis from HarvardX, demonstrating proficiency in data manipulation and analysis.",
            image: "images/harvardXLogo.png",
            links: [
                { name: "Python", url: "https://courses.edx.org/certificates/dd6d819a7049448ab2d42112123e9384" },
                { name: "Data Science", url: "https://courses.edx.org/certificates/f81b9b4aef764fc2940c51bf546fe63d" }
            ]
        },
        {
            title: "TEKNOFEST Smart Wi-Fi Coverage Finalist",
            description: "Finalist in the Smart Wi-Fi Coverage Competition at TEKNOFEST. Recognized with the 'Best Team Spirit' award.",
            image: "images/teknofestLogo.png",
            link: "https://drive.google.com/file/d/1adKD5jIykWRIzbxBf76Z-w9x3c8sn0tB/view?usp=sharing"
        },
        {
            title: "Beyaz Güvercinler Scholarship Program",
            description: "Awarded the prestigious Beyaz Güvercinler Scholarship by Kadir Has University, providing financial and academic support.",
            image: "images/kadirHasLogo.png",
            link: "https://beyazguvercinler.khas.edu.tr/"
        }
    ];
    const achievementsContent = document.getElementById('achievements-content');
    achievements.forEach(achievement => {
        achievementsContent.innerHTML += `
            <div class="item-card">
                <img src="${achievement.image}" alt="${achievement.title}" class="item-logo">
                <div class="item-content">
                    <h3>${achievement.title}</h3>
                    <p>${achievement.description}</p>
                    ${achievement.links ? 
                        `<div class="certificate-links">
                            ${achievement.links.map(link => 
                                `<a href="${link.url}" target="_blank" class="item-link">${link.name} Certificate</a>`
                            ).join('')}
                        </div>` 
                        : 
                        (achievement.link ? 
                            `<a href="${achievement.link}" target="_blank" class="item-link">
                                ${achievement.title === "Beyaz Güvercinler Scholarship Program" ? "View Website" : "View Certificate"}
                            </a>` 
                            : '')
                    }
                </div>
            </div>
        `;
    });

    const socialLinks = [
        { platform: 'github', url: 'https://github.com/ceSamet', icon: 'fab fa-github' },
        { platform: 'linkedin', url: 'https://www.linkedin.com/in/sametayd%C4%B1n/', icon: 'fab fa-linkedin' },
        { platform: 'email', url: 'mailto:sametaydin156@gmail.com', icon: 'fas fa-envelope' }
    ];
    const socialLinksContainer = document.getElementById('social-links');
    socialLinks.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;
        a.target = '_blank';
        a.innerHTML = `<i class="${link.icon}"></i>`;
        socialLinksContainer.appendChild(a);
    });

    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    window.onscroll = function() {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
    };

    let lastScrollTop = 0;
    const header = document.querySelector('header');
    const scrollThreshold = 100; 

    const mobileBreakpoint = 768; 

    window.addEventListener('scroll', () => {
        if (window.innerWidth <= mobileBreakpoint) {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Determine scroll direction
            if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
                // Scrolling down
                header.classList.add('hidden');
            } else {
                // Scrolling up
                header.classList.remove('hidden');
            }

            // Add or remove 'scrolled' class based on scroll position
            if (scrollTop > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            lastScrollTop = scrollTop;
        } else {
            // Always show header on larger screens
            header.classList.remove('hidden');
            header.classList.toggle('scrolled', window.scrollY > 50);
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > mobileBreakpoint) {
            header.classList.remove('hidden');
        }
    });
});
