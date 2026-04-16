/*
 * ============================================================
 * FIELD CARD DATA
 * Used by the FieldGrid interactive component in Chapter 1
 * ============================================================
 */

export type FieldCategory = 'life' | 'physical' | 'social';

export interface Field {
  name: string;
  icon: string;
  category: FieldCategory;
  shortDesc: string;
  year: string;
  detail: string;
}

export const fields: Field[] = [
  {
    name: 'Drug Discovery',
    icon: '💊',
    category: 'life',
    shortDesc: 'Novel antibiotic from 107M compounds',
    year: '2020',
    detail: 'A neural network trained on 2,335 molecules screened 107 million candidates and found halicin — an antibiotic that works through a mechanism no existing drug uses. Bacteria could not develop resistance after 30 days of continuous exposure.',
  },
  {
    name: 'Protein Folding',
    icon: '🧬',
    category: 'life',
    shortDesc: '200M+ structures by AlphaFold',
    year: '2021',
    detail: "DeepMind's AlphaFold2 solved a 50-year grand challenge by predicting 3D protein structures from amino acid sequences with atomic accuracy. It has since mapped over 200 million structures across all known organisms.",
  },
  {
    name: 'Genomics',
    icon: '🧪',
    category: 'life',
    shortDesc: 'Non-coding DNA variant interpretation',
    year: '2023',
    detail: "AI models now interpret the 98% of the genome that doesn't code for proteins but regulates gene expression. These models predict which genetic variants cause disease — previously one of the hardest problems in medicine.",
  },
  {
    name: 'Medical Imaging',
    icon: '🩺',
    category: 'life',
    shortDesc: 'Retinal scans detect 50+ diseases',
    year: '2018',
    detail: 'CNNs analyzing retinal photographs can detect diabetic retinopathy, cardiovascular risk, and over 50 conditions from a single eye scan — often matching or exceeding specialist accuracy.',
  },
  {
    name: 'Materials Science',
    icon: '⭐',
    category: 'physical',
    shortDesc: '381K novel stable crystals',
    year: '2023',
    detail: "Google DeepMind's GNoME used graph neural networks to discover 2.2 million stable crystal structures — 8 times the entire previously known catalogue. 736 have already been confirmed in laboratories worldwide.",
  },
  {
    name: 'Weather',
    icon: '⛅',
    category: 'physical',
    shortDesc: '10-day forecast in under a minute',
    year: '2023',
    detail: "GraphCast, trained on 39 years of historical data, beats the world's best physics-based model on 90%+ of verification targets. A full 10-day global forecast runs in under a minute on a single chip.",
  },
  {
    name: 'Fusion Energy',
    icon: '⚡',
    category: 'physical',
    shortDesc: 'RL controls tokamak plasma',
    year: '2022',
    detail: 'DeepMind trained reinforcement learning controllers that maintain plasma containment inside tokamak fusion reactors in real-time — a control problem too fast and complex for human-designed systems.',
  },
  {
    name: 'Particle Physics',
    icon: '🔬',
    category: 'physical',
    shortDesc: 'Accelerator beam optimization',
    year: '2020',
    detail: 'AI optimizes particle accelerator beam configurations in real-time, reducing tuning time from hours to minutes and improving experimental throughput at facilities including CERN.',
  },
  {
    name: 'Climate',
    icon: '🌍',
    category: 'social',
    shortDesc: 'Satellite deforestation tracking',
    year: '2021',
    detail: 'Computer vision models classify satellite imagery to track deforestation, coral reef health, and wildlife migration at continental scales — work that would take human analysts years.',
  },
  {
    name: 'Legal Analysis',
    icon: '⚖️',
    category: 'social',
    shortDesc: 'Case outcome prediction',
    year: '2023',
    detail: 'NLP models predict court case outcomes, extract key clauses from contracts, and flag regulatory risk. They process thousands of documents in hours that would take legal teams weeks.',
  },
  {
    name: 'Ancient Languages',
    icon: '🏛️',
    category: 'social',
    shortDesc: 'Damaged Akkadian tablet reconstruction',
    year: '2023',
    detail: 'AI reconstructed missing text on 2,600-year-old damaged Akkadian tablets, filling gaps that had puzzled scholars for decades. It also identified that the Dead Sea Scrolls were written by two distinct scribes.',
  },
  {
    name: 'Music',
    icon: '🎵',
    category: 'social',
    shortDesc: 'AI co-composition & style transfer',
    year: '2023',
    detail: 'Generative models compose original music, transfer styles between genres, and help human composers explore harmonic possibilities they would not have tried independently.',
  },
];
