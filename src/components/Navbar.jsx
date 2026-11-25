
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router'

export default function Navbar() {
  const [visible, setVisible] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    let lastScroll = 0

    const handleScroll = () => {
      const currentScroll = window.scrollY

      if (currentScroll < 50) {
        setVisible(true)
      } else if (currentScroll > lastScroll) {
        setVisible(false)
        setMenuOpen(false)
      } else {
        setVisible(true)
      }

      lastScroll = currentScroll
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full px-3 pt-3 sm:px-6 sm:pt-5 transition-transform duration-500 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav className="mx-auto max-w-7xl rounded-[22px] border border-[#9BA685] bg-[#EBEBD8] px-4 py-3 shadow-lg sm:px-6">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#455230] text-[#EBEBD8]">
              <span className="text-lg font-extrabold">KH</span>
            </div>

            <div>
              <h1 className="text-base font-extrabold leading-tight tracking-wide text-[#455230] sm:text-lg">
                Knowledge House
              </h1>
              <p className="text-[10px] font-semibold tracking-[2px] text-[#637545] sm:text-xs">
                SCHOOL
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-[#455230] text-[#EBEBD8]'
                      : 'text-[#455230] hover:bg-[#9BA685] hover:text-[#EBEBD8]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Admission Button */}
          <div className="hidden lg:block">
            <Link
              to="/admissions"
              className="rounded-full bg-[#637545] px-5 py-3 text-sm font-bold text-[#EBEBD8] transition-all duration-300 hover:bg-[#455230]"
            >
              Apply Now →
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#455230] text-2xl text-[#EBEBD8] transition-all lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? '×' : '☰'}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`grid transition-all duration-300 lg:hidden ${
            menuOpen
              ? 'grid-rows-[1fr] opacity-100'
              : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col gap-2 pt-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-[#455230] text-[#EBEBD8]'
                        : 'text-[#455230] hover:bg-[#9BA685] hover:text-[#EBEBD8]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <Link
                to="/admissions"
                onClick={() => setMenuOpen(false)}
                className="mt-1 rounded-xl bg-[#637545] px-4 py-3 text-center font-bold text-[#EBEBD8]"
              >
                Apply Now →
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
