const frameworks = [
  {
    slug: 'react',
    name: 'React'
  },
  {
    slug: 'vue',
    name: 'Vue'
  },
  {
    slug: 'polymer',
    name: 'Polymer'
  },
  {
    slug: 'rxjs',
    name: 'RXJS'
  },
  {
    slug: 'svelte',
    name: 'Svelte'
  },
  {
    slug: 'jquery',
    name: 'JQuery'
  },
]

export default function Frameworks({sectionTitle, subsectionTitle}) {
    return(
        <section>
        <h2>{sectionTitle}</h2>
      <div>
        <h3>{subsectionTitle}</h3>
        <div className="framework-list">
          {frameworks.map((framework, idx) => (
            <div className="framework">
              <img
                key={idx}
                src={`/frameworks/${framework.slug}.png`}
                alt={framework.slug} />
              {framework.name}
            </div>
          ))}
        </div>
      </div>
      </section>
    )
}
