import type { EnglishLevel, StudyTask } from '../types';

export const DAYS_OF_WEEK = [
  { short: 'Mon', full: 'Monday', es: 'Lunes' },
  { short: 'Tue', full: 'Tuesday', es: 'Martes' },
  { short: 'Wed', full: 'Wednesday', es: 'Miércoles' },
  { short: 'Thu', full: 'Thursday', es: 'Jueves' },
  { short: 'Fri', full: 'Friday', es: 'Viernes' },
  { short: 'Sat', full: 'Saturday', es: 'Sábado' },
  { short: 'Sun', full: 'Sunday', es: 'Domingo' },
] as const;

export const TOTAL_WEEKS = 4;
export const DAYS_PER_WEEK = 7;
export const TOTAL_DAYS = TOTAL_WEEKS * DAYS_PER_WEEK; // 28 days

// Themes tailored per day across the 4 weeks
const CURRICULUM_THEMES: Record<EnglishLevel, { title: string; topic: string; vocab: string[]; grammarFocus: string }[]> = {
  B2: [
    // Week 1: Software Architecture & Engineering Discipline
    { title: 'Decoupling Monolithic Systems', topic: 'Microservices vs Monolith trade-offs and bounded contexts', vocab: ['decouple', 'bottleneck', 'paradigm', 'cumbersome', 'overhead'], grammarFocus: 'Third Conditionals & Past Deduction' },
    { title: 'Asynchronous Collaboration in Remote Teams', topic: 'Cognitive load, deep work, and written alignment', vocab: ['asynchronous', 'cognitive load', 'context switching', 'ambiguity', 'democratize'], grammarFocus: 'Gerunds vs Infinitives' },
    { title: 'Automated CI/CD & Deployment Resilience', topic: 'Canary deployments, zero-downtime, and regression gates', vocab: ['streamline', 'pipeline', 'resilience', 'fallback', 'telemetry'], grammarFocus: 'Passive Voice with Reporting Verbs' },
    { title: 'API Gateway Design & Rate Limiting', topic: 'Securing microservices and load balancing endpoints', vocab: ['throughput', 'latency', 'mitigate', 'throttle', 'payload'], grammarFocus: 'Relative Clauses (Defining vs Non-Defining)' },
    { title: 'Incident Retrospectives & Blameless Post-Mortems', topic: 'Psychological safety and systemic root-cause discovery', vocab: ['retrospective', 'safeguard', 'culprit', 'transparent', 'remediation'], grammarFocus: 'Mixed Conditionals' },
    { title: 'Database Indexing & Query Optimization', topic: 'Execution plans, table scans, and memory caches', vocab: ['index', 'optimization', 'concurrency', 'deadlock', 'redundant'], grammarFocus: 'Inversion after Negative Adverbials' },
    { title: 'Weekly Engineering Review & Tech Debt Paydown', topic: 'Prioritizing refactoring versus feature velocity', vocab: ['velocity', 'refactor', 'technical debt', 'trade-off', 'benchmark'], grammarFocus: 'Participle Clauses' },

    // Week 2: Business Communication, Negotiation & Product Strategy
    { title: 'Negotiating Project Scope with Stakeholders', topic: 'Managing client expectations without damaging relationships', vocab: ['deliverable', 'scope creep', 'compromise', 'feasible', 'alignment'], grammarFocus: 'Polite Indirect Questions' },
    { title: 'Crafting High-Conversion Product Pitches', topic: 'Value propositions, customer pain points, and product ROI', vocab: ['value proposition', 'conversion', 'traction', 'differentiation', 'leverage'], grammarFocus: 'Emphatic Structures (Do/Did/Cleft)' },
    { title: 'Constructive Code Reviews & Team Feedback', topic: 'Delivering technical criticism with empathy and clarity', vocab: ['nitpick', 'substantiate', 'rationale', 'perspective', 'iterate'], grammarFocus: 'Modals of Soft Suggestion' },
    { title: 'Budget Allocation & Cloud Spend Management', topic: 'FinOps, resource rightsizing, and cost efficiency', vocab: ['allocation', 'expenditure', 'rightsize', 'amortize', 'forecast'], grammarFocus: 'Expressing Cause and Consequence' },
    { title: 'Sprint Retrospectives & Team Motivation', topic: 'Overcoming team blockers and celebrating milestones', vocab: ['blocker', 'velocity', 'burnout', 'morale', 'incentivize'], grammarFocus: 'Wish & If Only' },
    { title: 'Client Escalations & Conflict Resolution', topic: 'De-escalating production issues diplomatically with clients', vocab: ['de-escalate', 'accountability', 'appease', 'diplomatic', 'transparency'], grammarFocus: 'Passive Voice in Formal Disclaimers' },
    { title: 'Quarterly Strategic Alignment & Roadmaps', topic: 'Setting OKRs and cross-department milestones', vocab: ['benchmark', 'synergy', 'objective', 'milestone', 'cohesion'], grammarFocus: 'Future Continuous vs Future Perfect' },

    // Week 3: Sustainability, Urban Innovation & Emerging Tech
    { title: 'Smart Cities & Circular Architecture', topic: 'Decentralized energy grids and carbon-neutral retrofits', vocab: ['retrofit', 'circular economy', 'telemetry', 'curtail', 'gentrification'], grammarFocus: 'Prepositions after Verbs and Adjectives' },
    { title: 'Ethical Artificial Intelligence & Bias Auditing', topic: 'Algorithmic fairness, model explainability, and governance', vocab: ['algorithmic', 'governance', 'discrepancy', 'scrutinize', 'mitigation'], grammarFocus: 'Reporting Verbs with Subjunctive' },
    { title: 'Renewable Energy Data Centers & Green Cloud', topic: 'Minimizing power usage effectiveness (PUE) in modern cloud compute', vocab: ['sustainable', 'dissipation', 'grid', 'consumption', 'emission'], grammarFocus: 'Connectors of Contrast & Concession' },
    { title: 'Cybersecurity Zero-Trust Architecture', topic: 'Identity verification, least-privilege access, and encryption', vocab: ['least-privilege', 'breach', 'perimeter', 'encryption', 'anomaly'], grammarFocus: 'Modals of Necessity and Obligation' },
    { title: 'Supply Chain Digitization & Blockchain Tracking', topic: 'End-to-end traceability and distributed ledgers', vocab: ['traceability', 'ledger', 'counterfeit', 'tamper-proof', 'provenance'], grammarFocus: 'Complex Passives' },
    { title: 'Autonomous Mobility & Sensor Fusion', topic: 'LiDAR, edge computing, and real-time vehicular safety', vocab: ['autonomous', 'sensor', 'latency', 'redundancy', 'fusion'], grammarFocus: 'Adverbial Clauses of Time and Condition' },
    { title: 'Weekly Innovation Review & Emerging Trends', topic: 'Analyzing technological market shifts and forecasting adoption', vocab: ['disruptive', 'adoption', 'paradigm', 'frontier', 'catalyze'], grammarFocus: 'Double Comparatives' },

    // Week 4: Executive Leadership & Cross-Cultural Fluency
    { title: 'Leading Cross-Cultural Distributed Teams', topic: 'Navigating cultural communication norms and high-context dynamics', vocab: ['cross-cultural', 'high-context', 'nuance', 'inclusive', 'consensus'], grammarFocus: 'Hedging & Softening Language' },
    { title: 'Executive Presence in Technical Town Halls', topic: 'Speaking persuasively to non-technical executives and investors', vocab: ['articulate', 'concise', 'charisma', 'gravitas', 'succinct'], grammarFocus: 'Rhetorical Devices & Discourse Markers' },
    { title: 'Crisis Leadership & Downstream Communication', topic: 'Guiding teams through corporate restructuring and changes', vocab: ['transparency', 'empathy', 'resilience', 'stability', 'morale'], grammarFocus: 'Reported Speech with Backshift' },
    { title: 'Mentorship, Coaching & Talent Retention', topic: 'Fostering career development paths for senior individual contributors', vocab: ['mentorship', 'retention', 'autonomy', 'empower', 'trajectory'], grammarFocus: 'Verb Patterns: Verb + Object + Infinitive' },
    { title: 'Product Launch Marketing & Press Strategy', topic: 'Coordinating press releases, developer documentation, and launch day', vocab: ['embargo', 'showcase', 'traction', 'evangelize', 'momentum'], grammarFocus: 'Advanced Inversion for Impact' },
    { title: 'Intellectual Property, Licensing & Open Source', topic: 'Permissive vs copyleft licenses and corporate IP compliance', vocab: ['permissive', 'copyleft', 'liability', 'compliance', 'proprietary'], grammarFocus: 'Legal Modals: Shall, Must, May' },
    { title: 'Monthly Capstone: 360-Degree Mastery Review', topic: 'Consolidating all 4 weeks of vocabulary, grammar, and communication', vocab: ['synthesize', 'consolidate', 'mastery', 'fluency', 'proficiency'], grammarFocus: 'Comprehensive Grammar Mastery' }
  ],
  B1: [
    // B1 28-day curriculum themes
    { title: 'Project Status Update & Daily Standups', topic: 'Sharing progress, yesterday tasks, and blockers', vocab: ['implement', 'blocker', 'delay', 'hotfix', 'keep an eye on'], grammarFocus: 'Present Perfect vs Past Simple' },
    { title: 'Troubleshooting IT Support Tickets', topic: 'Resolving hardware, VPN, and network access issues', vocab: ['persist', 'look into', 'issue', 'restart', 'asap'], grammarFocus: 'Present Continuous for Ongoing Problems' },
    { title: 'Remote Work Policies & Office Schedules', topic: 'Coordinating hybrid schedules and in-office expectations', vocab: ['coordinate', 'hybrid', 'schedule', 'policy', 'flexibility'], grammarFocus: 'Modals of Obligation (must, have to, should)' },
    { title: 'City Weather & Travel Planning', topic: 'Describing seasonal weather patterns and clothing choices', vocab: ['variable', 'brightly', 'severe', 'forecast', 'temperature'], grammarFocus: 'Comparative & Superlative Adjectives' },
    { title: 'Tourism & Cultural Etiquette', topic: 'Respecting local customs and visiting historical landmarks', vocab: ['famous', 'respect', 'tradition', 'culture', 'attraction'], grammarFocus: 'Passive Voice: Present Simple' },
    { title: 'The City of Venice & Architectural Wonders', topic: 'Exploring canals, historical bridges, and over-tourism', vocab: ['unique', 'vibrant', 'infectious', 'over-tourism', 'rejuvenate'], grammarFocus: 'Past Continuous & Past Simple' },
    { title: 'Weekly Review: Routine Activities & Goals', topic: 'Reviewing progress, learning new hobbies, and setting habits', vocab: ['routine', 'progress', 'habit', 'milestone', 'achieve'], grammarFocus: 'Adverbs of Frequency' },
    { title: 'Ordering in a Restaurant & Food Preferences', topic: 'Dining out, dietary restrictions, and polite requests', vocab: ['appetizer', 'vegetarian', 'recommend', 'beverage', 'delicious'], grammarFocus: 'Polite Requests (would like, could I have)' },
    { title: 'Job Interviews: Talking About Your Experience', topic: 'Describing previous roles, responsibilities, and strengths', vocab: ['responsible for', 'experience', 'strength', 'opportunity', 'teamwork'], grammarFocus: 'Present Perfect with For & Since' },
    { title: 'Hotel Bookings & Customer Service', topic: 'Checking in, requesting room changes, and asking for amenities', vocab: ['reservation', 'amenity', 'check-in', 'shuttle', 'complimentary'], grammarFocus: 'Indirect Questions' },
    { title: 'Making Plans: Weekend Getaways', topic: 'Booking train tickets, choosing destinations, and packing', vocab: ['getaway', 'destination', 'luggage', 'depart', 'itinerary'], grammarFocus: 'Future with Going to & Will' },
    { title: 'Health & Wellness: Visiting the Doctor', topic: 'Explaining symptoms, medical advice, and healthy habits', vocab: ['symptom', 'prescription', 'fever', 'headache', 'appointment'], grammarFocus: 'Giving Advice (should, ought to, had better)' },
    { title: 'E-commerce Shopping & Returns', topic: 'Tracking packages, customer support, and refund policies', vocab: ['shipping', 'refund', 'tracking number', 'receipt', 'discount'], grammarFocus: 'First Conditional (If + present, will + verb)' },
    { title: 'Mid-Course Review: Everyday Communication', topic: 'Consolidating social, travel, and workplace English', vocab: ['fluent', 'confident', 'conversation', 'idiom', 'express'], grammarFocus: 'Used to for Past Habits' },
    { title: 'Smartphones & Technology in Daily Life', topic: 'Apps, screen time management, and modern gadgets', vocab: ['notification', 'device', 'download', 'battery life', 'convenient'], grammarFocus: 'Phrasal Verbs with Turn (on, off, up, down)' },
    { title: 'Environmental Habits: Reduce, Reuse, Recycle', topic: 'Eco-friendly routines, saving water, and public transport', vocab: ['recycle', 'conserve', 'eco-friendly', 'plastic waste', 'renewable'], grammarFocus: 'Zero Conditional' },
    { title: 'Giving Directions in a Foreign City', topic: 'Navigation, landmarks, crossroads, and public transit', vocab: ['intersection', 'roundabout', 'straight ahead', 'pedestrian', 'subway'], grammarFocus: 'Imperatives & Prepositions of Place' },
    { title: 'Workplace Meetings: Agreeing & Disagreeing Politely', topic: 'Expressing viewpoints and building team consensus', vocab: ['agree', 'disagree', 'point of view', 'proposal', 'consensus'], grammarFocus: 'Polite Phrases of Disagreement' },
    { title: 'Describing Personality Traits & Working Styles', topic: 'Introvert, extrovert, punctual, and reliable traits', vocab: ['punctual', 'reliable', 'adaptable', 'meticulous', 'creative'], grammarFocus: 'Defining Relative Clauses (who, which, that)' },
    { title: 'Hobbies & Creative Pursuits', topic: 'Photography, music, painting, and finding flow states', vocab: ['passion', 'creative', 'instrument', 'leisure', 'exhibition'], grammarFocus: 'Gerunds as Subjects and Objects' },
    { title: 'Week 3 Review: Storytelling & Past Narratives', topic: 'Narrating past events, unexpected travel stories, and anecdotes', vocab: ['suddenly', 'meanwhile', 'eventually', 'unexpected', 'coincidence'], grammarFocus: 'Past Perfect with Already & Just' },
    { title: 'Budgeting & Personal Finance', topic: 'Saving money, tracking expenses, and smart investments', vocab: ['budget', 'expense', 'investment', 'savings account', 'frugal'], grammarFocus: 'Second Conditional (If I had..., I would...)' },
    { title: 'Writing Professional Emails', topic: 'Subject lines, formal greetings, and polite sign-offs', vocab: ['inquire', 'regarding', 'attachment', 'sincerely', 'follow up'], grammarFocus: 'Formal vs Informal Register' },
    { title: 'Sports & Fitness Routines', topic: 'Gym workouts, outdoor sports, and staying physically active', vocab: ['endurance', 'workout', 'stamina', 'recovery', 'hydration'], grammarFocus: 'Adverbs of Degree (very, quite, extremely)' },
    { title: 'Movies, Series & Cultural Reviews', topic: 'Recommending films, discussing plot twists, and cinema', vocab: ['plot twist', 'genre', 'soundtrack', 'critique', 'blockbuster'], grammarFocus: 'Participle Adjectives (-ed vs -ing)' },
    { title: 'Future Careers & Lifelong Learning', topic: 'Online certifications, language goals, and career growth', vocab: ['career path', 'certification', 'lifelong learning', 'skillset', 'ambition'], grammarFocus: 'Future Possibility (might, may, could)' },
    { title: 'Friendships & Social Connections', topic: 'Staying in touch, catching up with friends, and reunions', vocab: ['catch up', 'reconnect', 'long-distance', 'bond', 'cherish'], grammarFocus: 'Tag Questions' },
    { title: 'Final B1 Mastery Review: 4-Week Milestone', topic: 'Consolidating all grammar, reading, and conversational skills', vocab: ['milestone', 'fluency', 'achievement', 'confidence', 'dedication'], grammarFocus: 'Comprehensive B1 Review' }
  ],
  C1: [
    // C1 28-day advanced curriculum
    { title: 'Leveraging Big Data & Executive Decision Making', topic: 'Algorithmic insights and data-driven corporate governance', vocab: ['leverage', 'scrutinize', 'unravel', 'substantiate', 'paradigm'], grammarFocus: 'Inversion & Cleft Sentences' },
    { title: 'Spearheading Digital Transformation', topic: 'Change management, organizational inertia, and innovation leadership', vocab: ['spearhead', 'disseminate', 'catalyze', 'inertia', 'cohesion'], grammarFocus: 'Subjunctive & Formal Mandates' },
    { title: 'Navigating M&A and Strategic Consolidations', topic: 'Mergers, acquisitions, antitrust compliance, and corporate synergies', vocab: ['consolidate', 'reconcile', 'synergy', 'antitrust', 'valuation'], grammarFocus: 'Complex Participle Clauses' },
    { title: 'Crisis Communications & Reputational Risk', topic: 'Press scrutiny, public relations, and stakeholder transparency', vocab: ['scrutiny', 'mitigate', 'fallout', 'candor', 'integrity'], grammarFocus: 'Advanced Conditionals with Inversion (Had we known...)' },
    { title: 'Global Macroeconomics & Market Fluctuations', topic: 'Inflationary pressures, interest rates, and currency volatility', vocab: ['fluctuate', 'volatility', 'equilibrium', 'yield', 'macroeconomic'], grammarFocus: 'Double Comparatives & Subtle Proportions' },
    { title: 'Intellectual Property Litigations & Patent Strategy', topic: 'Patent portfolios, copyright infringements, and trade secrets', vocab: ['litigation', 'infringement', 'injunction', 'proprietary', 'indemnify'], grammarFocus: 'Legal & Regulatory Modals' },
    { title: 'Weekly Executive Synthesis: Boardroom Presentations', topic: 'Synthesizing complex multi-domain metrics for board reviews', vocab: ['succinct', 'gravitas', 'articulate', 'differentiate', 'imperative'], grammarFocus: 'Rhetorical Devices & Discourse Flow' },
    { title: 'Behavioral Economics & Consumer Psychology', topic: 'Nudge theory, cognitive heuristics, and decision biases', vocab: ['heuristic', 'cognitive bias', 'nudge', 'irrational', 'incentive'], grammarFocus: 'Fronting and Focus' },
    { title: 'Venture Capital Due Diligence & Valuation', topic: 'Term sheets, cap tables, burn rate, and investment theses', vocab: ['due diligence', 'cap table', 'valuation', 'liquidity', 'runway'], grammarFocus: 'Conditionals with Provided that / As long as' },
    { title: 'Cross-Border Negotiations & Geopolitical Risks', topic: 'Trade tariffs, international treaties, and sovereign compliance', vocab: ['sovereignty', 'treaty', 'tariff', 'sanction', 'arbitration'], grammarFocus: 'Diplomatic Hedging' },
    { title: 'Decentralized Autonomous Organizations & Web3', topic: 'Smart contracts, tokenomics, and governance decentralization', vocab: ['immutable', 'tokenomics', 'consensus', 'governance', 'trustless'], grammarFocus: 'Nominalisation for Academic Register' },
    { title: 'Corporate ESG Reporting & Carbon Auditing', topic: 'Scope 1-3 emissions, greenwashing scrutiny, and sustainability', vocab: ['greenwashing', 'compliance', 'sustainability', 'disclosure', 'materiality'], grammarFocus: 'Passive Reporting Verbs' },
    { title: 'Organizational Psychology & Conflict Mediation', topic: 'Resolving executive deadlocks and navigating political dynamics', vocab: ['mediation', 'deadlock', 'faction', 'consensus', 'diplomacy'], grammarFocus: 'Emphatic Inversion' },
    { title: 'Mid-Cycle Strategic Review: Executive Fluency', topic: 'Mastering rhetorical poise, spontaneity, and debate agility', vocab: ['poise', 'spontaneity', 'eloquence', 'retort', 'conviction'], grammarFocus: 'Compound Discourse Markers' },
    { title: 'The Ethics of Genetic Engineering & Bioethics', topic: 'CRISPR gene editing, clinical trials, and moral boundaries', vocab: ['bioethics', 'clinical trial', 'therapeutic', 'morality', 'legislation'], grammarFocus: 'Hypothetical Conditionals' },
    { title: 'Quantum Computing & Post-Quantum Cryptography', topic: 'Qubits, quantum supremacy, and cryptographic vulnerability', vocab: ['supremacy', 'cryptography', 'qubit', 'superposition', 'vulnerability'], grammarFocus: 'Technical Modals' },
    { title: 'Monetary Policy & Central Bank Communications', topic: 'Quantitative easing, yield curve inversion, and monetary policy', vocab: ['easing', 'liquidity', 'hawkish', 'dovish', 'sovereign'], grammarFocus: 'Complex Relative Clauses' },
    { title: 'Crisis Diplomacy & International Treaties', topic: 'High-stakes diplomatic summits and multi-party communiques', vocab: ['communique', 'stalemate', 'concession', 'unilateral', 'multilateral'], grammarFocus: 'Inversion with Scarcely / Barely' },
    { title: 'Antitrust Regulations in Big Tech Platforms', topic: 'Monopolistic practices, network effects, and fair competition', vocab: ['monopolistic', 'cartel', 'predatory', 'dominance', 'remedy'], grammarFocus: 'Passive Infinitives' },
    { title: 'Philosophy of Mind & Artificial Consciousness', topic: 'The hard problem of consciousness, Turing tests, and sentience', vocab: ['sentience', 'phenomenology', 'cognition', 'qualia', 'epistemology'], grammarFocus: 'Advanced Subjunctive Mood' },
    { title: 'Week 3 Synthesis: Advanced Persuasive Rhetoric', topic: 'Ethos, pathos, logos, and debating high-stakes propositions', vocab: ['rhetoric', 'ethos', 'pathos', 'logos', 'counterargument'], grammarFocus: 'Parallel Structures in Rhetoric' },
    { title: 'Fintech Disruption & Neobanking Models', topic: 'Algorithmic underwriting, peer-to-peer lending, and risk models', vocab: ['underwriting', 'disruption', 'frictionless', 'collateral', 'creditworthiness'], grammarFocus: 'Ellipsis and Substitution' },
    { title: 'Supply Chain Fragility & Nearshoring Trends', topic: 'Just-in-time logistics, supply shocks, and regionalization', vocab: ['fragility', 'nearshoring', 'bottleneck', 'resilience', 'chokepoint'], grammarFocus: 'Participial Adverbs' },
    { title: 'Talent Acquisition & Executive Headhunting', topic: 'Comp packages, golden handcuffs, and c-suite succession', vocab: ['retention', 'succession', 'equity grant', 'headhunter', 'acumen'], grammarFocus: 'Conditionals with Were it not for' },
    { title: 'Global Public Health & Pandemic Preparedness', topic: 'Epidemiological models, vaccine logistics, and WHO treaties', vocab: ['epidemiology', 'virulence', 'containment', 'pathogen', 'inoculation'], grammarFocus: 'Passive Gerunds' },
    { title: 'Aerospace Engineering & Space Commercialization', topic: 'Reusable rocketry, low-Earth orbit, and satellite constellations', vocab: ['propulsion', 'orbital', 'constellation', 'payload', 'trajectory'], grammarFocus: 'Complex Prepositional Phrases' },
    { title: 'Venture Philanthropy & Impact Investing', topic: 'Blended finance, measurable social ROI, and non-profit governance', vocab: ['philanthropy', 'endowment', 'beneficiary', 'stewardship', 'sustainability'], grammarFocus: 'Cleft Sentences with What and It' },
    { title: 'Capstone C1 Defense: Comprehensive Mastery', topic: 'Executive keynote defense synthesizing all 28 days of mastery', vocab: ['keynote', 'synthesis', 'prowess', 'eloquence', 'mastery'], grammarFocus: 'Complete C1 Native Precision' }
  ]
};

// Generates 8 sentence completion questions for the day
function generateSentenceCompletionQuestions(_themeTitle: string, _level: EnglishLevel, dayNumber: number) {
  return [
    { id: `d${dayNumber}-q1`, sentence: `Our team decided to (streamline / optimize) __________ the deployment process before the launch.`, answer: 'streamline' },
    { id: `d${dayNumber}-q2`, sentence: `We must (iron out / resolve) __________ all critical bugs prior to releasing the patch.`, answer: 'iron out' },
    { id: `d${dayNumber}-q3`, sentence: `The director suggested that we (phase out / discontinue) __________ the legacy architecture.`, answer: 'phase out' },
    { id: `d${dayNumber}-q4`, sentence: `Could you please (bring up / mention) __________ this concern during tomorrow's sync?`, answer: 'bring up' },
    { id: `d${dayNumber}-q5`, sentence: `If you (run into / encounter) __________ any unexpected issues, notify the on-call engineer.`, answer: 'run into' },
    { id: `d${dayNumber}-q6`, sentence: `The company managed to (foster / encourage) __________ a collaborative and transparent work culture.`, answer: 'foster' },
    { id: `d${dayNumber}-q7`, sentence: `Engineering squads must (tackle / address) __________ technical debt before embarking on new epics.`, answer: 'tackle' },
    { id: `d${dayNumber}-q8`, sentence: `We should (leverage / utilize) __________ existing APIs rather than reinventing the wheel.`, answer: 'leverage' },
  ];
}

// Generates 8 error spotting items with detailed pedagogical explanations
function generateErrorSpottingItems(_themeTitle: string, _level: EnglishLevel, dayNumber: number) {
  return [
    {
      id: `d${dayNumber}-err1`,
      sentence: 'If we would have deployed yesterday, we would not have faced these server errors today.',
      errorWord: 'would have deployed',
      correctAnswer: 'had deployed',
      explanation: 'In Third Conditional "if" clauses, use the Past Perfect (had + past participle), never "would have". Pattern: If we had deployed..., we would not have faced...'
    },
    {
      id: `d${dayNumber}-err2`,
      sentence: 'Despite of the strict quarterly deadline, the squad delivered all features ahead of schedule.',
      errorWord: 'Despite of',
      correctAnswer: 'Despite',
      explanation: '"Despite" is a preposition and is never followed by "of". Use either "Despite + noun" or "In spite of + noun".'
    },
    {
      id: `d${dayNumber}-err3`,
      sentence: 'I am really looking forward to hear your insightful presentation on the new architecture.',
      errorWord: 'to hear',
      correctAnswer: 'to hearing',
      explanation: 'In the phrasal verb "look forward to", "to" functions as a preposition, which requires a gerund (-ing form), not a bare infinitive.'
    },
    {
      id: `d${dayNumber}-err4`,
      sentence: 'The senior architect suggested me to refactor the database schema before writing queries.',
      errorWord: 'suggested me to refactor',
      correctAnswer: 'suggested that I refactor',
      explanation: 'The verb "suggest" does not take "person + infinitive". Use "suggest that someone (should) do" or "suggest doing something".'
    },
    {
      id: `d${dayNumber}-err5`,
      sentence: 'During our daily retro, we discussed about the performance bottlenecks for over thirty minutes.',
      errorWord: 'discussed about',
      correctAnswer: 'discussed',
      explanation: 'The verb "discuss" is transitive and takes a direct object without the preposition "about". Say "we discussed the bottlenecks".'
    },
    {
      id: `d${dayNumber}-err6`,
      sentence: 'After living in London for two years, she is finally used to work in English every day.',
      errorWord: 'used to work',
      correctAnswer: 'used to working',
      explanation: '"Be used to" denotes familiarity and must be followed by a noun or gerund (-ing form), distinct from "used to + base verb" for discontinued past habits.'
    },
    {
      id: `d${dayNumber}-err7`,
      sentence: 'A critical downtime incident was happened during the third-quarter cloud migration.',
      errorWord: 'was happened',
      correctAnswer: 'happened',
      explanation: 'The verb "happen" is intransitive and cannot take a passive form. Say "An incident happened", never "was happened".'
    },
    {
      id: `d${dayNumber}-err8`,
      sentence: 'Neither the team lead nor the developers was aware of the unexpected API deprecation.',
      errorWord: 'was aware',
      correctAnswer: 'were aware',
      explanation: 'With "neither... nor...", when plural and singular subjects are joined, the verb agrees with the subject closest to it ("developers" is plural, so use "were aware").'
    }
  ];
}

// Generates 8 reading comprehension questions
function generateReadingQuestions(_themeTitle: string, _level: EnglishLevel, _dayNumber: number) {
  return `Answer the following 8 comprehension and analysis questions based on today's reading:

1. What is the primary thesis or objective discussed in the reading passage?
2. What are the two major advantages highlighted by the author?
3. What potential drawback, bottleneck, or trade-off is emphasized?
4. How does the passage suggest engineering or management teams should address this challenge?
5. What role does communication, documentation, or automation play in this context?
6. According to the text, what metric or outcome determines the success of this strategy?
7. How does this methodology compare to legacy or traditional approaches?
8. What practical takeaway or action can you apply to your own projects?

(Write your answers below. Compare your responses with the text when finished!)`;
}

// Generates 8 speaking drills / discussion prompts
function generateSpeakingPrompts(themeTitle: string, _level: EnglishLevel, _dayNumber: number) {
  return `Record a 1-2 minute audio response or practice answering these 8 verbal fluency drills:

1. In your own words, summarize the core argument of "${themeTitle}" in 30 seconds.
2. Have you ever encountered a similar situation or problem in your studies or workplace?
3. How would you explain the pros and cons of this approach to a non-technical stakeholder?
4. What is the most critical decision a team leader must make when facing this trade-off?
5. Imagine a team member strongly disagrees with this strategy; how would you persuade them diplomatically?
6. What preventative measures should be established to avoid common pitfalls?
7. In 5 years, how do you think emerging technology will transform this area?
8. Conclude with a strong, actionable recommendation for your engineering or study group.`;
}

// Generate the 5 tasks for a given day (0-27)
export function getDailyTasks(level: EnglishLevel, dayIndex: number): StudyTask[] {
  const normalizedDay = (dayIndex % TOTAL_DAYS + TOTAL_DAYS) % TOTAL_DAYS;
  const dayNumber = normalizedDay + 1;
  const weekNumber = Math.floor(normalizedDay / DAYS_PER_WEEK) + 1;
  const dayOfWeekInfo = DAYS_OF_WEEK[normalizedDay % DAYS_PER_WEEK];

  const themesList = CURRICULUM_THEMES[level] || CURRICULUM_THEMES.B2;
  const theme = themesList[normalizedDay % themesList.length];

  const readingText = `Welcome to Week ${weekNumber}, Day ${dayNumber} (${dayOfWeekInfo.full}) of your ${level} Mastery Roadmap. Today's deep focus is on: "${theme.title}".

Context & Analysis:
${theme.topic}. In modern professional and technical environments, mastering this domain requires both grammatical precision and strategic vocabulary. Organizations that excel in this area actively cultivate transparent workflows, prioritize rigorous quality standards, and embrace continuous improvement.

When discussing ${theme.title.toLowerCase()}, professionals must articulate nuanced arguments rather than relying on binary generalizations. For example, evaluating architectural or managerial trade-offs demands balancing immediate operational velocity with long-term systemic stability.

Key Takeaways:
By analyzing how high-performing teams navigate ${theme.title.toLowerCase()}, you develop the linguistic agility needed to lead cross-functional discussions, write compelling technical documentation, and negotiate deliverables with global stakeholders.`;

  return [
    // Task 1: Reading & Lexical Acquisition (Capture)
    {
      id: `${level.toLowerCase()}-d${dayNumber}-t1-reading`,
      title: `Reading: ${theme.title}`,
      description: `Read about ${theme.topic.toLowerCase()} and master key ${level} terminology.`,
      category: 'Capture',
      completed: false,
      level,
      exerciseType: 'reading',
      exerciseData: {
        text: readingText,
        vocabulary: theme.vocab.map(v => `${v} (key term): Essential for professional fluency in ${theme.title}.`)
      }
    },

    // Task 2: Sentence Completion (Activate) - 8 Exercises
    {
      id: `${level.toLowerCase()}-d${dayNumber}-t2-fill`,
      title: `Sentence Completion: Phrasal Verbs & Collocations (8 Exercises)`,
      description: `Complete 8 sentences using target vocabulary and phrasal verbs.`,
      category: 'Activate',
      completed: false,
      level,
      exerciseType: 'fill-in-blanks',
      exerciseData: {
        questions: generateSentenceCompletionQuestions(theme.title, level, dayNumber)
      }
    },

    // Task 3: Spot & Correct the Error (Reinforce) - 8 Exercises
    {
      id: `${level.toLowerCase()}-d${dayNumber}-t3-error`,
      title: `Encuentra el Error: ${theme.grammarFocus} (8 Exercises)`,
      description: `Identify and correct 8 subtle ${level} grammatical mistakes with full explanations.`,
      category: 'Reinforce',
      completed: false,
      level,
      exerciseType: 'error-spotting',
      exerciseData: {
        errorItems: generateErrorSpottingItems(theme.title, level, dayNumber)
      }
    },

    // Task 4: Reading Comprehension & Deep Analysis (Evaluate) - 8 Questions
    {
      id: `${level.toLowerCase()}-d${dayNumber}-t4-eval`,
      title: `Comprehension & Analysis: ${theme.title} (8 Questions)`,
      description: `Answer 8 analytical questions evaluating today's reading text.`,
      category: 'Evaluate',
      completed: false,
      level,
      exerciseType: 'writing',
      exerciseData: {
        text: readingText,
        prompt: generateReadingQuestions(theme.title, level, dayNumber)
      }
    },

    // Task 5: Speaking & Communication Simulation (Output) - 8 Drills
    {
      id: `${level.toLowerCase()}-d${dayNumber}-t5-speak`,
      title: `Speaking & Real-World Simulation (8 Drills)`,
      description: `Record or practice 8 verbal fluency drills simulating workplace debates.`,
      category: 'Reinforce',
      completed: false,
      level,
      exerciseType: 'recording',
      exerciseData: {
        prompt: generateSpeakingPrompts(theme.title, level, dayNumber)
      }
    }
  ];
}
