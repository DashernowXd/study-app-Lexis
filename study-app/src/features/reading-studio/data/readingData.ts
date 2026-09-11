import type { ReadingArticle } from '../types';

export const READING_ARTICLES: Record<string, ReadingArticle[]> = {
  B1: [
    {
      id: 'b1-reading-1',
      level: 'B1',
      category: 'Agile & Team Collaboration',
      readTime: '2 min read',
      title: 'Daily Stand-ups and Clear Communication in Tech Teams',
      subtitle: 'B1 Workplace Register • Practical Communication Guide',
      paragraphs: [
        {
          id: 1,
          textParts: [
            { text: 'In modern software development, teams hold a short daily meeting called a ' },
            { text: 'stand-up', glossaryKey: 'standup' },
            { text: '. The main goal of this meeting is to align everyone on current goals and identify any ' },
            { text: 'blocker', glossaryKey: 'blocker' },
            { text: ' that might prevent developers from completing their tasks on schedule.' }
          ]
        },
        {
          id: 2,
          textParts: [
            { text: 'During the stand-up, each engineer answers three straightforward questions: What did I accomplish yesterday? What will I work on today? Are there any obstacles in my ' },
            { text: 'workflow', glossaryKey: 'workflow' },
            { text: '? Keeping updates concise is essential so the entire team can maintain high velocity without wasting valuable engineering hours.' }
          ]
        },
        {
          id: 3,
          textParts: [
            { text: 'When team members communicate transparently, they reach each project ' },
            { text: 'milestone', glossaryKey: 'milestone' },
            { text: ' with less stress. Providing constructive ' },
            { text: 'feedback', glossaryKey: 'feedback' },
            { text: ' also helps junior engineers grow their technical confidence rapidly.' }
          ]
        }
      ],
      glossary: {
        standup: {
          word: 'stand-up',
          phonetic: '/ˈstænd.ʌp/',
          partOfSpeech: 'noun',
          definition: 'A brief daily status meeting where team members stand to keep discussion concise.',
          example: 'Our 10 AM stand-up usually lasts no more than fifteen minutes.'
        },
        blocker: {
          word: 'blocker',
          phonetic: '/ˈblɒk.ər/',
          partOfSpeech: 'noun',
          definition: 'An obstacle or unresolved problem that prevents a task from moving forward.',
          example: 'I have a blocker because the staging database credentials expired.'
        },
        workflow: {
          word: 'workflow',
          phonetic: '/ˈwɜːk.fləʊ/',
          partOfSpeech: 'noun',
          definition: 'The sequence of industrial, administrative, or engineering processes through which a piece of work passes.',
          example: 'Automated CI/CD pipelines significantly streamline our release workflow.'
        },
        milestone: {
          word: 'milestone',
          phonetic: '/ˈmaɪl.stəʊn/',
          partOfSpeech: 'noun',
          definition: 'A significant stage or event in the development of something.',
          example: 'Delivering the payment gateway integration is our primary sprint milestone.'
        },
        feedback: {
          word: 'feedback',
          phonetic: '/ˈfiːd.bæk/',
          partOfSpeech: 'noun',
          definition: 'Information or reactions about a product or someone\'s performance used as a basis for improvement.',
          example: 'The senior architect provided valuable feedback on the PR review.'
        }
      },
      comprehensionQuestions: [
        '1. What is the primary purpose of holding a daily stand-up meeting?',
        '2. What three specific questions should each engineer answer during the meeting?',
        '3. Why is it important to keep updates concise during stand-ups?',
        '4. According to the text, what is a "blocker" in a software project?',
        '5. How does transparent communication impact project milestones and junior engineers?'
      ]
    }
  ],
  B2: [
    {
      id: 'b2-reading-1',
      level: 'B2',
      category: 'Software Architecture & Cloud',
      readTime: '3 min read',
      title: 'Architectural Trade-offs: Microservices vs The Modular Monolith',
      subtitle: 'B2 Professional Register • System Design Analysis',
      paragraphs: [
        {
          id: 1,
          textParts: [
            { text: 'Engineering leaders frequently grapple with system design choices when business demands rapid ' },
            { text: 'scalability', glossaryKey: 'scalability' },
            { text: '. While microservices promise autonomous deployment cycles and fault isolation, they introduce distributed network complexity that many organizations fail to anticipate.' }
          ]
        },
        {
          id: 2,
          textParts: [
            { text: 'A major concern in distributed systems is operational overhead. Every independent service requires monitoring, tracing, and data ' },
            { text: 'redundancy', glossaryKey: 'redundancy' },
            { text: '. If network boundaries are drawn incorrectly, a single customer request can trigger a cascading latency ' },
            { text: 'bottleneck', glossaryKey: 'bottleneck' },
            { text: ' across dozens of inter-dependent containers.' }
          ]
        },
        {
          id: 3,
          textParts: [
            { text: 'To ' },
            { text: 'mitigate', glossaryKey: 'mitigate' },
            { text: ' these systemic risks, many high-growth technology companies now advocate for modular monoliths with strictly ' },
            { text: 'decoupled', glossaryKey: 'decoupled' },
            { text: ' domain boundaries. This architectural compromise delivers strong boundary enforcement without the severe operational tax of multi-cluster orchestration.' }
          ]
        }
      ],
      glossary: {
        scalability: {
          word: 'scalability',
          phonetic: '/ˌskeɪ.ləˈbɪl.ə.ti/',
          partOfSpeech: 'noun',
          definition: 'The capability of a system or network to handle a growing amount of work or its potential to be enlarged.',
          example: 'Horizontal scalability ensures the API handles Black Friday traffic spikes.'
        },
        redundancy: {
          word: 'redundancy',
          phonetic: '/rɪˈdʌn.dən.si/',
          partOfSpeech: 'noun',
          definition: 'The inclusion of extra components that are not strictly necessary to functioning, in case of failure in other components.',
          example: 'Geo-replicated database backups provide essential infrastructure redundancy.'
        },
        bottleneck: {
          word: 'bottleneck',
          phonetic: '/ˈbɒt.əl.nek/',
          partOfSpeech: 'noun',
          definition: 'A point of congestion or blockage in an entire process that restricts throughput.',
          example: 'Unindexed SQL queries created a severe performance bottleneck during peak hours.'
        },
        mitigate: {
          word: 'mitigate',
          phonetic: '/ˈmɪt.ɪ.ɡeɪt/',
          partOfSpeech: 'verb',
          definition: 'To make something bad or severe less harsh, serious, or painful.',
          example: 'Implementing rate limiting will mitigate denial-of-service risks.'
        },
        decoupled: {
          word: 'decoupled',
          phonetic: '/diːˈkʌp.əld/',
          partOfSpeech: 'adjective',
          definition: 'Separated, disassociated, or having minimal dependencies on other components.',
          example: 'Event-driven architecture keeps the billing service completely decoupled from the email notifier.'
        }
      },
      comprehensionQuestions: [
        '1. What primary operational advantage do microservices offer compared to monoliths?',
        '2. According to paragraph 1, what hidden challenge do organizations often fail to anticipate?',
        '3. How can incorrectly defined network boundaries lead to a cascading latency bottleneck?',
        '4. Explain what is meant by "infrastructure redundancy" in distributed cloud architectures.',
        '5. Why do many high-growth companies prefer a "modular monolith" over full microservices?'
      ]
    }
  ],
  C1: [
    {
      id: 'c1-reading-1',
      level: 'C1',
      category: 'Geopolitics & Economics',
      readTime: '3 min read',
      title: 'The Paradox of Algorithmic Governance in Global Trade',
      subtitle: 'C1 Academic Register • Lexis Longform Analysis',
      paragraphs: [
        {
          id: 1,
          textParts: [
            { text: 'The international trade architecture has reached an ' },
            { text: 'unprecedented', glossaryKey: 'unprecedented' },
            { text: ' juncture where automated clearing mechanisms adjudicate maritime tariffs at machine speed. While proponents assert this yields neutral fiscal efficiency, the reality reveals a far more ' },
            { text: 'contentious', glossaryKey: 'contentious' },
            { text: ' dynamic. By codifying regulatory exemptions into proprietary neural models, supranational jurisdictions run the hazard of enshrining algorithmic biases before judicial appeals can intervene.' }
          ]
        },
        {
          id: 2,
          textParts: [
            { text: 'Crucially, automated tariffs produce profound structural friction. Rather than leveling access, algorithmic border regimes demand complex digital compliance frameworks that smaller economies cannot readily assimilate. Consequently, bureaucratic ' },
            { text: 'obsolescence', glossaryKey: 'obsolescence' },
            { text: ' threatens developing exporters while entrenched corporate actors leverage sovereign digital standards to consolidate mercantile ' },
            { text: 'hegemony', glossaryKey: 'hegemony' },
            { text: '.' }
          ]
        },
        {
          id: 3,
          textParts: [
            { text: 'To mitigate these disparities, trade policymakers must mandate transparent algorithmic audits and establish multilateral recourse treaties. Without standardized oversight, the digitalization of global commerce risks entrenching the very inequities it was engineered to dismantle.' }
          ]
        }
      ],
      glossary: {
        unprecedented: {
          word: 'unprecedented',
          phonetic: '/ʌnˈpres.ɪ.den.tɪd/',
          partOfSpeech: 'adjective',
          definition: 'Never done or known before; extraordinary.',
          example: 'The swift deployment of automated clearing systems achieved unprecedented speed.'
        },
        contentious: {
          word: 'contentious',
          phonetic: '/kənˈten.ʃəs/',
          partOfSpeech: 'adjective',
          definition: 'Causing or likely to cause an argument; controversial.',
          example: 'The debate over sovereign data rights remains highly contentious.'
        },
        obsolescence: {
          word: 'obsolescence',
          phonetic: '/ˌɒb.səˈles.əns/',
          partOfSpeech: 'noun',
          definition: 'The process of becoming obsolete, outdated, or no longer used.',
          example: 'Legacy compliance protocols face swift obsolescence in modern supply chains.'
        },
        hegemony: {
          word: 'hegemony',
          phonetic: '/hɪˈdʒem.ə.ni/',
          partOfSpeech: 'noun',
          definition: 'Leadership or dominance, especially by one country or social group over others.',
          example: 'Dominant market players seek to maintain mercantile hegemony through technological standards.'
        }
      },
      comprehensionQuestions: [
        '1. What is the central paradox identified by the author in automated trade governance?',
        '2. According to paragraph 1, how do proprietary neural models risk affecting judicial appeals?',
        '3. What structural disadvantage do developing exporters face under algorithmic border regimes?',
        '4. Explain the meaning of "mercantile hegemony" within the context of global commerce.',
        '5. What two specific solutions does the author propose in paragraph 3 to mitigate trade disparities?'
      ]
    }
  ]
};
