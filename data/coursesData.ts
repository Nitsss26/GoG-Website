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
import GyanveerCampus from "../assets/Partnered_College_Pics/Gyanveer_Campus.jpg";
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

const CUTMimage = "https://content.jdmagicbox.com/v2/comp/vizianagaram/p7/9999p8922.8922.221229232032.e9p7/catalogue/centurion-university-vizianagaram-universities-gj9y7xxfnc.jpg"

export const coursesData: CourseCardData[] = [

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
        programName: "B.Tech Al-DS & BCA Cyber Security \n BCA AI-ML \n BBA Business Analytics/BI with AI",
        approvals: "NSDC Partner",
        logo: SGSU, // Correct Scope Logo
        image: ScopeCampus,
        specialisations: 4,
        certifications: 15,
        fees: "₹50,000/Year Starting...",
        link: "/scope",
        isExternal: false
    },
    // {
    //     id: "centurion-btech",
    //     universityName: "Centurion University",
    //     location: "Vizianagaram, AP",
    //     programName: "B.Tech CSE In Artificial Intelligence",
    //     approvals: "NAAC 'A+' | UGC Approved",
    //     logo: Centurion,
    //     image: CUTMimage,
    //     specialisations: 5,
    //     certifications: 12,
    //     fees: "₹1.7 Lakhs/Year",
    //     link: "/centurion",
    //     isExternal: false
    // },
    {
        id: "ies-university",
        universityName: "IES University",
        location: "Bhopal, MP",
        programName: "B.Tech CSE AI-ML \n BCA AI-ML",
        approvals: "AICTE Approved | NBA Accredited",
        logo: "https://cdn.prod.website-files.com/67fe6c64a51431b49c38a7bd/67fe6c64a51431b49c38abaa_WhatsApp%20Image%202024-11-28%20at%2017.46.46%20(1).webp",
        image: "https://scontent.fluh1-2.fna.fbcdn.net/v/t39.30808-6/481270857_616312684353248_5288063765120398116_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=106&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=vxXPk6FC6vkQ7kNvwGtJulO&_nc_oc=Ado1ArBNn6NrPL4zKRIBogN2_oEpphMjvvVbbUssow8Rkh3qxMxy4OCh1LWVJQC3gYmdulC3HOwKqpitWv2bxbUI&_nc_zt=23&_nc_ht=scontent.fluh1-2.fna&_nc_gid=scseHJBANMBn9v8EC5KBNQ&_nc_ss=78289&oh=00_Af7de_lYiyFvNXm-Flxt8HVGVAxfwfrWalAZhUtWPMj-Ow&oe=6A1A40E2",
        specialisations: 5,
        certifications: 12,
        fees: "₹80,000/Year Starting...",
        link: "/ies-university",
        isExternal: false
    },
    {
        id: "oriental",
        universityName: "Oriental University",
        location: "Indore, MP",
        programName: "BCA Artificial Intelligence & Data Science",
        approvals: "UGC Approved",
        logo: "https://admission.oui.edu.in/storage/2024/02/OUI-Logo-png-01.png",
        image: "https://admission.oui.edu.in/admissions_open_2024/img/slider2.jpg",
        specialisations: 2,
        certifications: 10,
        fees: "₹50,000/Year",
        link: "/orientaluniversity",
        isExternal: false
    }
];
