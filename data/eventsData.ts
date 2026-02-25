// ===== EVENT IMAGES =====
// Application of AI Images
import AI_Img1 from '../assets/PM-USHA/Application_of_AI_(Artifical_Intelligence)/20260204_25156PMByGPSMapCamera.jpg';
import AI_Img2 from '../assets/PM-USHA/Application_of_AI_(Artifical_Intelligence)/20260206_125601PMByGPSMapCamera.jpg';
import AI_Img3 from '../assets/PM-USHA/Application_of_AI_(Artifical_Intelligence)/20260206_125605PMByGPSMapCamera.jpg';
import AI_Img4 from '../assets/PM-USHA/Application_of_AI_(Artifical_Intelligence)/IMG-20260207-WA0131.jpg';
import AI_Img5 from '../assets/PM-USHA/Application_of_AI_(Artifical_Intelligence)/Screenshot 2026-02-18 083553.png';
import AI_Img6 from '../assets/PM-USHA/Application_of_AI_(Artifical_Intelligence)/IMG-20260211-WA0311.jpg';

// Role of IKS Images
import IKS_Img1 from '../assets/PM-USHA/Role_of_IKS_(Indian_Knowledge_System)_in_Environmental_Science/20260211_120150.jpg';
import IKS_Img2 from '../assets/PM-USHA/Role_of_IKS_(Indian_Knowledge_System)_in_Environmental_Science/20260211_152548.jpg';
import IKS_Img3 from '../assets/PM-USHA/Role_of_IKS_(Indian_Knowledge_System)_in_Environmental_Science/20260211_15554PMByGPSMapCamera.jpg';
import IKS_Img4 from '../assets/PM-USHA/Role_of_IKS_(Indian_Knowledge_System)_in_Environmental_Science/20260211_15724PMByGPSMapCamera.jpg';
import IKS_Img5 from '../assets/PM-USHA/Role_of_IKS_(Indian_Knowledge_System)_in_Environmental_Science/IMG-20260207-WA0131.jpg';
import IKS_Img6 from '../assets/PM-USHA/Role_of_IKS_(Indian_Knowledge_System)_in_Environmental_Science/IMG-20260212-WA0069.jpg';
import IKS_Img7 from '../assets/PM-USHA/Role_of_IKS_(Indian_Knowledge_System)_in_Environmental_Science/Screenshot 2026-02-18 081047.png';
import IKS_Img8 from '../assets/PM-USHA/Role_of_IKS_(Indian_Knowledge_System)_in_Environmental_Science/Screenshot 2026-02-18 081927.png';


// ===== TYPES =====
export interface EventSession {
    title: string;
    learningOutcome: string;
}

export interface SubEvent {
    id: string;
    title: string;
    summary: string;
    sessions: EventSession[];
    images: string[];
}

export interface EventData {
    id: string;
    title: string;
    tagline: string;
    shortDescription: string;
    date: string;
    venue: string;
    organizedBy: string;
    inAssociationWith: string;
    cardImage: string;
    subEvents: SubEvent[];
}

// ===== EVENTS DATA =====
export const eventsData: EventData[] = [
    {
        id: 'pm-usha-bu-2026',
        title: 'BU CRISP — PM–Usha Programmes',
        tagline: 'Education, Employment & Entrepreneurship for Viksit Bharat 2047',
        shortDescription: 'An International Seminar under PM-Usha Scheme organized at Barkatullah University, Bhopal covering Application of AI in Environmental Science and Role of Indian Knowledge Systems featuring faculty workshops, hands-on sessions, and expert panels.',
        date: '3 – 7 February 2026',
        venue: 'Department of Life Sciences, Barkatullah University, Bhopal',
        organizedBy: 'Geeks of Gurukul × Barkatullah University',
        inAssociationWith: 'CRISP (Centre for Research and Industrial Staff Performance)',
        cardImage: IKS_Img6,
        subEvents: [
            {
                id: 'ai-env-science',
                title: 'Application of Artificial Intelligence in Environmental Science',
                summary: 'This intensive programme explored the transformative potential of Artificial Intelligence in understanding and addressing environmental challenges. Participants engaged with cutting-edge AI tools and methodologies applied to climate prediction, water resource management, sustainable agriculture, biodiversity conservation, and disaster resilience. The sessions bridged the gap between traditional ecological knowledge and modern computational intelligence, empowering attendees to leverage AI for real-world environmental problem-solving. From demystifying AI fundamentals to designing collaborative solutions, this programme equipped faculty and researchers with actionable insights and hands-on experience in AI-driven environmental analysis.',
                sessions: [
                    {
                        title: 'Demystifying AI: How Intelligent Systems Engage with Nature',
                        learningOutcome: 'Develop a clear, non-technical understanding of AI and its role in addressing environmental issues.'
                    },
                    {
                        title: 'AI for Earth Systems: Climate, Water, and Food Security',
                        learningOutcome: 'Explore how AI supports climate prediction, water management, and sustainable agriculture.'
                    },
                    {
                        title: 'Ancient Roots, Modern Intelligence: IKS Meets AI',
                        learningOutcome: 'Appreciate the relevance of Indian Knowledge Systems and their integration with modern AI tools.'
                    },
                    {
                        title: 'Watching the Earth Live: AI-Driven Environmental Insights',
                        learningOutcome: 'Gain hands-on experience in visually analyzing real-world environmental data using AI platforms.'
                    },
                    {
                        title: 'Connecting Knowledge to Conservation',
                        learningOutcome: 'Consolidate foundational concepts and understand AI applications in biodiversity conservation.'
                    },
                    {
                        title: 'Risk, Responsibility, and Resilience in the Age of AI',
                        learningOutcome: 'Understand the role of AI in disaster management along with ethical and sustainability considerations.'
                    },
                    {
                        title: 'From Ideas to Impact: Designing Solutions for Nature',
                        learningOutcome: 'Apply AI and IKS concepts collaboratively to design conceptual solutions for environmental problems.'
                    },
                    {
                        title: 'Purpose, Pathways, and Perspectives',
                        learningOutcome: 'Explore future academic, career, and societal pathways in AI-enabled environmental science.'
                    },

                ],
                images: [AI_Img1, AI_Img2, AI_Img3, AI_Img6, AI_Img4, AI_Img5,]
            },
            {
                id: 'iks-env-science',
                title: 'Role of Indian Knowledge Systems (IKS) in Environmental Science',
                summary: 'This programme delved into the rich heritage of Indian Knowledge Systems and their profound relevance to modern environmental science and AI. Participants explored how ancient Indian sciences — from Sanskrit\'s precision grammar influencing NLP to Ayurvedic diagnostic frameworks paralleling AI-assisted healthcare — offer timeless wisdom that complements contemporary technology. The sessions covered the intersection of IKS with ecology, ethics, digital preservation, and responsible AI development, culminating in a holistic vision for integrating traditional knowledge with cutting-edge innovation for a sustainable future.',
                sessions: [
                    {
                        title: 'IKS: Wisdom of the Past, Intelligence of the Future',
                        learningOutcome: 'Participants will be able to explain the scope of Indian Knowledge Systems and its relevance in the AI era.'
                    },
                    {
                        title: 'Ancient Indian Sciences: Data Before Data Science',
                        learningOutcome: 'Participants will be able to relate ancient Indian scientific methods to modern analytical and computational thinking.'
                    },
                    {
                        title: 'Sanskrit, Semantics & AI: The Language of Precision',
                        learningOutcome: 'Participants will be able to identify how Sanskrit grammar principles influence modern AI and NLP systems.'
                    },
                    {
                        title: 'AI Meets Ayurveda: Intelligence in Healing Systems',
                        learningOutcome: 'Participants will be able to compare traditional Ayurvedic diagnosis with AI-assisted healthcare approaches.'
                    },
                    {
                        title: 'IKS & Ecology: Sustainable Intelligence from Nature',
                        learningOutcome: 'Participants will be able to connect Indian ecological knowledge with AI-based sustainability solutions.'
                    },
                    {
                        title: 'Ethics, Dharma & Responsible AI',
                        learningOutcome: 'Participants will be able to apply IKS-based ethical principles to evaluate responsible AI practices.'
                    },
                    {
                        title: 'From Manuscripts to Models: Digitizing IKS with AI',
                        learningOutcome: 'Participants will be able to explain the role of AI in digitizing, preserving, and analyzing IKS resources.'
                    },
                    {
                        title: 'Revisiting Roots: IKS + AI — A Holistic Future',
                        learningOutcome: 'Participants will be able to synthesize key concepts of IKS and AI to articulate a holistic future perspective.'
                    }
                ],
                images: [IKS_Img6, IKS_Img7, IKS_Img8, IKS_Img1, IKS_Img2, IKS_Img4,]
            }
        ]
    }
];
