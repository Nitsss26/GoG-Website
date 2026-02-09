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
    vision: `A globally accredited skilled university catalyzing sustainable livelihoods and economic empowerment in emerging technologies worldwide.`,
    vision2025: `Empowering 100,000 lives annually through an institutionalized approach to skill development, pedagogical excellence, and innovative delivery models.`,
    mission: `Provision of quality, globally accredited academic programmes in technology and management. Provision of globally accredited employability training for less endowed segments of the population. Promotion of entrepreneurial culture and enterprise in the target areas.`,
    history: `Centurion University of Technology and Management (CUTM) is a pioneer in skill-integrated higher education. Recognized by UNESCO and awarded NAAC 'A+' Grade, the Vizianagaram campus is designed to foster innovation in AI, Robotics, and IoT.`
};

// --- HERO STATS ---
export const heroStats = [
    { value: "36 LPA", label: "Highest Package" },
    { value: "100%", label: "Placement Support" },
    { value: "240K+", label: "Students Enrolled" },
    { value: "NAAC 'A+'", label: "Accredited University" }
];

// --- RANKINGS & AWARDS ---
export const rankings = [
    {
        title: "World University Rankings 2026",
        rank: "98th",
        context: "in India",
        source: "Times Higher Education Rankings 2026",
        icon: Globe
    },
    {
        title: "Interdisciplinary Science",
        rank: "48th",
        context: "in India",
        source: "Times Higher Education Rankings 2025",
        icon: Microscope
    },
    {
        title: "Global Impact",
        rank: "1501+",
        context: "Worldwide",
        source: "Times Higher Education World Rankings 2026",
        icon: Globe
    },
    {
        title: "Accreditation",
        rank: "Grade 'A+'",
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
        labs: ["Python Basics for AI/ML", "C Programming Lab"],
        activities: ["Freshers Party", "Ice Breaking Session", "Club Orientation"],
        phase: "Admission Phase",
        guidance: "Orientation & Goal Setting"
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
        labs: ["Matrix Ops in Python", "Advanced Python Lab"],
        activities: ["24-Hour Hackathon", "Coding Contest", "Gaming Night"],
        phase: "Foundations",
        guidance: "Mentorship Allocation"
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
        labs: ["DSA Lab", "Data Cleaning Pipelines"],
        activities: ["Industrial Visit to Vizag Steel Plant", "Tech Talk by Industry Experts"],
        phase: "Practical Learning",
        guidance: "Live Projects & Labs"
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
        labs: ["Regression/Classification Lab", "Neural Networks Lab"],
        activities: ["LIVE INDUSTRY INTERNSHIP (Paid)", "Project Showcase"],
        phase: "Industry Exposure",
        guidance: "Internship Guide & Prep"
    },
    {
        semester: "Semester 5",
        theme: "Advanced AI Specialization",
        subjects: [
            { title: "Natural Language Processing", code: "AM25B501" },
            { title: "Unsupervised Learning", code: "AM25B502" },
            { title: "Cloud Computing for AI", code: "AM25B503" }
        ],
        labs: ["NLP with Transformers", "Clustering & Dim. Reduction"],
        activities: ["Robotics Workshop", "Annual Tech Fest", "AI Model Deployment"],
        phase: "Specialization",
        guidance: "Research Methodology"
    },
    {
        semester: "Semester 6",
        theme: "Applied AI & Ethics",
        subjects: [
            { title: "Computer Vision", code: "AM25B601" },
            { title: "Reinforcement Learning", code: "AM25B602" },
            { title: "AI Ethics & Governance", code: "AM25B603" }
        ],
        labs: ["RL Agents Workshop", "Big Data Pipelines"],
        activities: ["Research Paper Publication", "Patent Filing Support"],
        phase: "Innovation",
        guidance: "Patent & Paper Support"
    },
    {
        semester: "Semester 7",
        theme: "Emerging Tech & Capstone",
        subjects: [
            { title: "Generative AI & LLMs", code: "AM25B701" },
            { title: "Edge AI & IoT", code: "AM25B702" }
        ],
        labs: ["IoT Deployment", "Ethical AI Audit"],
        activities: ["Startup Pitch Day", "Funding Round", "Incubation Support"],
        phase: "Pre-Placement",
        guidance: "Resume Building & Mock Interviews"
    },
    {
        semester: "Semester 8",
        theme: "Industry Immersion",
        subjects: [
            { title: "Industry Internship", code: "AM25B801" },
            { title: "Major Capstone Project II", code: "AM25B802" }
        ],
        labs: ["GenAI Model Fine-tuning", "Final Project"],
        activities: ["CAMPUS PLACEMENTS", "Farewell Party", "Alumni Connect"],
        phase: "Career Launch",
        guidance: "Final Placement Drive"
    }
];

// --- COMPARISON ---
export const comparisonData = [
    { feature: "Curriculum", gog: "Industry-Designed (AI/ML First)", others: "Outdated Syllabus" },
    { feature: "Practical Labs", gog: "40% Time in Labs + Live Projects", others: "Mostly Theory" },
    { feature: "Faculty", gog: "IIT Alumni & Industry Experts", others: "Academic Only" },
    { feature: "Placements", gog: "100% Support till Placed", others: "Limited Support" },
    { feature: "Certifications", gog: "Degree + Industry Certifications (AWS/Google)", others: "Degree Only" },
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
    highest: "HIGH",
    average: "BEST",
    median: "5.5 LPA",
    companies: ["Google", "Microsoft", "Amazon", "Accenture", "Infosys", "Mindtree", "Capgemini", "IBM", "Optum", "HCL", "TCS", "Wipro",],
    hiringPartners: 200,
    placedPercentage: "94%"
};

// --- AMENITIES ---
export const amenities = [
    { icon: Home, name: "Hostels", desc: "Separate AC/Non-AC hostels (3/4 sharing)", image: "/assets/CenturionUniversity/hostels.jpg" },
    { icon: Coffee, name: "Cafeteria & Market", desc: "Subsidized healthy food & daily needs", image: "/assets/CenturionUniversity/cafeteria.jpg" },
    { icon: Dumbbell, name: "Gymnasiums", desc: "Indoor & open-air fitness centers", image: "/assets/CenturionUniversity/gymnasiums.jpg" },
    { icon: Activity, name: "Sports Complex", desc: "Cricket, Volleyball, Tennis, Basketball", image: "/assets/CenturionUniversity/sports-complex.jpg" },
    { icon: Stethoscope, name: "Medical Centre", desc: "Health center with doctors on campus", image: "/assets/CenturionUniversity/medical-center.jpg" },
    { icon: Wifi, name: "IT Infrastructure", desc: "High-speed Wi-Fi across campus", image: "/assets/CenturionUniversity/it-infrastructure.jpg" },
    { icon: Bus, name: "Transport", desc: "Bus services for students & staff", image: "/assets/CenturionUniversity/transport.jpg" },
    { icon: Landmark, name: "Banks/ATMs", desc: "On-campus banking facilities", image: "/assets/CenturionUniversity/atmandbank.png" },
    { icon: Building, name: "Auditorium", desc: "For events, festivals & presentations", image: "/assets/CenturionUniversity/auditorium.png" },
    { icon: BookOpen, name: "Library", desc: "Well-stocked with journals & magazines", image: "/assets/CenturionUniversity/library.jpg" }
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
        img: "https://th-i.thgim.com/public/incoming/kz9a9c/article68704249.ece/alternates/LANDSCAPE_1200/VSP05_Vizianagaram%20Fort%2015.JPG" // Reliable Fort Image
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
        img: "https://www.yovizag.com/wp-content/uploads/2016/09/thatipudi-reservoir.webp" // Reliable Nature/Lake Image
    },
    {
        name: "Bheemili Beach",
        dist: "45 KM",
        type: "Adventure",
        desc: "Scenic historic beach near Vizianagaram.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT26RlJTPhANtXTnQ-woq_hMuzWCtVb5JgJdA&s" // Beach
    },
    {
        name: "Lambasingi",
        dist: "60 KM",
        type: "Nature",
        desc: "Kashmir of Andhra Pradesh with misty valleys.",
        img: "https://assets.shortpedia.com/uploads/2021/04/06/1617706907.jpg" // Misty Valley
    }
];

// --- MEDIA ---
export const mediaLinks = [
    { title: "Drone Mfg Unit Inauguration", source: "The Hindu", date: "Jan 2025", link: "https://www.thehindu.com/news/national/andhra-pradesh/union-civil-aviation-minister-opens-drone-manufacturing-unit-at-cutm-in-vizianagaram/article69088888.ece", desc: "Union Minister inaugurates unit." },
    { title: "Semiconductor Partnership", source: "The Hindu", date: "June 2025", link: "https://www.thehindu.com/news/national/andhra-pradesh/cutm-partners-with-marquee-semiconductors-to-improve-semiconductor-curriculum/article69740327.ece", desc: "Partnership with Marquee Semiconductors." },
    { title: "Chip Mfg Initiative", source: "The Hindu", date: "Aug 2025", link: "https://www.thehindu.com/news/national/union-minister-ashwini-vaishnaw-briefing-after-cabinet-decisions-on-august-12-2025/article69923650.ece", desc: "Plans for chip manufacturing unit." },
    { title: "Highest Package 16 LPA", source: "Collegedunia", date: "Sept 2025", link: "https://collegedunia.com/news/cutm-placement-report-2025-alertid-138733", desc: "2025 Placement Report highlights." },
    { title: "Healthcare Education", source: "The Hindu", date: "July 2025", link: "https://www.thehindu.com/news/national/andhra-pradesh/healthcare-staff-must-upskill-cutm-chancellor/article69850295.ece", desc: "Chancellor emphasizes upskilling." }
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
        a: "Absolutely. It is a UGC-recognized B.Tech degree from Centurion University (NAAC 'A+')."
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
    { id: 1, title: "Success Story from BGI Institute", thumbnail: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800", views: "12K", duration: "0:20", video: "/assets/CenturionUniversity/testimonial-bgi.mp4" },
    { id: 2, title: "Journey from SIRT", thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800", views: "22K", duration: "0:16", video: "/assets/CenturionUniversity/testimonial-sirt.mp4" },
    { id: 3, title: "Student Feedback - SAM Group", thumbnail: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800", views: "15K", duration: "0:11", video: "/assets/CenturionUniversity/testimonial-sam-3.mp4" },
    { id: 4, title: "Experience at BGI Institute", thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800", views: "8.5K", duration: "0:25", video: "/assets/CenturionUniversity/testimonial-sam-2.mp4" },
];

export const alumniSuccess = [
    { name: "Rahul Sharma", company: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", role: "SDE II", package: "45 LPA", image: "/assets/Centurion/students/student-1.jpg", year: "2023", imgPos: "object-top" },
    { name: "Priya Patel", company: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg", role: "Cloud Engineer", package: "42 LPA", image: "/assets/Centurion/students/student-2.jpg", year: "2023", imgPos: "object-top" },
    { name: "Amit Kumar", company: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", role: "SDE I", package: "38 LPA", image: "/assets/Centurion/students/student-3.jpg", year: "2024" },
    { name: "Varun Gupta", company: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg", role: "Product Manager", package: "36 LPA", image: "/assets/Centurion/students/student-4.jpg", year: "2022" },
];

export const recruiterTestimonials = [
    {
        name: "Sunny Garg",
        role: "Co-Founder & CEO",
        company: "Crib",
        image: "https://images.yourstory.com/cs/images/undefined/SunnyGargFounderofYourShellsoldtoStanzaLiving-1639976349657.jpg",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX10FVuos4JXU1dzSr56qCdPJoBu8PIHK5Iw&s",
        quote: "The developers from Geeks of Gurukul, trained by a team of IITians, were ready to tackle projects immediately. Their hands-on approach and deep understanding of trending technologies ensured they seamlessly integrated into our team."
    },
    {
        name: "Rishikesh Gupta",
        role: "Founder",
        company: "Hilfee",
        image: "https://i.postimg.cc/gjfWFqZF/1000195739.jpg",
        logo: "https://static-asset.inc42.com/logo/hilfee.png",
        quote: "Geeks of Gurukul has delivered exceptional graduates who are of top-notch quality. Their ability to handle projects from day one reflects their rigorous training and deep knowledge of current technologies."
    },
    {
        name: "Ashok Kumar",
        role: "Lead Data Scientist",
        company: "Beem",
        image: "https://i.postimg.cc/zvHsjbPH/1000195738.jpg",
        logo: "https://mms.businesswire.com/media/20240201741058/en/2018083/5/Beem_App_Logo.jpg",
        quote: "We hired a few developers from Geeks of Gurukul and have been pleasantly surprised by their performance. What truly stands out is their insatiable curiosity to tackle complex problems head-on."
    }
];

export const careerPathData = [
    { year: 1, role: "Admission", salary: "Step 1", desc: "Join the Elite Cohort" },
    { year: 2, role: "Learning", salary: "Step 2", desc: "Master Core CS & Full Stack" },
    { year: 3, role: "Practical", salary: "Step 3", desc: "Build Real-World Projects" },
    { year: 4, role: "Internship", salary: "Step 4", desc: "Gain Industry Experience" },
    { year: 5, role: "Placement", salary: "Goal", desc: "Launch Your Dream Career" }
];

// --- NEW MARQUEE DATA ---
export const internsSuccess = [
    { name: "Alok Kumar Yadav", role: "AI Developer", image: "/assets/Images-Intern/AI Developer - Alok kumar Yadav.jpg" },
    { name: "Harshal Harne", role: "Amazon Intern", image: "/assets/Images-Intern/Amazon Intern - harshal harne.JPG" },
    { name: "Akshat Gupta", role: "Cyber Security", image: "/assets/Images-Intern/Cyber Security - Akshat Gupta.jpg" },
    { name: "Md Afzal", role: "Data Analytics", image: "/assets/Images-Intern/Data Analytics - Md Afzal.jpg" },
    { name: "Arun VK", role: "Data Science", image: "/assets/Images-Intern/Data Science - Arun VK.jpg" },
    { name: "Arisha Pare", role: "Google Intern", image: "/assets/Images-Intern/Google Intern- Arisha Pare.jpg" },
    { name: "Abhay Kumar", role: "Java Developer", image: "/assets/Images-Intern/Java Developer - Abhay Kumar.jpg" },
    { name: "Babita Singh", role: "Java Developer", image: "/assets/Images-Intern/Java Developer - Babita Singh.jpg" },
    { name: "Suman Singh", role: "Java Developer", image: "/assets/Images-Intern/Java Developer- Suman Singh.jpg" },
    { name: "Pavan Kumar", role: "Python Developer", image: "/assets/Images-Intern/Python Developer - Pavan Kumar.jpg" },
    { name: "Rizawan Ansari", role: "Python Developer", image: "/assets/Images-Intern/Python Developer- Rizawan Ansari.jpg" },
    { name: "Aastha Jain", role: "Web Development", image: "/assets/Images-Intern/Web Developement- Aastha Jain.jpg" },
    { name: "Devendra Nagar", role: "Web Developer", image: "/assets/Images-Intern/Web Developer - Devendra Nagar.png" },
    { name: "Ranjan Kumar", role: "Web Developer", image: "/assets/Images-Intern/Web Developer - Ranjan kumar.jpg" },
];

export const placementsSuccess = [
    { name: "Bhavna", role: "SDE-I", image: "/assets/Images-Placement/Bhavna.jpg" },
    { name: "Bilal", role: "Python Developer", image: "/assets/Images-Placement/Bilal.jpg" },
    { name: "Chetna Lade", role: ".NET Developer", image: "/assets/Images-Placement/Chetna Lade.jpg" },
    { name: "Deepansh Patel", role: "React Developer", image: "/assets/Images-Placement/Deepansh Patel.jpg" },
    { name: "Kanak Kishore", role: "Data Engineer", image: "/assets/Images-Placement/Kanak Kishore.jpg" },
    { name: "Kartik", role: "Backend Developer", image: "/assets/Images-Placement/Kartik.jpg" },
    { name: "Kaveri Galfat", role: "Full Stack Dev", image: "/assets/Images-Placement/Kaveri Galfat.jpg" },
    { name: "Lakshna Tomar", role: "Java Developer", image: "/assets/Images-Placement/Lakshna Tomar.jpg" },
    { name: "Prabhat Kumar", role: "DevOps Engineer", image: "/assets/Images-Placement/Prabhat Kumar.jpg" },
    { name: "Priyambada", role: "Cloud Engineer", image: "/assets/Images-Placement/Priyambada.jpg" },
    { name: "Shivam Sahu", role: "SDE-II", image: "/assets/Images-Placement/Shivam Sahu.jpg" },
    { name: "Shivam Singh", role: "Frontend Dev", image: "/assets/Images-Placement/Shivam Singh.jpg" },
    { name: "Shubham Pawar", role: "System Analyst", image: "/assets/Images-Placement/Shubham Pawar.jpg" },
    { name: "Srajal Mishra", role: "AI Researcher", image: "/assets/Images-Placement/Srajal Mishra.jpg" },
];

export const blogUpdates = [
    { title: "Open Campus partners with MP Govt & Geeks of Gurukul", category: "Global Tech", date: "Jan 10, 2026", image: "/assets/Press/opencampus.png", link: "https://radarseluma.disway.id/life-style/read/704665/open-campus-partners-with-government-of-madhya-pradesh-and-geeks-of-gurukul-to-digitize-50-million-academic" },
    { title: "15 Students from Scope University Get Stipend Internships at GoG", category: "Internships", date: "July 25, 2025", image: "/assets/Press/itdc.png", link: "https://itdcindia.com/tag/geeks-of-gurukul/" },
    { title: "Oriental Group of Institutes and Geeks of Gurukul Host Madhya Pradesh's Inaugural Blockchain Hackathon", category: "Blockchain Event", date: "April 29, 2025", image: "/assets/Press/oriental-hackathon.png", link: "https://www.facebook.com/orientalgroupofinstitutes/posts/oriental-group-of-institutes-and-geeks-of-gurukul-host-madhya-pradeshs-inaugural/725465156481377/" },


];
