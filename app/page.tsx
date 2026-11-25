import { ArrowDown, ArrowRight, ArrowUpRight, Camera, Compass, Lightbulb, Layers, BarChart3, Menu, Play, Sparkles } from "lucide-react";

const L = {
  linkedin: "https://www.linkedin.com/in/karan-mandavia/",
  github: "https://github.com/karanmandavia",
  wealth: "https://www.wealthup.me/",
  wealthCase: "https://drive.google.com/file/d/17WbmUGcR2_K0Ub0W2ySJczBJzulRzaHo/view?usp=sharing",
  bizora: "https://www.bizora.ai/",
  bizoraCase: "https://drive.google.com/file/d/1Mn81Gcc4Jc3Ur85bZ8iVtAonPo-dEo9p/view?usp=sharing",
  med: "https://medcoterie.com/",
};

const chapters = [
  ["01", "The beginning", "A curiosity for how things work"],
  ["02", "Discover", "Understand people before screens"],
  ["03", "Decide", "Make the hard product calls"],
  ["04", "Build", "Turn direction into something real"],
  ["05", "Measure", "Learn from what changes"],
];

export default function Home() {
  return <main>
    <nav className="nav">
      <a className="brand" href="#home"><span>K.</span><small>KARAN MANDAVIA</small></a>
      <div className="navlinks"><a href="#journey">The Journey</a><a href="#work">Work</a><a href="#approach">Playbook</a><a href="#about">About</a><a href="#contact">Contact</a></div>
      <a className="resume" href="/documents/Karan-Mandavia-Resume.pdf" target="_blank">Resume <ArrowDown size={14}/></a>
    </nav>

    <section className="hero" id="home">
      <div className="hero-shade"/>
      <div className="hero-copy">
        <div className="eyebrow"><span className="rec"/> THE MAKING OF A PRODUCT</div>
        <h1>A Product Manager<br/>who turns problems<br/>into <em>meaningful products.</em></h1>
        <p>4+ years building products across AI, SaaS, healthcare, and fintech — combining design, analytics, and business to create user-obsessed, impactful solutions.</p>
        <div className="hero-actions"><a className="button light" href="#journey">Explore my journey <ArrowRight size={17}/></a><a className="watch" href="#about"><span><Play size={14} fill="currentColor"/></span> Watch my story <small>(2 min)</small></a></div>
      </div>
      <div className="portrait-frame"><img src="/images/karan-journey.png" alt="A cinematic back-view portrait representing Karan's product journey"/><div className="photo-caption">A work in progress. Always.</div></div>
      <div className="scribble s-one">Designer<br/>(by training) ↙</div><div className="scribble s-two">Analyst<br/>(by curiosity) ↙</div><div className="scribble s-three">Product Manager<br/>(by impact)</div>
      <div className="hero-bottom"><span>SCROLL TO FOLLOW THE STORY</span><div className="scroll-line"/></div>
    </section>

    <section className="filmstrip" aria-label="Documentary chapters">
      {chapters.map(([n,t,d],i)=><a href={i===0?"#journey":i===1?"#approach":i===2?"#decisions":i===3?"#work":"#impact"} className="film-cell" key={n}><span>{n}</span><div><b>{t}</b><small>{d}</small></div><ArrowUpRight size={17}/></a>)}
    </section>

    <section className="journey paper-section" id="journey">
      <div className="section-intro"><span className="kicker">CHAPTER 01 · THE JOURNEY</span><h2>From designing experiences<br/>to shaping products.</h2><p>My path has moved across disciplines, but the question has stayed the same: how do we make something genuinely useful?</p></div>
      <div className="timeline">
        <div className="timeline-item"><span className="timeline-icon"><Layers/></span><small>2021 — 2023</small><b>UI/UX Designer</b><strong>Tata Consultancy Services</strong><p>Enterprise dashboards and banking experiences.</p></div>
        <div className="timeline-item"><span className="timeline-icon"><BarChart3/></span><small>2023 — 2024</small><b>MSc Business Analytics</b><strong>University of Birmingham</strong><p>Learning to connect product decisions with data.</p></div>
        <div className="timeline-item"><span className="timeline-icon"><Lightbulb/></span><small>2025</small><b>Founding Product Designer</b><strong>Bizora.ai</strong><p>Discovery, onboarding and AI research workflows.</p></div>
        <div className="timeline-item"><span className="timeline-icon"><Compass/></span><small>2025</small><b>Product</b><strong>Curolynk · MedCoterie</strong><p>Healthcare product discovery and MVP definition.</p></div>
        <div className="timeline-item"><span className="timeline-icon"><Sparkles/></span><small>2026 — PRESENT</small><b>Associate Product Manager</b><strong>WealthUp</strong><p>Goal creation, onboarding and investment journeys.</p></div>
      </div>
    </section>

    <section className="work-section" id="work">
      <div className="work-heading"><div><span className="kicker">CHAPTER 02 · SELECTED WORK</span><h2>Ideas become products.<br/><em>Products create impact.</em></h2></div><p>Three different domains. One consistent focus: understand the real problem, make a thoughtful decision, and help the team deliver.</p></div>
      <div className="project-grid">
        <article className="project wealth"><div className="project-top"><span>01 / FINTECH</span><span>PRODUCT STRATEGY</span></div><div className="project-art"><div className="orbit">W</div><div className="mock-phone"><span>YOUR GOALS</span><b>Build towards<br/>what matters.</b><i>◌</i><small>Goal-based investing</small></div></div><div className="project-copy"><h3>WealthUp</h3><p>Making the first investment feel less intimidating.</p><div className="metric"><strong>~65%</strong><span>reported increase in users completing their first goal and transaction</span></div><a href={L.wealthCase} target="_blank">Read the case study <ArrowUpRight size={16}/></a><a className="secondary-link" href={L.wealth} target="_blank">Visit product <ArrowUpRight size={14}/></a></div></article>
        <article className="project bizora"><div className="project-top"><span>02 / AI · SAAS</span><span>DISCOVERY & RETENTION</span></div><div className="project-art"><div className="research-window"><div className="window-dots">● ● ●</div><span>AI TAX RESEARCH</span><b>Find clarity<br/>in complex research.</b><div className="searchbar">Ask a tax question…</div><div className="research-lines"/></div></div><div className="project-copy"><h3>Bizora.ai</h3><p>Making AI research feel useful, not overwhelming.</p><div className="metric"><strong>~200%</strong><span>reported increase in daily active users</span></div><div className="metric secondary-metric"><strong>48%</strong><span>reported improvement in new-user retention</span></div><a href={L.bizoraCase} target="_blank">Read the case study <ArrowUpRight size={16}/></a><a className="secondary-link" href={L.bizora} target="_blank">Visit product <ArrowUpRight size={14}/></a></div></article>
        <article className="project med"><div className="project-top"><span>03 / HEALTHCARE</span><span>PRODUCT DISCOVERY</span></div><div className="project-art"><div className="clinical-card"><span>MEDICAL COLLABORATION</span><div className="clinical-avatars">✚　◉　✚</div><b>Better conversations.<br/>Better collaboration.</b><small>Connect · Discuss · Grow</small></div></div><div className="project-copy"><h3>MedCoterie</h3><p>Defining a healthcare collaboration experience for medical professionals.</p><div className="metric"><strong>Discovery → Launch</strong><span>Customer interviews, MVP scope, workflows and engineering collaboration</span></div><a href={L.med} target="_blank">Explore MedCoterie <ArrowUpRight size={16}/></a></div></article>
      </div>
      <p className="measurement-note">Impact figures are reported outcomes from the respective project materials. They are not presented as proof that one design or product change alone caused the full change.</p>
    </section>

    <section className="decision-section" id="decisions">
      <div className="decision-image"><img src="/images/karan-journey.png" alt="A moment of reflection overlooking the city"/><span>CHAPTER 03 · A PRODUCT DECISION</span></div>
      <div className="decision-copy"><span className="kicker">THE WEALTHUP STORY</span><h2>Change the question<br/>before changing the screen.</h2><p>Users completed KYC, then faced a difficult question: “What should I invest in?” The problem wasn't simply the interface. It was the confidence gap between being ready and knowing what to do next.</p><div className="decision-flow"><div><small>THE OLD QUESTION</small><b>What should I invest in?</b></div><ArrowRight/><div><small>THE BETTER QUESTION</small><b>What are you working towards?</b></div></div><p className="decision-foot">A goal-first default path, progressive disclosure, and a preserved route to the broader marketplace — guidance without a mandatory detour.</p><a href={L.wealthCase} target="_blank">Explore the full decision <ArrowUpRight size={16}/></a></div>
    </section>

    <section className="approach-section paper-section" id="approach">
      <span className="kicker">CHAPTER 04 · THE PLAYBOOK</span><h2>Curiosity gets you started.<br/><em>Good decisions move you forward.</em></h2>
      <div className="steps">{[["01","Discover","Understand people, behaviour and the problem behind the request."],["02","Define","Frame the opportunity and agree on what success means."],["03","Decide","Prioritise with user value, business impact and constraints in mind."],["04","Build","Translate direction into requirements and work with the team to ship."],["05","Measure","Look at outcomes, learn, and improve what happens next."]].map(([n,t,d])=><div className="step" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}</div>
    </section>

    <section className="about-section" id="about"><div className="about-photo"><img src="/images/karan-journey.png" alt="Documentary-style portrait representing Karan"/><span>NOT THE FINISHED FRAME</span></div><div className="about-copy"><span className="kicker">CHAPTER 05 · BEHIND THE WORK</span><h2>Designer by training.<br/>Analyst by curiosity.<br/><em>Builder by instinct.</em></h2><p>I enjoy working where user needs, business goals and technology meet. My design background helps me see the experience; my analytics education helps me ask what the evidence says; and working in startups has taught me to move from ambiguity to action.</p><div className="skill-tags"><span>Product strategy</span><span>User research</span><span>Product analytics</span><span>AI products</span><span>Prototyping</span><span>Execution</span></div></div></section>

    <section className="impact-section" id="impact"><span className="kicker">CHAPTER 06 · THE SIGNAL</span><h2>What changed matters<br/>more than what shipped.</h2><div className="impact-grid"><div><strong>~200%</strong><b>Bizora.ai · DAU</b><small>Reported increase in daily active users.</small></div><div><strong>~65%</strong><b>WealthUp · First goal + transaction</b><small>Reported increase in users completing their first goal and transaction.</small></div><div><strong>40%</strong><b>Bizora.ai · Onboarding</b><small>Increase in onboarding completion reported in CV.</small></div></div></section>

    <footer className="footer" id="contact"><div className="footer-top"><span className="kicker">CHAPTER 07 · WHAT'S NEXT</span><h2>There's always another<br/><em>good problem to solve.</em></h2><a className="button light" href="mailto:karan14mandavia@gmail.com">Let's build something <ArrowRight size={17}/></a></div><div className="footer-bottom"><div><b>K.</b><span>Product thinker · Designer · Builder</span></div><div className="contact-links"><a href={L.linkedin} target="_blank">LinkedIn <ArrowUpRight size={14}/></a><a href={L.github} target="_blank">GitHub <ArrowUpRight size={14}/></a><a href="https://amusing-flows-322201.framer.app" target="_blank">Design portfolio <ArrowUpRight size={14}/></a></div><div className="contact-links"><a href="mailto:karan14mandavia@gmail.com">karan14mandavia@gmail.com</a><a href="tel:+919518506292">+91 9518506292</a><span>Pune, India</span></div></div><div className="copyright">© 2026 KARAN MANDAVIA · MADE WITH CURIOSITY</div></footer>
  </main>;
}
