import "./Frameworks.css";

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

const frontend = [
  {
    name: 'SASS'
  },
  {
    name: 'LESS'
  },
  {
    name: 'SCSS'
  },
  {
    name: 'Tailwind'
  },
  {
    name: 'Bootstrap'
  },
  {
    name: 'Material'
  },
]

const backend = [
  {
    name: 'NodeJS'
  },
  {
    name: 'Go'
  },
  {
    name: 'GraphQl'
  },
  {
    name: 'REST API'
  },
  {
    name: 'MongoDB'
  },
  {
    name: 'Postgreesql'
  },
  {
    name: 'MySQL'
  }
]

const tests = [
  {
    name: 'Cypress (e2e)'
  },
  {
    name: 'Jest (unit test)'
  },
  {
    name: 'Тестирование скриншотами'
  }
]

const cms = [
  {
    name: 'Wordpress'
  },
  {
    name: 'Shopify'
  },
  {
    name: 'Strapi'
  }
]

const other = [
  {
    name: 'QuillJS'
  },
  {
    name: 'ReactiveJS'
  }
]

export default function Frameworks({sectionTitle, subsectionTitle}) {
    return(
        <section className="frameworks">
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
        <div className="frameworks__extend-block">
            <div className="frameworks__extend-block-list">
              <h4 className="frameworks__extend-list-title">Frontend</h4>
              <ul className="frameworks__extend-list">
                {frontend.map((item) => (
                  <li className="frameworks__extend-list-item">{item.name}</li>
                ))}
              </ul>
            </div>
            <div className="frameworks__extend-block-list">
              <h4 className="frameworks__extend-list-title">Backend</h4>
              <ul className="frameworks__extend-list">
                {backend.map((item) => (
                  <li className="frameworks__extend-list-item">{item.name}</li>
                ))}
              </ul>
            </div>
            <div className="frameworks__extend-block-list">
              <h4 className="frameworks__extend-list-title">Tests</h4>
              <ul className="frameworks__extend-list">
                {tests.map((item) => (
                  <li className="frameworks__extend-list-item">{item.name}</li>
                ))}
              </ul>
            </div>
            <div className="frameworks__extend-block-list">
              <h4 className="frameworks__extend-list-title">CMS</h4>
              <ul className="frameworks__extend-list">
                {cms.map((item) => (
                  <li className="frameworks__extend-list-item">{item.name}</li>
                ))}
              </ul>
            </div>
            <div className="frameworks__extend-block-list">
              <h4 className="frameworks__extend-list-title">Другое</h4>
              <ul className="frameworks__extend-list">
                {other.map((item) => (
                  <li className="frameworks__extend-list-item">{item.name}</li>
                ))}
              </ul>
            </div>
        </div>
      </div>
      </section>
    )
}
