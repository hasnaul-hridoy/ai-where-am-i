/*
 * ============================================================
 * CHAPTER METADATA
 * Single source of truth for all chapter info, parts, and routing
 * ============================================================
 */

export interface Chapter {
  slug: string;
  number: number;
  title: string;
  part: number;
  published: boolean;
}

export interface Part {
  number: number;
  label: string;
  theme: string;
}

export const parts: Part[] = [
  { number: 1, label: 'Foundations',   theme: 'The opening question' },
  { number: 2, label: 'The Roots',     theme: 'History and mathematical foundations' },
  { number: 3, label: 'The Branches',  theme: 'Core techniques' },
  { number: 4, label: 'The Canopy',    theme: 'Real-world applications' },
  { number: 5, label: 'The Horizon',   theme: 'Synthesis and open questions' },
];

export const chapters: Chapter[] = [
  // Part I
  { slug: '01-the-ai-you-think-you-know',   number: 1,  title: 'The AI You Think You Know',      part: 1, published: true  },

  // Part II
  { slug: '02-the-dream-and-the-winters',   number: 2,  title: 'The Dream and the Winters',      part: 2, published: true},
  { slug: '03-the-soil',                    number: 3,  title: 'The Soil',                        part: 2, published: true},
  { slug: '04-the-seed',                    number: 4,  title: 'The Seed',                        part: 2, published: true},

  // Part III
  { slug: '05-teaching-machines-to-see',    number: 5,  title: 'Teaching Machines to See',        part: 3, published: true},
  { slug: '06-teaching-machines-to-remember', number: 6, title: 'Teaching Machines to Remember', part: 3, published: true},
  { slug: '07-teaching-machines-to-decide', number: 7,  title: 'Teaching Machines to Decide',    part: 3, published: true},
  { slug: '08-teaching-machines-to-focus',  number: 8,  title: 'Teaching Machines to Focus',     part: 3, published: true},
  { slug: '09-teaching-machines-to-scale',  number: 9,  title: 'Teaching Machines to Scale',     part: 3, published: true},
  { slug: '10-teaching-machines-to-create', number: 10, title: 'Teaching Machines to Create',    part: 3, published: true},

  // Part IV
  { slug: '11-the-doctors-dilemma',         number: 11, title: "The Doctor's Dilemma",            part: 4, published: true},
  { slug: '12-the-physicists-new-instrument', number: 12, title: "The Physicist's New Instrument", part: 4, published: true},
  { slug: '13-the-planets-ledger',          number: 13, title: "The Planet's Ledger",             part: 4, published: true},
  { slug: '14-the-algorithm-in-the-courtroom', number: 14, title: 'The Algorithm in the Courtroom', part: 4, published: true},
  { slug: '15-the-machine-and-the-muse',    number: 15, title: 'The Machine and the Muse',        part: 4, published: true},

  // Part V
  { slug: '16-the-hidden-network',          number: 16, title: 'The Hidden Network',              part: 5, published: true},
  { slug: '17-the-researchers-toolkit',     number: 17, title: "The Researcher's Toolkit",        part: 5, published: true},
  { slug: '18-the-unfinished-story',        number: 18, title: 'The Unfinished Story',            part: 5, published: true},
];

/** Get all chapters belonging to a specific part number */
export function getChaptersByPart(partNumber: number): Chapter[] {
  return chapters.filter(c => c.part === partNumber);
}

/** Get the previous and next chapters relative to a given slug */
export function getAdjacentChapters(slug: string): { prev: Chapter | null; next: Chapter | null } {
  const index = chapters.findIndex(c => c.slug === slug);
  return {
    prev: index > 0 ? chapters[index - 1] : null,
    next: index < chapters.length - 1 ? chapters[index + 1] : null,
  };
}
