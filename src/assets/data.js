//   purpose section

import { BiTime } from 'react-icons/bi';
import { BsStack } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import { HiLightBulb } from 'react-icons/hi';

export const objectives = [
  {
    id: 1,
    icon: '👥', // Replace with your actual icon component or image
    title: 'Support All Business Sizes.',
    description:
      'Provide growth solutions tailored for startups, small businesses, and large enterprises — including Fortune 500 companies.',
  },
  {
    id: 2,
    icon: '🎯', // Replace with your actual icon component or image
    title: 'Generate High-Quality Leads.',
    description:
      'Help businesses attract and convert more potential customers through proven marketing strategies and tools.',
  },
  {
    id: 3,
    icon: '📈', // Replace with your actual icon component or image
    title: 'Enhance Sales Performance.',
    description:
      'Provide training and resources to empower sales teams, improve closing rates, and drive revenue.',
  },
  {
    id: 4,
    icon: '💡', // Replace with your actual icon component or image
    title: 'Increase Conversions.',
    description:
      'Optimize customer journeys and sales funnels to turn prospects into loyal customers.',
  },
  {
    id: 5,
    icon: '🛠️', // Replace with your actual icon component or image
    title: 'Provide All-in-One Solutions.',
    description:
      'Deliver everything businesses need — leads, training, conversions, and tools — under one simple billing plan.',
  },
  {
    id: 6,
    icon: '⚡', // Replace with your actual icon component or image
    title: 'Accelerate Business Growth.',
    description:
      'Help businesses grow faster, save time, and achieve measurable results with bundled services.',
  },
];

//   features section

export const about = [
  {
    id: 1,
    icon: '🎯',
    title: 'Lead Generation',
    description:
      'Connect you with the right audience to grow your customer base.',
    icon_backgroundcolor: '#F1EFF0',
  },
  {
    id: 2,
    icon: '📈',
    title: 'Sales Team Training',
    description: 'Equip your team with skills to close deals confidently.',
    icon_backgroundcolor: '#FEE7E7',
  },
  {
    id: 3,
    icon: '⚡',
    title: 'Scalable Solutions',
    description:
      'Support your business at every stage, from launch to leadership.',
    icon_backgroundcolor: '#FFF3E4',
  },
];

//   services section
export const digitalservices = [
  {
    id: 1,
    icon: BsStack,
    title: 'Web Design',
    description:
      'Create and optimize online stores that convert visitors into customers.',
    link: '#learn-more',
  },
  {
    id: 2,
    icon: HiLightBulb,
    title: 'Digital Marketing',
    description:
      'Boost your online visibility through SEO, social media, email marketing, and paid campaigns.',
    link: '#learn-more',
  },
  {
    id: 3,
    icon: FiSettings,
    title: 'Automation',
    description:
      'Streamline operations with CRM, analytics, and digital tools tailored to your needs.',
    link: '#learn-more',
  },
  {
    id: 4,
    icon: BiTime,
    title: 'Web & UI/UX Design',
    description:
      'Design modern, user-friendly websites that attract and retain customers.',
    link: '#learn-more',
  },
];

//   testimonials section

export const testimonials = [
  {
    id: 1,
    name: 'Robin Ayala Doe',
    image: 'https://randomuser.me/api/portraits/men/77.jpg',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.',
    rating: 4.3,
  },
  {
    id: 2,
    name: 'John De marli',
    image: 'https://randomuser.me/api/portraits/women/90.jpg',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Rowhan Smith',
    image: 'https://randomuser.me/api/portraits/men/90.jpg',
    text: 'When she reached the first hills of the Mountains, she had a last view back on the of her hometown Bookmarksgrove, the headline.',
    rating: 4.5,
  },
  {
    id: 4,
    name: 'Sarah Johnson',
    image: 'https://randomuser.me/api/portraits/women/45.jpg',
    text: 'The customer service has been exceptional. They went above and beyond to help me solve my problems and were always available when I needed them.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Michael Chen',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: "I've been using their services for over a year now and couldn't be happier. The platform is intuitive and the features are exactly what I needed for my business.",
    rating: 3.2,
  },
  {
    id: 6,
    name: 'Emma Wilson',
    image: 'https://randomuser.me/api/portraits/women/28.jpg',
    text: "What impressed me most was how quickly they responded to my requests. The team is professional, knowledgeable, and truly cares about their customers' success.",
    rating: 4.6,
  },
];

// footer section
export const footerLinks = {
  Company: [
    { id: 1, name: 'About', href: '#' },
    { id: 2, name: 'Terms of Use', href: '#' },
    { id: 3, name: 'Privacy Policy', href: '#' },
    { id: 4, name: 'How it Works', href: '#' },
    { id: 5, name: 'Contact Us', href: '#' },
  ],
  'Get Help': [
    { id: 6, name: 'Support Carrer', href: '#' },
    { id: 7, name: '24h Service', href: '#' },
    { id: 8, name: 'Quick Chat', href: '#' },
  ],
  Support: [
    { id: 9, name: 'FAQ', href: '#' },
    { id: 10, name: 'Policy', href: '#' },
    { id: 11, name: 'Business', href: '#' },
  ],
  Contact: [
    { id: 12, name: 'WhatsApp', href: '#' },
    { id: 13, name: 'Support 24', href: '#' },
  ],
};
