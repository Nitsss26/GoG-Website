import { MapPin } from 'lucide-react';

// College Logos
import SAGE from "../assets/PartneredColleges/SAGE.svg";
import Centurion from "../assets/PartneredColleges/CUTM.svg";
import SGSU from "../assets/PartneredColleges/SCOPE_Logo.svg";
import SGU from "../assets/PartneredColleges/SGU.svg";
import GyanveerLogo from "../assets/PartneredColleges/Gyanveer_Logo.png";

// College Images (Campus)
import SAGESlide from "../assets/Partnered_College_Pics/SAGE.jpg";
import SAGEIndoreSlide from "../assets/Partnered_College_Pics/SAGE_Indore.jpg";
import CenturionSlide from "../assets/Partnered_College_Pics/Centurion_University.jpeg";
import ScopeCampus from "../assets/Partnered_College_Pics/SCOPE_Campus.png";
import GyanveerCampus from "../assets/Partnered_College_Pics/Gyanveer_Campus.png";
import SAMSlide from "../assets/Partnered_College_Pics/SAM.jpeg"; // SAM Global Campus Image

export interface CourseCardData {
    id: string;
    universityName: string;
    location: string;
    programName: string;
    approvals: string;
    logo: string;
    image: string;
    specialisations: number;
    certifications: number;
    fees: string;
    link: string;
    isExternal: boolean;
}

export const coursesData: CourseCardData[] = [
    {
        id: "centurion-btech",
        universityName: "Centurion University",
        location: "Vizianagaram, AP",
        programName: "B.Tech in CSE (AI & ML)",
        approvals: "NAAC 'A+' | UGC Approved",
        logo: Centurion,
        image: CenturionSlide,
        specialisations: 5,
        certifications: 12,
        fees: "₹1.25 Lakhs/Year",
        link: "/admissions",
        isExternal: false
    },
    {
        id: "sage-bhopal",
        universityName: "SAGE University, Bhopal",
        location: "Bhopal, MP",
        programName: "B.Tech in Artificial Intelligence",
        approvals: "AICTE | UGC Approved",
        logo: SAGE,
        image: SAGESlide,
        specialisations: 4,
        certifications: 10,
        fees: "₹80,000/Year",
        link: "/courses/sage-bhopal",
        isExternal: false
    },
    {
        id: "sage-indore",
        universityName: "SAGE University, Indore",
        location: "Indore, MP",
        programName: "B.Tech in Data Science",
        approvals: "AICTE | UGC Approved",
        logo: SAGE,
        image: SAGEIndoreSlide,
        specialisations: 6,
        certifications: 10,
        fees: "₹90,000/Year",
        link: "/courses/sage-indore", // Placeholder
        isExternal: false
    },
    {
        id: "gyanveer",
        universityName: "Gyanveer University",
        location: "Sagar, MP",
        programName: "B.Tech Programs",
        approvals: "UGC Approved",
        logo: GyanveerLogo,
        image: GyanveerCampus,
        specialisations: 3,
        certifications: 8,
        fees: "₹60,000/Year",
        link: "#",
        isExternal: false
    },
    {
        id: "sigu",
        universityName: "SIGU (SAM Global)",
        location: "Bhopal, MP",
        programName: "B.Tech in Emerging Tech",
        approvals: "UGC Approved",
        logo: SGU, // Correct SAM Logo
        image: SAMSlide, // Correct SAM Campus
        specialisations: 5,
        certifications: 8,
        fees: "₹55,000/Year",
        link: "#",
        isExternal: false
    },
    {
        id: "scope",
        universityName: "SCOPE Global Skills",
        location: "Bhopal, MP",
        programName: "B.Tech in Al/ML",
        approvals: "NSDC Partner",
        logo: SGSU, // Correct Scope Logo
        image: ScopeCampus,
        specialisations: 4,
        certifications: 15,
        fees: "Check Website",
        link: "#",
        isExternal: false
    }
];
