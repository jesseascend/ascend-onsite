import type { Metadata } from 'next';
import { VerticalPage, type VerticalPageContent } from '@/components/vertical-page';

export const metadata: Metadata = {
  title: 'Wellness Programs for Senior & Assisted Living',
  description: 'Appropriate, professionally managed wellness programming for senior and assisted living communities in Central Florida.',
  alternates: { canonical: '/senior-assisted-living/' },
};

const content: VerticalPageContent = {
  pageId: 'B-SENIOR', eyebrow: 'Senior & Assisted Living',
  title: 'Professional wellness support that fits your residents and your team.',
  lede: 'Ascend helps senior and assisted living communities add reliable, appropriate wellness programming without requiring the activities team to build and manage an entire fitness function internally.',
  image: '/senior-hero.jpg', imageAlt: 'Older adults participating in a seated group exercise class',
  residentImage: '/senior-resident.jpg', residentImageAlt: 'Older residents walking together in a landscaped community park',
  residentImageHeight: 2700,
  environmentTitle: 'A valuable wellness component should not create another fragile operation.',
  environmentCopy: ['Senior living teams coordinate a wide range of resident experiences. Wellness programming must respect varied mobility and ability levels while also being dependable, engaging, and easy for the facility to support.', 'Ascend can manage a focused recurring program or a broader wellness scope. The objective is professional delivery that fits into your environment—not a clinical service and not a one-size-fits-all fitness plan.'],
  pressures: ['Limited time for activities teams to source and manage instructors', 'Coverage gaps that interrupt recurring programming', 'A wide range of resident mobility and ability levels', 'Uncertainty about the right frequency or program mix', 'The need to add wellness without building an internal fitness team'],
  outcomes: ['Dependable, professionally delivered programming', 'A scope that complements existing activities and staff', 'Appropriate options for varied resident populations', 'Clear responsibility for staffing and coordination', 'An engaging wellness component that integrates into the facility'],
  solutionTitle: 'Appropriate programming, professionally assembled and supported.',
  solutionCopy: 'We begin with the facility, resident population, current activities, and desired role of the program. Then we shape an appropriate delivery model and manage the agreed responsibilities.',
  management: ['Program assessment and scope design', 'Professional sourcing and screening', 'Recurring scheduling and coverage', 'Facility coordination and communication', 'Quality standards for the agreed service', 'Ongoing program review'],
  experiences: ['Chair-based and supported movement', 'Strength, mobility, and balance-focused formats', 'Senior fitness and group movement', 'Mind-body programming where appropriate', 'Small-group or recurring sessions', 'Other appropriate formats based on population and facility'],
  residentTitle: 'Varied ability deserves thoughtful programming—not assumptions.',
  residentCopy: 'Residents may have different mobility, confidence, experience, and support needs. Ascend designs within the non-clinical wellness scope and selects professionals and formats suited to the specific facility population.',
  faq: [
    { question: 'Can Ascend provide only a few recurring classes each week?', answer: 'Yes. A focused recurring program may be the right scope. Comprehensive outsourcing is not required.' },
    { question: 'Is this physical therapy or a medical service?', answer: 'No. Ascend provides fitness and wellness programming, not medical treatment or therapy. Any program scope should remain appropriate to the facility and participant context.' },
    { question: 'How do you account for different resident ability levels?', answer: 'The discovery and design process considers the population, facility guidance, program goals, and the capabilities required of the professionals delivering the agreed programming.' },
    { question: 'Can the program supplement our existing activities team?', answer: 'Yes. Ascend can support a defined wellness component and coordinate with the existing team rather than replacing the broader activities function.' },
  ], relatedHref: '/active-adult-55-plus-communities/', relatedLabel: 'Active Adult & 55+ Communities',
  finalHeading: 'Add a professional wellness component without building the whole operation yourself.', finalCopy: 'Let’s discuss your residents, existing activities, desired frequency, and the level of support that would help your team most.',
};

export default function SeniorPage() { return <VerticalPage content={content} />; }
