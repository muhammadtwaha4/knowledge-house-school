
import React from 'react'
import { Link } from 'react-router'

const values = [
  {
    number: '01',
    title: 'Excellence',
    description: 'Helping every student discover their abilities and work towards their personal best.',
    symbol: '✦',
  },
  {
    number: '02',
    title: 'Integrity',
    description: 'Encouraging honesty, kindness, responsibility and respect in everyday life.',
    symbol: '◈',
  },
  {
    number: '03',
    title: 'Creativity',
    description: 'Giving young minds the confidence to think differently and explore new ideas.',
    symbol: '✧',
  },
  {
    number: '04',
    title: 'Community',
    description: 'Building a welcoming environment where students, teachers and families belong.',
    symbol: '❋',
  },
]

const journey = [
  {
    number: '01',
    title: 'Discover',
    description: 'Students explore new ideas, ask questions and develop curiosity about the world.',
  },
  {
    number: '02',
    title: 'Develop',
    description: 'They build knowledge, essential skills and confidence through meaningful learning.',
  },
  {
    number: '03',
    title: 'Become',
    description: 'They grow into thoughtful, responsible and independent individuals.',
  },
]

export default function About() {
  return (
    <main className="overflow-hidden bg-[#EBEBD8] text-[#455230]">

      {/* HERO */}
      <section className="pt-28 px-4 sm:px-7 lg:px-12 pb-16">
        <div className="max-w-[1450px] mx-auto">

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">

            {/* Heading */}
            <div className="lg:col-span-7 flex flex-col justify-between py-8 lg:py-12">
              <div>
                <div className="inline-flex items-center gap-3 text-xs font-bold tracking-[3px] uppercase text-[#637545]">
                  <span className="w-10 h-[2px] bg-[#637545]" />
                  Welcome To Knowledge House
                </div>

                <h1 className="mt-9 text-6xl sm:text-7xl lg:text-[100px] font-black leading-[0.92] tracking-[-5px]">
                  Growing
                  <span className="block text-[#9BA685]">Minds.</span>
                  Building
                  <span className="block">Futures.</span>
                </h1>

                <p className="mt-9 max-w-xl text-base sm:text-lg leading-8 text-[#455230]/75">
                  We believe every child has something special to offer.
                  Our aim is to create an environment where students can
                  learn, discover their potential and prepare for a
                  brighter tomorrow.
                </p>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-5">
                <Link
                  to="/admissions"
                  className="px-8 py-4 rounded-full bg-[#455230] text-[#EBEBD8] font-bold hover:bg-[#637545] transition"
                >
                  Become A Student ↗
                </Link>

                <Link
                  to="/contact"
                  className="font-bold border-b-2 border-[#9BA685] pb-1 hover:text-[#637545] transition"
                >
                  Talk To Our Team
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="lg:col-span-5 relative min-h-[400px] sm:min-h-[550px]">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85"
                alt="Students learning in a classroom"
                className="absolute inset-0 w-full h-full object-cover rounded-[35px]"
              />

              <div className="absolute inset-0 rounded-[35px] bg-[#455230]/10" />

              <div className="absolute bottom-5 left-5 right-5 bg-[#EBEBD8] rounded-2xl p-5 sm:p-7 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[2px] font-bold text-[#637545]">
                    Our Belief
                  </p>
                  <p className="mt-2 text-xl sm:text-2xl font-black">
                    Every Child Can Shine.
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-[#9BA685] flex items-center justify-center text-2xl shrink-0">
                  ✦
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* INTRODUCTION STRIP */}
      <section className="px-4 sm:px-7 lg:px-12 py-5">
        <div className="max-w-[1450px] mx-auto bg-[#637545] rounded-[25px] p-7 sm:p-10 text-[#EBEBD8]">
          <div className="grid md:grid-cols-3 gap-8">

            <div>
              <p className="text-4xl font-black">01</p>
              <p className="mt-3 text-lg font-bold">A Love For Learning</p>
              <p className="mt-2 text-sm text-[#EBEBD8]/75 leading-6">
                Making education an exciting journey of discovery.
              </p>
            </div>

            <div className="md:border-l border-[#EBEBD8]/25 md:pl-8">
              <p className="text-4xl font-black">02</p>
              <p className="mt-3 text-lg font-bold">A Place To Grow</p>
              <p className="mt-2 text-sm text-[#EBEBD8]/75 leading-6">
                Supporting academic and personal development.
              </p>
            </div>

            <div className="md:border-l border-[#EBEBD8]/25 md:pl-8">
              <p className="text-4xl font-black">03</p>
              <p className="mt-3 text-lg font-bold">A Brighter Tomorrow</p>
              <p className="mt-2 text-sm text-[#EBEBD8]/75 leading-6">
                Preparing students for opportunities ahead.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* WHO WE ARE - BENTO GRID */}
      <section className="py-24 px-4 sm:px-7 lg:px-12">
        <div className="max-w-[1450px] mx-auto">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[3px] text-[#637545]">
                A Little About Us
              </p>
              <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
                More Than
                <span className="text-[#9BA685]"> A School.</span>
              </h2>
            </div>

            <p className="max-w-md text-[#455230]/70 leading-7">
              A positive learning environment can make a lasting difference.
              We aim to make every school day an opportunity to grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">

            {/* Story */}
            <div className="md:col-span-7 bg-[#455230] text-[#EBEBD8] rounded-[30px] p-8 sm:p-11 min-h-[350px] flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold uppercase tracking-[3px] text-[#9BA685]">
                  Our Story
                </span>
                <span className="text-4xl text-[#9BA685]">✳</span>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl font-black max-w-xl leading-tight">
                  Education Is The Foundation Of Every Great Future.
                </h3>
                <p className="mt-5 max-w-xl text-sm sm:text-base leading-8 text-[#EBEBD8]/70">
                  Knowledge House School is built around the belief that
                  education should develop both knowledge and character.
                  We want students to become confident learners, thoughtful
                  individuals and responsible members of society.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="md:col-span-5 min-h-[350px]">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=85"
                alt="Children learning together"
                className="w-full h-full min-h-[350px] object-cover rounded-[30px]"
              />
            </div>

            {/* Vision */}
            <div className="md:col-span-5 bg-[#9BA685]/35 rounded-[30px] p-8 sm:p-10 min-h-[280px] flex flex-col justify-between">
              <div className="flex justify-between">
                <span className="text-xs uppercase font-bold tracking-[3px] text-[#637545]">
                  Our Vision
                </span>
                <span className="text-3xl">◎</span>
              </div>

              <div>
                <h3 className="text-3xl font-black">A World Of Possibilities.</h3>
                <p className="mt-4 leading-7 text-sm text-[#455230]/75">
                  To inspire knowledgeable, confident and responsible
                  individuals who make a positive difference in their communities.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="md:col-span-7 bg-[#637545] rounded-[30px] p-8 sm:p-10 text-[#EBEBD8] min-h-[280px] flex flex-col justify-between">
              <div className="flex justify-between">
                <span className="text-xs uppercase font-bold tracking-[3px] text-[#EBEBD8]/70">
                  Our Mission
                </span>
                <span className="text-3xl">✧</span>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl font-black">
                  Making Every Learning Moment Matter.
                </h3>
                <p className="mt-4 max-w-xl leading-7 text-sm text-[#EBEBD8]/75">
                  To encourage academic development, creativity, personal
                  growth and strong values through a supportive learning environment.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* OUR LEARNING JOURNEY */}
      <section className="bg-[#455230] text-[#EBEBD8] py-24 px-5 sm:px-8 lg:px-12">
        <div className="max-w-[1450px] mx-auto">

          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[3px] text-[#9BA685]">
                The Way We See Education
              </p>
              <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
                A Journey Of
                <span className="text-[#9BA685]"> Growth.</span>
              </h2>
            </div>

            <p className="max-w-lg leading-8 text-[#EBEBD8]/70">
              Learning is not a single destination. It is a continuous
              process of discovering new things, developing abilities
              and becoming a better version of yourself.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mt-16">
            {journey.map((item, index) => (
              <div
                key={item.number}
                className="relative border-t border-[#9BA685]/40 pt-7 pb-5 group"
              >
                <div className="flex justify-between items-center">
                  <span className="text-5xl font-black text-[#9BA685]">
                    {item.number}
                  </span>
                  <span className="text-3xl text-[#9BA685] group-hover:rotate-45 transition">
                    ↗
                  </span>
                </div>

                <h3 className="mt-12 text-3xl font-black">{item.title}</h3>
                <p className="mt-4 max-w-sm text-sm leading-7 text-[#EBEBD8]/65">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 px-5 sm:px-8 lg:px-12">
        <div className="max-w-[1450px] mx-auto">

          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-[3px] text-[#637545]">
              What Makes Us Who We Are
            </p>
            <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black">
              Our Core Values.
            </h2>
            <p className="mt-5 leading-7 text-[#455230]/70">
              The principles that guide the way we learn, interact and grow together.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
            {values.map((value, index) => (
              <div
                key={value.number}
                className={`rounded-[25px] p-7 sm:p-8 min-h-[290px] flex flex-col justify-between transition duration-300 hover:-translate-y-2 ${
                  index % 2 === 0
                    ? 'bg-[#9BA685]/35'
                    : 'bg-[#637545] text-[#EBEBD8]'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className={`text-sm font-black ${index % 2 === 0 ? 'text-[#637545]' : 'text-[#EBEBD8]/70'}`}>
                    {value.number}
                  </span>
                  <span className="text-3xl">{value.symbol}</span>
                </div>

                <div>
                  <h3 className="text-2xl font-black">{value.title}</h3>
                  <p className={`mt-4 text-sm leading-7 ${index % 2 === 0 ? 'text-[#455230]/75' : 'text-[#EBEBD8]/75'}`}>
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SCHOOL LIFE */}
      <section className="px-4 sm:px-7 lg:px-12 pb-24">
        <div className="max-w-[1450px] mx-auto">

          <div className="grid lg:grid-cols-2 gap-8 items-center">

            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=800&q=85"
                alt="Students participating in school activities"
                className="w-full h-64 sm:h-80 object-cover rounded-[25px]"
              />
              <img
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=85"
                alt="Students studying together"
                className="w-full h-64 sm:h-80 object-cover rounded-[25px] mt-10"
              />
            </div>

            <div className="lg:pl-10">
              <p className="text-xs font-bold uppercase tracking-[3px] text-[#637545]">
                Beyond The Classroom
              </p>

              <h2 className="mt-5 text-4xl sm:text-5xl font-black leading-tight">
                Making Memories.
                <span className="block text-[#9BA685]">Building Confidence.</span>
              </h2>

              <p className="mt-6 leading-8 text-[#455230]/75">
                A school experience is about more than academic lessons.
                Friendships, teamwork, creative activities and shared
                experiences can help students develop confidence and
                discover their interests.
              </p>

              <p className="mt-4 leading-8 text-[#455230]/75">
                We aim to create an environment where students feel
                encouraged to participate, express themselves and
                make the most of their learning journey.
              </p>

              <Link
                to="/academics"
                className="inline-flex mt-8 px-8 py-4 rounded-full bg-[#455230] text-[#EBEBD8] font-bold hover:bg-[#637545] transition"
              >
                Explore Academics ↗
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-4 sm:px-7 lg:px-12 pb-24">
        <div className="max-w-[1450px] mx-auto rounded-[35px] bg-[#9BA685] px-7 py-16 sm:px-14 sm:py-20 text-center relative overflow-hidden">

          <div className="absolute -top-28 -left-20 w-72 h-72 border border-[#455230]/20 rounded-full" />
          <div className="absolute -bottom-32 -right-20 w-80 h-80 border border-[#455230]/20 rounded-full" />

          <div className="relative max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[3px] font-bold text-[#455230]/70">
              Your Journey Starts Here
            </p>

            <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
              Let's Build A Brighter Future Together.
            </h2>

            <p className="mt-6 max-w-xl mx-auto leading-8 text-[#455230]/75">
              Discover Knowledge House School and take the first step
              towards a meaningful educational journey.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                to="/admissions"
                className="px-8 py-4 rounded-full bg-[#455230] text-[#EBEBD8] font-bold hover:bg-[#637545] transition"
              >
                Explore Admissions ↗
              </Link>

              <Link
                to="/contact"
                className="px-8 py-4 rounded-full border border-[#455230]/40 font-bold hover:bg-[#EBEBD8] transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
