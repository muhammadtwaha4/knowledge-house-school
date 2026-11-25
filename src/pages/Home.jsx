
import { Link } from 'react-router'

const features = [
  {
    number: '01',
    title: 'Quality Education',
    description: 'Building strong academic foundations through engaging and effective teaching methods.',
    icon: '✦',
  },
  {
    number: '02',
    title: 'Expert Teachers',
    description: 'Dedicated educators who inspire students to discover their potential and grow.',
    icon: '✧',
  },
  {
    number: '03',
    title: 'Modern Learning',
    description: 'Creating an environment where creativity, curiosity and innovation come together.',
    icon: '◈',
  },
  {
    number: '04',
    title: 'Character Building',
    description: 'Developing confidence, discipline, respect and responsibility in every student.',
    icon: '❋',
  },
]

const programs = [
  {
    number: '01',
    title: 'Early Years',
    subtitle: 'Ages 3–5',
    description: 'A joyful beginning where children explore, play and develop essential early skills.',
    color: 'bg-[#9BA685]',
  },
  {
    number: '02',
    title: 'Primary School',
    subtitle: 'Ages 5–11',
    description: 'Building knowledge, confidence and curiosity through meaningful learning.',
    color: 'bg-[#637545]',
  },
  {
    number: '03',
    title: 'Secondary School',
    subtitle: 'Ages 11–16',
    description: 'Preparing students for future academic challenges and lifelong success.',
    color: 'bg-[#455230]',
  },
]

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#EBEBD8] text-[#455230]">

      {/* HERO SECTION */}
      <section className="px-3 pt-28 sm:px-6 lg:px-10">
        <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[30px] bg-[#455230] lg:rounded-[45px]">

          <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full border border-[#9BA685]/20" />
          <div className="absolute -right-8 -top-20 h-72 w-72 rounded-full border border-[#9BA685]/20" />

          <div className="relative grid min-h-[620px] items-center gap-12 px-6 py-16 sm:px-10 lg:grid-cols-2 lg:px-16 lg:py-20">

            {/* Hero Content */}
            <div className="z-10">
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#9BA685]/40 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-[#9BA685]" />
                <span className="text-xs font-semibold tracking-[2px] text-[#EBEBD8]">
                  WELCOME TO KNOWLEDGE HOUSE
                </span>
              </div>

              <h1 className="max-w-2xl text-5xl font-bold leading-[1.12] tracking-tight text-[#EBEBD8] sm:text-6xl lg:text-7xl">
                Where Young Minds
                <span className="mt-2 block text-[#9BA685]">
                  Grow & Shine.
                </span>
              </h1>

              <p className="mt-7 max-w-lg text-base leading-8 text-[#EBEBD8]/75 sm:text-lg">
                Inspiring curiosity, building confidence and shaping a brighter
                future through meaningful education and lifelong learning.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  to="/admissions"
                  className="rounded-full bg-[#EBEBD8] px-8 py-4 text-sm font-bold text-[#455230] transition duration-300 hover:-translate-y-1 hover:bg-[#9BA685]"
                >
                  Explore Admissions ↗
                </Link>

                <Link
                  to="/about"
                  className="rounded-full border border-[#9BA685]/60 px-8 py-4 text-sm font-semibold text-[#EBEBD8] transition duration-300 hover:bg-[#637545]"
                >
                  Discover Our School
                </Link>
              </div>

              <div className="mt-12 flex flex-wrap gap-8 border-t border-[#9BA685]/30 pt-7">
                <div>
                  <p className="text-2xl font-bold text-[#EBEBD8]">Learn</p>
                  <p className="mt-1 text-xs tracking-wide text-[#9BA685]">With Curiosity</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#EBEBD8]">Grow</p>
                  <p className="mt-1 text-xs tracking-wide text-[#9BA685]">With Confidence</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#EBEBD8]">Shine</p>
                  <p className="mt-1 text-xs tracking-wide text-[#9BA685]">With Purpose</p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative mx-auto w-full max-w-[550px]">
              <div className="absolute -inset-4 rotate-3 rounded-[35px] bg-[#637545]" />

              <div className="relative h-[380px] overflow-hidden rounded-[30px] border-4 border-[#9BA685]/30 sm:h-[480px]">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85"
                  alt="Students learning together in a classroom"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#455230]/70 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-[#EBEBD8]/30 bg-[#455230]/80 p-5 backdrop-blur-md">
                  <p className="text-xs font-semibold tracking-[2px] text-[#9BA685]">
                    OUR BELIEF
                  </p>
                  <p className="mt-2 text-xl font-bold text-[#EBEBD8]">
                    Every child has the potential to achieve greatness.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* INTRODUCTION SECTION */}
      <section className="px-5 py-24 sm:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=85"
                alt="Children enjoying education"
                className="mt-12 h-64 w-full rounded-[25px] object-cover sm:h-80"
              />
              <img
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=85"
                alt="Students studying together"
                className="h-64 w-full rounded-[25px] object-cover sm:h-80"
              />
            </div>

            <div className="absolute -bottom-6 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl bg-[#455230] p-5 text-center shadow-xl sm:w-auto sm:min-w-[280px]">
              <p className="text-lg font-bold text-[#EBEBD8]">
                Learning Beyond Books
              </p>
              <p className="mt-1 text-sm text-[#9BA685]">
                Creating tomorrow's possibilities
              </p>
            </div>
          </div>

          <div className="pt-8 lg:pl-8">
            <p className="text-sm font-bold uppercase tracking-[3px] text-[#637545]">
              A Little About Us
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
              Education That Goes
              <span className="text-[#637545]"> Beyond Classrooms.</span>
            </h2>

            <p className="mt-7 text-base leading-8 text-[#455230]/75">
              At Knowledge House School, we believe education is more than
              memorizing lessons. It is about discovering talents, developing
              character and preparing young minds for the opportunities of
              tomorrow.
            </p>

            <p className="mt-4 text-base leading-8 text-[#455230]/75">
              Our aim is to create a supportive learning environment where
              every student feels encouraged to explore, ask questions and
              achieve their best.
            </p>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#455230] px-7 py-4 text-sm font-bold text-[#EBEBD8] transition hover:bg-[#637545]"
            >
              More About Us <span>↗</span>
            </Link>
          </div>
        </div>
      </section>


      {/* WHY CHOOSE US */}
      <section className="bg-[#9BA685]/25 px-5 py-24 sm:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[3px] text-[#637545]">
              The Knowledge House Difference
            </p>

            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
              More Than Just
              <span className="text-[#637545]"> Education.</span>
            </h2>

            <p className="mt-5 leading-8 text-[#455230]/75">
              We focus on developing confident, capable and responsible
              individuals who are ready to make a difference.
            </p>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.number}
                className="group rounded-[25px] border border-[#9BA685] bg-[#EBEBD8] p-7 transition duration-300 hover:-translate-y-2 hover:bg-[#455230]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-[#637545] group-hover:text-[#9BA685]">
                    {feature.number}
                  </span>
                  <span className="text-3xl text-[#637545] transition group-hover:scale-110 group-hover:text-[#EBEBD8]">
                    {feature.icon}
                  </span>
                </div>

                <h3 className="mt-12 text-xl font-bold text-[#455230] group-hover:text-[#EBEBD8]">
                  {feature.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#455230]/70 group-hover:text-[#EBEBD8]/75">
                  {feature.description}
                </p>

                <div className="mt-7 h-1 w-12 rounded-full bg-[#637545] transition-all duration-300 group-hover:w-full group-hover:bg-[#9BA685]" />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ACADEMIC PROGRAMS */}
      <section className="px-5 py-24 sm:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[3px] text-[#637545]">
                Explore Our Programs
              </p>

              <h2 className="mt-5 max-w-xl text-4xl font-bold sm:text-5xl">
                Learning for Every
                <span className="text-[#637545]"> Stage of Life.</span>
              </h2>
            </div>

            <Link
              to="/academics"
              className="inline-flex w-fit items-center gap-3 rounded-full border border-[#455230] px-6 py-3 text-sm font-bold transition hover:bg-[#455230] hover:text-[#EBEBD8]"
            >
              View All Programs ↗
            </Link>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {programs.map((program) => (
              <div
                key={program.number}
                className={`${program.color} group relative overflow-hidden rounded-[30px] p-8 transition duration-300 hover:-translate-y-2`}
              >
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-[#EBEBD8]/20 transition duration-500 group-hover:scale-125" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-[#EBEBD8]/70">
                      {program.number}
                    </span>
                    <span className="rounded-full border border-[#EBEBD8]/40 px-4 py-2 text-xs font-semibold text-[#EBEBD8]">
                      {program.subtitle}
                    </span>
                  </div>

                  <div className="mt-20">
                    <h3 className="text-3xl font-bold text-[#EBEBD8]">
                      {program.title}
                    </h3>

                    <p className="mt-5 min-h-20 text-sm leading-7 text-[#EBEBD8]/80">
                      {program.description}
                    </p>

                    <Link
                      to="/academics"
                      className="mt-8 inline-flex items-center gap-3 text-sm font-bold text-[#EBEBD8] transition group-hover:gap-5"
                    >
                      Explore Program <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* SCHOOL LIFE */}
      <section className="bg-[#455230] px-5 py-24 sm:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[3px] text-[#9BA685]">
                Beyond The Classroom
              </p>

              <h2 className="mt-5 max-w-xl text-4xl font-bold text-[#EBEBD8] sm:text-5xl">
                Every Day Is A
                <span className="text-[#9BA685]"> New Opportunity.</span>
              </h2>
            </div>

            <p className="max-w-sm leading-7 text-[#EBEBD8]/70">
              Learning is an adventure. Every activity is a chance to
              discover something new and create lasting memories.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            <div className="group relative h-[390px] overflow-hidden rounded-[25px] md:col-span-2">
              <img
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=85"
                alt="Students participating in school activities"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#455230]/90 via-transparent to-transparent" />
              <div className="absolute bottom-7 left-7">
                <p className="text-sm font-semibold text-[#9BA685]">
                  SCHOOL COMMUNITY
                </p>
                <h3 className="mt-2 text-3xl font-bold text-[#EBEBD8]">
                  Growing Together
                </h3>
              </div>
            </div>

            <div className="group relative h-[390px] overflow-hidden rounded-[25px]">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=85"
                alt="A bright and welcoming classroom"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#455230]/90 via-transparent to-transparent" />
              <div className="absolute bottom-7 left-7">
                <p className="text-sm font-semibold text-[#9BA685]">
                  LEARNING
                </p>
                <h3 className="mt-2 text-2xl font-bold text-[#EBEBD8]">
                  Discover More
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ADMISSION CTA */}
      <section className="px-5 py-24 sm:px-10 lg:py-32">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[35px] bg-[#637545] px-7 py-16 text-center sm:px-16 lg:py-24">

          <div className="absolute -left-20 -top-24 h-64 w-64 rounded-full border border-[#EBEBD8]/20" />
          <div className="absolute -bottom-28 -right-16 h-72 w-72 rounded-full border border-[#EBEBD8]/20" />

          <div className="relative mx-auto max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[3px] text-[#EBEBD8]/75">
              Your Child's Future Starts Here
            </p>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-[#EBEBD8] sm:text-6xl">
              Give Them A Place To Learn, Grow & Shine.
            </h2>

            <p className="mx-auto mt-6 max-w-xl leading-8 text-[#EBEBD8]/80">
              Take the first step towards an inspiring educational journey.
              Discover what makes Knowledge House School a place to grow.
            </p>

            <Link
              to="/admissions"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#EBEBD8] px-9 py-4 font-bold text-[#455230] transition duration-300 hover:-translate-y-1 hover:bg-[#9BA685]"
            >
              Start Your Admission Journey <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
