import { useState, type ChangeEvent } from 'react'

function App() {
  const [domain, setDomain] = useState<string>('')
  const [envSubdomains, setEnvSubdomains] = useState<string>('')

  const domainsByEnvironments = envSubdomains.split(',').map((subdomain) => {
    return `${subdomain.trim()}.${domain}`
  })

  const handleChangeEnvSubdomains = (event: ChangeEvent<HTMLInputElement>) => {
    setEnvSubdomains(event.target.value)
  }

  return (
    <>
      <div>
        <h2>URLs by environment</h2>
        <input value={envSubdomains} onChange={handleChangeEnvSubdomains} />
        <ul>
          {domainsByEnvironments.map((domain) => {
            return <li>{domain}</li>
          })}
        </ul>
      </div>
    </>
  )
}

export default App
