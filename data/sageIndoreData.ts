import {
    Award, BookOpen, Users, Building,
    GraduationCap, Briefcase, Globe,
    Microscope, Video, Sparkles,
    Home, Wifi, Coffee, Activity, Bus,
    MapPin, Clock, Calendar, Target,
    Brain, Code, Database, Shield, Lock,
    Smartphone, CheckCircle, XCircle,
    UserCheck, Zap, Layout, MonitorPlay,
    FileText, Lightbulb, Play, Music, Camera, Heart, Dumbbell, Stethoscope, Landmark, Library, Accessibility
} from 'lucide-react';

// --- BASIC INFO ---
export const courseInfo = {
    name: "B.Tech in Computer Science & Engineering",
    specialization: "Full Stack Development",
    university: "SAGE University",
    universitySub: "Indore",
    location: "Indore, Madhya Pradesh",
    duration: "4 Years",
    mode: "Offline (Campus)",
    seats: 60,
    eligibility: "50% in Class 12th (PCM)",
    eligibilityNote: "SC/ST candidates: 45%",
    ageLimit: "17-25 Years",
    startDate: "01 August 2026",
    deadline: "15 July 2026",
    contact: {
        phone1: "91524 72392",
        person1: "Sachin Gupta",
        phone2: "93371 89115",
        person2: "Raj Kumar Sahoo",
        email: "admin@geeksofgurukul.com",
        whatsapp: "+919152472392"
    }
};

// --- UNIVERSITY VISION & MISSION ---
export const universityAbout = {
    vision: `SAGE University, Indore epitomizes academic excellence in Central India, offering a world-class educational experience. As the youngest private university in India and the first in Madhya Pradesh to achieve the prestigious NAAC A+ Grade, we are committed to providing top-tier education. Our pedagogical approach focuses on transforming passion into a profession, preparing students for successful careers in a competitive job market.`,
    vision2025: `Educating and Empowering citizens to be better humans. We foster a culture of research, entrepreneurship, and global collaboration, enabling students to develop the skills and mindset needed to lead in a rapidly evolving world.`,
    mission: `At SAGE University, we believe in nurturing talent through an innovative learning environment that combines academic rigor with practical exposure. Our state-of-the-art infrastructure, globally-oriented curriculum, and dedicated faculty ensure a holistic education that empowers students to excel in their chosen fields.`,
    history: `Join SAGE University, Indore, where ambition meets opportunity, and potential turns into achievement. With a steadfast commitment to shaping the future, we create an ecosystem of innovation, excellence, and success. We are the 1st Official Google Campus in Madhya Pradesh, empowering students with world-class resources.`
};

// --- HERO STATS ---
export const heroStats = [
    { value: "NAAC A+", label: "Accredited" },
    { value: "50+", label: "State of Art Laboratories" },
    { value: "50+", label: "Smart Classrooms" },
    { value: "100+", label: "Programs" }
];

// --- HERO SLIDER IMAGES ---
export const heroImages = [
    "https://spiderimg.amarujala.com/assets/images/2020/06/27/750x506/sage-university_1593237922.jpeg",
    "https://sageuniversity.in/assets/images/banner/new2024/new1w.webp",
    "https://sageuniversity.in/assets/images/blog/leads-the-way-in-the-realm-of-education-a-saga-of-excellence-and-innovation.jpg"
];

// --- RANKINGS & AWARDS ---
export const rankings = [
    {
        title: "NAAC Accreditation",
        rank: "A+",
        context: "Youngest in India",
        source: "National Assessment (NAAC)",
        icon: Award
    },
    {
        title: "UGC Approved",
        rank: "UGC",
        context: "Recognized University",
        source: "University Grants Commission",
        icon: Globe
    },
    {
        title: "AICTE Approved",
        rank: "AICTE",
        context: "Engineering Programs",
        source: "All India Council for Technical Education",
        icon: Briefcase
    },
    {
        title: "Programs Offered",
        rank: "75+",
        context: "UG & PG Courses",
        source: "Across 12 Faculties",
        icon: BookOpen
    }
];

// --- FEES & SCHOLARSHIPS ---
export const feeStructure = {
    qualifierFee: "₹99",
    seatBooking: "₹5,000",
    tuitionPerYear: "₹1,30,000",
    hostelPerYear: "₹50,000 - ₹70,000",
    scholarships: [
        { percentage: "15% OFF", type: "Merit Based", criteria: "Score > 95% in 12th" },
        { percentage: "10% OFF", type: "Merit Based", criteria: "Score > 90% in 12th" }
    ],
    emiOptions: {
        provider: "GrayQuest / Propelld",
        amount: "₹10,833 / month",
        tenure: "12 Months"
    }
};

// --- ADMISSION PROCESS ---
export const admissionSteps = [
    {
        step: "01",
        title: "Register",
        desc: "Fill form & pay ₹99 for Qualifier Test.",
        icon: UserCheck
    },
    {
        step: "02",
        title: "Qualifier Test",
        desc: "60-min online test: verbal, logical, quant.",
        icon: FileText
    },
    {
        step: "03",
        title: "Counselling",
        desc: "1:1 Career session to confirm eligibility.",
        icon: Users
    },
    {
        step: "04",
        title: "Admission",
        desc: "Submit documents & pay seat blocking fee.",
        icon: GraduationCap
    },
    {
        step: "05",
        title: "Start Learning",
        desc: "Join the orientation on Aug 1st 2026.",
        icon: Zap
    }
];

// --- CURRICULUM (8 Semesters - Full Stack Development for SAGE Indore) ---
export const curriculum = [
    {
        semester: "Semester 1",
        theme: "Web Fundamentals & Programming",
        subjects: [
            { title: "HTML5 & CSS3 Mastery", code: "FSI101" },
            { title: "JavaScript Essentials", code: "FSI102" },
            { title: "Engineering Mathematics I", code: "FSI103" },
            { title: "Communication Skills", code: "FSI104" },
            { title: "Git & Version Control", code: "FSI105" }
        ],
        labs: ["Web Design Lab", "JavaScript Basics Lab", "Linux & Shell Scripting Lab"],
        activities: ["Freshers Party", "Ice Breaking Session", "Club Orientation", "Campus Tour"],
        phase: "Foundation",
        guidance: "Orientation & Goal Setting"
    },
    {
        semester: "Semester 2",
        theme: "Frontend Development",
        subjects: [
            { title: "React.js Fundamentals", code: "FSI201" },
            { title: "Advanced CSS & Tailwind", code: "FSI202" },
            { title: "UI/UX Design Principles", code: "FSI203" },
            { title: "Data Structures using JS", code: "FSI204" },
            { title: "Engineering Mathematics II", code: "FSI205" }
        ],
        labs: ["React Component Lab", "Responsive Design Lab", "Figma Prototyping Lab"],
        activities: ["24-Hour Hackathon", "UI Design Contest", "Gaming Night"],
        phase: "Foundations",
        guidance: "Mentorship Allocation"
    },
    {
        semester: "Semester 3",
        theme: "Backend & Database Systems",
        subjects: [
            { title: "Node.js & Express.js", code: "FSI301" },
            { title: "SQL & Relational Databases", code: "FSI302" },
            { title: "RESTful API Development", code: "FSI303" },
            { title: "Operating Systems", code: "FSI304" },
            { title: "Algorithms & Problem Solving", code: "FSI305" }
        ],
        labs: ["API Development Lab", "Database Design Lab", "Algorithm Practice Lab"],
        activities: ["Industrial Visit to IT Park", "Tech Talk by Industry Experts", "Coding Marathon"],
        phase: "Practical Learning",
        guidance: "Live Projects & Labs"
    },
    {
        semester: "Semester 4",
        theme: "Full Stack Integration & Cloud",
        subjects: [
            { title: "MongoDB & NoSQL Databases", code: "FSI401" },
            { title: "Authentication & Web Security", code: "FSI402" },
            { title: "AWS Cloud Fundamentals", code: "FSI403" },
            { title: "Software Engineering", code: "FSI404" },
            { title: "TypeScript & Next.js", code: "FSI405" }
        ],
        labs: ["Cloud Deployment Lab", "Security Testing Lab", "MERN Stack Integration Lab"],
        activities: ["LIVE INDUSTRY INTERNSHIP (Paid)", "Project Showcase", "Tech Expo"],
        phase: "Industry Exposure",
        guidance: "Internship Guide & Prep"
    },
    {
        semester: "Semester 5",
        theme: "DevOps & Quality Assurance",
        subjects: [
            { title: "CI/CD Pipelines", code: "FSI501" },
            { title: "Docker & Containerization", code: "FSI502" },
            { title: "Testing (Jest/Cypress)", code: "FSI503" },
            { title: "Computer Networks", code: "FSI504" }
        ],
        labs: ["DevOps Pipeline Lab", "Automated Testing Lab", "Kubernetes Basics Lab"],
        activities: ["Deployment Workshop", "Annual Tech Fest", "Open Source Contribution Sprint"],
        phase: "Specialization",
        guidance: "Research Methodology"
    },
    {
        semester: "Semester 6",
        theme: "Advanced Full Stack & Architecture",
        subjects: [
            { title: "GraphQL & Advanced APIs", code: "FSI601" },
            { title: "Microservices Architecture", code: "FSI602" },
            { title: "System Design Fundamentals", code: "FSI603" },
            { title: "Capstone Project I", code: "FSI604" }
        ],
        labs: ["Microservices Lab", "Full Stack Integration Lab", "System Design Workshop"],
        activities: ["Startup Pitch Day", "Hackathon Finals", "Industry Mentorship Sessions"],
        phase: "Innovation",
        guidance: "Project Mentorship"
    },
    {
        semester: "Semester 7",
        theme: "Mobile Dev & Industry Specialization",
        subjects: [
            { title: "React Native / Flutter", code: "FSI701" },
            { title: "Performance Optimization", code: "FSI702" },
            { title: "AI/ML Integration in Apps", code: "FSI703" }
        ],
        labs: ["Mobile App Development Lab", "Performance Testing Lab", "AI Integration Lab"],
        activities: ["Mock Interviews", "Resume Building", "Company Connect Program"],
        phase: "Pre-Placement",
        guidance: "Resume Building & Mock Interviews"
    },
    {
        semester: "Semester 8",
        theme: "Career Launch & Capstone",
        subjects: [
            { title: "Industry Internship", code: "FSI801" },
            { title: "Major Capstone Project II", code: "FSI802" }
        ],
        labs: ["Final Project Presentation", "Portfolio Development"],
        activities: ["CAMPUS PLACEMENTS", "Farewell Party", "Alumni Connect"],
        phase: "Career Launch",
        guidance: "Final Placement Drive"
    }
];

// --- COMPARISON ---
export const comparisonData = [
    { feature: "Curriculum", gog: "Industry-Designed (Full Stack First)", others: "Outdated Syllabus" },
    { feature: "Practical Labs", gog: "40% Time in Labs + Live Projects", others: "Mostly Theory" },
    { feature: "Faculty", gog: "IIT Alumni & Industry Experts", others: "Academic Only" },
    { feature: "Placements", gog: "100% Support till Placed", others: "Limited Support" },
    { feature: "Certifications", gog: "Degree + Industry Certifications (AWS/Google)", others: "Degree Only" },
    { feature: "Campus Immersion", gog: "Product Labs & Hackathons", others: "Standard Classes" }
];

// --- FACULTY ---
export const faculty = [
    {
        name: "Dr. Priya Sharma",
        role: "Dean of Engineering",
        exp: "20+ Years",
        img: null,
        desc: "Ph.D. in Computer Science. Expert in Full Stack Technologies and Cloud Computing."
    },
    {
        name: "Prof. Rahul Joshi",
        role: "Full Stack Lead Instructor",
        exp: "Ex-Infosys, 12 Years",
        img: null,
        desc: "Specialist in MERN Stack, TypeScript, and Modern JavaScript frameworks."
    },
    {
        name: "Dr. Ankit Verma",
        role: "Research Head",
        exp: "15 Years",
        img: null,
        desc: "Published 50+ papers in International Journals on Software Engineering & AI."
    }
];

// --- PLACEMENTS ---
export const placementStats = {
    highest: "₹43 LPA",
    average: "BEST",
    median: "4.5 LPA",
    companies: ["Infosys", "TCS", "Wipro", "Cognizant", "Capgemini", "HCL", "Tech Mahindra", "Mindtree", "IBM", "Accenture"],
    hiringPartners: 525,
    placedPercentage: "92%"
};

// --- AMENITIES (Using User's SAGE Indore Campus Images) ---
export const amenities = [
    { icon: Building, name: "Auditorium", desc: "Modern auditorium for events, seminars and conferences", image: "https://sageuniversity.in/assets/life8sage/audi/audi1.jpg" },
    { icon: Coffee, name: "Cafeteria", desc: "Spacious cafeteria with healthy food options", image: "https://sageuniversity.in/assets/life8sage/cafe/caf6.jpg" },
    { icon: Microscope, name: "Laboratory", desc: "State-of-the-art science laboratories", image: "https://sageuniversity.in/assets/life8sage/lab/lab5.jpg" },
    { icon: MonitorPlay, name: "IT Labs", desc: "High-performance computing labs with latest tech", image: "https://sageuniversity.in/assets/life8sage/itlab/itlab2.jpg" },
    { icon: Library, name: "Library", desc: "Digital & physical library with vast collection", image: "https://sageuniversity.in/assets/life8sage/lib/lib6.jpg" },
    { icon: Bus, name: "Transportation", desc: "Bus services covering all major routes in Indore", image: "https://sageuniversity.in/assets/life8sage/trans/trans5.jpg" },
    { icon: Layout, name: "Drawing & Design Studio", desc: "Modern design and drawing studio for creative work", image: "https://sageuniversity.in/assets/life8sage/ds/ds1.jpg" },
    { icon: Dumbbell, name: "Sports Complex", desc: "Full-fledged sports complex with indoor & outdoor facilities", image: "https://sageuniversity.in/assets/life8sage/sports/4.jpg" },
    { icon: Stethoscope, name: "Medical Rooms", desc: "On-campus medical facility with emergency care", image: "https://sageuniversity.in/assets/life8sage/DFMF/MF3.jpeg" },
    { icon: Accessibility, name: "Infra For PWD", desc: "Fully accessible infrastructure for differently-abled students", image: "https://sageuniversity.in/assets/life8sage/DFMF/DF5.jpeg" }
];

// --- CLUBS ---
export const clubs = [
    { name: "CodeCraft", type: "Tech Club", icon: Code, desc: "For coding enthusiasts and hackathon lovers." },
    { name: "Rangmanch", type: "Drama Club", icon: Video, desc: "Theater, street plays, and dramatic arts." },
    { name: "Lens Masters", type: "Photography", icon: Camera, desc: "Photography, videography & creative arts." },
    { name: "NSS", type: "Community", icon: Heart, desc: "Social service, volunteering & community impact." },
    { name: "Sargam", type: "Music Club", icon: Music, desc: "For vocalists and instrumentalists." }
];

// --- NEARBY PLACES (Weekend Getaways Near Indore - User Provided) ---
export const nearbyPlaces = [
    {
        name: "Ralamandal Wildlife Sanctuary",
        dist: "8.7 KM",
        type: "Nature",
        desc: "A serene wildlife sanctuary perfect for nature walks and weekend picnics.",
        img: "https://cdn-eu.aglty.io/sunstoneuniversity/Attachments/NewItems/sarafa-bazar-1-compressed_20230220101618_0.jpg"
    },
    {
        name: "Sarafa Bazaar",
        dist: "12.4 KM",
        type: "Street Food",
        desc: "India's famous night street food market known for its iconic Indori snacks.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSym4dgE1iYTN55mAOHNrSBKIK8VKnU1eHddA&s"
    },
    {
        name: "Rajwada Palace",
        dist: "12.5 KM",
        type: "Heritage",
        desc: "A historic 200-year-old palace showcasing Maratha & Mughal architecture.",
        img: "https://cdn-eu.aglty.io/sunstoneuniversity/Attachments/NewItems/rajwada-palace-1-compressed_20230220101642_0.jpg"
    },
    {
        name: "Patalpani Fall",
        dist: "24.1 KM",
        type: "Nature",
        desc: "A stunning 150-feet waterfall, ideal for trekking and photography.",
        img: "https://cdn-eu.aglty.io/sunstoneuniversity/Attachments/NewItems/patalpani_waterfalls-1-compressed_20230220101706_0.jpg"
    },
    {
        name: "Tincha Waterfall",
        dist: "24.1 KM",
        type: "Nature",
        desc: "A beautiful cascade surrounded by lush greenery, perfect for weekend getaways.",
        img: "https://cdn-eu.aglty.io/sunstoneuniversity/Attachments/NewItems/tincha-fall-1-compressed_20230220101546_0.jpg"
    }
];

// --- MEDIA (SAGE University Indore Real News) ---
export const mediaLinks = [
    { title: "SAGE University Indore hosts 4th Convocation Ceremony — Class of 2024", source: "Shiksha", date: "Jan 2025", link: "https://www.shiksha.com/university/sage-university-indore-71498", desc: "Chief Guest Shri Narendra Singh Tomar and Padma Shri Anup Jalota honor graduates." },
    { title: "SAGE Indore becomes 1st Official Google Campus in Madhya Pradesh", source: "SAGE Official", date: "2024", link: "https://sageuniversity.in", desc: "Empowering students with world-class Google resources and learning tools." },
    { title: "SAGE University hosts IEEE International Conference WCCEST-25", source: "SAGE Official", date: "Sep 2025", link: "https://sageuniversity.in", desc: "Global innovators and researchers gather for cutting-edge tech discussions." },
    { title: "SAGE Indore ranked #48 among Private Universities by India Today", source: "India Today", date: "2025", link: "#", desc: "Consistent recognition for academic excellence and student outcomes." },
    { title: "HR Summit 2024: Preparing Gen-Z for Workforce 2030", source: "SAGE Official", date: "2024", link: "https://sageuniversity.in", desc: "National and international leaders discuss AI, tech, and career opportunities." },
    { title: "Digital Creators Award 2024 hosted at SAGE Indore", source: "SAGE Official", date: "Sep 2024", link: "https://sageuniversity.in", desc: "Celebrating achievements of digital content creators and social media influencers." }
];

// --- FAQ ---
export const faqs = [
    {
        q: "What are the eligibility criteria for the B.Tech program?",
        a: "Passed Class 12th from a recognised board with 50% aggregate in Physics, Chemistry & Maths. SC/ST candidates receive a 45% relaxation."
    },
    {
        q: "Is there any entrance exam?",
        a: "Yes, you must clear the Geeks of Gurukul Qualifier Test (60 mins) covering Verbal Ability, Logical Reasoning, and Quantitative Aptitude."
    },
    {
        q: "What is the fee structure?",
        a: "Tuition Fee is ₹1,30,000 per year. Hostel fees range from ₹50k to ₹70k depending on AC/Non-AC choice. Seat booking fee is ₹10,000."
    },
    {
        q: "Are scholarships available?",
        a: "Yes! Early birds get 10% off (pay by May 31st). Top scorers in the Qualifier Test can get up to 50% merit scholarship."
    },
    {
        q: "Is hostel facility available?",
        a: "Yes, separate hostels exist for boys and girls with AC/Non-AC options, mess facilities, and 24/7 security."
    },
    {
        q: "Is the degree recognized?",
        a: "Absolutely. It is a UGC-recognized, NAAC A+ accredited B.Tech degree from SAGE University Indore — the youngest university in India to receive this grade."
    }
];

// --- TESTIMONIALS ---
export const testimonials = [
    {
        name: "Vikram Patel",
        role: "Full Stack Developer @ TCS",
        pkg: "8 LPA",
        bg: "B.Tech CSE",
        quote: "The practical curriculum at SAGE Indore x GoG prepared me for real-world projects from day one.",
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
        name: "Ananya Sharma",
        role: "Frontend Developer @ Infosys",
        pkg: "6.5 LPA",
        bg: "B.Tech CSE",
        quote: "The React and Node.js modules were exactly what companies look for. Got placed on-campus!",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100"
    }
];

// --- REUSING GOG-WIDE DATA ---
export const studentVlogs = [
    { id: 1, title: "Scope Global Skills University", thumbnail: "https://i.vimeocdn.com/video/2166064082-e43219d29e335b5dc1332f0a52b4c9141c7f41f41f9c202f3d6050b517e2f7ac-d_720x1280?region=us", views: "12K", duration: "0:20", video: "https://player.vimeo.com/video/1199275131?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479" },
    { id: 2, title: "SAGE University Indore", thumbnail: "https://i.vimeocdn.com/video/2166064085-ca09792621731ec35a5a662fc93b9a3b218a978fd8293e257fbdf72423ad8b67-d_720x1280?region=us", views: "22K", duration: "0:16", video: "https://player.vimeo.com/video/1199275133?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479" },
    { id: 3, title: "SAGE University Bhopal", thumbnail: "https://i.vimeocdn.com/video/2166064018-a4b897beaee83a20bb5cec9cce39da2a990935c946a794f7d3a3bc3cd7afd667-d_720x1280?region=us", views: "15K", duration: "0:11", video: "https://player.vimeo.com/video/1199275132?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479" },
    { id: 4, title: "Oriental University", thumbnail: "https://i.vimeocdn.com/video/2166064021-ca51b4f9b0b85baa475c421ad74c8aed7b849818f6d15732a7a58dbaf2458d3a-d_720x1280?region=us", views: "8.5K", duration: "0:25", video: "https://player.vimeo.com/video/1199275129?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479" },
    { id: 5, title: "Gyanveer University", thumbnail: "https://i.vimeocdn.com/video/2166065024-a46d367ece9136c3e391da0615603adf77fd017cf79ad8a72e3ed7d5a86697bf-d_720x1280?region=us", views: "10K", duration: "0:30", video: "https://player.vimeo.com/video/1199276013?badge=0&autopause=0&player_id=0&app_id=58479" },
];

export const alumniSuccess = [
    { name: "Amit Kumar", company: "TCS", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg", role: "Full Stack Dev", package: "8 LPA", image: "/assets/Centurion/students/student-1.jpg", year: "2024" },
    { name: "Sneha Verma", company: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg", role: "Frontend Dev", package: "6.5 LPA", image: "/assets/Centurion/students/student-2.jpg", year: "2024" },
    { name: "Karan Singh", company: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/1280px-Wipro_Primary_Logo_Color_RGB.svg.png", role: "Backend Dev", package: "5.5 LPA", image: "/assets/Centurion/students/student-3.jpg", year: "2023" },
];

export const recruiterTestimonials = [
    {
        name: "Sunny Garg",
        role: "Co-Founder & CEO",
        company: "Crib",
        image: "https://images.yourstory.com/cs/images/undefined/SunnyGargFounderofYourShellsoldtoStanzaLiving-1639976349657.jpg",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX10FVuos4JXU1dzSr56qCdPJoBu8PIHK5Iw&s",
        quote: "The developers from Geeks of Gurukul were ready to tackle projects immediately. Their hands-on approach ensured they seamlessly integrated into our team."
    },
    {
        name: "Rishikesh Gupta",
        role: "Founder",
        company: "Hilfee",
        image: "https://i.postimg.cc/gjfWFqZF/1000195739.jpg",
        logo: "https://static-asset.inc42.com/logo/hilfee.png",
        quote: "Geeks of Gurukul has delivered exceptional graduates who are of top-notch quality."
    }
];

export const careerPathData = [
    { year: 1, role: "Admission", salary: "Step 1", desc: "Join the Elite Cohort" },
    { year: 2, role: "Learning", salary: "Step 2", desc: "Master Frontend & Backend" },
    { year: 3, role: "Practical", salary: "Step 3", desc: "Build Real-World Projects" },
    { year: 4, role: "Internship", salary: "Step 4", desc: "Gain Industry Experience" },
    { year: 5, role: "Placement", salary: "Goal", desc: "Launch Your Dream Career" }
];

export const blogUpdates = [
    { title: "SAGE Indore x GoG announces Full Stack Development Program", category: "Programs", date: "Feb 1, 2026", image: "https://sageuniversity.in/assets/life8sage/itlab/itlab2.jpg", link: "#" },
    { title: "SAGE Indore achieves NAAC A+ — Youngest in India", category: "Achievement", date: "Jan 2025", image: "https://sageuniversity.in/assets/images/banner/new2024/new1w.webp", link: "#" },
];
