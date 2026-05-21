export default function Home() {
  return (
    <main style={{minHeight:'100vh', backgroundColor:'#0B1F3A', color:'#ffffff', fontFamily:'sans-serif'}}>

      {/* NAV */}
      <nav style={{position:'fixed', top:0, width:'100%', zIndex:100, backgroundColor:'#0B1F3A', borderBottom:'2px solid #C9A84C', padding:'0 60px', display:'flex', justifyContent:'space-between', alignItems:'center', height:'72px'}}>
        <span style={{fontFamily:'Georgia, serif', fontSize:'22px', fontWeight:'700', color:'#ffffff'}}>Blake <span style={{color:'#C9A84C'}}>Fisher</span></span>
        <a href="#contact" style={{fontSize:'11px', fontWeight:'700', letterSpacing:'0.2em', textTransform:'uppercase', backgroundColor:'#C9A84C', color:'#0B1F3A', padding:'10px 24px', textDecoration:'none'}}>Connect</a>
      </nav>

      {/* HERO */}
      <section style={{minHeight:'100vh', backgroundColor:'#0B1F3A', display:'grid', gridTemplateColumns:'1fr 1fr', alignItems:'center', padding:'100px 60px 60px', gap:'60px'}}>
        <div>
          <p style={{fontSize:'11px', fontWeight:'700', letterSpacing:'0.35em', textTransform:'uppercase', color:'#C9A84C', marginBottom:'16px'}}>Athlete · Entrepreneur · Investor</p>
          <p style={{fontSize:'11px', letterSpacing:'0.25em', textTransform:'uppercase', color:'rgba(255,255,255,0.35)', marginBottom:'32px'}}>Columbus, OH · Boulder, CO</p>
          <h1 style={{fontFamily:'Georgia, serif', fontSize:'72px', lineHeight:'1.0', fontWeight:'700', marginBottom:'28px'}}>
            Built on the<br/>
            <span style={{color:'#C9A84C'}}>Mountain.</span><br/>
            Rooted in<br/>
            the Work.
          </h1>
          <p style={{fontSize:'16px', color:'rgba(255,255,255,0.6)', lineHeight:'1.75', maxWidth:'420px', marginBottom:'40px'}}>
            Business student, Eagle Scout, entrepreneur, investor, and outdoor athlete.
          </p>
          <a href="#contact" style={{display:'inline-block', fontSize:'11px', fontWeight:'700', letterSpacing:'0.2em', textTransform:'uppercase', backgroundColor:'#C9A84C', color:'#0B1F3A', padding:'14px 32px', textDecoration:'none', marginRight:'16px'}}>Connect with Blake</a>
          <a href="#about" style={{display:'inline-block', fontSize:'11px', fontWeight:'700', letterSpacing:'0.2em', textTransform:'uppercase', border:'1px solid rgba(255,255,255,0.2)', color:'rgba(255,255,255,0.5)', padding:'14px 32px', textDecoration:'none'}}>Learn More</a>
        </div>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
          <div style={{position:'relative', maxWidth:'400px', width:'100%'}}>
            <div style={{position:'absolute', top:'-12px', right:'-12px', width:'80px', height:'80px', borderTop:'2px solid #C9A84C', borderRight:'2px solid #C9A84C'}}></div>
            <div style={{position:'absolute', bottom:'-12px', left:'-12px', width:'80px', height:'80px', borderBottom:'2px solid #C9A84C', borderLeft:'2px solid #C9A84C'}}></div>
            <img src="/images/blake-fisher.jpeg" alt="Blake Fisher" style={{width:'100%', display:'block', objectFit:'cover', aspectRatio:'3/4'}}/>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div style={{backgroundColor:'#C9A84C', display:'grid', gridTemplateColumns:'repeat(4, 1fr)'}}>
        {[
          {num:'2×', label:'State Soccer Champion'},
          {num:'3+', label:'Years Self-Employed'},
          {num:'Eagle', label:'Scout · BSA · 2024'},
          {num:"'28", label:'Leeds School of Business'},
        ].map((s) => (
          <div key={s.label} style={{padding:'32px 24px', textAlign:'center', borderRight:'1px solid rgba(11,31,58,0.2)'}}>
            <div style={{fontFamily:'Georgia, serif', fontSize:'42px', fontWeight:'700', color:'#0B1F3A', lineHeight:'1'}}>{s.num}</div>
            <div style={{fontSize:'10px', fontWeight:'700', letterSpacing:'0.2em', textTransform:'uppercase', color:'rgba(11,31,58,0.65)', marginTop:'6px'}}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* ABOUT */}
      <section id="about" style={{padding:'100px 60px', backgroundColor:'#0f2847', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'80px', alignItems:'start'}}>
        <div>
          <p style={{fontSize:'10px', fontWeight:'700', letterSpacing:'0.35em', textTransform:'uppercase', color:'#C9A84C', marginBottom:'20px'}}>About Blake</p>
          <h2 style={{fontFamily:'Georgia, serif', fontSize:'52px', lineHeight:'1.05', fontWeight:'700', marginBottom:'0'}}>The kind of person who <span style={{color:'#C9A84C'}}>owns it</span> from start to finish.</h2>
        </div>
        <div>
          {[
            'Blake Fisher grew up in Grandview Heights, Ohio with a simple philosophy: if you want something done, own it from start to finish. A two-time state soccer champion and track athlete, he launched a bicycle repair business at 14 — building a client base through word of mouth before most kids had a resume.',
            'His Eagle Scout project says everything about how he operates. Rather than taking the easy route, Blake spent four months planning and building an all-natural walking trail in Wyman Woods — doing everything from the design to the physical labor himself.',
            'Now a sophomore at CU Boulder\'s Leeds School of Business, Blake is pursuing a BBA while competing in downhill and enduro mountain bike racing, charging big mountain lines on skis, and serving as Social Chairman of the Mountain Bike Club.',
            'Beyond the mountains, Blake is building his foundation in real estate — learning the business from the inside through his family\'s multifamily portfolio. He\'s not waiting until after graduation to start.',
          ].map((p, i) => (
            <p key={i} style={{fontSize:'16px', color:'rgba(255,255,255,0.6)', lineHeight:'1.85', marginBottom:'20px'}}>{p}</p>
          ))}
        </div>
      </section>

      {/* WORK EXPERIENCE */}
      <section id="experience" style={{padding:'100px 60px', backgroundColor:'#0B1F3A'}}>
        <p style={{fontSize:'10px', fontWeight:'700', letterSpacing:'0.35em', textTransform:'uppercase', color:'#C9A84C', marginBottom:'16px'}}>Experience</p>
        <h2 style={{fontFamily:'Georgia, serif', fontSize:'52px', fontWeight:'700', marginBottom:'60px'}}>Work & Professional Experience</h2>

        {/* FEATURED — Peak 10 Group */}
        <div style={{border:'1px solid rgba(201,168,76,0.4)', backgroundColor:'rgba(201,168,76,0.03)', padding:'48px', marginBottom:'2px'}}>
          <div style={{marginBottom:'28px'}}>
            <span style={{display:'inline-block', fontSize:'9px', fontWeight:'700', letterSpacing:'0.25em', textTransform:'uppercase', color:'#0B1F3A', backgroundColor:'#C9A84C', padding:'5px 14px', marginBottom:'18px'}}>Current Position</span>
            <h3 style={{fontFamily:'Georgia, serif', fontSize:'26px', fontWeight:'700', color:'#ffffff', marginBottom:'6px'}}>Peak 10 Group</h3>
            <p style={{fontSize:'11px', color:'rgba(255,255,255,0.35)', letterSpacing:'0.12em', textTransform:'uppercase'}}>Operations & Business Development · Columbus, OH · Summer 2026</p>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'14px 48px'}}>
            {[
              'Embedded within a commercial real estate company and affiliated pest control operation — contributing to live business operations across both.',
              'Leading a CRM overhaul for the pest control business, restructuring how customers, jobs, and follow-ups are tracked to improve operational efficiency.',
              'Built and deployed OpenClawBot — a personal AI agent running on a DigitalOcean server with a Discord interface — to automate workflows and reduce manual overhead.',
              'Using Claude as a research and drafting tool to accelerate decision-making and improve output quality across business tasks.',
              'Expanding into CRE deal flow and property operations as the summer progresses — gaining direct exposure to commercial real estate from the inside.',
            ].map((b, i) => (
              <div key={i} style={{display:'flex', gap:'14px'}}>
                <span style={{color:'#C9A84C', flexShrink:0, marginTop:'3px', fontSize:'14px'}}>—</span>
                <p style={{fontSize:'14px', color:'rgba(255,255,255,0.55)', lineHeight:'1.75', margin:0}}>{b}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pacific Pools + Vail Resorts */}
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'2px', marginBottom:'2px'}}>
          {[
            {
              company: 'Pacific Pools & Spas',
              role: 'Pool Service Technician · Columbus, OH',
              period: 'Summer 2025',
              badge: 'Full-Time',
              bullets: [
                'Managed an independent daily route of ~10 residential and commercial pools across the Columbus, OH area.',
                'Conducted chemical testing and analysis using PoolBrain software; made on-site treatment decisions based on water chemistry and equipment condition.',
                'Operated company vehicles solo and maintained accurate service records across all stops.',
                'Full-time hours with minimal oversight — responsible for my own schedule and completing all work to standard.',
              ],
            },
            {
              company: 'Vail Resorts — Mad River Mountain',
              role: 'Junior Ski Racing Instructor · Ohio',
              period: 'Dec 2023 – Mar 2024',
              badge: 'Part-Time',
              bullets: [
                'Supported the Mad River junior alpine ski racing program as a part-time instructor.',
                'Managed course setup and teardown, and provided real-time safety monitoring during races.',
                'Worked closely with coaching staff and athletes on logistics and on-hill supervision.',
                'Certified ski instructor through Vail Resorts.',
              ],
            },
          ].map((job) => (
            <div key={job.company} style={{backgroundColor:'#0f2847', padding:'40px'}}>
              <span style={{display:'inline-block', fontSize:'9px', fontWeight:'700', letterSpacing:'0.2em', textTransform:'uppercase', color:'rgba(255,255,255,0.35)', border:'1px solid rgba(255,255,255,0.1)', padding:'4px 10px', marginBottom:'18px'}}>{job.badge}</span>
              <h3 style={{fontFamily:'Georgia, serif', fontSize:'22px', fontWeight:'700', color:'#ffffff', marginBottom:'6px'}}>{job.company}</h3>
              <p style={{fontSize:'11px', color:'rgba(255,255,255,0.3)', letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:'24px'}}>{job.role} · {job.period}</p>
              <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                {job.bullets.map((b, i) => (
                  <div key={i} style={{display:'flex', gap:'12px'}}>
                    <span style={{color:'#C9A84C', flexShrink:0, marginTop:'3px', fontSize:'13px'}}>—</span>
                    <p style={{fontSize:'13px', color:'rgba(255,255,255,0.5)', lineHeight:'1.7', margin:0}}>{b}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bike Mechanic + Granddad's Pizza */}
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'2px'}}>
          {[
            {
              company: 'Self-Employed Bicycle Mechanic',
              role: 'Founder & Operator · Grandview Heights, OH',
              period: 'Jul 2020 – Jun 2023',
              badge: 'Part-Time · Self-Employed',
              bullets: [
                'Founded and operated an independent at-home bicycle repair and maintenance service — first business, started at age 14.',
                'Generated customers through targeted Facebook marketing and managed all aspects of the business independently.',
                'Handled customer communication, service quoting, quality control, and delivery.',
              ],
            },
            {
              company: "Granddad's Pizza",
              role: 'Kitchen & Front-of-House · Columbus, OH',
              period: 'May 2022 – Sep 2022',
              badge: 'Part-Time',
              bullets: [
                'Worked high-volume weekend shifts across pizza prep, dishwashing, and kitchen cleaning.',
                'Handled phone orders and cash register operation in a fast-paced environment.',
                'Gained experience managing multiple simultaneous responsibilities under time pressure.',
              ],
            },
          ].map((job) => (
            <div key={job.company} style={{backgroundColor:'rgba(15,40,71,0.5)', padding:'40px', borderTop:'1px solid rgba(255,255,255,0.04)'}}>
              <span style={{display:'inline-block', fontSize:'9px', fontWeight:'700', letterSpacing:'0.2em', textTransform:'uppercase', color:'rgba(255,255,255,0.25)', border:'1px solid rgba(255,255,255,0.07)', padding:'4px 10px', marginBottom:'18px'}}>{job.badge}</span>
              <h3 style={{fontFamily:'Georgia, serif', fontSize:'20px', fontWeight:'700', color:'rgba(255,255,255,0.65)', marginBottom:'6px'}}>{job.company}</h3>
              <p style={{fontSize:'11px', color:'rgba(255,255,255,0.25)', letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:'20px'}}>{job.role} · {job.period}</p>
              <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                {job.bullets.map((b, i) => (
                  <div key={i} style={{display:'flex', gap:'12px'}}>
                    <span style={{color:'rgba(201,168,76,0.45)', flexShrink:0, marginTop:'3px', fontSize:'13px'}}>—</span>
                    <p style={{fontSize:'13px', color:'rgba(255,255,255,0.38)', lineHeight:'1.7', margin:0}}>{b}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section id="highlights" style={{padding:'100px 60px', backgroundColor:'#0B1F3A'}}>
        <p style={{fontSize:'10px', fontWeight:'700', letterSpacing:'0.35em', textTransform:'uppercase', color:'#C9A84C', marginBottom:'16px'}}>Highlights</p>
        <h2 style={{fontFamily:'Georgia, serif', fontSize:'52px', fontWeight:'700', marginBottom:'48px'}}>Experience & Achievements</h2>
        <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'1px', backgroundColor:'rgba(201,168,76,0.2)'}}>
          {[
            {icon:'🦅', title:'Eagle Scout', desc:'Built a permanent trail in Wyman Woods · Aug 2024'},
            {icon:'⛷️', title:'Skier & Instructor', desc:'Big mountain free skiing · Certified Vail Resorts instructor'},
            {icon:'🚵', title:'Competitive MTB', desc:'Downhill & Enduro · Social Chairman, CU Boulder MTB Club'},
            {icon:'⚽', title:'2× State Champion', desc:'Soccer · Grandview Heights High School'},
            {icon:'🚲', title:'Entrepreneur', desc:'Self-employed bicycle mechanic — 3 years before college'},
            {icon:'🏢', title:'Real Estate', desc:'Multifamily investments · family real estate portfolio'},
            {icon:'🎓', title:'Leeds School of Business', desc:'BBA · CU Boulder · Class of 2028 · Sigma Chi'},
            {icon:'🏔️', title:'Boulder, Colorado', desc:'Chose Colorado to live in the mountains and build something there'},
          ].map((h) => (
            <div key={h.title} style={{backgroundColor:'#0B1F3A', padding:'32px 24px'}}>
              <div style={{fontSize:'28px', marginBottom:'14px'}}>{h.icon}</div>
              <div style={{fontSize:'11px', fontWeight:'700', letterSpacing:'0.15em', textTransform:'uppercase', color:'#C9A84C', marginBottom:'10px'}}>{h.title}</div>
              <div style={{fontSize:'13px', color:'rgba(255,255,255,0.5)', lineHeight:'1.6'}}>{h.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" style={{padding:'100px 60px', backgroundColor:'#0f2847', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'80px', alignItems:'center'}}>
        <div>
          <p style={{fontSize:'10px', fontWeight:'700', letterSpacing:'0.35em', textTransform:'uppercase', color:'#C9A84C', marginBottom:'16px'}}>Let's Connect</p>
          <h2 style={{fontFamily:'Georgia, serif', fontSize:'52px', fontWeight:'700', lineHeight:'1.05'}}>Early in my career.<br/><span style={{color:'#C9A84C'}}>Not early</span> in my work ethic.</h2>
        </div>
        <div>
          <p style={{fontSize:'16px', color:'rgba(255,255,255,0.6)', lineHeight:'1.85', marginBottom:'36px'}}>Studying business with a focus on real estate, entrepreneurship, and investment. Actively involved in multifamily real estate through a family portfolio. Looking for internship opportunities, mentorship, and connections in real estate, outdoor industry, and business.</p>
          <a href="mailto:blakefisher2@gmail.com" style={{display:'inline-block', fontSize:'11px', fontWeight:'700', letterSpacing:'0.2em', textTransform:'uppercase', backgroundColor:'#C9A84C', color:'#0B1F3A', padding:'16px 36px', textDecoration:'none'}}>Get in Touch →</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{backgroundColor:'#060f1e', padding:'40px 60px', borderTop:'2px solid #C9A84C', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <span style={{fontFamily:'Georgia, serif', fontSize:'20px', fontWeight:'700'}}>Blake <span style={{color:'#C9A84C'}}>Fisher</span></span>
        <span style={{fontSize:'12px', color:'rgba(255,255,255,0.2)'}}>© 2026 Blake Fisher · Columbus, OH & Boulder, CO</span>
        <div style={{display:'flex', gap:'28px'}}>
          <a href="https://linkedin.com/in/blake-fisher-ski" style={{fontSize:'11px', color:'rgba(255,255,255,0.3)', textDecoration:'none', letterSpacing:'0.1em', textTransform:'uppercase'}}>LinkedIn</a>
          <a href="https://instagram.com/blakefisher06" style={{fontSize:'11px', color:'rgba(255,255,255,0.3)', textDecoration:'none', letterSpacing:'0.1em', textTransform:'uppercase'}}>Instagram</a>
        </div>
      </footer>

    </main>
  );
}
