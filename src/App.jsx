import { useState } from 'react'

export default function App() {
  const [email, setEmail] = useState('')
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
        <p className="login__lead">로그인하고 계속하세요.</p>

        <form className="login__form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
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
              placeholder="••••••••"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>

          <button className="login__submit" type="submit">
            Sign in
          </button>
        </form>

        <p className="login__hint">
          계정이 없나요?{' '}
          <button type="button" onClick={() => {}}>
            가입하기
          </button>
        </p>
      </div>
    </main>
  )
}
