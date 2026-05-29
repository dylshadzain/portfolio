import { useEffect, useState, useRef } from 'react'

// --- FULL SIZE IMAGES (For the Works section) ---
import cabinImg from './assets/riverside-cabin.jpg'
import meadowImg from './assets/meadow-home.jpg'
import schoolImg from './assets/vago-school.jpg'
import highRiseImg from './assets/high-rise.jpg'
import redshiftImg from './assets/redshift-walk.jpg'
import jammuImg from './assets/jammu-habitat.jpg'

// --- OPTIMIZED THUMBNAILS (For the initial floating previews) ---
import cabinThumb from './assets/riverside-cabin_thumb.jpg'
import meadowThumb from './assets/meadow-home_thumb.jpg'
import schoolThumb from './assets/vago-school_thumb.jpg'
import highRiseThumb from './assets/high-rise_thumb.jpg'
import redshiftThumb from './assets/redshift-walk_thumb.jpg'
import jammuThumb from './assets/jammu-habitat_thumb.jpg'

const projects = [
  {
    id: 1,
    title: 'Perched Cabin',
    category: 'Residential',
    year: '2020',
    location: 'Munnar',
    fullImage: cabinImg,
    thumbImage: cabinThumb,
    rotate: 'md:-rotate-3 -rotate-1',
    minimalHook: 'An elevated sanctuary maximizing panoramic lake views through micro-housing efficiency.',
    subTitle: 'Essential Living, Amplified Nature',
    description: 'A cozy, elevated sanctuary designed to meet essential lifestyle needs while maximizing views of the lake and surrounding landscape.',
    extraDetails: [
      'Minimal efficient living focusing on maximum utility inside small footprints.',
      'Structural base utilizes RCC piles driven down into native stone foundations.',
      'Truss architecture dynamically generated using custom adaptive scripts.'
    ]
  },
  {
    id: 2,
    title: 'Meadow Home',
    category: 'Residential',
    year: '2021',
    location: 'Pullikanam',
    fullImage: meadowImg,
    thumbImage: meadowThumb,
    rotate: 'md:rotate-6 rotate-2',
    minimalHook: 'Volumetric carving over natural site contours to seamlessly zone public and private life.',
    subTitle: 'Ecology Shapes Continuity',
    description: 'Designed features clear public and private divisions carved out to fit naturally with contours, integrating an open architecture studio.',
    extraDetails: [
      'Pure cuboid volume carved out over natural site contours to distribute spaces cleanly.',
      'Summer breezes collect crisp air off the adjacent natural pond automatically.',
      'Features custom programmatic areas including an active standalone design studio.'
    ]
  },
  {
    id: 3,
    title: 'Vago School',
    category: 'Institutional',
    year: '2022',
    location: 'Vagamon',
    fullImage: schoolImg,
    thumbImage: schoolThumb,
    rotate: 'md:-rotate-2 -rotate-3',
    minimalHook: 'Replacing rigid classrooms with kinetic trapezoidal blocks to spark sensory childhood discovery.',
    subTitle: 'Building as a 3rd Teacher',
    description: 'Replacing rigid traditional blocks with flexible, collaborative environments that adapt fluidly to diverse active learning styles.',
    extraDetails: [
      'Trapezoidal layouts challenge rigid rows, amplifying overall inner sightlines.',
      'Form comprised of offset vertical blocks linked seamlessly via exterior bridges.',
      'Tactile surfaces are optimized to catch developing sensory pathways early.'
    ]
  },
  {
    id: 4,
    title: 'Halo Meridian',
    category: 'Commercial / Residential',
    year: '2023',
    location: 'Kakkanad',
    fullImage: highRiseImg,
    thumbImage: highRiseThumb,
    rotate: 'md:rotate-3 rotate-1',
    minimalHook: 'A 12-story vertical urban nexus breaking concrete monotony with biophilic social voids.',
    subTitle: 'Carving Spatial Dialogue',
    description: 'A multi-tier high-rise blending retail and residential programs, counteracted by open environmental vertical gardens.',
    extraDetails: [
      'Deep micro-climatic voids open the main shell to counter concrete isolation.',
      'Staggered window structural placements shatter rigid visual monotony completely.',
      'Concrete skin textured through unique algorithmic surface templates.'
    ]
  },
  {
    id: 5,
    title: 'Redshift Walk',
    category: 'Landscape',
    year: '2023',
    location: 'Vasco, Goa',
    fullImage: redshiftImg,
    thumbImage: redshiftThumb,
    rotate: 'md:-rotate-4 -rotate-1',
    minimalHook: 'Ecological master plan integrating water filtration bioswales with community recreation lines.',
    subTitle: 'Ecological Restoration',
    description: 'Comprehensive redevelopment infrastructure plan that tightly integrates local restoration with functional civic nodes.',
    extraDetails: [
      'Integrates bioswales directly along trail bounds to filter runtime impurities.',
      'Introduces structural micro-economies by inserting active pisciculture nodes.',
      'Interlinks local community access through continuous low-impact boardwalk loops.'
    ]
  },
  {
    id: 6,
    title: 'Jammu Habitat Centre',
    category: 'Cultural',
    year: '2023',
    location: 'Jammu',
    fullImage: jammuImg,
    thumbImage: jammuThumb,
    rotate: 'md:rotate-2 rotate-3',
    minimalHook: 'Fusing vernacular Kashmiri architectural idioms with contemporary public infrastructures.',
    subTitle: 'Civic & Cultural Infrastructure',
    description: 'An award-winning multifunctional hub proposed along the river, linking historic zones to the developing modern landscape.',
    extraDetails: [
      'Recognized with the first-class distinction Kerala Architecture Thesis Award.',
      'Establishes an expressive urban bridge layout across natural water borders.',
      'Houses versatile exhibition zones, public theaters, and structural media hubs.'
    ]
  }
]

export default function App() {
  const [expandedProjectId, setExpandedProjectId] = useState(null)
  const [gradientColor, setGradientColor] = useState('cyan')
  const cursorRef = useRef(null)

  useEffect(() => {
    const isHoverable = window.matchMedia('(hover: hover)').matches
    if (!isHoverable) return

    const colorSpectrum = ['cyan', 'lime', 'yellow', 'magenta']
    let colorIndex = 0

    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
        colorIndex = (colorIndex + 1) % colorSpectrum.length
        setGradientColor(colorSpectrum[colorIndex])
      }
    }
    window.addEventListener('mousemove', moveCursor)

    const handleMouseEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.add('cursor-hover-active')
      }
    }

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.remove('cursor-hover-active')
      }
    }

    const targetElements = document.querySelectorAll('a, button, .image-container')
    targetElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      targetElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [expandedProjectId])

  const handleScroll = (e, id) => {
    e.preventDefault()
    const target = document.getElementById(`project-${id}`)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const toggleExpand = (id) => {
    setExpandedProjectId(prevId => (prevId === id ? null : id))
    setTimeout(() => {
      const target = document.getElementById(`project-${id}`)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 150)
  }

  return (
    <div className="md:cursor-none relative min-h-screen overflow-x-hidden bg-[#A7B4CF] text-black font-['Inter'] scroll-smooth select-none">

      {/* CUSTOM CURSOR WITH RESPONSIVE COLORED TRAIL */}
      <div
        id="custom-cursor"
        ref={cursorRef}
        className="hidden md:block fixed top-0 left-0 z-[9999] pointer-events-none will-change-transform"
        style={{ transform: 'translate3d(0px, 0px, 0)' }}
      >
        <div className="cursor-core relative w-8 h-8 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-out">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* The primary pulsed outline */}
            <div className="w-8 h-8 rounded-full border border-black animate-pulse transition-all duration-300 opacity-100" />
            
            {/* The trail that changes color - visible on hover over dynamic elements */}
            <div
              className="absolute -inset-1 rounded-full opacity-0 scale-50 transition-all duration-700 blur-[2px] cursor-trail"
              style={{
                boxShadow: `0 0 10px ${gradientColor}`,
                border: `2px solid ${gradientColor}`
              }}
            />
          </div>
          <span className="absolute top-1/2 left-0 w-full h-[2px] bg-black -translate-y-1/2" />
          <span className="absolute left-1/2 top-0 h-full w-[2px] bg-black -translate-x-1/2" />
        </div>
      </div>

      <style>{`
        .cursor-hover-active .cursor-core {
          transform: scale(1.25) rotate(45deg) !important;
        }
        .cursor-hover-active .cursor-trail {
          opacity: 0.8 !important;
          scale: 1.1 !important;
        }
        .cursor-hover-active .cursor-core .rounded-full.animate-pulse {
          width: 0px !important;
          height: 0px !important;
          opacity: 0 !important;
        }
        .technical-scroll::-webkit-scrollbar {
          width: 3px;
        }
        .technical-scroll::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.05);
        }
        .technical-scroll::-webkit-scrollbar-thumb {
          background: rgba(0,0,0,0.15);
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>

      {/* BACKGROUND LINES */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <div className="grid grid-cols-2 md:grid-cols-4 h-full">
          <div className="border-r border-black/20" />
          <div className="border-r border-black/20 hidden md:block" />
          <div className="border-r border-black/20 hidden md:block" />
          <div className="border-r border-black/20" />
        </div>
      </div>

      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-4 md:px-8 py-4 md:py-6 mix-blend-difference text-white">
        <div className="text-xl md:text-3xl font-black uppercase tracking-tight">DZAIN.ER STUDIO</div>
        <nav className="flex gap-4 md:gap-8 text-xs md:text-sm uppercase tracking-[0.2em]">
          <a href="#works" className="hover:opacity-60 transition-opacity">Works</a>
          <a href="#about" className="hover:opacity-60 transition-opacity">About</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="relative h-screen flex flex-col justify-between px-4 md:px-6 pt-24 pb-12 overflow-hidden">
        
        {/* HERO TYPOGRAPHY */}
        <div className="my-auto relative z-10 w-full select-none pointer-events-none opacity-95 text-center leading-[0.8] uppercase font-['Anton'] tracking-[-0.03em]">
          <h1 className="text-[16vw] md:text-[10vw]">SPACE</h1>
          <h1 className="text-[16vw] md:text-[10vw]">FORM</h1>
          <h1 className="text-[16vw] md:text-[10vw]">LIGHT</h1>
        </div>

        {/* HORIZONTALLY ALIGNED FLOATING PREVIEW CARDS */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 mt-4">
          <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-4 md:gap-6 lg:gap-8">
            {projects.map(project => (
              <a
                key={project.id}
                href={`#project-${project.id}`}
                onClick={(e) => handleScroll(e, project.id)}
                className={`block w-[28%] sm:w-[22%] md:w-full max-w-[150px] image-container ${project.rotate} transition-transform duration-300 hover:scale-110 hover:rotate-0 hover:z-30 active:scale-95`}
              >
                <div className="bg-[#EFECDD] p-1.5 md:p-2.5 shadow-md md:shadow-xl">
                  <div className="flex items-center justify-between mb-1 text-[7px] md:text-[9px] uppercase font-bold text-black/50">
                    <span>{project.location.slice(0, 3)}</span>
                    <span>#{project.id}</span>
                  </div>
                  <img
                    src={project.thumbImage}
                    alt={project.title}
                    loading="eager" 
                    className="w-full aspect-[3/4] object-cover grayscale md:hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative z-10 px-4 md:px-6 py-24 md:py-32 border-t border-black/20 bg-[#A7B4CF]">
        <div className="max-w-5xl">
          <p className="uppercase tracking-[0.3em] text-[10px] md:text-xs mb-6">Studio Manifesto</p>
          <h2 className="font-['Anton'] text-[11vw] md:text-[8vw] leading-[0.95] md:leading-[0.9] uppercase tracking-tight max-w-6xl">
            Designing atmospheric spaces rooted in climate, terrain, and culture.
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 mt-12 md:mt-16">
            <p className="text-xs md:text-sm leading-loose uppercase tracking-wide">
              dzain.er studio is an architecture and design practice exploring spatial narratives across multiple scales — from intimate riverside retreats to institutional and cultural infrastructures.
            </p>
            <p className="text-xs md:text-sm leading-loose uppercase tracking-wide">
              The studio investigates contextual form-making, bioclimatic systems, landscape integration, and architectural atmosphere through contemporary spatial strategies.
            </p>
          </div>
        </div>
      </section>

      {/* WORKS */}
      <section id="works" className="relative z-10 px-4 md:px-6 py-16 border-t border-black/20 bg-[#A7B4CF]">
        <div className="flex items-end justify-between mb-12">
          <h2 className="font-['Anton'] text-[16vw] md:text-[10vw] leading-none uppercase tracking-tight">Works</h2>
          <span className="uppercase text-[10px] md:text-xs tracking-[0.3em]">{projects.length} Projects</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12">
          {projects.map((project) => {
            const isExpanded = expandedProjectId === project.id;
            
            return (
              <article 
                key={project.id} 
                id={`project-${project.id}`} 
                className={`transition-all duration-500 ease-in-out scroll-mt-24 border-t border-black/20 pt-6 pb-6 flex flex-col overflow-hidden max-h-[85vh] ${
                  isExpanded 
                    ? 'bg-gradient-to-b from-[#A7B4CF] via-[#9AA9C4] to-[#8D9DBA] px-4 shadow-lg rounded-xs' // REDUCED OVERALL RADIUS TO rounded-xs
                    : 'hover:bg-black/5 px-1'
                }`}
              >
                <div className="flex flex-col gap-3 overflow-hidden h-full">
                  
                  {/* METADATA BAR */}
                  <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.15em] border-b border-black/10 pb-2 shrink-0">
                    <div>
                      <span className="font-bold mr-1">[{project.id.toString().padStart(2, '0')}]</span>
                      {project.category} <span className="hidden sm:inline">&mdash; {project.location}</span>
                    </div>
                    <button 
                      onClick={() => toggleExpand(project.id)}
                      className="font-bold underline hover:opacity-50 transition-opacity md:cursor-none shrink-0"
                    >
                      {isExpanded ? '[ Close ]' : '[ Strategy ]'}
                    </button>
                  </div>

                  {/* DISPLAY PORT */}
                  <div 
                    onClick={() => toggleExpand(project.id)}
                    className={`image-container overflow-hidden group md:cursor-none relative transition-all duration-500 shrink-0 w-full bg-black/5 flex items-center justify-center ${
                      isExpanded ? 'h-auto max-h-[30vh] rounded-xl' : 'h-[34vh] rounded-none' // REDUCED IMAGE CONTAINER RADIUS TO rounded-xl
                    }`}
                  >
                    <img
                      src={project.fullImage}
                      alt={project.title}
                      loading="lazy"
                      className={`transition-all duration-500 ${
                        isExpanded 
                          ? 'w-auto h-auto max-w-full max-h-[30vh] object-contain rounded-xl' // REDUCED IMAGE RADIUS TO rounded-xl
                          : 'w-full h-full object-cover grayscale md:group-hover:grayscale-0 md:group-hover:scale-[1.01] rounded-none'
                      }`}
                    />
                    {!isExpanded && (
                      <div className="absolute inset-0 bg-black/5 flex items-end justify-center p-2">
                        <span className="bg-black text-white text-[8px] uppercase tracking-widest px-2 py-1 opacity-90 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
                          Analyze
                        </span>
                      </div>
                    )}
                  </div>

                  {/* DETAILS TEXT WINDOW */}
                  <div className="flex flex-col overflow-hidden shrink min-h-0">
                    <h3 className="font-['Anton'] uppercase tracking-tight leading-none text-[6vw] md:text-[3vw] mb-1.5 shrink-0">
                      {project.title}
                    </h3>
                    
                    <div className="flex flex-col gap-2 overflow-y-auto technical-scroll pr-1">
                      
                      {/* LEVEL 2: COMPACT HOOK */}
                      <div className="shrink-0">
                        <p className="text-[11px] tracking-wider font-medium uppercase leading-relaxed text-black/90">
                          {project.minimalHook}
                        </p>
                      </div>

                      {/* LEVEL 3: DYNAMIC ACCORDION SUB-COMPONENTS */}
                      {isExpanded && (
                        <div className="space-y-3 pt-2 border-t border-black/10 animate-fadeIn">
                          <div className="space-y-1">
                            <h4 className="font-['Anton'] text-xs uppercase tracking-wider text-black/80">
                              {project.subTitle}
                            </h4>
                            <p className="text-[10px] tracking-wide uppercase leading-relaxed text-black/60">
                              {project.description}
                            </p>
                          </div>

                          <ul className="space-y-1.5 border-t border-black/10 pt-2">
                            {project.extraDetails.map((detail, idx) => (
                              <li key={idx} className="text-[9px] uppercase tracking-wider leading-relaxed text-black/70 flex items-start gap-1.5">
                                <span className="font-bold text-black/40">[0{idx + 1}]</span>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                    </div>
                  </div>

                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative z-10 px-4 md:px-6 pt-24 md:pt-32 pb-12 border-t border-black/20 bg-[#A7B4CF]">
        <p className="uppercase tracking-[0.3em] text-[10px] md:text-xs mb-6">Contact</p>
        <a href="mailto:dylshad.zain@gmail.com" className="block font-['Anton'] text-[13vw] md:text-[10vw] leading-[0.95] md:leading-[0.9] uppercase tracking-tight hover:opacity-60 transition-opacity break-all">
          DYLSHAD.ZAIN<br />@GMAIL.COM
        </a>
        <div className="flex justify-between items-end mt-24 md:mt-32 text-[10px] md:text-xs uppercase tracking-[0.2em]">
          <span>Kerala / India</span>
          <span>{new Date().getFullYear()} dzain.er studio</span>
        </div>
      </section>

    </div>
  )
}