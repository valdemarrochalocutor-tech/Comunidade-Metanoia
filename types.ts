
export interface Module {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface RoadmapStep {
  title: string;
  description: string;
}

export interface GeminiResponse {
  analysis: string;
  roadmap: RoadmapStep[];
  recommendation: string;
}
