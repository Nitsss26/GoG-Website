import {
    Award, BookOpen, Users, Building,
    GraduationCap, Briefcase, Globe,
    Microscope, Video, Sparkles,
    Home, Wifi, Coffee, Activity, Bus,
    MapPin, Clock, Calendar, Target,
    Brain, Code, Database, Shield, Lock,
    Smartphone, CheckCircle, XCircle,
    UserCheck, Zap, Layout, MonitorPlay,
    FileText, Lightbulb, Play, Music, Camera, Heart, Dumbbell, Stethoscope, Landmark,
    CreditCard, Building2
} from 'lucide-react';

// --- BASIC INFO ---
export const courseInfo = {
    name: "B.Tech / BCA Programs",
    specialization: "AI-DS, Cyber Security & AI-ML",
    university: "SCOPE Global Skills University",
    universitySub: "Bhopal",
    location: "Bhopal, Madhya Pradesh",
    duration: "3-4 Years",
    mode: "Offline (Campus)",
    seats: 60,
    eligibility: "50% in Class 12th (PCM for B.Tech / Any Stream for BCA)",
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

// --- COURSES (for tab switching) ---
export const courses = [
    { id: "btech-aids", name: "B.Tech AI-DS", duration: "4 Years (8 Semesters)", fee: "₹95,000/Year" },
    { id: "bca-cyber", name: "BCA Cyber Security", duration: "3 Years (6 Semesters)", fee: "₹50,000/Year" },
    { id: "bca-aiml", name: "BCA AI-ML", duration: "3 Years (6 Semesters)", fee: "₹50,000/Year" }
];

// --- UNIVERSITY VISION & MISSION ---
export const universityAbout = {
    vision: `At Scope Global Skills University (SGSU) in Bhopal, we're dedicated to providing "Education with Skill" – a unique approach beyond traditional learning to equip you with practical expertise and in-demand skills. As Central India's first skill-based university, we focus on NEP 2020 and NSQF alignment.`,
    vision2025: `Established in January 2023 by an act of the Madhya Pradesh Assembly, SGSU is part of the AISECT Group, a renowned name in skill-based education for four decades. This legacy of quality and innovation fuels our commitment to becoming India's leading skill-based university.`,
    mission: `We believe in nurturing talent through industry-relevant programs designed in partnership with industry leaders. Our curriculum ensures you learn skills directly applicable to real-world challenges. With expert faculty, innovative learning methodologies, and a focus on employability, we create well-rounded professionals.`,
    history: `We also have a robust career services department that provides students with career guidance, internships, and job placement assistance. At SGSU, we are committed to providing a world-class education with 70% practical training and industry exposure. Our 26-acre campus offers specialized, technology-driven education for the future.`
};

// --- HERO STATS ---
export const heroStats = [
    { value: "#9", label: "Skill Universities in India" },
    { value: "26", label: "Acre Campus" },
    { value: "70%", label: "Practical Training" },
    { value: "UGC", label: "Recognized" }
];

// --- HERO SLIDER IMAGES ---
export const heroImages = [
    "https://www.collegebatch.com/static/clg-gallery/scope-global-skills-university-bhopal-279653.webp",
    "https://images.shiksha.com/mediadata/images/1692887984phpCtW5Rd.jpeg",
    "https://sgsuniversity.ac.in/wp-content/uploads/2024/04/WhatsApp-Image-2024-05-01-at-10.59.42-PM.jpeg"
];

// --- RANKINGS & AWARDS (Verified) ---
export const rankings = [
    {
        title: "Outlook ICARE",
        rank: "#9",
        context: "Skill Universities",
        source: "Outlook ICARE Rankings 2024",
        icon: Award
    },
    {
        title: "Emerging University",
        rank: "Top 10",
        context: "State Private University",
        source: "Outlook Rankings 2025",
        icon: Globe
    },
    {
        title: "UGC Recognized",
        rank: "UGC",
        context: "Section 2(f)",
        source: "University Grants Commission",
        icon: Briefcase
    },
    {
        title: "AICTE Approved",
        rank: "AICTE",
        context: "Technical Programs",
        source: "All India Council for Technical Education",
        icon: BookOpen
    }
];

// --- FEES & SCHOLARSHIPS (Per Course) ---
export const feeStructures: Record<string, {
    qualifierFee: string;
    seatBooking: string;
    tuitionPerYear: string;
    hostelPerYear: string;
    scholarships: { percentage: string; type: string; criteria: string }[];
    emiOptions: { provider: string; amount: string; tenure: string };
}> = {
    "btech-aids": {
        qualifierFee: "₹99",
        seatBooking: "₹5,000",
        tuitionPerYear: "₹95,000",
        hostelPerYear: "₹50,000 - ₹70,000",
        scholarships: [
            { percentage: "10% OFF", type: "Early Bird", criteria: "Pay before May 31st" },
            { percentage: "Up to 50%", type: "Merit Based", criteria: "Top scorers in Qualifier Test" }
        ],
        emiOptions: {
            provider: "GrayQuest / Propelld",
            amount: "₹7,917 / month",
            tenure: "12 Months"
        }
    },
    "bca-cyber": {
        qualifierFee: "₹99",
        seatBooking: "₹5,000",
        tuitionPerYear: "₹50,000",
        hostelPerYear: "₹50,000 - ₹70,000",
        scholarships: [
            { percentage: "10% OFF", type: "Early Bird", criteria: "Pay before May 31st" },
            { percentage: "Up to 50%", type: "Merit Based", criteria: "Top scorers in Qualifier Test" }
        ],
        emiOptions: {
            provider: "GrayQuest / Propelld",
            amount: "₹4,167 / month",
            tenure: "12 Months"
        }
    },
    "bca-aiml": {
        qualifierFee: "₹99",
        seatBooking: "₹5,000",
        tuitionPerYear: "₹50,000",
        hostelPerYear: "₹50,000 - ₹70,000",
        scholarships: [
            { percentage: "10% OFF", type: "Early Bird", criteria: "Pay before May 31st" },
            { percentage: "Up to 50%", type: "Merit Based", criteria: "Top scorers in Qualifier Test" }
        ],
        emiOptions: {
            provider: "GrayQuest / Propelld",
            amount: "₹4,167 / month",
            tenure: "12 Months"
        }
    }
};

// --- ADMISSION PROCESS ---
export const admissionSteps = [
    {
        step: "01",
        title: "Register",
        desc: "Fill form & pay ₹99 for Admission Test.",
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
        desc: "Submit documents & pay ₹5,000 seat booking fee.",
        icon: GraduationCap
    },
    {
        step: "05",
        title: "Start Learning",
        desc: "Join the orientation on Aug 1st 2026.",
        icon: Zap
    }
];

// --- CURRICULUM (Multi-course) ---
export const curricula: Record<string, {
    semester: string;
    theme: string;
    subjects: { title: string; code: string }[];
    labs: string[];
    activities: string[];
    phase: string;
    guidance: string;
}[]> = {
    "btech-aids": [
        {
            semester: "Semester 1",
            theme: "Programming & Mathematics Foundations",
            subjects: [
                { title: "Python Programming", code: "AID101" },
                { title: "Engineering Mathematics I", code: "AID102" },
                { title: "Data Structures Basics", code: "AID103" },
                { title: "Communication Skills", code: "AID104" },
                { title: "Computer Fundamentals", code: "AID105" }
            ],
            labs: ["Python Lab", "Data Structures Lab", "Linux & Shell Scripting Lab"],
            activities: ["Freshers Party", "Ice Breaking Session", "Club Orientation", "Campus Tour"],
            phase: "Foundation",
            guidance: "Orientation & Goal Setting"
        },
        {
            semester: "Semester 2",
            theme: "OOP & Statistical Foundations",
            subjects: [
                { title: "Object-Oriented Programming (Java)", code: "AID201" },
                { title: "Engineering Mathematics II", code: "AID202" },
                { title: "Statistics & Probability", code: "AID203" },
                { title: "Database Management Systems", code: "AID204" },
                { title: "Digital Logic Design", code: "AID205" }
            ],
            labs: ["Java Programming Lab", "DBMS Lab", "Statistics Lab"],
            activities: ["24-Hour Hackathon", "Coding Contest", "Science Fair"],
            phase: "Foundations",
            guidance: "Mentorship Allocation"
        },
        {
            semester: "Semester 3",
            theme: "AI & Data Science Basics",
            subjects: [
                { title: "Introduction to AI", code: "AID301" },
                { title: "Data Science with Python", code: "AID302" },
                { title: "Operating Systems", code: "AID303" },
                { title: "Discrete Mathematics", code: "AID304" },
                { title: "Web Technologies", code: "AID305" }
            ],
            labs: ["AI Basics Lab", "Data Analysis Lab", "Web Development Lab"],
            activities: ["Industrial Visit to IT Park", "Tech Talk by Industry Experts", "Coding Marathon"],
            phase: "Practical Learning",
            guidance: "Live Projects & Labs"
        },
        {
            semester: "Semester 4",
            theme: "Machine Learning & Data Engineering",
            subjects: [
                { title: "Machine Learning", code: "AID401" },
                { title: "Data Visualization & Storytelling", code: "AID402" },
                { title: "Computer Networks", code: "AID403" },
                { title: "Software Engineering", code: "AID404" },
                { title: "Big Data Fundamentals", code: "AID405" }
            ],
            labs: ["ML Model Building Lab", "Tableau/Power BI Lab", "Big Data Lab"],
            activities: ["LIVE INDUSTRY INTERNSHIP (Paid)", "Project Showcase", "Tech Expo"],
            phase: "Industry Exposure",
            guidance: "Internship Guide & Prep"
        },
        {
            semester: "Semester 5",
            theme: "Deep Learning & NLP",
            subjects: [
                { title: "Deep Learning & Neural Networks", code: "AID501" },
                { title: "Natural Language Processing", code: "AID502" },
                { title: "Cloud Computing (AWS/Azure)", code: "AID503" },
                { title: "Information Security", code: "AID504" }
            ],
            labs: ["Deep Learning Lab", "NLP Lab", "Cloud Deployment Lab"],
            activities: ["AI Project Demo Day", "Annual Tech Fest", "Open Source Sprint"],
            phase: "Specialization",
            guidance: "Research Methodology"
        },
        {
            semester: "Semester 6",
            theme: "Advanced AI & Computer Vision",
            subjects: [
                { title: "Computer Vision", code: "AID601" },
                { title: "Reinforcement Learning", code: "AID602" },
                { title: "MLOps & Model Deployment", code: "AID603" },
                { title: "Capstone Project I", code: "AID604" }
            ],
            labs: ["Computer Vision Lab", "Model Deployment Lab", "Capstone Workshop"],
            activities: ["Startup Pitch Day", "Hackathon Finals", "Industry Mentorship Sessions"],
            phase: "Innovation",
            guidance: "Project Mentorship"
        },
        {
            semester: "Semester 7",
            theme: "Specialization & Industry Readiness",
            subjects: [
                { title: "AI in Business Applications", code: "AID701" },
                { title: "Generative AI & LLMs", code: "AID702" },
                { title: "Ethics in AI & Data Privacy", code: "AID703" }
            ],
            labs: ["GenAI Lab", "AI Ethics Workshop", "Portfolio Development"],
            activities: ["Mock Interviews", "Resume Building", "Company Connect Program"],
            phase: "Pre-Placement",
            guidance: "Resume Building & Mock Interviews"
        },
        {
            semester: "Semester 8",
            theme: "Career Launch & Capstone",
            subjects: [
                { title: "Industry Internship", code: "AID801" },
                { title: "Major Capstone Project II", code: "AID802" }
            ],
            labs: ["Final Project Presentation", "Portfolio Development"],
            activities: ["CAMPUS PLACEMENTS", "Farewell Party", "Alumni Connect"],
            phase: "Career Launch",
            guidance: "Final Placement Drive"
        }
    ],
    "bca-cyber": [
        {
            semester: "Semester 1",
            theme: "Computer Science & Networking Basics",
            subjects: [
                { title: "Computer Fundamentals & Office Tools", code: "BCC101" },
                { title: "Programming in C", code: "BCC102" },
                { title: "Mathematics for Computing", code: "BCC103" },
                { title: "Communication Skills", code: "BCC104" },
                { title: "Introduction to Networking", code: "BCC105" }
            ],
            labs: ["C Programming Lab", "Office Automation Lab", "Networking Basics Lab"],
            activities: ["Freshers Party", "Cyber Awareness Session", "Club Orientation"],
            phase: "Foundation",
            guidance: "Orientation & Goal Setting"
        },
        {
            semester: "Semester 2",
            theme: "Data Structures & Operating Systems",
            subjects: [
                { title: "Data Structures using C++", code: "BCC201" },
                { title: "Operating Systems", code: "BCC202" },
                { title: "Database Management Systems", code: "BCC203" },
                { title: "Web Technologies (HTML/CSS/JS)", code: "BCC204" },
                { title: "Discrete Mathematics", code: "BCC205" }
            ],
            labs: ["Data Structures Lab", "DBMS Lab", "Web Development Lab"],
            activities: ["Capture The Flag (CTF) Contest", "Coding Workshop", "Tech Quiz"],
            phase: "Core Learning",
            guidance: "Mentorship Allocation"
        },
        {
            semester: "Semester 3",
            theme: "Network Security & Ethical Hacking",
            subjects: [
                { title: "Network Security Fundamentals", code: "BCC301" },
                { title: "Ethical Hacking & Penetration Testing", code: "BCC302" },
                { title: "Python for Security", code: "BCC303" },
                { title: "Cryptography & Network Security", code: "BCC304" },
                { title: "Linux Administration", code: "BCC305" }
            ],
            labs: ["Ethical Hacking Lab", "Cryptography Lab", "Linux Security Lab"],
            activities: ["Bug Bounty Workshop", "Industrial Visit", "Cyber Security Seminar"],
            phase: "Specialization",
            guidance: "Hands-on Security Labs"
        },
        {
            semester: "Semester 4",
            theme: "Advanced Cyber Security",
            subjects: [
                { title: "Digital Forensics & Incident Response", code: "BCC401" },
                { title: "Cloud Security (AWS/Azure)", code: "BCC402" },
                { title: "Malware Analysis", code: "BCC403" },
                { title: "Cyber Law & Ethics", code: "BCC404" },
                { title: "Software Engineering", code: "BCC405" }
            ],
            labs: ["Digital Forensics Lab", "Cloud Security Lab", "Malware Analysis Lab"],
            activities: ["LIVE INDUSTRY INTERNSHIP", "CTF National Level", "Security Hackathon"],
            phase: "Industry Exposure",
            guidance: "Internship Guide & Prep"
        },
        {
            semester: "Semester 5",
            theme: "SOC Operations & Threat Intelligence",
            subjects: [
                { title: "Security Operations Center (SOC)", code: "BCC501" },
                { title: "Threat Intelligence & Analysis", code: "BCC502" },
                { title: "IoT Security", code: "BCC503" },
                { title: "Capstone Project", code: "BCC504" }
            ],
            labs: ["SOC Simulation Lab", "IoT Security Lab", "Project Workshop"],
            activities: ["Mock Interviews", "Resume Building", "Industry Expert Sessions"],
            phase: "Pre-Placement",
            guidance: "Resume Building & Mock Interviews"
        },
        {
            semester: "Semester 6",
            theme: "Career Launch & Final Project",
            subjects: [
                { title: "Industry Internship", code: "BCC601" },
                { title: "Major Project & Dissertation", code: "BCC602" }
            ],
            labs: ["Final Project Presentation", "Portfolio Development"],
            activities: ["CAMPUS PLACEMENTS", "Farewell Party", "Alumni Connect"],
            phase: "Career Launch",
            guidance: "Final Placement Drive"
        }
    ],
    "bca-aiml": [
        {
            semester: "Semester 1",
            theme: "Programming & Mathematics Foundations",
            subjects: [
                { title: "Computer Fundamentals & Office Tools", code: "BAM101" },
                { title: "Programming in Python", code: "BAM102" },
                { title: "Mathematics for Computing", code: "BAM103" },
                { title: "Communication Skills", code: "BAM104" },
                { title: "Statistics & Probability", code: "BAM105" }
            ],
            labs: ["Python Lab", "Office Automation Lab", "Statistics Lab"],
            activities: ["Freshers Party", "AI Awareness Session", "Club Orientation"],
            phase: "Foundation",
            guidance: "Orientation & Goal Setting"
        },
        {
            semester: "Semester 2",
            theme: "Data Structures & Database Systems",
            subjects: [
                { title: "Data Structures using Python", code: "BAM201" },
                { title: "Database Management Systems", code: "BAM202" },
                { title: "Linear Algebra & Calculus", code: "BAM203" },
                { title: "Web Technologies (HTML/CSS/JS)", code: "BAM204" },
                { title: "Operating Systems", code: "BAM205" }
            ],
            labs: ["Data Structures Lab", "DBMS Lab", "Web Development Lab"],
            activities: ["Coding Workshop", "Data Science Quiz", "Tech Talk"],
            phase: "Core Learning",
            guidance: "Mentorship Allocation"
        },
        {
            semester: "Semester 3",
            theme: "Machine Learning Fundamentals",
            subjects: [
                { title: "Introduction to AI & ML", code: "BAM301" },
                { title: "Data Analysis & Visualization", code: "BAM302" },
                { title: "Algorithms & Problem Solving", code: "BAM303" },
                { title: "R Programming", code: "BAM304" },
                { title: "Software Engineering", code: "BAM305" }
            ],
            labs: ["ML Basics Lab", "Data Visualization Lab (Tableau/Power BI)", "R Programming Lab"],
            activities: ["AI Hackathon", "Industrial Visit", "Data Science Seminar"],
            phase: "Specialization",
            guidance: "Hands-on ML Labs"
        },
        {
            semester: "Semester 4",
            theme: "Deep Learning & NLP",
            subjects: [
                { title: "Deep Learning & Neural Networks", code: "BAM401" },
                { title: "Natural Language Processing", code: "BAM402" },
                { title: "Cloud Computing Basics", code: "BAM403" },
                { title: "Big Data Analytics", code: "BAM404" },
                { title: "Computer Vision Basics", code: "BAM405" }
            ],
            labs: ["Deep Learning Lab", "NLP Lab", "Cloud Lab (AWS/GCP)"],
            activities: ["LIVE INDUSTRY INTERNSHIP", "Project Showcase", "AI Expo"],
            phase: "Industry Exposure",
            guidance: "Internship Guide & Prep"
        },
        {
            semester: "Semester 5",
            theme: "Advanced AI & Generative Models",
            subjects: [
                { title: "Generative AI & Prompt Engineering", code: "BAM501" },
                { title: "Reinforcement Learning", code: "BAM502" },
                { title: "MLOps & Model Deployment", code: "BAM503" },
                { title: "Capstone Project", code: "BAM504" }
            ],
            labs: ["GenAI Lab", "Model Deployment Lab", "Project Workshop"],
            activities: ["Mock Interviews", "Resume Building", "Industry Expert Sessions"],
            phase: "Pre-Placement",
            guidance: "Resume Building & Mock Interviews"
        },
        {
            semester: "Semester 6",
            theme: "Career Launch & Final Project",
            subjects: [
                { title: "Industry Internship", code: "BAM601" },
                { title: "Major Project & Dissertation", code: "BAM602" }
            ],
            labs: ["Final Project Presentation", "Portfolio Development"],
            activities: ["CAMPUS PLACEMENTS", "Farewell Party", "Alumni Connect"],
            phase: "Career Launch",
            guidance: "Final Placement Drive"
        }
    ]
};

// --- COMPARISON ---
export const comparisonData = [
    { feature: "Curriculum", gog: "Industry-Designed (Skill First)", others: "Outdated Syllabus" },
    { feature: "Practical Training", gog: "70% Practical + Live Projects", others: "Mostly Theory" },
    { feature: "Faculty", gog: "Industry Experts & AISECT Mentors", others: "Academic Only" },
    { feature: "Placements", gog: "100% Support till Placed", others: "Limited Support" },
    { feature: "Certifications", gog: "Degree + Industry Certs (AWS/Google)", others: "Degree Only" },
    { feature: "Campus", gog: "Skill Labs & Innovation Centers", others: "Standard Classes" }
];

// --- FACULTY ---
export const faculty = [
    {
        name: "Dr. Amit Sinha",
        role: "Dean of Engineering",
        exp: "18+ Years",
        img: null,
        desc: "Ph.D. in Computer Science. Expert in AI and Data Science with industry experience."
    },
    {
        name: "Prof. Ritu Chaturvedi",
        role: "Head - Cyber Security",
        exp: "12 Years",
        img: null,
        desc: "Specialist in Network Security, Ethical Hacking, and Digital Forensics."
    },
    {
        name: "Dr. Vikash Yadav",
        role: "Research Head - AI/ML",
        exp: "15 Years",
        img: null,
        desc: "Published 40+ papers in International Journals on Machine Learning & AI."
    }
];

// --- PLACEMENTS ---
export const placementStats = {
    highest: "Best",
    average: "Competitive",
    median: "Industry Standard",
    companies: ["TCS", "Infosys", "Wipro", "Cognizant", "Capgemini", "HCL", "Tech Mahindra", "AISECT Group", "IBM", "Accenture"],
    hiringPartners: 200,
    placedPercentage: "85%+"
};

// --- AMENITIES (Icon-only, no images) ---
export const amenities = [
    { icon: Home, name: "Hostels", desc: "Separate AC/Non-AC hostels (3/4 sharing)" },
    { icon: Coffee, name: "Cafeteria & Market", desc: "Subsidized healthy food & daily needs" },
    { icon: Dumbbell, name: "Gymnasiums", desc: "Indoor & open-air fitness centers" },
    { icon: Activity, name: "Sports Complex", desc: "Cricket, Volleyball, Tennis, Basketball" },
    { icon: Stethoscope, name: "Medical Centre", desc: "Health center with doctors on campus" },
    { icon: Wifi, name: "IT Infrastructure", desc: "High-speed Wi-Fi across campus" },
    { icon: Bus, name: "Transport", desc: "Bus services for students & staff" },
    { icon: CreditCard, name: "Banks/ATMs", desc: "On-campus banking facilities" },
    { icon: Building, name: "Auditorium", desc: "For events, festivals & presentations" },
    { icon: BookOpen, name: "Library", desc: "Well-stocked with journals & magazines" }
];

// --- CLUBS ---
export const clubs = [
    { name: "CodeCraft", type: "Tech Club", icon: Code, desc: "For coding enthusiasts and hackathon lovers." },
    { name: "Rangmanch", type: "Drama Club", icon: Video, desc: "Theater, street plays, and dramatic arts." },
    { name: "Lens Masters", type: "Photography", icon: Camera, desc: "Photography, videography & creative arts." },
    { name: "NSS", type: "Community", icon: Heart, desc: "Social service, volunteering & community impact." },
    { name: "Sargam", type: "Music Club", icon: Music, desc: "For vocalists and instrumentalists." }
];

// --- NEARBY PLACES ---
export const nearbyPlaces = [
    {
        name: "Kerwa Dam",
        dist: "9.5 KM",
        type: "Nature",
        desc: "A scenic reservoir perfect for nature walks, trekking, and weekend picnics.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ24cf9m-02TIgD1GP-S8tiB3rMqI-yEcfJDA&s"
    },
    {
        name: "Van Vihar National Park",
        dist: "12.5 KM",
        type: "Wildlife",
        desc: "A national park alongside Upper Lake, home to tigers, leopards, and bears.",
        img: "https://manalitourism.co.in/images/places-to-visit/headers/van-vihar-national-park-manali-header-manali-tourism.jpg.jpg"
    },
    {
        name: "Upper Lake (Bhojtal)",
        dist: "12 KM",
        type: "Heritage",
        desc: "Asia's largest artificial lake, a UNESCO World Heritage nominee, ideal for boating.",
        img: "https://www.shutterstock.com/image-photo/bhopal-madhya-pradesh-india-december-600nw-2085427558.jpg"
    },
    {
        name: "Bhimbetka Rock Shelters",
        dist: "45 KM",
        type: "UNESCO Heritage",
        desc: "UNESCO World Heritage Site with 30,000-year-old cave paintings on Hoshangabad Road.",
        img: "https://thumbs.dreamstime.com/b/bhimbetka-rock-shelters-caves-archaeological-site-central-india-spans-paleolithic-mesolithic-periods-as-253893103.jpg"
    },
    {
        name: "Sanchi Stupa",
        dist: "46 KM",
        type: "UNESCO Heritage",
        desc: "Ancient Buddhist monument, a UNESCO World Heritage Site dating back to 3rd century BCE.",
        img: "https://cdn.britannica.com/36/155836-050-89E7AA9E/Great-Stupa-Sanchi-India.jpg"
    }
];

// --- MEDIA (Verified SGSU News) ---
export const mediaLinks = [
    { title: "SGSU named 'Top University of India' at CSR Award Night 2024", source: "SGSU Official", date: "Apr 2024", link: "https://sgsuniversity.ac.in", desc: "Recognized at the national CSR Award Night for excellence in skill-based education." },
    { title: "Skills Fusion Fest-2024: Chetan Bhagat inspires students at SGSU", source: "SGSU Official", date: "Apr 2024", link: "https://sgsuniversity.ac.in", desc: "Annual fest featuring motivational speaker Chetan Bhagat and innovation competitions." },
    { title: "SGSU ranked #9 in Top Skill Universities — Outlook ICARE 2024", source: "Outlook", date: "2024", link: "https://www.shiksha.com", desc: "Nationally recognized for skill-based education excellence among Indian universities." },
    { title: "Navonmesh 2025: Central India's largest Innovation Carnival at SGSU", source: "SGSU Official", date: "Mar 2025", link: "https://sgsuniversity.ac.in", desc: "Three-day innovation carnival showcasing student projects, startups, and research." },
    { title: "SGSU hosts National Automobile Olympiad Grand Finale with ASDC", source: "SGSU Official", date: "2025", link: "https://sgsuniversity.ac.in", desc: "Students from across India compete in the automobile skills olympiad at SGSU campus." },
    { title: "Mega Open Job Fair 2025 in collaboration with Rojgar Mantra", source: "Tripura Star News", date: "Aug 2025", link: "https://sgsuniversity.ac.in", desc: "Large-scale job fair connecting SGSU students with leading employers for placements." }
];

// --- FAQ ---
export const faqs = [
    {
        q: "What courses does SGSU offer through Geeks of Gurukul?",
        a: "SGSU offers 3 industry-integrated programs: B.Tech in AI & Data Science (4 years), BCA in Cyber Security (3 years), and BCA in AI-ML (3 years)."
    },
    {
        q: "What are the eligibility criteria?",
        a: "For B.Tech: 50% in Class 12th (PCM). For BCA: 50% in Class 12th (any stream). SC/ST candidates receive 5% relaxation."
    },
    {
        q: "What is the fee structure?",
        a: "B.Tech AI-DS: ₹95,000 per year. BCA programs: ₹50,000 per year. One-time registration fee: ₹5,000. Admission test fee: ₹99."
    },
    {
        q: "Is SGSU a recognized university?",
        a: "Yes, SGSU is UGC recognized under Section 2(f) and AICTE approved for technical programs. It is also part of the AISECT Group."
    },
    {
        q: "Are scholarships available?",
        a: "Yes! Early birds get 10% off. Top scorers in the Qualifier Test can receive up to 50% merit scholarship."
    },
    {
        q: "What is unique about SGSU?",
        a: "SGSU is Central India's first skill-based university with 70% practical training, NEP 2020 & NSQF aligned curriculum, and strong industry partnerships."
    }
];

// --- TESTIMONIALS ---
export const testimonials = [
    {
        name: "Rahul Verma",
        role: "AI Developer @ TCS",
        pkg: "5.5 LPA",
        bg: "B.Tech AI-DS",
        quote: "The skill-first approach at SGSU x GoG gave me hands-on experience that directly helped in my placement.",
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
        name: "Priya Kushwaha",
        role: "Security Analyst @ Infosys",
        pkg: "4.5 LPA",
        bg: "BCA Cyber Security",
        quote: "The ethical hacking labs and real-world CTF challenges prepared me for the industry from day one.",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100"
    }
];

// --- REUSING GOG-WIDE DATA ---
export const studentVlogs = [
    { id: 1, title: "Day in Life at SGSU Bhopal", thumbnail: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800", views: "5K", duration: "0:45", video: "#" },
    { id: 2, title: "Campus Tour - SCOPE Global Skills University", thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800", views: "10K", duration: "1:20", video: "#" },
    { id: 3, title: "Skill-Based Learning at GoG", thumbnail: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800", views: "8K", duration: "0:55", video: "#" },
];

export const alumniSuccess = [
    { name: "Amit Kumar", company: "TCS", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg", role: "AI Developer", package: "5.5 LPA", image: "/assets/Centurion/students/student-1.jpg", year: "2024" },
    { name: "Sneha Verma", company: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg", role: "Security Analyst", package: "4.5 LPA", image: "/assets/Centurion/students/student-2.jpg", year: "2024" },
    { name: "Karan Singh", company: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/1280px-Wipro_Primary_Logo_Color_RGB.svg.png", role: "ML Engineer", package: "5 LPA", image: "/assets/Centurion/students/student-3.jpg", year: "2023" },
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
    { year: 2, role: "Learning", salary: "Step 2", desc: "Master Skills & Theory" },
    { year: 3, role: "Practical", salary: "Step 3", desc: "Build Real-World Projects" },
    { year: 4, role: "Internship", salary: "Step 4", desc: "Gain Industry Experience" },
    { year: 5, role: "Placement", salary: "Goal", desc: "Launch Your Dream Career" }
];

export const blogUpdates = [
    { title: "SGSU x GoG announces B.Tech AI-DS & BCA Programs", category: "Programs", date: "Feb 1, 2026", image: "https://sgsuniversity.ac.in/wp-content/uploads/2024/04/WhatsApp-Image-2024-05-01-at-10.59.42-PM.jpeg", link: "#" },
    { title: "SGSU ranked #9 in Skill Universities — Outlook ICARE 2024", category: "Achievement", date: "2024", image: "https://www.collegebatch.com/static/clg-gallery/scope-global-skills-university-bhopal-279653.webp", link: "#" },
];
