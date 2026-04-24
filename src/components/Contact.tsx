import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { profile, socialLinks } from "../data/portfolio";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState<FormState>(initialFormState);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const whatsappUrl = useMemo(() => {
    const message = [
      "Hi Avanish,",
      formData.name ? `My name is ${formData.name}.` : "",
      formData.email ? `You can reach me at ${formData.email}.` : "",
      formData.message,
    ]
      .filter(Boolean)
      .join(" ");

    return `https://wa.me/${profile.phoneRaw}?text=${encodeURIComponent(message)}`;
  }, [formData.email, formData.message, formData.name]);

  const emailUrl = useMemo(() => {
    const subject = encodeURIComponent(
      formData.name ? `Portfolio enquiry from ${formData.name}` : "Portfolio enquiry",
    );
    const body = encodeURIComponent(
      `Name: ${formData.name || "Not provided"}\nEmail: ${formData.email || "Not provided"}\n\nMessage:\n${formData.message || ""}`,
    );

    return `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }, [formData.email, formData.message, formData.name]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const handleDownloadResume = () => {
    window.open(profile.resume, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="section-frame px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Make Reaching Out Feel Effortless"
          subtitle="This contact flow is built for instant WhatsApp outreach, direct social clicks, and quick email drafting without needing a backend."
        />

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            className="glass-panel p-7"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-200">Name</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="contact-input"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-200">Email</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="contact-input"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-200">Message</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell me about the role, project, or collaboration."
                  required
                  className="contact-input resize-none"
                />
              </label>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  className="inline-flex flex-1 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-white to-sky-200 px-6 py-4 font-semibold text-slate-950 shadow-[0_16px_40px_rgba(174,231,255,0.22)]"
                >
                  <i className="fab fa-whatsapp" />
                  Send To WhatsApp
                </button>

                <a
                  href={emailUrl}
                  className="inline-flex flex-1 items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-4 font-semibold text-white backdrop-blur-md"
                >
                  <i className="fas fa-envelope" />
                  Draft Email
                </a>
              </div>

              <p className="text-sm leading-7 text-slate-400">
                Form submit opens WhatsApp with your typed message. The email button opens your mail app so the
                message goes directly from the sender&apos;s own email account.
              </p>
            </form>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              className="glass-panel p-7"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-display text-2xl text-white">Contact Information</h3>
              <div className="mt-6 space-y-5 text-slate-300">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-cyan-50">
                    <i className="fas fa-envelope" />
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-cyan-100/60">Email</p>
                    <a href={`mailto:${profile.email}`} className="mt-2 block text-lg text-white hover:text-cyan-100">
                      {profile.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-cyan-50">
                    <i className="fas fa-phone" />
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-cyan-100/60">Phone</p>
                    <a href={`tel:+${profile.phoneRaw}`} className="mt-2 block text-lg text-white hover:text-cyan-100">
                      {profile.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-cyan-50">
                    <i className="fas fa-location-dot" />
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-cyan-100/60">Location</p>
                    <p className="mt-2 text-lg text-white">{profile.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="glass-panel p-7"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55 }}
            >
              <h3 className="font-display text-2xl text-white">Follow Me</h3>
              <div className="mt-6 flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.note ?? link.label}
                    className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white transition hover:-translate-y-1 hover:bg-white/10"
                  >
                    <i className={link.icon} />
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="glass-panel p-7"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: 0.05 }}
            >
              <h3 className="font-display text-2xl text-white">Download Resume</h3>
              <p className="mt-4 leading-7 text-slate-300">
                Keep a ready-to-share PDF for recruiters, referrals, and direct applications.
              </p>
              <button
                type="button"
                onClick={handleDownloadResume}
                className="mt-6 inline-flex items-center gap-3 rounded-full border border-cyan-200/20 bg-cyan-300/10 px-6 py-4 font-semibold text-cyan-50"
              >
                <i className="fas fa-download" />
                Download Resume
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
