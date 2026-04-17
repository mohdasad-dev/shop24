import { useState } from "react";

const STEPS_META = [
  { label: "Personal Info" },
  { label: "Business Info" },
  { label: "Preferences" },
];

const OUTLET_TYPES = ["Kiosk", "Standard Outlet", "Flagship Store"];
const INVEST_RANGES = ["₹5L – ₹12L", "₹12L – ₹25L", "₹25L – ₹50L", "₹50L+"];
const TIMELINES = ["Immediately (0–3 months)", "3–6 months", "6–12 months", "Just exploring"];

/* ── Field component ── */
function Field({ label, required, error, children }) {
  return (
    <div className="fq-field">
      <label className="fq-label">
        {label}{required && <span>*</span>}
      </label>
      {children}
      {error && <span className="fq-error-msg">{error}</span>}
    </div>
  );
}

/* ── Radio card group ── */
function RadioGroup({ options, value, onChange }) {
  return (
    <div className="fq-radio-group">
      {options.map(opt => (
        <div
          key={opt}
          className={`fq-radio-card${value === opt ? " selected" : ""}`}
          onClick={() => onChange(opt)}
        >
          <div className="fq-radio-dot" />
          {opt}
        </div>
      ))}
    </div>
  );
}

/* ── Custom Checkbox ── */
function Checkbox({ checked, onChange, children }) {
  return (
    <label className="fq-check-label">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <div className="fq-checkmark">{checked && "✓"}</div>
      {children}
    </label>
  );
}

/* ── Step 1: Personal Info ── */
function Step1({ data, onChange, errors }) {
  return (
    <div className="fq-field-group">
      <div className="fq-field-group cols-2">
        <Field label="First Name" required error={errors.firstName}>
          <input
            className={`fq-input${errors.firstName ? " error" : ""}`}
            placeholder="Rajesh"
            value={data.firstName}
            onChange={e => onChange("firstName", e.target.value)}
          />
        </Field>
        <Field label="Last Name" required error={errors.lastName}>
          <input
            className={`fq-input${errors.lastName ? " error" : ""}`}
            placeholder="Kumar"
            value={data.lastName}
            onChange={e => onChange("lastName", e.target.value)}
          />
        </Field>
      </div>
      <Field label="Mobile Number" required error={errors.phone}>
        <input
          className={`fq-input${errors.phone ? " error" : ""}`}
          placeholder="+91 98765 43210"
          value={data.phone}
          onChange={e => onChange("phone", e.target.value)}
        />
      </Field>
      <Field label="Email Address" required error={errors.email}>
        <input
          className={`fq-input${errors.email ? " error" : ""}`}
          type="email"
          placeholder="rajesh@example.com"
          value={data.email}
          onChange={e => onChange("email", e.target.value)}
        />
      </Field>
      <div className="fq-field-group cols-2">
        <Field label="City" required error={errors.city}>
          <input
            className={`fq-input${errors.city ? " error" : ""}`}
            placeholder="Hyderabad"
            value={data.city}
            onChange={e => onChange("city", e.target.value)}
          />
        </Field>
        <Field label="State" required error={errors.state}>
          <select
            className={`fq-select${errors.state ? " error" : ""}`}
            value={data.state}
            onChange={e => onChange("state", e.target.value)}
          >
            <option value="">Select state…</option>
            {["Telangana","Maharashtra","Delhi","Karnataka","Tamil Nadu","Uttar Pradesh","Rajasthan","Gujarat","West Bengal","Punjab"].map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </Field>
      </div>
    </div>
  );
}

/* ── Step 2: Business Info ── */
function Step2({ data, onChange, errors }) {
  return (
    <div className="fq-field-group">
      <Field label="Current Occupation" required error={errors.occupation}>
        <select
          className={`fq-select${errors.occupation ? " error" : ""}`}
          value={data.occupation}
          onChange={e => onChange("occupation", e.target.value)}
        >
          <option value="">Select…</option>
          {["Business Owner","Salaried Professional","Retired","Investor","Student/Fresher"].map(o => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </Field>
      <Field label="Prior Business Experience">
        <select
          className="fq-select"
          value={data.experience}
          onChange={e => onChange("experience", e.target.value)}
        >
          <option value="">Select…</option>
          {["None","1–2 years","3–5 years","5+ years"].map(x => (
            <option key={x} value={x}>{x}</option>
          ))}
        </select>
      </Field>
      <Field label="Do you have a location in mind?" error={errors.hasLocation}>
        <div className="fq-radio-group" style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
          {["Yes – confirmed", "Yes – shortlisted", "Not yet"].map(opt => (
            <div
              key={opt}
              className={`fq-radio-card${data.hasLocation === opt ? " selected" : ""}`}
              onClick={() => onChange("hasLocation", opt)}
            >
              <div className="fq-radio-dot" />
              {opt}
            </div>
          ))}
        </div>
      </Field>
      <Field label="Property Ownership">
        <RadioGroup
          options={["Own Property", "Rented", "Yet to Decide"]}
          value={data.property}
          onChange={v => onChange("property", v)}
        />
      </Field>
      <Field label="About Your Plan" error={errors.message}>
        <textarea
          className={`fq-textarea${errors.message ? " error" : ""}`}
          placeholder="Tell us briefly about your location, why you want to start, and any specific questions…"
          value={data.message}
          onChange={e => onChange("message", e.target.value)}
        />
      </Field>
    </div>
  );
}

/* ── Step 3: Preferences ── */
function Step3({ data, onChange }) {
  const toggle = (key, val) => {
    const arr = data[key] || [];
    onChange(key, arr.includes(val) ? arr.filter(x => x !== val) : [...arr, val]);
  };

  return (
    <div className="fq-field-group">
      <Field label="Preferred Outlet Type" required>
        <RadioGroup
          options={OUTLET_TYPES}
          value={data.outletType}
          onChange={v => onChange("outletType", v)}
        />
      </Field>
      <Field label="Total Investment Budget" required>
        <RadioGroup
          options={INVEST_RANGES}
          value={data.budget}
          onChange={v => onChange("budget", v)}
        />
      </Field>
      <Field label="Expected Launch Timeline">
        <RadioGroup
          options={TIMELINES}
          value={data.timeline}
          onChange={v => onChange("timeline", v)}
        />
      </Field>
      <Field label="Areas of Support Needed">
        <div className="fq-check-group">
          {["Site Selection","Interior Design","Staff Training","Marketing Launch","Tech Setup","Menu Planning"].map(item => (
            <Checkbox
              key={item}
              checked={(data.support || []).includes(item)}
              onChange={() => toggle("support", item)}
            >
              {item}
            </Checkbox>
          ))}
        </div>
      </Field>
      <Field label="How did you hear about us?">
        <select
          className="fq-select"
          value={data.source}
          onChange={e => onChange("source", e.target.value)}
        >
          <option value="">Select…</option>
          {["Website","Instagram / Facebook","Friend / Family","Google Search","Event / Expo","Other"].map(s => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </Field>
    </div>
  );
}

/* ── Success Screen ── */
function SuccessScreen({ refId, onReset }) {
  return (
    <div className="fq-success">
      <div className="fq-success-icon">🎉</div>
      <h3>Application Submitted!</h3>
      <p>
        Thank you for your interest in franchising with Shop24Hours.
        Our team will review your application and reach out within
        <strong> 2 business days</strong>.
      </p>
      <div className="fq-success-ref">
        Reference ID: <span>{refId}</span>
      </div>
      <button className="fq-btn-home" onClick={onReset}>
        Submit Another Enquiry
      </button>
    </div>
  );
}

/* ── MAIN FORM COMPONENT ── */
export default function FranchiseForm({ preselectedType }) {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [refId] = useState(() => "FRN-" + Math.random().toString(36).substr(2,7).toUpperCase());
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    // Step 1
    firstName: "", lastName: "", phone: "", email: "", city: "", state: "",
    // Step 2
    occupation: "", experience: "", hasLocation: "", property: "", message: "",
    // Step 3
    outletType: preselectedType || "", budget: "", timeline: "", support: [], source: "",
  });

  const update = (key, val) => {
    setFormData(prev => ({ ...prev, [key]: val }));
    if (errors[key]) setErrors(prev => ({ ...prev, [key]: "" }));
  };

  const validate = () => {
    const e = {};
    if (step === 0) {
      if (!formData.firstName.trim()) e.firstName = "Required";
      if (!formData.lastName.trim())  e.lastName  = "Required";
      if (!formData.phone.trim())     e.phone     = "Required";
      if (!formData.email.includes("@")) e.email  = "Valid email required";
      if (!formData.city.trim())      e.city      = "Required";
      if (!formData.state)            e.state     = "Please select a state";
    }
    if (step === 1) {
      if (!formData.occupation) e.occupation = "Please select";
      if (!formData.message.trim()) e.message = "Please write a few lines";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (!validate()) return;
    if (step < STEPS_META.length - 1) setStep(s => s + 1);
    else setSubmitted(true);
  };

  const back = () => { setStep(s => s - 1); setErrors({}); };
  const reset = () => { setStep(0); setSubmitted(false); setFormData({ firstName:"",lastName:"",phone:"",email:"",city:"",state:"",occupation:"",experience:"",hasLocation:"",property:"",message:"",outletType:preselectedType||"",budget:"",timeline:"",support:[],source:"" }); };

  return (
    <div className="fq-form-card">
      {/* Header */}
      <div className="fq-form-header">
        <h3>Franchise Enquiry Form</h3>
        <p>Complete all 3 steps — takes about 3 minutes</p>
      </div>

      {!submitted ? (
        <>
          {/* Stepper */}
          <div className="fq-stepper">
            {STEPS_META.map((s, i) => (
              <div className="fq-step-item" key={s.label}>
                <div className={`fq-step-circle${i < step ? " done" : i === step ? " active" : ""}`}>
                  {i < step ? "✓" : i + 1}
                </div>
                <span className={`fq-step-name${i === step ? " active" : ""}`}>{s.label}</span>
                {i < STEPS_META.length - 1 && (
                  <div className={`fq-step-line${i < step ? " done" : ""}`} />
                )}
              </div>
            ))}
          </div>

          {/* Form body */}
          <div className="fq-form-body">
            {step === 0 && <Step1 data={formData} onChange={update} errors={errors} />}
            {step === 1 && <Step2 data={formData} onChange={update} errors={errors} />}
            {step === 2 && <Step3 data={formData} onChange={update} errors={errors} />}
          </div>

          {/* Actions */}
          <div className="fq-form-actions">
            {step > 0 ? (
              <button className="fq-btn-back" onClick={back}>← Back</button>
            ) : (
              <span />
            )}
            <button
              className={`fq-btn-next${step === STEPS_META.length - 1 ? " submit" : ""}`}
              onClick={next}
            >
              {step < STEPS_META.length - 1 ? <>Next Step →</> : <>Submit Application ✓</>}
            </button>
          </div>
        </>
      ) : (
        <SuccessScreen refId={refId} onReset={reset} />
      )}
    </div>
  );
}