# Title of app "HireIQ" 
# URL of the app "https://hireiq-frontend-sigma.vercel.app"

# Top features
## AI / ML Features
Semantic Job Search — Cohere embed-english-v3.0 (1024-dim vectors) + MongoDB Atlas Vector Search for cosine-similarity job matching
AI Chatbot — Groq llama-3.1-8b-instant with real-time Server-Sent Events (SSE) streaming
Resume Skill-Gap Analysis — AI-powered gap analysis comparing user skills to job requirements
AI Job Summarizer — Groq-powered summarization of job descriptions
Personalized Recommendations — Profile embeddings matched against job embeddings via $vectorSearch
## Core Product Features
Resume Upload & Parsing — Multer + Cloudinary storage + pdf-parse for text extraction
Role-Based Access Control — Three roles (jobseeker / recruiter / admin) with protected routes
Job Application Tracking — Embedded application subdocuments with status ### workflow
Save Jobs — Jobseekers can bookmark jobs to their profile
Recruiter Dashboard — Post jobs, manage applications, track applicants
## Technical / Architecture Highlights (great talking points)
JWT in httpOnly cookies — Secure auth, not localStorage
Full MERN stack — MongoDB Atlas, Express, React + Vite, Node.js
React Query + Zustand — Separation of server state vs. UI state
Free-tier AI stack — Entire AI layer runs on free APIs (Cohere + Groq + MongoDB Atlas M0)




# Title of app  "AI Writing Assistant"
# URL of the app "https://ai-blogapp-frontend.vercel.app"

# Top features
AI Writing Assistant (SSE streaming) — Author drafts an article, clicks "Improve with AI", and a Groq-powered Llama 3.3 70B model streams an improved version word-by-word in real time using Server-Sent Events. Demonstrates streaming API integration, ReadableStream handling on the frontend, and chunked SSE parsing.

AI Auto-Summary Pipeline — On every article publish or edit, a Groq call automatically generates a 2–3 sentence summary and stores it with the article. Cards display the summary instead of raw content. Demonstrates AI-augmented write pipelines (enrich at write time, not read time).

Social Auth + Role-Based Access Control — Clerk handles Google, GitHub, and LinkedIn OAuth. On first login, users pick a role (Reader or Author). Every backend route re-queries the database to verify role — never trusts the client. Demonstrates production auth architecture.

Full-Stack Deployment — React 19 + Vite frontend on Vercel, Express 5 + Mongoose backend on Render, MongoDB Atlas for the database. Environment-variable-driven config, CORS scoped to the production origin, and a clean CI pipeline via GitHub pushes.

Analytics Dashboard — MongoDB aggregation pipeline surfaces per-author stats: total articles, total comments, average comments per article, and a Recharts bar chart of articles by category. No third-party analytics — pure server-side aggregation.

Soft Delete + Restore — Articles are never hard-deleted. Authors can delete and restore their own articles. Active/deleted articles are shown in separate sections of the dashboard. Demonstrates intentional data design for content platforms.

