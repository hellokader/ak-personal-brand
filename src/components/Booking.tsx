import { useState } from "react";
import {
  contactInfo,
  budgetOptions,
  businessTypes,
} from "../data/content";

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="book reveal" id="book">
      <div className="wrap">
        <div>
          <div className="eyebrow">Let's talk · 12</div>
          <h2>
            Book a <span className="em">free</span> 30-min call.
          </h2>
          <p className="lede">
            We'll look at your numbers together. If I can help, I'll tell you
            how. If your area's too small for ads to make sense, I'll tell you
            that too. No pitch deck either way.
          </p>
          <div className="info">
            <div>
              <div className="lab">Direct email</div>
              <b>{contactInfo.email}</b>
            </div>
            <div>
              <div className="lab">Response</div>
              <b>{contactInfo.response}</b>
            </div>
            <div>
              <div className="lab">WhatsApp</div>
              <b>{contactInfo.whatsapp}</b>
            </div>
            <div>
              <div className="lab">Timezone</div>
              <b>{contactInfo.timezone}</b>
            </div>
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <div className="field">
            <label>Your name</label>
            <input type="text" placeholder="Sarah Khan" required />
          </div>
          <div className="field">
            <label>Email</label>
            <input type="email" placeholder="you@business.com" required />
          </div>
          <div className="field">
            <label>Business / website</label>
            <input type="text" placeholder="business.com" />
          </div>
          <div className="frow">
            <div className="field">
              <label>Monthly ad budget</label>
              <select>
                {budgetOptions.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label>Business type</label>
              <select>
                {businessTypes.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="field">
            <label>What's going on?</label>
            <textarea placeholder="Phone not ringing, wasted spend, new location…" />
          </div>
          <button type="submit" className="btn">
            {submitted
              ? "Sent — talk soon ✓"
              : "Request my strategy call →"}
          </button>
        </form>
      </div>
    </section>
  );
}
