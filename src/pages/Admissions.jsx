
import { Link } from 'react-router'

const eligibility = [
  {
    number: '01',
    title: 'Early Years',
    age: 'Ages 3–5',
    description:
      'For young learners beginning their educational journey. Children should be ready to explore, interact and develop basic learning skills.',
    requirements: ['Age-appropriate development', 'Interest in learning through activities'],
  },
  {
    number: '02',
    title: 'Primary School',
    age: 'Ages 5–11',
    description:
      'For children ready to develop essential academic skills, communication, creativity and confidence.',
    requirements: ['Previous school record (if applicable)', 'Age-appropriate grade placement'],
  },
  {
    number: '03',
    title: 'Secondary School',
    age: 'Ages 11–16',
    description:
      'For students looking to strengthen their knowledge and prepare for future academic opportunities.',
    requirements: ['Previous academic records', 'Grade placement assessment if required'],
  },
]

const documents = [
  'Student birth certificate or B-Form',
  'Recent passport-size photographs',
  'Previous school leaving certificate (if applicable)',
  'Previous academic results or report card (if applicable)',
  'Parent or guardian CNIC copy',
]

const steps = [
  {
    number: '01',
    title: 'Visit Our School',
    description:
      'Parents and guardians can visit the school to explore the learning environment and meet our team.',
  },
  {
    number: '02',
    title: 'Discuss Admission',
    description:
      'Talk with our admission team about available classes, eligibility, requirements and school policies.',
  },
  {
    number: '03',
    title: 'Submit Documents',
    description:
      'Provide the required student and parent documents for admission review.',
  },
  {
    number: '04',
    title: 'Assessment & Review',
    description:
      'The school may review previous academic records or arrange an age-appropriate assessment if necessary.',
  },
  {
    number: '05',
    title: 'Admission Confirmation',
    description:
      'After the admission decision, the school will guide parents through the remaining enrollment process.',
  },
]

export default function Admissions() {
  return (
    <main className="overflow-hidden bg-[#EBEBD8] text-[#455230]">

      {/* HERO SECTION */}
      <section className="px-3 pt-28 sm:px-6 lg:px-10">
        <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[30px] bg-[#455230] lg:rounded-[45px]">

          <div className="absolute -right-20 -top-24 h-96 w-96 rounded-full border border-[#9BA685]/20" />
          <div className="absolute -right-5 -top-10 h-72 w-72 rounded-full border border-[#9BA685]/20" />

          <div className="relative grid items-center gap-12 px-7 py-16 sm:px-12 lg:grid-cols-2 lg:px-20 lg:py-24">

            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-[#9BA685]/40 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-[#9BA685]" />
                <span className="text-xs font-semibold tracking-[2px] text-[#EBEBD8]">
                  ADMISSIONS AT KNOWLEDGE HOUSE
                </span>
              </div>

              <h1 className="mt-8 text-5xl font-bold leading-[1.12] text-[#EBEBD8] sm:text-6xl lg:text-7xl">
                A Brighter
                <span className="block text-[#9BA685]">Future Begins</span>
                Here.
              </h1>

              <p className="mt-7 max-w-lg text-base leading-8 text-[#EBEBD8]/75 sm:text-lg">
                Every great journey starts with a first step. Discover how
                your child can become part of the Knowledge House School
                learning community.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="rounded-full bg-[#EBEBD8] px-8 py-4 text-sm font-bold text-[#455230] transition hover:-translate-y-1 hover:bg-[#9BA685]"
                >
                  Contact Admissions ↗
                </Link>

                <a
                  href="#admission-process"
                  className="rounded-full border border-[#9BA685]/50 px-8 py-4 text-sm font-semibold text-[#EBEBD8] transition hover:bg-[#637545]"
                >
                  How It Works ↓
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[530px]">
              <div className="absolute -inset-3 rotate-3 rounded-[30px] bg-[#637545]" />

              <div className="relative h-[380px] overflow-hidden rounded-[25px] border-4 border-[#9BA685]/30 sm:h-[460px]">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85"
                  alt="Students learning in a classroom"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#455230]/90 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-[#EBEBD8]/20 bg-[#455230]/85 p-5 backdrop-blur-md">
                  <p className="text-xs font-bold tracking-[2px] text-[#9BA685]">
                    YOUR CHILD'S JOURNEY
                  </p>
                  <p className="mt-2 text-xl font-bold text-[#EBEBD8]">
                    Learn Today. Lead Tomorrow.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* INTRODUCTION */}
      <section className="px-5 py-24 sm:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          <div>
            <p className="text-sm font-bold uppercase tracking-[3px] text-[#637545]">
              Welcome Future Students
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
              Find The Right
              <span className="text-[#637545]"> Place To Grow.</span>
            </h2>

            <p className="mt-7 leading-8 text-[#455230]/75">
              Choosing a school is an important decision for every family.
              At Knowledge House School, we aim to provide an environment
              where students can develop academically, socially and personally.
            </p>

            <p className="mt-4 leading-8 text-[#455230]/75">
              We welcome parents to learn about our educational approach,
              explore our programs and discuss the best class placement
              for their children.
            </p>
          </div>

          <div className="rounded-[30px] bg-[#9BA685]/30 p-7 sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[2px] text-[#637545]">
              Our Admission Philosophy
            </p>

            <h3 className="mt-5 text-3xl font-bold">
              Every Child Deserves An Opportunity.
            </h3>

            <p className="mt-5 leading-8 text-[#455230]/75">
              We believe every student has unique abilities and potential.
              Our goal is to understand each child's educational needs
              and help them find the right path forward.
            </p>

            <div className="mt-8 border-t border-[#637545]/30 pt-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#455230] text-xl text-[#EBEBD8]">
                  ✦
                </div>
                <div>
                  <p className="font-bold">A Welcoming Environment</p>
                  <p className="mt-1 text-sm text-[#455230]/70">
                    A supportive start to a new journey.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ELIGIBILITY */}
      <section className="bg-[#9BA685]/25 px-5 py-24 sm:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[3px] text-[#637545]">
              Find Your Class
            </p>

            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
              Who Can
              <span className="text-[#637545]"> Apply?</span>
            </h2>

            <p className="mt-5 leading-8 text-[#455230]/75">
              Explore our educational stages and understand which level
              may be appropriate for your child.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {eligibility.map((item, index) => (
              <div
                key={item.number}
                className="group rounded-[28px] border border-[#9BA685] bg-[#EBEBD8] p-8 transition duration-300 hover:-translate-y-2 hover:bg-[#455230]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-[#637545] group-hover:text-[#9BA685]">
                    {item.number}
                  </span>

                  <span className="rounded-full bg-[#9BA685]/30 px-4 py-2 text-xs font-bold text-[#455230] group-hover:bg-[#637545] group-hover:text-[#EBEBD8]">
                    {item.age}
                  </span>
                </div>

                <h3 className="mt-12 text-2xl font-bold group-hover:text-[#EBEBD8]">
                  {item.title}
                </h3>

                <p className="mt-5 min-h-24 text-sm leading-7 text-[#455230]/75 group-hover:text-[#EBEBD8]/75">
                  {item.description}
                </p>

                <div className="mt-7 border-t border-[#9BA685]/50 pt-6 group-hover:border-[#9BA685]/30">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#637545] group-hover:text-[#9BA685]">
                    General Guidance
                  </p>

                  <ul className="mt-4 space-y-3">
                    {item.requirements.map((requirement) => (
                      <li
                        key={requirement}
                        className="flex items-start gap-3 text-sm text-[#455230]/75 group-hover:text-[#EBEBD8]/75"
                      >
                        <span className="font-bold text-[#637545] group-hover:text-[#9BA685]">
                          ✓
                        </span>
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm leading-7 text-[#455230]/70">
            Age ranges are general guidance only. Final class placement
            depends on the school's actual admission policy, available seats
            and assessment where applicable. Please confirm eligibility
            with the school.
          </p>

        </div>
      </section>


      {/* REQUIRED DOCUMENTS */}
      <section className="px-5 py-24 sm:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          <div>
            <p className="text-sm font-bold uppercase tracking-[3px] text-[#637545]">
              Be Prepared
            </p>

            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
              Documents To
              <span className="text-[#637545]"> Keep Ready.</span>
            </h2>

            <p className="mt-6 leading-8 text-[#455230]/75">
              To make the admission discussion easier, parents can prepare
              the following documents. The school will confirm which
              documents are required for their child's particular class.
            </p>

            <div className="mt-8 rounded-[25px] bg-[#455230] p-7 text-[#EBEBD8]">
              <div className="flex items-center gap-3">
                <span className="text-2xl text-[#9BA685]">✦</span>
                <h3 className="text-lg font-bold">A Helpful Tip For Parents</h3>
              </div>

              <p className="mt-4 text-sm leading-7 text-[#EBEBD8]/75">
                Keep copies of your child's academic records and
                identification documents ready before visiting the school.
                This can help make the admission process smoother.
              </p>
            </div>
          </div>

          <div className="rounded-[30px] border border-[#9BA685] bg-[#9BA685]/20 p-7 sm:p-10">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold">Document Checklist</h3>
              <span className="rounded-full bg-[#455230] px-4 py-2 text-xs font-bold text-[#EBEBD8]">
                05 Items
              </span>
            </div>

            <div className="mt-8 space-y-5">
              {documents.map((document, index) => (
                <div key={document} className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#455230] text-sm font-bold text-[#EBEBD8]">
                    {index + 1}
                  </div>

                  <p className="pt-1 text-sm font-medium leading-6 text-[#455230]">
                    {document}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-9 border-t border-[#9BA685] pt-6">
              <p className="text-xs leading-6 text-[#455230]/70">
                This is a general preparation list, not a confirmed
                mandatory document list. Please contact the school
                for its official requirements.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* ADMISSION PROCESS */}
      <section
        id="admission-process"
        className="bg-[#455230] px-5 py-24 sm:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[3px] text-[#9BA685]">
              Your Journey Starts Here
            </p>

            <h2 className="mt-5 text-4xl font-bold text-[#EBEBD8] sm:text-5xl">
              How Does Admission
              <span className="text-[#9BA685]"> Work?</span>
            </h2>

            <p className="mt-5 leading-8 text-[#EBEBD8]/70">
              Here is a simple overview of how parents can explore
              admission at Knowledge House School.
            </p>
          </div>

          <div className="relative mx-auto mt-16 max-w-4xl">
            <div className="absolute bottom-10 left-[27px] top-10 hidden w-px bg-[#9BA685]/40 sm:block" />

            <div className="space-y-7">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="relative flex gap-5 rounded-[22px] border border-[#9BA685]/25 bg-[#637545]/30 p-6 transition hover:bg-[#637545]/60 sm:gap-8 sm:p-8"
                >
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#EBEBD8] text-sm font-extrabold text-[#455230]">
                    {step.number}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#EBEBD8]">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#EBEBD8]/70">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>


      {/* PARENT INFORMATION */}
      <section className="px-5 py-24 sm:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-8 lg:grid-cols-2">

            <div className="rounded-[30px] bg-[#9BA685]/30 p-8 sm:p-10">
              <span className="text-3xl">✦</span>

              <h3 className="mt-6 text-2xl font-bold">
                Before You Visit
              </h3>

              <p className="mt-5 leading-8 text-[#455230]/75">
                We encourage parents to contact the school before visiting
                so they can learn about class availability, admission
                requirements and suitable visiting arrangements.
              </p>

              <Link
                to="/contact"
                className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#455230] px-6 py-3 text-sm font-bold text-[#EBEBD8] transition hover:bg-[#637545]"
              >
                Contact The School ↗
              </Link>
            </div>

            <div className="rounded-[30px] border border-[#9BA685] p-8 sm:p-10">
              <span className="text-3xl">✧</span>

              <h3 className="mt-6 text-2xl font-bold">
                What Should Parents Know?
              </h3>

              <ul className="mt-6 space-y-4 text-sm leading-7 text-[#455230]/75">
                <li>✓ Admission is subject to available seats.</li>
                <li>✓ Class placement depends on age and academic background.</li>
                <li>✓ The school may conduct an assessment where required.</li>
                <li>✓ Parents should confirm the current fee structure directly with the school.</li>
                <li>✓ Final admission decisions are made by the school.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>


      {/* FINAL CTA */}
      <section className="px-4 pb-24 sm:px-8 lg:pb-32">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[35px] bg-[#637545] px-7 py-16 text-center sm:px-16 lg:py-24">

          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full border border-[#EBEBD8]/20" />
          <div className="absolute -bottom-28 -right-20 h-72 w-72 rounded-full border border-[#EBEBD8]/20" />

          <div className="relative mx-auto max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[3px] text-[#EBEBD8]/75">
              Take The First Step
            </p>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-[#EBEBD8] sm:text-6xl">
              Let's Begin Your Child's Journey Together.
            </h2>

            <p className="mx-auto mt-6 max-w-xl leading-8 text-[#EBEBD8]/80">
              Have questions about classes, eligibility or admission?
              Get in touch with our school team and let us help you.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="rounded-full bg-[#EBEBD8] px-8 py-4 text-sm font-bold text-[#455230] transition hover:-translate-y-1 hover:bg-[#9BA685]"
              >
                Talk To Our Team ↗
              </Link>

              <Link
                to="/about"
                className="rounded-full border border-[#EBEBD8]/50 px-8 py-4 text-sm font-semibold text-[#EBEBD8] transition hover:bg-[#455230]"
              >
                Discover Our School
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
