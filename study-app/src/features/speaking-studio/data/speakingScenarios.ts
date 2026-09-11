import type { SpeakingScenario } from '../types';

export const SPEAKING_SCENARIOS: SpeakingScenario[] = [
  // B1 Scenarios
  {
    id: 'b1-standup',
    title: 'Daily Agile Stand-Up',
    category: 'Daily Standup',
    level: 'B1',
    targetDurationSeconds: 60,
    context: 'You are participating in your daily team sync with your project manager and developers.',
    prompt: 'Deliver a 60-second status update answering:\n1. What did you finish yesterday?\n2. What are you working on today?\n3. Do you have any blockers or dependencies?',
    shadowingModelText: 'Good morning everyone. Yesterday, I completed the unit tests for the authentication service and merged the pull request. Today, I am investigating the latency spike in the notification endpoint. Currently, I do not have any blockers, but I might need Sarah to review the API schema this afternoon.',
    recommendedKeyPhrases: [
      { phrase: 'Yesterday, I wrapped up...', note: 'Natural way to describe completed work.' },
      { phrase: 'Today my main focus is on...', note: 'Direct transition to current priorities.' },
      { phrase: 'I am currently blocked on...', note: 'Clear signal of impediments.' },
      { phrase: 'I should be able to deliver this by...', note: 'Realistic commitment.' },
    ],
    selfChecklist: [
      'Did I clearly state yesterday vs. today tasks?',
      'Did I avoid saying "eh" or "um" for longer than 2 seconds?',
      'Did I keep it under 60 seconds without rushing?',
    ]
  },
  {
    id: 'b1-ticket-update',
    title: 'Explaining a Support Ticket Resolution',
    category: 'Daily Standup',
    level: 'B1',
    targetDurationSeconds: 75,
    context: 'A customer reported that their password reset email was not arriving. You found and resolved the root cause.',
    prompt: 'Explain what caused the issue, what actions you took to fix it, and reassure the customer or client that the service is operational.',
    shadowingModelText: 'Hi team. Regarding ticket 304, we noticed that our email delivery service timed out during the morning traffic peak. I restarted the background worker and flushed the message queue. I have already sent a test email and confirmed delivery. The user can now reset their password normally.',
    recommendedKeyPhrases: [
      { phrase: 'Regarding ticket number...', note: 'Anchors the conversation immediately.' },
      { phrase: 'We noticed that the service...', note: 'Factual root cause statement.' },
      { phrase: 'To resolve this, I took the following steps...', note: 'Action-oriented structure.' },
      { phrase: 'The issue has been completely mitigated.', note: 'Professional closure.' },
    ],
    selfChecklist: [
      'Did I mention both the root cause and the fix?',
      'Did I use past tense correctly (timed out, restarted, sent)?',
      'Was my tone calm and solution-oriented?',
    ]
  },

  // B2 Scenarios
  {
    id: 'b2-pitch-refactoring',
    title: 'Pitching Tech Debt Refactoring',
    category: 'Technical Pitch',
    level: 'B2',
    targetDurationSeconds: 90,
    context: 'The monolithic billing module is causing release delays. You need to persuade your product manager to allocate 20% of the next sprint to refactoring.',
    prompt: 'Pitch a 90-second proposal to your Product Manager explaining why refactoring the billing module now will prevent catastrophic downtime and accelerate feature velocity later.',
    shadowingModelText: 'Thanks for taking the time, Mark. I want to highlight that over the last three sprints, seventy percent of our regression bugs originated from the legacy billing module. While I understand the urgency of shipping the new checkout flow, continuing to build on this unmaintained code will exponentially slow our release cadence. If we allocate just two days next sprint to decouple the payment provider, we will eliminate these regressions and significantly reduce deployment risk.',
    recommendedKeyPhrases: [
      { phrase: 'I want to bring to your attention that...', note: 'Polite yet urgent opener.' },
      { phrase: 'While I acknowledge our commercial priorities...', note: 'Diplomatic concession (B2 connector).' },
      { phrase: 'If we address this proactively, we will save...', note: 'First conditional emphasizing ROI.' },
      { phrase: 'The trade-off here is between short-term speed and...', note: 'Strategic business framing.' },
    ],
    selfChecklist: [
      'Did I connect technical debt to actual business velocity and money?',
      'Did I use contrast connectors like "while", "consequently", or "whereas"?',
      'Did I conclude with a concrete, actionable request (e.g. 2 days allocation)?',
    ]
  },
  {
    id: 'b2-incident-retro',
    title: 'Blameless Incident Retrospective',
    category: 'Crisis Management',
    level: 'B2',
    targetDurationSeconds: 90,
    context: 'A production database migration caused 25 minutes of downtime during peak hours. You are presenting the retrospective findings to engineering leads.',
    prompt: 'Summarize what occurred, why our automated rollback mechanism stalled, and what two preventative safeguards we are implementing.',
    shadowingModelText: 'Good afternoon everyone. At 14:00 UTC, our database migration locked the transactions table due to an unindexed foreign key constraint. Although our rollback script triggered automatically, it halted because of active connection pools. Had we run the migration against staging with synthetic load, we would have uncovered this deadlock beforehand. Moving forward, we are introducing zero-downtime schema migrations and automated load simulation in our pre-production pipeline.',
    recommendedKeyPhrases: [
      { phrase: 'At approximately 14:00 UTC, an incident occurred where...', note: 'Precise timeline marker.' },
      { phrase: 'Had we tested this against synthetic load, we would have...', note: 'Third conditional with inversion (B2+ hallmark).' },
      { phrase: 'The root cause was not human error, but systemic...', note: 'Blameless culture phrasing.' },
      { phrase: 'Our remediation roadmap includes...', note: 'Forward-looking solutions.' },
    ],
    selfChecklist: [
      'Did I maintain an objective, non-blaming tone?',
      'Did I articulate cause and effect with clarity?',
      'Did I finish within the 90-second window?',
    ]
  },

  // C1 Scenarios
  {
    id: 'c1-executive-board-pitch',
    title: 'Executive Town Hall: Cloud Infrastructure Investment',
    category: 'Executive Meeting',
    level: 'C1',
    targetDurationSeconds: 120,
    context: 'You are presenting to the Chief Financial Officer (CFO) and VP of Engineering to secure budget for migrating legacy workloads to multi-region cloud architecture.',
    prompt: 'Deliver a persuasive 2-minute executive address justifying the capital expenditure, balancing risk mitigation, compliance mandates, and long-term operating margin expansion.',
    shadowingModelText: 'Distinguished members of the executive committee: In today’s hyper-competitive climate, our legacy infrastructure represents an unacceptable systemic vulnerability. Over the past four quarters, maintenance overhead has eroded six percent of our gross margins, while single-region outages have jeopardized SLA commitments with our Tier-1 enterprise clientele. By transitioning toward an automated, multi-region cloud architecture, we do not merely insulate our platform against catastrophic downtime; we unlock operational elasticity that will reduce our cost per compute transaction by twenty-four percent. Under no circumstances can we afford to treat infrastructure modernization as an optional line item. I urge the committee to ratify this capital allocation today.',
    recommendedKeyPhrases: [
      { phrase: 'Under no circumstances can we afford to...', note: 'C1 Negative Inversion for commanding emphasis.' },
      { phrase: 'We do not merely insulate..., we also unlock...', note: 'Correlative conjunction expressing multi-dimensional value.' },
      { phrase: 'This expenditure directly correlates with margin expansion...', note: 'Executive financial vocabulary.' },
      { phrase: 'To substantiate this strategic trajectory...', note: 'High-register discourse marker.' },
    ],
    selfChecklist: [
      'Did I use at least one instance of negative inversion or cleft structure?',
      'Did I project authority, calm gravitas, and steady vocal cadence?',
      'Did I focus on macro enterprise metrics (SLA, margins, operational elasticity)?',
    ]
  },
  {
    id: 'c1-crisis-escalation',
    title: 'High-Stakes Client Escalation & Settlement',
    category: 'Crisis Management',
    level: 'C1',
    targetDurationSeconds: 105,
    context: 'An enterprise client’s proprietary dataset was temporarily unreachable during their annual stakeholder audit. Their Chief Technology Officer is threatening legal arbitration.',
    prompt: 'De-escalate the dispute diplomatically. Validate their frustration, substantiate our forensic investigation, and negotiate an agreeable remediation roadmap without conceding unwarranted corporate liability.',
    shadowingModelText: 'Thank you for making time on short notice, Jonathan. We fully understand the profound disruption and reputational sensitivity this outage caused during your quarterly audit. Our forensic engineering squad has scrutinized every transaction log from the incident window. The outage stemmed from an edge-case concurrency collision during our vendor’s upstream routing update, rather than an internal data compromise. While this distinction does not excuse the inconvenience, I want to reassure you unequivocally that your data integrity remained intact. To demonstrate our commitment, we are implementing a dedicated redundant ingress gateway for your tenant and crediting two months of service fees. Let us walk through the remediation schedule so you can present complete transparency to your board.',
    recommendedKeyPhrases: [
      { phrase: 'We fully recognize the profound disruption and sensitivity...', note: 'Empathetic validation without admission of legal liability.' },
      { phrase: 'I want to reassure you unequivocally that...', note: 'High-confidence adverbial reinforcement.' },
      { phrase: 'Our forensic investigation demonstrated that...', note: 'Evidence-based objective positioning.' },
      { phrase: 'To demonstrate our strategic alignment and good faith...', note: 'Diplomatic compromise.' },
    ],
    selfChecklist: [
      'Did I avoid defensive or apologetic whining, maintaining executive poise?',
      'Did I offer concrete remediation while preserving data integrity reassurance?',
      'Did I employ advanced hedging and modal precision?',
    ]
  }
];
