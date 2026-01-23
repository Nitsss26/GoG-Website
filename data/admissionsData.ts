import {
    Award, BookOpen, Users, Building,
    GraduationCap, Briefcase, Globe,
    Microscope, Video, Sparkles,
    Home, Wifi, Coffee, Activity, Bus,
    MapPin, Clock, Calendar, Target,
    Brain, Code, Database, Shield, Lock,
    Smartphone, CheckCircle, XCircle,
    UserCheck, Zap, Layout, MonitorPlay,
    FileText, Lightbulb
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
        phone1: "+91 91524 72392",
        person1: "Sachin Gupta",
        phone2: "+91 93371 89115",
        person2: "Raj Kumar Sahoo",
        email: "admin@geeksofgurukul.com",
        whatsapp: "+919152472392"
    }
};

// --- HERO STATS ---
export const heroStats = [
    { value: "2,400+", label: "Students Enrolled" },
    { value: "100%", label: "Placement Support" },
    { value: "40 LPA", label: "Highest Package" },
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
    ]
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
        desc: "60-min online test: Aptitude & Basic Tech.",
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
        labs: ["C++ Programming Lab", "Digital Logic Lab"]
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
        labs: ["DSA in Python Lab", "Statistical Analysis Lab"]
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
        labs: ["ML Algorithms Lab", "SQL & NoSQL Lab"]
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
        labs: ["Neural Networks Lab", "Big Data Analytics Lab"]
    },
    {
        semester: "Semester 5",
        theme: "Advanced AI Specialization",
        subjects: [
            { title: "Natural Language Processing", code: "AM25B501" },
            { title: "Unsupervised Learning", code: "AM25B502" },
            { title: "Cloud Computing for AI", code: "AM25B503" }
        ],
        labs: ["NLP Transformers Lab", "Cloud Deployment Lab"]
    },
    {
        semester: "Semester 6",
        theme: "Applied AI & Ethics",
        subjects: [
            { title: "Computer Vision", code: "AM25B601" },
            { title: "Reinforcement Learning", code: "AM25B602" },
            { title: "AI Ethics & Governance", code: "AM25B603" }
        ],
        labs: ["Computer Vision Lab", "RL Agents Project"]
    },
    {
        semester: "Semester 7",
        theme: "Emerging Tech & Capstone",
        subjects: [
            { title: "Generative AI & LLMs", code: "AM25B701" },
            { title: "Edge AI & IoT", code: "AM25B702" }
        ],
        labs: ["GenAI Fine-tuning Lab", "Major Capstone Project I"]
    },
    {
        semester: "Semester 8",
        theme: "Industry Immersion",
        subjects: [
            { title: "Industry Internship", code: "AM25B801" },
            { title: "Major Capstone Project II", code: "AM25B802" }
        ],
        labs: ["Full Semester Internship", "Startup/Research Project"]
    }
];

// --- COMPARISON ---
export const comparisonData = [
    { feature: "Curriculum", gog: "Industry-Designed (AI/ML First)", others: "Outdated Syllabus" },
    { feature: "Practical Labs", gog: "40% Time in Labs + Live Projects", others: "Mostly Theory" },
    { feature: "Faculty", gog: "IIT/IIM Alumni & Industry Experts", others: "Academic Only" },
    { feature: "Placements", gog: "100% Support till Placed", others: "Limited Support" },
    { feature: "Certifications", gog: "Degree + Industry Certs (AWS/Google)", others: "Degree Only" }
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
        img: "",
        desc: "Specialist in Deep Learning and Generative AI models."
    },
    {
        name: "Dr. Priya Sharma",
        role: "Research Head",
        exp: "15 Years",
        img: "",
        desc: "Published 50+ papers in International Journals on NLP."
    }
];

// --- PLACEMENTS ---
export const placementStats = {
    highest: "16 LPA",
    average: "6.5 LPA",
    companies: ["Amazon", "TCS", "Wipro", "Accenture", "Infosys", "Mindtree", "Capgemini", "IBM"],
    hiringPartners: 200
};

// --- AMENITIES ---
export const amenities = [
    { icon: Home, name: "Modern Hostels", desc: "AC/Non-AC, 3/4 sharing" },
    { icon: Wifi, name: "Smart Campus", desc: "Hi-speed Wi-Fi everywhere" },
    { icon: Activity, name: "Sports Complex", desc: "Cricket, Gym, Courts" },
    { icon: Coffee, name: "Cafeteria", desc: "Hygienic multi-cuisine food" },
    { icon: Bus, name: "Transport", desc: "Safe bus services" },
    { icon: BookOpen, name: "Digital Library", desc: "24/7 Access to Journals" }
];

// --- NEARBY PLACES ---
export const nearbyPlaces = [
    { name: "Vizianagaram Fort", dist: "5 KM", type: "Heritage" },
    { name: "Punyagiri Temple", dist: "25 KM", type: "Spiritual" },
    { name: "Bheemili Beach", dist: "45 KM", type: "Beach" },
    { name: "Visakhapatnam", dist: "50 KM", type: "City Hub" },
    { name: "Araku Valley", dist: "80 KM", type: "Nature" }
];

// --- MEDIA ---
export const mediaLinks = [
    { title: "Drone Unit Inauguration", source: "The Hindu", date: "Jan 2025" },
    { title: "Chip Mfg. Initiative", source: "The Hindu", date: "Aug 2025" },
    { title: "Top Placements 2025", source: "Collegedunia", date: "Sep 2025" }
];
