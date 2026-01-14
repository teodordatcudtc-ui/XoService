import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politica de Confidențialitate - Xo Service',
  description: 'Politica de confidențialitate Xo Service',
  robots: {
    index: false,
    follow: false,
  },
}

export default function PoliticaConfidentialitate() {
  return (
    <div className="bg-white pt-32">
      <article className="container-custom section-padding max-w-4xl mx-auto prose prose-lg">
        <h1 className="text-4xl sm:text-5xl font-bold text-accent mb-8">
          Politica de Confidențialitate
        </h1>

        <div className="space-y-6 text-neutral-dark leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-accent mt-8 mb-4">
              1. Introducere
            </h2>
            <p>
              Xo Service respectă confidențialitatea vizitatorilor site-ului nostru și se
              angajează să protejeze datele personale colectate în conformitate cu
              Regulamentul General privind Protecția Datelor (GDPR).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent mt-8 mb-4">
              2. Datele Colectate
            </h2>
            <p>Colectăm următoarele tipuri de date:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nume și prenume</li>
              <li>Adresă de email</li>
              <li>Număr de telefon</li>
              <li>Informații despre vehicul (la cerere)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent mt-8 mb-4">
              3. Utilizarea Datelor
            </h2>
            <p>Datele colectate sunt utilizate pentru:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Procesarea programărilor</li>
              <li>Comunicarea cu clienții</li>
              <li>Îmbunătățirea serviciilor oferite</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent mt-8 mb-4">
              4. Securitatea Datelor
            </h2>
            <p>
              Implementăm măsuri de securitate tehnice și organizatorice pentru a proteja
              datele personale împotriva accesului neautorizat, pierderii sau distrugerii.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent mt-8 mb-4">
              5. Drepturile Tale
            </h2>
            <p>Ai dreptul să:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Accesezi datele tale personale</li>
              <li>Corectezi datele incorecte</li>
              <li>Ștergi datele tale</li>
              <li>Te opui procesării datelor</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent mt-8 mb-4">6. Contact</h2>
            <p>
              Pentru întrebări despre politica de confidențialitate, ne poți contacta la:
            </p>
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
