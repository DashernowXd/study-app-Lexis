import type { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS_BY_LEVEL: Record<string, QuizQuestion[]> = {
  B1: [
    {
      id: 'b1-q1',
      questionNumber: 1,
      totalQuestions: 6,
      topic: 'Present Perfect vs Past Simple',
      unit: 'Unit 2.1',
      targetDomain: 'Daily Workplace Updates & Ticketing',
      questionText: 'Select the correct sentence to communicate completed actions during yesterday’s sprint:',
      grammarTipTitle: 'Past Simple vs. Present Perfect Time Markers',
      grammarTipRule: 'Use Past Simple with finished time expressions (yesterday, last week, 2 hours ago). Use Present Perfect for actions connecting past and present with unfinished time periods (today, this week, already, yet).',
      options: [
        {
          key: 'A',
          text: 'I have deployed the hotfix yesterday afternoon.',
          feedback: 'Incorrect: "Yesterday" refers to a finished time period, requiring the Past Simple "deployed".',
          isCorrect: false
        },
        {
          key: 'B',
          text: 'I deployed the hotfix yesterday afternoon, and we have already verified it today.',
          feedback: 'Correct! "Yesterday" pairs with Past Simple "deployed", while "today" with "already" correctly takes Present Perfect "have verified".',
          isCorrect: true
        },
        {
          key: 'C',
          text: 'I deploy the hotfix yesterday afternoon.',
          feedback: 'Incorrect: Missing past tense marker.',
          isCorrect: false
        },
        {
          key: 'D',
          text: 'I was deployed the hotfix yesterday afternoon.',
          feedback: 'Incorrect: Erroneous passive construction ("was deployed").',
          isCorrect: false
        }
      ]
    },
    {
      id: 'b1-q2',
      questionNumber: 2,
      totalQuestions: 6,
      topic: 'First vs. Second Conditional',
      unit: 'Unit 2.2',
      targetDomain: 'Technical Risk & Feature Planning',
      questionText: 'Which sentence correctly expresses a real, likely future condition regarding software release?',
      grammarTipTitle: 'First Conditional for Real Possibilities',
      grammarTipRule: 'Structure: If + Present Simple, will + base verb. Used for realistic possibilities in the future.',
      options: [
        {
          key: 'A',
          text: 'If the automated tests pass, we will push the build to production.',
          feedback: 'Correct! Real condition: "If ... pass (present simple), we will push (future)".',
          isCorrect: true
        },
        {
          key: 'B',
          text: 'If the automated tests will pass, we push the build to production.',
          feedback: 'Incorrect: Do not use "will" in the if-clause of a first conditional.',
          isCorrect: false
        },
        {
          key: 'C',
          text: 'If the automated tests passed, we will push the build.',
          feedback: 'Incorrect: Mixed tenses. "Passed" requires "would push" (Second Conditional).',
          isCorrect: false
        },
        {
          key: 'D',
          text: 'If the automated tests passes, we would push the build.',
          feedback: 'Incorrect: Subject-verb agreement error ("tests passes") and tense mismatch.',
          isCorrect: false
        }
      ]
    },
    {
      id: 'b1-q3',
      questionNumber: 3,
      totalQuestions: 6,
      topic: 'Comparative & Superlative Structures',
      unit: 'Unit 2.3',
      targetDomain: 'Architecture Evaluation & Benchmarking',
      questionText: 'Choose the sentence that correctly compares the speed of two database queries:',
      grammarTipTitle: 'Forming Regular & Irregular Comparatives',
      grammarTipRule: 'For adjectives of 3+ syllables (or ending in -ly), use "more + adjective + than". Do not double-mark ("more faster" is incorrect).',
      options: [
        {
          key: 'A',
          text: 'The indexed query is much more faster than the full table scan.',
          feedback: 'Incorrect: Double comparative ("more faster"). Fast is 1 syllable: "much faster".',
          isCorrect: false
        },
        {
          key: 'B',
          text: 'The indexed query is significantly more efficient than the full table scan.',
          feedback: 'Correct! "Efficient" (3 syllables) takes "more efficient than".',
          isCorrect: true
        },
        {
          key: 'C',
          text: 'The indexed query is efficienter than the full table scan.',
          feedback: 'Incorrect: "Efficienter" does not exist in English grammar.',
          isCorrect: false
        },
        {
          key: 'D',
          text: 'The indexed query is most efficient than the full table scan.',
          feedback: 'Incorrect: "Most" forms superlatives, not two-way comparisons with "than".',
          isCorrect: false
        }
      ]
    },
    {
      id: 'b1-q4',
      questionNumber: 4,
      totalQuestions: 6,
      topic: 'Passive Voice in Engineering',
      unit: 'Unit 2.4',
      targetDomain: 'QA & Code Review Workflows',
      questionText: 'Identify the grammatically correct passive sentence used in an issue tracker:',
      grammarTipTitle: 'Past Simple Passive Structure',
      grammarTipRule: 'Structure: [Subject] + [was / were] + [past participle] + (by [agent]). Focuses on the object acted upon.',
      options: [
        {
          key: 'A',
          text: 'The vulnerability was discovered by the security auditor this morning.',
          feedback: 'Correct! "was discovered by" is the accurate past passive construction.',
          isCorrect: true
        },
        {
          key: 'B',
          text: 'The vulnerability discovered by the security auditor this morning.',
          feedback: 'Incorrect: Missing auxiliary verb "was".',
          isCorrect: false
        },
        {
          key: 'C',
          text: 'The vulnerability was discover by the security auditor this morning.',
          feedback: 'Incorrect: Missing past participle ("discovered").',
          isCorrect: false
        },
        {
          key: 'D',
          text: 'The vulnerability were discovered by the security auditor this morning.',
          feedback: 'Incorrect: Subject "vulnerability" is singular, so it requires "was", not "were".',
          isCorrect: false
        }
      ]
    },
    {
      id: 'b1-q5',
      questionNumber: 5,
      totalQuestions: 6,
      topic: 'Modals of Obligation & Prohibition',
      unit: 'Unit 2.5',
      targetDomain: 'Production Security Policies',
      questionText: 'Which modal verb correctly conveys strict prohibition according to engineering protocol?',
      grammarTipTitle: 'Expressing Prohibition: Must Not / Cannot',
      grammarTipRule: '"Must not" (or "mustn\'t") indicates strict prohibition. "Don\'t have to" indicates lack of necessity, NOT prohibition.',
      options: [
        {
          key: 'A',
          text: 'Developers must not commit credentials directly to public repositories.',
          feedback: 'Correct! "Must not" indicates absolute prohibition under security policy.',
          isCorrect: true
        },
        {
          key: 'B',
          text: 'Developers don\'t have to commit credentials directly to public repositories.',
          feedback: 'Incorrect: "Don\'t have to" means optional, which is dangerously incorrect for security rules.',
          isCorrect: false
        },
        {
          key: 'C',
          text: 'Developers haven\'t to commit credentials directly.',
          feedback: 'Incorrect: Ungrammatical structure in modern English.',
          isCorrect: false
        },
        {
          key: 'D',
          text: 'Developers must not to commit credentials directly.',
          feedback: 'Incorrect: Modal verbs take the bare infinitive without "to".',
          isCorrect: false
        }
      ]
    },
    {
      id: 'b1-q6',
      questionNumber: 6,
      totalQuestions: 6,
      topic: 'Essential Workplace Phrasal Verbs',
      unit: 'Unit 2.6',
      targetDomain: 'Scrum Stand-ups & Issue Follow-ups',
      questionText: 'Complete the sentence: "I will __________ the database connection timeout with the DevOps team."',
      grammarTipTitle: 'Phrasal Verb: Look Into',
      grammarTipRule: '"Look into" means to investigate or research an issue. "Look after" means to care for. "Look forward to" means to anticipate with pleasure.',
      options: [
        {
          key: 'A',
          text: 'look into',
          feedback: 'Correct! "Look into" means to investigate or examine thoroughly.',
          isCorrect: true
        },
        {
          key: 'B',
          text: 'look after',
          feedback: 'Incorrect: "Look after" means to take care of someone or something.',
          isCorrect: false
        },
        {
          key: 'C',
          text: 'look over through',
          feedback: 'Incorrect: Redundant preposition stacking.',
          isCorrect: false
        },
        {
          key: 'D',
          text: 'look out into',
          feedback: 'Incorrect: Incorrect phrasal verb combination.',
          isCorrect: false
        }
      ]
    }
  ],
  B2: [
    {
      id: 'b2-q1',
      questionNumber: 1,
      totalQuestions: 6,
      topic: 'Third & Mixed Conditionals',
      unit: 'Unit 3.1',
      targetDomain: 'Post-Mortem Incident Reviews',
      questionText: 'Identify the sentence that correctly explains a past mistake that affects the present state:',
      grammarTipTitle: 'Mixed Conditional: Past Action → Present Consequence',
      grammarTipRule: 'Structure: If + Past Perfect (past condition), would / wouldn\'t + base infinitive (present result).',
      options: [
        {
          key: 'A',
          text: 'If we had configured automated database failover, the main website wouldn\'t be offline right now.',
          feedback: 'Correct! Mixed conditional: Past unreal action ("had configured") with current consequence ("wouldn\'t be offline now").',
          isCorrect: true
        },
        {
          key: 'B',
          text: 'If we configured automated database failover, the main website wouldn\'t be offline right now.',
          feedback: 'Incorrect: Second conditional implies a hypothetical present condition, rather than a past missed opportunity.',
          isCorrect: false
        },
        {
          key: 'C',
          text: 'If we had configured automated failover, the website wouldn\'t have been offline right now.',
          feedback: 'Incorrect: "Right now" clashes with third conditional "wouldn\'t have been" (pure past).',
          isCorrect: false
        },
        {
          key: 'D',
          text: 'If we would have configured automated failover, the website wouldn\'t be offline.',
          feedback: 'Incorrect: "Would have" must never appear in the if-clause.',
          isCorrect: false
        }
      ]
    },
    {
      id: 'b2-q2',
      questionNumber: 2,
      totalQuestions: 6,
      topic: 'Modals of Deduction & Speculation',
      unit: 'Unit 3.2',
      targetDomain: 'Root-Cause Outage Diagnostics',
      questionText: 'Which statement expresses near certainty about the cause of a past server crash based on evidence?',
      grammarTipTitle: 'Deductions about the Past: Must Have / Can\'t Have',
      grammarTipRule: 'Use "must have + past participle" for near-certain deduction (95%+ confidence). Use "can\'t / couldn\'t have" for near-certain impossibility.',
      options: [
        {
          key: 'A',
          text: 'The memory leak must have triggered the Kubernetes pod eviction, as heap utilization reached 99%.',
          feedback: 'Correct! Strong deduction supported by concrete telemetry data: "must have triggered".',
          isCorrect: true
        },
        {
          key: 'B',
          text: 'The memory leak should trigger the Kubernetes pod eviction yesterday.',
          feedback: 'Incorrect: "Should trigger" cannot express past deduction with time marker "yesterday".',
          isCorrect: false
        },
        {
          key: 'C',
          text: 'The memory leak can have triggered the eviction, as heap utilization reached 99%.',
          feedback: 'Incorrect: Affirmative "can have" is not used for specific past deductions; use "could have" or "must have".',
          isCorrect: false
        },
        {
          key: 'D',
          text: 'The memory leak must trigger the eviction yesterday.',
          feedback: 'Incorrect: Lacks modal perfect construction ("must have triggered").',
          isCorrect: false
        }
      ]
    },
    {
      id: 'b2-q3',
      questionNumber: 3,
      totalQuestions: 6,
      topic: 'Passive with Reporting Verbs',
      unit: 'Unit 3.3',
      targetDomain: 'Executive Summaries & Benchmark Reports',
      questionText: 'Select the sentence that formally reports system benchmark expectations without naming a specific source:',
      grammarTipTitle: 'Impersonal Passive with Infinitive',
      grammarTipRule: 'Structure: [Subject] + [is / are reported / estimated / believed] + [to + infinitive]. Gives objective academic distance.',
      options: [
        {
          key: 'A',
          text: 'The new GraphQL caching layer is estimated to reduce round-trip latency by 45%.',
          feedback: 'Correct! Standard formal passive report: "is estimated to reduce".',
          isCorrect: true
        },
        {
          key: 'B',
          text: 'The new GraphQL caching layer estimates to reduce latency by 45%.',
          feedback: 'Incorrect: Active voice makes the inanimate caching layer the estimator.',
          isCorrect: false
        },
        {
          key: 'C',
          text: 'It is estimated the caching layer to reduce latency by 45%.',
          feedback: 'Incorrect: "It is estimated that [clause]" requires a finite clause, not an infinitive.',
          isCorrect: false
        },
        {
          key: 'D',
          text: 'The new caching layer is estimating to reduce latency by 45%.',
          feedback: 'Incorrect: Continuous active form is semantically flawed.',
          isCorrect: false
        }
      ]
    },
    {
      id: 'b2-q4',
      questionNumber: 4,
      totalQuestions: 6,
      topic: 'Defining vs. Non-Defining Relative Clauses',
      unit: 'Unit 3.4',
      targetDomain: 'System Architecture Documentation',
      questionText: 'Choose the sentence with a non-defining relative clause providing essential secondary context with correct punctuation:',
      grammarTipTitle: 'Non-Defining Relative Clauses',
      grammarTipRule: 'Non-defining clauses add non-essential bonus information, must be surrounded by commas, and CANNOT use "that" (use "which" for things, "who" for people).',
      options: [
        {
          key: 'A',
          text: 'Our primary microservice, which was rewritten in Go last quarter, handles over 10,000 requests per second.',
          feedback: 'Correct! Proper comma separation and use of "which" (not "that") for non-defining clause.',
          isCorrect: true
        },
        {
          key: 'B',
          text: 'Our primary microservice that was rewritten in Go last quarter, handles over 10,000 requests per second.',
          feedback: 'Incorrect: Asymmetric punctuation and incorrect relative pronoun "that" after comma.',
          isCorrect: false
        },
        {
          key: 'C',
          text: 'Our primary microservice, that was rewritten in Go last quarter, handles over 10,000 requests.',
          feedback: 'Incorrect: "That" cannot be used in a non-defining relative clause surrounded by commas.',
          isCorrect: false
        },
        {
          key: 'D',
          text: 'Our primary microservice which was rewritten in Go last quarter handles over 10,000 requests.',
          feedback: 'Incorrect: When non-defining, commas are mandatory on both sides.',
          isCorrect: false
        }
      ]
    },
    {
      id: 'b2-q5',
      questionNumber: 5,
      totalQuestions: 6,
      topic: 'Gerunds vs Infinitives with Meaning Change',
      unit: 'Unit 3.5',
      targetDomain: 'Release Procedures & Runbooks',
      questionText: 'Which sentence correctly instructs a sysadmin to perform an action as part of an upcoming workflow?',
      grammarTipTitle: 'Remember to do vs. Remember doing',
      grammarTipRule: '"Remember to do [infinitive]" looks forward to an obligation/duty. "Remember doing [gerund]" looks backward to a past memory.',
      options: [
        {
          key: 'A',
          text: 'Please remember to back up the Redis cluster before executing the migration script.',
          feedback: 'Correct! "Remember to back up" properly looks forward to a necessary duty.',
          isCorrect: true
        },
        {
          key: 'B',
          text: 'Please remember backing up the Redis cluster before executing the migration script.',
          feedback: 'Incorrect: "Remember backing up" refers to recalling a past memory, not an instruction for the future.',
          isCorrect: false
        },
        {
          key: 'C',
          text: 'Please remember back up the Redis cluster.',
          feedback: 'Incorrect: Missing infinitive particle "to".',
          isCorrect: false
        },
        {
          key: 'D',
          text: 'Please to remember backing up the Redis cluster.',
          feedback: 'Incorrect: Ungrammatical imperative construction.',
          isCorrect: false
        }
      ]
    },
    {
      id: 'b2-q6',
      questionNumber: 6,
      totalQuestions: 6,
      topic: 'Discourse Markers of Contrast',
      unit: 'Unit 3.6',
      targetDomain: 'Technical Debates & Architectural Decisions',
      questionText: 'Which linker correctly introduces a concession followed by a noun phrase / gerund clause?',
      grammarTipTitle: 'Despite / In Spite Of vs. Although / Whereas',
      grammarTipRule: '"Despite" and "In spite of" are followed by a noun phrase or gerund (-ing). "Although" and "Even though" are followed by a subject + verb clause.',
      options: [
        {
          key: 'A',
          text: 'Despite conducting multiple rounds of penetration testing, subtle vulnerabilities persisted in edge nodes.',
          feedback: 'Correct! "Despite + gerund (-ing)" correctly heads a concessive clause.',
          isCorrect: true
        },
        {
          key: 'B',
          text: 'Despite the team conducted multiple rounds of penetration testing, vulnerabilities persisted.',
          feedback: 'Incorrect: "Despite" cannot be directly followed by a full subject-verb clause without "the fact that". Use "Although" instead.',
          isCorrect: false
        },
        {
          key: 'C',
          text: 'Although conducting multiple rounds of testing, vulnerabilities persisted in edge nodes.',
          feedback: 'Incorrect: "Although" typically requires a finite clause with explicit subject and conjugated verb.',
          isCorrect: false
        },
        {
          key: 'D',
          text: 'In spite conducting multiple rounds of testing, vulnerabilities persisted.',
          feedback: 'Incorrect: Missing preposition "of" ("In spite of").',
          isCorrect: false
        }
      ]
    }
  ],
  C1: [
    {
      id: 'c1-q1',
      questionNumber: 1,
      totalQuestions: 6,
      topic: 'Negative Inversion & Restrictive Adverbs',
      unit: 'Unit 4.1',
      targetDomain: 'High-Level Diplomatic & Academic Rhetoric',
      questionText: 'Select the sentence that correctly employs negative inversion for dramatic emphasis:',
      grammarTipTitle: 'Negative Inversion with Restrictive Adverbs',
      grammarTipRule: 'When restrictive or negative adverbs (rarely, seldom, scarcely, under no circumstances) are placed at the clause head, the auxiliary verb precedes the subject: [Adverb] + [Auxiliary] + [Subject] + [Main Verb].',
      options: [
        {
          key: 'A',
          text: 'Rarely we had witnessed such sheer dedication in multilateral negotiations.',
          feedback: 'Incorrect: Missing auxiliary inversion after "Rarely". Should be: "Rarely had we witnessed...".',
          isCorrect: false
        },
        {
          key: 'B',
          text: 'Rarely had we witnessed such sheer dedication in multilateral negotiations.',
          feedback: 'Correct! The auxiliary "had" correctly inverts with the subject "we" following the fronted restrictive adverb "Rarely".',
          isCorrect: true
        },
        {
          key: 'C',
          text: 'Rarely did we had witnessed such sheer dedication in multilateral negotiations.',
          feedback: 'Incorrect: Double past tense marking ("did" + "had witnessed").',
          isCorrect: false
        },
        {
          key: 'D',
          text: 'Rarely we were witnessing such sheer dedication in negotiations.',
          feedback: 'Incorrect: Lacks subject-auxiliary inversion.',
          isCorrect: false
        }
      ]
    },
    {
      id: 'c1-q2',
      questionNumber: 2,
      totalQuestions: 6,
      topic: 'Wh-Cleft Sentences for Focus',
      unit: 'Unit 4.2',
      targetDomain: 'Executive Boardroom Presentations',
      questionText: 'Which sentence correctly utilizes a wh-cleft sentence to emphasize the financial bottleneck?',
      grammarTipTitle: 'Wh-Cleft Structures for Focal Stress',
      grammarTipRule: 'Wh-cleft sentences use: [What + clause] + [be] + [emphasized element] to draw maximum listener focus to a critical priority or constraint.',
      options: [
        {
          key: 'A',
          text: 'What delayed the Q3 launch was the unanticipated regulatory audit.',
          feedback: 'Correct! The cleft structure "What delayed... was..." precisely foregrounds the audit as the sole bottleneck.',
          isCorrect: true
        },
        {
          key: 'B',
          text: 'It was what delayed the Q3 launch the unanticipated regulatory audit.',
          feedback: 'Incorrect: Conflates it-cleft and wh-cleft syntax erroneously.',
          isCorrect: false
        },
        {
          key: 'C',
          text: 'Which delayed the Q3 launch was the unanticipated regulatory audit.',
          feedback: 'Incorrect: "Which" cannot head a pseudo-cleft clause in standard English.',
          isCorrect: false
        },
        {
          key: 'D',
          text: 'What was delaying the Q3 launch that was the unanticipated regulatory audit.',
          feedback: 'Incorrect: Redundant pronoun "that" disrupts the copular relation.',
          isCorrect: false
        }
      ]
    },
    {
      id: 'c1-q3',
      questionNumber: 3,
      totalQuestions: 6,
      topic: 'Inverted Conditionals (Had we...)',
      unit: 'Unit 4.3',
      targetDomain: 'Risk Management & Strategic Due Diligence',
      questionText: 'Identify the formal conditional structure with inversion that avoids the conjunction "if":',
      grammarTipTitle: 'Inversion in Hypothetical Conditionals',
      grammarTipRule: 'In formal registers, "If we had known..." becomes "Had we known...", omitting "if" and moving "had" before the subject.',
      options: [
        {
          key: 'A',
          text: 'Had the compliance team flagged the risk earlier, we would have pivoted immediately.',
          feedback: 'Correct! "Had the compliance team flagged..." is the textbook inverted Third Conditional.',
          isCorrect: true
        },
        {
          key: 'B',
          text: 'If had the compliance team flagged the risk earlier, we would have pivoted.',
          feedback: 'Incorrect: You must omit "if" when inverting the auxiliary verb.',
          isCorrect: false
        },
        {
          key: 'C',
          text: 'Should had the compliance team flagged the risk earlier, we would have pivoted.',
          feedback: 'Incorrect: "Should" cannot combine with past participle "had flagged".',
          isCorrect: false
        },
        {
          key: 'D',
          text: 'Were the compliance team flagged the risk earlier, we would have pivoted.',
          feedback: 'Incorrect: "Were" inversion with past participle requires "Were to have flagged" or passive "Were the team notified".',
          isCorrect: false
        }
      ]
    },
    {
      id: 'c1-q4',
      questionNumber: 4,
      totalQuestions: 6,
      topic: 'Subjunctive Mood in Formal Mandates',
      unit: 'Unit 4.4',
      targetDomain: 'Corporate Governance & Legal Directives',
      questionText: 'Select the sentence that adheres to the mandative subjunctive in standard formal English:',
      grammarTipTitle: 'Mandative Subjunctive',
      grammarTipRule: 'After verbs/adjectives expressing demand, requirement, or necessity (demand, recommend, imperative, essential that), the dependent clause uses the bare base form of the verb for all persons: "that he be", "that she submit".',
      options: [
        {
          key: 'A',
          text: 'It is imperative that the lead architect submit the vulnerability disclosure immediately.',
          feedback: 'Correct! Subjunctive base form "submit" (not "submits") following "imperative that".',
          isCorrect: true
        },
        {
          key: 'B',
          text: 'It is imperative that the lead architect submits the vulnerability disclosure immediately.',
          feedback: 'Incorrect: Indicative third-person "submits" is non-standard in formal mandative subjunctive structures.',
          isCorrect: false
        },
        {
          key: 'C',
          text: 'It is imperative for the lead architect that he submits the disclosure.',
          feedback: 'Incorrect: Awkward hybrid syntax conflating infinitive and that-clause.',
          isCorrect: false
        },
        {
          key: 'D',
          text: 'It is imperative that the lead architect will submit the vulnerability disclosure.',
          feedback: 'Incorrect: Avoid modal "will" in mandative subjunctive clauses.',
          isCorrect: false
        }
      ]
    },
    {
      id: 'c1-q5',
      questionNumber: 5,
      totalQuestions: 6,
      topic: 'Advanced Participle Clauses',
      unit: 'Unit 4.5',
      targetDomain: 'Executive Summaries & Whitepapers',
      questionText: 'Which sentence correctly utilizes a perfect participle clause expressing completed prior action?',
      grammarTipTitle: 'Perfect Participle Clauses: Having + Past Participle',
      grammarTipRule: '"Having + past participle" emphasizes that an action was completed before the action in the main clause began. The implied subject of the participle MUST match the main clause subject.',
      options: [
        {
          key: 'A',
          text: 'Having completed the forensic cryptographic audit, the board sanctioned immediate infrastructure upgrades.',
          feedback: 'Correct! The board completed the audit and subsequent action matches the agent.',
          isCorrect: true
        },
        {
          key: 'B',
          text: 'Having completed the forensic cryptographic audit, immediate upgrades were sanctioned by the board.',
          feedback: 'Incorrect: Dangling participle. "Immediate upgrades" did not complete the audit.',
          isCorrect: false
        },
        {
          key: 'C',
          text: 'After completed the forensic audit, the board sanctioned upgrades.',
          feedback: 'Incorrect: Ungrammatical participle phrase ("After completed"). Should be "After completing".',
          isCorrect: false
        },
        {
          key: 'D',
          text: 'Having being completed the forensic audit, the board sanctioned upgrades.',
          feedback: 'Incorrect: Erroneous auxiliary stacking ("Having being completed").',
          isCorrect: false
        }
      ]
    },
    {
      id: 'c1-q6',
      questionNumber: 6,
      totalQuestions: 6,
      topic: 'Limiting Prepositional Phrases with Inversion',
      unit: 'Unit 4.6',
      targetDomain: 'Statutory Compliance & Security Mandates',
      questionText: 'Identify the grammatically flawless inverted clause under strict negative constraint:',
      grammarTipTitle: 'Inversion after "Under no circumstances"',
      grammarTipRule: 'Phrases like "Under no circumstances", "On no account", and "In no way" at the front of a sentence require auxiliary inversion: [Phrase] + [Auxiliary] + [Subject] + [Verb].',
      options: [
        {
          key: 'A',
          text: 'Under no circumstances should production encryption keys be stored in client-side repositories.',
          feedback: 'Correct! Flawless fronted negative condition with auxiliary inversion "should ... keys be stored".',
          isCorrect: true
        },
        {
          key: 'B',
          text: 'Under no circumstances production encryption keys should be stored in client-side repositories.',
          feedback: 'Incorrect: Lacks subject-auxiliary inversion after fronted negative prepositional phrase.',
          isCorrect: false
        },
        {
          key: 'C',
          text: 'Under no circumstances should production encryption keys to be stored.',
          feedback: 'Incorrect: Erroneous infinitive marker "to" after modal "should".',
          isCorrect: false
        },
        {
          key: 'D',
          text: 'In no circumstances production keys must be stored in client-side repositories.',
          feedback: 'Incorrect: Missing inversion and standard phrase is "Under no circumstances".',
          isCorrect: false
        }
      ]
    }
  ]
};
