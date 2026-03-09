import { useReveal } from '../hooks/useReveal'

export default function RevealDiv({ children, className = '' }) {
  const ref = useReveal()
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>
}
