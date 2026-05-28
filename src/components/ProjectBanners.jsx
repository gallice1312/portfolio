const CANDLES = [
  { o: 260, c: 230, wt: 220, wb: 275, up: true },
  { o: 230, c: 210, wt: 200, wb: 245, up: true },
  { o: 210, c: 240, wt: 200, wb: 255, up: false },
  { o: 240, c: 190, wt: 175, wb: 250, up: true },
  { o: 190, c: 200, wt: 180, wb: 215, up: false },
  { o: 200, c: 170, wt: 155, wb: 215, up: true },
  { o: 170, c: 160, wt: 145, wb: 185, up: true },
  { o: 160, c: 178, wt: 150, wb: 188, up: false },
  { o: 178, c: 140, wt: 125, wb: 190, up: true },
  { o: 140, c: 130, wt: 120, wb: 150, up: true },
  { o: 130, c: 150, wt: 118, wb: 160, up: false },
  { o: 150, c: 110, wt: 95, wb: 158, up: true },
  { o: 110, c: 100, wt: 88, wb: 118, up: true },
  { o: 100, c: 75, wt: 65, wb: 112, up: true },
]

function TradingArt({ uid }) {
  const startX = 70
  const stride = 34
  const width = 14
  return (
    <g>
      {[280, 220, 160, 100].map((y) => (
        <line
          key={y}
          x1="30"
          y1={y}
          x2="570"
          y2={y}
          stroke="rgba(255,255,255,0.06)"
          strokeDasharray="3 6"
        />
      ))}

      {CANDLES.map((c, i) => {
        const x = startX + i * stride
        const top = Math.min(c.o, c.c)
        const h = Math.abs(c.o - c.c)
        return (
          <g key={i}>
            <line
              x1={x + width / 2}
              y1={c.wt}
              x2={x + width / 2}
              y2={c.wb}
              stroke={c.up ? '#60a5fa' : '#475569'}
              strokeWidth="1.5"
            />
            {c.up ? (
              <rect x={x} y={top} width={width} height={h} fill="#3b82f6" rx="1" />
            ) : (
              <rect
                x={x}
                y={top}
                width={width}
                height={h}
                fill="none"
                stroke="#64748b"
                strokeWidth="1.5"
                rx="1"
              />
            )}
          </g>
        )
      })}

      <path
        d={`M ${startX + 7} 245 ${CANDLES.map(
          (c, i) => `L ${startX + i * stride + 7} ${c.c}`
        ).join(' ')}`}
        fill="none"
        stroke="#93c5fd"
        strokeWidth="1.5"
        strokeOpacity="0.55"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  )
}

function WinflowArt({ uid }) {
  const pts = [
    [40, 230], [110, 215], [180, 240], [250, 185],
    [320, 170], [390, 195], [460, 130], [530, 95], [570, 110],
  ]
  const linePath = pts
    .map((p, i) => (i === 0 ? `M ${p[0]} ${p[1]}` : `L ${p[0]} ${p[1]}`))
    .join(' ')
  const areaPath = `${linePath} L 570 290 L 40 290 Z`

  return (
    <g>
      {[290, 230, 170, 110].map((y) => (
        <line key={y} x1="30" y1={y} x2="570" y2={y} stroke="rgba(255,255,255,0.05)" />
      ))}

      <path d={areaPath} fill={`url(#area-${uid})`} />
      <path
        d={linePath}
        fill="none"
        stroke="#60a5fa"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {pts.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r="3" fill="#0d1117" stroke="#60a5fa" strokeWidth="2" />
      ))}

      <g transform="translate(380 35)">
        <rect width="170" height="70" rx="10" fill="#161b22" stroke="rgba(255,255,255,0.08)" />
        <text x="14" y="26" fontFamily="ui-monospace,monospace" fontSize="11" fill="#94a3b8">
          Net P&amp;L
        </text>
        <text x="14" y="56" fontFamily="ui-monospace,monospace" fontSize="22" fontWeight="700" fill="#3b82f6">
          +18.2%
        </text>
        <g transform="translate(125 38)">
          <path d="M0 8 L8 0 L16 8 Z" fill="#3b82f6" />
        </g>
      </g>
    </g>
  )
}

function BookwormArt({ uid }) {
  return (
    <g>
      <g transform="translate(170 70)">
        <path
          d="M0 30 Q 130 5 130 5 L 130 195 Q 130 220 0 200 Z"
          fill="#1c2128"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1.5"
        />
        <path
          d="M260 30 Q 130 5 130 5 L 130 195 Q 130 220 260 200 Z"
          fill="#161b22"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1.5"
        />
        <line x1="130" y1="5" x2="130" y2="210" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />

        {[40, 60, 80, 100, 120, 140, 160].map((y, i) => (
          <rect
            key={`l-${y}`}
            x="15"
            y={y}
            width={[90, 100, 80, 95, 70, 90, 60][i]}
            height="4"
            rx="2"
            fill="rgba(96,165,250,0.35)"
          />
        ))}
        {[40, 60, 80, 100, 120, 140, 160].map((y, i) => (
          <rect
            key={`r-${y}`}
            x="145"
            y={y}
            width={[100, 80, 95, 70, 100, 60, 85][i]}
            height="4"
            rx="2"
            fill="rgba(255,255,255,0.18)"
          />
        ))}
      </g>

      <g fontFamily="ui-monospace,monospace" fontSize="11" fill="#93c5fd">
        <rect x="40" y="50" width="86" height="26" rx="13" fill="rgba(59,130,246,0.12)" stroke="rgba(59,130,246,0.35)" />
        <text x="83" y="67" textAnchor="middle">TF-IDF</text>

        <rect x="470" y="80" width="70" height="26" rx="13" fill="rgba(59,130,246,0.12)" stroke="rgba(59,130,246,0.35)" />
        <text x="505" y="97" textAnchor="middle">NER</text>

        <rect x="60" y="240" width="100" height="26" rx="13" fill="rgba(59,130,246,0.12)" stroke="rgba(59,130,246,0.35)" />
        <text x="110" y="257" textAnchor="middle">topics</text>

        <rect x="450" y="240" width="110" height="26" rx="13" fill="rgba(59,130,246,0.12)" stroke="rgba(59,130,246,0.35)" />
        <text x="505" y="257" textAnchor="middle">similarity</text>
      </g>
    </g>
  )
}

function ElizaArt({ uid }) {
  return (
    <g>
      <g transform="translate(50 60)">
        <rect width="240" height="60" rx="14" fill="#1c2128" stroke="rgba(255,255,255,0.08)" />
        <rect x="16" y="18" width="160" height="6" rx="3" fill="rgba(255,255,255,0.35)" />
        <rect x="16" y="34" width="120" height="6" rx="3" fill="rgba(255,255,255,0.2)" />
      </g>

      <g transform="translate(290 140)">
        <rect width="260" height="70" rx="14" fill="#3b82f6" />
        <rect x="16" y="18" width="200" height="6" rx="3" fill="rgba(255,255,255,0.85)" />
        <rect x="16" y="34" width="170" height="6" rx="3" fill="rgba(255,255,255,0.7)" />
        <rect x="16" y="50" width="120" height="6" rx="3" fill="rgba(255,255,255,0.55)" />
      </g>

      <g transform="translate(50 230)">
        <rect width="110" height="48" rx="14" fill="#1c2128" stroke="rgba(255,255,255,0.08)" />
        <circle cx="30" cy="24" r="4" fill="#60a5fa" />
        <circle cx="55" cy="24" r="4" fill="#60a5fa" opacity="0.7" />
        <circle cx="80" cy="24" r="4" fill="#60a5fa" opacity="0.4" />
      </g>

      <g transform="translate(470 40)">
        <rect x="0" y="10" width="70" height="44" rx="4" fill="#161b22" stroke="rgba(96,165,250,0.5)" strokeWidth="1.5" />
        <path d="M0 22 L70 10 L70 22 Z" fill="rgba(59,130,246,0.25)" stroke="rgba(96,165,250,0.5)" strokeWidth="1.5" />
        <circle cx="20" cy="38" r="3" fill="#60a5fa" />
        <circle cx="35" cy="38" r="3" fill="#60a5fa" />
        <circle cx="50" cy="38" r="3" fill="#60a5fa" />
      </g>
    </g>
  )
}

function ETodoArt({ uid }) {
  const items = [
    { done: true, w: 200 },
    { done: true, w: 230 },
    { done: false, w: 180 },
    { done: false, w: 215 },
    { done: false, w: 160 },
  ]
  return (
    <g transform="translate(120 50)">
      <rect width="360" height="240" rx="14" fill="#161b22" stroke="rgba(255,255,255,0.08)" />
      <rect x="20" y="20" width="120" height="10" rx="5" fill="rgba(255,255,255,0.7)" />
      <rect x="20" y="38" width="80" height="6" rx="3" fill="rgba(255,255,255,0.25)" />

      {items.map((it, i) => {
        const y = 70 + i * 32
        return (
          <g key={i}>
            {it.done ? (
              <>
                <rect x="20" y={y} width="18" height="18" rx="4" fill="#3b82f6" />
                <path
                  d={`M ${24} ${y + 9} L ${28} ${y + 13} L ${34} ${y + 5}`}
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect x="48" y={y + 6} width={it.w} height="6" rx="3" fill="rgba(255,255,255,0.35)" />
              </>
            ) : (
              <>
                <rect
                  x="20"
                  y={y}
                  width="18"
                  height="18"
                  rx="4"
                  fill="none"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="1.5"
                />
                <rect x="48" y={y + 6} width={it.w} height="6" rx="3" fill="rgba(255,255,255,0.6)" />
              </>
            )}
          </g>
        )
      })}
    </g>
  )
}

function HackJuiceArt({ uid }) {
  return (
    <g>
      <g transform="translate(60 60)">
        <path
          d="M90 0 L180 30 L180 110 Q180 200 90 230 Q0 200 0 110 L0 30 Z"
          fill="rgba(59,130,246,0.08)"
          stroke="#3b82f6"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <rect x="65" y="95" width="50" height="46" rx="6" fill="none" stroke="#60a5fa" strokeWidth="2" />
        <path d="M75 95 V 80 Q 75 65 90 65 Q 105 65 105 80 V 95" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="90" cy="118" r="4" fill="#60a5fa" />
      </g>

      <g transform="translate(290 70)" fontFamily="ui-monospace,monospace" fontSize="11">
        <rect width="260" height="200" rx="10" fill="#0d1117" stroke="rgba(255,255,255,0.1)" />
        <g transform="translate(0 0)">
          <rect width="260" height="26" rx="10" fill="#161b22" />
          <circle cx="14" cy="13" r="4" fill="#ef4444" />
          <circle cx="30" cy="13" r="4" fill="#eab308" />
          <circle cx="46" cy="13" r="4" fill="#22c55e" />
        </g>
        <text x="18" y="55" fill="#60a5fa">$</text>
        <text x="30" y="55" fill="rgba(255,255,255,0.85)">./juice-shop</text>
        <text x="18" y="80" fill="#94a3b8">[*] auth-bypass</text>
        <text x="222" y="80" fill="#3b82f6" textAnchor="end">OK</text>
        <text x="18" y="105" fill="#94a3b8">[*] sql-injection</text>
        <text x="222" y="105" fill="#3b82f6" textAnchor="end">OK</text>
        <text x="18" y="130" fill="#94a3b8">[*] access-ctrl</text>
        <text x="222" y="130" fill="#3b82f6" textAnchor="end">OK</text>
        <text x="18" y="155" fill="#94a3b8">[*] null-byte</text>
        <text x="222" y="155" fill="#3b82f6" textAnchor="end">OK</text>
        <text x="18" y="180" fill="#60a5fa">$</text>
        <rect x="32" y="170" width="8" height="14" fill="#60a5fa">
          <animate attributeName="opacity" values="1;0;1" dur="1.2s" repeatCount="indefinite" />
        </rect>
      </g>
    </g>
  )
}

function PortfolioArt({ uid }) {
  return (
    <g transform="translate(90 50)">
      <rect width="420" height="240" rx="12" fill="#0d1117" stroke="rgba(255,255,255,0.1)" />
      <rect width="420" height="30" rx="12" fill="#161b22" />
      <rect y="20" width="420" height="10" fill="#161b22" />
      <circle cx="16" cy="15" r="4.5" fill="#ef4444" />
      <circle cx="34" cy="15" r="4.5" fill="#eab308" />
      <circle cx="52" cy="15" r="4.5" fill="#22c55e" />
      <rect x="130" y="7" width="160" height="16" rx="8" fill="#0d1117" stroke="rgba(255,255,255,0.06)" />

      <g fontFamily="ui-monospace,monospace" fontSize="11">
        <text x="20" y="60" fill="#475569">1</text>
        <text x="40" y="60" fill="#c084fc">import</text>
        <text x="85" y="60" fill="rgba(255,255,255,0.85)">React</text>
        <text x="125" y="60" fill="#c084fc">from</text>
        <text x="158" y="60" fill="#86efac">'react'</text>

        <text x="20" y="85" fill="#475569">2</text>

        <text x="20" y="110" fill="#475569">3</text>
        <text x="40" y="110" fill="#c084fc">export default function</text>
        <text x="195" y="110" fill="#fde68a">Portfolio</text>
        <text x="252" y="110" fill="rgba(255,255,255,0.7)">() {'{'}</text>

        <text x="20" y="135" fill="#475569">4</text>
        <text x="55" y="135" fill="#c084fc">return</text>
        <text x="100" y="135" fill="rgba(255,255,255,0.7)">(</text>

        <text x="20" y="160" fill="#475569">5</text>
        <text x="70" y="160" fill="#60a5fa">{'<Hero'}</text>
        <text x="110" y="160" fill="#fde68a">name</text>
        <text x="140" y="160" fill="rgba(255,255,255,0.7)">=</text>
        <text x="148" y="160" fill="#86efac">"Tom"</text>
        <text x="184" y="160" fill="#60a5fa">{' />'}</text>

        <text x="20" y="185" fill="#475569">6</text>
        <text x="55" y="185" fill="rgba(255,255,255,0.7)">)</text>

        <text x="20" y="210" fill="#475569">7</text>
        <text x="40" y="210" fill="rgba(255,255,255,0.7)">{'}'}</text>

        <rect x="106" y="200" width="7" height="13" fill="#60a5fa">
          <animate attributeName="opacity" values="1;0;1" dur="1.2s" repeatCount="indefinite" />
        </rect>
      </g>
    </g>
  )
}

const ART = {
  trading: TradingArt,
  winflow: WinflowArt,
  bookworm: BookwormArt,
  eliza: ElizaArt,
  etodo: ETodoArt,
  hackjuice: HackJuiceArt,
  portfolio: PortfolioArt,
}

export default function ProjectBanner({ variant }) {
  const Art = ART[variant] || ART.portfolio
  const uid = variant
  return (
    <svg
      viewBox="0 0 600 340"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`bg-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1c2128" />
          <stop offset="100%" stopColor="#0d1117" />
        </linearGradient>
        <radialGradient id={`glow-${uid}`} cx="80%" cy="20%" r="60%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`glow2-${uid}`} cx="10%" cy="100%" r="60%">
          <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
        </radialGradient>
        <pattern id={`dots-${uid}`} x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.04)" />
        </pattern>
        <linearGradient id={`area-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width="600" height="340" fill={`url(#bg-${uid})`} />
      <rect width="600" height="340" fill={`url(#dots-${uid})`} />
      <rect width="600" height="340" fill={`url(#glow-${uid})`} />
      <rect width="600" height="340" fill={`url(#glow2-${uid})`} />

      <Art uid={uid} />
    </svg>
  )
}
