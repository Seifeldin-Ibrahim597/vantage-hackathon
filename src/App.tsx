import { useState } from 'react'
import './App.css'

const repository = 'https://github.com/Seifeldin-Ibrahim597/vantage-hackathon'
const cloneCommand = `git clone ${repository}.git`

function App() {
  const [copyStatus, setCopyStatus] = useState('Copy clone command')

  async function copyCloneCommand() {
    try {
      await navigator.clipboard.writeText(cloneCommand)
      setCopyStatus('Copied to clipboard')
    } catch {
      setCopyStatus('Select the command below to copy it')
    }
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Vantage home">
          <span className="brand-mark" aria-hidden="true">↗</span> VANTAGE
        </a>
        <a className="header-link" href={repository}>Open GitHub <span aria-hidden="true">↗</span></a>
      </header>

      <main id="home">
        <section className="hero" aria-labelledby="hero-title">
          <p className="eyebrow"><span className="status-dot" /> TEAM VANTAGE / HACKATHON</p>
          <h1 id="hero-title">One team.<br /><span>Bigger ambitions.</span></h1>
          <p className="hero-copy">A clear view of what’s possible. A shared ambition to build it. This is our starting point.</p>
          <div className="hero-actions">
            <a className="button button-primary" href={`${repository}#readme`}>Start building <span aria-hidden="true">↗</span></a>
            <a className="button button-secondary" href={`${repository}/issues`}>Plan the work <span aria-hidden="true">→</span></a>
          </div>
          <div className="horizon" aria-hidden="true">
            <span className="horizon-label">THE ONLY WAY IS FORWARD</span>
            <div className="summit summit-back" />
            <div className="summit summit-front" />
            <span className="summit-point">↗</span>
          </div>
        </section>

        <section className="team-start" aria-labelledby="start-title">
          <div className="section-heading"><p className="eyebrow">FROM IDEA TO DEMO</p><h2 id="start-title">Make the first move.</h2></div>
          <div className="resource-grid">
            <a className="resource-card" href={`${repository}#quick-start`}><span className="card-number">01 / SET UP</span><h3>Get the project <span aria-hidden="true">↗</span></h3><p>Clone the repo, install the dependencies, and run it on your laptop.</p></a>
            <a className="resource-card" href={`${repository}/issues`}><span className="card-number">02 / MAKE A PLAN</span><h3>Pick your next task <span aria-hidden="true">↗</span></h3><p>Capture the idea, break it into tasks, and decide who is building what.</p></a>
            <a className="resource-card" href={`${repository}/pulls`}><span className="card-number">03 / BUILD TOGETHER</span><h3>Share your progress <span aria-hidden="true">↗</span></h3><p>Work on a branch and open a pull request for the team to review.</p></a>
          </div>
        </section>

        <section className="clone-panel" aria-labelledby="clone-title">
          <div><p className="eyebrow">YOUR STARTING LINE</p><h2 id="clone-title">Ready when you are.</h2></div>
          <div className="clone-command"><code>{cloneCommand}</code><button type="button" onClick={copyCloneCommand}>{copyStatus}</button><span className="sr-only" aria-live="polite">{copyStatus === 'Copied to clipboard' ? copyStatus : ''}</span></div>
        </section>
      </main>
      <footer><span>TEAM VANTAGE</span><span>See further. Build together.</span><a href={`${repository}/blob/main/CONTRIBUTING.md`}>Team guide ↗</a></footer>
    </div>
  )
}

export default App
