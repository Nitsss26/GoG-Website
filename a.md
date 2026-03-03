# 🌐 MASTER WEBSITE BUILD GUIDE
## Based on: wavexcel.in | AI & Software Company Website
### Reference README + Vibe-Code Prompts for Every Page & Section

> **HOW TO USE THIS DOC:**
> Each section has:
> 1. **📋 REFERENCE** — What exactly exists on Wavexcel (content, layout, elements)
> 2. **🤖 PROMPT** — Copy-paste this into your AI coding tool (Cursor, Lovable, v0, Bolt, etc.)
> 
> Replace all `[YOUR_COMPANY]`, `[YOUR_COLOR]`, `[YOUR_FONT]` etc. with your actual brand details.
> Mention your existing page's theme at the start of EVERY prompt so the AI stays consistent.

---

## 🗂️ SITE STRUCTURE / NAVIGATION

```
Header Nav:
  Logo | Home | Services | Industries | Case Studies | Design | Voice | About Us | [CTA Button: Let's Talk]

Pages:
  / → Homepage
  /service → Services Overview
    /service/ai-agent-development
    /service/software-development
    /service/web-development
    /service/app-development
    /service/ai-calling-agent
    /service/ui-ux-design
  /industries → Industries Overview
    /industries/education
    /industries/high-tech
    /industries/finance
    /industries/healthcare
    /industries/manufacturing
  /case-studies → Case Studies Grid
    /case-studies/[each-case-study]
  /design → Design Services Page
  /ai-calling-agent → AI Voice Agent Landing Page
  /about-us → About Page

Footer:
  Logo | Tagline | Email | Phone | Address
  Links: Home, Services, AI Calling Agent, Design, Case Studies, About Us, Hire RLHF, Privacy Policy
  Copyright line
```

---

---

# PAGE 1: HOMEPAGE ( / )

## 📋 REFERENCE — Homepage Sections (in order)

### SECTION 1: NAVBAR
- Sticky top navbar
- Logo (left)
- Nav links: Home, Services, Industries, Case Studies, Design, Voice, About Us
- CTA button: "Let's Talk" (pill-shaped, accent color)
- Mobile: Hamburger menu

### SECTION 2: HERO
- Small badge/tag at top: "A.I Driven" (animated, glowing)
- H1: "AI Solutions for Smarter Digital Transformation"
- Subtext: "Wavexcel offers innovative AI solutions and custom software development that help businesses streamline operations, enhance user experiences, and accelerate growth through intelligent technology."
- CTA Button: "Let's Talk"
- Background: Dark/gradient with subtle particle or wave animation

### SECTION 3: TRUSTED BY / LOGO STRIP
- Heading: "Trusted by Top Brands & Companies"
- Horizontal scrolling marquee of client logos (7+ logos)
- Infinite scroll animation left-to-right

### SECTION 4: ABOUT US SNIPPET
- Small label: "About Us"
- Large image (team/office photo) on left
- Text on right: Company description paragraph
- CTA: "Book for FREE" button
- Stats shown below or alongside

### SECTION 5: SERVICES GRID
- Label: "AI-Driven Digital Services"
- Section heading (h2): "We offer a robust suite of digital services centered around AI and complemented by full-stack development and design."
- 6 service cards in a grid (2 or 3 columns):
  1. Custom AI Solutions — "Tailored AI systems for automation, chat, and intelligent decision-making." → [Learn more]
  2. Software Development — "Scalable, high-performance software built to grow with your business." → [Learn more]
  3. Web Development — "Responsive, SEO-friendly websites that boost your brand and engagement." → [Learn more]
  4. Application Development — "Fast, reliable apps for mobile and cross-platform use." → [Learn more]
  5. AI Calling Agent — "Convert Leads with Human-Like AI Conversations." → [Learn more]
  6. UI/UX Design — "Intuitive, user-focused design that enhances digital experiences." → [Learn more]
- Each card: icon + title + description + "Learn more" link

### SECTION 6: TECH STACK
- Label: "Tech Stack"
- Heading: "Powered by Industry-Leading Technologies"
- Subtext: "We leverage a future-ready tech stack to build intelligent AI systems, scalable applications, and high-impact digital solutions."
- Tab switcher (5 tabs):
  - AI & Machine Learning
  - Frontend
  - Backend
  - Mobile Development
  - DevOps & Cloud Platforms
- Each tab shows tech logos in a scrolling strip
- Tech logos: Python, TensorFlow, OpenAI, LangChain, React, Next.js, Node.js, Django, Flutter, React Native, AWS, Docker, Kubernetes, etc.

### SECTION 7: CASE STUDIES
- Label: "Case Study"
- Heading: "Transformative Innovations We've Crafted for Our Clients"
- Subtext: "Harnessing the power of artificial intelligence to revolutionize industries and enhance human experiences."
- Tabbed case studies (Financial | Manufacturing | Real Estate tabs)
- Each tab: large image left + industry tag + paragraph description
- Financial case: "A leading bank approached us with a challenge: simplifying complex branch-level manuals and processes. We delivered an Open Source LLM-based RAG-based chatbot agent, integrated with their internal systems..."
- CTA: "Explore More →" link to /case-studies

### SECTION 8: STATS / INDICATORS
- Heading: "We are Big Enough to Deliver and Small Enough to Care"
- 4 large stat counters in a row:
  - 50+ Technologies
  - 10+ Industries Experience
  - 60+ Team Members
  - 300+ Projects Done
- Decorative SVG/wave lines around this section

### SECTION 9: TEAM
- Label: "Our Team"
- Heading: "Meet Our Team, Proudly Delivering World-Class Solutions"
- Horizontal scrollable team cards
- Each card: Photo + Name + Title
  - Bittoo Aggarwal — Vice President, Ex-Amazon, ION Trading
  - Deepak Aggarwal — Partner, Ex-Facebook London
  - Harshit Singhal — Partner, Ex-JP Morgan
  - Vikas Ranjan — Coinbase, Ex-Zomato

### SECTION 10: INDUSTRIES
- Label: "Industries We Transform"
- Heading: "Empowering Change Across Sectors"
- Numbered accordion/list (1, 2, 3, 4...):
  1. Banking — "Automate loan processing with RPA, implement real-time AI-driven fraud detection..."
  2. Manufacturing — "Enhance manufacturing with AI-powered predictive maintenance, Industrial IoT..."
  3. Retail — "AI-driven customer personalization, omnichannel integration, smart inventory..."
  4. Real Estate — "Automated property management, AI-powered market insights, VR property tours..."
- Each item: number + industry name + description + illustration image
- CTA: "Explore More →"

### SECTION 11: TESTIMONIALS
- Label: "Testimonial"
- Heading: "Our Clients Love Our Solutions"
- Globe SVG background decoration
- Scrolling/auto-slide testimonial cards (4 cards):
  1. algomage — "Collaborating with Wavexcel has been a great experience..."
  2. Terragon — "The efficiency and innovation Wavexcel brings to the table are remarkable..."
  3. Upshift — "Wavexcel exceptional AI solutions have transformed our marketing strategies..."
  4. Dianax — "Their AI-driven insights and solutions have significantly improved our educational platforms..."
- Each card: Quote text + Company name + Company logo

### SECTION 12: CTA BANNER
- Heading: "Experience the Future: Get in Touch Today"
- Subtext: "Explore cutting-edge technology designed to elevate your business. Try our AI solutions and see the productivity transformation firsthand."
- Button: "Contact Us"
- Background: Gradient or abstract design

### SECTION 13: FAQ
- Label: "FAQ"
- Heading: "Frequently Asked Questions"
- Accordion list (8 questions):
  1. What type of services do you offer as an AI solutions company?
  2. Is it possible to integrate AI into my current software?
  3. Do you offer pure AI services or full development services as well?
  4. How do you maintain AI system data security?
  5. What are customized AI agents and how can they assist my business?
  6. Can you manage both AI and conventional software development projects?
  7. Do you provide post-launch support and maintenance?
  8. Can I host AI functionality on my existing platform?

### SECTION 14: FOOTER
- Logo + tagline: "We empower clients with cutting-edge AI and digital solutions that drive impactful growth, enhance ROI, and reduce costs."
- Contact: hello@wavexcel.in | +91 7982884305
- Address: 3rd Floor, Tower B4, SPAZE ITECH PARK, Sector 49, Gurugram, Haryana 122018
- Quick links: Home, Services, AI Calling Agent, Design, Case Studies, About Us, Hire RLHF, Privacy Policy
- Copyright: © 2025 Copyright — Wavexcel
- Decorative background image

---

## 🤖 PROMPT — Homepage

```
I am building a website for an AI & software development company.
I already have my existing page with [DESCRIBE YOUR THEME: e.g., "dark background, neon blue/purple gradient accents, Inter font, glassmorphism cards"].
Build me a complete homepage (index.html or page.jsx) that matches my existing theme and style exactly.

The homepage must have these sections in this exact order:

1. STICKY NAVBAR: Logo on left, nav links (Home, Services, Industries, Case Studies, About Us), and a pill-shaped CTA button "Let's Talk" on right. Mobile hamburger menu.

2. HERO SECTION: Small animated glowing badge "A.I Driven" at top. Large H1: "AI Solutions for Smarter Digital Transformation". Subtext about helping businesses streamline operations with AI. One CTA button "Let's Talk". Dark background with subtle animated gradient or floating particles.

3. LOGO MARQUEE: Section title "Trusted by Top Brands & Companies". Infinite auto-scrolling row of placeholder client logos (use colored rectangles with text as placeholders).

4. ABOUT SNIPPET: "About Us" label. Left: placeholder image. Right: 2-3 sentence company description. CTA "Book a Free Call" button.

5. SERVICES GRID: "AI-Driven Digital Services" label. H2 heading. 6 cards in 2-3 column grid. Each card has: emoji or lucide icon, service name, short description, "Learn more →" link. Services: Custom AI Solutions, Software Development, Web Development, App Development, AI Calling Agent, UI/UX Design.

6. TECH STACK: "Powered by Industry-Leading Technologies" heading. 5 clickable tabs: AI & ML, Frontend, Backend, Mobile, DevOps. Each tab shows tech logo pills in a row. Use real tech names as text badges if no images.

7. CASE STUDIES TEASER: "Transformative Innovations" heading. 3 tabs: Financial, Manufacturing, Real Estate. Each tab: placeholder image + industry tag + 2-sentence description. "Explore More →" CTA.

8. STATS ROW: 4 animated counters: "50+ Technologies", "10+ Industries", "60+ Team Members", "300+ Projects Done". Counter animates up when scrolled into view.

9. TEAM CARDS: Horizontal scrollable row. 4 team cards each with: circular photo placeholder + name + role.

10. INDUSTRIES ACCORDION: Numbered list 1-4. Industries: Banking, Manufacturing, Retail, Real Estate. Click to expand with description. Right side shows illustration.

11. TESTIMONIALS SLIDER: Auto-sliding cards. 4 testimonials with quote, company name, company logo placeholder.

12. CTA BANNER: "Experience the Future: Get in Touch Today". Subtext. "Contact Us" button. Gradient background.

13. FAQ ACCORDION: 8 questions about AI services. Click to expand answers.

14. FOOTER: Logo, tagline, email, phone, address, nav links, copyright.

Use [YOUR TECH: React/HTML/Next.js]. Apply my theme colors [YOUR COLORS] throughout. Make it fully responsive. Add smooth scroll animations (fade-in on scroll). No external image dependencies — use placeholders.
```

---

---

# PAGE 2: SERVICES OVERVIEW ( /service )

## 📋 REFERENCE — Services Page

### Layout
- Hero at top: "Our Services" heading + short intro
- 6 service cards in a grid, each linking to individual service page
- Each card: Icon + Service name + Description + "Learn More" CTA
- Services listed:
  1. **AI Agent Development** — Intelligent automation agents for business
  2. **Software Development** — Enterprise software, SaaS platforms
  3. **Web Development** — SEO-friendly, responsive websites
  4. **App Development** — Mobile and cross-platform apps
  5. **AI Calling Agent** — Voice AI for sales and support
  6. **UI/UX Design** — User-focused interface design

---

## 🤖 PROMPT — Services Page

```
Build a "Services" page matching my existing website theme [DESCRIBE THEME].

Layout:
1. HERO: Page title "Our Services". Short subtext: "We build AI-first solutions and digital products that help businesses grow faster."

2. SERVICES GRID: 6 large cards in a 2-3 column responsive grid. Each card has:
   - Relevant icon (lucide-react or emoji)
   - Service title (bold, large)
   - 2-3 sentence description
   - "Learn More →" button/link
   
   Services:
   - AI Agent Development: "We build intelligent AI agents that automate tasks, answer questions, and operate workflows 24/7."
   - Software Development: "Custom enterprise software, SaaS platforms, and internal tools built for scale."
   - Web Development: "Fast, SEO-optimized, and beautiful websites that convert visitors into customers."
   - App Development: "Cross-platform mobile apps for iOS and Android with smooth UX."
   - AI Calling Agent: "Human-like AI voice agents that handle inbound/outbound calls and qualify leads automatically."
   - UI/UX Design: "Research-driven design systems and interfaces that users love."

3. PROCESS STRIP (optional): "How We Work" — 4 steps: Discovery → Design → Build → Launch. Horizontal step indicator.

4. CTA SECTION: "Ready to Start?" heading. "Book a Free Consultation" button.

Apply my theme, make it fully responsive, add hover animations on cards.
```

---

---

# PAGE 3: INDIVIDUAL SERVICE PAGES ( /service/[slug] )

## 📋 REFERENCE — Individual Service Page Structure

All 6 service pages share the same layout template:

### Common Sections on Every Service Page:
1. **Hero** — Service title + subtitle + CTA button + background image/gradient
2. **What We Offer** — 3-4 feature cards describing the service
3. **Process/How It Works** — Numbered steps (4-6 steps)
4. **Tech Used** — Logo grid of technologies used for this service
5. **Case Studies** — 2-3 related case study previews
6. **Testimonials** — 2-3 relevant testimonials
7. **FAQ** — 5-6 service-specific questions
8. **CTA Banner** — "Get in Touch" section

### AI Agent Development Page specifics:
- Hero: "Build Intelligent AI Agents That Work For You"
- What We Offer: Custom Chatbots, Automation Agents, Predictive Agents, NLP Systems
- Process: Strategy → Data Collection → Model Design (OpenAI/LangChain/TensorFlow) → Testing → Deployment → Support
- Tech: OpenAI, LangChain, TensorFlow, Python, FastAPI

### AI Calling Agent Page specifics:
- Hero: "Convert Leads with Human-Like AI Conversations"
- Features: Multilingual support (English, Hindi, Tamil, Telugu), 24/7 availability, Inbound + Outbound, CRM integration
- Use cases: Sales calls, Support, Appointment booking, Lead qualification
- Regions served: India, Canada, Dubai, UK

---

## 🤖 PROMPT — Individual Service Page (reusable template)

```
Build a service detail page for "[SERVICE NAME]" matching my existing website theme [DESCRIBE THEME].

Sections:

1. HERO: Full-width hero. Title: "[SERVICE NAME] Services". Subtitle: "[SERVICE TAGLINE]". CTA: "Get Started" button. Background: gradient or abstract pattern matching my theme.

2. OVERVIEW CARDS: "What We Offer" heading. 3-4 feature cards in a grid. Each: icon + title + short description.
   For [SERVICE NAME], the features are: [LIST 3-4 FEATURES]

3. HOW IT WORKS: "Our Process" heading. Horizontal or vertical numbered steps:
   Step 1: Discovery & Planning
   Step 2: Design & Architecture
   Step 3: Development & Integration
   Step 4: Testing & QA
   Step 5: Deployment
   Step 6: Ongoing Support

4. TECH STACK: "Technologies We Use" — grid of tech name badges/pills.

5. CASE STUDY PREVIEW: "Related Work" — 2 mini case study cards with title + tag + short description + "Read More" link.

6. FAQ: 5 questions specific to [SERVICE NAME]. Accordion style.

7. CTA BANNER: "Ready to Build [SERVICE NAME]?" Gradient banner with button.

Match my theme exactly. Responsive. Smooth animations.
```

---

---

# PAGE 4: INDUSTRIES ( /industries )

## 📋 REFERENCE — Industries Page

### Industries Covered (5):
1. **Education & EdTech** — AI-powered learning platforms, personalized education, LMS
2. **Software & HiTech** — Custom enterprise software, SaaS, cloud solutions
3. **Finance** — Fraud detection, risk assessment, blockchain, RPA, RAG chatbots for banks
4. **Healthcare** — AI diagnostics, patient management, telemedicine, compliance
5. **Manufacturing** — Predictive maintenance, Industrial IoT, digital twins, supply chain AI

### Page Layout:
- Hero: "Industries We Transform" heading + intro
- Industry cards: Large cards, each with number, industry name, description, image, and "Learn More" link
- Each card has specific AI use cases listed for that industry
- Alternating image/text layout (image left, text right — then flip)

---

## 🤖 PROMPT — Industries Page

```
Build an "Industries" page matching my existing website theme [DESCRIBE THEME].

Sections:

1. HERO: Title "Industries We Transform". Subtitle: "We deliver AI-first solutions tailored to the unique challenges of every sector."

2. INDUSTRIES LIST: 5 industry sections stacked vertically. Each industry:
   - Large number (1, 2, 3...) in accent color
   - Industry name as H2
   - 3-4 sentence description of AI use cases
   - Placeholder illustration/image on opposite side
   - Alternating layout: odd = text left, image right | even = image left, text right
   
   Industries:
   - Banking & Finance: Fraud detection, RPA for loan processing, blockchain security, predictive risk analytics, RAG chatbots for branch employees
   - Manufacturing: Predictive maintenance, Industrial IoT, digital twin simulations, RPA automation, AI supply chain forecasting
   - Retail & E-commerce: Personalized recommendations, omnichannel integration, IoT inventory management, AI chatbots, mobile commerce
   - Real Estate: Automated property management, AI market insights, VR property tours, IoT smart building, cloud document management
   - Education & EdTech: AI personalized learning, LMS platforms, automated grading, student analytics, virtual classrooms

3. STATS STRIP: "50+ Technologies | 10+ Industries | 300+ Projects Done" — horizontal stats bar.

4. CTA: "Don't See Your Industry?" heading. "Let's Talk" button.

Responsive, animated, match my theme.
```

---

---

# PAGE 5: CASE STUDIES ( /case-studies )

## 📋 REFERENCE — Case Studies Page

### Layout:
- Page hero: "Transformative Innovations We've Crafted for Our Clients"
- Filter tabs by industry: Finance | Education | Real Estate | Retail | All
- Grid of case study cards (3 columns on desktop)
- Each card: Thumbnail image + Industry tag + Year (2024) + Title + Short description
- Click → goes to individual case study detail page

### Case Studies Listed:
1. **AI Interview Scheduling** (Finance/EdTech) — AI-powered interview scheduler
2. **AI Calling Solution for EdTech** — Boosted EdTech sales with AI calling
3. **AI RAG System for Consulting** — Built a RAG-based knowledge system for consulting firm
4. **Digital Donation Management for Jain Temple** — Donation tracking system
5. **Custom Real Estate CRM for PropGrow** — CRM built from scratch
6. **EdTech Platform for Geekster** — High-performance learning platform
7. **Virtual Try-On for Slight Insane** — AI virtual try-on feature for fashion

### Individual Case Study Page Layout:
1. Hero: Project title + Industry tag + Year
2. Challenge: What problem the client had
3. Solution: What Wavexcel built
4. Tech Stack used
5. Results/Impact (stats: X% improvement, etc.)
6. Screenshots/mockups
7. CTA: "Build Something Similar"

---

## 🤖 PROMPT — Case Studies Page

```
Build a "Case Studies" page matching my existing website theme [DESCRIBE THEME].

Sections:

1. HERO: Title "Our Work". Subtitle: "Real solutions, real results. Here's what we've built for our clients."

2. FILTER TABS: Pill-shaped filter buttons: All | Finance | EdTech | Real Estate | Retail | Manufacturing

3. CASE STUDY GRID: 3-column responsive grid (2 on tablet, 1 on mobile). Each card:
   - Thumbnail placeholder image (with gradient overlay)
   - Industry tag badge (color-coded per industry)
   - Year badge "2024"
   - Project title (bold)
   - 1-line description
   - "Read Case Study →" link
   
   Projects to include (use placeholder data if needed):
   1. AI Interview Scheduling System | Finance | 2024
   2. AI Calling Solution for EdTech Sales | Education | 2024
   3. AI RAG System for Consulting Firm | Finance | 2024
   4. Digital Donation Management System | Nonprofit | 2024
   5. Custom CRM for Real Estate Agency | Real Estate | 2024
   6. High-Performance EdTech Platform | Education | 2024
   7. Virtual Try-On Feature (AI + Fashion) | Retail | 2024

4. Filter functionality: clicking a tab filters the cards with smooth animation.

5. CTA: "Have a Project in Mind?" section at bottom with "Let's Talk" button.

Match my theme. Add hover effects on cards. Filtering with CSS/JS toggle.
```

---

## 🤖 PROMPT — Individual Case Study Detail Page

```
Build a "Case Study Detail" page for a project called "[PROJECT NAME]" matching my existing website theme [DESCRIBE THEME].

Sections:

1. HERO: Project title "[PROJECT NAME]". Tags: [Industry] | [Year]. Short tagline. Full-width with gradient background.

2. OVERVIEW: 3 quick-stat boxes in a row: "Challenge", "Solution", "Outcome" — each with a 1-sentence summary.

3. THE CHALLENGE: "The Problem" heading. 2-3 paragraphs describing the client's pain points.

4. OUR SOLUTION: "What We Built" heading. 2-3 paragraphs. Optionally a bulleted list of features delivered.

5. TECH STACK: "Technologies Used" — grid of tech name badges.

6. RESULTS: "The Impact" — 3-4 stat cards with numbers (e.g., "40% faster processing", "2x lead conversion").

7. VISUALS: Placeholder for screenshots/mockups — use grey boxes with "Screenshot" label.

8. CTA: "Want Similar Results?" banner with "Start Your Project" button.

Responsive. Clean. Match my theme.
```

---

---

# PAGE 6: AI CALLING AGENT ( /ai-calling-agent )

## 📋 REFERENCE — AI Calling Agent Page

This is a dedicated landing page for their flagship AI voice product.

### Sections:
1. **Hero**: "Convert Leads with Human-Like AI Conversations" + "Smart Call Automation with Voice AI" subheading. CTA: "Get Started"
2. **What It Does**: Automates inbound/outbound calls, human-like voice, multilingual (English, Hindi, Tamil, Telugu, + regional Indian languages + English/French for Canada, Arabic for Dubai)
3. **Key Features**:
   - 24/7 availability (no human needed)
   - Multilingual support
   - CRM integration
   - Lead qualification
   - Appointment booking
   - Scalable (handles thousands of calls simultaneously)
4. **Use Cases**: Sales calls, Customer support, Lead qualification, Appointment reminders, Survey collection
5. **How It Works**: 4-step process: Setup → Train → Deploy → Monitor
6. **Industries Served**: Real estate, EdTech, Healthcare, Finance, Retail
7. **Testimonials**: 3-4 testimonials from clients
8. **FAQ**: AI calling specific questions
9. **CTA**: "Book a Demo" section

---

## 🤖 PROMPT — AI Calling Agent Page

```
Build an AI Calling Agent product landing page matching my existing website theme [DESCRIBE THEME].

This page promotes an AI voice agent that makes and receives phone calls automatically.

Sections:

1. HERO: Large headline "Automate Your Calls with Human-Like AI Voice". Subline: "Our AI calling agents handle inbound and outbound calls 24/7 — qualifying leads, booking appointments, and supporting customers in multiple languages." Two CTAs: "Book a Demo" (primary) + "See How It Works" (secondary).

2. STATS BAR: "24/7 Availability | Multilingual Support | CRM Integration | 10x Cost Reduction"

3. HOW IT WORKS: "Simple Setup, Powerful Results". 4 steps in horizontal flow:
   Step 1: Configure — Set your AI agent's persona, script, and goals
   Step 2: Integrate — Connect to your CRM, calendar, phone system
   Step 3: Deploy — Go live in 24 hours
   Step 4: Monitor — Real-time dashboard with call analytics

4. KEY FEATURES: 6 feature cards in a grid:
   - Natural Language Understanding
   - Multilingual (10+ languages)
   - Inbound + Outbound
   - CRM Auto-sync
   - Smart Lead Scoring
   - Real-time Analytics

5. USE CASES: Tabbed section with 5 tabs:
   - Sales Calls — Qualify and convert leads automatically
   - Customer Support — Handle FAQs and route complex issues
   - Appointment Booking — Book calendar slots without human intervention
   - Lead Generation — Outbound campaigns at scale
   - Surveys — Collect customer feedback via voice

6. INDUSTRIES: Icon grid: Real Estate, EdTech, Healthcare, Finance, Retail, Banking

7. TESTIMONIALS: 3 testimonial cards (quote + company + logo placeholder)

8. FAQ: 5 questions about AI calling agents. Accordion.

9. CTA BANNER: "Ready to 10x Your Call Operations?" Gradient banner. "Book a Free Demo" button.

Make it feel like a SaaS product landing page. High energy. Match my theme. Responsive.
```

---

---

# PAGE 7: DESIGN ( /design )

## 📋 REFERENCE — Design Page

Dedicated page for UI/UX Design services.

### Sections:
1. **Hero**: "UI/UX Design Services" — design-focused hero with visual samples
2. **Services**: Wireframing, Prototyping, Design Systems, Mobile UI, Web UI, Brand Identity
3. **Process**: Discover → Research → Wireframe → Prototype → Test → Deliver
4. **Portfolio/Work Samples**: Grid of design mockup placeholders
5. **Tools**: Figma, Adobe XD, Framer, Sketch (logo grid)
6. **CTA**: "Start Your Design Project"

---

## 🤖 PROMPT — Design Page

```
Build a "Design Services" page matching my existing website theme [DESCRIBE THEME].

Sections:

1. HERO: Title "UI/UX Design that Users Love". Subtitle: "We craft intuitive, beautiful interfaces grounded in user research and business goals."

2. DESIGN SERVICES: 6 cards:
   - User Research & Discovery
   - Wireframing & User Flows
   - UI Design (Web & Mobile)
   - Interactive Prototyping
   - Design Systems & Style Guides
   - Brand Identity & Visual Design

3. OUR PROCESS: 6 horizontal steps with icons:
   Discover → Research → Wireframe → Design → Prototype → Deliver

4. PORTFOLIO GRID: "Our Work" section. 6 placeholder cards (grey boxes with labels like "SaaS Dashboard", "Mobile App", "E-commerce", etc.) in a masonry or uniform grid. Add hover overlay with project title.

5. TOOLS WE USE: Logo/badge grid: Figma, Adobe XD, Framer, Sketch, InVision, Principle

6. CTA: "Have a design project?" — "Get a Free Design Audit" button.

Design-focused aesthetic, clean whitespace or dark theme matching my page. Responsive.
```

---

---

# PAGE 8: ABOUT US ( /about-us )

## 📋 REFERENCE — About Us Page

### Content & Sections:
1. **Hero**: "About Wavexcel" — tagline about powering the future with AI
2. **Company Story**: Founded in 2020. 300+ projects delivered. Specializes in Generative AI, ML, Web, Desktop, Mobile solutions.
3. **Mission**: Empower businesses with cutting-edge AI and digital solutions that drive impactful growth, enhance ROI, and reduce costs.
4. **Team Section**: 4 leadership profiles:
   - Bittoo Aggarwal — VP, Ex-Amazon, ION Trading
   - Deepak Aggarwal — Partner, Ex-Facebook London
   - Harshit Singhal — Partner, Ex-JP Morgan
   - Vikas Ranjan — Coinbase, Ex-Zomato
5. **Stats**: 50+ Technologies | 10+ Industries | 60+ Team Members | 300+ Projects
6. **Values/Culture**: Quality, Collaboration, Innovation, Client Partnership
7. **CTA**: "Join Our Team" or "Work With Us"

---

## 🤖 PROMPT — About Us Page

```
Build an "About Us" page matching my existing website theme [DESCRIBE THEME].

Sections:

1. HERO: Title "About [YOUR COMPANY]". Tagline: "Building the future with AI and software since [YEAR]." Background: subtle gradient or pattern.

2. OUR STORY: Left: Large placeholder team/office image. Right: 2-3 paragraphs about founding, mission, and growth. Highlight: "Founded in [YEAR] | [X]+ projects delivered | [X]+ team members".

3. MISSION & VALUES: 3-4 value cards in a row. Each: icon + value title + 1-sentence description.
   - Innovation — We push the boundaries of what's possible with AI
   - Quality — Every project is delivered with precision and care
   - Partnership — We work alongside you, not just for you
   - Speed — Fast delivery without sacrificing quality

4. STATS COUNTER: 4 animated counters:
   - [X]+ Technologies
   - [X]+ Industries
   - [X]+ Team Members
   - [X]+ Projects Done

5. LEADERSHIP TEAM: "Meet the Leadership" heading. 4 cards:
   Each card: circular avatar placeholder + Name + Title + Previous companies (badges like "Ex-Amazon")
   
   Team:
   - [Your Name] — CEO/Founder — Ex-[Company]
   - [Name] — CTO — Ex-[Company]
   - [Name] — Head of Design — Ex-[Company]
   - [Name] — Head of AI — Ex-[Company]

6. CULTURE/WHY US: "Why Work With Us" — 3 highlight points with icons.

7. CTA: "Ready to Build Something Great?" — Two buttons: "Start a Project" + "Join Our Team"

Warm but professional tone. Match my theme. Responsive. Scroll animations.
```

---

---

# 📦 REUSABLE COMPONENTS (used across ALL pages)

## 🤖 PROMPT — Global Components

```
Build these reusable components matching my existing website theme [DESCRIBE THEME]. These will be used across every page.

1. NAVBAR COMPONENT:
   - Sticky at top, background blur on scroll
   - Logo (image or text) on far left
   - Nav links in center: Home, Services, Industries, Case Studies, About Us
   - "Let's Talk" pill button on right (accent color)
   - On mobile: hamburger icon → slide-in drawer menu
   - Active link highlighted

2. FOOTER COMPONENT:
   - Dark background section
   - Row 1: Logo + tagline paragraph on left | nav link columns on right
   - Row 2: Contact info: email, phone, address
   - Row 3: Bottom bar with copyright + social icons (LinkedIn, Twitter, Instagram)
   - Links: Home, Services, Case Studies, About Us, Privacy Policy

3. SERVICE CARD COMPONENT:
   - Rounded card with subtle border or glassmorphism
   - Top: icon in accent-colored circle
   - Service title (bold)
   - Short description (2 lines max)
   - "Learn more →" text link
   - Hover: lift effect + border glow

4. TESTIMONIAL CARD COMPONENT:
   - Quote icon at top
   - Quote text (italic, 2-3 lines)
   - Bottom: Company name + logo placeholder
   - Subtle background differentiation from page

5. STATS COUNTER COMPONENT:
   - 4 items in a row
   - Each: large bold number (animate count-up on scroll) + label below
   - Optional decorative line/wave between items

6. CTA BANNER COMPONENT:
   - Full-width section
   - Left: Heading + subtext
   - Right: Button(s)
   - Background: gradient using my theme accent colors

7. FAQ ACCORDION COMPONENT:
   - List of questions
   - Click to expand/collapse answer
   - Plus/minus icon that rotates
   - Smooth height animation

8. SECTION LABEL COMPONENT:
   - Small pill/badge above section headings
   - Example: "About Us" or "Case Study" in accent color
   - Used at top of every major section

Make all components work in [React/HTML] and apply my theme colors: [YOUR COLORS]. Export each as a separate component file.
```

---

---

# 🎨 THEME & DESIGN SYSTEM PROMPT

```
Based on my existing page, extract and document my design system, then apply it consistently across all new pages.

My existing page uses: [PASTE YOUR CODE OR DESCRIBE YOUR THEME]

Define these design tokens and apply them everywhere:

COLORS:
- Primary background: [e.g., #0A0A0F]
- Secondary background: [e.g., #13131A]
- Accent/Brand: [e.g., #6366F1 purple]
- Text primary: [e.g., #FFFFFF]
- Text secondary: [e.g., #94A3B8]
- Border color: [e.g., rgba(255,255,255,0.1)]
- Success: green
- Card background: [e.g., rgba(255,255,255,0.05)]

TYPOGRAPHY:
- Font family: [e.g., Inter, Geist, Space Grotesk]
- H1: [e.g., 72px, bold, tight tracking]
- H2: [e.g., 48px, semibold]
- H3: [e.g., 32px, medium]
- Body: [e.g., 16px, regular, 1.7 line-height]
- Small/caption: 14px

SPACING:
- Section vertical padding: 80-120px
- Container max-width: 1200px
- Card padding: 24px
- Grid gap: 24px

EFFECTS:
- Border radius: [e.g., 12px for cards, 999px for pills]
- Box shadows: [e.g., subtle glow in accent color]
- Glassmorphism: backdrop-filter: blur(10px)
- Hover transitions: 0.3s ease

ANIMATIONS:
- Scroll reveal: fade up + opacity
- Counters: count-up animation
- Cards: translateY(-4px) on hover
- Marquee: infinite horizontal scroll
- Tab switches: smooth opacity + height transition

Create a globals.css or tailwind config that captures all of these.
```

---

---

# 🗺️ FULL SITE BUILD ORDER (Recommended Sequence)

```
Build in this order for fastest results:

Phase 1 — Foundation:
  [ ] Design tokens / global CSS / theme variables
  [ ] Navbar component
  [ ] Footer component
  [ ] Reusable components (ServiceCard, TestimonialCard, StatsCounter, CTABanner, FAQAccordion)

Phase 2 — Main Pages:
  [ ] Homepage (/)
  [ ] Services Overview (/service)
  [ ] About Us (/about-us)

Phase 3 — Service Detail Pages:
  [ ] AI Agent Development
  [ ] Software Development
  [ ] Web Development
  [ ] App Development
  [ ] AI Calling Agent
  [ ] UI/UX Design

Phase 4 — Content Pages:
  [ ] Industries page
  [ ] Case Studies grid page
  [ ] 3-4 individual case study pages
  [ ] Design page

Phase 5 — Polish:
  [ ] Add scroll animations (Framer Motion or AOS)
  [ ] Make all pages mobile responsive
  [ ] Add meta tags and SEO for each page
  [ ] Add contact form with email integration
```

---

# 📝 TIPS FOR VIBE CODING

1. **Always start every prompt with**: "I have an existing website with [theme description]. Match it exactly."
2. **Share your existing page code** at the top of each new prompt so the AI has full context.
3. **Build one section at a time** if a full page fails — ask for just the Hero, then Services Grid, etc.
4. **For animations**: Ask for "Framer Motion" (React) or "AOS library" (HTML) for scroll animations.
5. **For icons**: Use `lucide-react` (React) or `heroicons` (free, open source).
6. **For fonts**: Import from Google Fonts in your HTML head or use `next/font`.
7. **If AI goes off-theme**: Paste your existing component and say "Match this component's style exactly."

---

*Last updated: Built from analysis of wavexcel.in — March 2026*
*Total pages covered: Homepage, Services (overview + 6 detail), Industries, Case Studies, AI Calling Agent, Design, About Us*
*Total sections documented: 50+ sections across all pages*