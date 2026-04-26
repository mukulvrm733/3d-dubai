import { useState } from 'react'

const FAQS = [
  {
    q: 'Can foreigners buy property in Dubai?',
    a: 'Yes, foreign buyers can purchase property in designated freehold areas in Dubai with full ownership rights. We guide you through the eligible areas and the complete purchase process.',
  },
  {
    q: 'What are the main costs involved when buying a property?',
    a: 'In addition to the property price, there are costs such as Dubai Land Department fees, registration charges, and other related expenses. We explain all costs clearly before you proceed so there are no surprises.',
  },
  {
    q: 'Can I get a mortgage in Dubai?',
    a: 'Yes, both residents and non-residents can apply for a mortgage, subject to eligibility. We can guide you through the available options and connect you with suitable financing support.',
  },
  {
    q: 'How long does the buying process take?',
    a: 'The timeline depends on the type of property and payment structure. Ready properties can complete in a few weeks, while off-plan purchases follow developer timelines. We ensure the process is handled smoothly and without unnecessary delays.',
  },
  {
    q: 'What do I need to rent a property in Dubai?',
    a: 'Renting typically requires valid identification, visa details (if applicable), and initial payments such as a security deposit and rent. We guide you through the process to make it simple and straightforward.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq">
      <div className="sh center sr">
        <div className="sh-eye">FAQ</div>
        <h2 className="sh-h">Frequently Asked <em>Questions</em></h2>
        <p className="sh-p">Everything you need to know about buying, renting, and investing in Dubai real estate.</p>
      </div>
      <div className="faq-list">
        {FAQS.map((item, i) => (
          <div
            key={i}
            className="faq-item sr"
            data-delay={String((i % 5) + 1)}
            onClick={() => setOpen(open === i ? null : i)}
            style={{ cursor: 'pointer', userSelect: 'none' }}
          >
            <div className="faq-q" style={{ display: 'flex', alignItems: 'center', gap: '0', justifyContent: 'space-between' }}>
              <span className="faq-num">{String(i + 1).padStart(2, '0')}</span>
              <span style={{ flex: 1 }}>{item.q}</span>
              <span style={{
                color: 'var(--gold)',
                fontSize: '1.4rem',
                lineHeight: 1,
                transition: 'transform .3s',
                transform: open === i ? 'rotate(45deg)' : 'none',
                flexShrink: 0,
                marginLeft: '1rem',
              }}>+</span>
            </div>
            <div style={{
              maxHeight: open === i ? '200px' : '0',
              overflow: 'hidden',
              transition: 'max-height .35s ease',
            }}>
              <div className="faq-a" style={{ paddingTop: '.5rem' }}>{item.a}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
