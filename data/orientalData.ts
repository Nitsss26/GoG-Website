import {
    Award, BookOpen, Users, Building,
    GraduationCap, Briefcase, Globe,
    Video, Heart, Camera, Music,
    UserCheck, Zap, FileText, Dumbbell, Stethoscope, Landmark,
    CreditCard, Building2, MapPin, Coffee, Home, Activity, Bus, Wifi,
    Rocket, Shield, Microscope, Target, Brain, Code, Database, Lock, Smartphone, CheckCircle, XCircle, Layout, MonitorPlay, Lightbulb, Play, Camera as PhotoIcon
} from 'lucide-react';

// --- BASIC INFO ---
export const courseInfo = {
    name: "BCA Artificial Intelligence & Data Science Program",
    specialization: "Artificial Intelligence & Data Science",
    university: "Oriental University",
    universitySub: "Indore",
    location: "Indore, Madhya Pradesh",
    duration: "3 Years",
    mode: "Offline (Campus)",
    seats: 60,
    eligibility: "50% in Class 12th (Any Stream)",
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

// --- COURSES ---
export const courses = [
    { id: "bca-aids", name: "Bachelor of Computer Applications in Artificial Intelligence and Data Science", duration: "3 Years (6 Semesters)", fee: "₹50,000/Year" }
];

// --- UNIVERSITY VISION & MISSION ---
export const universityAbout = {
    glance: [
        { label: "State-of-the-Art Labs", value: "50+" },
        { label: "Programs Offered", value: "150+" },
        { label: "Smart Classrooms", value: "50+" },
        { label: "Faculty-Student Ratio", value: "1:20" },
        { label: "UGC Approved", value: "Yes" }
    ],
    vision: `Oriental University, Indore (OUI) is the first self-financed Private University in Indore, established in 2011. Spread over 77 acres of lush green campus, OUI is committed to excellence in education and research, fostering an environment where innovation and creativity thrive. Grooming young minds to become Entrepreneurs with ethical values of life.`,
    vision2025: `Empowering students through industry-aligned education, state-of-the-art infrastructure, and a vibrant campus environment focused on research and innovation.`,
    mission: `We aim to provide quality education with a focus on practical skills and industry exposure. Our partnership with Geeks of Gurukul ensures that students are trained on the latest technologies like AI, Machine Learning, and Data Science.`,
    history: `Oriental Group of Institutes has been a pioneer in technical education since 1995. Oriental University continues this legacy by offering diverse programs in Engineering, Management, Pharmacy, Law, and more, all recognized by UGC and other regulatory bodies.`
};

// --- HERO STATS ---
export const heroStats = [
    { value: "77", label: "Acre Campus" },
    { value: "150+", label: "Programs" },
    { value: "1:20", label: "Student Ratio" },
    { value: "UGC", label: "Approved" }
];

// --- HERO SLIDER IMAGES ---
export const heroImages = [
    "https://admission.oui.edu.in/admissions_open_2024/img/slider2.jpg",
    "https://akm-img-a-in.tosshub.com/sites/resources/campus/prod/img/hostel/2023/8/hostel18d6de00f5ae31418876765121.jpg",
    "https://media.collegedekho.com/media/img/institute/crawled_images/None/DJI_0227_1.JPG",


];

// --- RANKINGS & AWARDS ---
export const rankings = [
    {
        title: "IIRF 2025",
        rank: "#57",
        context: "Overall Ranking in India",
        source: "IIRF National Rankings",
        icon: Award
    },
    {
        title: "Global MOUs",
        rank: "100+",
        context: "Industry Partners",
        source: "Global Collaborations",
        icon: Globe
    },
    {
        title: "Research",
        rank: "1500+",
        context: "Papers & Patents",
        source: "Research & Innovation",
        icon: Microscope
    },
    {
        title: "UGC Approved",
        rank: "UGC",
        context: "Recognized",
        source: "Government of India",
        icon: Briefcase
    }
];

// --- FEES & SCHOLARSHIPS ---
export const feeStructures: Record<string, {
    qualifierFee: string;
    seatBooking: string;
    tuitionPerYear: string;
    registrationFee: string;
    hostelPerYear: string;
    scholarships: { percentage: string; type: string; criteria: string }[];
    emiOptions: { provider: string; amount: string; tenure: string };
}> = {
    "bca-aids": {
        qualifierFee: "₹99",
        seatBooking: "₹5,000",
        tuitionPerYear: "₹50,000",
        registrationFee: "₹3,000",
        hostelPerYear: "₹55,000 - ₹75,000",
        scholarships: [
            { percentage: "15% OFF", type: "Merit Based", criteria: "Score > 90% in 12th" },
            { percentage: "10% OFF", type: "Early Bird", criteria: "Register before June 15th" }
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
    { step: "01", title: "Register", desc: "Apply online and pay ₹99 qualifier test fee.", icon: UserCheck },
    { step: "02", title: "Qualifier Test", desc: "Online assessment of aptitude and logic.", icon: FileText },
    { step: "03", title: "Counselling", desc: "Expert guidance for career path selection.", icon: Users },
    { step: "04", title: "Final Admission", desc: "Document verification and seat booking.", icon: GraduationCap }
];

// --- CURRICULUM ---
export const curricula: Record<string, any[]> = {
    "bca-aids": [
        {
            semester: "Semester 1",
            theme: "Foundations of Computing & AI",
            subjects: [
                { title: "Introduction to AI", code: "BCADS101" },
                { title: "Python Programming", code: "BCADS102" },
                { title: "Mathematics for Data Science", code: "BCADS103" },
                { title: "Digital Electronics", code: "BCADS104" }
            ],
            labs: ["Python Programming Lab", "Digital Electronics Lab"],
            activities: ["Tech Orientation", "AI Workshop"],
            phase: "Foundation",
            guidance: "Learning Roadmap"
        },
        {
            semester: "Semester 2",
            theme: "Data Structures & Statistical Analysis",
            subjects: [
                { title: "Data Structures & Algorithms", code: "BCADS201" },
                { title: "Probability & Statistics", code: "BCADS202" },
                { title: "Database Management Systems", code: "BCADS203" },
                { title: "Environmental Science", code: "BCADS204" }
            ],
            labs: ["DSA Lab", "DBMS Lab (SQL)"],
            activities: ["Coding Hackathon", "Industry Visit"],
            phase: "Foundations",
            guidance: "Skill Assessment"
        },
        {
            semester: "Semester 3",
            theme: "Machine Learning Foundations",
            subjects: [
                { title: "Machine Learning Basics", code: "BCADS301" },
                { title: "Operating Systems", code: "BCADS302" },
                { title: "Linear Algebra", code: "BCADS303" },
                { title: "Web Development (MERN)", code: "BCADS304" }
            ],
            labs: ["Machine Learning Lab", "Web Tech Lab"],
            activities: ["Project Prototype", "Expert Talk"],
            phase: "Core Learning",
            guidance: "Internship Prep"
        },
        {
            semester: "Semester 4",
            theme: "Advanced Data Science & Cloud",
            subjects: [
                { title: "Deep Learning Fundamentals", code: "BCADS401" },
                { title: "Data Visualization (Tableau)", code: "BCADS402" },
                { title: "Cloud Computing (AWS)", code: "BCADS403" },
                { title: "Software Engineering", code: "BCADS404" }
            ],
            labs: ["DL Lab", "Data Viz Lab"],
            activities: ["Cloud Workshop", "Software Design Fest"],
            phase: "Industry Exposure",
            guidance: "Industry Mentor"
        },
        {
            semester: "Semester 5",
            theme: "NLP, CV & Big Data",
            subjects: [
                { title: "Natural Language Processing", code: "BCADS501" },
                { title: "Computer Vision", code: "BCADS502" },
                { title: "Big Data Analytics", code: "BCADS503" },
                { title: "Cyber Security Basics", code: "BCADS504" }
            ],
            labs: ["NLP & CV Lab", "Big Data Lab"],
            activities: ["Capstone Phase 1", "Mock Interviews"],
            phase: "Specialization",
            guidance: "Portfolio Building"
        },
        {
            semester: "Semester 6",
            theme: "Career Launch & Capstone",
            subjects: [
                { title: "Generative AI Basics", code: "BCADS601" },
                { title: "Ethics in AI", code: "BCADS602" },
                { title: "Industry Internship", code: "BCADS603" },
                { title: "Major Capstone Project", code: "BCADS604" }
            ],
            labs: ["Capstone Demo", "GenAI Workshop"],
            activities: ["Placement Drive", "Alumni Meet"],
            phase: "Career Launch",
            guidance: "Final Placement"
        }
    ]
};

// --- CAMPUS HIGHLIGHTS ---
export const campusHighlights = [
    { src: "https://media.collegedekho.com/media/img/institute/crawled_images/None/DJI_0227_1.JPG", label: "Green Campus" },
    { src: "https://admission.oui.edu.in/admissions_open_2024/img/slider2.jpg", label: "Main Administrative Building" },
    { src: "https://image-static.collegedunia.com/public/dashboard_upload/1770042999_IMG20251003133458-AlkaDwivedi.jpg", label: "Hostel" },
    { src: "https://image-static.collegedunia.com/public/college_data/images/campusimage/1769589124MIC-LAB-2.jpg", label: "Advanced Tech & CAD/CAM Labs" },
    { src: "https://oui.edu.in/wp-content/uploads/2021/04/cafeteria.jpg", label: "Central Cafeteria" }
];

// --- AMENITIES (Campus Life) ---
export const amenities = [
    { icon: Home, name: "Hostels", desc: "Separate AC/Non-AC hostels for boys and girls with 24/7 security and Wi-Fi.", image: "https://image-static.collegedunia.com/public/dashboard_upload/1770043000_82df91db-e61a-4ded-a12d-802b014389a5.jpg" },
    { icon: Bus, name: "Transport", desc: "Full-fledged transport department with 15+ buses covering major city routes.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPYW8-SxHSmvtHeif6HJ_U7X2QXacbmJlb4A&s" },
    { icon: Layout, name: "Design Studio", desc: "Modern labs including a Centre for Excellence in CAD/CAM.", image: "https://image-static.collegedunia.com/public/college_data/images/campusimage/1769589124MIC-LAB-2.jpg" },
    { icon: Coffee, name: "Cafeteria", desc: "Central cafeteria and mess serving North Indian, South Indian, and Chinese food.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA64te8oYa4I2Vto7P1usQJzAKsRoP7LVmbQ&s" },
    { icon: Microscope, name: "Laboratory", desc: "State-of-the-art science and departmental laboratories.", image: "https://www.collegebatch.com/static/clg-gallery/oriental-university-indore-366174.webp" },
    { icon: MonitorPlay, name: "Computer Lab", desc: "IT-enabled labs with high-speed connectivity and smart classroom tech.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRByaMGJsQ0gZLnLGKuBnuzUTR3rG_Cv2dUYg&s" },
    { icon: Building, name: "Auditorium", desc: "Three modern auditoriums for management, engineering, and pharmacy events.", image: "https://www.collegebatch.com/static/clg-gallery/oriental-university-indore-366167.webp" },
    { icon: Dumbbell, name: "Gymnasiums", desc: "Indoor & open-air fitness centers", image: "https://image-static.collegedunia.com/public/dashboard_upload/1770043000_2fb687d4-afb0-4509-8987-6d12d56fd81e.jpg" },
];

// --- STUDENT CLUBS ---
export const clubs = [
    { name: "CodeCraft", type: "Tech Club", icon: Code, desc: "For coding, AI-DS enthusiasts, and hackathon participants." },
    { name: "Cultural Club", type: "Creative", icon: Video, desc: "Theater, dance, and dramatic arts for creative expression." },
    { name: "Photography Club", type: "Digital Arts", icon: PhotoIcon, desc: "Focusing on digital media, videography, and creative arts." },
    { name: "NSS", type: "Community", icon: Heart, desc: "Community service, social volunteering, and impact programs." },
    { name: "Music & Arts", type: "Fine Arts", icon: Music, desc: "For vocalists, instrumentalists, and fine arts lovers." }
];

// --- IN THE MEDIA ---
export const mediaLinks = [
    { title: "Oriental University receives Su-Shiksha Award for excellence in education", source: "News18", date: "2025", link: "#", desc: "Recognized at the national level for academic excellence." },
    { title: "University hosts state-level technical and cultural fests", source: "Dainik Bhaskar", date: "2025", link: "#", desc: "Showcasing talent from across the state in multiple domains." },
    { title: "Oriental University ranked among the top emerging private universities", source: "India Today", date: "2025", link: "#", desc: "A testament to our rapid growth and quality benchmarks." },
    { title: "University signs Global MOU with University of Massachusetts Dartmouth", source: "Business Standard", date: "2024", link: "#", desc: "Enhancing global exposure and research opportunities." },
    { title: "Recognized for providing industry-ready courses in AI and Machine Learning", source: "Economic Times", date: "2024", link: "#", desc: "Meeting the demands of the modern tech workforce." }
];

// --- WEEKEND GETAWAYS ---
export const nearbyPlaces = [
    { name: "Ralamandal Wildlife Sanctuary", dist: "19 KM", type: "Nature & Trekking", desc: "Scenic nature trails and wildlife spotting.", img: "https://www.trawell.in/admin/images/upload/183831741Indore_Ralamandal_Wildlife_Sanctuary_Main.jpg" },
    {
        "name": "Gulawat Lotus Valley",
        "dist": "25 KM",
        "type": "Nature & Photography",
        "desc": "A serene valley famous for its vast lotus lake and bamboo forests.",
        "img": "https://images.moneycontrol.com/static-mcnews/2025/02/20250204142505_2.jpg?impolicy=website&width=1600&height=900"
    },
    { name: "Patalpani Waterfalls", dist: "35 KM", type: "Nature & Picnic Spot", desc: "A popular monsoon destination with breathtaking views.", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/ee/dd/8c/caption.jpg?w=900&h=500&s=1" },
    { name: "Rajwada Palace", dist: "In City", type: "Heritage & Culture", desc: "Historical palace of the Holkar dynasty.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvYIYft6_DaiGnXjWOGznyMwBl8dzpFONIsQ&s" },
    { name: "Mahakaleshwar Temple (Ujjain)", dist: "55 KM", type: "Spiritual Heritage", desc: "One of the 12 Jyotirlingas, a major spiritual center.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfbp2eEbeR31XpSWXVnuR0IDsVSrUGFl7YqA&s" }
];

// --- COMPARISON ---
export const comparisonData = [
    { feature: "Curriculum", gog: "AI-First & Industry Integrated", others: "General BCA Syllabus" },
    { feature: "Hands-on", gog: "20+ Real-world Projects", others: "Theoretical Labs" },
    { feature: "Mentorship", gog: "Personal Industry Mentors", others: "Academic Only" },
    { feature: "Placement", gog: "100% Placement Protection", others: "Standard Support" }
];

// --- FAQS ---
export const faqs = [
    { q: "What is Bachelor of Computer Applications in Artificial Intelligence and Data Science?", a: "It is a specialized BCA program focusing on Artificial Intelligence and Data Science, designed to make students industry-ready." },
    { q: "Is Oriental University UGC recognized?", a: "Yes, it is a UGC recognized private university established in 2011." },
    { q: "What is the fee for BCA AI-DS?", a: "The yearly tuition fee is ₹50,000, with a one-time registration fee of ₹3,000." },
    { q: "What unique facilities does Oriental University offer?", a: "OUI offers a Centre for Excellence in CAD/CAM, separate AC hostels, and 50+ smart classrooms." }
];

// --- PLACEMENT STATS ---
export const placementStats = {
    highest: "35 LPA",
    average: "6.5 LPA",
    median: "5.5 LPA",
    companies: ["TCS", "Infosys", "Wipro", "Cognizant", "Capgemini", "IBM", "Accenture", "Wipro", "Tech Mahindra"],
    hiringPartners: 100,
    placedPercentage: "90%+"
};

// --- FACULTY ---
export const faculty = [
    { name: "Dr. Sandeep Malviya", role: "Dean Academics", exp: "20+ Years", img: null, desc: "Expert in Computer Science and Engineering." },
    { name: "Prof. R.K. Saini", role: "HOD AI-DS", exp: "15 Years", img: null, desc: "Specialist in Machine Learning and Data Analytics." }
];

// --- STUDENT VLOGS (Placeholder) ---
export const studentVlogs = [
    { id: 1, title: "Scope Global Skills University", thumbnail: "https://i.vimeocdn.com/video/2166064082-e43219d29e335b5dc1332f0a52b4c9141c7f41f41f9c202f3d6050b517e2f7ac-d_720x1280?region=us", views: "12K", duration: "0:20", video: "https://player.vimeo.com/video/1199275131?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479" },
    { id: 2, title: "SAGE University Indore", thumbnail: "https://i.vimeocdn.com/video/2166064085-ca09792621731ec35a5a662fc93b9a3b218a978fd8293e257fbdf72423ad8b67-d_720x1280?region=us", views: "22K", duration: "0:16", video: "https://player.vimeo.com/video/1199275133?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479" },
    { id: 3, title: "SAGE University Bhopal", thumbnail: "https://i.vimeocdn.com/video/2166064018-a4b897beaee83a20bb5cec9cce39da2a990935c946a794f7d3a3bc3cd7afd667-d_720x1280?region=us", views: "15K", duration: "0:11", video: "https://player.vimeo.com/video/1199275132?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479" },
    { id: 4, title: "Oriental University", thumbnail: "https://i.vimeocdn.com/video/2166064021-ca51b4f9b0b85baa475c421ad74c8aed7b849818f6d15732a7a58dbaf2458d3a-d_720x1280?region=us", views: "8.5K", duration: "0:25", video: "https://player.vimeo.com/video/1199275129?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479" },
    { id: 5, title: "Gyanveer University", thumbnail: "https://i.vimeocdn.com/video/2166065024-a46d367ece9136c3e391da0615603adf77fd017cf79ad8a72e3ed7d5a86697bf-d_720x1280?region=us", views: "10K", duration: "0:30", video: "https://player.vimeo.com/video/1199276013?badge=0&autopause=0&player_id=0&app_id=58479" },
];

// --- ALUMNI SUCCESS (Placeholder) ---
export const alumniSuccess = [
    { name: "Aditya Soni", company: "TCS", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg", role: "AI Engineer", package: "8 LPA", image: "/assets/Centurion/students/student-1.jpg", year: "2024" },
    { name: "Megha Gupta", company: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg", role: "Data Scientist", package: "7.5 LPA", image: "/assets/Centurion/students/student-2.jpg", year: "2024" }
];

// --- RECRUITER TESTIMONIALS (Placeholder) ---
export const recruiterTestimonials = [
    {
        name: "Hrithik Sharma",
        role: "Talent Acquisition",
        company: "Wipro",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/1280px-Wipro_Primary_Logo_Color_RGB.svg.png",
        quote: "OUI students have a strong foundation in AI and practical problem-solving skills."
    }
];

// --- CAREER PATH DATA ---
export const careerPathData = [
    { year: 1, role: "Foundation", salary: "Step 1", desc: "Python & Data Science Basics" },
    { year: 2, role: "Specialization", salary: "Step 2", desc: "Machine Learning & AI Core" },
    { year: 3, role: "Career Launch", salary: "Goal", desc: "Placement in Top Tech Firms" }
];

// --- BLOG UPDATES ---
export const blogUpdates = [
    { title: "Oriental University partners with Geeks of Gurukul for BCA AI-DS", category: "Academics", date: "May 2026", image: "https://admission.oui.edu.in/admissions_open_2024/img/slider2.jpg", link: "#" }
];


// --- ALIASES FOR TEMPLATE COMPATIBILITY ---
export const curriculum = curricula["bca-aids"];
export const feeStructure = feeStructures["bca-aids"];
export const testimonials = []; // Empty for now to prevent crash
