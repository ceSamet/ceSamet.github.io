document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('subtitle').textContent = "Expert Python Developer | Machine Learning | Computer Vision | Data Analysis";

    document.getElementById('about-content').textContent = "Experienced Python developer specializing in machine learning, computer vision, and data analysis. Proficient in NumPy, Pandas, SciPy, Matplotlib, and Seaborn for comprehensive data handling and visualization. Skilled in SQL, web scraping, Jetson, CUDA, and PyTorch, with expertise in deploying YOLO models for object detection. Currently working on monocular camera depth estimation techniques and 3D object localization.";

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
            description: "Studying core computer engineering subjects including Logic Circuits, C/C++ Programming, Data Structures and Algorithms, and Fundamentals of Electrical Engineering. Also focusing on advanced topics such as machine learning, computer vision, and data analysis. Gained comprehensive experience working with Python libraries and developing practical projects."
        },
        {
            school: "Kadir Has University",
            logo: "images/kadirHasLogo.png",
            degree: "Management Information Systems",
            duration: "February 2025 - Present",
            description: "Specializing in web analytics, social media analytics, disaster management and business continuity, Python programming, data science, and linear algebra. Developing comprehensive skills in business analytics and information systems management."
        }
    ];
    const educationContent = document.getElementById('education-content');
    education.forEach(edu => {
        educationContent.innerHTML += `
            <div class="item-card">
                <img src="${edu.logo}" alt="${edu.school} Logo - ${edu.degree}" class="item-logo">
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
            company: "Kadir Has University",
            logo: "images/kadirHasLogo.png",
            title: "Research Intern",
            duration: "February 2025 - Present",
            description: "Working on the development of interpretable feature selection and extraction algorithms for asynchronous Brain-Computer Interface (BCI) systems.",
            bullets: [
                "- Literature review and analysis of state-of-the-art BCI feature extraction methods",
                "- Research on advanced feature selection algorithms and their applications in neural signal processing",
                "- Investigation of interpretable machine learning approaches for BCI systems",
                "- Comparative analysis of existing methodologies in the field of neural signal processing"
            ]
        },
        {
            company: "DRONOS",
            logo: "images/dronos.png",
            title: "Software Engineer",
            duration: "May 2024 - Present",
            description: "Working on various computer vision and signal processing projects.",
            bullets: [
                "- Point cloud WiFi RSSI signal processing for indoor positioning",
                "- Monocular camera depth estimation",
                "- 3D object localization",
                "- Developing algorithms for signal strength analysis and mapping"
            ]
        }
    ];
    const experienceContent = document.getElementById('experience-content');
    experiences.forEach((exp, index) => {
        experienceContent.innerHTML += `
            <div class="item-card">
                <img src="${exp.logo}" alt="${exp.company} Logo - ${exp.title}" class="item-logo">
                <div class="item-content">
                    <h3>${exp.company}</h3>
                    <p class="item-subtitle">${exp.title}</p>
                    <p class="item-duration">${exp.duration}</p>
                    <p>${exp.description}</p>
                    <div class="experience-bullets" id="bullets-${index}" style="display: none;">
                        ${exp.bullets ? exp.bullets.map(bullet => `<p class="experience-bullet">${bullet}</p>`).join('') : ''}
                    </div>
                    <button class="toggle-bullets" data-index="${index}">More</button>
                </div>
            </div>
        `;
    });

    // Add event listeners for the "More/Less" buttons
    document.querySelectorAll('.toggle-bullets').forEach(button => {
        button.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            const bulletsDiv = document.getElementById(`bullets-${index}`);
            if (bulletsDiv.style.display === 'none') {
                bulletsDiv.style.display = 'block';
                this.textContent = 'Less';
            } else {
                bulletsDiv.style.display = 'none';
                this.textContent = 'More';
            }
        });
    });

   
    const projects = [
        {
            title: "Wi-Fi Signal Localization System",
            description: "Developed a Python-based system to optimize Wi-Fi signal strength in indoor environments.",
            fullDescription: "Developed a Python-based system to optimize Wi-Fi signal strength in indoor environments. Utilized Open3D for point cloud analysis and created detailed models of indoor spaces to assess Wi-Fi signal losses due to walls. Modeled signal attenuation based on wall materials and thickness using custom algorithms. Implemented machine learning techniques with scikit-learn to predict optimal modem placement for maximum coverage and minimal interference.",
            technologies: ["Python", "Open3D", "NumPy", "scikit-learn"]
        },
        {
            title: "WebSocket Binance Trading Bot",
            description: "Created a real-time trading bot using Binance API and WebSocket connections.",
            fullDescription: "Created a real-time trading bot using Binance API and WebSocket connections. Designed the bot to continuously monitor market prices and volume, detecting rapid changes in trends. Integrated quant-based analysis techniques to optimize buy and sell signals, ensuring efficient trade execution. The bot was enhanced with risk management features such as stop-loss and trailing-stop orders, while utilizing Pandas for real-time data processing and analysis.",
            technologies: ["Python", "Binance API", "WebSocket", "Pandas"]
        },
        {
            title: "AI-Based Object Detection System",
            description: "Built a computer vision model using YOLOv5 and PyTorch to detect and classify objects in real time.",
            fullDescription: "Built a computer vision model using YOLOv5 and PyTorch to detect and classify objects in real time. The system was designed to perform highly accurate object detection across multiple categories, even in complex environments. Leveraged CUDA for GPU acceleration to enhance processing speed, allowing real-time frame analysis.",
            technologies: ["Python", "YOLOv5", "PyTorch", "OpenCV"]
        }
    ];
    

const projectsContent = document.getElementById('projects-content');
projects.forEach((project, index) => {
    projectsContent.innerHTML += `
        <div class="project-card fade-in">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">
                ${project.description}
                <span class="toggle-project-description" data-index="${index}">More</span>
            </p>
            <p class="project-full-description" id="project-desc-${index}" style="display: none;">${project.fullDescription}</p>
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

// Add event listeners for the "More/Less" buttons in projects
document.querySelectorAll('.toggle-project-description').forEach(span => {
    span.addEventListener('click', function() {
        const index = this.getAttribute('data-index');
        const fullDescDiv = document.getElementById(`project-desc-${index}`);
        const shortDescDiv = this.parentNode;
        if (fullDescDiv.style.display === 'none') {
            fullDescDiv.style.display = 'block';
            shortDescDiv.style.display = 'none';
            this.textContent = 'Less';
        } else {
            fullDescDiv.style.display = 'none';
            shortDescDiv.style.display = 'block';
            this.textContent = 'More';
        }
    });
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
                <img src="${achievement.image}" alt="${achievement.title} - ${achievement.description}" class="item-logo">
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

    // Scroll animation
    const scrollElements = document.querySelectorAll('.fade-in');

    const elementInView = (el, percentageScroll = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= 
            ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('appear');
    };

    const hideScrollElement = (element) => {
        element.classList.remove('appear');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 100)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        })
    }

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });

    // İlk yüklemede de çalıştır
    handleScrollAnimation();
});

// Dark mode toggle functionality
function initDarkMode() {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const storedTheme = localStorage.getItem('theme');
    
    // Set initial theme based on stored preference or system preference
    if (storedTheme === 'dark' || (!storedTheme && prefersDarkScheme.matches)) {
        document.body.classList.add('dark-mode');
    }

    // Add theme toggle button to header
    const nav = document.querySelector('nav');
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = `<i class="fas fa-moon"></i>`;
    themeToggle.classList.add('theme-toggle');
    themeToggle.setAttribute('aria-label', 'Toggle dark mode');
    nav.appendChild(themeToggle);

    // Toggle theme function
    function toggleTheme() {
        const isDark = document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeToggle.innerHTML = isDark ? `<i class="fas fa-sun"></i>` : `<i class="fas fa-moon"></i>`;
    }

    // Event listeners
    themeToggle.addEventListener('click', toggleTheme);
    prefersDarkScheme.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            if (e.matches) {
                document.body.classList.add('dark-mode');
                themeToggle.innerHTML = `<i class="fas fa-sun"></i>`;
            } else {
                document.body.classList.remove('dark-mode');
                themeToggle.innerHTML = `<i class="fas fa-moon"></i>`;
            }
        }
    });
}

// Add dark mode initialization to window load
window.addEventListener('load', () => {
    initDarkMode();
    // ... existing window.load code ...
});
