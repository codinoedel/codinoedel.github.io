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
    freshness:  STALE,
    importance: HIGH,
    level:      BEGINNER,
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
    name:       'Python',
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
    name:       'SQL (PostGres)',
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
    name:       'Angular 2',
    category:   LIBRARIES,
    freshness:  STALE,
    importance: HIGH,
    level:      BEGINNER,
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
    name:       'Mocking: API Blueprint',
    category:   LIBRARIES,
    freshness:  STALE,
    importance: LOW,
    level:      INTERMEDIATE,
  },
  {
    name:       'Mocking: Nock',
    category:   LIBRARIES,
    freshness:  FRESH,
    importance: LOW,
    level:      INTERMEDIATE,
  },
  {
    name:       'AWS JavaScript SDK',
    category:   LIBRARIES,
    freshness:  FRESH,
    importance: MEDIUM,
    level:      EXPERT,
  },
  {
    name:       'Twilio JavaScript SDK',
    category:   LIBRARIES,
    freshness:  FRESH,
    importance: MEDIUM,
    level:      EXPERT,
  },

  // Services
  {
    name:       'AWS: SWF',
    category:   SERVICES,
    level:      EXPERT,
    importance: HIGH,
    freshness:  FRESH,
  },
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
    importance: LOW,
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
    name:       'Twilio Video',
    category:   SERVICES,
    freshness:  FRESH,
    level:      EXPERT,
    importance: MEDIUM,
  },
  {
    name:       'Twilio Chat',
    category:   SERVICES,
    freshness:  FRESH,
    level:      EXPERT,
    importance: LOW,
  },

  // Tools
  {
    name:       'Vim',
    category:   TOOLS,
    freshness:  FRESH,
    level:      INTERMEDIATE,
    importance: HIGH,
  },
  {
    name:       'Visual Studio',
    category:   TOOLS,
    freshness:  STALE,
    importance: LOW,
    level:      INTERMEDIATE,
  },
];

export default skills;
