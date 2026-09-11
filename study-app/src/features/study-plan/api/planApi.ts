import type { StudyTask, EnglishLevel } from '../types';
import { getDailyTasks, TOTAL_DAYS } from '../data/curriculumGenerator';

// B1 Series (3 Days)
const B1_DAY_1: StudyTask[] = [
  { 
    id: 'b1-d1-capture', 
    title: 'Reading: Project Phoenix Update', 
    description: 'Read the short status report and extract vocabulary.', 
    category: 'Capture', 
    completed: false, 
    level: 'B1',
    exerciseType: 'reading',
    exerciseData: {
      text: "Weekly Update: Project Phoenix\n\nHi team,\nI want to share a quick update on Project Phoenix. We have implemented the new database schema successfully. The QA team finished their initial tests yesterday, and they didn't find any major blockers. However, we have noticed a slight delay in the API response times since this morning. John deployed a hotfix two hours ago, but we haven't seen the results yet. Let's keep an eye on it.\n\nBest, Sarah",
      vocabulary: [
        "To implement (verb): To put a plan or system into operation.",
        "Blocker (noun): An issue that prevents you from continuing your work.",
        "Delay (noun): A situation in which something happens later than it should.",
        "Hotfix (noun): A quick software update to fix a specific bug.",
        "To keep an eye on (idiom): To watch someone or something carefully."
      ]
    }
  },
  { 
    id: 'b1-d1-activate', 
    title: 'Grammar: Present Perfect vs Past Simple', 
    description: 'Complete the blanks with the correct verb form.', 
    category: 'Activate', 
    completed: false, 
    level: 'B1',
    exerciseType: 'fill-in-blanks',
    exerciseData: {
      questions: [
        { id: 'q1', sentence: 'I (finish) __________ the report yesterday afternoon.', answer: 'finished' },
        { id: 'q2', sentence: 'We (not / test) __________ the new feature yet.', answer: 'have not tested' },
        { id: 'q3', sentence: 'She (send) __________ the email two hours ago.', answer: 'sent' },
        { id: 'q4', sentence: 'The client (approve) __________ the budget! We can start working now.', answer: 'has approved' },
        { id: 'q5', sentence: '(You / see) __________ the latest metrics? They look great.', answer: 'Have you seen' },
      ]
    }
  },
  { 
    id: 'b1-d1-reinforce', 
    title: 'Stand-Up Monologue', 
    description: 'Record a 1-minute audio answering standard stand-up questions.', 
    category: 'Reinforce', 
    completed: false, 
    level: 'B1',
    exerciseType: 'recording',
    exerciseData: {
      prompt: "Record a 1-minute audio answering:\n1. What did you do yesterday?\n2. What have you done today?\n3. Do you have any blockers?"
    }
  },
  { 
    id: 'b1-d1-evaluate', 
    title: 'Write a Slack Update', 
    description: 'Draft a short status update to your manager.', 
    category: 'Evaluate', 
    completed: false, 
    level: 'B1',
    exerciseType: 'writing',
    exerciseData: {
      prompt: "Draft a short message (50-100 words) including:\n1. Professional greeting.\n2. A task you finished yesterday (Past Simple).\n3. A task you have worked on today (Present Perfect).\n4. Any blockers or things to keep an eye on."
    }
  }
];

const B1_DAY_2: StudyTask[] = [
  { 
    id: 'b1-d2-capture', 
    title: 'Reading: IT Support Ticket', 
    description: 'Read a common IT support ticket and learn useful phrases.', 
    category: 'Capture', 
    completed: false, 
    level: 'B1',
    exerciseType: 'reading',
    exerciseData: {
      text: "Ticket #4092\nUser: Mark D.\nIssue: Cannot access VPN\n\nDescription: Hi IT, I've been trying to connect to the VPN since 9 AM but I keep getting an 'Authentication Failed' error. I have already reset my password, but the issue persists. Could you look into this ASAP? I need access to the internal servers for a deployment at 2 PM.",
      vocabulary: [
        "Issue (noun): A problem or difficulty.",
        "To keep doing something (verb): To repeatedly do something.",
        "To persist (verb): To continue to exist.",
        "To look into (phrasal verb): To investigate.",
        "ASAP (abbreviation): As soon as possible."
      ]
    }
  },
  { 
    id: 'b1-d2-activate', 
    title: 'Vocabulary: IT Support', 
    description: 'Fill in the blanks with vocabulary from the ticket.', 
    category: 'Activate', 
    completed: false, 
    level: 'B1',
    exerciseType: 'fill-in-blanks',
    exerciseData: {
      questions: [
        { id: 'q1', sentence: 'We need to fix this bug __________, before the clients notice.', answer: 'ASAP' },
        { id: 'q2', sentence: 'The connection error __________, even after rebooting the server.', answer: 'persists' },
        { id: 'q3', sentence: 'Can you __________ this log file and see what caused the crash?', answer: 'look into' },
        { id: 'q4', sentence: 'We have an urgent __________ with the payment gateway.', answer: 'issue' },
        { id: 'q5', sentence: 'I __________ getting timeout errors on the database.', answer: 'keep' },
      ]
    }
  },
  { 
    id: 'b1-d2-reinforce', 
    title: 'Explaining an Issue', 
    description: 'Record an audio explaining a technical problem.', 
    category: 'Reinforce', 
    completed: false, 
    level: 'B1',
    exerciseType: 'recording',
    exerciseData: {
      prompt: "Record a 1-minute audio explaining a technical issue you faced recently. What was the problem? What did you try? What was the solution?"
    }
  },
  { 
    id: 'b1-d2-evaluate', 
    title: 'Reply to a Ticket', 
    description: 'Write a response to an angry user ticket.', 
    category: 'Evaluate', 
    completed: false, 
    level: 'B1',
    exerciseType: 'writing',
    exerciseData: {
      prompt: "Write a polite response to a user complaining that the system is slow. Apologize for the inconvenience, explain that the team is looking into it, and provide an estimated time for a fix."
    }
  }
];

const B1_DAY_3: StudyTask[] = [
  { 
    id: 'b1-d3-capture', 
    title: 'Reading: Remote Work Policies', 
    description: 'Read an announcement about remote work.', 
    category: 'Capture', 
    completed: false, 
    level: 'B1',
    exerciseType: 'reading',
    exerciseData: {
      text: "To all staff,\nAs discussed in our last all-hands meeting, we are updating our remote work policy. Starting next month, employees are required to be in the office at least two days a week. We believe this hybrid model will foster better collaboration while maintaining flexibility. Please coordinate with your managers to set your in-office days.",
      vocabulary: [
        "All-hands meeting (noun): A meeting for all employees of a company.",
        "To foster (verb): To encourage the development or growth of something.",
        "Collaboration (noun): The action of working with someone to produce something.",
        "Flexibility (noun): The ability to change or be changed easily.",
        "To coordinate (verb): To organize the different elements of a complex body or activity."
      ]
    }
  },
  { 
    id: 'b1-d3-activate', 
    title: 'Grammar: Modals of Obligation', 
    description: 'Use have to, must, should in the blanks.', 
    category: 'Activate', 
    completed: false, 
    level: 'B1',
    exerciseType: 'fill-in-blanks',
    exerciseData: {
      questions: [
        { id: 'q1', sentence: 'You __________ wear a badge when entering the building (mandatory).', answer: 'must' },
        { id: 'q2', sentence: 'We __________ finish this sprint by Friday (obligation).', answer: 'have to' },
        { id: 'q3', sentence: 'I think we __________ refactor this component later (advice).', answer: 'should' },
        { id: 'q4', sentence: 'Employees __________ attend the security training (mandatory).', answer: 'must' },
        { id: 'q5', sentence: 'You __________ update your passwords every 90 days.', answer: 'have to' },
      ]
    }
  },
  { 
    id: 'b1-d3-reinforce', 
    title: 'Pros and Cons of Remote Work', 
    description: 'Record your opinion on remote vs office work.', 
    category: 'Reinforce', 
    completed: false, 
    level: 'B1',
    exerciseType: 'recording',
    exerciseData: {
      prompt: "Record a 1-minute audio discussing the pros and cons of working remotely compared to working in an office. Which do you prefer and why?"
    }
  },
  { 
    id: 'b1-d3-evaluate', 
    title: 'Propose a Schedule', 
    description: 'Write an email to your manager proposing your in-office days.', 
    category: 'Evaluate', 
    completed: false, 
    level: 'B1',
    exerciseType: 'writing',
    exerciseData: {
      prompt: "Write a short email to your manager proposing your two in-office days for the new hybrid schedule. Briefly explain why those days work best for you."
    }
  }
];

const B1_DAY_4: StudyTask[] = [
  { 
    id: 'b1-d4-activate', 
    title: 'Grammar: Verb Tenses', 
    description: 'Complete the sentences with the correct verb form.', 
    category: 'Activate', 
    completed: false, 
    level: 'B1',
    exerciseType: 'fill-in-blanks',
    exerciseData: {
      questions: [
        { id: 'q1', sentence: 'I (be) __________ a student for 5 years.', answer: 'have been' },
        { id: 'q2', sentence: 'I (study) __________ English for 2 hours.', answer: 'have been studying' },
        { id: 'q3', sentence: 'I (finish) __________ my homework before I went to bed.', answer: 'had finished' },
      ]
    }
  },
  { 
    id: 'b1-d4-capture', 
    title: 'Reading: City Weather', 
    description: 'Read the text about the weather and answer the questions.', 
    category: 'Capture', 
    completed: false, 
    level: 'B1',
    exerciseType: 'reading',
    exerciseData: {
      text: "The weather in the city is variable. In summer, the sun shines brightly and the heat is intense. In winter, the snow falls heavily and the cold is severe.",
      vocabulary: [
        "Variable (adjective): Not consistent or having a fixed pattern; liable to change.",
        "Brightly (adverb): In a way that gives out or reflects much light.",
        "Severe (adjective): Very great; intense."
      ]
    }
  },
  { 
    id: 'b1-d4-evaluate', 
    title: 'Comprehension: City Weather', 
    description: 'Answer questions about the text you just read.', 
    category: 'Evaluate', 
    completed: false, 
    level: 'B1',
    exerciseType: 'writing',
    exerciseData: {
      prompt: "Answer the following questions based on the previous reading:\n\nA) In which month of the year is the weather the warmest?\nB) What phenomenon occurs in winter in the city?\nC) What is the weather like in the city during the summer?\n\n(Write your answers below)"
    }
  },
  { 
    id: 'b1-d4-reinforce', 
    title: 'Reading: City Museums', 
    description: 'Read the text about museums and prepare to discuss it.', 
    category: 'Reinforce', 
    completed: false, 
    level: 'B1',
    exerciseType: 'reading',
    exerciseData: {
      text: "The city has a large number of museums. The Museum of Modern Art is one of the most popular. Visitors can see works by artists such as Picasso and Warhol.",
      vocabulary: [
        "A large number of (phrase): Many.",
        "Works (noun): A creation of art, music, or literature."
      ]
    }
  }
];

const B1_DAY_5: StudyTask[] = [
  { 
    id: 'b1-d5-capture', 
    title: 'Comprehension: Paris', 
    description: 'Read the text about Paris and analyze it.', 
    category: 'Capture', 
    completed: false, 
    level: 'B1',
    exerciseType: 'writing',
    exerciseData: {
      text: "The city of Paris is famous for its architecture, its history, and its culture. Visitors can see the Eiffel Tower, the Louvre, and the Musée d'Orsay.",
      prompt: "Read the text above and answer the following questions:\n\nA) What is the purpose of the text?\nB) What places are mentioned in the text as points of interest?\nC) Why is the city of Paris famous?\n\n(Write your answers below)"
    }
  },
  { 
    id: 'b1-d5-evaluate', 
    title: 'Comprehension: Tourism', 
    description: 'Read the text about tourism and answer the questions.', 
    category: 'Evaluate', 
    completed: false, 
    level: 'B1',
    exerciseType: 'writing',
    exerciseData: {
      text: "Tourism is an important industry in the city. Visitors can enjoy the architecture, the food, and the culture. However, it is important to respect the environment and local traditions.",
      prompt: "Read the text above and answer the following questions:\n\nA) What is the importance of tourism in the city?\nB) What is recommended for visitors to enjoy the city?\nC) What must be respected in the city?\n\n(Write your answers below)"
    }
  },
  { 
    id: 'b1-d5-activate', 
    title: 'Vocabulary: Tourism & Culture', 
    description: 'Fill in the blanks using vocabulary from today\'s reading.', 
    category: 'Activate', 
    completed: false, 
    level: 'B1',
    exerciseType: 'fill-in-blanks',
    exerciseData: {
      questions: [
        { id: 'q1', sentence: 'The city is __________ for its beautiful architecture.', answer: 'famous' },
        { id: 'q2', sentence: 'It is important to __________ the local traditions when you visit.', answer: 'respect' },
        { id: 'q3', sentence: 'Tourism is a very important __________ for this country.', answer: 'industry' },
      ]
    }
  },
  { 
    id: 'b1-d5-reinforce', 
    title: 'Speaking: Tourism', 
    description: 'Record a short audio about your city.', 
    category: 'Reinforce', 
    completed: false, 
    level: 'B1',
    exerciseType: 'recording',
    exerciseData: {
      prompt: "Record a 1-minute audio answering the following:\n1. Why is your city famous?\n2. What can tourists enjoy there?\n3. What traditions should they respect?"
    }
  }
];

const VENICE_TEXT = `The city of Venice, Italy, is a unique and fascinating place to visit. With its rich history, stunning architecture, and breathtaking natural beauty, it's no wonder that Venice is one of the most popular tourist destinations in the world. From the grandeur of St. Mark's Square to the quiet canals of the San Polo district, Venice is a city that will leave you in awe.

One of the most impressive things about Venice is its architecture. The city is built on more than 100 small islands, connected by over 400 bridges and canals. The buildings that line the streets are a testament to the city's rich history, with grand palaces, beautiful churches, and ornate bridges. The famous St. Mark's Basilica, with its intricate mosaics and golden domes, is a must-see for anyone visiting Venice.

But Venice is more than just a city of grand architecture and beautiful buildings. It's also a city of vibrant culture and rich history. The city is home to numerous museums, galleries, and performance venues, showcasing the work of local artists, musicians, and performers. From the world-renowned Venice Biennale to the smaller, more intimate galleries, there's always something to see or do in Venice.

Despite its popularity, Venice is still a relatively small city, with a population of just over 260,000 people. But despite its size, Venice has a unique and infectious energy that makes it feel like a much larger city. Whether you're strolling through the streets, admiring the architecture, or enjoying a meal at one of the many excellent restaurants, Venice is a city that will leave you feeling inspired and rejuvenated.

In recent years, Venice has faced a number of challenges, including rising sea levels, over-tourism, and a lack of investment in the city's infrastructure. But despite these challenges, Venice remains one of the most beautiful and fascinating cities in the world. With its unique architecture, rich history, and vibrant culture, it's a place that will continue to captivate and inspire visitors for generations to come.`;

const B1_DAY_6: StudyTask[] = [
  { 
    id: 'b1-d6-capture', 
    title: 'Reading: The City of Venice', 
    description: 'Read about Venice, its rich architecture, history, and learn new vocabulary.', 
    category: 'Capture', 
    completed: false, 
    level: 'B1',
    exerciseType: 'reading',
    exerciseData: {
      text: VENICE_TEXT,
      vocabulary: [
        "Unique (adjective): One-of-a-kind or special.",
        "Vibrant (adjective): Full of energy and life.",
        "Infectious (adjective): Spreading quickly and easily.",
        "Over-tourism (noun): Too many tourists visiting a particular place.",
        "Infrastructure (noun): The buildings, roads, and facilities that support a city.",
        "To inspire (verb): To motivate or encourage someone.",
        "To rejuvenate (verb): To restore someone's energy or vitality."
      ]
    }
  },
  { 
    id: 'b1-d6-evaluate', 
    title: 'Comprehension: Venice Questions', 
    description: 'Answer the 8 comprehension questions based on the Venice text.', 
    category: 'Evaluate', 
    completed: false, 
    level: 'B1',
    exerciseType: 'writing',
    exerciseData: {
      text: VENICE_TEXT,
      prompt: `Answer the following questions based on the text:

1. What is Venice famous for?
2. What can be seen in St. Mark's Square?
3. How many bridges and canals are there in Venice?
4. What type of museums and galleries can be found in Venice?
5. What is the population of Venice?
6. What are some of the challenges that Venice has faced in recent years?
7. How does Venice feel despite its size?
8. What is one of the reasons why Venice is so popular among tourists?

(Write your answers below. Compare your responses with the text when finished!)`
    }
  },
  { 
    id: 'b1-d6-activate', 
    title: 'Writing: Summary & Reflection', 
    description: 'Summarize the text in your own words and write about what you learned.', 
    category: 'Activate', 
    completed: false, 
    level: 'B1',
    exerciseType: 'writing',
    exerciseData: {
      text: VENICE_TEXT,
      prompt: `Complete the following writing activities based on the Venice reading:

1. Summarize the text in your own words (3-5 sentences).
2. Write a short paragraph about what you learned from reading the text.
3. Bonus: Try using at least two of the new vocabulary words (unique, vibrant, infectious, over-tourism, infrastructure, inspire, rejuvenate).`
    }
  },
  { 
    id: 'b1-d6-reinforce', 
    title: 'Speaking & Discussion: Venice', 
    description: 'Record an audio or practice answering the discussion questions.', 
    category: 'Reinforce', 
    completed: false, 
    level: 'B1',
    exerciseType: 'recording',
    exerciseData: {
      prompt: `Record a 1-2 minute audio answering these discussion questions:

1. What do you think is the most unique feature of Venice?
2. Have you ever visited a city that was very different from your own? What was it like?
3. How do you think Venice could be improved or preserved in the future?`
    }
  }
];

export const B1_SERIES = [B1_DAY_1, B1_DAY_2, B1_DAY_3, B1_DAY_4, B1_DAY_5, B1_DAY_6];

// B2 Series (Comprehensive Intermediate-Advanced Framework)
const B2_DAY_1: StudyTask[] = [
  {
    id: 'b2-d1-reading',
    title: 'Reading: Decoupling Monolithic Architectures',
    description: 'Read an analytical engineering text and master high-impact B2 vocabulary.',
    category: 'Capture',
    completed: false,
    level: 'B2',
    exerciseType: 'reading',
    exerciseData: {
      text: `For decades, software companies favored monolithic architectures because they were straightforward to build, test, and deploy in the initial stages of a product. In a monolith, every component—from user authentication to payment processing—resides within a single unified codebase.

However, as organizations scale and engineering teams expand to hundreds of developers, the monolithic paradigm often reveals critical bottlenecks. A minor bug in a non-essential module can inadvertently bring down the entire application. Moreover, continuous deployment becomes cumbersome because any trivial change requires rebuilding and testing the whole system.

To mitigate these drawbacks, many modern tech leaders choose to decouple their architectures into microservices. Under this approach, independent services communicate via lightweight APIs or event streams. Each microservice can be scaled horizontally and deployed independently using dedicated CI/CD pipelines.

Nevertheless, microservices introduce substantial operational overhead. Distributed systems require sophisticated monitoring, robust network resilience, and meticulous data consistency protocols. Teams must carefully evaluate whether the added complexity genuinely justifies the architectural benefits before embarking on a complete rewrite.`,
      vocabulary: [
        "To decouple (verb): To separate or disconnect two systems or concepts so they operate independently.",
        "Bottleneck (noun): A point of congestion in a system that impedes overall progress or performance.",
        "Paradigm (noun): A typical example, model, or distinct pattern of thought.",
        "Cumbersome (adjective): Large, heavy, or complicated, and therefore slow or difficult to manage.",
        "Overhead (noun): The extra processing time, memory, or administrative cost required to perform a task."
      ]
    }
  },
  {
    id: 'b2-d1-fill-in-blanks',
    title: 'Sentence Completion: Phrasal Verbs & Workplace Collocations',
    description: 'Complete the sentences using target workplace phrasal verbs.',
    category: 'Activate',
    completed: false,
    level: 'B2',
    exerciseType: 'fill-in-blanks',
    exerciseData: {
      questions: [
        { id: 'q1', sentence: 'Our team needs to __________ our deployment procedures to minimize manual errors.', answer: 'streamline' },
        { id: 'q2', sentence: 'We have to __________ the remaining edge cases before the client presentation.', answer: 'iron out' },
        { id: 'q3', sentence: 'The engineering department decided to gradually __________ the legacy payment gateway.', answer: 'phase out' },
        { id: 'q4', sentence: 'Could you please __________ the database latency issue during tomorrow’s retrospective?', answer: 'bring up' },
        { id: 'q5', sentence: 'If you __________ any merge conflicts, notify the tech lead immediately.', answer: 'run into' },
      ]
    }
  },
  {
    id: 'b2-d1-error-spotting',
    title: 'Encuentra el Error: Conditionals & Prepositions',
    description: 'Detect and correct typical B2 grammatical errors in technical communications.',
    category: 'Reinforce',
    completed: false,
    level: 'B2',
    exerciseType: 'error-spotting',
    exerciseData: {
      errorItems: [
        {
          id: 'err1',
          sentence: 'If we would have tested the endpoint thoroughly, we would not have had downtime yesterday.',
          errorWord: 'would have tested',
          correctAnswer: 'had tested',
          explanation: 'In Third Conditional "if" clauses, use the Past Perfect (had + past participle), never "would have". Pattern: If + had tested..., we would have avoided...'
        },
        {
          id: 'err2',
          sentence: 'Despite of the strict deadline, the squad managed to deliver all critical user stories.',
          errorWord: 'Despite of',
          correctAnswer: 'Despite',
          explanation: '"Despite" is a preposition and is never followed by "of". Use either "Despite + noun" or "In spite of + noun".'
        },
        {
          id: 'err3',
          sentence: 'I am really looking forward to hear your feedback on the newly submitted pull request.',
          errorWord: 'to hear',
          correctAnswer: 'to hearing',
          explanation: 'In the phrasal verb "look forward to", "to" acts as a preposition, so it must be followed by a gerund (-ing form), not a base infinitive.'
        },
        {
          id: 'err4',
          sentence: 'She explained me the new deployment workflow during our morning sync.',
          errorWord: 'explained me',
          correctAnswer: 'explained to me',
          explanation: 'The verb "explain" requires the preposition "to" before an indirect person object: "explain something to someone" or "explain to someone that...".'
        }
      ]
    }
  },
  {
    id: 'b2-d1-evaluate',
    title: 'Grammar in Action: Mixed Conditionals Post-Mortem',
    description: 'Draft a brief post-mortem report using Second, Third, and Mixed Conditionals.',
    category: 'Evaluate',
    completed: false,
    level: 'B2',
    exerciseType: 'writing',
    exerciseData: {
      prompt: `Draft a brief engineering incident post-mortem (70-120 words) analyzing a server crash:

Requirements:
1. Use at least one Third Conditional to explain the past root cause (e.g. "If the QA team had caught the query leak earlier, the server would not have crashed.").
2. Use at least one Mixed Conditional connecting a past action with the present state (e.g. "If we had refactored the database last month, our application would be faster and more stable today.").
3. Propose two concrete preventative measures using modal verbs ("We should implement...", "The team must establish...").`
    }
  }
];

const B2_DAY_2: StudyTask[] = [
  {
    id: 'b2-d2-reading',
    title: 'Reading: The Art of Asynchronous Communication',
    description: 'Analyze deep work, cognitive load, and remote communication strategies.',
    category: 'Capture',
    completed: false,
    level: 'B2',
    exerciseType: 'reading',
    exerciseData: {
      text: `The transition to distributed and remote work environments has forced organizations to reconsider how information flows across time zones. For decades, the default mode of workplace interaction was synchronous: real-time meetings, immediate chat notifications, and tap-on-the-shoulder interruptions.

While synchronous communication provides immediate gratification and fosters social connection, it incurs a tremendous tax on deep cognitive work. Context switching—the constant fragmentation of attention caused by notifications—prevents knowledge workers from entering states of sustained focus. Research suggests that after an unexpected interruption, it takes an average of twenty-three minutes to return to the original task.

To combat cognitive exhaustion, high-performing organizations are deliberately pivoting toward asynchronous communication. In an asynchronous culture, team members document ideas thoroughly in shared knowledge repositories, formulate well-reasoned proposals, and respect that immediate responses are not required for non-urgent matters.

Embracing asynchronous habits requires emotional maturity and organizational discipline. Messages must be crafted with meticulous clarity to eliminate ambiguity, since follow-up clarifications cannot happen instantaneously. When executed effectively, however, asynchronous collaboration empowers developers with uninterrupted blocks for deep work and democratizes decision-making across global time zones.`,
      vocabulary: [
        "Asynchronous (adjective): Not occurring at the same time; communication where participants do not need to be online concurrently.",
        "Cognitive load (noun): The total amount of mental effort being used in the working memory.",
        "Context switching (noun): The process of shifting attention between multiple unrelated tasks or tools.",
        "Ambiguity (noun): The quality of being open to more than one interpretation; inexactness.",
        "To democratize (verb): To make something accessible to everyone."
      ]
    }
  },
  {
    id: 'b2-d2-fill-in-blanks',
    title: 'Sentence Completion: Modals of Past Deduction & Speculation',
    description: 'Complete the sentences using must have, can’t have, could have, or should have.',
    category: 'Activate',
    completed: false,
    level: 'B2',
    exerciseType: 'fill-in-blanks',
    exerciseData: {
      questions: [
        { id: 'q1', sentence: 'The server logs show zero requests at midnight; the background cron job __________ during the scheduled restart.', answer: 'must have failed' },
        { id: 'q2', sentence: 'Sarah __________ the production branch because only repository administrators have write permissions.', answer: 'can\'t have deleted' },
        { id: 'q3', sentence: 'We __________ the data inconsistency if we had enabled strict foreign key constraints.', answer: 'could have prevented' },
        { id: 'q4', sentence: 'You __________ the security team the moment you detected unauthorized token activity.', answer: 'should have notified' },
        { id: 'q5', sentence: 'The client was pleased with our demo; they __________ the quarterly budget proposal already.', answer: 'might have approved' },
      ]
    }
  },
  {
    id: 'b2-d2-error-spotting',
    title: 'Encuentra el Error: Verb Patterns & Gerunds vs Infinitives',
    description: 'Identify and fix subtle verb pattern errors typical of B2 proficiency.',
    category: 'Reinforce',
    completed: false,
    level: 'B2',
    exerciseType: 'error-spotting',
    exerciseData: {
      errorItems: [
        {
          id: 'err1',
          sentence: 'The tech director suggested me to take an advanced AWS certification course.',
          errorWord: 'suggested me to take',
          correctAnswer: 'suggested that I take',
          explanation: 'The verb "suggest" never takes an indirect object pronoun followed by an infinitive (suggest someone to do). Use "suggest that someone (should) do something" or "suggest doing something".'
        },
        {
          id: 'err2',
          sentence: 'During the sprint review, we discussed about the new caching policy for forty minutes.',
          errorWord: 'discussed about',
          correctAnswer: 'discussed',
          explanation: 'The verb "discuss" is transitive and takes a direct object without the preposition "about". Say "we discussed the policy", not "we discussed about the policy".'
        },
        {
          id: 'err3',
          sentence: 'After three years in Berlin, he is finally used to work with cross-functional European teams.',
          errorWord: 'used to work',
          correctAnswer: 'used to working',
          explanation: '"Be used to" expresses familiarity and must be followed by a noun or gerund (-ing form), unlike "used to + base verb" which describes past discontinued habits.'
        },
        {
          id: 'err4',
          sentence: 'We stopped to use the old logging library because it caused memory leaks in production.',
          errorWord: 'stopped to use',
          correctAnswer: 'stopped using',
          explanation: '"Stop doing something" means to discontinue an action permanently. "Stop to do something" means pausing an activity in order to begin another one.'
        }
      ]
    }
  },
  {
    id: 'b2-d2-evaluate',
    title: 'Executive Communication: Negotiating Scope Changes Diplomatically',
    description: 'Draft a diplomatic status email negotiating deliverables and trade-offs.',
    category: 'Evaluate',
    completed: false,
    level: 'B2',
    exerciseType: 'writing',
    exerciseData: {
      prompt: `Draft a diplomatic email (80-130 words) to an external client explaining that their newly requested feature will require postponing another deliverable:

Checklist:
1. Professional greeting and genuine appreciation for their partnership.
2. Acknowledge the business value of their requested feature.
3. State the trade-off diplomatically using connectors (e.g. "Whereas we understand the urgency...", "In order to maintain strict quality standards...").
4. Offer two viable alternative options and request a brief 15-minute alignment call.`
    }
  }
];

const B2_DAY_3: StudyTask[] = [
  {
    id: 'b2-d3-reading',
    title: 'Reading: Sustainable Cities & Urban Tech',
    description: 'Explore green building, circular architecture, and municipal IoT systems.',
    category: 'Capture',
    completed: false,
    level: 'B2',
    exerciseType: 'reading',
    exerciseData: {
      text: `Metropolitan centers generate more than seventy percent of global carbon emissions while occupying merely three percent of the planet's land surface. Consequently, urban planners, software engineers, and environmental scientists are collaborating to transform legacy cities into sustainable ecosystems through digital retrofitting.

Traditional urban infrastructure relies on linear consumption models: raw materials are extracted, manufactured into building components, and discarded at the end of their lifecycle. In contrast, the circular economy model prioritizes modular architecture, adaptive reuse, and recycling. Old industrial warehouses are retrofitted with thermal-efficient façades and rooftop solar arrays that feed excess energy back into decentralized smart grids.

Underpinning these green transformations is Internet-of-Things (IoT) telemetry. Thousands of environmental sensors monitor air quality, traffic flow, and energy dissipation in real time. Machine learning algorithms analyze this telemetry to optimize traffic lights, thereby curtailing vehicular idle times and carbon output.

However, the transition toward intelligent sustainable cities raises critical questions regarding civic equity and data privacy. Smart city initiatives must ensure that green retrofits do not trigger aggressive gentrification that displaces long-standing local residents. Sustainable innovation is genuinely successful only when ecological responsibility goes hand in hand with social inclusion.`,
      vocabulary: [
        "To retrofit (verb): To add a component or feature to something that did not have it when first constructed.",
        "Circular economy (noun): An economic model targeted at minimizing waste and making the most of resources.",
        "Telemetry (noun): The automatic collection and transmission of data from remote sensors.",
        "To curtail (verb): To reduce in extent or quantity; to impose a restriction on.",
        "Gentrification (noun): The process of renovating a district so that it conforms to middle-class taste, often displacing lower-income residents."
      ]
    }
  },
  {
    id: 'b2-d3-fill-in-blanks',
    title: 'Sentence Completion: Advanced Connectors & Discourse Markers',
    description: 'Fill in the blanks with: whereas, in spite of, consequently, furthermore, on the grounds that.',
    category: 'Activate',
    completed: false,
    level: 'B2',
    exerciseType: 'fill-in-blanks',
    exerciseData: {
      questions: [
        { id: 'q1', sentence: 'The startup failed to secure venture capital; __________, they had to scale down hiring plans.', answer: 'consequently' },
        { id: 'q2', sentence: 'Frontend engineers prefer working with declarative UI components, __________ backend teams prioritize query throughput.', answer: 'whereas' },
        { id: 'q3', sentence: 'The cloud migration was executed seamlessly __________ the complex legacy database structure.', answer: 'in spite of' },
        { id: 'q4', sentence: 'The audit rejected the security proposal __________ it lacked multi-factor authentication for administrators.', answer: 'on the grounds that' },
        { id: 'q5', sentence: 'The platform offers automated backups; __________, it encrypts sensitive data both at rest and in transit.', answer: 'furthermore' },
      ]
    }
  },
  {
    id: 'b2-d3-error-spotting',
    title: 'Encuentra el Error: Passive Voice & Relative Pronouns',
    description: 'Correct errors involving intransitive passives, irregular participles, and agreement.',
    category: 'Reinforce',
    completed: false,
    level: 'B2',
    exerciseType: 'error-spotting',
    exerciseData: {
      errorItems: [
        {
          id: 'err1',
          sentence: 'The critical infrastructure incident was happened during the third-quarter deployment.',
          errorWord: 'was happened',
          correctAnswer: 'happened',
          explanation: 'The verb "happen" is intransitive and cannot be used in the passive voice. Say "The incident happened", never "was happened".'
        },
        {
          id: 'err2',
          sentence: 'The senior architect who project won the industry innovation award will present tomorrow.',
          errorWord: 'who project',
          correctAnswer: 'whose project',
          explanation: 'Use the possessive relative pronoun "whose" to indicate ownership (whose project), not the subject pronoun "who".'
        },
        {
          id: 'err3',
          sentence: 'Neither the lead developer nor the product managers was informed about the emergency maintenance.',
          errorWord: 'was informed',
          correctAnswer: 'were informed',
          explanation: 'With "neither... nor...", when plural and singular subjects are joined, the verb agrees with the closer subject ("product managers" is plural, so use "were informed").'
        },
        {
          id: 'err4',
          sentence: 'The distributed database was leaded by our principal research scientist.',
          errorWord: 'leaded',
          correctAnswer: 'led',
          explanation: 'The past participle of the irregular verb "lead" is "led", not "leaded".'
        }
      ]
    }
  },
  {
    id: 'b2-d3-reinforce',
    title: 'Recorded Pitch: Defending Green Tech Investments',
    description: 'Record a persuasive 1-2 minute monologue championing sustainable infrastructure.',
    category: 'Reinforce',
    completed: false,
    level: 'B2',
    exerciseType: 'recording',
    exerciseData: {
      prompt: `Record an audio response (1-2 minutes) presenting a persuasive argument:

Scenario:
You are pitching an initiative to migrate your company’s compute instances to 100% renewable energy datacenters.

Address the following points:
1. State the environmental and commercial benefits (using connectors: furthermore, consequently, whereas).
2. Anticipate an objection regarding migration costs (using conditional: "Even if initial migration costs are higher, the long-term ROI...").
3. Conclude with a strong call to action for the leadership team.`
    }
  }
];

export const B2_SERIES = [B2_DAY_1, B2_DAY_2, B2_DAY_3];

export const OTHER_TASKS: StudyTask[] = [
  // C1 Tasks (Placeholders)
  { id: 'c1-1', title: 'New Vocabulary from Podcast', description: 'Extract advanced idioms from HBR IdeaCast.', category: 'Capture', completed: false, level: 'C1' },
  { id: 'c1-2', title: 'Collocations Journal', description: 'Review your Anki deck of business collocations.', category: 'Capture', completed: false, level: 'C1' },
  { id: 'c1-3', title: 'Speaking Drill: Mock Interview', description: 'Simulate a behavioral interview question.', category: 'Activate', completed: false, level: 'C1' },
  { id: 'c1-4', title: 'Spaced Repetition Flashcards', description: 'Review C1 vocabulary cards.', category: 'Reinforce', completed: false, level: 'C1' },
  { id: 'c1-5', title: 'Weekly Progress Review', description: 'Write a self-assessment using advanced connectors.', category: 'Evaluate', completed: false, level: 'C1' },
];

const STORAGE_KEY_V1 = 'study_app_progress_v1';
const LEGACY_STORAGE_KEY = 'study_app_progress';

interface ProgressState {
  lastDate: string;
  dayIndex: number; // For series rotation
  completedTaskIds: string[];
}

const getTodayString = () => new Date().toDateString();

const loadProgress = (): ProgressState => {
  const today = getTodayString();
  try {
    const data = localStorage.getItem(STORAGE_KEY_V1) || localStorage.getItem(LEGACY_STORAGE_KEY);
    if (data) {
      const parsed: ProgressState = JSON.parse(data);
      if (parsed.lastDate !== today) {
        // Reset tasks for a new day, advance dayIndex
        return {
          lastDate: today,
          dayIndex: parsed.dayIndex + 1,
          completedTaskIds: []
        };
      }
      return parsed;
    }
  } catch (e) {
    console.error("Failed to load progress", e);
  }
  return { lastDate: today, dayIndex: 0, completedTaskIds: [] };
};

const saveProgress = (state: ProgressState) => {
  localStorage.setItem(STORAGE_KEY_V1, JSON.stringify(state));
};

export const planApi = {
  getTasksByLevelAndDay: async (level: EnglishLevel, dayIndex: number): Promise<StudyTask[]> => {
    // Artificial latency for Suspense (250ms)
    await new Promise((resolve) => setTimeout(resolve, 250));
    const state = loadProgress();
    const completedSet = new Set(state.completedTaskIds);
    
    // Generate the 5 distinct daily tasks with 8 exercises each
    const dailyTasks = getDailyTasks(level, dayIndex);

    return dailyTasks.map(task => ({
      ...task,
      completed: completedSet.has(task.id)
    }));
  },

  getAllDaysProgress: (level: EnglishLevel): Record<number, { completed: number; total: number }> => {
    const state = loadProgress();
    const completedSet = new Set(state.completedTaskIds);
    const result: Record<number, { completed: number; total: number }> = {};

    for (let day = 0; day < TOTAL_DAYS; day++) {
      const dayTasks = getDailyTasks(level, day);
      const completed = dayTasks.filter(t => completedSet.has(t.id)).length;
      result[day] = {
        completed,
        total: dayTasks.length
      };
    }

    return result;
  },

  getActiveDayIndex: (): number => {
    const state = loadProgress();
    return state.dayIndex % TOTAL_DAYS;
  },

  getTasksByLevel: async (level: EnglishLevel): Promise<StudyTask[]> => {
    const state = loadProgress();
    return planApi.getTasksByLevelAndDay(level, state.dayIndex % TOTAL_DAYS);
  },
  
  toggleTaskCompletion: async (taskId: string): Promise<void> => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    const state = loadProgress();
    if (state.completedTaskIds.includes(taskId)) {
      state.completedTaskIds = state.completedTaskIds.filter(id => id !== taskId);
    } else {
      state.completedTaskIds.push(taskId);
    }
    saveProgress(state);
  },
  
  completeTask: async (taskId: string): Promise<void> => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    const state = loadProgress();
    if (!state.completedTaskIds.includes(taskId)) {
      state.completedTaskIds.push(taskId);
      saveProgress(state);
    }
  }
};
