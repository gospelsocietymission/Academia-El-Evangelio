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
  modality: 'Presencial y Virtual' | 'Presencial' | 'Seminario Regional';
  speakers: string;
  description: string;
  availableSpots: string;
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

export interface FacultyArea {
  id: string;
  area: string;
  description: string;
  subjects: string[];
  contributionType: string;
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
