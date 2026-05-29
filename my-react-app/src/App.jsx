import cabinImg from './assets/riverside-cabin.jpg'
import highRiseImg from './assets/high-rise.jpg'

const projects = [
  {
    id: 1,
    title: 'Riverside Cabin',
    category: 'Residential 2023',
    location: 'Colorado, USA',
    description: 'A secluded retreat nestled along the riverbank, designed to dissolve the boundary between the interior and the natural landscape.',
    tags: ['Timber', 'Passive Design', 'Landscape'],
    image: cabinImg,
  },
  {
    id: 2,
    title: 'High Rise',
    category: 'Commercial 2024',
    location: 'Dubai, UAE',
    description: "A mixed-use tower that balances structural boldness with human-scale detail, redefining the vertical silhouette of the city.",
    tags: ['Steel', 'Mixed-Use', 'Urban'],
    image: highRiseImg,
  },
]

export default function App() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans">

      <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-8 py-5 border-b border-white/10 bg-stone-950/80 backdrop-blur-sm">
        <span className="text-sm tracking-[0.2em] uppercase text-stone-400 font-light">
          Studio
        </span>
        <nav className="flex gap-8 text-sm text-stone-400">
          <a href="#works" className="hover:text-white transition-colors">Works</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>
      </header>

      <section className="flex flex-col items-start justify-end min-h-screen px-8 pb-20 pt-32 border-b border-white/10">
        <p className="text-xs tracking-[0.25em] uppercase text-stone-500 mb-6">
          Architecture and Design
        </p>
        <h1 className="text-[clamp(3rem,8vw,7rem)] font-light leading-[1.05] tracking-tight text-white max-w-3xl">
          Building spaces that endure.
        </h1>
        <p className="mt-8 max-w-md text-stone-400 text-base leading-relaxed font-light">
          A practice focused on thoughtful design, from intimate residences to civic landmarks.
        </p>
        <a
          href="#works"
          className="mt-12 inline-flex items-center gap-3 text-sm text-stone-400 hover:text-white transition-colors group"
        >
          <span>View selected works</span>
          <span className="block w-8 h-px bg-stone-600 group-hover:w-14 group-hover:bg-white transition-all duration-300" />
        </a>
      </section>

      <section id="works" className="px-8 py-24">
        <div className="flex items-baseline justify-between mb-16 border-b border-white/10 pb-6">
          <h2 className="text-xs tracking-[0.25em] uppercase text-stone-500">Selected Works</h2>
          <span className="text-xs text-stone-600">{projects.length} projects</span>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={[
                'grid grid-cols-1 lg:grid-cols-2 gap-12 items-center',
                index % 2 === 1 ? 'lg:[direction:rtl]' : '',
              ].join(' ')}
            >
              <div className="overflow-hidden aspect-[4/3] lg:[direction:ltr]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                />
              </div>

              <div className="lg:[direction:ltr] flex flex-col justify-center">
                <p className="text-xs tracking-[0.2em] uppercase text-stone-500 mb-4">
                  {String(index + 1).padStart(2, '0')} — {project.category}
                </p>
                <h3 className="text-4xl font-light text-white mb-2 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-stone-500 mb-8">{project.location}</p>
                <p className="text-stone-400 leading-relaxed font-light max-w-md">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-8">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 border border-white/10 text-stone-500 tracking-widest uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="px-8 py-24 border-t border-white/10">
        <div className="max-w-2xl">
          <h2 className="text-xs tracking-[0.25em] uppercase text-stone-500 mb-12">About the Practice</h2>
          <p className="text-2xl font-light text-white leading-relaxed mb-8">
            We believe architecture is the art of making the ordinary extraordinary.
          </p>
          <p className="text-stone-400 leading-relaxed font-light">
            Our studio brings together architects, designers, and engineers committed to creating buildings that respect context, embrace materiality, and serve the people who inhabit them.
          </p>
        </div>
      </section>

      <section id="contact" className="px-8 py-24 border-t border-white/10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <h2 className="text-xs tracking-[0.25em] uppercase text-stone-500 mb-6">Get in Touch</h2>
            <a
              href="mailto:hello@studio.com"
              className="text-4xl font-light text-white hover:text-stone-300 transition-colors"
            >
              dylshad.zain@gmail.com
            </a>
          </div>
          <p className="text-stone-600 text-sm">
            {new Date().getFullYear()} Studio. All rights reserved.
          </p>
        </div>
      </section>

    </div>
  )
}
