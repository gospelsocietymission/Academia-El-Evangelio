export interface AcademicProgram {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badge: string;
  duration: string;
  modality: string;
  modulesCount: number;
  highlightObjective: string;
  curriculum: {
    code: string;
    name: string;
    description: string;
    hours: string;
  }[];
  profile: string[];
  requirements: string[];
}

export interface DoctrinalPoint {
  id: string;
  number: string;
  title: string;
  summary: string;
  scriptureRef: string;
  fullExplanation: string;
}

export interface ConferenceEvent {
  id: string;
  title: string;
  theme: string;
  date: string;
  time: string;
  location: string;
  country: string;
  modality: 'Presencial' | 'Presencial y Virtual' | 'Seminario Regional';
  speakers: string;
  description: string;
  availableSpots: string;
}

export interface PastConferenceEvent {
  id: string;
  year: string;
  title: string;
  location: string;
  theme: string;
  speaker: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Metodología' | 'Acreditación' | 'Inscripciones';
}

export interface PhysicalBranch {
  id: string;
  country: string;
  city: string;
  fullLocation: string;
  type: string;
  description: string;
  ruralImage: string;
}

export interface MissionaryProject {
  id: string;
  title: string;
  location: string;
  country: string;
  category: string;
  description: string;
  missionaryCall: string;
  image?: string;
  needs: string[];
}

export interface MinistryPartner {
  id: string;
  name: string;
  country: string;
  role: string;
  description: string;
}

export interface MinistryAlliesRegion {
  region: string;
  countryBadge: string;
  allies: {
    name: string;
    location?: string;
  }[];
}

export interface FacultyMember {
  id: string;
  name: string;
  title: string;
  institution: string;
  initials: string;
  photo: string;
}

export interface FieldMentor {
  id: string;
  name: string;
  role?: string;
  location: string;
}

export interface MissionaryReport {
  id: string;
  title: string;
  date: string;
  location: string;
  author: string;
  summary: string;
  highlights: string[];
  prayerNeeds: string;
}

export interface EnrollmentSubmission {
  fullName: string;
  phone: string;
  email?: string;
  country: string;
  city?: string;
  programId?: string;
  churchName?: string;
  notes?: string;
  sourceContext?: string;
}
