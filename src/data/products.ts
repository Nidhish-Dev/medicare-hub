export interface Medicine {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  prescription: boolean;
}

export interface LabTest {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  duration: string;
}

export interface Doctor {
  id: string;
  name: string;
  dept: string;
  fee: number;
  image: string;
  experience: string;
  rating: number;
}

export const medicines: Medicine[] = [
  {
    id: 'm1',
    name: 'Paracetamol 500mg',
    price: 89,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800',
    description: 'Pain relief and fever reducer. Pack of 10 tablets.',
    prescription: false,
  },
  {
    id: 'm2',
    name: 'Cough Syrup 100ml',
    price: 149,
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=800',
    description: 'Effective relief from cough and cold symptoms.',
    prescription: false,
  },
  {
    id: 'm3',
    name: 'Vitamin D3 Capsules',
    price: 299,
    image: 'https://images.unsplash.com/photo-1550572017-edd951aa8f72?q=80&w=800',
    description: 'Daily supplement for bone health. 60 capsules.',
    prescription: false,
  },
  {
    id: 'm4',
    name: 'Antibiotic Course',
    price: 450,
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=800',
    description: 'Prescription required. Full course of 10 tablets.',
    prescription: true,
  },
];

export const labTests: LabTest[] = [
  {
    id: 'l1',
    name: 'Complete Blood Count (CBC)',
    price: 349,
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=800',
    description: 'Comprehensive blood analysis for overall health check.',
    duration: '6-8 hours',
  },
  {
    id: 'l2',
    name: 'Lipid Profile',
    price: 799,
    image: 'https://images.unsplash.com/photo-1583912267550-bc1f0eef6f40?q=80&w=800',
    description: 'Cholesterol and triglyceride levels assessment.',
    duration: '12 hours',
  },
  {
    id: 'l3',
    name: 'Thyroid Panel',
    price: 650,
    image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=800',
    description: 'T3, T4, and TSH hormone level testing.',
    duration: '24 hours',
  },
  {
    id: 'l4',
    name: 'HbA1c Test',
    price: 550,
    image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?q=80&w=800',
    description: 'Blood sugar monitoring for diabetes management.',
    duration: '24 hours',
  },
];

export const doctors: Doctor[] = [
  {
    id: 'd1',
    name: 'Dr. Maya Singh',
    dept: 'Cardiologist',
    fee: 800,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800',
    experience: '15 years',
    rating: 4.8,
  },
  {
    id: 'd2',
    name: 'Dr. Arjun Patel',
    dept: 'General Physician',
    fee: 400,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800',
    experience: '10 years',
    rating: 4.6,
  },
  {
    id: 'd3',
    name: 'Dr. Priya Sharma',
    dept: 'Dermatologist',
    fee: 700,
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=800',
    experience: '12 years',
    rating: 4.9,
  },
  {
    id: 'd4',
    name: 'Dr. Rahul Verma',
    dept: 'Pediatrician',
    fee: 600,
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800',
    experience: '8 years',
    rating: 4.7,
  },
];
