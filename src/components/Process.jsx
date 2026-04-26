const FAQS = [
  {
    num: '01',
    q: 'Can foreigners buy property in Dubai?',
    a: 'Yes, foreign buyers can purchase property in designated freehold areas in Dubai with full ownership rights. There are no restrictions on nationality, and the process is straightforward with the right guidance.',
  },
  {
    num: '02',
    q: 'What are the main costs involved when buying a property?',
    a: 'In addition to the property price, there are costs such as Dubai Land Department fees, registration charges, and other related expenses. We explain all costs clearly before you proceed so there are no surprises.',
  },
  {
    num: '03',
    q: 'Can I get a mortgage in Dubai?',
    a: 'Yes, both residents and non-residents can apply for a mortgage, subject to eligibility. We provide in-house mortgage support and can guide you through the available options to find what suits your situation.',
  },
  {
    num: '04',
    q: 'How long does the buying process take?',
    a: 'The timeline depends on the type of property and payment structure, but we ensure the process is handled smoothly and without unnecessary delays. We guide you through every step so you always know where things stand.',
  },
  {
    num: '05',
    q: 'What do I need to rent a property in Dubai?',
    a: 'Renting typically requires valid identification, visa details if applicable, and initial payments such as security deposit and rent. We guide you through the process to make it simple and clear from start to finish.',
  },
]

export default function FAQ() {
  return (
    <section id="faq">
      <div className="sh center sr">
        <div className="sh-eye">FAQ</div>
        <h2 className="sh-h">Common <em>Questions</em><br />Answered Clearly</h2>
        <p className="sh-p">Everything you need to know before taking the next step. If you have more questions, we're happy to help directly.</p>
      </div>

      <div className="faq-list">
        {FAQS.map((item, i) => (
          <div key={item.num} className="faq-item sr" data-delay={String((i % 3) + 1)}>
            <div className="faq-num">{item.num}</div>
            <div className="faq-q">{item.q}</div>
            <p className="faq-a">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
