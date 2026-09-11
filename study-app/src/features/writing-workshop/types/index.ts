export interface AssessmentAngle {
  id: string;
  label: string;
  checked: boolean;
}

export interface StyleUpgrade {
  original: string;
  replacement: string;
  rationale: string;
}

export interface EssayPrompt {
  id: string;
  title: string;
  category: string;
  targetBand: string;
  description: string;
  minWords: number;
  maxWords: number;
  mandatoryAngles: AssessmentAngle[];
  suggestedUpgrades: StyleUpgrade[];
}
