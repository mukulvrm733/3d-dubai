const REASONS = [
  {
    num: '01',
    title: 'Clear and Honest Guidance',
    desc: "We believe better decisions come from better understanding. That's why we take the time to walk you through your options clearly, including both the advantages and the risks, so you always know exactly what you're choosing.",
  },
  {
    num: '02',
    title: 'Carefully Selected Properties',
    desc: 'Instead of overwhelming you with endless listings, we focus on a refined set of properties that truly align with your needs, whether you\'re buying or renting.',
  },
  {
    num: '03',
    title: 'Simple and Structured Process',
    desc: 'Property decisions can feel complex. We simplify the journey by guiding you step by step, from shortlisting to final paperwork, so everything stays clear and manageable.',
  },
  {
    num: '04',
    title: 'Support That Continues',
    desc: "Our role doesn't end when the deal is done. We stay available to support you even after, so you always have someone to rely on when it matters.",
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why">
      <div className="sh center sr">
        <div className="sh-eye">Why Choose Us</div>
        <h2 className="sh-h">A Clear Approach to<br /><em>Dubai Real Estate</em></h2>
        <p className="sh-p">We don't just show properties — we guide you through every decision with honesty and clarity.</p>
      </div>

      <div className="why-grid">
        {REASONS.map((r, i) => (
          <div key={r.num} className="why-card sr" data-delay={String((i % 2) + 1)}>
            <div className="why-num">{r.num}</div>
            <div className="why-title">{r.title}</div>
            <p className="why-desc">{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
