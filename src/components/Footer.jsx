
import { Link } from 'react-router'

export default function Footer() {
  return (
    <footer className="bg-[#455230] px-4 pb-5 pt-16 text-[#EBEBD8] sm:px-6 lg:px-10">

      <div className="mx-auto max-w-[1440px]">

        {/* Main Footer */}
        <div className="grid gap-12 border-b border-[#9BA685]/30 pb-14 sm:grid-cols-2 lg:grid-cols-4">

          {/* School Information */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EBEBD8] text-lg font-extrabold text-[#455230]">
                KH
              </div>

              <div>
                <h2 className="text-lg font-extrabold tracking-wide">
                  Knowledge House
                </h2>
                <p className="text-xs font-semibold tracking-[3px] text-[#9BA685]">
                  SCHOOL
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-xs text-sm leading-8 text-[#EBEBD8]/70">
              Inspiring young minds, building strong foundations and creating
              opportunities for a brighter tomorrow through quality education.
            </p>

            {/* Social Links */}
            <div className="mt-7 flex gap-3">
              {[
                { name: 'Facebook', link: '#' },
                { name: 'Instagram', link: '#' },
                { name: 'YouTube', link: '#' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#9BA685]/40 text-xs font-bold text-[#EBEBD8] transition duration-300 hover:border-[#EBEBD8] hover:bg-[#EBEBD8] hover:text-[#455230]"
                >
                  {social.name[0]}
                </a>
              ))}
            </div>
          </div>


          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>

            <div className="mt-7 flex flex-col gap-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Academics', path: '/academics' },
                { name: 'Admissions', path: '/admissions' },
                { name: 'Contact Us', path: '/contact' },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="w-fit text-sm text-[#EBEBD8]/70 transition hover:translate-x-1 hover:text-[#9BA685]"
                >
                  → {item.name}
                </Link>
              ))}
            </div>
          </div>


          {/* Academics */}
          <div>
            <h3 className="text-lg font-bold">Explore</h3>

            <div className="mt-7 flex flex-col gap-4">
              {[
                'Early Years',
                'Primary Education',
                'Secondary Education',
                'School Life',
                'Learning Environment',
              ].map((item) => (
                <Link
                  key={item}
                  to="/academics"
                  className="w-fit text-sm text-[#EBEBD8]/70 transition hover:translate-x-1 hover:text-[#9BA685]"
                >
                  → {item}
                </Link>
              ))}
            </div>
          </div>


          {/* Contact & Admission */}
          <div>
            <h3 className="text-lg font-bold">Get In Touch</h3>

            <p className="mt-7 text-sm leading-7 text-[#EBEBD8]/70">
              Have questions about admissions or our educational programs?
              We'd love to hear from you.
            </p>

            <Link
              to="/contact"
              className="mt-6 flex w-fit items-center gap-3 rounded-full border border-[#9BA685]/50 px-5 py-3 text-sm font-semibold transition hover:bg-[#637545]"
            >
              Contact Our School <span>↗</span>
            </Link>

            <Link
              to="/admissions"
              className="mt-4 flex w-fit items-center gap-3 rounded-full bg-[#EBEBD8] px-5 py-3 text-sm font-bold text-[#455230] transition hover:bg-[#9BA685]"
            >
              Admissions <span>↗</span>
            </Link>
          </div>

        </div>


        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-5 pt-7 text-center sm:flex-row sm:text-left">

          <p className="text-xs text-[#EBEBD8]/60">
            © {new Date().getFullYear()} Knowledge House School. All Rights Reserved.
          </p>

          <div className="flex items-center gap-5 text-xs text-[#EBEBD8]/60">
            <Link to="/" className="transition hover:text-[#9BA685]">
              Home
            </Link>

            <Link to="/contact" className="transition hover:text-[#9BA685]">
              Contact
            </Link>

            <span className="text-[#9BA685]">
              Learn • Grow • Shine
            </span>
          </div>

        </div>

      </div>
    </footer>
  )
}
