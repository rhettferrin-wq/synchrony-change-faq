import { FAQ, FAQCategory } from '@/types/faq';

export const faqCategories: FAQCategory[] = [
  {
    id: 'overview',
    name: 'Change Overview',
    description: 'Understanding the why and what of the upcoming changes'
  },
  {
    id: 'timing',
    name: 'Timing & Implementation',
    description: 'When changes will happen and how they will be rolled out'
  },
  {
    id: 'assignments',
    name: 'Client Assignments',
    description: 'How client assignments will work under the new system'
  },
  {
    id: 'performance',
    name: 'Performance & CCT',
    description: 'Changes to performance metrics and targets'
  },
  {
    id: 'career',
    name: 'Career Development',
    description: 'Impact on career progression and skill development'
  }
];

export const faqData: FAQ[] = [
  {
    id: 'why-change',
    question: 'Why is this change happening?',
    answer: 'We are making these changes to simplify processes for associates and provide the best possible associate experience. Some agents have hectic days taking calls from a wide variety of clients and products. Our goal is to simplify how many clients associates support, making associates more expert in their areas ("Less being borrowed and more being dedicated"). We want to minimize the negative impact of flexibility that has caused associates to feel bounced around between clients/skills, and ensure better alignment to platforms and the broader Synchrony organization.',
    category: 'overview'
  },
  {
    id: 'why-now',
    question: 'Why are we making this change now?',
    answer: 'We\'ve heard consistent messages from associates over time through sources like the Great Places To Work survey, and feel this is the right action to improve the associate experience. Additionally, implementing this change now minimizes disruptions during peak season (November - January 1, 2026).',
    category: 'overview'
  },
  {
    id: 'what-is-change',
    question: 'What exactly is changing?',
    answer: 'The key changes include: 1) Simplified CCT Metric - One CCT goal for the entire year, 2) Rankings replaced with "Meets / Not Meets" CCT system, 3) Fewer, more focused skills/clients with no more Proficient/Not-proficient distinctions.',
    category: 'overview'
  },
  {
    id: 'benefits',
    question: 'What\'s in it for me?',
    answer: 'You\'ll benefit from: Simpler, more transparent and actionable metrics that are easier to focus on; Less bouncing between a large number of clients and products; Opportunity to become an expert in a client/group; Career pathing opportunities; Better coaching and development through clarity in performance management that leads to more meaningful and impactful coaching.',
    category: 'overview'
  },
  {
    id: 'how-different',
    question: 'How is this different from today?',
    answer: 'Associates will generally be in 1 of 3 situations: 1) For the largest group, the change will be minimal - if staying on the same client, only the CCT rankings change to "Meets/Not Meets" metric. 2) The second group will have the new CCT metric and may have a reduction in current clients to better align to similar clients (example: Home and Auto and Lifestyle reduced to just Home and Auto). 3) The smallest group (~10%) will have the new CCT metric and might add 1 or 2 clients to their current skills.',
    category: 'overview'
  },
  {
    id: 'choose-client',
    question: 'Will I be able to choose which client or group I work with?',
    answer: 'Not currently, but it may be an option in the future as opportunities arise and as we learn more through the transition.',
    category: 'assignments'
  },
  {
    id: 'change-clients',
    question: 'Will I be able to change between clients? If so, how frequently?',
    answer: 'Similar to the above question, not currently but may be an option in the future as opportunities arise.',
    category: 'assignments'
  },
  {
    id: 'career-progression',
    question: 'What does career progression look like if I am assigned to one client like Sam\'s?',
    answer: '[This question requires additional information to be provided]',
    category: 'career'
  },
  {
    id: 'upskill',
    question: 'How will I up-skill if I am proficient in only one client today?',
    answer: 'If you are one of the few associates who will be serving more clients in the future, it will be similar to how we train associates on multiple clients today. You will be given time for trainings and support as you are brought up to speed.',
    category: 'career'
  },
  {
    id: 'when-change',
    question: 'When will this change take place?',
    answer: 'The change will take place in phases over the next few months starting with a pilot with a small number of associates. Each associate will be assigned to a phase where they will make the transition. Updates will be communicated as it gets closer.',
    category: 'timing'
  },
  {
    id: 'miss-cct-target',
    question: 'What happens if I miss my CCT target?',
    answer: 'Similar to today, if at the end of the month you are not meeting the CCT target, standard performance management processes will apply.',
    category: 'performance'
  },
  {
    id: 'improve-cct',
    question: 'How can I improve if I miss my CCT target?',
    answer: 'Similar to today, there are trainings and coaching offered to help you succeed.',
    category: 'performance'
  },
  {
    id: 'multiple-clients-cct',
    question: 'If I have multiple clients, how do I know what my CCT target is?',
    answer: 'Your CCT will be calculated by each client so you will know which clients you are meeting and not meeting CCT for.',
    category: 'performance'
  },
  {
    id: 'grace-period',
    question: 'Will there be a \'grace period\' for the change?',
    answer: 'Yes, the first 30 days will be an adjustment period while associates get familiar with the new CCT measurement and new group (if applicable).',
    category: 'timing'
  },
  {
    id: 'demand-flexibility',
    question: 'What happens if another team has higher demand, will I be pulled to meet demand for a client outside of my group?',
    answer: 'No. You will only take calls from your group of clients/skills.',
    category: 'assignments'
  },
  {
    id: 'everyone-meets-target',
    question: 'What happens if everyone is meeting the CCT target? Is there still corrective action for the lower performers?',
    answer: 'No, if everyone is meeting the CCT target there is no corrective action needed.',
    category: 'performance'
  },
  {
    id: 'busy-seasons',
    question: 'If there is only one CCT for the year, how do we handle busy seasons or spikes in volume?',
    answer: '[This question requires additional information to be provided]',
    category: 'performance'
  }
];