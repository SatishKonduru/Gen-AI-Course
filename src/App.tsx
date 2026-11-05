import { useState } from 'react'
import './App.css'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Course', href: '#about-course' },
  { label: 'Curriculum', href: '#curriculum' },
  { label: 'Projects', href: '#projects' },
  { label: 'Trainer', href: '#trainer' },
  { label: 'Contact', href: '#contact' },
]

const highlightBadges = [
  '16 Weeks Intensive Training',
  'Telugu + English',
  'Hands-on Projects',
  'Practical AI Development',
]

const featureCards = [
  {
    icon: 'bi bi-cpu',
    title: 'Generative AI Applications',
    description: 'Build intelligent applications using modern AI models.',
  },
  {
    icon: 'bi bi-diagram-3',
    title: 'Large Language Models',
    description: 'Understand LLMs, prompts, tokens, and model integration.',
  },
  {
    icon: 'bi bi-search-heart',
    title: 'Retrieval Augmented Generation (RAG)',
    description: 'Build AI applications that retrieve answers from custom knowledge bases.',
  },
  {
    icon: 'bi bi-robot',
    title: 'AI Agents',
    description: 'Develop intelligent agents capable of reasoning, using tools, and executing tasks.',
  },
  {
    icon: 'bi bi-gear-wide-connected',
    title: 'AI Automation',
    description: 'Automate real-world workflows using AI-powered systems.',
  },
  {
    icon: 'bi bi-window-stack',
    title: 'Full Stack AI Development',
    description: 'Connect frontend applications, APIs, databases, and AI services.',
  },
]

const curriculumModules = [
  {
    title: 'MODULE 01 – Python for AI Development',
    summary: 'Python fundamentals and AI-ready development workflow.',
    items: [
      'Python fundamentals and advanced concepts.',
      'Functions, OOP, modules, and packages.',
      'Working with JSON, CSV, and files.',
      'Data processing using Pandas.',
      'Practical Python exercises.',
    ],
  },
  {
    title: 'MODULE 02 – API Development & Integration',
    summary: 'Build connected systems through REST APIs and external integrations.',
    items: [
      'REST API fundamentals.',
      'HTTP methods and status codes.',
      'API authentication and authorization.',
      'Working with external APIs.',
      'JSON processing.',
      'API integration projects.',
    ],
  },
  {
    title: 'MODULE 03 – FastAPI & Backend Development',
    summary: 'Create robust backend services and APIs for AI products.',
    items: [
      'FastAPI installation and configuration.',
      'Routes, path parameters, and query parameters.',
      'Pydantic models and validation.',
      'CRUD REST API development.',
      'MySQL and PostgreSQL integration.',
      'Backend development for AI applications.',
    ],
  },
  {
    title: 'MODULE 04 – Generative AI & LLMs',
    summary: 'Understand LLM capabilities and build AI-powered experiences.',
    items: [
      'Introduction to Generative AI.',
      'Understanding LLM architecture and capabilities.',
      'Prompt engineering.',
      'Model APIs and integration.',
      'Structured AI outputs.',
      'Building LLM-powered applications.',
    ],
  },
  {
    title: 'MODULE 05 – Embeddings & Vector Databases',
    summary: 'Work with semantic search, embeddings, and vector systems.',
    items: [
      'Understanding embeddings.',
      'Semantic similarity search.',
      'Vector database fundamentals.',
      'ChromaDB with Python.',
      'Metadata filtering.',
      'Chunking strategies.',
      'Hybrid search.',
    ],
  },
  {
    title: 'MODULE 06 – Retrieval Augmented Generation (RAG)',
    summary: 'Design knowledge-grounded AI systems using retrieval pipelines.',
    items: [
      'RAG architecture.',
      'Document ingestion.',
      'PDF, DOCX, CSV, JSON, and other data sources.',
      'Text splitting and chunking.',
      'Embedding generation.',
      'Vector retrieval.',
      'Building complete RAG applications.',
    ],
  },
  {
    title: 'MODULE 07 – AI Agents & Tool Calling',
    summary: 'Create intelligent agents that reason, decide, and act.',
    items: [
      'Introduction to AI Agents.',
      'Agent architecture.',
      'Reasoning and decision-making.',
      'Function calling.',
      'Tool integration.',
      'Multi-step task execution.',
      'Agent workflows.',
    ],
  },
  {
    title: 'MODULE 08 – AI Automation & Real-World Projects',
    summary: 'Bring it all together with workflow automation and a capstone.',
    items: [
      'AI-powered automation.',
      'Workflow orchestration.',
      'Connecting APIs and databases.',
      'Building practical AI solutions.',
      'Deployment fundamentals.',
      'Final capstone project.',
    ],
  },
]

const projectCards = [
  'AI-Powered Document Chatbot',
  'Intelligent Knowledge Base',
  'AI Customer Support Assistant',
  'AI Research Assistant',
  'AI Automation Assistant',
  'Full Stack AI Application',
]

const projectDescriptions = [
  'Upload documents and ask intelligent questions using RAG.',
  'Build a semantic search application using ChromaDB.',
  'Create an AI assistant that answers customer queries using business knowledge.',
  'Develop an intelligent assistant that searches, processes, and summarizes information.',
  'Build an AI-powered workflow that automates repetitive tasks.',
  'Integrate Angular, Python FastAPI, databases, and LLM APIs.',
]

const reasonCards = [
  'Practical, hands-on coding approach.',
  'Telugu + English explanations.',
  'Real-world AI application development.',
  'Step-by-step guided learning.',
  'Modern AI development technologies.',
  'API and database integration.',
  'Project-oriented training.',
  'Focus on building, not just theory.',
]

const expertiseTags = [
  'Artificial Intelligence',
  'Generative AI',
  'AI Agents',
  'Angular',
  'JavaScript / TypeScript',
  'Python',
  'Node.js',
  'FastAPI',
  'REST APIs',
  'SQL & MongoDB',
]

const faqs = [
  {
    question: 'What is the Master in Gen AI and AI Agents Bootcamp?',
    answer:
      'It is a practical AI development and automation program focused on generative AI, LLMs, RAG, intelligent agents, and real-world AI application building.',
  },
  {
    question: 'How long is the course?',
    answer: 'The program is designed as a 16-week intensive learning journey.',
  },
  {
    question: 'What is the course language?',
    answer: 'The training is delivered in Telugu + English.',
  },
  {
    question: 'Do I need prior AI knowledge?',
    answer: 'The course is structured for learners who want to build practical AI skills, with a focus on guided learning and hands-on development.',
  },
  {
    question: 'Will I learn practical AI application development?',
    answer: 'Yes. The program emphasizes practical coding, real-world examples, and application-focused learning.',
  },
  {
    question: 'Will I build real-world projects?',
    answer: 'Yes. The learning path includes project-based development using AI tools, APIs, databases, and workflows.',
  },
  {
    question: 'What is the course fee?',
    answer: 'The fee is ₹4,999/- per month*. Contact us for the complete fee structure and enrollment information.',
  },
  {
    question: 'How can I enroll?',
    answer: 'You can enquire through WhatsApp or call the trainer directly to get course details and enrollment support.',
  },
]

const whatsappUrl =
  'https://wa.me/919182256249?text=Hello%2C%20I%20am%20interested%20in%20the%20Master%20in%20Gen%20AI%20and%20AI%20Agents%20Bootcamp.%20Please%20share%20the%20course%20details.'

function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="section-heading text-center">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  )
}

function App() {
  const [activeModule, setActiveModule] = useState(0)
  const [trainerPhotoLoaded, setTrainerPhotoLoaded] = useState(true)

  return (
    <div className="site-shell">
      <header className="topbar sticky-top">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="#home" aria-label="RSK TechMinds home">
              <span className="brand-mark">R</span>
              RSK TechMinds
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNav"
              aria-controls="mainNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="mainNav">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                {navItems.map((item) => (
                  <li className="nav-item" key={item.label}>
                    <a className="nav-link" href={item.href}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <a className="btn btn-primary rounded-pill navbar-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
                Enroll Now
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main id="home">
        <section className="hero-section">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-7 hero-copy">
                <div className="hero-badge">NEXT-GENERATION AI DEVELOPMENT PROGRAM</div>
                <h1>Master Generative AI &amp; Build Intelligent AI Agents</h1>
                <p className="hero-subheadline">
                  Go Beyond Using AI. Learn to Build AI-Powered Applications, RAG Systems,
                  Intelligent Agents &amp; Automation Solutions.
                </p>

                <div className="course-price">
                  <div className="course-price-main">
                    <span className="price-amount">₹4,999/-</span>
                    <span className="price-label">Per Month*</span>
                  </div>
                  <span className="course-price-note">
                    *Monthly fee. Contact us for complete fee structure and enrollment details.
                  </span>
                </div>

                <p className="hero-description">
                  Transform your development skills with a practical, hands-on AI bootcamp.
                  Learn modern AI technologies through real-world examples, guided coding sessions,
                  and industry-oriented projects.
                </p>

                <div className="hero-badges">
                  {highlightBadges.map((badge) => (
                    <span key={badge} className="badge-pill">
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="hero-actions">
                  <a className="btn btn-primary btn-lg rounded-pill" href="#curriculum">
                    Explore Curriculum
                  </a>
                  <a
                    className="btn btn-outline-light btn-lg rounded-pill"
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Enquire on WhatsApp
                  </a>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="hero-visual" aria-label="Futuristic AI representation">
                  <div className="orb orb-one"></div>
                  <div className="orb orb-two"></div>
                  <div className="orb orb-three"></div>

                  <div className="network-panel">
                    <div className="panel-glow"></div>
                    <div className="node node-1"></div>
                    <div className="node node-2"></div>
                    <div className="node node-3"></div>
                    <div className="node node-4"></div>
                    <div className="node node-5"></div>
                    <div className="node node-6"></div>
                    <div className="node node-7"></div>
                    <div className="node node-8"></div>
                    <div className="node node-9"></div>
                    <div className="network-line line-1"></div>
                    <div className="network-line line-2"></div>
                    <div className="network-line line-3"></div>
                    <div className="network-line line-4"></div>
                  </div>

                  <div className="float-card card-primary">
                    <span className="card-label">LLMs</span>
                    <strong>Model Intelligence</strong>
                  </div>
                  <div className="float-card card-secondary">
                    <span className="card-label">AI Agents</span>
                    <strong>Task Execution</strong>
                  </div>
                  <div className="float-card card-tertiary">
                    <span className="card-label">RAG</span>
                    <strong>Knowledge Retrieval</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section feature-section" id="about-course">
          <div className="container">
            <SectionTitle
              title="Everything You Need to Build with AI"
              subtitle="Learn the technologies powering the next generation of intelligent applications."
            />

            <div className="row g-4 mt-4">
              {featureCards.map((feature) => (
                <div className="col-md-6 col-xl-4" key={feature.title}>
                  <div className="feature-card h-100">
                    <div className="feature-icon">
                      <i className={feature.icon} aria-hidden="true"></i>
                    </div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section curriculum-section" id="curriculum">
          <div className="container">
            <SectionTitle
              title="Your 16-Week Learning Roadmap"
              subtitle="From Python fundamentals to building production-oriented AI applications."
            />

            <div className="curriculum-grid" role="tablist" aria-label="Course curriculum modules">
                {curriculumModules.map((module, index) => (
                  <button
                    key={module.title}
                    className={index === activeModule ? 'curriculum-module-card active' : 'curriculum-module-card'}
                    type="button"
                    role="tab"
                    aria-selected={index === activeModule}
                    aria-controls={`curriculum-panel-${index}`}
                    id={`curriculum-tab-${index}`}
                    onClick={() => setActiveModule(index)}
                  >
                    <span className="module-card-number">0{index + 1}</span>
                    <span className="module-card-title">{module.title}</span>
                    <span className="module-card-arrow" aria-hidden="true">
                      <i className="bi bi-arrow-up-right"></i>
                    </span>
                  </button>
                ))}
            </div>

            <div
              className="curriculum-panel active"
              id={`curriculum-panel-${activeModule}`}
              role="tabpanel"
              aria-labelledby={`curriculum-tab-${activeModule}`}
              key={activeModule}
            >
              <div className="panel-header">
                <span className="panel-badge">Module {activeModule + 1}</span>
                <h3>{curriculumModules[activeModule].title}</h3>
              </div>
              <p className="panel-summary">{curriculumModules[activeModule].summary}</p>
              <ul>
                {curriculumModules[activeModule].items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="container">
            <div className="project-header d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-3 mb-4">
              <SectionTitle
                title="Learn by Building Real-World AI Applications"
                subtitle=""
              />
              <span className="project-badge">PROJECT-BASED PRACTICAL LEARNING</span>
            </div>

            <div className="row g-4">
              {projectCards.map((project, index) => (
                <div className="col-md-6 col-xl-4" key={project}>
                  <div className="project-card h-100">
                    <div className="project-number">0{index + 1}</div>
                    <h3>{project}</h3>
                    <p>{projectDescriptions[index]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section reasons-section" id="why-choose">
          <div className="container">
            <SectionTitle
              title="Why Learn With This Bootcamp?"
              subtitle=""
            />

            <div className="row g-4 mt-2">
              {reasonCards.map((reason) => (
                <div className="col-sm-6 col-lg-3" key={reason}>
                  <div className="reason-card h-100">
                    <i className="bi bi-check2-circle" aria-hidden="true"></i>
                    <p>{reason}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section trainer-section" id="trainer">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-5">
                <div className="trainer-photo-wrap">
                  <div className="trainer-photo-frame">
                    {trainerPhotoLoaded ? (
                      <img
                        className="trainer-photo"
                        src="/images/trainer-photo.jpg"
                        alt="Satish Konduru, course trainer"
                        onError={() => setTrainerPhotoLoaded(false)}
                      />
                    ) : (
                      <div className="trainer-photo-empty">
                        <i className="bi bi-person-bounding-box" aria-hidden="true"></i>
                        <span>Add your photo</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="trainer-content">
                  <p className="eyebrow">MEET YOUR TRAINER</p>
                  <h2>Satish Konduru</h2>
                  <h3>International IT Trainer | Full Stack Developer | AI Developer</h3>
                  <p>
                    With 18+ years of hands-on software development experience and extensive IT
                    training expertise, I focus on transforming complex technologies into simple,
                    practical, and understandable learning experiences.
                  </p>
                  <p>
                    My training approach combines strong programming fundamentals, real-world
                    application development, and modern AI technologies.
                  </p>
                  <p>
                    My goal is to help learners move beyond simply using AI tools and develop the
                    skills required to build intelligent AI-powered applications.
                  </p>

                  <div className="expertise-tags">
                    {expertiseTags.map((tag) => (
                      <span key={tag} className="expertise-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section pricing-section" id="contact">
          <div className="container">
            <div className="pricing-card">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <p className="eyebrow">COURSE DETAILS &amp; PRICING</p>
                  <h2>Start Your AI Development Journey</h2>
                  <ul className="pricing-features">
                    <li>Course: Master in Gen AI and AI Agents Bootcamp</li>
                    <li>Duration: 16 Weeks</li>
                    <li>Language: Telugu + English</li>
                    <li>Fee: ₹4,999/- Per Month*</li>
                  </ul>

                  <div className="benefits-list">
                    <span>Structured learning roadmap</span>
                    <span>Practical coding sessions</span>
                    <span>Real-world AI examples</span>
                    <span>Hands-on project development</span>
                    <span>Guided technical learning</span>
                  </div>
                </div>

                <div className="col-lg-4 text-lg-end">
                  <div className="pricing-cta">
                    <div className="price-big">₹4,999/-</div>
                    <a className="btn btn-primary btn-lg rounded-pill" href={whatsappUrl} target="_blank" rel="noreferrer">
                      Enquire Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <p className="fee-note">*Contact us for complete fee structure and enrollment details.</p>
          </div>
        </section>

        <section className="section faq-section">
          <div className="container">
            <SectionTitle
              title="Frequently Asked Questions"
              subtitle=""
            />

            <div className="accordion faq-accordion" id="faqAccordion">
              {faqs.map((faq, index) => (
                <div className="accordion-item" key={faq.question}>
                  <h3 className="accordion-header" id={`faq-heading-${index}`}>
                    <button
                      className={index === 0 ? 'accordion-button' : 'accordion-button collapsed'}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#faq-collapse-${index}`}
                      aria-expanded={index === 0 ? 'true' : 'false'}
                      aria-controls={`faq-collapse-${index}`}
                    >
                      {faq.question}
                    </button>
                  </h3>
                  <div
                    id={`faq-collapse-${index}`}
                    className={index === 0 ? 'accordion-collapse collapse show' : 'accordion-collapse collapse'}
                    aria-labelledby={`faq-heading-${index}`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">{faq.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section cta-section">
          <div className="container">
            <div className="cta-banner">
              <p className="eyebrow">START YOUR AI JOURNEY</p>
              <h2>Your AI Development Journey Starts Here!</h2>
              <p>
                Learn the technologies. Build intelligent applications. Create the future with AI.
              </p>
              <div className="cta-meta">16 Weeks | Telugu + English | Practical AI Development</div>
              <div className="cta-price">Fee: ₹4,999/- Per Month*</div>
              <div className="cta-actions">
                <a className="btn btn-primary btn-lg rounded-pill" href={whatsappUrl} target="_blank" rel="noreferrer">
                  WhatsApp Now
                </a>
                <a className="btn btn-outline-light btn-lg rounded-pill" href="tel:+919182256249">
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-4">
              <div className="footer-brand">RSK TechMinds</div>
              <p>Empowering Developers Through Practical AI Education.</p>
            </div>
            <div className="col-lg-4 text-lg-center">
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#curriculum">Curriculum</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#trainer">About Trainer</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="col-lg-4 text-lg-end">
              <div className="footer-contact">
                <a href="tel:+919182256249">Phone / WhatsApp: +91 91822 56249</a>
                <a href="mailto:rsktechminds@gmail.com">Email: rsktechminds@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            © 2026 RSK TechMinds. All Rights Reserved.
          </div>
        </div>
      </footer>

      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        <i className="bi bi-whatsapp" aria-hidden="true"></i>
      </a>
    </div>
  )
}

export default App
