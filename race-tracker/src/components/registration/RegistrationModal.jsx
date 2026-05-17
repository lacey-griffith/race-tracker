import { useState } from 'react'
import { X } from 'lucide-react'
import styles from './RegistrationModal.module.css'

const STEPS = ['Event', 'Info', 'Waiver', 'Payment']

export default function RegistrationModal({ race, onClose }) {
  const [step, setStep] = useState(0)
  const [selectedDist, setSelectedDist] = useState(null)
  const [formData, setFormData] = useState({})
  const [waiverAccepted, setWaiverAccepted] = useState(false)
  const [complete, setComplete] = useState(false)
  const [bib] = useState(() => Math.floor(1000 + Math.random() * 8999))

  if (!race) return null

  const priceIdx = selectedDist ? race.distances.indexOf(selectedDist) : 0
  const basePrice = selectedDist ? race.prices[priceIdx] : race.prices[0]
  const fee = (basePrice * 0.03 + 1.5).toFixed(2)
  const total = (parseFloat(basePrice) + parseFloat(fee)).toFixed(2)

  const next = () => setStep(s => s + 1)
  const back = () => setStep(s => s - 1)

  const handleInfoNext = () => {
    setFormData(prev => ({
      ...prev,
      first: document.getElementById('f_first')?.value,
      last: document.getElementById('f_last')?.value,
      email: document.getElementById('f_email')?.value,
    }))
    next()
  }

  return (
    <div className={styles.overlay} onClick={e => e.target === e.currentTarget && onClose()}>
      <div className={styles.modal}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.title}>
            {complete ? 'You\'re In!' : `Register — ${race.name}`}
          </div>
          <button className={styles.close} onClick={onClose}><X size={20} /></button>
        </div>

        {/* Body */}
        <div className={styles.body}>
          {!complete ? (
            <>
              {/* Step indicators */}
              <div className={styles.steps}>
                {STEPS.map((s, i) => (
                  <div key={s} className={`${styles.step} ${i === step ? styles.stepActive : ''} ${i < step ? styles.stepDone : ''}`}>
                    <span className={styles.stepNum}>{i < step ? '✓' : `0${i + 1}`}</span> {s}
                  </div>
                ))}
              </div>

              {step === 0 && (
                <StepEvent race={race} selected={selectedDist} onSelect={setSelectedDist} onNext={next} />
              )}
              {step === 1 && (
                <StepInfo onNext={handleInfoNext} onBack={back} />
              )}
              {step === 2 && (
                <StepWaiver accepted={waiverAccepted} onAccept={setWaiverAccepted} onNext={next} onBack={back} />
              )}
              {step === 3 && (
                <StepPayment
                  basePrice={basePrice} fee={fee} total={total}
                  dist={selectedDist} race={race} formData={formData}
                  onBack={back} onComplete={() => setComplete(true)}
                />
              )}
            </>
          ) : (
            <SuccessScreen bib={bib} race={race} dist={selectedDist} email={formData.email} onClose={onClose} />
          )}
        </div>
      </div>
    </div>
  )
}

/* ─── STEP 1: Event Selection ────────────────────────────────────────────────── */
function StepEvent({ race, selected, onSelect, onNext }) {
  return (
    <div>
      <div className={styles.raceInfo}>
        <span className={styles.raceEmoji}>{race.emoji}</span>
        <div>
          <div className={styles.raceName}>{race.name}</div>
          <div className={styles.raceSub}>{race.date} · {race.location}</div>
        </div>
      </div>

      <div className={styles.fieldLabel}>Select Your Event</div>
      <div className={styles.eventGrid}>
        {race.distances.map((d, i) => (
          <div key={d} className={`${styles.eventOption} ${selected === d ? styles.eventSelected : ''}`} onClick={() => onSelect(d)}>
            <div className={styles.eventDist}>{d}</div>
            <div className={styles.eventPrice}>${race.prices[i]}.00</div>
          </div>
        ))}
      </div>

      <div className={styles.actions}>
        <button className="btn btn-primary btn-lg" onClick={onNext} disabled={!selected}>
          Continue →
        </button>
      </div>
    </div>
  )
}

/* ─── STEP 2: Participant Info ───────────────────────────────────────────────── */
function StepInfo({ onNext, onBack }) {
  return (
    <div>
      <div className={styles.formGrid}>
        <div className="form-group">
          <label className="form-label">First Name</label>
          <input id="f_first" className="form-input" type="text" placeholder="Jane" />
        </div>
        <div className="form-group">
          <label className="form-label">Last Name</label>
          <input id="f_last" className="form-input" type="text" placeholder="Doe" />
        </div>
      </div>
      <div className="form-group" style={{ marginBottom: '1rem' }}>
        <label className="form-label">Email Address</label>
        <input id="f_email" className="form-input" type="email" placeholder="jane@example.com" />
      </div>
      <div className={styles.formGrid}>
        <div className="form-group">
          <label className="form-label">Phone</label>
          <input className="form-input" type="tel" placeholder="(512) 555-0100" />
        </div>
        <div className="form-group">
          <label className="form-label">Date of Birth</label>
          <input className="form-input" type="date" />
        </div>
      </div>
      <div className={styles.formGrid}>
        <div className="form-group">
          <label className="form-label">Gender</label>
          <select className="form-select">
            <option value="">Select...</option>
            <option>Male</option><option>Female</option>
            <option>Non-binary</option><option>Prefer not to say</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">T-Shirt Size</label>
          <select className="form-select">
            <option>XS</option><option>S</option><option selected>M</option>
            <option>L</option><option>XL</option><option>XXL</option>
          </select>
        </div>
      </div>
      <div className={styles.formGrid} style={{ marginBottom: '1.5rem' }}>
        <div className="form-group">
          <label className="form-label">Emergency Contact</label>
          <input className="form-input" type="text" placeholder="Contact name" />
        </div>
        <div className="form-group">
          <label className="form-label">Emergency Phone</label>
          <input className="form-input" type="tel" placeholder="(512) 555-0199" />
        </div>
      </div>
      <div className={styles.actions}>
        <button className="btn btn-ghost" onClick={onBack}>← Back</button>
        <button className="btn btn-primary btn-lg" onClick={onNext}>Continue →</button>
      </div>
    </div>
  )
}

/* ─── STEP 3: Waiver ────────────────────────────────────────────────────────── */
function StepWaiver({ accepted, onAccept, onNext, onBack }) {
  return (
    <div>
      <div className={styles.fieldLabel}>Participant Waiver &amp; Release</div>
      <div className={styles.waiverText}>
        I, the undersigned, intending to be legally bound, hereby certify that I am physically fit and have not been otherwise informed by a physician. I acknowledge that I am aware of all the risks inherent in this athletic event, including the potential for serious injury or death. I assume all such risks, both known and unknown. In consideration of my entry acceptance, I, for myself and my heirs, executors, administrators, legal representatives, assignees, and successors, hereby release, waive, discharge, covenant not to sue, and agree to hold harmless, indemnify, and defend Race Tracker, its officers, directors, employees, agents, volunteers, and sponsors from and against any liability, claims, demands, losses, expenses, costs, and actions arising out of or relating to my participation. I grant permission to use photographs and videos of this event for promotional purposes.
      </div>
      <label className={styles.checkRow}>
        <input type="checkbox" checked={accepted} onChange={e => onAccept(e.target.checked)} />
        I have read and agree to the waiver and release of liability
      </label>
      <div className={styles.actions}>
        <button className="btn btn-ghost" onClick={onBack}>← Back</button>
        <button className="btn btn-primary btn-lg" onClick={onNext} disabled={!accepted}>Continue →</button>
      </div>
    </div>
  )
}

/* ─── STEP 4: Payment ───────────────────────────────────────────────────────── */
function StepPayment({ basePrice, fee, total, dist, race, formData, onBack, onComplete }) {
  const formatCard = (e) => {
    let v = e.target.value.replace(/\D/g, '').substring(0, 16)
    e.target.value = v.replace(/(.{4})/g, '$1 ').trim()
  }

  return (
    <div>
      <div className={styles.summary}>
        <div className={styles.summaryTitle}>Order Summary</div>
        <div className={styles.summaryRow}>
          <span>{race.name} — {dist}</span>
          <span>${basePrice}.00</span>
        </div>
        <div className={`${styles.summaryRow} ${styles.summaryMuted}`}>
          <span>Processing fee</span>
          <span>${fee}</span>
        </div>
        <div className={`${styles.summaryRow} ${styles.summaryTotal}`}>
          <span>Total</span>
          <span style={{ color: 'var(--accent)' }}>${total}</span>
        </div>
      </div>

      <div className="form-group" style={{ marginBottom: '1rem' }}>
        <label className="form-label">Card Number</label>
        <input className="form-input" type="text" placeholder="4242 4242 4242 4242" maxLength={19} onInput={formatCard} />
      </div>
      <div className={styles.formGrid}>
        <div className="form-group">
          <label className="form-label">Expiry</label>
          <input className="form-input" type="text" placeholder="MM / YY" maxLength={7} />
        </div>
        <div className="form-group">
          <label className="form-label">CVV</label>
          <input className="form-input" type="text" placeholder="123" maxLength={4} />
        </div>
      </div>
      <div className="form-group" style={{ marginBottom: '1.5rem' }}>
        <label className="form-label">Name on Card</label>
        <input className="form-input" type="text" placeholder={`${formData.first || 'Jane'} ${formData.last || 'Doe'}`} />
      </div>

      <div className={styles.actions}>
        <button className="btn btn-ghost" onClick={onBack}>← Back</button>
        <button className="btn btn-primary btn-lg" onClick={onComplete}>
          Pay ${total} →
        </button>
      </div>
    </div>
  )
}

/* ─── SUCCESS ────────────────────────────────────────────────────────────────── */
function SuccessScreen({ bib, race, dist, email, onClose }) {
  return (
    <div className={styles.success}>
      <div className={styles.successIcon}>🎉</div>
      <h2 className={styles.successTitle}>You're Registered!</h2>
      <p className={styles.successSub}>
        Confirmation sent to <strong>{email || 'your email'}</strong>.<br />See you at the finish line!
      </p>
      <div className={styles.bibCard}>
        <div className={styles.bibLabel}>Your Bib Number</div>
        <div className={styles.bibNum}>{bib}</div>
        <div className={styles.bibSub}>{dist} · {race.name}</div>
      </div>
      <div className={styles.successActions}>
        <button className="btn btn-primary btn-lg" onClick={onClose}>Done</button>
        <button className="btn btn-ghost btn-lg">Share 🏃</button>
      </div>
    </div>
  )
}
