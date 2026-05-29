import { useEffect, useState } from 'react'

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
    position: 'top-[6%] left-[4%]',
    rotate: '-rotate-3',
    tags: ['Biophilic', 'Minimalist', 'Micro-Housing'],
    description: 'A cozy, elevated sanctuary designed to meet essential lifestyle needs while maximizing views of the lake and surrounding Munnar landscape. Drawing inspiration from the terrain’s unique character, it prioritizes functional efficiency, meaningful experience, and harmonious integration with nature.',
    subTitle: 'Essential Living, Amplified Nature',
    extraDetails: [
      'Minimal efficient living focusing on getting maximum utility out of a small space without sacrificing comfort.',
      'Structural base utilizes RCC piles driven down into stone foundations supporting primary beams.',
      'Truss architecture dynamically generated using Grasshopper programming scripts to instantly adapt dimension ratios.'
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
    position: 'top-[58%] left-[18%]',
    rotate: 'rotate-2',
    tags: ['Contextualism', 'Zonal Privacy', 'Volumetric Carving'],
    description: 'Designed for a family of five (including an architect father), this home features clear public, semi-private, and private divisions carved out to fit naturally with Pullikanam’s contours. It integrates a dedicated, focused architecture studio while leveraging the nearby natural pond to circulate refreshing summer breezes throughout the spaces.',
    subTitle: 'Ecology Shapes Continuity',
    extraDetails: [
      'Pure cuboid volume carved out over natural site contours to distribute public, semi-private, and private spaces cleanly.',
      'Summer breezes collect crisp air off the adjacent natural pond to circulate cross-ventilation passively.',
      'Features custom programmatic areas including a home office, standalone studio, art gallery walkthrough, and a mini bar.'
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
    position: 'top-[10%] right-[22%]',
    rotate: '-rotate-2',
    tags: ['Inclusive pedagogy', 'Trapezoidal Layout', 'Kinesthetic Form'],
    description: 'Replacing rigid, restrictive traditional classrooms with flexible, collaborative environments that adapt to diverse learning styles. Utilizing a non-traditional trapezoidal configuration and offset vertically arranged blocks connected by bridges, the school acts as a "third teacher" to spark childhood curiosity, tactile wonder, and creative exploration.',
    subTitle: 'Building as a 3rd Teacher',
    extraDetails: [
      'Trapezoidal layouts challenge rigid structural rows, amplifying sightlines and enabling multi-activity configurations.',
      'Form comprised of three offset vertical blocks linked seamlessly via exterior bridges to minimize travel corridors.',
      'Tactile surfaces and playful structural geometry are optimized to catch developing sensory pathways during early learning.'
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
    position: 'top-[68%] right-[8%]',
    rotate: 'rotate-3',
    tags: ['Algorithmic Texture', 'Biophilic Voids', 'Urban Nexus'],
    description: 'A 12-story high-rise blending commercial floors, middle-tier offices, and residences above. To counter the enclosed, isolated feeling typical of high-rises, large open structural voids are carved out of the structural envelope. Adorned with cascading vegetation, algorithmic grass etchings, and integrated linear glow lighting, these cutouts double as vibrant social hubs.',
    subTitle: 'Carving Spatial Dialogue',
    extraDetails: [
      'Deep micro-climatic voids open the building shell to counter the traditional isolated feel of concrete towers.',
      'Staggered window placements shatter vertical visual monotony across the corporate workstation levels.',
      'Monochromatic concrete skin textured through custom algorithmic etchings inspired by wild grass clusters.'
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
    position: 'top-[40%] right-[38%]',
    rotate: '-rotate-6',
    tags: ['Ecological Restoration', 'Bioswales', 'Sustainable Urbanism'],
    description: 'A comprehensive redevelopment master plan for Maimolbem Lake in Vasco, Goa that tightly integrates ecological restoration, community recreation, and sustainable livelihoods. The layout utilizes bioswales to clean incoming water run-off, recreational decks, pisciculture nodes, and terraced steps to reinforce a human-nature connection.',
    subTitle: 'Ecological Restoration',
    extraDetails: [
      'Integrates protective bioswales directly along trail boundaries to naturally intercept and filter runoff impurities.',
      'Introduces structural micro-economies by inserting active pisciculture nodes and specialized saline-resistant farming.',
      'Interlinks community access through recreational walking paths, viewing benches, and floating fishing docks.'
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
    position: 'top-[78%] left-[42%]',
    rotate: 'rotate-6',
    tags: ['Vernacular Hybrid', 'Cultural Infrastructure', 'Civic Gateway'],
    description: 'An award-winning multi-functional cultural hub proposed by the Jammu Development Authority. Positioned intentionally along the Tawi River, the project fuses vernacular Kashmiri architectural idioms with contemporary spatial systems, acting as a critical physical and cultural nexus connecting Jammu’s Old and New City.',
    subTitle: 'Civic & Cultural Infrastructure',
    extraDetails: [
      'Recognized with the prestigious first-class distinction Kerala Architecture Thesis Award (KATHA 2025).',
      'Establishes an expressive urban bridge across the Tawi River to close the gap between historic and modern programmatic sectors.',
      'Houses versatile public exhibition halls, performance theaters, administrative suites, and recreational platforms.'
    ]
  },
]

export default function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)
  const [expandedProjectId, setExpandedProjectId] = useState(null)

  useEffect(() => {
    const moveCursor = e => {
      setPosition({ x: e.clientX, y: e.clientY })
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
    <div className="cursor-none relative min-h-screen overflow-hidden bg-[#A7B4CF] text-black font-['Inter'] scroll-smooth">

      {/* CUSTOM CURSOR */}
      <div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      >
        <div className={['relative w-8 h-8 transition-all duration-300 ease-out', hovering ? 'rotate-45 scale-125' : 'rotate-0 scale-100'].join(' ')}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={['rounded-full border border-black transition-all duration-700 ease-out', hovering ? 'w-0 h-0 opacity-0' : 'w-8 h-8 opacity-100 animate-pulse'].join(' ')} />
          </div>
          <span className="absolute top-1/2 left-0 w-full h-[2px] bg-black -translate-y-1/2" />
          <span className="absolute left-1/2 top-0 h-full w-[2px] bg-black -translate-x-1/2" />
        </div>
      </div>

      {/* FIXED STRUCTURE BACKGROUND GRID */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <div className="grid grid-cols-4 h-full">
          <div className="border-r border-black/20" />
          <div className="border-r border-black/20" />
          <div className="border-r border-black/20" />
          <div className="border-r border-black/20" />
        </div>
      </div>

      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-8 py-6 mix-blend-difference text-white">
        <div className="text-3xl font-black uppercase tracking-tight">DZAIN.ER STUDIO</div>
        <div className="flex flex-col gap-1 absolute left-1/2 -translate-x-1/2 opacity-40">
          <span className="w-14 h-[2px] bg-white block" />
          <span className="w-14 h-[2px] bg-white block" />
        </div>
        <nav className="flex gap-8 text-sm uppercase tracking-[0.2em]">
          <a href="#works" className="hover:opacity-60 transition-opacity">Works</a>
          <a href="#about" className="hover:opacity-60 transition-opacity">About</a>
          <a href="#contact" className="hover:opacity-60 transition-opacity">Contact</a>
        </nav>
      </header>

      {/* HERO & FLOATING PREVIEWS */}
      <section className="relative min-h-screen overflow-hidden px-6 pt-32">
        {projects.map(project => (
          <a
            key={project.id}
            href={`#project-${project.id}`}
            onClick={(e) => handleScroll(e, project.id)}
            className={`absolute block w-[180px] md:w-[220px] ${project.position} ${project.rotate} z-20 cursor-none transition-transform duration-300 hover:scale-105 active:scale-95`}
          >
            <div className="bg-[#EFECDD] p-3 shadow-2xl">
              <div className="flex items-center justify-between mb-2 text-[10px] uppercase font-bold text-black">
                <span>[{project.location.slice(0, 3)}]</span>
                <span>{project.id.toString().padStart(2, '0')}</span>
              </div>
              <img
                src={project.thumbImage}
                alt={project.title}
                loading="eager" 
                className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </a>
        ))}

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
          <div className="leading-[0.78] uppercase text-center font-['Anton'] tracking-[-0.06em] select-none pointer-events-none opacity-90">
            <h1 className="text-[22vw] leading-[0.82]">SPACE</h1>
            <h1 className="text-[22vw] leading-[0.82]">FORM</h1>
            <h1 className="text-[22vw] leading-[0.82]">LIGHT</h1>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative z-10 px-6 py-40 border-t border-black/20 bg-[#A7B4CF]">
        <div className="max-w-5xl">
          <p className="uppercase tracking-[0.3em] text-xs mb-10">Studio Manifesto</p>
          <h2 className="font-['Anton'] text-[8vw] leading-[0.9] uppercase tracking-tight max-w-6xl">
            Designing atmospheric spaces rooted in climate, terrain, and culture.
          </h2>
          <div className="grid md:grid-cols-2 gap-16 mt-20">
            <p className="text-sm leading-loose uppercase tracking-wide">
              dzain.er studio is an architecture and design practice exploring spatial narratives across multiple scales — from intimate riverside retreats to institutional and cultural infrastructures.
            </p>
            <p className="text-sm leading-loose uppercase tracking-wide">
              The studio investigates contextual form-making, bioclimatic systems, landscape integration, and architectural atmosphere through contemporary spatial strategies.
            </p>
          </div>
        </div>
      </section>

      {/* WORKS */}
      <section id="works" className="relative z-10 px-6 py-40 border-t border-black/20 bg-[#A7B4CF]">
        <div className="flex items-end justify-between mb-24">
          <h2 className="font-['Anton'] text-[12vw] leading-none uppercase tracking-tight">Works</h2>
          <span className="uppercase text-xs tracking-[0.3em]">{projects.length} Projects</span>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => {
            const isExpanded = expandedProjectId === project.id;
            
            return (
              <article 
                key={project.id} 
                id={`project-${project.id}`} 
                className={`transition-all duration-1000 ease-in-out scroll-mt-28 border-t border-black/10 pt-16 pb-20 ${
                  isExpanded 
                    ? 'bg-gradient-to-b from-[#A7B4CF] via-[#9AA9C4] to-[#8D9DBA] px-6 md:px-12 my-12 shadow-2xl rounded-sm' 
                    : 'hover:bg-black/5 px-2'
                }`}
              >
                <div className="flex flex-col gap-10">
                  
                  {/* METADATA BAR */}
                  <div className="flex justify-between items-center text-xs uppercase tracking-[0.2em] border-b border-black/20 pb-4">
                    <div>
                      <span className="font-bold mr-2">[{project.id.toString().padStart(2, '0')}]</span>
                      {project.category} &mdash; {project.year} &mdash; {project.location}
                    </div>
                    {isExpanded && (
                      <button 
                        onClick={() => toggleExpand(project.id)}
                        className="font-bold underline hover:opacity-50 transition-opacity cursor-none"
                      >
                        [ Close Detail Matrix ]
                      </button>
                    )}
                  </div>

                  {/* MAIN SHOWCASE RENDER CONTAINER */}
                  <div 
                    onClick={() => toggleExpand(project.id)}
                    className={`overflow-hidden group cursor-none relative transition-all duration-1000 ease-in-out ${
                      isExpanded 
                        ? 'w-full h-auto' // Released fixed limits completely so full proportion fits
                        : 'w-full h-[55vh] md:h-[70vh]'
                    }`}
                  >
                    <img
                      src={project.fullImage}
                      alt={project.title}
                      loading="lazy"
                      className={`transition-all duration-1000 block ${
                        isExpanded 
                          ? 'w-full h-auto object-contain grayscale-0' // Fluid natural ratio display without horizontal/vertical cut-offs
                          : 'w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.015]'
                      }`}
                    />
                    {!isExpanded && (
                      <div className="absolute inset-0 bg-black/5 opacity-100 group-hover:opacity-0 transition-opacity duration-500 flex items-center justify-center">
                        <span className="bg-black text-white text-[10px] uppercase tracking-widest px-4 py-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                          View True Dimensions & Content
                        </span>
                      </div>
                    )}
                  </div>

                  {/* TYPOGRAPHY AND COMPOSITION REARRANGEMENT */}
                  <div className={`transition-all duration-1000 ${isExpanded ? 'pt-4' : ''}`}>
                    
                    <h3 className={`font-['Anton'] uppercase tracking-tight leading-[0.85] transition-all duration-700 mb-8 ${
                      isExpanded ? 'text-[9vw] border-b border-black/10 pb-6' : 'text-[5vw]'
                    }`}>
                      {project.title}
                    </h3>
                    
                    <div className={`grid gap-12 transition-all duration-1000 ${
                      isExpanded ? 'md:grid-cols-12' : 'md:grid-cols-2'
                    }`}>
                      
                      {/* Left Block / Primary Paragraph */}
                      <div className={`${isExpanded ? 'md:col-span-5' : ''} space-y-6`}>
                        <p className="text-sm tracking-wide leading-relaxed uppercase text-black/90">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.tags.map((tag, idx) => (
                            <span key={idx} className="border border-black px-3 py-1.5 text-[10px] uppercase tracking-widest bg-transparent">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Spacer layout shift column */}
                      {isExpanded && <div className="hidden md:block md:col-span-1 border-r border-black/10" />}

                      {/* Right Block / Secondary Technical Parameters */}
                      {isExpanded && (
                        <div className="md:col-span-6 space-y-6 animate-fadeIn">
                          <div className="text-xs uppercase tracking-[0.3em] font-bold text-black/50">
                            Technical Parameters & Core Strategy
                          </div>
                          <h4 className="font-['Anton'] text-2xl uppercase tracking-wider text-black/90">
                            {project.subTitle}
                          </h4>
                          <ul className="space-y-4 border-t border-black/20 pt-4">
                            {project.extraDetails.map((detail, idx) => (
                              <li key={idx} className="text-xs uppercase tracking-wider leading-loose text-black/80 flex items-start gap-3">
                                <span className="font-bold text-black select-none">[0{idx + 1}]</span>
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
      <section id="contact" className="relative z-10 px-6 pt-40 pb-20 border-t border-black/20 bg-[#A7B4CF]">
        <p className="uppercase tracking-[0.3em] text-xs mb-8">Contact</p>
        <a href="mailto:dylshad.zain@gmail.com" className="block font-['Anton'] text-[10vw] leading-[0.9] uppercase tracking-tight hover:opacity-60 transition-opacity break-all">
          DYLSHAD.ZAIN<br />@GMAIL.COM
        </a>
        <div className="flex justify-between items-end mt-32 text-xs uppercase tracking-[0.2em]">
          <span>Kerala / India</span>
          <span>{new Date().getFullYear()} dzain.er studio</span>
        </div>
      </section>

    </div>
  )
}