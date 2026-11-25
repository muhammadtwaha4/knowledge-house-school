
import React from 'react'
import { Link } from 'react-router'

const subjects = [
  {
    number: '01',
    title: 'Language & Literature',
    description: 'Build strong communication skills through reading, writing, speaking and creative expression.',
    subjects: ['English', 'Urdu', 'Literature'],
  },
  {
    number: '02',
    title: 'Mathematics',
    description: 'Develop logical thinking, problem-solving abilities and confidence with numbers.',
    subjects: ['Arithmetic', 'Algebra', 'Geometry'],
  },
  {
    number: '03',
    title: 'Science & Discovery',
    description: 'Explore the world through observation, experiments and curiosity-driven learning.',
    subjects: ['Physics', 'Chemistry', 'Biology'],
  },
  {
    number: '04',
    title: 'Social Studies',
    description: 'Understand communities, cultures, history and the world around us.',
    subjects: ['History', 'Geography', 'Civics'],
  },
  {
    number: '05',
    title: 'Technology & Computing',
    description: 'Develop digital awareness, creative thinking and essential technology skills.',
    subjects: ['Computer', 'Digital Skills', 'ICT'],
  },
  {
    number: '06',
    title: 'Arts & Creativity',
    description: 'Encourage imagination, self-expression and creative confidence.',
    subjects: ['Drawing', 'Art', 'Creative Projects'],
  },
]

const stages = [
  {
    number: '01',
    level: 'Early Years',
    age: 'Ages 3–5',
    description: 'A joyful introduction to learning through play, exploration, communication and creativity.',
  },
  {
    number: '02',
    level: 'Primary Education',
    age: 'Ages 5–11',
    description: 'Building strong foundations in literacy, mathematics, science and personal development.',
  },
  {
    number: '03',
    level: 'Secondary Education',
    age: 'Ages 11–16',
    description: 'Developing deeper subject knowledge, independent thinking and preparation for future goals.',
  },
]

export default function Academics() {
  return (
    <main className="bg-[#EBEBD8] text-[#455230] overflow-hidden">

      {/* HERO */}
      <section className="pt-32 pb-20 px-5 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:items-end justify-between">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-[#637545]">
                <span className="w-8 h-[2px] bg-[#637545]"></span>
                Our Academic World
              </span>

              <h1 className="mt-7 text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight leading-[0.95]">
                Learning
                <br />
                <span className="text-[#9BA685]">Without</span>
                <br />
                Limits.
              </h1>

              <p className="mt-8 max-w-xl text-base sm:text-lg leading-8 text-[#455230]/80">
                Education is more than textbooks and classrooms. It is about
                discovering abilities, asking questions and developing the
                confidence to achieve more.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  to="/admissions"
                  className="px-7 py-4 rounded-full bg-[#455230] text-[#EBEBD8] font-bold hover:bg-[#637545] transition"
                >
                  Join Our School
                </Link>
                <a
                  href="#subjects"
                  className="px-7 py-4 rounded-full border border-[#637545]/40 font-bold hover:bg-[#9BA685]/30 transition"
                >
                  Explore Subjects ↓
                </a>
              </div>
            </div>

            <div className="w-full lg:max-w-md">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85"
                  alt="Students learning in a classroom"
                  className="w-full h-[330px] sm:h-[420px] object-cover rounded-[48%_48%_20px_20px]"
                />
                <div className="absolute -bottom-5 -left-3 sm:-left-8 bg-[#637545] text-[#EBEBD8] rounded-2xl p-5 sm:p-7 shadow-xl">
                  <p className="text-3xl font-black">Learn.</p>
                  <p className="text-3xl font-black">Explore.</p>
                  <p className="text-3xl font-black">Achieve.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="bg-[#455230] text-[#EBEBD8] py-12 px-5 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <p className="text-4xl font-black">01</p>
            <p className="mt-2 text-[#9BA685] font-semibold">Strong Foundations</p>
            <p className="mt-2 text-sm text-[#EBEBD8]/75">Building knowledge and essential skills.</p>
          </div>
          <div className="sm:border-l sm:border-[#9BA685]/40 sm:pl-8">
            <p className="text-4xl font-black">02</p>
            <p className="mt-2 text-[#9BA685] font-semibold">Curious Minds</p>
            <p className="mt-2 text-sm text-[#EBEBD8]/75">Encouraging questions and exploration.</p>
          </div>
          <div className="sm:border-l sm:border-[#9BA685]/40 sm:pl-8">
            <p className="text-4xl font-black">03</p>
            <p className="mt-2 text-[#9BA685] font-semibold">Future Ready</p>
            <p className="mt-2 text-sm text-[#EBEBD8]/75">Preparing students for new opportunities.</p>
          </div>
        </div>
      </section>

      {/* SUBJECTS */}
      <section id="subjects" className="py-24 px-5 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#637545]">
                What We Explore
              </span>
              <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
                Subjects That
                <br />Shape Minds.
              </h2>
            </div>
            <p className="max-w-md text-[#455230]/75 leading-7">
              Every subject opens a new door. Our academic approach encourages
              students to explore different fields and discover their strengths.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {subjects.map((subject, index) => (
              <div
                key={subject.number}
                className={`group min-h-[280px] rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 ${
                  index % 2 === 0
                    ? 'bg-[#9BA685]/35'
                    : 'bg-[#637545] text-[#EBEBD8]'
                }`}
              >
                <div className="flex justify-between items-start">
                  <span className={`text-sm font-black tracking-widest ${index % 2 === 0 ? 'text-[#637545]' : 'text-[#EBEBD8]/70'}`}>
                    {subject.number}
                  </span>
                  <span className={`text-3xl transition-transform group-hover:rotate-45 ${index % 2 === 0 ? 'text-[#637545]' : 'text-[#EBEBD8]'}`}>
                    ↗
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-extrabold mb-3">{subject.title}</h3>
                  <p className={`text-sm leading-6 mb-6 ${index % 2 === 0 ? 'text-[#455230]/75' : 'text-[#EBEBD8]/80'}`}>
                    {subject.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {subject.subjects.map((item) => (
                      <span
                        key={item}
                        className={`text-xs font-semibold px-3 py-2 rounded-full border ${
                          index % 2 === 0
                            ? 'border-[#637545]/30'
                            : 'border-[#EBEBD8]/30'
                        }`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEARNING JOURNEY */}
      <section className="py-24 bg-[#9BA685]/30 px-5 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#637545]">
              The Learning Journey
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
              Every Step
              <br />Moves You Forward.
            </h2>
            <p className="mt-5 text-[#455230]/75 leading-7">
              A learning journey designed to support students as they grow,
              gain confidence and prepare for the next stage of life.
            </p>
          </div>

          <div className="space-y-4">
            {stages.map((stage) => (
              <div
                key={stage.number}
                className="grid grid-cols-1 md:grid-cols-[100px_1fr_2fr] gap-5 md:gap-10 items-center bg-[#EBEBD8] rounded-3xl p-6 sm:p-9 hover:bg-[#455230] hover:text-[#EBEBD8] transition-colors duration-300 group"
              >
                <span className="text-4xl font-black text-[#9BA685]">
                  {stage.number}
                </span>
                <div>
                  <h3 className="text-2xl font-extrabold">{stage.level}</h3>
                  <p className="mt-1 text-sm font-semibold text-[#637545] group-hover:text-[#9BA685]">
                    {stage.age}
                  </p>
                </div>
                <p className="text-sm sm:text-base leading-7 text-[#455230]/75 group-hover:text-[#EBEBD8]/75">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEACHING APPROACH */}
      <section className="py-24 px-5 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1100&q=85"
              alt="Students working together"
              className="w-full h-[400px] sm:h-[520px] object-cover rounded-[30px]"
            />
            <div className="absolute -bottom-6 -right-3 sm:-right-6 bg-[#637545] text-[#EBEBD8] rounded-2xl p-6 max-w-[220px]">
              <p className="text-lg font-black">Learning is an adventure.</p>
              <p className="mt-2 text-sm text-[#EBEBD8]/75">Discover something new every day.</p>
            </div>
          </div>

          <div className="lg:pl-8">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#637545]">
              Beyond The Books
            </span>
            <h2 className="mt-5 text-4xl sm:text-5xl font-black leading-tight">
              Education That
              <span className="text-[#9BA685]"> Inspires.</span>
            </h2>
            <p className="mt-6 leading-8 text-[#455230]/75">
              We believe meaningful education happens when students actively
              participate in their learning. Discussions, teamwork, creative
              activities and practical experiences can make learning more engaging.
            </p>

            <div className="mt-9 space-y-5">
              {[
                ['Active Learning', 'Encouraging students to participate and think independently.'],
                ['Creative Thinking', 'Giving students opportunities to explore new ideas.'],
                ['Personal Growth', 'Supporting confidence, responsibility and collaboration.'],
              ].map(([title, description], index) => (
                <div key={title} className="flex gap-5 border-b border-[#9BA685]/50 pb-5">
                  <span className="text-xl font-black text-[#9BA685]">0{index + 1}</span>
                  <div>
                    <h3 className="font-extrabold text-lg">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-[#455230]/70">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 sm:px-8 lg:px-16 pb-20">
        <div className="max-w-7xl mx-auto bg-[#455230] text-[#EBEBD8] rounded-[32px] px-7 py-16 sm:px-14 sm:py-20 text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#9BA685]">
            Start Your Journey
          </span>
          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black max-w-3xl mx-auto leading-tight">
            Your Future Begins With What You Learn Today.
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-[#EBEBD8]/75 leading-7">
            Take the next step towards a meaningful learning experience.
            We would love to welcome you to our school.
          </p>
          <Link
            to="/admissions"
            className="inline-flex mt-9 px-8 py-4 rounded-full bg-[#EBEBD8] text-[#455230] font-bold hover:bg-[#9BA685] transition"
          >
            Explore Admissions →
          </Link>
        </div>
      </section>

    </main>
  )
}
