// Fitur Data Portofolio
const myProfile = {
    roles: ["Complex System Physics", "Electro & Instrumentation", "Web Developer", "IT Support"],
    heroDesc: "Exploring complex systems, building practical solutions, and continuously expanding knowledge across science, engineering, and technology.",
    aboutText: [
        "Hello! I'm an engineer who enjoys understanding how systems work, whether they're built from lines of code, electronic circuits, or real-world data. My background in Complex System Physics taught me to approach problems analytically and break down complex challenges into practical solutions.",
        "I don't just stick to one domain. On any given day, you might find me troubleshooting a Linux network, building a responsive web interface, assembling instrumentation setups, or exploring Software Defined Radio (SDR). I enjoy getting my hands dirty and turning ideas into reliable, practical solutions."
    ]
};

const mySkills = [
    {
        category: "Instrumentation & Hardware",
        icon: "fa-microchip",
        tags: ["Electronic Components", "Oscilloscope", "Signal Analyzer", "Multimeter", "ESP Series", "STM32", "Arduino", "SDR", "Sensors & Actuators"]
    },
    {
        category: "Data Analysis & Computation",
        icon: "fa-chart-line",
        tags: ["Python", "Algorithm Machine Learning", "Signal Processing", "Anomaly Detection", "Predictive Modeling"]
    },
    {
        category: "Web & Software",
        icon: "fa-code",
        tags: ["Laravel", "Vue.js", "Franken PHP", "MySQL", "Git", "RabbitMQ"]
    },
    {
        category: "Network & IT Support",
        icon: "fa-network-wired",
        tags: ["Windows / Linux Troubleshooting", "MikroTik", "Hardware Maintenance", "System Integration"]
    },
    {
        category: "Engineering Tools",
        icon: "fa-drafting-compass",
        tags: ["AutoCAD", "EasyEDA", "KiCad", "Cisco Packet Tracer", "Winbox"]
    }
];

const myProjects = [
    {
        title: "Gas Chromatography Classification",
        desc: "Machine learning classification pipeline for volatile organic compounds (VOC) using portable micro‑GC instrumentation with Savitzky‑Golay filtering. Successfully distinguished Ethanol, Toluene, Spirit, and Butane with 100% accuracy through PCA‑LDA feature reduction and SVM classification.",
        tech: ["Python", "Jupyter", "Pandas", "NumPy", "SciPy", "scikit-learn", "Matplotlib", "Seaborn"],
        images: [
            "https://raw.githubusercontent.com/achmadnaafi/Gas-Chromatography-Classification/main/assets/preprocessing/etanol-tcd-preprocessing.png",
            "https://raw.githubusercontent.com/achmadnaafi/Gas-Chromatography-Classification/main/assets/feature_analysis/01_feature_correlation_heatmap.png",
            "https://raw.githubusercontent.com/achmadnaafi/Gas-Chromatography-Classification/main/assets/feature_analysis/04_pca_scatter_plot.png",
            "https://raw.githubusercontent.com/achmadnaafi/Gas-Chromatography-Classification/main/assets/final-model/cm_svm_lda.png"
        ],
        iconFallback: "fa-flask-vial",
        github: "https://github.com/achmadnaafi/Gas-Chromatography-Classification",
        demo: ""
    }
];

// DATA EXPERIENCE BERGAYA LINKEDIN (Nested berdasarkan Perusahaan)
const myExperience = [
    {
        company: "PT. Trans Indonesia SuperKoridor",
        roles: [
            {
                title: "IT Programmer Intern",
                period: "Oktober 2025 - April 2026",
                desc: "Developed and maintained internal web applications using Laravel and Vue.js, contributing to database design, Git-based version control, and application testing and debugging."
            }
        ]
    },
    {
        company: "PT. Solusi Intek Indonesia",
        roles: [
            {
                title: "Mechatronics Engineer Intern",
                period: "February 2024 - July 2024",
                desc: "Worked on hardware prototyping, embedded systems, and Python-based data acquisition applications. Conducted RF signal analysis using SDR and machine learning techniques for anomaly detection."
            },
        ]
    }
];
// /Fitur Data Portofolio


// Fitur Render HTML Otomatis
document.addEventListener('DOMContentLoaded', () => {
    renderProfile();
    renderAboutStats();
    renderSkills();
    renderProjects();
    renderExperience();
});

function renderProfile() {
    const rolesEl = document.getElementById('hero-roles');
    const heroDescEl = document.getElementById('hero-desc');
    const aboutTextEl = document.getElementById('about-text-container');

    if (rolesEl) {
        rolesEl.innerHTML = myProfile.roles.join(' <span class="dot">•</span> ');
    }
    if (heroDescEl) {
        heroDescEl.innerText = myProfile.heroDesc;
    }
    if (aboutTextEl) {
        aboutTextEl.innerHTML = myProfile.aboutText.map(paragraph => `<p>${paragraph}</p>`).join('<br>');
    }
}

function renderAboutStats() {
    const projectCountEl = document.getElementById('project-count');
    const expCountEl = document.getElementById('experience-count');
    
    // Hitung total role jabatan untuk indikator statistik jumlah pengalaman
    let totalRoles = 0;
    myExperience.forEach(exp => totalRoles += exp.roles.length);

    if (projectCountEl) projectCountEl.innerText = `${myProjects.length}+`;
    if (expCountEl) expCountEl.innerText = `${totalRoles}+`;
}

function renderSkills() {
    const container = document.getElementById('skills-container');
    if (!container) return;
    
    container.innerHTML = mySkills.map(skill => `
        <div class="skill-category">
            <i class="fa-solid ${skill.icon} skill-icon"></i>
            <h3>${skill.category}</h3>
            <div class="skill-tags">
                ${skill.tags.map(tag => `<span>${tag}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;

    container.innerHTML = myProjects.map(project => `
        <div class="project-card fade-in">
            <div class="project-img">
                ${project.images?.length ? `
                    <div class="project-gallery" data-images='${JSON.stringify(project.images)}'>
                        <img src="${project.images[0]}" alt="${project.title} preview">
                        ${project.images.length > 1 ? `
                            <button class="gallery-btn gallery-prev" type="button" aria-label="Previous image">‹</button>
                            <button class="gallery-btn gallery-next" type="button" aria-label="Next image">›</button>
                            <div class="gallery-dots">
                                ${project.images.map((_, index) => `<span class="gallery-dot${index === 0 ? ' active' : ''}"></span>`).join('')}
                            </div>
                        ` : ''}
                    </div>
                ` : project.image ? `<img src="${project.image}" alt="${project.title}">` : `<i class="fa-solid ${project.iconFallback || 'fa-code'} placeholder-icon"></i>`}
            </div>
            <div class="project-info">
                <h4>${project.title}</h4>
                <p>${project.desc}</p>
                <div class="project-tech">
                    ${project.tech.map(t => `<span>${t}</span>`).join(' ')}
                </div>
                <div class="project-links">
                    ${project.github ? `<a href="${project.github}" target="_blank" class="btn-project"><i class="fa-brands fa-github"></i> Code</a>` : ''}
                    ${project.demo ? `<a href="${project.demo}" target="_blank" class="btn-project"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live</a>` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

// RENDER EXPERIENCE DENGAN LOGIKA NESTED DAN LIMIT TAMPILAN
function renderExperience() {
    const container = document.getElementById('experience-container');
    const viewMoreBtnContainer = document.getElementById('view-more-container');
    if (!container) return;

    container.innerHTML = myExperience.map((exp, index) => {
        // Jika urutan perusahaan ke-4 dst, beri class sembunyi 'hide-exp'
        const hideClass = index >= 3 ? 'hide-exp' : '';
        return `
            <div class="timeline-item fade-in ${hideClass}">
                <div class="timeline-content">
                    <h3 class="company-title">${exp.company}</h3>
                    <div class="roles-container">
                        ${exp.roles.map(role => `
                            <div class="role-item">
                                <h4>${role.title}</h4>
                                <p class="timeline-date">${role.period}</p>
                                <p>${role.desc}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Hidupkan tombol Show More jika total perusahaan lebih dari 3
    if (myExperience.length > 3 && viewMoreBtnContainer) {
        viewMoreBtnContainer.style.display = 'block';
        setupViewMoreBtn();
    }
}

// Logika Klik Tombol Show More Vertikal
function setupViewMoreBtn() {
    const btn = document.getElementById('viewMoreBtn');
    let isExpanded = false;

    if (!btn) return;

    btn.addEventListener('click', () => {
        isExpanded = !isExpanded;
        const hiddenItems = document.querySelectorAll('.timeline-item');

        hiddenItems.forEach((item, index) => {
            if (index >= 3) {
                if (isExpanded) {
                    item.style.display = 'block';
                    setTimeout(() => item.classList.add('appear'), 10);
                } else {
                    item.style.display = 'none';
                    item.classList.remove('appear');
                }
            }
        });

        if (isExpanded) {
            btn.innerHTML = `<span>Show Less</span> <i class="fa-solid fa-chevron-up"></i>`;
        } else {
            btn.innerHTML = `<span>View All Experience</span> <i class="fa-solid fa-chevron-down"></i>`;
            document.getElementById('experience').scrollIntoView({ behavior: 'smooth' });
        }
    });
}
// /Fitur Render HTML Otomatis


// Fitur Light & Dark Mode
const toggleSwitch = document.querySelector('#checkbox');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'light') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }    
}
toggleSwitch.addEventListener('change', switchTheme, false);


// Fitur Navigation Scroll State
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".nav-links li a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 4)) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((a) => {
        a.classList.remove("active");
        if (a.getAttribute("href").includes(current)) {
            a.classList.add("active");
        }
    });
});


// Fitur Scroll Animasi (Fade-In)
setTimeout(() => {
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0.1, 
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
}, 100);


// Fitur Mobile Hamburger Menu
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-links');
const mobileMenuIcon = document.querySelector('#mobile-menu i');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    if (navMenu.classList.contains('active')) {
        mobileMenuIcon.classList.remove('fa-bars');
        mobileMenuIcon.classList.add('fa-xmark');
    } else {
        mobileMenuIcon.classList.remove('fa-xmark');
        mobileMenuIcon.classList.add('fa-bars');
    }
});

document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuIcon.classList.remove('fa-xmark');
        mobileMenuIcon.classList.add('fa-bars');
    });
});


// Fitur Slider / Carousel untuk Skills & Projects
document.addEventListener('DOMContentLoaded', () => {
    function setupSlider(leftBtnId, rightBtnId, containerId, cardSelector) {
        const slideLeftBtn = document.getElementById(leftBtnId);
        const slideRightBtn = document.getElementById(rightBtnId);
        const container = document.getElementById(containerId);

        if (slideLeftBtn && slideRightBtn && container) {
            slideLeftBtn.addEventListener('click', () => {
                const card = container.querySelector(cardSelector);
                if(card) {
                    const scrollAmount = card.offsetWidth + 20; 
                    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
                }
            });

            slideRightBtn.addEventListener('click', () => {
                const card = container.querySelector(cardSelector);
                if(card) {
                    const scrollAmount = card.offsetWidth + 20;
                    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                }
            });
        }
    }

    setupSlider('slideLeftSkills', 'slideRightSkills', 'skills-container', '.skill-category');
    setupSlider('slideLeftProjects', 'slideRightProjects', 'projects-container', '.project-card');

    // Project Gallery Carousel (multiple images per card)
    document.querySelectorAll('.project-gallery').forEach(gallery => {
        const images = JSON.parse(gallery.dataset.images);
        const imgEl = gallery.querySelector('img');
        const dots = gallery.querySelectorAll('.gallery-dot');
        const prevBtn = gallery.querySelector('.gallery-prev');
        const nextBtn = gallery.querySelector('.gallery-next');
        let current = 0;

        function update(index) {
            imgEl.style.opacity = 0;
            setTimeout(() => {
                imgEl.src = images[index];
                imgEl.style.opacity = 1;
            }, 150);
            dots.forEach((d, i) => d.classList.toggle('active', i === index));
        }

        prevBtn?.addEventListener('click', e => {
            e.stopPropagation();
            current = (current - 1 + images.length) % images.length;
            update(current);
        });
        nextBtn?.addEventListener('click', e => {
            e.stopPropagation();
            current = (current + 1) % images.length;
            update(current);
        });
        dots.forEach((dot, i) => dot.addEventListener('click', e => {
            e.stopPropagation();
            current = i;
            update(current);
        }));

        // Keyboard support
        gallery.addEventListener('keydown', e => {
            if (e.key === 'ArrowLeft') { current = (current - 1 + images.length) % images.length; update(current); }
            if (e.key === 'ArrowRight') { current = (current + 1) % images.length; update(current); }
        });
    });
});