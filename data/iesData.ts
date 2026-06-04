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
    name: "B.Tech & BCA Programs",
    specialization: "CSE AI-ML & BCA AI-ML",
    university: "IES University",
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
    { id: "btech-cse-aiml", name: "B.Tech CSE AI-ML", duration: "4 Years (8 Semesters)", fee: "₹1,35,000/Year" },
    { id: "bca-aiml", name: "BCA AI-ML", duration: "3 Years (6 Semesters)", fee: "₹80,000/Year" }
];

// --- UNIVERSITY VISION & MISSION ---
export const universityAbout = {
    vision: `IES University, Bhopal is one of the premier private universities in Central India, established in 2019 by the Infotech Education Society (operating since 1999). Spread over 50+ acres of world-class green campus, IES is committed to academic excellence, state-of-the-art technical education, and holistic career grooming.`,
    vision2025: `Empowering engineering and computing aspirants through industry-first programs designed in association with Microsoft, Geeks of Gurukul, and other elite global tech giants.`,
    mission: `We deliver specialized technical instruction with a 70% practical-oriented curriculum. In partnership with Geeks of Gurukul, our students undergo intensive hands-on labs, hackathons, and placement preparation to become elite tech professionals.`,
    history: `The IES Group has been a pioneer in engineering and professional education in Madhya Pradesh for over two decades. Known for its premier placement drives, advanced R&D initiatives, and high-tech labs, IES University ranks among the finest private universities in the region, approved by UGC, AICTE, PCI, and INC.`
};

// --- HERO STATS ---
export const heroStats = [
    { value: "NAAC A+", label: "Accredited University" },
    { value: "50+", label: "Acre High-Tech Campus" },
    { value: "21 LPA", label: "Highest Package Secured" },
    { value: "AICTE", label: "Approved Programs" }
];

// --- HERO SLIDER IMAGES ---
export const heroImages = [
    "https://content.jdmagicbox.com/comp/bhopal/65/0755p755std2700465/catalogue/ies-university-bhopal-kalkheda-bhopal-institutes-9h4364j1aw.jpg",
    "https://images.shiksha.com/mediadata/images/1601975326php0GwjNx.jpeg",
    "https://cdn.prod.website-files.com/67fe6c64a51431b49c38a7bd/67fe6c64a51431b49c38ab91_DJI_0002.webp"

];

// --- RANKINGS & AWARDS ---
export const rankings = [
    {
        title: "Central India Award",
        rank: "#1",
        context: "University of the Year 2023",
        source: "ASSOCHAM Central India Awards",
        icon: Award
    },
    {
        title: "Careers360 Rating",
        rank: "AAA+",
        context: "Best Engineering Colleges",
        source: "Careers360 National Survey",
        icon: Shield
    },
    {
        title: "UGC Approved",
        rank: "UGC",
        context: "Government Recognized",
        source: "Govt of India Approved",
        icon: Landmark
    },
    {
        title: "AICTE Approved",
        rank: "AICTE",
        context: "Technical Programs",
        source: "Approved Engineering & IT",
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
    "btech-cse-aiml": {
        qualifierFee: "₹99",
        seatBooking: "₹10,000",
        tuitionPerYear: "₹1,35,000",
        hostelPerYear: "₹50,000 - ₹75,000",
        scholarships: [
            { percentage: "20% OFF", type: "Merit-Based", criteria: "Score > 90% in 12th PCM" },
            { percentage: "10% OFF", type: "Early Bird", criteria: "Apply before 15th June" }
        ],
        emiOptions: {
            provider: "GrayQuest / Propelld",
            amount: "₹11,250 / month",
            tenure: "12 Months"
        }
    },
    "bca-aiml": {
        qualifierFee: "₹99",
        seatBooking: "₹5,000",
        tuitionPerYear: "₹80,000",
        hostelPerYear: "₹50,000 - ₹75,000",
        scholarships: [
            { percentage: "15% OFF", type: "Merit-Based", criteria: "Score > 85% in 12th Grade" },
            { percentage: "10% OFF", type: "Early Bird", criteria: "Apply before 15th June" }
        ],
        emiOptions: {
            provider: "GrayQuest / Propelld",
            amount: "₹6,667 / month",
            tenure: "12 Months"
        }
    }
};

// --- ADMISSION PROCESS ---
export const admissionSteps = [
    {
        step: "01",
        title: "Register",
        desc: "Apply online & pay ₹99 for Geeks of Gurukul Qualifier Test.",
        icon: UserCheck
    },
    {
        step: "02",
        title: "Qualifier Test",
        desc: "Take the 60-min online assessment checking cognitive ability & coding logic.",
        icon: FileText
    },
    {
        step: "03",
        title: "Technical Counselling",
        desc: "Engage in 1:1 mentorship guidance to select specialisations and career tracks.",
        icon: Users
    },
    {
        step: "04",
        title: "Seat Booking & Admission",
        desc: "Submit your official documents & complete registration with the booking fee.",
        icon: GraduationCap
    },
    {
        step: "05",
        title: "Commence Cohort",
        desc: "Start your professional journey with the campus orientation on 1st August 2026.",
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
    "btech-cse-aiml": [
        {
            semester: "Semester 1",
            theme: "Core Mathematics & Python Basics",
            subjects: [
                { title: "Python Programming", code: "IES-CSE101" },
                { title: "Engineering Mathematics I", code: "IES-MATH101" },
                { title: "Basic Electronics", code: "IES-ECE101" },
                { title: "Communication Skills & Soft Skills", code: "IES-HUM101" },
                { title: "Computer System & Architecture", code: "IES-CSE102" }
            ],
            labs: ["Python Programming Lab", "Basic Electronics Lab", "Soft Skills Workshop"],
            activities: ["Cohort Welcome", "Icebreaking Sessions", "AI Trends Seminar"],
            phase: "Foundation",
            guidance: "Orientation & Academic Goal Mapping"
        },
        {
            semester: "Semester 2",
            theme: "Data Structures & Calculus",
            subjects: [
                { title: "Data Structures using C++", code: "IES-CSE201" },
                { title: "Engineering Mathematics II (Calculus & Stats)", code: "IES-MATH201" },
                { title: "Digital Systems Design", code: "IES-CSE202" },
                { title: "Environmental Engineering", code: "IES-CIV201" },
                { title: "Principles of Management", code: "IES-MNG201" }
            ],
            labs: ["DSA Lab", "Digital Circuits Lab", "Statistical Methods Lab"],
            activities: ["Internal Hackathon", "Java/C++ Competitive Sprint"],
            phase: "Foundations",
            guidance: "Corporate Mentor Allocation"
        },
        {
            semester: "Semester 3",
            theme: "Object-Oriented Coding & DBMS",
            subjects: [
                { title: "Object Oriented Programming (Java)", code: "IES-CSE301" },
                { title: "Database Management Systems", code: "IES-CSE302" },
                { title: "Linear Algebra & Matrices", code: "IES-MATH301" },
                { title: "Discrete Structures", code: "IES-CSE303" },
                { title: "Web Technology Fundamentals (HTML/CSS)", code: "IES-CSE304" }
            ],
            labs: ["Java OOPs Lab", "SQL & DBMS Lab", "Web Design Lab"],
            activities: ["Industry Visit to Tech Hubs", "24-Hr Coding Marathon"],
            phase: "Practical Integration",
            guidance: "Portfolio Construction Basics"
        },
        {
            semester: "Semester 4",
            theme: "Artificial Intelligence & OS",
            subjects: [
                { title: "Artificial Intelligence Foundations", code: "IES-AIML401" },
                { title: "Operating Systems & Shell Scripting", code: "IES-CSE401" },
                { title: "Computer Networks", code: "IES-CSE402" },
                { title: "Software Engineering & Agile", code: "IES-CSE403" },
                { title: "Theory of Computation", code: "IES-CSE404" }
            ],
            labs: ["AI Logic Lab", "Linux Shell Lab", "Networking Simulation Lab"],
            activities: ["Paid Corporate Internship Drive", "Project Fair Presentation"],
            phase: "Applied AI Core",
            guidance: "Internship Interview Preparations"
        },
        {
            semester: "Semester 5",
            theme: "Machine Learning & Big Data",
            subjects: [
                { title: "Machine Learning & Predictive Analysis", code: "IES-AIML501" },
                { title: "Big Data & Hadoop Ecosystem", code: "IES-CSE501" },
                { title: "Compiler Design", code: "IES-CSE502" },
                { title: "Microprocessor & Interfacing", code: "IES-CSE503" }
            ],
            labs: ["Scikit-Learn ML Lab", "Hadoop & Spark Lab", "Compiler Assembly Lab"],
            activities: ["AWS/Azure Cloud Bootcamp", "TechFest Event Execution"],
            phase: "Data Engineering",
            guidance: "Research Project Proposal Planning"
        },
        {
            semester: "Semester 6",
            theme: "Deep Learning & Neural Networks",
            subjects: [
                { title: "Deep Learning & TensorFlow Applications", code: "IES-AIML601" },
                { title: "Computer Vision", code: "IES-AIML602" },
                { title: "MLOps & Pipeline Architecture", code: "IES-AIML603" },
                { title: "Major Project Phase I", code: "IES-PRJ601" }
            ],
            labs: ["Neural Networks Lab", "OpenCV Imaging Lab", "MLOps Pipeline Deployment"],
            activities: ["Startup Pitch Competitions", "Venture Ideation Talks"],
            phase: "Deep Learning Specialisation",
            guidance: "Capstone Project Prototype Verification"
        },
        {
            semester: "Semester 7",
            theme: "Generative AI & LLM Systems",
            subjects: [
                { title: "Generative AI, GPT & Prompt Eng.", code: "IES-AIML701" },
                { title: "Natural Language Processing (NLP)", code: "IES-AIML702" },
                { title: "Cyber Security & AI Governance", code: "IES-CSE701" }
            ],
            labs: ["LLM API Integration Lab", "HuggingFace NLP Lab", "Penetration Testing Lab"],
            activities: ["Full Mock Placement Drives", "Resume Optimization Panels"],
            phase: "Advanced GenAI Integration",
            guidance: "HR Placement Panel Mock Reviews"
        },
        {
            semester: "Semester 8",
            theme: "Capstone & Full-Time Deployment",
            subjects: [
                { title: "Full-Time Industry Internship", code: "IES-INT801" },
                { title: "Major Capstone Project Phase II", code: "IES-PRJ802" }
            ],
            labs: ["Final Capstone Defense", "Product Dashboard Presentation"],
            activities: ["Campus Placements", "Cohort Graduation", "Alumni Networking"],
            phase: "Career Placement Launch",
            guidance: "Final Placements Support"
        }
    ],
    "bca-aiml": [
        {
            semester: "Semester 1",
            theme: "Computing Basics & Python Foundations",
            subjects: [
                { title: "Computer Fundamentals", code: "IES-BCA101" },
                { title: "Programming in Python", code: "IES-BCA102" },
                { title: "Mathematics for Computing", code: "IES-MATH105" },
                { title: "Office Automation Tools", code: "IES-BCA103" },
                { title: "Communicative English", code: "IES-HUM102" }
            ],
            labs: ["Python Code Lab", "Advanced Excel & Office Suite Lab"],
            activities: ["Freshers Induction", "AI Tools Exploration Seminar"],
            phase: "Computing Foundations",
            guidance: "Study Skills & Mentorship Orientation"
        },
        {
            semester: "Semester 2",
            theme: "Data Structures & SQL Systems",
            subjects: [
                { title: "Data Structures using Python", code: "IES-BCA201" },
                { title: "Database Management Systems (DBMS)", code: "IES-BCA202" },
                { title: "Calculus & Algebra Fundamentals", code: "IES-MATH205" },
                { title: "Web Design (HTML, CSS, JS)", code: "IES-BCA203" },
                { title: "Operating Systems", code: "IES-BCA204" }
            ],
            labs: ["DSA Lab", "SQL & Database Administration Lab", "Frontend UI Lab"],
            activities: ["Coding Competitions", "Frontend UI Build Sprint"],
            phase: "Data & Systems Core",
            guidance: "Portfolio Website Construction"
        },
        {
            semester: "Semester 3",
            theme: "Applied Machine Learning Core",
            subjects: [
                { title: "Introduction to AI & Machine Learning", code: "IES-BCA301" },
                { title: "Data Wrangling & Visualisation", code: "IES-BCA302" },
                { title: "Software Engineering & Agile Methodologies", code: "IES-BCA303" },
                { title: "R Programming for Analytics", code: "IES-BCA304" }
            ],
            labs: ["Machine Learning Models Lab", "Power BI / Tableau Visualisation Lab", "R Analytics Lab"],
            activities: ["24-Hour AI Idea Sprint", "Corporate Guest Lectures"],
            phase: "AI Specialisation",
            guidance: "Industrial Internship Readiness Reviews"
        },
        {
            semester: "Semester 4",
            theme: "Deep Learning & Neural Implementations",
            subjects: [
                { title: "Deep Learning Concepts & TensorFlow", code: "IES-BCA401" },
                { title: "Natural Language Processing (NLP)", code: "IES-BCA402" },
                { title: "Cloud Computing Basics (AWS)", code: "IES-BCA403" },
                { title: "Computer Vision Foundations", code: "IES-BCA404" }
            ],
            labs: ["Deep Learning Models Lab", "NLP Python Lab", "AWS Cloud Console Lab"],
            activities: ["Paid Mini Internships Drive", "Tech Poster Presentation"],
            phase: "Deep Learning Systems",
            guidance: "Internship Resume Optimisation"
        },
        {
            semester: "Semester 5",
            theme: "Generative AI & MLOps Operations",
            subjects: [
                { title: "Generative AI & LLM Prompting", code: "IES-BCA501" },
                { title: "MLOps & Model Deployment Pipelines", code: "IES-BCA502" },
                { title: "Cyber Security Fundamentals", code: "IES-BCA503" },
                { title: "BCA Capstone Project Phase I", code: "IES-BCA504" }
            ],
            labs: ["Generative AI API Lab", "Model Deployments (Docker) Lab", "Project Prototypes Workshop"],
            activities: ["Resume Polishing Sprint", "Mock Technical Interviews Panels"],
            phase: "Corporate Placement Prep",
            guidance: "HR Interview Practice"
        },
        {
            semester: "Semester 6",
            theme: "Full Time Internship & Dissertation",
            subjects: [
                { title: "Full-Time Industry Internship", code: "IES-BCA601" },
                { title: "Dissertation & Major Capstone Phase II", code: "IES-BCA602" }
            ],
            labs: ["Project Defense Exhibition", "Final Presentation Showcase"],
            activities: ["On-Campus Recruitments", "Farewell Celebrations"],
            phase: "Career Deployment",
            guidance: "Final Placements Connect"
        }
    ]
};

// --- COMPARISON ---
export const comparisonData = [
    { feature: "Curriculum", gog: "Industry-Designed (AI-First)", others: "Standard Theoretical Syllabi" },
    { feature: "Hands-on Learning", gog: "70% Practical + 20+ Lab Prototypes", others: "Standard Bookish Classrooms" },
    { feature: "Advanced Labs", gog: "Dedicated AI, CV, & MLOps Infrastructure", others: "Basic Desktop Networks" },
    { feature: "Co-Development", gog: "Co-branded Microsoft Azure Integration", others: "Academic Boards Only" },
    { feature: "Placement Plan", gog: "100% Placement Protection & Guidance", others: "Ad-hoc Placement Cells" },
    { feature: "Mentorship", gog: "Personal Corporate Tech Directors", others: "Regular College Faculty" }
];

// --- FACULTY ---
export const faculty = [
    {
        name: "Dr. Sunita Singh",
        role: "Dean, School of Engineering",
        exp: "18+ Years",
        img: null,
        desc: "Ph.D. in Computer Science with over 15 high-impact publication papers in machine intelligence."
    },
    {
        name: "Prof. Rajesh Kumar",
        role: "Head, CSE AI-ML Specialisation",
        exp: "12+ Years",
        img: null,
        desc: "Former technical researcher with core specialisation in Deep Learning and Neural Network models."
    },
    {
        name: "Dr. Alok Verma",
        role: "Director of Research",
        exp: "15 Years",
        img: null,
        desc: "Expert mentor specializing in MLOps pipelines and cloud computing environments."
    }
];

// --- PLACEMENTS ---
export const placementStats = {
    highest: "21 LPA",
    average: "5.5 LPA",
    median: "4.8 LPA",
    companies: ["Amazon", "TCS", "Wipro", "Infosys", "Capgemini", "IBM", "Cognizant", "HCL Technologies", "Hexaware", "L&T Infotech"],
    hiringPartners: 250,
    placedPercentage: "92%"
};

// --- AMENITIES ---
export const amenities = [
    { icon: Home, name: "Hostels", desc: "Separate secure boys and girls hostels on campus with AC options & WiFi.", image: "https://iitandm.in/uploads/hostel/1.png" },
    { icon: Coffee, name: "Student Canteen", desc: "Centralized dining cafeteria serving fresh multiregional menu.", image: "https://iesce.info/uploads/userfiles/image/Canteen.jpg" },
    { icon: Dumbbell, name: "Fitness Centers", desc: "Equipped gym facility promoting physical health and development.", image: "https://cdn.prod.website-files.com/67fe6c64a51431b49c38a7f3/68dcd91cd3ed4e3eb6288d47_WhatsApp%20Image%202025-09-29%20at%2013.26.38.jpeg" },
    { icon: Activity, name: "Sports Complexes", desc: "Playgrounds for cricket, football, basketball, and tennis courts.", image: "https://akm-img-a-in.tosshub.com/sites/resources/campus/prod/img/sports/2023/8/i-s136c3c0d4ce1b219442975776.jpg" },
    { icon: Stethoscope, name: "Medical Facility", desc: "24/7 emergency response ward with nursing attendants.", image: "https://scontent.fluh1-3.fna.fbcdn.net/v/t51.82787-15/549551362_18482470138079374_84328556585171500_n.webp?stp=dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=xHB5tg9vookQ7kNvwGSMign&_nc_oc=AdqLWe_03t-FpzqYW2TRbcTLIHlE23-Exo2TUMCW6rp8r1fIYxDFqSTuhFv0nYcztMl_eLs2oIubshvYAfJ0leR1&_nc_zt=23&_nc_ht=scontent.fluh1-3.fna&_nc_gid=HWR2t0-0niOCCoYXCDnYHg&_nc_ss=7b289&oh=00_Af4Itf4IuQ2si_S0YHQ6YyPEzpkACxFwKfmWebCtOt6mAg&oe=6A1A3627" },
    { icon: Wifi, name: "IT Network Hubs", desc: "High-speed wireless connectivity coverage throughout the academic block.", image: "https://ies.ipsacademy.org/wp-content/uploads/2016/12/Networking-Lab-N-203.jpg" },
    { icon: Bus, name: "Campus Transport", desc: "Extensive shuttle bus routes navigating key city coordinates.", image: "https://www.collegebatch.com/static/clg-gallery/ies-college-of-technology-bhopal-228757.webp" },
    { icon: Building, name: "Auditoriums", desc: "Premium smart halls for technology conventions, workshops & cultural fests.", image: "https://cdn.prod.website-files.com/67fe6c64a51431b49c38a7bd/67fe6c64a51431b49c38aa23_webinar.webp" }
];

// --- CLUBS ---
export const clubs = [
    { name: "AI Hackers Circle", type: "Tech Club", icon: Code, desc: "For algorithm coding, hackathons, and innovative tool creation." },
    { name: "Kalakriti", type: "Drama & Cultural", icon: Video, desc: "Street plays, stage theaters, and traditional arts club." },
    { name: "Focus Lens", type: "Visual Arts", icon: Camera, desc: "Photography, design fests & creative production." },
    { name: "Rotaract IES", type: "Social Action", icon: Heart, desc: "Volunteering drives, environmental health campaigns." },
    { name: "Symphony", type: "Fine Music", icon: Music, desc: "Promoting music groups, instrumental fests and vocal choir." }
];

// --- NEARBY PLACES ---
export const nearbyPlaces = [
    {
        name: "Kerwa Dam Resort",
        dist: "10.5 KM",
        type: "Adventure Hub",
        desc: "Offers zip lining, nature trails, and serene water views for weekend getaways.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ24cf9m-02TIgD1GP-S8tiB3rMqI-yEcfJDA&s"
    },
    {
        name: "VanVihar National Park",
        dist: "13 KM",
        type: "Wildlife Reserve",
        desc: "Beautiful lakeside national park boasting rich species of central Indian fauna.",
        img: "https://manalitourism.co.in/images/places-to-visit/headers/van-vihar-national-park-manali-header-manali-tourism.jpg.jpg"
    },
    {
        name: "Upper Lake (Bhojtal)",
        dist: "22 KM",
        type: "Scenic Spot",
        desc: "Asia's largest artificial lake, ideal for windsurfing and boating activities.",
        img: "https://www.shutterstock.com/image-photo/bhopal-madhya-pradesh-india-december-600nw-2085427558.jpg"
    },


    {
        name: "Bhimbetka Cave Shelters",
        dist: "44 KM",
        type: "UNESCO Heritage",
        desc: "Archeological marvel storing cave drawings over 30,000 years old.",
        img: "https://thumbs.dreamstime.com/b/bhimbetka-rock-shelters-caves-archaeological-site-central-india-spans-paleolithic-mesolithic-periods-as-253893103.jpg"
    },
    {
        name: "Sanchi Stupa Complex",
        dist: "60 KM",
        type: "Spiritual Heritage",
        desc: "UNESCO heritage spot conserving highly ancient Buddhist stupas.",
        img: "https://cdn.britannica.com/36/155836-050-89E7AA9E/Great-Stupa-Sanchi-India.jpg"
    }
];

// --- MEDIA UPDATES ---
export const mediaLinks = [
    {
        title: "Go Green Wins Smart India Hackathon 2023 at IES College of Technology",
        source: "The Times of India",
        date: "Dec 2023",
        link: "https://timesofindia.indiatimes.com/city/bhopal/go-green-wins-smart-india-hackathon-2023-at-ies-college-of-technology/articleshow/106225183.cms",
        desc: "Highlighting innovative sustainable engineering solutions during the prestigious national hackathon event."
    },
    {
        title: "Zooming with zest: Team Dark, LDCE among big winners at IES nationals",
        source: "The Times of India",
        date: "Oct 2025",
        link: "https://timesofindia.indiatimes.com/city/bhopal/zooming-with-zest-team-dark-ldce-among-big-winners-at-ies-nationals/articleshow/124312735.cms",
        desc: "Over 80 technical institutes compete in high-octane engineering design and smart vehicle fabrication at IES Nationals."
    },
    {
        title: "IPS Academy Team Triumphs at ATVVC 2025 hosted at IES University",
        source: "ANI News",
        date: "Apr 2025",
        link: "https://www.aninews.in/news/business/ips-academy-team-triumphs-at-atvvc-202520250404174037/",
        desc: "National level all-terrain vehicle design championship hosted successfully on the advanced IES campus track."
    },
    {
        title: "IES University Bhopal Opens BTech Admissions 2026; Check Details",
        source: "Careers360",
        date: "May 2026",
        link: "https://engineering.careers360.com/articles/ies-university-bhopal-opens-btech-admissions-2026",
        desc: "Official announcement detailing eligibility criteria, tech streams, and placement assurance programs for B.Tech admission cycle."
    },
    {
        title: "IES University, Bhopal: 17th Governing Body Meeting Outlines Vision for Academic Excellence",
        source: "College360",
        date: "May 2026",
        link: "https://college360.co.in/news/ies-university-bhopal-17th-governing-body-meeting-outlines-vision-for-academic-excellence",
        desc: "High-level governing meet outlines implementation of advanced industry-aligned computing tracks in AI-ML."
    }
];

// --- FAQ ---
export const faqs = [
    {
        q: "What programs are offered by IES University in collaboration with Geeks of Gurukul?",
        a: "We offer two highly premium pathways: B.Tech CSE in Artificial Intelligence & Machine Learning (4 years) and BCA in Artificial Intelligence & Machine Learning (3 years)."
    },
    {
        q: "What is the fee structure and billing cycles?",
        a: "The yearly tuition fee is ₹1,35,000 for B.Tech CSE AI-ML, and ₹80,000 for BCA AI-ML. We also offer easy 12-month zero-interest EMI structures via GrayQuest & Propelld."
    },
    {
        q: "Are the programs approved by governing bodies?",
        a: "Yes, IES University is a fully chartered private university recognized by the UGC, and technical degrees like B.Tech are approved by the AICTE and accredited by NBA."
    },
    {
        q: "How does the placement support system operate?",
        a: "Geeks of Gurukul provides 100% Placement Protection. Students are given industry-relevant project experience and placed directly into product-oriented tech giants."
    },
    {
        q: "Is there campus accommodation for outstation students?",
        a: "Yes, separate residential secure hosteling complexes are provided for boys and girls with full security, hygienic mess, and fitness room access."
    }
];

// --- TESTIMONIALS ---
export const testimonials = [
    {
        name: "Abhinav Patel",
        role: "AI Engineer @ Amazon",
        pkg: "14 LPA",
        bg: "B.Tech CSE AI-ML",
        quote: "The deep learning specialisation co-taught by Geeks of Gurukul developers at IES gave me direct entry into Amazon's tech engineering labs.",
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
        name: "Ruchi Sharma",
        role: "Associate Data Scientist @ TCS",
        pkg: "7.5 LPA",
        bg: "BCA AI-ML",
        quote: "The hands-on Python wrangling and prompt engineering modules helped me crack top tech placement rounds effortlessly.",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100"
    }
];

// --- REUSING GOG-WIDE DATA ---
export const studentVlogs = [
    { id: 1, title: "Day in Life at IES University Bhopal", thumbnail: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800", views: "6K", duration: "0:45", video: "#" },
    { id: 2, title: "Campus Tour - IES Kalkheda Campus", thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800", views: "11K", duration: "1:20", video: "#" }
];

export const alumniSuccess = [
    { name: "Abhinav Patel", company: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", role: "AI Engineer", package: "14 LPA", image: "/assets/Centurion/students/student-1.jpg", year: "2024" },
    { name: "Ruchi Sharma", company: "TCS", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg", role: "AI Associate", package: "7.5 LPA", image: "/assets/Centurion/students/student-2.jpg", year: "2024" }
];

export const recruiterTestimonials = [
    {
        name: "Sunny Garg",
        role: "Co-Founder & CEO",
        company: "Crib",
        image: "https://images.yourstory.com/cs/images/undefined/SunnyGargFounderofYourShellsoldtoStanzaLiving-1639976349657.jpg",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX10FVuos4JXU1dzSr56qCdPJoBu8PIHK5Iw&s",
        quote: "The engineering students from IES University possess incredibly sharp programming skills. They integrated perfectly into our deployment cohorts."
    }
];

export const careerPathData = [
    { year: 1, role: "Cohort Selection", salary: "Step 1", desc: "Join Elite Specialisation Tracks" },
    { year: 2, role: "Skill Development", salary: "Step 2", desc: "Master AI Algorithms & MLOps Pipelines" },
    { year: 3, role: "Prototype Sandbox", salary: "Step 3", desc: "Co-develop 20+ Real World AI Tools" },
    { year: 4, role: "Placement Protection", salary: "Goal", desc: "Deploy in Global Product Giants" }
];

export const blogUpdates = [
    {
        title: "गीक्स ऑफ गुरुकुल के छात्रों ने राज्य स्तरीय हैकथॉन में मचाया धमाल (Dainik Madhya Swarnim)",
        category: "Hackathon",
        date: "May 17, 2026",
        image: "/assets/Press/madhyaswarnim.png",
        link: "#"
    },
    {
        title: "Open Campus partners with MP Govt & Geeks of Gurukul",
        category: "Global Tech",
        date: "Jan 10, 2026",
        image: "/assets/Press/opencampus.png",
        link: "https://radarseluma.disway.id/life-style/read/704665/open-campus-partners-with-government-of-madhya-pradesh-and-geeks-of-gurukul-to-digitize-50-million-academic"
    },
    {
        title: "15 Students from Scope University Get Stipend Internships at GoG",
        category: "Internships",
        date: "July 25, 2025",
        image: "/assets/Press/itdc.png",
        link: "https://itdcindia.com/tag/geeks-of-gurukul/"
    }
];

