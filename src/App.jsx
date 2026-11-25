import { useState } from 'react'

export default function App() {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <main className="login">
      <div className="login__backdrop" aria-hidden="true" />
      <div className="login__grain" aria-hidden="true" />

      <div className="login__panel">
        <h1 className="login__brand">
          gawon<span>26</span>
        </h1>

        <form className="login__form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="id">ID</label>
            <input
              id="id"
              name="id"
              type="text"
              autoComplete="username"
              value={id}
              onChange={(event) => setId(event.target.value)}
              required
            />
          </div>

          <div className="field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>

          <button className="login__submit" type="submit">
            Sign in
          </button>
        </form>
      </div>
    </main>
  )
}
