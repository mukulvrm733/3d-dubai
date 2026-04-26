const SERVICES = [
  {
    bg: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    title: 'Off-Plan Properties',
    desc: 'Explore newly launched projects across Dubai with flexible payment plans. We help you understand the opportunity, timelines, and risks before you make a decision.',
    tags: ['Flexible payment plans', 'New launch opportunities', 'Guided decision support'],
  },
  {
    bg: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    title: 'Ready / Secondary Properties',
    desc: 'For buyers looking for completed homes or immediate returns, we help you identify suitable ready properties and guide you through the process clearly.',
    tags: ['Ready-to-move options', 'Resale opportunities', 'Clear transaction process'],
  },
  {
    bg: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
    title: 'Rental Services',
    desc: "Whether you're looking to rent or lease out a property, we assist in finding the right match and managing the process smoothly.",
    tags: ['Tenant support', 'Property listing assistance', 'Simple leasing process'],
  },
  {
    bg: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&q=80',
    title: 'Mortgage Support',
    desc: 'We provide in-house mortgage support to help you understand your eligibility and explore suitable financing options. From initial guidance to final steps, we keep the process clear and straightforward.',
    tags: ['Eligibility assessment', 'Financing options', 'Step-by-step guidance'],
  },
  {
    bg: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    title: 'Golden Visa Support',
    desc: 'We assist eligible property buyers in understanding the Golden Visa process and requirements as part of their purchase journey, ensuring everything is handled in a clear and structured way.',
    tags: ['Eligibility guidance', 'Process management', 'Structured support'],
  },
]

export default function Service() {
  return (
    <section id="services">
      <div className="sh center sr">
        <div className="sh-eye">Our Services</div>
        <h2 className="sh-h">Everything You Need <em>Under One Roof</em></h2>
        <p className="sh-p">From finding the right property to handling the paperwork, we guide you through every step with clarity and confidence.</p>
      </div>
      <div className="services-grid">
        {SERVICES.map((svc, i) => (
          <div key={svc.title} className="svc-card sr" data-delay={String((i % 3) + 1)}>
            <div className="svc-img" style={{ backgroundImage: `url(${svc.bg})` }}>
              <div className="svc-img-overlay" />
            </div>
            <div className="svc-body">
              <div className="svc-title">{svc.title}</div>
              <div className="svc-desc">{svc.desc}</div>
              <div className="svc-tags">
                {svc.tags.map(tag => (
                  <span key={tag} className="svc-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
