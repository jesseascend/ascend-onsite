import type { Metadata } from 'next';
import { VerticalPage, type VerticalPageContent } from '@/components/vertical-page';

export const metadata: Metadata = {
  title: 'Wellness Programs for Active Adult & 55+ Communities',
  description: 'Professionally managed wellness programs that support the lifestyle experience in active adult and 55+ communities across Central Florida.',
  alternates: { canonical: '/active-adult-55-plus-communities/' },
};

const content: VerticalPageContent = {
  pageId: 'B-55PLUS', eyebrow: 'Active Adult & 55+ Communities',
  title: 'The wellness side of your lifestyle experience—professionally managed.',
  lede: 'Ascend helps active adult and 55+ communities deliver a reliable, engaging wellness amenity without asking the Lifestyle team to coordinate every instructor, schedule, system, and resident detail.',
  image: '/active-adult-group-exercise.jpg', imageAlt: 'Older adults enjoying an indoor group exercise class',
  residentImage: '/active-adult-social-studio.jpg', residentImageAlt: 'Older women talking together with exercise mats in a group fitness studio',
  residentImageHeight: 1200,
  environmentTitle: 'Wellness is part of the promise your community makes.',
  environmentCopy: ['Lifestyle leaders are responsible for an experience that feels active, social, varied, and well organized. A wellness calendar may be only one part of that responsibility—but it can create significant administrative work when it relies on disconnected arrangements.', 'Ascend understands both sides of the assignment: the operating details your team must manage and the active adults who expect appropriate challenge, variety, connection, and consistency.'],
  pressures: ['Coverage changes when one instructor is unavailable', 'Manual RSVP, payment, and schedule administration', 'Limited visibility into attendance and resident demand', 'Multiple instructors managed through separate arrangements', 'Programming shaped by availability instead of a coherent plan'],
  outcomes: ['A wellness amenity residents recognize and value', 'Reliable delivery and more consistent coverage', 'Programming aligned with interests and ability levels', 'A professional experience that reflects well on the community', 'Less operational friction for Lifestyle and management teams'],
  solutionTitle: 'A managed program built around your community—not a generic class menu.',
  solutionCopy: 'Ascend brings programming, professional delivery, scheduling, systems, communication, and ongoing review together at the level your community needs.',
  management: ['Program assessment and design', 'Instructor sourcing, screening, and coverage', 'Scheduling and ongoing coordination', 'Booking, attendance, and administration where applicable', 'Resident communication and program promotion support', 'Program review and adaptation'],
  experiences: ['Strength, mobility, and balance', 'Group fitness and active-lifestyle formats', 'Personal training where appropriate', 'Aqua fitness where facilities support it', 'Mind-body and specialty programming', 'Wellness events and education where operationally supported'],
  residentTitle: 'Active adults are not one audience with one ability level.',
  residentCopy: 'Residents may already be highly active, returning to exercise, motivated by social connection, or looking for structured support. Ascend designs for that range—without reducing the community to stereotypes about age or ability.',
  developmentConsulting: {
    image: '/community-development.jpg',
    imageAlt: 'Aerial view of roads and prepared lots in a residential community under development',
    title: 'Build wellness into the community before opening day.',
    copy: [
      'If your active adult or 55+ community is still in development, Ascend can join the planning conversation early. We help teams connect the intended resident experience with the spaces, equipment, programming, staffing, and operating systems needed to support it.',
      'Early consultation can surface practical questions about room use, storage, flooring, acoustics, circulation, equipment mix, class capacity, and launch sequencing—before plans and purchasing decisions become harder to change.',
    ],
    note: 'Ascend provides wellness-program and operational input; licensed design and construction decisions remain with the project’s architects, engineers, and contractors.',
  },
  faq: [
    { question: 'Do we need to outsource our entire wellness program?', answer: 'No. Ascend can manage a defined recurring component, broader programming, or a more comprehensive operation depending on the responsibilities your community wants to delegate.' },
    { question: 'Can Ascend work with an existing program or instructors?', answer: 'The discovery process begins with your current program. The right approach may preserve strong elements, clarify responsibilities, add support, or redesign parts that no longer fit resident demand.' },
    { question: 'How is programming selected?', answer: 'Programming is shaped by the resident population, expressed demand, facility, current offering, goals, and the operating scope agreed with the community.' },
    { question: 'Does Ascend sell resident memberships through this website?', answer: 'No. This is a business-to-business service for communities and facilities. Any resident-facing systems are determined as part of an engagement.' },
  ], relatedHref: '/senior-assisted-living/', relatedLabel: 'Senior & Assisted Living',
  finalHeading: 'Give your wellness amenity the operating support it deserves.', finalCopy: 'Tell us about your residents, current program, facility, and where the operational friction shows up today.',
};

export default function ActiveAdultPage() { return <VerticalPage content={content} />; }
