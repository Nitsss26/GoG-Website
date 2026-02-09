import {
    Award, BookOpen, Users, Building,
    GraduationCap, Briefcase, Globe,
    Microscope, Video, Sparkles,
    Home, Wifi, Coffee, Activity, Bus,
    MapPin, Clock, Calendar, Target,
    Brain, Code, Database, Shield, Lock,
    Smartphone, CheckCircle, XCircle,
    UserCheck, Zap, Layout, MonitorPlay,
    FileText, Lightbulb, Play, Music, Camera, Heart, Dumbbell, Stethoscope, Landmark
} from 'lucide-react';

// --- BASIC INFO ---
export const courseInfo = {
    name: "B.Tech in Computer Science & Engineering",
    specialization: "Full Stack Development",
    university: "SAGE University",
    universitySub: "Bhopal",
    location: "Bhopal, Madhya Pradesh",
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
    vision: `Grooming young minds to become Entrepreneurs with ethical values of life. This is why we are consistently ranked No.1.`,
    vision2025: `Empowering students through industry-aligned education, state-of-the-art infrastructure, and a vibrant campus environment.`,
    mission: `SAGE University Bhopal, proudly recognized as the best private university in Bhopal, Madhya Pradesh, India, is the symbol of academic brilliance, innovation, and holistic development. Established in 2020, the university builds on more than 40 years of expertise in education.`,
    history: `Under the visionary leadership of Er. Sanjeev Agrawal, the university reflects the ethos of SAGE—Sanjeev Agrawal Global Educational. With the proven track record of 2500+ placements, 200+ industry visits, 100+ MOUs, 1500+ research papers, and 525+ company visits, SUB is committed to redefining education through student-oriented learning.`
};

// --- HERO STATS ---
export const heroStats = [
    { value: "50+", label: "State of Art Labs" },
    { value: "75+", label: "Programs Offered" },
    { value: "50+", label: "Smart Classrooms" },
    { value: "1:20", label: "Faculty Ratio" }
];

// --- HERO SLIDER IMAGES ---
export const heroImages = [
    "https://sageuniversity.edu.in/assets/images/banner/Homepage-banner-SEE.webp",
    "https://sageuniversity.edu.in/assets/imgs/hostel.webp",
    "https://spiderimg.amarujala.com/assets/images/2020/06/27/750x506/sage-university_1593237922.jpeg"
];

// --- RANKINGS & AWARDS ---
export const rankings = [
    {
        title: "Best Private University",
        rank: "#1",
        context: "in Central India",
        source: "Education World Rankings",
        icon: Globe
    },
    {
        title: "Industry Partnerships",
        rank: "100+",
        context: "MOUs Signed",
        source: "Corporate Collaborations",
        icon: Briefcase
    },
    {
        title: "Research Excellence",
        rank: "1500+",
        context: "Papers Published",
        source: "Academic Research",
        icon: Microscope
    },
    {
        title: "Accreditation",
        rank: "UGC",
        context: "Approved",
        source: "Govt. of India",
        icon: Award
    }
];

// --- FEES & SCHOLARSHIPS ---
export const feeStructure = {
    qualifierFee: "₹99",
    seatBooking: "₹10,000",
    tuitionPerYear: "₹1,00,000",
    hostelPerYear: "₹50,000 - ₹70,000",
    scholarships: [
        { percentage: "10% OFF", type: "Early Bird", criteria: "Pay before May 31st" },
        { percentage: "Up to 50%", type: "Merit Based", criteria: "Top scorers in Qualifier Test" }
    ],
    emiOptions: {
        provider: "GrayQuest / Propelld",
        amount: "₹10,000 / month",
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

// --- CURRICULUM (8 Semesters - Full Stack Development) ---
export const curriculum = [
    {
        semester: "Semester 1",
        theme: "Web Fundamentals",
        subjects: [
            { title: "HTML5 & CSS3 Mastery", code: "FS25B101" },
            { title: "JavaScript Fundamentals", code: "FS25B102" },
            { title: "Engineering Mathematics I", code: "FS25B103" },
            { title: "Git & Version Control", code: "FS25B104" }
        ],
        labs: ["Web Design Lab", "JavaScript Basics Lab"],
        activities: ["Freshers Party", "Ice Breaking Session", "Club Orientation"],
        phase: "Admission Phase",
        guidance: "Orientation & Goal Setting"
    },
    {
        semester: "Semester 2",
        theme: "Frontend Mastery",
        subjects: [
            { title: "React.js Fundamentals", code: "FS25B201" },
            { title: "Responsive Web Design", code: "FS25B202" },
            { title: "UI/UX Design Principles", code: "FS25B203" },
            { title: "Data Structures in JS", code: "FS25B204" }
        ],
        labs: ["React Component Lab", "CSS Frameworks Lab"],
        activities: ["24-Hour Hackathon", "UI Design Contest", "Gaming Night"],
        phase: "Foundations",
        guidance: "Mentorship Allocation"
    },
    {
        semester: "Semester 3",
        theme: "Backend Foundations",
        subjects: [
            { title: "Node.js & Express.js", code: "FS25B301" },
            { title: "SQL & Database Design", code: "FS25B302" },
            { title: "REST API Development", code: "FS25B303" },
            { title: "Operating Systems", code: "FS25B304" }
        ],
        labs: ["API Development Lab", "Database Design Lab"],
        activities: ["Industrial Visit to Tech Park", "Tech Talk by Industry Experts"],
        phase: "Practical Learning",
        guidance: "Live Projects & Labs"
    },
    {
        semester: "Semester 4",
        theme: "Advanced Backend & Cloud",
        subjects: [
            { title: "MongoDB & NoSQL", code: "FS25B401" },
            { title: "Authentication & Security", code: "FS25B402" },
            { title: "AWS Cloud Fundamentals", code: "FS25B403" },
            { title: "Software Engineering", code: "FS25B404" }
        ],
        labs: ["Cloud Deployment Lab", "Security Testing Lab"],
        activities: ["LIVE INDUSTRY INTERNSHIP (Paid)", "Project Showcase"],
        phase: "Industry Exposure",
        guidance: "Internship Guide & Prep"
    },
    {
        semester: "Semester 5",
        theme: "DevOps & Testing",
        subjects: [
            { title: "CI/CD Pipelines", code: "FS25B501" },
            { title: "Docker & Containerization", code: "FS25B502" },
            { title: "Testing (Jest/Mocha)", code: "FS25B503" }
        ],
        labs: ["DevOps Pipeline Lab", "Automated Testing Lab"],
        activities: ["Deployment Workshop", "Annual Tech Fest", "Open Source Contribution"],
        phase: "Specialization",
        guidance: "Research Methodology"
    },
    {
        semester: "Semester 6",
        theme: "Full Stack Projects",
        subjects: [
            { title: "GraphQL & Advanced APIs", code: "FS25B601" },
            { title: "Microservices Architecture", code: "FS25B602" },
            { title: "Capstone Project I", code: "FS25B603" }
        ],
        labs: ["Microservices Lab", "Full Stack Integration Lab"],
        activities: ["Startup Pitch Day", "Hackathon Finals"],
        phase: "Innovation",
        guidance: "Project Mentorship"
    },
    {
        semester: "Semester 7",
        theme: "Industry Specialization",
        subjects: [
            { title: "React Native (Mobile Dev)", code: "FS25B701" },
            { title: "Performance Optimization", code: "FS25B702" }
        ],
        labs: ["Mobile App Development Lab", "Performance Testing Lab"],
        activities: ["Mock Interviews", "Resume Building", "Company Connect"],
        phase: "Pre-Placement",
        guidance: "Resume Building & Mock Interviews"
    },
    {
        semester: "Semester 8",
        theme: "Career Launch",
        subjects: [
            { title: "Industry Internship", code: "FS25B801" },
            { title: "Major Capstone Project II", code: "FS25B802" }
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
        name: "Dr. Amit Sharma",
        role: "Dean of Engineering",
        exp: "18+ Years",
        img: null,
        desc: "Ph.D. in Computer Science. Expert in Web Technologies and Cloud Computing."
    },
    {
        name: "Prof. Neha Gupta",
        role: "Full Stack Lead Instructor",
        exp: "Ex-TCS, 10 Years",
        img: null,
        desc: "Specialist in MERN Stack and Modern JavaScript frameworks."
    },
    {
        name: "Dr. Rajesh Verma",
        role: "Research Head",
        exp: "15 Years",
        img: null,
        desc: "Published 40+ papers in International Journals on Software Engineering."
    }
];

// --- PLACEMENTS ---
export const placementStats = {
    highest: "HIGH",
    average: "BEST",
    median: "4.5 LPA",
    companies: ["Infosys", "TCS", "Wipro", "Cognizant", "Capgemini", "HCL", "Tech Mahindra", "Mindtree", "IBM", "Accenture"],
    hiringPartners: 525,
    placedPercentage: "92%"
};

// --- AMENITIES (Using User's Campus Images) ---
export const amenities = [
    { icon: Home, name: "Hostels", desc: "Separate AC/Non-AC hostels for boys and girls", image: "https://sageuniversity.edu.in/assets/imgs/hostel.webp" },
    { icon: Bus, name: "Transport", desc: "Bus services covering all major routes", image: "https://sageuniversity.edu.in/assets/imgs/bus.webp" },
    { icon: Layout, name: "Design Studio", desc: "Modern design and drawing studio", image: "https://sageuniversity.edu.in/assets/imgs/design-drawing-studio.webp" },
    { icon: BookOpen, name: "Cafeteria", desc: "Spacious cafeteria with healthy food options", image: "https://sageuniversity.edu.in/assets/imgs/CAFETERIA.webp" },
    { icon: Coffee, name: "Cafeteria", desc: "Spacious cafeteria with healthy food options", image: "https://sageuniversity.edu.in/assets/imgs/CAFETERIA.webp" },
    { icon: Microscope, name: "Laboratory", desc: "State-of-the-art science laboratories", image: "https://sageuniversity.edu.in/assets/imgs/Laboratory.webp" },
    { icon: MonitorPlay, name: "Computer Lab", desc: "50+ smart classrooms with latest tech", image: "https://sageuniversity.edu.in/assets/imgs/computer-lab.webp" },
    { icon: Building, name: "Auditorium", desc: "Modern auditorium for events and seminars", image: "https://sageuniversity.edu.in/assets/imgs/adu.webp" }
];

// --- CLUBS ---
export const clubs = [
    { name: "CodeCraft", type: "Tech Club", icon: Code, desc: "For coding enthusiasts and hackathon lovers." },
    { name: "Rangmanch", type: "Drama Club", icon: Video, desc: "Theater, street plays, and dramatic arts." },
    { name: "Lens Masters", type: "Photography", icon: Camera, desc: "Photography, videography & creative arts." },
    { name: "NSS", type: "Community", icon: Heart, desc: "Social service, volunteering & community impact." },
    { name: "Sargam", type: "Music Club", icon: Music, desc: "For vocalists and instrumentalists." }
];

// --- NEARBY PLACES (Weekend Getaways Near Bhopal) ---
export const nearbyPlaces = [
    {
        name: "Sanchi Stupa",
        dist: "46 KM",
        type: "Heritage",
        desc: "UNESCO World Heritage Site with ancient Buddhist monuments dating to 3rd century BCE.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Sanchi_Stupa_from_the_Southern_gateway%2C_Stupa_No._1.jpg/1280px-Sanchi_Stupa_from_the_Southern_gateway%2C_Stupa_No._1.jpg"
    },
    {
        name: "Bhimbetka Caves",
        dist: "45 KM",
        type: "Heritage",
        desc: "UNESCO site with prehistoric rock art dating back 30,000 years.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Rock_Shelter_15%2C_Bhimbetka_02.jpg/1280px-Rock_Shelter_15%2C_Bhimbetka_02.jpg"
    },
    {
        name: "Upper Lake (Bada Talab)",
        dist: "In City",
        type: "Nature",
        desc: "Asia's largest artificial lake, perfect for boating and sunset views.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Upper_Lake%2C_Bhopal%2C_India.jpg/1280px-Upper_Lake%2C_Bhopal%2C_India.jpg"
    },
    {
        name: "Bhojpur Temple",
        dist: "30 KM",
        type: "Spiritual",
        desc: "Ancient Shiva temple with one of the largest Shivlingas in India.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Bhojeshwar_Temple_2.jpg/1280px-Bhojeshwar_Temple_2.jpg"
    },
    {
        name: "Pachmarhi",
        dist: "194 KM",
        type: "Hill Station",
        desc: "Queen of Satpura - Madhya Pradesh's only hill station with waterfalls.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Bee_Falls_Pachmarhi.jpg/1280px-Bee_Falls_Pachmarhi.jpg"
    }
];

// --- MEDIA (Translated from Hindi) ---
export const mediaLinks = [
    { title: "SAGE University hosts 88th National Billiards & Snooker Championship", source: "Dainik Bhaskar", date: "2025", link: "#", desc: "Sports Minister inaugurates the championship at SAGE Bhopal." },
    { title: "Er. Sanjeev Agrawal receives Building India Award", source: "News18", date: "2025", link: "#", desc: "Union Minister Nitin Gadkari honors SAGE CMD for nation building." },
    { title: "Forbes India features SAGE Group CMD", source: "Forbes India", date: "2024", link: "#", desc: "Cover story on Er. Sanjeev Agrawal's contribution to education." },
    { title: "SAGE ties up with Harvard Business School", source: "Business Standard", date: "2024", link: "#", desc: "Partnership to deliver world-class learning experience." },
    { title: "SAGE emerges as best private university in Central India", source: "India Today", date: "2024", link: "#", desc: "SAGE University recognized for academic excellence." },
    { title: "SAGE University: Providing Industry-ready courses", source: "Economic Times", date: "2024", link: "#", desc: "Bridging the gap between industries and academia." }
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
        a: "Tuition Fee is ₹1,00,000 per year. Hostel fees range from ₹50k to ₹70k depending on AC/Non-AC choice. Seat booking fee is ₹10,000."
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
        a: "Absolutely. It is a UGC-recognized B.Tech degree from SAGE University Bhopal."
    }
];

// --- TESTIMONIALS ---
export const testimonials = [
    {
        name: "Rahul Sharma",
        role: "Full Stack Developer @ TCS",
        pkg: "8 LPA",
        bg: "B.Tech CSE",
        quote: "The practical curriculum at SAGE x GoG prepared me for real-world projects from day one.",
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
        name: "Priya Patel",
        role: "Frontend Developer @ Infosys",
        pkg: "6 LPA",
        bg: "B.Tech CSE",
        quote: "The React and Node.js modules were exactly what companies look for. Got placed on-campus!",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100"
    }
];

// --- REUSING GOG-WIDE DATA ---
export const studentVlogs = [
    { id: 1, title: "Day in Life at SAGE Bhopal", thumbnail: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800", views: "8K", duration: "0:45", video: "#" },
    { id: 2, title: "Campus Tour - SAGE University", thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800", views: "15K", duration: "1:20", video: "#" },
    { id: 3, title: "Full Stack Journey at GoG", thumbnail: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800", views: "12K", duration: "0:55", video: "#" },
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
    { title: "SAGE x GoG announces Full Stack Development Program", category: "Programs", date: "Feb 1, 2026", image: "https://sageuniversity.edu.in/assets/imgs/computer-lab.webp", link: "#" },
    { title: "Harvard Business School partners with SAGE University", category: "Partnerships", date: "Jan 15, 2026", image: "https://sageuniversity.edu.in/assets/imgs/adu.webp", link: "#" },
];
