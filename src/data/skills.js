// Skill level
const BEGINNER = 1;
const INTERMEDIARY = 2;
const EXPERT = 3;

// Importance
const HIGH = 3;
const MEDIUM = 2;
const LOW = 1;

// Freshness
const FRESH = 'fresh';
const STALE = 'stale';

// Categories
const LANGUAGES = 'Languages';
const SYSTEMS   = 'Systems';
const LIBRARIES = 'Libraries';
const TOOLS     = 'Tools';
const SERVICES  = 'Services';

export const skills = [
  // Languages
  {
    name:       'Javascript (ES6+, TypeScript)',
    category:   LANGUAGES,
    freshness:  FRESH,
    importance: HIGH,
    level:      EXPERT,
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
    freshness   STALE,
    importance: MEDIUM,
    level:      INTERMEDIARY,
  },
  {
    name:       'C#',
    category:   LANGUAGES,
    freshness   STALE,
    importance: MEDIUM,
    level:      INTERMEDIARY,
  },
  {
    name:       'Python',
    category:   LANGUAGES,
    freshness:  STALE,
    importance: MEDIUM,
    level:      INTERMEDIARY,
  },
  {
    name:       'C++',
    category:   LANGUAGES,
    freshness   STALE,
    importance: MEDIUM,
    level:      BEGINNER,
  },
  {
    name:       'C',
    category:   LANGUAGES,
    freshness   STALE,
    importance: MEDIUM,
    level:      INTERMEDIARY,
  },
  {
    name:       'SQL (MSSQL, MySQL, PostGres)',
    category:   LANGUAGES,
    freshness   STALE,
    importance: LOW,
    level:      INTERMEDIARY,
  },

  // Libraries
  {
    name:       'React',
    category:   LIBRARIES,
    freshness   FRESH,
    importance: HIGH,
    level:      EXPERT,
  },
  {
    name:       'Redux',
    category:   LIBRARIES,
    freshness   FRESH,
    importance: HIGH,
    level:      EXPERT,
  },
  {
    name:       'Angular 2',
    category:   LIBRARIES,
    freshness   STALE,
    importance: HIGH,
    level:      BEGINNER,
  },
  {
    name:       'Node.js',
    category:   LIBRARIES,
    freshness   FRESH,
    importance: HIGH,
    level:      EXPERT,
  },
  {
    name:       'AWS JavaScript SDK',
    category:   LIBRARIES,
    freshness   FRESH,
    importance: MEDIUM,
    level:      EXPERT,
  },
  {
    name:       'Twilio JavaScript SDK',
    category:   LIBRARIES,
    freshness   FRESH,
    importance: MEDIUM,
    level:      EXPERT,
  },
  {
    name:       'ASP.NET',
    category:   LIBRARIES,
    freshness   STALE,
    importance: LOW,
    level:      BEGINNER,
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
    importance: HIGH,
  },
  {
    name:       'Twilio Chat',
    category:   SERVICES,
    freshness:  FRESH,
    level:      EXPERT,
    importance: HIGH,
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
    importance: HIGH,
    level:      EXPERT
  },
];

export default skills;
