import { MapPin } from 'lucide-react';

// College Logos
import SAGE from "../assets/PartneredColleges/SAGE.svg";
import Centurion from "../assets/PartneredColleges/CUTM.svg";
import SGSU from "../assets/PartneredColleges/SCOPE_Logo.svg";
import SGU from "../assets/PartneredColleges/SGU.svg";
import GyanveerLogo from "../assets/PartneredColleges/Gyanveer_Logo.png";
import SageIndoreLogo from "../assets/PartneredColleges/Sage_Indore.png";

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
    // {
    //     id: "centurion-btech",
    //     universityName: "Centurion University",
    //     location: "Vizianagaram, AP",
    //     programName: "B.Tech CSE (AI & ML)",
    //     approvals: "NAAC 'A+' | UGC Approved",
    //     logo: Centurion,
    //     image: CenturionSlide,
    //     specialisations: 5,
    //     certifications: 12,
    //     fees: "₹1.75 Lakhs/Year",
    //     link: "/centurion",
    //     isExternal: false
    // },
    {
        id: "sage-bhopal",
        universityName: "SAGE University, Bhopal",
        location: "Bhopal, MP",
        programName: "B.Tech Full Stack Development & B.Tech AI-ML",
        approvals: "AICTE | UGC Approved",
        logo: "/assets/SAGE/sage-bhopal-logo.png",
        image: SAGESlide,
        specialisations: 4,
        certifications: 10,
        fees: "₹1,30,000/Year",
        link: "/sagebhopal",
        isExternal: false
    },
    {
        id: "gyanveer",
        universityName: "Gyanveer University",
        location: "Sagar, MP",
        programName: "B.Tech CSE & B.Tech CSE (AI-ML)",
        approvals: "UGC Approved",
        logo: "/assets/Gyanveer/gyanveer-logo.png",
        image: GyanveerCampus,
        specialisations: 3,
        certifications: 8,
        fees: "₹80,000/Year",
        link: "/gyanveer",
        isExternal: false
    },
    {
        id: "sage-indore",
        universityName: "SAGE University, Indore",
        location: "Indore, MP",
        programName: "B.Tech Full Stack Development",
        approvals: "NAAC A+ | UGC Approved",
        logo: SageIndoreLogo,
        image: SAGEIndoreSlide,
        specialisations: 6,
        certifications: 10,
        fees: "₹1,30,000/Year",
        link: "/sageindore",
        isExternal: false
    },

    // {
    //     id: "sigu",
    //     universityName: "SIGU (SAM Global)",
    //     location: "Bhopal, MP",
    //     programName: "B.Tech in Emerging Tech",
    //     approvals: "UGC Approved",
    //     logo: SGU, // Correct SAM Logo
    //     image: SAMSlide, // Correct SAM Campus
    //     specialisations: 5,
    //     certifications: 8,
    //     fees: "₹55,000/Year",
    //     link: "#",
    //     isExternal: false
    // },
    {
        id: "scope",
        universityName: "SCOPE Global Skills University",
        location: "Bhopal, MP",
        programName: "B.Tech Al-DS & BCA Cyber Security \n BCA AI-ML",
        approvals: "NSDC Partner",
        logo: SGSU, // Correct Scope Logo
        image: ScopeCampus,
        specialisations: 4,
        certifications: 15,
        fees: "₹40,000/Year Staring..",
        link: "/scope",
        isExternal: false
    }
];
