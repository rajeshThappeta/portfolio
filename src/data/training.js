export const professionalPrograms = [
  {
    id: 2,
    title: 'AI-Powered Full Stack',
    duration: '10 Weeks',
    icon: '🤖',
    stack: ["MERN", 'Groq', 'Cohere', 'LangChain.js', 'Vector DBs', 'SSE Streaming', 'ReAct', 'Agents'],
    outcomes: [
      'Build and deploy end-to-end RAG pipelines with vector embeddings and semantic search',
      'Integrate LLMs into production full-stack apps using Groq and LangChain.js',
      'Design and implement Agentic AI systems — ReAct pattern, tool calling, multi-step reasoning',
      'Stream AI responses in real time with Server-Sent Events (SSE)',
      'Connect AI features to MongoDB Atlas Vector Search for intelligent data retrieval',
      'Build production-grade AI apps: job portals, writing assistants, code review agents'
    ],
    tags: ['MERN', 'MEAN','AI'],
    highlight: true,
    badge: '2026 Focus',
  },
  {
    id: 1,
    title: 'MERN Full Stack Bootcamp',
    duration: '12 Weeks',
    icon: '🧱',
    stack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT', 'Vercel', 'Render'],
    outcomes: [
      'Build & deploy 3 production full-stack apps',
      'REST API design with authentication & authorisation',
      'React with hooks, context & state management',
      'MongoDB schema design & aggregation',
    ],
    tags: ['MERN'],
  },
]

export const foundationPrograms = [
  {
    id: 3,
    title: 'Java Full Stack',
    duration: '14 Weeks',
    icon: '☕',
    stack: ['Core Java', 'Spring Boot', 'Spring MVC', 'REST APIs', 'React', 'MySQL', 'Hibernate'],
    outcomes: [
      'Enterprise Java with Spring Boot',
      'Design RESTful web services',
      'Full stack with Java backend + React frontend',
      'Database integration with JPA & Hibernate',
    ],
    tags: ['Java'],
  },
  {
    id: 4,
    title: 'Interview Preparation',
    duration: '4 Weeks',
    icon: '🎯',
    stack: ['DSA', 'System Design', 'React', 'Java', 'Mock Interviews'],
    outcomes: [
      'Crack DSA rounds at product companies',
      'System design fundamentals for scalable apps',
      'HR & behavioural interview coaching',
      'Live mock interview sessions',
    ],
    tags: ['Career'],
  },
]

export const programs = [...professionalPrograms, ...foundationPrograms]
