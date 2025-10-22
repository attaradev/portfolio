"use client"

import { ArrowUpRight, BriefcaseBusiness, Calendar, Handshake, LineChart, Mail, Rocket, Sparkles, Users } from "lucide-react"

const careerHighlights = [
  {
    icon: Rocket,
    title: "Scale & Reliability",
    description:
      "Built event-driven and cloud-native platforms that process millions in transactions with 99.9% uptime.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Systems Architecture",
    description: "Architect resilient microservices, integrations, and automation that keep complex operations aligned.",
  },
  {
    icon: Users,
    title: "Leadership & Mentorship",
    description:
      "Coach engineers, lead cross-functional squads, and create learning communities that amplify impact.",
  },
]

const focusAreas = [
  "Backend Architecture",
  "Event-Driven Systems",
  "Realtime Processing",
  "DevOps Automation",
  "Technical Leadership",
  "Mentorship & Enablement",
]

const experiences = [
  {
    title: "Backend Engineer",
    company: "Purple Wave Auction (via DevOps Africa)",
    period: "Sep 2024 - Present",
    description:
      "Building tools for efficient equipment appraisal workflows with real-time media uploads and data syncing between systems. Architecting resilient backend systems and scalable microservices for auction operations.",
    impact: "Streamlined equipment appraisal workflows with real-time data synchronization and media processing",
    highlights: [
      "Introduced an event-driven media ingestion pipeline that keeps appraisal teams in sync without blocking the UI.",
      "Set up performance dashboards and service health probes that expose cycle-time metrics for operations leaders.",
    ],
    skills: ["Ruby on Rails", "NestJS", "PostgreSQL", "AWS", "Docker", "Real-time Sync", "Media Processing"],
  },
  {
    title: "Full Stack Software Engineer",
    company: "Wewire Africa",
    period: "Dec 2022 - Aug 2024",
    description:
      "Designed and built transaction processing systems, KYC workflows, and digital wallet features. Implemented real-time APIs and payment integrations serving thousands of users with TypeScript and NestJS.",
    impact: "Processed millions in transactions with 99.9% uptime",
    highlights: [
      "Launched PCI-conscious transaction microservices with automated reconciliation and alerting workflows.",
      "Co-led squad delivering KYC, virtual cards, and digital wallet experiences for thousands of customers.",
    ],
    skills: ["NestJS", "Next.js", "React", "PostgreSQL", "AWS"],
  },
  {
    title: "Software Engineer",
    company: "turntabl",
    period: "Sep 2022 - May 2023",
    description:
      "Completed intensive post-graduate software development training and developed specialized article generation tool using Java with GSuite and OpenAI API integration. Collaborated on trading system development using Spring Boot.",
    impact: "Automated content generation reducing manual work by 80%",
    highlights: [
      "Delivered OpenAI-powered article generation service with Java and GSuite automation for editorial teams.",
      "Pair-programmed on equities trading platform components using Spring Boot and AWS tooling.",
    ],
    skills: ["Java", "Spring Boot", "OpenAI", "GSuite", "Python", "Design Patterns"],
  },
  {
    title: "Software Engineer",
    company: "Vodafone",
    period: "Aug 2021 - Feb 2023",
    description:
      "Built and maintained microservices powering Vodafone's Digital Assistant (TOBi). Participated in full software development lifecycle from concept to deployment and ongoing support.",
    impact: "Maintained critical microservices ensuring high availability and performance of AI-powered customer assistant",
    highlights: [
      "Maintained conversational AI microservices with SLO-driven monitoring and on-call rotations.",
      "Shipped REST APIs that integrate CRM, analytics, and NLP services serving millions of Vodafone subscribers.",
    ],
    skills: ["Node.js", "TypeScript", "Microservices", "AWS", "REST APIs"],
  },
  {
    title: "Software Developer",
    company: "Self Employed (Freelance)",
    period: "Sep 2019 - Dec 2022",
    description:
      "Offered custom software solutions specializing in web development and cloud DevOps. Developed high-quality bespoke applications including Expensify, 3Blocks, and KnackApp.",
    impact: "Delivered 10+ projects with 100% client satisfaction",
    highlights: [
      "Consulted on greenfield builds from ideation to launch across fintech, logistics, and education clients.",
      "Containerized deployments on AWS to deliver observable, maintainable platforms tailored to each business.",
    ],
    skills: ["React", "Node.js", "AWS", "GraphQL", "TypeScript"],
  },
  {
    title: "Technical Team Lead",
    company: "BloomTech",
    period: "Mar 2020 - Aug 2020",
    description:
      "Mentored 11 students on effective learning and problem-solving. Reviewed code, organized 15+ after-hour sessions, facilitated daily standups, and enhanced student engagement.",
    impact: "Improved student retention by 40% and code quality standards",
    highlights: [
      "Designed curricula and after-hour sessions that boosted learner engagement and shipped production-ready labs.",
      "Facilitated code reviews, agile rituals, and mentorship that elevated 11 engineers-in-training.",
    ],
    skills: ["Team Leadership", "Mentoring", "Code Review", "Agile", "Public Speaking"],
  },
  {
    title: "Frontend Developer",
    company: "Complete Farmer",
    period: "May 2019 - Aug 2019",
    description:
      "Collaborated with agile team to design and develop reusable components. Significantly improved UI performance and accessibility while ensuring technical feasibility of designs.",
    impact: "Improved page load time by 45% and accessibility score to 95+",
    highlights: [
      "Refactored React architecture into reusable design system components with better performance budgets.",
      "Partnered with designers to ship accessibility improvements that hit AA targets across the platform.",
    ],
    skills: ["React", "Redux", "JavaScript", "Agile", "UI/UX"],
  },
  {
    title: "Subject Teacher - Science, Mathematics, ICT",
    company: "Ghana Education Service",
    period: "Sep 2016 - May 2019",
    description:
      "Developed and delivered teaching instructions in multiple subjects. Assessed student performance and mentored students on course selection for further studies.",
    impact: "Mentored 200+ students with 85% pass rate",
    highlights: [
      "Built interdisciplinary lesson plans that blended science, mathematics, and ICT for diverse classrooms.",
      "Guided students on academic pathways and career planning resulting in 85% exam pass rates.",
    ],
    skills: ["Teaching", "Facilitation", "Public Speaking", "Leadership"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-6 sm:py-8 lg:py-10 fade-in scroll-mt-24 lg:scroll-mt-32">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="mb-8 sm:mb-12">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">Experience</h3>
          <div className="w-12 h-1 bg-accent rounded-full"></div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mt-6 leading-relaxed">
            I help teams ship resilient platforms—from high-volume fintech rails to AI-powered support systems—while
            mentoring engineers and aligning delivery with business outcomes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 mb-8 sm:mb-10">
          {careerHighlights.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="group border border-border/50 rounded-xl p-6 hover:border-accent/50 hover:bg-card/50 transition-all duration-300 smooth-transition hover-lift"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 text-accent group-hover:bg-accent/20 transition-colors">
                  <Icon size={20} />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-foreground group-hover:text-accent transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>

        <div className="flex flex-wrap gap-2 mb-10 sm:mb-12">
          {focusAreas.map((area) => (
            <span
              key={area}
              className="px-3 py-1 text-[11px] sm:text-xs font-semibold uppercase tracking-widest rounded-full border border-accent/20 bg-accent/5 text-accent"
            >
              {area}
            </span>
          ))}
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-5 top-0 bottom-0 border-l border-border/60" aria-hidden="true"></div>
          <div className="space-y-7 sm:space-y-9">
            {experiences.map((exp, idx) => {
              const isCurrentRole = exp.period.toLowerCase().includes("present")
              return (
                <article key={`${exp.title}-${idx}`} className="relative md:pl-16">
                  <div className="hidden md:flex absolute left-0 top-1 w-10 h-10 items-center justify-center rounded-full border border-border/70 bg-background text-accent">
                    <BriefcaseBusiness size={18} />
                  </div>

                  <div className="group border border-border/50 rounded-xl p-6 hover:border-accent/50 hover:bg-card/50 transition-all duration-300 smooth-transition hover-lift">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <h4 className="text-xl font-semibold group-hover:text-accent transition-colors">{exp.title}</h4>
                        <p className="text-accent font-medium text-sm mt-1">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground whitespace-nowrap">
                        <Calendar size={16} className="hidden sm:block" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {isCurrentRole && (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-accent bg-accent/10 border border-accent/30 rounded-full px-3 py-1 mb-3">
                        <Sparkles size={12} />
                        Current Role
                      </span>
                    )}

                    <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>

                    <div className="flex items-start md:items-center gap-3 text-sm font-medium text-accent mb-4">
                      <LineChart size={16} />
                      <span>{exp.impact}</span>
                    </div>

                    {exp.highlights?.length > 0 && (
                      <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                        {exp.highlights.map((highlight) => (
                          <li key={highlight} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium border border-accent/20 hover:border-accent/50 transition-colors smooth-transition"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        <div className="mt-8 sm:mt-10 border border-accent/30 rounded-2xl bg-gradient-to-br from-accent/10 via-background to-background p-6 md:p-8 space-y-6 smooth-transition">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-accent/15 text-accent flex items-center justify-center flex-shrink-0">
              <Handshake size={18} />
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold text-muted-foreground tracking-widest mb-1 uppercase">Next chapter</p>
              <h4 className="text-xl md:text-2xl font-semibold text-foreground">
                Let's design your next resilient platform launch
              </h4>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                I partner with product, platform, and leadership teams to architect systems, unblock delivery, and mentor
                the engineers who will keep them running.
              </p>
            </div>
          </div>

          <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
            {[
              "Architecture sprints for complex integrations and event-driven flows",
              "DevOps enablement that introduces automation without disrupting delivery",
              "Technical leadership support to scale teams and align stakeholders",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-accent text-accent-foreground font-semibold hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 group"
            >
              Start a project conversation
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="mailto:hello@attara.dev?subject=Project%20Partnership%20Inquiry"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-accent/40 text-accent font-semibold hover:border-accent/60 hover:bg-accent/10 transition-colors"
            >
              <Mail size={18} />
              Share a brief
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
