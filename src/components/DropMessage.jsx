import { useState, useRef } from 'react'
import './DropMessage.css'

const ACCESS_KEY = 'febfdd38-13ff-4f7f-af67-0387d280a993'

export default function DropMessage() {
  const [message, setMessage] = useState('')
  const [expanded, setExpanded] = useState(false)
  const [status, setStatus] = useState('idle')
  const inputRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!message.trim()) return

    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: 'Anonymous message from portfolio',
          from_name: 'Anonymous Visitor',
          message: message.trim(),
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('sent')
        setMessage('')
        setTimeout(() => {
          setStatus('idle')
          setExpanded(false)
        }, 3000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 3000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  const handleExpand = () => {
    setExpanded(true)
    setTimeout(() => inputRef.current?.focus(), 100)
  }

  return (
    <div className={`drop-strip ${expanded ? 'drop-strip--open' : ''} ${status === 'sent' ? 'drop-strip--sent' : ''}`}>
      <div className="drop-strip-glow" />

      {!expanded ? (
        <button className="drop-trigger" onClick={handleExpand}>
          <span className="drop-trigger-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
            </svg>
          </span>
          <span className="drop-trigger-text">Drop me an anonymous message</span>
          <span className="drop-trigger-arrow">&rarr;</span>
        </button>
      ) : (
        <form className="drop-inline" onSubmit={handleSubmit}>
          {status === 'sent' ? (
            <div className="drop-success">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
              <span>Message sent! Thanks for dropping by.</span>
            </div>
          ) : (
            <>
              <textarea
                ref={inputRef}
                className="drop-input"
                placeholder="Say something nice... or brutally honest. It's anonymous."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={500}
                rows={2}
                disabled={status === 'sending'}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault()
                    handleSubmit(e)
                  }
                }}
              />
              <div className="drop-actions">
                <span className="drop-hint">
                  <kbd>Enter</kbd> to send &middot; <kbd>Shift+Enter</kbd> new line &middot; {message.length}/500
                </span>
                <div className="drop-btns">
                  <button
                    type="button"
                    className="drop-cancel"
                    onClick={() => { setExpanded(false); setMessage('') }}
                    disabled={status === 'sending'}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="drop-submit"
                    disabled={status === 'sending' || !message.trim()}
                  >
                    {status === 'sending' ? (
                      <><span className="drop-spinner" /> Sending</>
                    ) : status === 'error' ? (
                      'Retry'
                    ) : (
                      <>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                        Send
                      </>
                    )}
                  </button>
                </div>
              </div>
            </>
          )}
        </form>
      )}
    </div>
  )
}
