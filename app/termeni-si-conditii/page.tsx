import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Termeni și Condiții - Xo Service',
  description: 'Termeni și condiții de utilizare Xo Service',
  robots: {
    index: false,
    follow: false,
  },
}

export default function TermeniSiConditii() {
  return (
    <div className="bg-white pt-32">
      <article className="container-custom section-padding max-w-4xl mx-auto prose prose-lg">
        <h1 className="text-4xl sm:text-5xl font-bold text-accent mb-8">
          Termeni și Condiții
        </h1>

        <div className="space-y-6 text-neutral-dark leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-accent mt-8 mb-4">
              1. Acceptarea Termenilor
            </h2>
            <p>
              Prin accesarea și utilizarea site-ului Xo Service, accepti acești termeni și
              condiții de utilizare.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent mt-8 mb-4">
              2. Utilizarea Site-ului
            </h2>
            <p>Site-ul este destinat utilizării personale și necomerciale.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent mt-8 mb-4">
              3. Serviciile Oferite
            </h2>
            <p>
              Xo Service oferă servicii de diagnostic, reparații, întreținere și revizie
              tehnică pentru autovehicule.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent mt-8 mb-4">4. Prețuri</h2>
            <p>
              Prețurile afișate pe site sunt orientative. Prețurile finale vor fi
              stabilite după diagnostic și vor fi comunicate înainte de începerea
              lucrărilor.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent mt-8 mb-4">5. Garantie</h2>
            <p>
              Oferim garanție pentru reparațiile efectuate, în conformitate cu legislația
              în vigoare.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent mt-8 mb-4">
              6. Limitarea Răspunderii
            </h2>
            <p>
              Xo Service nu poate fi tras la răspundere pentru daune rezultate din
              utilizarea incorectă a informațiilor de pe site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent mt-8 mb-4">7. Contact</h2>
            <p>Pentru întrebări despre termenii și condițiile, ne poți contacta la:</p>
            <ul className="list-none space-y-2 mt-4">
              <li>
                <strong>Email:</strong> contact@xoservice.ro
              </li>
              <li>
                <strong>Telefon:</strong> 0768 802 902
              </li>
              <li>
                <strong>Adresă:</strong> Strada Pucheni 73E, București
              </li>
            </ul>
          </section>

          <section>
            <p className="text-sm text-neutral-dark mt-8">
              Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
            </p>
          </section>
        </div>
      </article>
    </div>
  )
}
