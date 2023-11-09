// Skill level
const BEGINNER     = 1;
const INTERMEDIATE = 2;
const EXPERT       = 3;

export const SKILL_LEVELS = [
  BEGINNER, INTERMEDIATE, EXPERT
];

// Importance
const HIGH = 3;
const MEDIUM = 2;
const LOW = 1;

// Freshness
const FRESH = 'fresh';
const STALE = 'stale';

// Categories
const LANGUAGES = 'Languages';
const LIBRARIES = 'Libraries';
const TOOLS     = 'Tools';
const SERVICES  = 'Services';

export const skills = [
  // Languages
  {
    name:       'Javascript',
    category:   LANGUAGES,
    freshness:  FRESH,
    importance: HIGH,
    level:      EXPERT,
  },
  {
    name:       'Typescript',
    category:   LANGUAGES,
    freshness:  FRESH,
    importance: HIGH,
    level:      INTERMEDIATE,
  },
  {
    name:       'HTML',
    category:   LANGUAGES,
    freshness:  FRESH,
    importance: HIGH,
    level:      EXPERT,
  },
  {
    name:       'CSS',
    category:   LANGUAGES,
    freshness:  FRESH,
    importance: HIGH,
    level:      EXPERT,
  },
  {
    name:       'Java',
    category:   LANGUAGES,
    freshness:  STALE,
    importance: MEDIUM,
    level:      INTERMEDIATE,
  },
  {
    name:       'C#',
    category:   LANGUAGES,
    freshness:  STALE,
    importance: MEDIUM,
    level:      INTERMEDIATE,
  },
  {
    name:       'C++',
    category:   LANGUAGES,
    freshness:  STALE,
    importance: MEDIUM,
    level:      BEGINNER,
  },
  {
    name:       'C',
    category:   LANGUAGES,
    freshness:  STALE,
    importance: MEDIUM,
    level:      INTERMEDIATE,
  },
  {
    name:       'Python',
    category:   LANGUAGES,
    freshness:  STALE,
    importance: LOW,
    level:      INTERMEDIATE,
  },
  {
    name:       'SQL (PostGres, MySQL)',
    category:   LANGUAGES,
    freshness:  STALE,
    importance: LOW,
    level:      INTERMEDIATE,
  },

  // Libraries
  {
    name:       'React',
    category:   LIBRARIES,
    freshness:  FRESH,
    importance: HIGH,
    level:      EXPERT,
  },
  {
    name:       'Redux',
    category:   LIBRARIES,
    freshness:  FRESH,
    importance: HIGH,
    level:      EXPERT,
  },
  {
    name:       'Angular 1/2',
    category:   LIBRARIES,
    freshness:  STALE,
    importance: MEDIUM,
    level:      INTERMEDIATE,
  },
  {
    name:       'Node.js',
    category:   LIBRARIES,
    freshness:  FRESH,
    importance: HIGH,
    level:      EXPERT,
  },
  {
    name:       'Jest',
    category:   LIBRARIES,
    freshness:  FRESH,
    importance: MEDIUM,
    level:      INTERMEDIATE,
  },
  {
    name:       'AWS JavaScript SDK',
    category:   LIBRARIES,
    freshness:  STALE,
    importance: MEDIUM,
    level:      EXPERT,
  },
  {
    name:       'Twilio JavaScript SDK',
    category:   LIBRARIES,
    freshness:  STALE,
    importance: MEDIUM,
    level:      EXPERT,
  },

  // Services
  {
    name:       'AWS: EC2',
    category:   SERVICES,
    level:      EXPERT,
    importance: HIGH,
    freshness:  FRESH,
  },
  {
    name:       'AWS: Lambda',
    category:   SERVICES,
    level:      INTERMEDIATE,
    importance: HIGH,
    freshness:  FRESH,
  },
  {
    name:       'AWS: DynamoDB',
    category:   SERVICES,
    freshness:  FRESH,
    level:      EXPERT,
    importance: HIGH,
  },
  {
    name:       'Twilio Video & Chat',
    category:   SERVICES,
    freshness:  STALE,
    level:      EXPERT,
    importance: MEDIUM,
  },
  // Tools
  {
    name:       'Vim',
    category:   TOOLS,
    freshness:  FRESH,
    level:      INTERMEDIATE,
    importance: HIGH,
  },
];

export default skills;
