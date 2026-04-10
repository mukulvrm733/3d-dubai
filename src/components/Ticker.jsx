import { TICKER_ITEMS } from '../data'

const items = [...TICKER_ITEMS, ...TICKER_ITEMS] // duplicate for seamless loop

export default function Ticker() {
  return (
    <div className="ticker">
      <div className="ticker-track">
        {items.map((item, i) => (
          <div key={i} className="ticker-item">
            {item.label}&nbsp;<span className="ti-val">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
