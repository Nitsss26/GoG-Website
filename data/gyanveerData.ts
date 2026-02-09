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
    name: "B.Tech in Computer Science Engineering ( AI-ML )",
    specialization: "AI & ML",
    university: "Gyanveer University",
    universitySub: "Sagar",
    location: "Sagar, Madhya Pradesh",
    duration: "4 Years",
    mode: "Offline (Campus)",
    seats: 60,
    eligibility: "50% in Class 12th (PCM)",
    eligibilityNote: "SC/ST candidates: 45%",
    ageLimit: "17-25 Years",
    startDate: "01 August 2026",
    deadline: "30 June 2026",
    contact: {
        phone1: "91524 72392",
        person1: "Admissions Head",
        phone2: "93371 89115",
        person2: "Counsellor",
        email: "admin@geeksofgurukul.com",
        whatsapp: "+919152472392"
    }
};

// --- UNIVERSITY VISION & MISSION ---
export const universityAbout = {
    vision: `GYANVEER UNIVERSITY GYANVEER UNIVERSITY aspires to be one of the most vibrant, dynamic, universities of India. University will actively promote and preserve moral values, ethics in higher education along with focus on high quality teaching across disciplines with significant contribution to research.`,
    vision2025: `Impart skill based and industry ready education for the students. To create not only employment ready work forces but create entrepreneurs and leaders for the society.`,
    mission: `To reach at the top slot among education providers not only in Central India but throughout India and globally by developing and providing best infrastructure, trained and qualified teachers, lab facilities to students. Establishing a World Class Research Centric Institution.`,
    history: `Gyanveer University aspires to be one of the most vibrant and dynamic University of India. University will actively promote and preserve moral values, ethics in higher education along with focus on high quality teaching across disciplines with significant contribution to research. Courses offered are in accordance with socio-economic scenario of the state.`
};

// --- HERO STATS ---
export const heroStats = [
    { value: "40+", label: "Years of Legacy" },
    { value: "100+", label: "Industry MOUs" },
    { value: "1500+", label: "Research Papers" },
    { value: "250K+", label: "Placements" }
];

// --- HERO SLIDER IMAGES ---
export const heroImages = [
    "https://www.gyanveeruniversity.edu.in/assets/img/slider/gv-slider-8.jpg?v=01032025",
    "/assets/Gyanveer/slider-2.png",
    "/assets/Gyanveer/slider-3.png"
];

// --- RANKINGS & AWARDS ---
export const rankings = [
    {
        title: "Fastest Growing University",
        rank: "#1",
        context: "in Bundelkhand",
        source: "Education Excellence Awards",
        icon: Globe
    },
    {
        title: "Research Centric",
        rank: "Global",
        context: "Standards",
        source: "UGC Approved",
        icon: Microscope
    },
    {
        title: "Skill Development",
        rank: "A+",
        context: "Grade Focus",
        source: "Industry Readiness",
        icon: Award
    },
    {
        title: "Infrastructure",
        rank: "Best",
        context: "Campus Facilities",
        source: "Mara Imaliya, Sagar",
        icon: Building
    }
];

// --- FEES & SCHOLARSHIPS ---
export const feeStructure = {
    qualifierFee: "₹99",
    seatBooking: "₹10,000",
    tuitionPerYear: "₹95,000",
    hostelPerYear: "₹45,000 - ₹65,000",
    scholarships: [
        { percentage: "10% OFF", type: "Early Bird", criteria: "Register before May 31st" },
        { percentage: "Up to 50%", type: "Merit Based", criteria: "Top scorers in Qualifier Test" }
    ],
    emiOptions: {
        provider: "Easy EMI Available",
        amount: "₹8,500 / month",
        tenure: "12 Months"
    }
};

// --- ADMISSION PROCESS ---
export const admissionSteps = [
    {
        step: "01",
        title: "Online Registration",
        desc: "Register for the GoG Qualifier Test with basic details.",
        icon: UserCheck
    },
    {
        step: "02",
        title: "GoG Qualifier Test",
        desc: "60-min test on Aptitude, Logic & Communication.",
        icon: FileText
    },
    {
        step: "03",
        title: "Personal Interview",
        desc: "Academic & Career counselling with experts.",
        icon: Users
    },
    {
        step: "04",
        title: "Seat Booking",
        desc: "Secure your admission with the registration fee.",
        icon: GraduationCap
    },
    {
        step: "05",
        title: "Campus Welcome",
        desc: "Join the orientation and start your tech journey.",
        icon: Zap
    }
];

// --- CURRICULUM (8 Semesters - CSE) ---
export const curriculum = [
    {
        semester: "Semester 1",
        theme: "Computing Fundamentals",
        subjects: [
            { title: "C Programming Foundations", code: "CS26B101" },
            { title: "Engineering Physics", code: "CS26B102" },
            { title: "Discrete Mathematics I", code: "CS26B103" },
            { title: "Digital Logic Design", code: "CS26B104" }
        ],
        labs: ["C Programming Lab", "Physics Lab"],
        activities: ["Induction Program", "Coding Contest Level 1"],
        phase: "Fundamentals Phase",
        guidance: "Foundational Mentor Support"
    },
    {
        semester: "Semester 2",
        theme: "Data Structures",
        subjects: [
            { title: "Data Structures & Algorithms", code: "CS26B201" },
            { title: "Object Oriented Programming (C++)", code: "CS26B202" },
            { title: "Discrete Mathematics II", code: "CS26B203" },
            { title: "Computer Organization", code: "CS26B204" }
        ],
        labs: ["DSA Lab", "OOP Lab"],
        activities: ["Hackathon: Junior Tier", "Technical Quiz"],
        phase: "Skill Building",
        guidance: "Competitive Coding Track"
    },
    {
        semester: "Semester 3",
        theme: "Software Architecture",
        subjects: [
            { title: "Java Programming Mastery", code: "CS26B301" },
            { title: "Database Management Systems", code: "CS26B302" },
            { title: "Operating Systems", code: "CS26B303" },
            { title: "Microprocessors", code: "CS26B304" }
        ],
        labs: ["Database Lab", "Java Lab"],
        activities: ["Industrial Visit", "Backend Development Workshop"],
        phase: "Development Phase",
        guidance: "Project Mentorship Allocation"
    },
    {
        semester: "Semester 4",
        theme: "Intelligence & Networks",
        subjects: [
            { title: "Computer Networks", code: "CS26B401" },
            { title: "Software Engineering", code: "CS26B402" },
            { title: "Python for Engineering", code: "CS26B403" },
            { title: "Theory of Computation", code: "CS26B404" }
        ],
        labs: ["Networking Lab", "Software Design Lab"],
        activities: ["Tech Talk with Industry Leaders", "Mini Project Submission"],
        phase: "Applied Engineering",
        guidance: "Summer Internship Prep"
    },
    {
        semester: "Semester 5",
        theme: "Modern Computing",
        subjects: [
            { title: "Artificial Intelligence", code: "CS26B501" },
            { title: "Design & Analysis of Algorithms", code: "CS26B502" },
            { title: "Web Technologies", code: "CS26B503" },
            { title: "Cloud Computing Intro", code: "CS26B504" }
        ],
        labs: ["AI & ML Lab", "Web Tech Lab"],
        activities: ["Advanced Hackathon", "Research Paper Drafting"],
        phase: "Specialization",
        guidance: "Industry Mentor Connect"
    },
    {
        semester: "Semester 6",
        theme: "Research & Projects",
        subjects: [
            { title: "Machine Learning Foundations", code: "CS26B601" },
            { title: "Compiler Design", code: "CS26B602" },
            { title: "Big Data Analytics", code: "CS26B603" },
            { title: "Capstone Project I", code: "CS26B604" }
        ],
        labs: ["Machine Learning Lab", "Data Analytics Lab"],
        activities: ["Startup Pitch Training", "Capstone Presentation I"],
        phase: "Innovation Phase",
        guidance: "Research & Startup Mentorship"
    },
    {
        semester: "Semester 7",
        theme: "Industry Specialization",
        subjects: [
            { title: "Cyber Security & Forensics", code: "CS26B701" },
            { title: "Mobile Application Dev", code: "CS26B702" },
            { title: "Human Computer Interaction", code: "CS26B703" }
        ],
        labs: ["Cyber Security Lab", "App Dev Lab"],
        activities: ["Mock Placement Drive", "Final Year Tech Fest"],
        phase: "Expertise Phase",
        guidance: "Placement Readiness Program"
    },
    {
        semester: "Semester 8",
        theme: "Career Launch",
        subjects: [
            { title: "Major Capstone Project II", code: "CS26B801" },
            { title: "Deep Learning Intro", code: "CS26B802" },
            { title: "Industrial Internship", code: "CS26B803" }
        ],
        labs: ["Project Defense", "Portfolio Review"],
        activities: ["Placement Week", "Alumni Induction"],
        phase: "Professional Entry",
        guidance: "Final Placement Support"
    }
];

// --- COMPARISON ---
export const comparisonData = [
    { feature: "Curriculum", gog: "Industry-Aligned & Project-Led", others: "Purely Theoretical" },
    { feature: "Skill Integration", gog: "Mandatory Certifications + Labs", others: "Degree Focused" },
    { feature: "Exposure", gog: "Sagar's No. 1 Private University Vibes", others: "Limited Industry Connect" },
    { feature: "Tech Infrastructure", gog: "Smart Labs & Moot Court Labs", others: "Standard Resources" },
    { feature: "Placement Strategy", gog: "Intensive 9AM-9PM Lab Sessions", others: "Classroom Learning Only" }
];

// --- FACULTY ---
export const faculty = [
    {
        name: "Dr. Sandeep Kumar",
        role: "Head of Engineering",
        exp: "20+ Years",
        img: null,
        desc: "Ph.D. in Robust Computing. Visionary leader in engineering education."
    },
    {
        name: "Prof. Shilpa Jain",
        role: "Lead CSE Instructor",
        exp: "12 Years",
        img: null,
        desc: "Expert in Algorithms and Data Science applications."
    },
    {
        name: "Dr. Vikas Tiwari",
        role: "Research Coordinator",
        exp: "15 Years",
        img: null,
        desc: "Focuses on High Impact Research and Community Innovation."
    }
];

// --- PLACEMENTS ---
export const placementStats = {
    highest: "HIGH",
    average: "BEST",
    median: "5.0 LPA",
    companies: ["TCS", "Infosys", "Wipro", "Cognizant", "Teleperformance", "Sutherland", "HCL"],
    hiringPartners: 100,
    placedPercentage: "90%"
};

// --- AMENITIES (Using User's Images) ---
export const amenities = [
    { icon: BookOpen, name: "Library", desc: "A sanctuary for knowledge seekers with a vast collection.", image: "https://www.gyanveeruniversity.edu.in/assets/img/Academic-Facilities/Library3_Photograph-min.jpg" },
    { icon: Microscope, name: "Science Labs", desc: "Practical environments for hands-on experimentation.", image: "https://www.gyanveeruniversity.edu.in/assets/img/Academic-Facilities/Lab7_Photograph-min.jpg" },
    { icon: MonitorPlay, name: "Computer Center", desc: "High-spec systems for software development training.", image: "https://www.gyanveeruniversity.edu.in/assets/img/Academic-Facilities/ComputerLab2_Photograph-min.jpg" },
    { icon: GraduationCap, name: "Smart Classrooms", desc: "Digital classrooms for an interactive learning experience.", image: "https://www.gyanveeruniversity.edu.in/assets/img/Academic-Facilities/Smart_Classroom-min.jpg" },
    { icon: Shield, name: "Moot Court", desc: "A professional simulation space for legal and debate practice.", image: "https://www.gyanveeruniversity.edu.in/assets/img/Academic-Facilities/Moot_Court-min.jpg" },
    { icon: Building, name: "Seminar Room", desc: "Space for workshops, presentations, and discussions.", image: "https://www.gyanveeruniversity.edu.in/assets/img/Academic-Facilities/Seminar_room-min.jpg" },
    { icon: Coffee, name: "Cafeteria", desc: "Delicious meals and snacks for student refresh sessions.", image: "https://www.gyanveeruniversity.edu.in/assets/img/Academic-Facilities/canteen.jpg" },
    { icon: Building, name: "Auditorium", desc: "Grand hall for cultural events and annual festivals.", image: "https://www.gyanveeruniversity.edu.in/assets/img/Academic-Facilities/Auditorium2-min.jpg" },
    { icon: Bus, name: "Transport", desc: "Dedicated bus fleet for safe commuting across Sagar.", image: "https://www.gyanveeruniversity.edu.in/assets/img/Academic-Facilities/transport.jpg" },
    { icon: Dumbbell, name: "Gymnasium", desc: "Modern fitness equipment for physical well-being.", image: "https://www.gyanveeruniversity.edu.in/assets/img/Academic-Facilities/Gymnasium-min.jpg" }
];

// --- CLUBS ---
export const clubs = [
    { name: "TechVeer", type: "Coding Club", icon: Code, desc: "Building the next generation of software engineers." },
    { name: "Srujan", type: "Cultural Club", icon: Music, desc: "Promoting art, music, and dramatic excellence." },
    { name: "Sports Academy", type: "Athletic Club", icon: Activity, desc: "Elite training for university-level athletes." },
    { name: "Community Wing", type: "Social Service", icon: Heart, desc: "Working for rural development in Bundelkhand." }
];

// --- NEARBY PLACES (Sagar, MP) ---
export const nearbyPlaces = [
    {
        name: "Rahatgarh Waterfall",
        dist: "40 KM",
        type: "Nature",
        desc: "Majestic 50-foot waterfall perfect for monsoon outings and picnics.",
        img: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Rahatgarh_waterfall.jpg?20111201203210"
    },
    {
        name: "Lakha Banjara Lake",
        dist: "City Center",
        type: "Nature",
        desc: "The heart of Sagar city, offering peaceful evening walks and boating.",
        img: "https://hblimg.mmtcdn.com/content/hubble/img/sagar_imgs/mmt/activities/m_Lakha_banjara_lake_2_l_427_640.jpg"
    },
    {
        name: "Gadpahra Fort",
        dist: "8 KM",
        type: "Heritage",
        desc: "Ancient capital of the Dangi Kingdom with panoramic views of the hills.",
        img: "https://img.traveltriangle.com/blog/wp-content/uploads/2024/07/Gadpahra-Fort1.jpg"
    },
    {
        name: "Nauradehi Sanctuary",
        dist: "90 KM",
        type: "Wildlife",
        desc: "One of India's largest wildlife reserves, home to tigers and leopards.",
        img: "https://nauradehiwls.in/public/assets/images/nwls-imgs/fauna.jpg"
    },
    {
        name: "Eran Archaeological Site",
        dist: "90 KM",
        type: "Heritage",
        desc: "Historic site with temples dating back to the Gupta Empire (5th Century).",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqHKd-gwB2j3HgGUu_CHlDYCX-Vu3RCErY_Q&s"
    }
];

// --- MEDIA ---
export const mediaLinks = [
    { title: "Gyanveer University Convocation 2025", source: "News18 MP", date: "Jan 2025", link: "https://www.google.com/search?q=Gyanveer+University+Convocation+2025+News18+MP", desc: "Highlighting academic excellence and research contributions." },
    { title: "Sustainable Engineering Courses Launched", source: "Times of India", date: "Dec 2024", link: "https://www.google.com/search?q=Gyanveer+University+Sustainable+Engineering+Courses+Launched", desc: "Gyanveer introduces future-ready professional programs." },
    { title: "Focus on Agri & Tourism Education in MP", source: "Free Press Journal", date: "Nov 2024", link: "https://www.google.com/search?q=Gyanveer+University+Focus+on+Agri+%26+Tourism+Education+in+MP", desc: "Gyanveer University to promote specialized training via collaboration." },
    { title: "Gyanveer University established in Sagar", source: "Dainik Bhaskar", date: "Oct 2022", link: "https://www.google.com/search?q=Gyanveer+University+established+in+Sagar+Dainik+Bhaskar", desc: "University aims to provide global standard education in Sagar." }
];

// --- FAQ ---
export const faqs = [
    {
        q: "Is Gyanveer University UGC Recognized?",
        a: "Yes, Gyanveer University is established under the MP Niji Vishwavidyalaya (Sthapana Avam Sanchalan) Adhiniyam and recognized by UGC."
    },
    {
        q: "What is the specialized focus of the CSE program?",
        a: "The program focuses on industry-ready skills with emphasis on AI, Web Dev, and Machine Learning integrated with GoG's lab-led training."
    },
    {
        q: "Are there hostel facilities for outstation students?",
        a: "Yes, the university provides separate hostels for boys and girls with all modern amenities at the Mara Imaliya campus."
    },
    {
        q: "What is the GoG Qualifier Test?",
        a: "It is an entrance assessment that evaluates logic, aptitude, and verbal ability, required for securing scholarships and final admission."
    }
];

// --- TESTIMONIALS ---
export const testimonials = [
    {
        name: "Amit Tiwari",
        role: "CSE Student",
        pkg: "Placement Pending",
        bg: "Sagar, MP",
        quote: "The practical approach at Gyanveer University x Geeks of Gurukul is exactly what this region needed.",
        img: null
    },
    {
        name: "Sneha Patel",
        role: "Software Intern",
        pkg: "4 Lakh Stipend",
        bg: "Jabalpur, MP",
        quote: "Learned Java and SQL through intensive lab sessions. Now interning at a top tech firm!",
        img: null
    }
];

// --- REUSING GOG-WIDE DATA ---
export const studentVlogs = [
    { id: 1, title: "Day at Gyanveer Campus", thumbnail: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800", views: "5K", duration: "1:00", video: "#" },
    { id: 2, title: "Tech Life in Sagar", thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800", views: "10K", duration: "0:50", video: "#" },
];

export const alumniSuccess = [
    { name: "Rahul Saini", company: "TCS", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg", role: "SDE", package: "7 LPA", image: null, year: "2024" },
    { name: "Kushal Jain", company: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg", role: "System Engineer", package: "6 LPA", image: null, year: "2024" },
];

export const recruiterTestimonials = [
    {
        name: "Industry Lead",
        role: "HR Manager",
        company: "Tech Giant",
        image: null,
        logo: null,
        quote: "Students from Gyanveer University trained by GoG show exceptional practical knowledge."
    }
];

export const careerPathData = [
    { year: 1, role: "Admission", salary: "Step 1", desc: "Foundation of Computing" },
    { year: 2, role: "Structure", salary: "Step 2", desc: "Mastering DSA & Algorithms" },
    { year: 3, role: "Development", salary: "Step 3", desc: "Full Stack Development Skills" },
    { year: 4, role: "Industry", salary: "Step 4", desc: "Specialization & Internships" },
    { year: 5, role: "Success", salary: "Goal", desc: "High CTC Placements" }
];

export const blogUpdates = [
    { title: "Gyanveer University scaling Bundelkhand's Tech Potential", category: "News", date: "Feb 5, 2026", image: "https://www.gyanveeruniversity.edu.in/assets/img/Academic-Facilities/ComputerLab2_Photograph-min.jpg", link: "#" },
    { title: "GoG Qualifier Test registrations open for Gyanveer Sagar", category: "Events", date: "Feb 10, 2026", image: "https://www.gyanveeruniversity.edu.in/assets/img/Academic-Facilities/Smart_Classroom-min.jpg", link: "#" },
];
