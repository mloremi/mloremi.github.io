import React from 'react';
import './App.css';
import * as resume from './resume.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{ resume.basics.name }</h1>
        <p>{ resume.basics.label }</p>
      </header>
      <content className="App-body">
        <section>
          <h3>Contact</h3>
          <p>Email: { resume.basics.email }</p>
          <p>Phone: { resume.basics.phone }</p>
          {
            resume.basics.profiles.map(p => {
              return <a key={ p.network } href={ p.url } className={`icon icon-${p.network}`}></a>
            })
          }
        </section>
        <section>
          <h3>About</h3>
          <p>{ resume.basics.summary }</p>
        </section>
        <section>
          <h3>Skills</h3>
          {
            resume.skills.map(skill => {
              return <div>
                <p>{ skill.name }</p>
                <ul>
                  {
                    skill.keywords.map(hl => {
                      return <li>{ hl }</li>
                    })
                  }
                </ul>
              </div>
            })
          }
        </section>
        <section>
          <h3>Work Experience</h3>
          {
            resume.work.map(w => {
              return <div key={ w.company }>
                <h4>{ w.company }</h4>
                <p>{ w.position } <span>{ `${w.startDate} - ${w.endDate}` }</span></p>
                <p>{ w.summary }</p>
                <ul>
                  {
                    w.highlights.map( h => {
                      return <li key={ h }>{ h }</li>
                    })
                  }
                </ul>
              </div>;
            })
          }
        </section>
        <section>
          <h3>Education</h3>
          {
            resume.education.map(e => {
              return <div>
                  <p>{ `${e.studyType}, ${e.area} - ${e.institution}` }</p>
                  <p>{`${e.startDate} - ${e.endDate}`}</p>
                </div>
            })
          }
        </section>
      </content>
    </div>
  );
}

export default App;
