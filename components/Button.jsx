import Link from 'next/link'

const variantClasses = {
  primary:
    'bg-aqua-accent text-white hover:bg-aqua-accent-600 focus-visible:outline-aqua-accent-600',
  secondary:
    'bg-medical-blue-800 text-white hover:bg-medical-blue-900 focus-visible:outline-medical-blue-900',
  outline:
    'bg-transparent text-medical-blue-800 border-2 border-medical-blue-800 hover:bg-medical-blue-50 focus-visible:outline-medical-blue-800',
}

// CTA riutilizzabile: garantisce coerenza visiva e stesso testo/percorso
// verso il form di richiesta visita in tutte le sezioni chiave del sito.
export default function Button({ href, children, variant = 'primary', className = '', ariaLabel }) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold shadow-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  )
}
