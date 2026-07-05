import Button from '@/components/Button'

// Banda di conversione riutilizzabile, pensata per essere inserita
// dopo ogni sezione chiave del sito (non solo nel footer).
export default function CTASection({ titolo, testo, testoBottone = 'Richiedi una Visita', className = '' }) {
  return (
    <section className={`bg-medical-blue-800 ${className}`}>
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl font-semibold text-white sm:text-3xl">{titolo}</h2>
        <p className="max-w-2xl text-base text-medical-blue-100 sm:text-lg">{testo}</p>
        <Button href="/contatti/" variant="primary">
          {testoBottone}
        </Button>
      </div>
    </section>
  )
}
