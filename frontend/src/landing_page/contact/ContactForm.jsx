import { useState } from "react";

const TABS = [
  { key: "general",   label: "General",    icon: "💬" },
  { key: "order",     label: "Order Issue", icon: "🛒" },
  { key: "feedback",  label: "Feedback",    icon: "⭐" },
  { key: "business",  label: "Business",    icon: "🤝" },
];

const SUBJECTS = {
  general:  ["Product Inquiry", "Store Information", "Website Issue", "Partnerships", "Other"],
  order:    ["Wrong Item Delivered", "Order Not Delivered", "Payment Issue", "Refund Request", "Other"],
  feedback: ["Food Quality", "Staff Behaviour", "Delivery Experience", "App / Website", "Overall Experience"],
  business: ["Bulk Orders", "Corporate Tie-up", "Catering", "Vendor Inquiry", "Other"],
};

/* ── Field wrapper ── */
function Field({ label, required, error, hint, children }) {
  return (
    <div className="ct-field">
      <label className="ct-label">
        {label}{required && <span>*</span>}
      </label>
      {children}
      {hint  && !error && <div className="ct-field-footer">{hint}</div>}
      {error && <span className="ct-error">{error}</span>}
    </div>
  );
}

/* ── Star Rating ── */
function StarRating({ value, onChange }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="ct-stars">
      {[1, 2, 3, 4, 5].map(n => (
        <span
          key={n}
          className={`ct-star${n <= (hovered || value) ? " active" : ""}`}
          onMouseEnter={() => setHovered(n)}
          onMouseLeave={() => setHovered(0)}
          onClick={() => onChange(n)}
        >
          ★
        </span>
      ))}
    </div>
  );
}

/* ── Success Screen ── */
function SuccessScreen({ tab, onReset }) {
  const msgs = {
    general:  { title: "Message Received!", body: "Our team will get back to you within 24 hours." },
    order:    { title: "Issue Logged!",     body: "Our support team will resolve your order issue within 4–6 hours." },
    feedback: { title: "Thank You!",        body: "Your feedback helps us get better every day. We truly appreciate it." },
    business: { title: "We're Interested!", body: "Our business team will reach out within 2 business days." },
  };
  const { title, body } = msgs[tab] || msgs.general;
  return (
    <div className="ct-success">
      <div className="ct-success-icon">✅</div>
      <h3>{title}</h3>
      <p>{body}</p>
      <button className="ct-btn-reset" onClick={onReset}>Send Another Message</button>
    </div>
  );
}

/* ════ MAIN FORM COMPONENT ════ */
export default function ContactForm() {
  const [activeTab, setActiveTab] = useState("general");
  const [submitted, setSubmitted] = useState(false);
  const [sending,   setSending]   = useState(false);
  const [errors,    setErrors]    = useState({});
  const [rating,    setRating]    = useState(0);
  const [msgLen,    setMsgLen]    = useState(0);

  const [form, setForm] = useState({
    name: "", email: "", phone: "",
    subject: "", orderId: "", message: "",
  });

  const update = (k, v) => {
    setForm(p => ({ ...p, [k]: v }));
    if (k === "message") setMsgLen(v.length);
    if (errors[k]) setErrors(p => ({ ...p, [k]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim())         e.name    = "Your name is required";
    if (!form.email.includes("@")) e.email   = "Valid email required";
    if (!form.subject)             e.subject = "Please select a subject";
    if (!form.message.trim())      e.message = "Please describe your query";
    if (activeTab === "order" && !form.orderId.trim()) e.orderId = "Order ID required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    setSending(true);
    // Simulate network call
    setTimeout(() => { setSending(false); setSubmitted(true); }, 1200);
  };

  const reset = () => {
    setForm({ name:"", email:"", phone:"", subject:"", orderId:"", message:"" });
    setRating(0); setMsgLen(0); setErrors({});
    setSubmitted(false);
  };

  const switchTab = (key) => {
    setActiveTab(key);
    setErrors({});
    update("subject", "");
  };

  if (submitted) {
    return (
      <div className="ct-form-card">
        <div className="ct-form-header">
          <h3>Contact Us</h3>
          <p>We're always here to help</p>
        </div>
        <SuccessScreen tab={activeTab} onReset={reset} />
      </div>
    );
  }

  return (
    <div className="ct-form-card">
      {/* Header */}
      <div className="ct-form-header">
        <h3>Contact Us</h3>
        <p>Pick a category and we'll route your message to the right team</p>
      </div>

      {/* Tabs */}
      <div className="ct-form-tabs">
        {TABS.map(t => (
          <button
            key={t.key}
            className={`ct-form-tab${activeTab === t.key ? " active" : ""}`}
            onClick={() => switchTab(t.key)}
          >
            <span>{t.icon}</span> {t.label}
          </button>
        ))}
      </div>

      {/* Body */}
      <div className="ct-form-body">
        <div className="ct-field-group">

          {/* Name + Email */}
          <div className="ct-field-group cols-2">
            <Field label="Full Name" required error={errors.name}>
              <input
                className={`ct-input${errors.name ? " error" : ""}`}
                placeholder="Priya Sharma"
                value={form.name}
                onChange={e => update("name", e.target.value)}
              />
            </Field>
            <Field label="Email" required error={errors.email}>
              <input
                className={`ct-input${errors.email ? " error" : ""}`}
                type="email"
                placeholder="priya@example.com"
                value={form.email}
                onChange={e => update("email", e.target.value)}
              />
            </Field>
          </div>

          {/* Phone + Subject */}
          <div className="ct-field-group cols-2">
            <Field label="Phone Number">
              <input
                className="ct-input"
                placeholder="+91 9876543210"
                value={form.phone}
                onChange={e => update("phone", e.target.value)}
              />
            </Field>
            <Field label="Subject" required error={errors.subject}>
              <select
                className={`ct-select${errors.subject ? " error" : ""}`}
                value={form.subject}
                onChange={e => update("subject", e.target.value)}
              >
                <option value="">Select topic…</option>
                {(SUBJECTS[activeTab] || []).map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </Field>
          </div>

          {/* Order ID — only for order tab */}
          {activeTab === "order" && (
            <Field label="Order ID / Reference" required error={errors.orderId}>
              <input
                className={`ct-input${errors.orderId ? " error" : ""}`}
                placeholder="e.g. ORD-2026-XXXXX"
                value={form.orderId}
                onChange={e => update("orderId", e.target.value)}
              />
            </Field>
          )}

          {/* Star rating — only for feedback tab */}
          {activeTab === "feedback" && (
            <Field label="Overall Rating">
              <StarRating value={rating} onChange={setRating} />
            </Field>
          )}

          {/* Message */}
          <Field
            label="Your Message"
            required
            error={errors.message}
            hint={`${msgLen} / 500`}
          >
            <textarea
              className={`ct-textarea${errors.message ? " error" : ""}`}
              placeholder={
                activeTab === "order"    ? "Describe what went wrong with your order…" :
                activeTab === "feedback" ? "Tell us about your experience…" :
                activeTab === "business" ? "Tell us about your business requirement…" :
                "How can we help you today?"
              }
              maxLength={500}
              value={form.message}
              onChange={e => update("message", e.target.value)}
            />
          </Field>
        </div>
      </div>

      {/* Footer */}
      <div className="ct-form-footer">
        <p className="ct-privacy-note">
          🔒 Your data is safe. We never share your personal info with third parties.
        </p>
        <button
          className={`ct-btn-submit${sending ? " sending" : ""}`}
          onClick={handleSubmit}
          disabled={sending}
        >
          {sending ? <>⏳ Sending…</> : <>Send Message →</>}
        </button>
      </div>
    </div>
  );
}