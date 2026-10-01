export const projectsSection = {
  eyebrow: 'Recent Projects',
  heading: 'Featured Projects',
  viewAllLabel: 'View All Projects',
  viewAllHref: '#projects',
};

export const projects = [
  {
    id: 'catchy-reminders',

    title: 'CatchyReminders',

    description:
      'An AI-powered to-do app that transforms ordinary tasks into fun, memorable reminders using different personalities and tones.',

    tags: ['React', 'Tailwind CSS', 'OpenRouter', 'LocalStorage'],

    featured: true,

    preview: {
      src: './projects/catchyReminders-d.png',
      alt: 'CatchyReminders AI-powered reminder application',
    },

    liveUrl: 'https://catchy-reminders.pages.dev/',
    githubUrl: 'https://github.com/Rahimah-98/catchy-reminders',
  },

  {
    id: 'portfolio-website',

    title: 'Portfolio Website',

    description:
      'A responsive developer portfolio built with React and Tailwind CSS, featuring dark and light themes, reusable components, and project showcases.',

    tags: ['React', 'Tailwind CSS', 'JavaScript'],

    featured: true,

    preview: {
      src: '/projects/portfolio.png',
      alt: 'Rahimah Ansari personal portfolio website',
    },

    liveUrl: 'https://rahimahansari-portfolio.netlify.app/',
    githubUrl: 'https://github.com/Rahimah-98/portfolio',
  },

  {
    id: 'popchoice',

    title: 'PopChoice',

    description:
      'An AI-powered movie recommendation app using Supabase vector search and embeddings to find movies based on user preferences.',

    tags: ['React', 'Supabase', 'pgvector', 'OpenRouter'],

    featured: true,

    preview: {
      src: '/projects/popchoice.webp',
      alt: 'PopChoice AI movie recommendation application',
    },

    liveUrl: '',
    githubUrl: '',
  },

  {
    id: 'pollyglot',

    title: 'PollyGlot',

    description:
      'An AI-powered translation app that translates text between multiple languages with a simple interface and visual language flags.',

    tags: ['React', 'Tailwind CSS', 'OpenRouter', 'Cloudflare Worker'],

    featured: true,

    preview: {
      src: '/projects/pollyglot.webp',
      alt: 'PollyGlot AI translation application',
    },

    liveUrl: '',
    githubUrl: '',
  },
];
