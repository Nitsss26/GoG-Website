// Event Builder Types
export type EventType = 
  | 'Monthly Hackathons' 
  | 'Monthly Marathons' 
  | 'Monthly Test' 
  | 'Monthly Workshops' 
  | 'Industry Expert Session' 
  | 'Monthly Seminar';

export interface EventSessionForm {
  id: string;
  title: string;
  learningOutcome: string;
}

export interface SubEventForm {
  id: string;
  title: string;
  date: string;
  duration: string;
  summary: string;
  sessions: EventSessionForm[];
  images: string[]; // Base64 or Object URLs for preview
}

export interface TrainerForm {
  id: string;
  name: string;
  role: string;
  image: string; // Base64 or Object URL
  isIITAlumni: boolean;
}

export interface EventOutcome {
  title: string;
  description: string;
}

export interface EventDataForm {
  id: string; // generated
  title: string;
  eventType: EventType;
  tag: string;
  tagline: string;
  shortDescription: string;
  date: string;
  venue: string;
  location: string; // Location for program details
  organizedBy: string;
  inAssociationWith: string;
  cardImage: string; // Main preview image
  isActive: boolean;
  trainers: TrainerForm[];
  subEvents: SubEventForm[];
  // Program Details (Page 3)
  programImages: string[]; // Min 4, multiples of 2
  eventModuleTitle: string;
  eventModuleSummary: string;
  eventOutcomes: EventOutcome[];
}
