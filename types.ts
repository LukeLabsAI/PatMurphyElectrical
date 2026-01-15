
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
}

export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  serviceType: 'Residential' | 'Commercial' | 'Industrial' | 'Other';
  description: string;
}

export interface GeminiResponse {
  summary: string;
  estimatedUrgency: 'Low' | 'Medium' | 'High';
  recommendation: string;
}
