
export default function Frameworks({sectionTitle, subsectionTitle}) {
    return(
        <section>
        <h2>{sectionTitle}</h2>
      <div>
        <h3>{subsectionTitle}</h3>
        <div className="framework-list">
          <div className="framework">
            <img src="/frameworks/react.png" alt="react" />
            React
          </div>
          <div className="framework">
            <img src="/frameworks/preact.png" alt="preact" />
            Preact
          </div>
          <div className="framework">
            <img src="/frameworks/vue.png" alt="vue" />
            Vue
          </div>
          <div className="framework">
            <img src="/frameworks/angular.png" alt="angular" />
            Angular
          </div>
          <div className="framework">
            <img src="/frameworks/polymer.png" alt="polymer" />
            Polymer
          </div>
          <div className="framework">
            <img src="/frameworks/rxjs.png" alt="rxjs" />
            RXJS
          </div>
          <div className="framework">
            <img src="/frameworks/svelte.png" alt="svelte" />
            Svelte
          </div>
          <div className="framework">
            <img src="/frameworks/jquery.png" alt="jquery" />
            JQuery
          </div>
        </div>
      </div>
      </section>
    )
}