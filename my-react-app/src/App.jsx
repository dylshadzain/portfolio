import { useEffect, useState } from 'react'

import cabinImg from './assets/riverside-cabin.jpg'
import meadowImg from './assets/meadow-home.jpg'
import schoolImg from './assets/vago-school.jpg'
import highRiseImg from './assets/high-rise.jpg'
import redshiftImg from './assets/redshift-walk.jpg'
import jammuImg from './assets/jammu-habitat.jpg'

const projects = [
  {
    id: 1,
    title: 'Perched Cabin',
    category: 'Residential',
    year: '2020',
    image: cabinImg,
    position: 'top-[6%] left-[4%]',
    rotate: '-rotate-3',
  },
  {
    id: 2,
    title: 'Meadow Home',
    category: 'Residential',
    year: '2021',
    image: meadowImg,
    position: 'top-[58%] left-[18%]',
    rotate: 'rotate-2',
  },
  {
    id: 3,
    title: 'Vago School',
    category: 'Institutional',
    year: '2022',
    image: schoolImg,
    position: 'top-[10%] right-[22%]',
    rotate: '-rotate-2',
  },
  {
    id: 4,
    title: 'Halo Meridian',
    category: 'Commercial',
    year: '2023',
    image: highRiseImg,
    position: 'top-[68%] right-[8%]',
    rotate: 'rotate-3',
  },
  {
    id: 5,
    title: 'Redshift Walk',
    category: 'Landscape',
    year: '2023',
    image: redshiftImg,
    position: 'top-[40%] right-[38%]',
    rotate: '-rotate-6',
  },
  {
    id: 6,
    title: 'Jammu Habitat Centre',
    category: 'Cultural',
    year: '2023',
    image: jammuImg,
    position: 'top-[78%] left-[42%]',
    rotate: 'rotate-6',
  },
]

export default function App() {

  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)

  useEffect(() => {

    const moveCursor = e => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener('mousemove', moveCursor)

    const hoverables = document.querySelectorAll('a, button, img')

    hoverables.forEach(el => {
      el.addEventListener('mouseenter', () => setHovering(true))
      el.addEventListener('mouseleave', () => setHovering(false))
    })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }

  }, [])

  return (
    <div className="cursor-none relative min-h-screen overflow-hidden bg-[#A7B4CF] text-black font-['Inter']">

      {/* CUSTOM CURSOR */}
      <div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      >

        <div
          className={[
            'relative w-8 h-8 transition-all duration-300 ease-out',
            hovering ? 'rotate-45 scale-125' : 'rotate-0 scale-100',
          ].join(' ')}
        >

          {/* GROWING CIRCLE */}
          <div className="absolute inset-0 flex items-center justify-center">

            <div
              className={[
                'rounded-full border border-black transition-all duration-700 ease-out',
                hovering
                  ? 'w-0 h-0 opacity-0'
                  : 'w-8 h-8 opacity-100 animate-pulse',
              ].join(' ')}
            />

          </div>

          {/* HORIZONTAL */}
          <span className="absolute top-1/2 left-0 w-full h-[2px] bg-black -translate-y-1/2" />

          {/* VERTICAL */}
          <span className="absolute left-1/2 top-0 h-full w-[2px] bg-black -translate-x-1/2" />

        </div>

      </div>

      {/* GRID */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <div className="grid grid-cols-4 h-full">
          <div className="border-r border-black/20" />
          <div className="border-r border-black/20" />
          <div className="border-r border-black/20" />
          <div className="border-r border-black/20" />
        </div>
      </div>

      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-8 py-6">

        <div className="text-3xl font-black uppercase tracking-tight">
          DZAIN.ER STUDIO
        </div>

        <div className="flex flex-col gap-1 absolute left-1/2 -translate-x-1/2">
          <span className="w-14 h-[2px] bg-black block" />
          <span className="w-14 h-[2px] bg-black block" />
        </div>

        <nav className="flex gap-8 text-sm uppercase tracking-[0.2em]">
          <a href="#works" className="hover:opacity-60 transition-opacity">
            Works
          </a>

          <a href="#about" className="hover:opacity-60 transition-opacity">
            About
          </a>

          <a href="#contact" className="hover:opacity-60 transition-opacity">
            Contact
          </a>
        </nav>

      </header>

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden px-6 pt-32">

        {/* FLOATING IMAGES */}
        {projects.map(project => (
          <div
            key={project.id}
            className={`absolute w-[180px] md:w-[220px] ${project.position} ${project.rotate} z-20`}
          >

            <div className="bg-[#EFECDD] p-3 shadow-2xl">

              <div className="flex items-center justify-between mb-2 text-[10px] uppercase font-bold">
                <span>[{project.category.slice(0, 2)}]</span>
                <span>{project.id.toString().padStart(2, '0')}</span>
              </div>

              <img
                src={project.image}
                alt={project.title}
                className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />

            </div>

          </div>
        ))}

        {/* MAIN TYPOGRAPHY */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">

          <div className="leading-[0.78] uppercase text-center font-['Anton'] tracking-[-0.06em]">

            <h1 className="text-[22vw] leading-[0.82]">
              SPACE
            </h1>

            <h1 className="text-[22vw] leading-[0.82]">
              FORM
            </h1>

            <h1 className="text-[22vw] leading-[0.82]">
              LIGHT
            </h1>

          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="relative z-10 px-6 py-40 border-t border-black/20"
      >

        <div className="max-w-5xl">

          <p className="uppercase tracking-[0.3em] text-xs mb-10">
            Studio Manifesto
          </p>

          <h2 className="font-['Anton'] text-[8vw] leading-[0.9] uppercase tracking-tight max-w-6xl">
            Designing atmospheric spaces rooted in climate, terrain, and culture.
          </h2>

          <div className="grid md:grid-cols-2 gap-16 mt-20">

            <p className="text-sm leading-loose uppercase tracking-wide">
              dzain.er studio is an architecture and design practice
              exploring spatial narratives across multiple scales —
              from intimate riverside retreats to institutional and
              cultural infrastructures.
            </p>

            <p className="text-sm leading-loose uppercase tracking-wide">
              The studio investigates contextual form-making,
              bioclimatic systems, landscape integration,
              and architectural atmosphere through contemporary
              spatial strategies.
            </p>

          </div>

        </div>

      </section>

      {/* WORKS */}
      <section
        id="works"
        className="relative z-10 px-6 py-40 border-t border-black/20"
      >

        <div className="flex items-end justify-between mb-24">

          <h2 className="font-['Anton'] text-[12vw] leading-none uppercase tracking-tight">
            Works
          </h2>

          <span className="uppercase text-xs tracking-[0.3em]">
            {projects.length} Projects
          </span>

        </div>

        <div className="space-y-40">

          {projects.map((project, index) => (
            <article
              key={project.id}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >

              <div
                className={[
                  'overflow-hidden',
                  index % 2 === 1 ? 'lg:order-2' : '',
                ].join(' ')}
              >

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[75vh] object-cover grayscale hover:grayscale-0 hover:scale-[1.03] transition-all duration-700"
                />

              </div>

              <div className="space-y-8">

                <p className="uppercase tracking-[0.3em] text-xs">
                  {project.category} / {project.year}
                </p>

                <h3 className="font-['Anton'] text-[6vw] leading-[0.9] uppercase tracking-tight">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-3 pt-6">

                  <span className="border border-black px-4 py-2 text-xs uppercase tracking-widest">
                    Contextual
                  </span>

                  <span className="border border-black px-4 py-2 text-xs uppercase tracking-widest">
                    Experimental
                  </span>

                  <span className="border border-black px-4 py-2 text-xs uppercase tracking-widest">
                    Spatial
                  </span>

                </div>

              </div>

            </article>
          ))}

        </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative z-10 px-6 pt-40 pb-20 border-t border-black/20"
      >

        <p className="uppercase tracking-[0.3em] text-xs mb-8">
          Contact
        </p>

        <a
          href="mailto:dylshad.zain@gmail.com"
          className="block font-['Anton'] text-[10vw] leading-[0.9] uppercase tracking-tight hover:opacity-60 transition-opacity break-all"
        >
          DYLSHAD.ZAIN
          <br />
          @GMAIL.COM
        </a>

        <div className="flex justify-between items-end mt-32 text-xs uppercase tracking-[0.2em]">

          <span>
            Kerala / India
          </span>

          <span>
            {new Date().getFullYear()} dzain.er studio
          </span>

        </div>

      </section>

    </div>
  )
}