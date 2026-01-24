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
    specialization: "Artificial Intelligence & Machine Learning",
    university: "Centurion University",
    universitySub: "of Technology and Management",
    location: "Vizianagaram, Andhra Pradesh",
    duration: "4 Years",
    mode: "Offline (Campus)",
    seats: 120,
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
    vision: `A globally accredited human resource center of excellence catalyzing “sustainable livelihoods” in the “less developed markets across the globe”.`,
    vision2025: `100,000 to be skilled annually. To be achieved through institutional approach to skill development, excellence in pedagogy, and innovation in delivery.`,
    mission: `Provision of quality, globally accredited academic programmes in technology and management. Provision of globally accredited employability training for less endowed segments of the population. Promotion of entrepreneurial culture and enterprise in the target areas.`,
    history: `Centurion University of Technology and Management (CUTM) is a pioneer in skill-integrated higher education. Recognized by UNESCO and awarded NAAC 'A' Grade, the Vizianagaram campus is designed to foster innovation in AI, Robotics, and IoT.`
};

// --- HERO STATS ---
export const heroStats = [
    { value: "36 LPA", label: "Highest Package" },
    { value: "100%", label: "Placement Support" },
    { value: "240K+", label: "Students Enrolled" },
    { value: "NAAC 'A'", label: "Accredited University" }
];

// --- RANKINGS & AWARDS ---
export const rankings = [
    {
        title: "World University Rankings 2026",
        rank: "98th",
        context: "in India",
        source: "Times Higher Education",
        icon: Globe
    },
    {
        title: "Interdisciplinary Science",
        rank: "48th",
        context: "in India",
        source: "THE Rankings 2025",
        icon: Microscope
    },
    {
        title: "Global Impact",
        rank: "1501+",
        context: "Worldwide",
        source: "THE World Rankings",
        icon: Globe
    },
    {
        title: "Accreditation",
        rank: "Grade 'A'",
        context: "NAAC",
        source: "Govt. of India",
        icon: Award
    }
];

// --- FEES & SCHOLARSHIPS ---
export const feeStructure = {
    qualifierFee: "₹99",
    seatBooking: "₹10,000",
    tuitionPerYear: "₹1,25,000",
    hostelPerYear: "₹60,000 - ₹80,000",
    scholarships: [
        { percentage: "10% OFF", type: "Early Bird", criteria: "Pay before May 31st" },
        { percentage: "Up to 50%", type: "Merit Based", criteria: "Top scorers in Qualifier Test" }
    ],
    emiOptions: {
        provider: "GrayQuest / Propelld",
        amount: "₹12,000 / month",
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

// --- CURRICULUM ---
export const curriculum = [
    {
        semester: "Semester 1",
        theme: "Foundations of Computing",
        subjects: [
            { title: "Intro to AI & ML", code: "AM25B101" },
            { title: "Programming in C++", code: "AM25B102" },
            { title: "Engineering Mathematics I", code: "AM25B103" },
            { title: "Digital Logic Design", code: "AM25B104" }
        ],
        labs: ["Python Basics for AI/ML", "C Programming Lab"]
    },
    {
        semester: "Semester 2",
        theme: "Data Structures & Core Python",
        subjects: [
            { title: "Data Structures & Algorithms", code: "AM25B201" },
            { title: "Advanced Python for AI", code: "AM25B202" },
            { title: "Probability & Statistics", code: "AM25B203" },
            { title: "Computer Organization", code: "AM25B204" }
        ],
        labs: ["Matrix Ops in Python", "Advanced Python Lab"]
    },
    {
        semester: "Semester 3",
        theme: "Machine Learning Fundamentals",
        subjects: [
            { title: "Supervised Learning", code: "AM25B301" },
            { title: "Database Mgmt Systems", code: "AM25B302" },
            { title: "Operating Systems", code: "AM25B303" },
            { title: "Exploratory Data Analysis", code: "AM25B304" }
        ],
        labs: ["DSA Lab", "Data Cleaning Pipelines"]
    },
    {
        semester: "Semester 4",
        theme: "Deep Learning & Neural Networks",
        subjects: [
            { title: "Deep Learning with PyTorch", code: "AM25B401" },
            { title: "Computer Networks", code: "AM25B402" },
            { title: "Software Engineering", code: "AM25B403" },
            { title: "Big Data Technologies", code: "AM25B404" }
        ],
        labs: ["Regression/Classification Lab", "Neural Networks Lab"]
    },
    {
        semester: "Semester 5",
        theme: "Advanced AI Specialization",
        subjects: [
            { title: "Natural Language Processing", code: "AM25B501" },
            { title: "Unsupervised Learning", code: "AM25B502" },
            { title: "Cloud Computing for AI", code: "AM25B503" }
        ],
        labs: ["NLP with Transformers", "Clustering & Dim. Reduction"]
    },
    {
        semester: "Semester 6",
        theme: "Applied AI & Ethics",
        subjects: [
            { title: "Computer Vision", code: "AM25B601" },
            { title: "Reinforcement Learning", code: "AM25B602" },
            { title: "AI Ethics & Governance", code: "AM25B603" }
        ],
        labs: ["RL Agents Workshop", "Big Data Pipelines"]
    },
    {
        semester: "Semester 7",
        theme: "Emerging Tech & Capstone",
        subjects: [
            { title: "Generative AI & LLMs", code: "AM25B701" },
            { title: "Edge AI & IoT", code: "AM25B702" }
        ],
        labs: ["IoT Deployment", "Ethical AI Audit"]
    },
    {
        semester: "Semester 8",
        theme: "Industry Immersion",
        subjects: [
            { title: "Industry Internship", code: "AM25B801" },
            { title: "Major Capstone Project II", code: "AM25B802" }
        ],
        labs: ["GenAI Model Fine-tuning", "Final Project"]
    }
];

// --- COMPARISON ---
export const comparisonData = [
    { feature: "Curriculum", gog: "Industry-Designed (AI/ML First)", others: "Outdated Syllabus" },
    { feature: "Practical Labs", gog: "40% Time in Labs + Live Projects", others: "Mostly Theory" },
    { feature: "Faculty", gog: "IIT Alumni & Industry Experts", others: "Academic Only" },
    { feature: "Placements", gog: "100% Support till Placed", others: "Limited Support" },
    { feature: "Certifications", gog: "Degree + Industry Certs (AWS/Google)", others: "Degree Only" },
    { feature: "Campus Immersion", gog: "Product Labs & Hackathons", others: "Standard Classes" }
];

// --- FACULTY ---
export const faculty = [
    {
        name: "Dr. Anirban Choudhury",
        role: "Dean of School of Engineering",
        exp: "20+ Years",
        img: "https://cutmap.ac.in/wp-content/uploads/2021/08/Dr.-Anirban-Choudhury.jpg",
        desc: "Ph.D. in Computer Science. Expert in Distributed Systems."
    },
    {
        name: "Prof. Rajesh Kumar",
        role: "AI Lead Instructor",
        exp: "Ex-Microsoft, 12 Years",
        img: null,
        desc: "Specialist in Deep Learning and Generative AI models."
    },
    {
        name: "Dr. Priya Sharma",
        role: "Research Head",
        exp: "15 Years",
        img: null,
        desc: "Published 50+ papers in International Journals on NLP."
    }
];

// --- PLACEMENTS ---
export const placementStats = {
    highest: "36 LPA",
    average: "6.5 LPA",
    median: "5.5 LPA",
    companies: ["Google", "Microsoft", "Amazon", "Accenture", "Infosys", "Mindtree", "Capgemini", "IBM", "Optum", "HCL", "TCS", "Wipro",],
    hiringPartners: 200,
    placedPercentage: "94%"
};

// --- AMENITIES ---
export const amenities = [
    { icon: Home, name: "Hostels", desc: "Separate AC/Non-AC hostels (3/4 sharing)" },
    { icon: Coffee, name: "Cafeteria & Market", desc: "Subsidized healthy food & daily needs" },
    { icon: Dumbbell, name: "Gymnasiums", desc: "Indoor & open-air fitness centers" },
    { icon: Activity, name: "Sports Complex", desc: "Cricket, Volleyball, Tennis, Basketball" },
    { icon: Stethoscope, name: "Medical Centre", desc: "Health center with doctors on campus" },
    { icon: Wifi, name: "IT Infrastructure", desc: "High-speed Wi-Fi across campus" },
    { icon: Bus, name: "Transport", desc: "Bus services for students & staff" },
    { icon: Landmark, name: "Banks/ATMs", desc: "On-campus banking facilities" },
    { icon: Building, name: "Auditorium", desc: "For events, festivals & presentations" },
    { icon: BookOpen, name: "Library", desc: "Well-stocked with journals & magazines" }
];

// --- CLUBS ---
export const clubs = [
    { name: "Illuminati", type: "Science & Tech", icon: Microscope, desc: "For innovation enthusiasts and tech geeks." },
    { name: "Act Attack", type: "Drama Club", icon: Video, desc: "Theater, street plays, and dramatic arts." },
    { name: "Photocharonicles", type: "Design", icon: Camera, desc: "Photography, videography & creative arts." },
    { name: "NSS", type: "Community", icon: Heart, desc: "Social service, volunteering & community impact." },
    { name: "Music Club", type: "Arts", icon: Music, desc: "For vocalists and instrumentalists." }
];

// --- NEARBY PLACES ---
export const nearbyPlaces = [
    {
        name: "Vizianagaram Fort",
        dist: "5 KM",
        type: "Heritage",
        desc: "Historic fort with Goddess Lakshmi & Lord Hanuman temples.",
        img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=800" // Reliable Fort Image
    },
    {
        name: "Punyagiri Temple",
        dist: "25 KM",
        type: "Spiritual",
        desc: "Ancient Shiva temple with a naturally bathing lingam.",
        img: "https://tripxl.com/blog/wp-content/uploads/2024/08/A-temple-in-Andhra-Pradesh-OG-Photo.jpg" // Verified Temple Image
    },
    {
        name: "Thatipudi Reservoir",
        dist: "15 KM",
        type: "Nature",
        desc: "Picturesque water body in the hills, great for photos.",
        img: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=800" // Reliable Nature/Lake Image
    },
    {
        name: "Bheemili Beach",
        dist: "45 KM",
        type: "Adventure",
        desc: "Scenic historic beach near Vizianagaram.",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800" // Beach
    },
    {
        name: "Lambasingi",
        dist: "60 KM",
        type: "Nature",
        desc: "Kashmir of Andhra Pradesh with misty valleys.",
        img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800" // Misty Valley
    }
];

// --- MEDIA ---
export const mediaLinks = [
    { title: "Drone Mfg Unit Inauguration", source: "The Hindu", date: "Jan 2025", link: "#", desc: "Union Minister inaugurates unit." },
    { title: "Semiconductor Partnership", source: "The Hindu", date: "June 2025", link: "#", desc: "Partnership with Marquee Semiconductors." },
    { title: "Chip Mfg Initiative", source: "The Hindu", date: "Aug 2025", link: "#", desc: "Plans for chip manufacturing unit." },
    { title: "Highest Package 16 LPA", source: "Collegedunia", date: "Sept 2025", link: "#", desc: "2025 Placement Report highlights." },
    { title: "Healthcare Education", source: "The Hindu", date: "July 2025", link: "#", desc: "Chancellor emphasizes upskilling." }
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
        a: "Tuition Fee is ₹1,25,000 per year. Hostel fees range from ₹60k to ₹80k depending on AC/Non-AC choice. Seat booking fee is ₹10,000."
    },
    {
        q: "Are scholarships available?",
        a: "Yes! Early birds get 10% off (pay by May 31st). Top scorers in the Qualifier Test can get up to 50% merit scholarship."
    },
    {
        q: "Is hostel facility available?",
        a: "Yes, separate hostels exist for boys and girls with AC/Non-AC options (3/4 sharing), mess facilities, and 24/7 security."
    },
    {
        q: "Is the degree recognized?",
        a: "Absolutely. It is a UGC-recognized B.Tech degree from Centurion University (NAAC 'A')."
    }
];

// --- TESTIMONIALS ---
export const testimonials = [
    {
        name: "Surya Vamsi",
        role: "Software Engineer @ Amazon",
        pkg: "36 LPA",
        bg: "Mechanical Engg.",
        quote: "I was from a non-IT background. The 9AM-9PM lab sessions changed my life.",
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
        name: "Priya Singh",
        role: "Data Scientist @ Wipro",
        pkg: "9 LPA",
        bg: "B.Tech CSE",
        quote: "The curriculum is exactly what the industry asks for. No fluff, just skills.",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100"
    }
];

// --- NEW DATA WITH VALIDATED IMAGES ---

export const studentVlogs = [
    { id: 1, title: "A Day in Life at GOG", thumbnail: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800", views: "12K", duration: "4:20" },
    { id: 2, title: "Hackathon Highlights 2024", thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800", views: "8.5K", duration: "3:10" },
    { id: 3, title: "Hostel & Food Tour", thumbnail: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800", views: "15K", duration: "5:45" },
    { id: 4, title: "My Internship at Amazon", thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800", views: "22K", duration: "6:00" },
];

export const alumniSuccess = [
    { name: "Rahul Sharma", company: "Google", role: "SDE II", package: "45 LPA", image: "/assets/Centurion/students/student-1.jpg", year: "2023" },
    { name: "Priya Patel", company: "Microsoft", role: "Cloud Engineer", package: "42 LPA", image: "/assets/Centurion/students/student-2.jpg", year: "2023" },
    { name: "Amit Kumar", company: "Amazon", role: "SDE I", package: "38 LPA", image: "/assets/Centurion/students/student-3.jpg", year: "2024" },
    { name: "Varun Gupta", company: "Atlassian", role: "Product Manager", package: "36 LPA", image: "/assets/Centurion/students/student-4.jpg", year: "2022" },
];

export const recruiterTestimonials = [
    {
        name: "Anjali Singh",
        role: "HR Director",
        company: "Microsoft",
        logo: "https://logo.clearbit.com/microsoft.com",
        quote: "GoG graduates have an exceptional grasp of practical coding distinct from typical freshers. They are project-ready from Day 1."
    },
    {
        name: "Vikram Malhotra",
        role: "Talent Acquisition",
        company: "Amazon",
        logo: "https://logo.clearbit.com/amazon.com",
        quote: "We've hired 15+ students from Gurukul this year. Their problem-solving skills in DSA and System Design are top-notch."
    },
    {
        name: "David Chen",
        role: "Engineering Lead",
        company: "Google",
        logo: "https://logo.clearbit.com/google.com",
        quote: "The curriculum at GoG is perfectly aligned with what we look for. It's rare to find students who know standard dev practices so well."
    }
];

export const careerPathData = [
    { year: 1, role: "Admission", salary: "Step 1", desc: "Join the Elite Cohort" },
    { year: 2, role: "Learning", salary: "Step 2", desc: "Master Core CS & Full Stack" },
    { year: 3, role: "Practical", salary: "Step 3", desc: "Build Real-World Projects" },
    { year: 4, role: "Internship", salary: "Step 4", desc: "Gain Industry Experience" },
    { year: 5, role: "Placement", salary: "Goal", desc: "Launch Your Dream Career" }
];

export const blogUpdates = [
    { title: "GoG Students Win Smart India Hackathon 2024 in Mumbai", category: "Achievement", date: "2 days ago", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400" },
    { title: "Placement Report: Avg. Package hits 7.2 LPA", category: "Placements", date: "1 week ago", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=400" },
    { title: "New AI/ML Lab Inaugurated by IITian & Industry Experts", category: "Campus", date: "2 weeks ago", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400" }
];
