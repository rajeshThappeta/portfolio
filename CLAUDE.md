# Portfolio — Rajesh T | Senior Full Stack Development Instructor

## What This Project Is

A premium, SaaS-level personal portfolio for **Rajesh T** — Senior Full Stack Development Instructor with 15+ years of experience. The portfolio must position Rajesh as:

> "Senior Developer + Mentor + AI-focused Educator"

This is not a simple resume website. It is a lead-generation and authority-building platform.

---

## React Component Hierarchy

```
App
├── ThemeProvider                        # dark/light context, persisted to localStorage
│
├── Layout
│   ├── Header                           # sticky, glassmorphism on scroll
│   │   ├── Logo                         # name + subtitle
│   │   ├── NavLinks                     # About, Experience, Projects, Training...
│   │   ├── HeaderCTAs
│   │   │   ├── ResumeButton             # download CV
│   │   │   └── WhatsAppButton           # green CTA
│   │   ├── ThemeToggle                  # dark/light switch
│   │   └── MobileMenu                   # hamburger + slide-in drawer
│   │
│   └── FloatingWhatsApp                 # fixed bottom-right, always visible
│
├── sections/
│   │
│   ├── HeroSection
│   │   ├── HeroLeft
│   │   │   ├── ProfileImage             # ./profile.jpg with ring/glow
│   │   │   └── FloatingBadges           # animated label chips around image
│   │   └── HeroRight
│   │       ├── HeroHeadline             # large bold headline
│   │       ├── HeroBio                  # 2–3 line summary
│   │       ├── HeroCTAs                 # Download CV, WhatsApp Me, View Training
│   │       └── StatsRow                 # 15+ Yrs | 10k+ Students | 100+ Projects
│   │           └── StatCard             # individual animated count-up metric
│   │
│   ├── TrustedBySection
│   │   ├── CompanyMarquee               # auto-scroll company logos/names
│   │   ├── TechMarquee                  # auto-scroll tech badge strip
│   │   └── LinkedInCTA                  # "View LinkedIn Profile →" link
│   │
│   ├── ExperienceSection
│   │   └── Timeline
│   │       └── TimelineItem[]           # one per job entry
│   │           ├── TimelineDot          # colored dot on the line
│   │           ├── CompanyBadge         # logo placeholder + name
│   │           ├── RoleTitle
│   │           ├── DateRange
│   │           ├── Location
│   │           ├── AchievementText
│   │           └── TechBadges           # stack tags for that role
│   │
│   ├── ProjectsSection
│   │   ├── ProjectFilters               # All | MERN | AI | Java | Training
│   │   └── ProjectGrid
│   │       └── ProjectCard[]            # one per app
│   │           ├── ProjectScreenshot
│   │           ├── ProjectTitle
│   │           ├── ProjectTagline
│   │           ├── AiFeaturesList
│   │           ├── TechBadges
│   │           ├── BusinessImpact
│   │           └── ProjectLinks
│   │               ├── LiveDemoButton
│   │               └── GitHubButton
│   │
│   ├── TrainingSection
│   │   └── ProgramGrid
│   │       └── ProgramCard[]            # one per training program
│   │           ├── ProgramIcon
│   │           ├── ProgramTitle
│   │           ├── Duration
│   │           ├── TechList
│   │           ├── OutcomesList
│   │           └── EnquireButton        # → WhatsApp prefilled
│   │
│   ├── CurriculumSection
│   │   ├── SectionTitle
│   │   ├── SyllabusIntro                # short intro text
│   │   └── CurriculumTabs               # tab switcher: Java Full Stack | AI MERN
│   │       └── CurriculumPane[]         # one pane per curriculum
│   │           ├── CurriculumLabel      # title of the syllabus
│   │           └── PDFViewer            # <iframe> Google Drive /preview embed, read-only
│   │
│   ├── RecommendationsSection
│   │   ├── FeaturedRecommendation       # large highlighted card at top
│   │   └── RecommendationCarousel       # Swiper.js horizontal scroll
│   │       └── RecommendationCard[]     # LinkedIn screenshot + lightbox
│   │           ├── RecommendationImage
│   │           └── Lightbox             # full-size overlay on click
│   │
│   ├── SkillsSection
│   │   └── SkillCategoryGrid
│   │       └── SkillCategory[]          # Frontend, Backend, DB, AI, DevOps...
│   │           ├── CategoryTitle
│   │           └── BadgeCloud           # floating animated skill badges
│   │               └── SkillBadge[]
│   │
│   ├── GitHubSection
│   │   ├── ContributionGraph            # github-readme-stats embed
│   │   ├── TopLanguages                 # github-readme-stats embed
│   │   ├── CurrentlyBuilding            # manual "what I'm working on" card
│   │   └── PinnedRepos                  # top repo cards with lang + stars
│   │
│   ├── PostsSection
│   │   └── PostGrid
│   │       └── PostCard[]               # Medium/Hashnode style
│   │           ├── PostTitle
│   │           ├── PostDescription
│   │           ├── PlatformTag          # "LinkedIn"
│   │           └── ReadMoreLink
│   │
│   ├── EducationSection
│   │   └── EducationCard                # M.Tech, Distinction — minimal
│   │
│   └── CTASection                       # full-width gradient, high contrast
│       ├── CTAHeadline
│       ├── CTASubtext
│       └── CTAButtons
│           ├── WhatsAppButton
│           ├── LinkedInButton
│           ├── EmailButton
│           └── ScheduleCallButton
│
└── Footer
    ├── FooterBrand                      # name + tagline + social icons
    ├── FooterLinks                      # quick nav links
    └── FooterContact                    # GitHub, LinkedIn, email
```

### Shared / Reusable Components

```
components/ui/
├── Button                   # variant props: primary | ghost | green | outlined
├── Badge                    # tech stack tag, skill chip
├── SectionWrapper           # consistent section padding + scroll-margin-top for nav
├── SectionTitle             # heading + optional subtitle, entrance animation
├── AnimatedCard             # glassmorphism card with hover lift
└── Marquee                  # infinite horizontal auto-scroll strip

components/animations/
├── FadeInUp                 # Framer Motion wrapper — fade + slide up on enter
├── StaggerChildren          # Framer Motion stagger for lists/grids
└── CountUp                  # animated number count-up on scroll into view
```

### Data Layer

```
src/data/
├── experience.js            # parsed from data/experience.md
├── projects.js              # parsed from data/applications.md
├── skills.js                # parsed from data/skills.md — grouped by category
├── posts.js                 # parsed from data/posts.md — title + URL + description
├── training.js              # training programs content
└── stats.js                 # hero metrics: years, students, projects
```

### Routing / Scroll

No page routing needed — single-page app. All nav links use smooth `scrollIntoView` anchored to section `id` attributes matching the nav items.

---

## Tech Stack

| Purpose      | Technology              |
| ------------ | ----------------------- |
| UI Framework | React + Vite            |
| Styling      | Tailwind CSS            |
| Animations   | Framer Motion           |
| Icons        | Lucide React            |
| Carousel     | Swiper.js               |
| Deployment   | Vercel                  |
| GitHub Stats | github-readme-stats API |

---

## Design System

### Theme

- **Default:** Dark premium theme
- **Toggle:** Dark / Light mode
- **Accent color:** Indigo/violet gradient (or cyan-blue for tech feel)

### Design Principles

- Glassmorphism used lightly (cards, header backdrop)
- Smooth Framer Motion animations (fade-in, slide-up, stagger)
- Large typography with generous line-height
- Spacing-heavy layout — breathable sections
- Subtle gradient backgrounds between sections
- NO skill bars (outdated)
- NO bullet-list resume style

---

## Source Data Files

All content is sourced from Markdown files in `data/` (gitignored — local only):

| File                       | Used In Section                       |
| -------------------------- | ------------------------------------- |
| `data/profile-pic.md`      | Hero — profile image path             |
| `data/aboutme.md`          | Hero — bio, headline, services        |
| `data/experience.md`       | Experience Timeline, Trusted By strip |
| `data/skills.md`           | Skills Section, Trusted By strip      |
| `data/education.md`        | Education Section                     |
| `data/applications.md`     | Featured Projects Section             |
| `data/recommendatation.md` | Recommendations / Testimonials        |
| `data/github.md`           | GitHub Section                        |
| `data/posts.md`            | Articles / Posts Section              |
| `data/recommendations/`    | PNG images for recommendation cards   |
| `public/profile.jpg`       | Hero — profile photo (tracked asset)  |

---

## Final Section Order (Strict)

1. Sticky Premium Header
2. Hero Section ← MOST IMPORTANT
3. Trusted By / Stats Strip
4. Experience Timeline
5. Featured Applications / Projects
6. Training Programs
7. Curriculum / Syllabus ← NEW
8. Recommendations / Testimonials
9. Skills & Technologies
10. GitHub / Open Source
11. Articles / Posts
12. Education
13. Final CTA Section
14. Footer
15. Floating WhatsApp Button (always visible)

---

## Section Specifications

---

### 1. Sticky Premium Header

**Feel:** SaaS-level premium — glassmorphism backdrop blur on scroll.

**Left:** Logo / Name — "Rajesh T" with subtitle "Full Stack Mentor"

**Navigation links:**

- About
- Experience
- Projects
- Training
- Recommendations
- GitHub
- Posts
- Contact

**Right side CTAs:**

- Resume button (outlined, download CV)
- WhatsApp CTA button (filled green)
- Dark / Light theme toggle

**Behavior:**

- Transparent at top of page
- Frosted glass + shadow on scroll
- Mobile: hamburger menu with slide-in drawer

---

### 2. Hero Section (MOST IMPORTANT)

Two-column layout. Left: profile image with badges. Right: headline, bio, CTAs, stats.

#### Left Side — Profile Image

- Image file: `./profile.jpg` (source: `profile-pic.md`)
- Large circular or rounded profile photo
- Floating animated badge cards around the image:
  - "AI-Powered Full Stack Trainer"
  - "Java Full Stack"
  - "AI-Powered Apps"
  - "15+ Years Mentoring"
- Subtle glow / ring effect on image
- Entrance animation: fade-in + scale-up

#### Right Side — Content

**Headline (large, bold):**

```
Full Stack Development Mentor
Building Industry-Ready Developers
with MERN, MEAN, Java & AI
```

**Bio (2–3 lines max):**

```
Senior instructor with 15+ years mentoring developers at Cognizant, Wipro,
and VNR University. I help beginners become confident, job-ready
full stack engineers through real-world, AI-powered projects.
```

**CTA Buttons (row):**

- "Download CV" — primary button
- "WhatsApp Me" — green button
- "View Training Programs" — ghost/outlined button

#### Stats Row (below CTA buttons)

| Metric           | Value   |
| ---------------- | ------- |
| Years Experience | 15+     |
| Students Trained | 10,000+ |
| Projects Built   | 100+    |

Stats animate up with count-up effect on scroll into view.

---

### 3. Trusted By / Social Proof Strip

**Purpose:** Establish credibility instantly. Companies and platforms Rajesh has trained at.

**Content from `experience.md`:**

- Cognizant
- Wipro
- West Agile Labs
- VNR Vignanajyothi Institute of Engineering & Technology
- Anurag University
- Second Campus
- MastersCoding (Founder)

**Technologies strip (from `skills.md`):**
React · Angular · Java · Spring Boot · Node.js · Express · MongoDB · MySQL · Next.js · Docker · AI Integration · RAG · Agentic AI

**LinkedIn credibility link:**

- "View LinkedIn Profile → https://www.linkedin.com/in/rajesh-t"

**Design:** Horizontal auto-scroll ticker / marquee. Logos + names. Subtle divider lines.

---

### 4. Experience Timeline (Premium Vertical)

**Design:** Animated vertical timeline — NOT a bullet list.

The experience section is organized into:

- **Featured Experience:** Key roles with detailed highlights
- **Training Collaborations:** Additional training partnerships
- **Career Highlights:** Summary of achievements

Each entry includes:

- Company name + logo placeholder
- Role title
- Date range + duration
- Location
- Tech stack badges
- 1–2 line achievement summary

**Featured Timeline entries (from `experience.md`):**

| Company       | Role                                  | Period             |
| ------------- | ------------------------------------- | ------------------ |
| MastersCoding | Founder & Chief Instructor            | Oct 2019 – Present |
| Cognizant     | Full Stack Web Development Instructor | Jan 2020 – Present |
| Circular Edge | Software Engineer                     | 2013 – Feb 2017    |

**Training Collaborations:**

| Organization                                            | Role                      | Duration            |
| ------------------------------------------------------- | ------------------------- | ------------------- |
| VNR Vignanajyothi Institute of Engineering & Technology | Full Stack Instructor     | Feb 2018 – Present  |
| Wipro                                                   | Full Stack Web Instructor | Sep 2024 – Jan 2025 |
| West Agile Labs                                         | Full Stack Instructor     | Feb 2023 – Apr 2023 |
| Second Campus                                           | Chief Instructor          | May 2017 – Dec 2020 |
| Anurag University                                       | Freelance Trainer         | Dec 2025 – Mar 2026 |

**Animation:** Entries slide in from alternate sides as user scrolls.

---

### 5. Featured Applications / Projects

**Source:** `applications.md`

Move ABOVE education — real-world proof matters more than degrees.

#### Project Card Layout

Each card includes:

- Project name + tagline
- Screenshot / preview image
- Live Demo button (external link)
- GitHub link
- Tech stack badges
- Business impact (1–2 lines)
- AI features highlight (if applicable)

#### Projects

**HireIQ** — `https://hireiq-frontend-sigma.vercel.app`

- Full MERN stack AI-powered job portal
- AI Features: Semantic search (Cohere embeddings), AI Chatbot (Groq/Llama SSE streaming), Resume Skill-Gap Analysis, AI Job Summarizer, Personalized Recommendations via vector search
- Core: Resume upload/parsing, RBAC (jobseeker/recruiter/admin), Job application tracking, Recruiter dashboard
- Tech: MongoDB Atlas Vector Search, React + Vite, React Query, Zustand, JWT httpOnly cookies, Cloudinary, Multer

**AI Writing Assistant** — `https://ai-blogapp-frontend.vercel.app`

- AI-augmented blogging platform
- AI Features: SSE streaming AI article improver (Groq Llama 3.3 70B), Auto-summary pipeline on publish
- Core: Clerk social auth (Google/GitHub/LinkedIn), RBAC, Analytics dashboard (MongoDB aggregation + Recharts), Soft delete + restore
- Tech: React 19 + Vite, Express 5, Mongoose, MongoDB Atlas, Vercel + Render

---

### 6. Training Programs (NEW SECTION)

**Purpose:** Lead generation. Converts visitors into students/clients.

#### Program Cards

Each card includes:

- Program title
- Duration
- Technologies covered
- Outcomes / what students can build
- "Enroll / Enquire" CTA button (links to WhatsApp)

**Programs:**

| Program                  | Duration | Stack                                             | Outcome                             |
| ------------------------ | -------- | ------------------------------------------------- | ----------------------------------- |
| MERN Full Stack Bootcamp | 12 weeks | MongoDB, Express, React, Node.js, JWT, Deployment | Build & deploy 3 full-stack apps    |
| AI-Powered Full Stack    | 10 weeks | MERN + Groq, Cohere, LangChain, Vector DBs        | Build AI-integrated production apps |
| Java Full Stack          | 14 weeks | Java, Spring Boot, REST APIs, React, MySQL        | Enterprise-grade full stack dev     |
| Interview Preparation    | 4 weeks  | DSA, System Design, HR, Mock Interviews           | Land a developer job                |

---

### 7. Curriculum / Syllabus (NEW SECTION)

**Purpose:** Let visitors preview what they will learn before enrolling — builds trust and drives enquiries.

**Layout:** Two tabs side by side on desktop, stacked on mobile. Each tab shows a full read-only PDF preview via Google Drive embed.

#### Tabs

| Tab Label             | Google Drive File ID                | Embed URL                                                                   |
| --------------------- | ----------------------------------- | --------------------------------------------------------------------------- |
| Java Full Stack       | `1MascyZRhupLQWPbOc-lD97VEErhUb-G4` | `https://drive.google.com/file/d/1MascyZRhupLQWPbOc-lD97VEErhUb-G4/preview` |
| AI-Powered MERN Stack | `18LEWL2oOWZDoJLK2wrcY6kBX8qGzkfq7` | `https://drive.google.com/file/d/18LEWL2oOWZDoJLK2wrcY6kBX8qGzkfq7/preview` |

#### PDF Embed Implementation

Use a standard `<iframe>` with the Google Drive `/preview` URL — this renders read-only with no download/print toolbar:

```jsx
<iframe
  src="https://drive.google.com/file/d/FILE_ID/preview"
  width="100%"
  height="600"
  allow="autoplay"
  style={{ border: "none", borderRadius: "12px" }}
  title="Curriculum PDF"
/>
```

**Important:**

- Use `/preview` (not `/view`) — forces read-only mode with no controls
- Height: `600px` desktop, `400px` mobile
- Wrap in a rounded glassmorphism container with a subtle border
- Add a small disclaimer below: _"Download available on enquiry"_
- Add an "Enquire for Full Syllabus" button below each PDF → WhatsApp prefilled

#### Section design

- Section heading: "Curriculum & Syllabus"
- Subtext: "Explore what you'll learn — from fundamentals to production-grade AI applications."
- Tab switcher: pill-style active tab highlight
- Smooth fade transition between tab panes

---

### 8. Recommendations / Testimonials

**Source:** `recommendatation.md` → images in `/recommendations/` (1.png – 12.png)

**Layout:** Hybrid premium format

- Large featured recommendation (top, highlighted card)
- Horizontal auto-scroll carousel below (Swiper.js)
- LinkedIn screenshot images displayed as cards with lightbox on click
- Company names visible where shown

**Design details:**

- Glass-morphism card style
- Quote icon decorations
- Auto-scroll with pause on hover
- Navigation dots + arrow controls

---

### 8. Skills & Technologies

**Source:** `skills.md`

**Design:** Categorized floating badge cards with hover glow effects. NO skill bars.

#### Categories

**Frontend**
React.js · Angular · AngularJS · Next.js · HTML5 · CSS3 · SASS · Bootstrap · Redux.js · ECMAScript

**Backend**
Node.js · Express.js · Java · Spring Boot · Spring MVC · Spring Framework · Servlets & JSP · J2EE Web Services · RESTful Web Services · REST APIs

**Databases**
MongoDB · Mongoose ODM · MySQL · Oracle · SQL · PL/SQL · NoSQL · JDBC · Sequelize.js

**Authentication & Security**
JWT · Clerk Authentication · OAuth

**AI & GenAI**
Generative AI for Web Developers · Vector Search · RAG · Agentic AI · LLM Integration

**DevOps & Tools**
Git · Docker · Heroku · Vercel · Render

**Core CS**
Data Structures · OOP · Database Management System · Core Java · C · C++

**Teaching & Mentoring**
Curriculum Design · Full Stack Instruction · Bootcamp Delivery · Industry Training

**Interaction:** Badges animate in staggered. Hover: scale + glow.

---

### 9. GitHub / Open Source

**Source:** `github.md` → `https://github.com/rajeshThappeta`

**Layout:**

- GitHub contribution graph (embed via github-readme-stats API)
- Top repositories (language badges, star/fork counts)
- "Currently Building" section (manual update)
- Language stats pie/bar

**Embed URLs to use:**

```
https://github-readme-stats.vercel.app/api?username=rajeshThappeta&show_icons=true&theme=tokyonight
https://github-readme-stats.vercel.app/api/top-langs/?username=rajeshThappeta&layout=compact&theme=tokyonight
```

---

### 10. Articles / Posts

**Source:** `posts.md` — LinkedIn post URLs

**Design:** Medium/Hashnode-style article cards.

Each card includes:

- Article title (extract from URL slug or manual)
- Short description
- Platform tag (LinkedIn)
- Read More → external link

**Post titles to extract from URLs:**

1. "The Mystery of Closures — Solved Visually"
2. "Code Memory Execution"
3. "Tired of Repeating Code? Read This"
4. "From CRUD to AI — Students Need This Shift"
5. "Deep Dive: React Hooks Explained for Working Developers"
6. "Semantic Search vs RAG — Same Foundation"
7. "The Hidden Validation Trap in Mongoose"
8. "Embedded Documents vs Referenced Documents"
9. "Activity Post"
10. "A Simple Guide to Implement Social Login"
11. "A Simpler Way to Make Asynchronous Requests"
12. "A Simple Overview on Redux & Zustand"
13. "Simple State Management in MEAN Stack Application"

**Grid:** 3-column on desktop, 2 on tablet, 1 on mobile. Hover: card lifts with shadow.

---

### 11. Education

**Source:** `education.md`

**Position:** Near bottom — supports credibility but does not lead it.

- Degree: Master of Technology (M.Tech.), Computer Engineering
- Grade: Distinction
- Clean minimal card, not a prominent section

---

### 12. Final CTA Section

**Purpose:** Convert visitors into leads. CRITICAL — do not omit.

**Headline:**

```
Want to learn Full Stack Development
or build AI-powered applications?
```

**Sub-text:**

```
Whether you're a beginner, a working professional, or a company
looking for training — let's build something great together.
```

**CTA Buttons (row):**

- "WhatsApp Me" → `https://wa.me/91XXXXXXXXXX?text=Hi+Rajesh,+I+saw+your+portfolio+and+would+like+to+connect.`
- "Connect on LinkedIn" → `https://www.linkedin.com/in/rajesh-t`
- "Send an Email" → `mailto:rajesh.t7982@gmail.com`
- "Schedule a Call" → (Calendly link if available, else WhatsApp)

**Background:** Full-width gradient section, high contrast, large type.

---

### 13. Footer

**Columns:**

**Left:** Name + tagline + social icons (GitHub, LinkedIn, Email)

**Center Quick Links:**

- About
- Experience
- Projects
- Training
- Posts
- Contact

**Right:**

- GitHub: `https://github.com/rajeshThappeta`
- LinkedIn: `https://www.linkedin.com/in/rajesh-t`
- Email: `rajesh.t7982@gmail.com`

**Bottom bar:**

```
© 2026 Rajesh T. Senior Full Stack Development Instructor.
```

---

### 14. Floating WhatsApp Button

**Always visible** — fixed bottom-right corner.

**Design:**

- Green WhatsApp icon button
- Pulse animation ring (draws attention)
- Tooltip on hover: "Chat with Rajesh"

**Pre-filled message:**

```
Hi Rajesh, I saw your portfolio and would like to connect.
```

**Link format:**

```
https://wa.me/91XXXXXXXXXX?text=Hi+Rajesh%2C+I+saw+your+portfolio+and+would+like+to+connect.
```

Replace `XXXXXXXXXX` with Rajesh's actual WhatsApp number.

---

## Responsive Breakpoints

| Breakpoint          | Behavior                                   |
| ------------------- | ------------------------------------------ |
| Mobile (< 768px)    | Single column, hamburger nav, stacked hero |
| Tablet (768–1024px) | 2 columns where applicable                 |
| Desktop (> 1024px)  | Full layout as specified above             |

---

## Performance Notes

- Lazy-load recommendation images (`/recommendations/*.png`)
- Use `next/image` or `loading="lazy"` on all images
- GitHub stats fetched client-side with SWR or React Query
- Framer Motion animations respect `prefers-reduced-motion`

---

## Contact Info

- **Email:** rajesh.t7982@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/rajesh-t
- **GitHub:** https://github.com/rajeshThappeta

---

## Key Positioning Statement

> Your biggest advantage is NOT coding alone. It is industry experience, teaching ability, AI integration, curriculum design, communication skills, and mentorship credibility. Very few portfolios combine all of these. This portfolio must position Rajesh as: **Senior Developer + Mentor + AI-focused Educator**.
