export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  features: string[];
  duration: string;
  price: string;
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  text: string;
  stars: number;
  image?: string;
  flag?: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BookingDetails {
  serviceId: string;
  date: string;
  timeSlot: string;
  fullName: string;
  email: string;
  phone: string;
  notes: string;
}
