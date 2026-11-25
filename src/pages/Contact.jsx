
import React, { useState } from 'react'
import { Link } from 'react-router'

const SCHOOL_EMAIL = 'your-school-email@example.com'
const WHATSAPP_NUMBER = '923000000000' // Include country code, without +
const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/',
  instagram: 'https://instagram.com/',
  youtube: 'https://youtube.com/',
}

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const emailBody = `
Name: ${form.name}
Email: ${form.email}
Subject: ${form.subject}

Message:
${form.message}
    `

    const mailto = `mailto:${SCHOOL_EMAIL}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(emailBody)}`
    window.location.href = mailto
  }

  const socialButtons = [
    {
      name: 'WhatsApp',
      detail: 'Chat with us directly',
      link: `https://wa.me/${WHATSAPP_NUMBER}`,
      icon: '◉',
    },
    {
      name: 'Facebook',
      detail: 'Follow our updates',
      link: SOCIAL_LINKS.facebook,
      icon: 'f',
    },
    {
      name: 'Instagram',
      detail: 'Explore school life',
      link: SOCIAL_LINKS.instagram,
      icon: '◎',
    },
    {
      name: 'YouTube',
      detail: 'Watch our videos',
      link: SOCIAL_LINKS.youtube,
      icon: '▶',
    },
  ]

  return (
    <main className="bg-[#EBEBD8] text-[#455230] min-h-screen pt-32 pb-20 px-5 sm:px-8 lg:px-16">

      <div className="max-w-7xl mx-auto">

        {/* PAGE HEADING */}
        <div className="mb-12">
          <span className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] font-bold text-[#637545]">
            <span className="w-9 h-[2px] bg-[#637545]"></span>
            Get In Touch
          </span>

          <h1 className="mt-5 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05]">
            Let's Start A
            <span className="block text-[#9BA685]">Conversation.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base sm:text-lg leading-8 text-[#455230]/75">
            Have a question about admissions, academics or school life?
            We are here to help. Send us a message and let's connect.
          </p>
        </div>

        {/* MAIN CONTACT AREA */}
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-6 items-stretch">

          {/* LEFT CONTACT PANEL */}
          <div className="bg-[#455230] text-[#EBEBD8] rounded-[30px] p-7 sm:p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden">

            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full border-[35px] border-[#9BA685]/10"></div>
            <div className="absolute -right-10 bottom-20 w-40 h-40 rounded-full bg-[#637545]/30"></div>

            <div className="relative z-10">
              <span className="text-sm uppercase tracking-[0.2em] font-bold text-[#9BA685]">
                Contact Information
              </span>

              <h2 className="mt-6 text-3xl sm:text-4xl font-black leading-tight">
                We'd Love
                <br />
                To Hear From You.
              </h2>

              <p className="mt-5 text-[#EBEBD8]/70 leading-7">
                Whether you're a parent, student or visitor, feel free to
                reach out to us through any of the channels below.
              </p>

              <div className="mt-12 space-y-7">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#637545] flex items-center justify-center text-xl">
                    ✉
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-[#9BA685] font-semibold">Email Us</p>
                    <a
                      href={`mailto:${SCHOOL_EMAIL}`}
                      className="mt-1 block font-bold break-all hover:text-[#9BA685] transition"
                    >
                      {SCHOOL_EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#637545] flex items-center justify-center text-xl">
                    ☎
                  </div>
                  <div>
                    <p className="text-sm text-[#9BA685] font-semibold">WhatsApp</p>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 block font-bold hover:text-[#9BA685] transition"
                    >
                      Chat With Our Team
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* SOCIAL LINKS */}
            <div className="relative z-10 mt-14">
              <div className="h-px bg-[#9BA685]/30 mb-7"></div>

              <p className="text-sm font-bold text-[#9BA685] uppercase tracking-widest mb-5">
                Follow Our Journey
              </p>

              <div className="grid grid-cols-2 gap-3">
                {socialButtons.map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 p-3 rounded-2xl border border-[#9BA685]/30 hover:bg-[#637545] hover:border-[#637545] transition duration-300"
                  >
                    <span className="w-10 h-10 rounded-xl bg-[#637545] group-hover:bg-[#455230] flex items-center justify-center text-lg font-black transition">
                      {social.icon}
                    </span>
                    <span>
                      <span className="block font-bold text-sm">{social.name}</span>
                      <span className="block text-[11px] text-[#EBEBD8]/60 mt-1">
                        {social.detail}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT EMAIL FORM */}
          <div className="bg-white/45 border border-[#9BA685]/35 rounded-[30px] p-7 sm:p-10 lg:p-12">
            <div className="mb-9">
              <span className="text-sm uppercase tracking-[0.2em] font-bold text-[#637545]">
                Send A Message
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-black">
                How Can We Help?
              </h2>
              <p className="mt-3 text-[#455230]/65 leading-7">
                Fill out the details below and we'll be happy to hear from you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full rounded-xl bg-[#EBEBD8]/60 border border-[#9BA685]/50 px-4 py-4 outline-none focus:border-[#637545] focus:ring-2 focus:ring-[#9BA685]/30 transition placeholder:text-[#455230]/40"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-xl bg-[#EBEBD8]/60 border border-[#9BA685]/50 px-4 py-4 outline-none focus:border-[#637545] focus:ring-2 focus:ring-[#9BA685]/30 transition placeholder:text-[#455230]/40"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What would you like to discuss?"
                  className="w-full rounded-xl bg-[#EBEBD8]/60 border border-[#9BA685]/50 px-4 py-4 outline-none focus:border-[#637545] focus:ring-2 focus:ring-[#9BA685]/30 transition placeholder:text-[#455230]/40"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows="6"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="w-full rounded-xl bg-[#EBEBD8]/60 border border-[#9BA685]/50 px-4 py-4 outline-none focus:border-[#637545] focus:ring-2 focus:ring-[#9BA685]/30 transition placeholder:text-[#455230]/40 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto flex items-center justify-center gap-4 px-9 py-4 rounded-full bg-[#455230] text-[#EBEBD8] font-bold hover:bg-[#637545] transition duration-300 group"
              >
                Send Message
                <span className="text-xl group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>

              <p className="text-xs text-[#455230]/55 leading-5">
                Submitting opens your email application with your message prepared.
                You will need to send it from there.
              </p>
            </form>
          </div>
        </div>

        {/* BOTTOM BANNER */}
        <div className="mt-8 bg-[#9BA685]/35 rounded-[28px] p-7 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-[#637545]">
              Have Questions About Joining?
            </p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-black">
              Your School Journey Starts Here.
            </h3>
          </div>

          <Link
            to="/admissions"
            className="shrink-0 px-8 py-4 rounded-full bg-[#637545] text-[#EBEBD8] font-bold hover:bg-[#455230] transition"
          >
            Explore Admissions →
          </Link>
        </div>

      </div>
    </main>
  )
}

