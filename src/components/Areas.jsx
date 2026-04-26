const SERVICES = [
  {
    icon: '🏗️',
    title: 'Off-Plan Properties',
    desc: 'Explore newly launched projects across Dubai with flexible payment plans. We help you understand the opportunity, timelines, and risks before you make a decision.',
    tags: ['Flexible payment plans', 'New launch opportunities', 'Guided decision support'],
  },
  {
    icon: '🏠',
    title: 'Ready / Secondary Properties',
    desc: 'For buyers looking for completed homes or immediate returns, we help you identify suitable ready properties and guide you through the process clearly.',
    tags: ['Ready-to-move options', 'Resale opportunities', 'Clear transaction process'],
  },
  {
    icon: '🔑',
    title: 'Rental Services',
    desc: 'Whether you\'re looking to rent or lease out a property, we assist in finding the right match and managing the process smoothly.',
    tags: ['Tenant support', 'Property listing assistance', 'Simple leasing process'],
  },
  {
    icon: '🏦',
    title: 'Mortgage Support',
    desc: 'We provide in-house mortgage support to help you understand your eligibility and explore suitable financing options. From initial guidance to final steps, we keep the process clear and straightforward.',
    tags: [],
  },
  {
    icon: '🛂',
    title: 'Golden Visa Support',
    desc: 'We assist eligible property buyers in understanding the Golden Visa process and requirements as part of their purchase journey, ensuring everything is handled in a clear and structured way.',
    tags: [],
  },
]

export default function Services() {
  return (
    <section id="services">
      <div className="sh center sr">
        <div className="sh-eye">Our Services</div>
        <h2 className="sh-h">Everything You Need,<br /><em>Clearly Handled</em></h2>
        <p className="sh-p">From off-plan to ready properties, rental to mortgage — we guide you through each service with transparency and care.</p>
      </div>

      <div className="services-grid">
        {SERVICES.map((s, i) => (
          <div key={s.title} className="svc-card sr" data-delay={String((i % 3) + 1)}>
            <div className="svc-icon">{s.icon}</div>
            <div className="svc-title">{s.title}</div>
            <p className="svc-desc">{s.desc}</p>
            {s.tags.length > 0 && (
              <div className="svc-tags">
                {s.tags.map(tag => (
                  <span key={tag} className="svc-tag">{tag}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
