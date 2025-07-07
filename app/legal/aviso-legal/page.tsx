import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aviso Legal | TCSystems',
  description: 'Aviso legal y términos de uso del sitio web de TCSystems - Sistemas de Cobro Automático.',
  robots: 'index, follow',
}

export default function AvisoLegalPage() {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        Aviso Legal
      </h1>
      
      <div className="space-y-8 text-gray-600 dark:text-zinc-300">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Ley de los Servicios de la Sociedad de la Información (LSSI)
          </h2>
          <p className="mb-4">
            Sistemas De T-Cobro S.L., responsable del sitio web, en adelante RESPONSABLE, pone a disposición de los usuarios el presente documento, con el que pretende dar cumplimiento a las obligaciones dispuestas en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSICE), BOE N.º 166, así como informar a todos los usuarios del sitio web respecto a cuáles son las condiciones de uso.
          </p>
          <p className="mb-4">
            Toda persona que acceda a este sitio web asume el papel de usuario, comprometiéndose a la observancia y cumplimiento riguroso de las disposiciones aquí dispuestas, así como a cualquier otra disposición legal que fuera de aplicación.
          </p>
          <p className="mb-4">
            Sistemas De T-Cobro S.L. se reserva el derecho de modificar cualquier tipo de información que pudiera aparecer en el sitio web, sin que exista obligación de preavisar o poner en conocimiento de los usuarios dichas modificaciones, entendiéndose como suficiente la publicación en el sitio web de la empresa.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            1. Datos Identificativos
          </h2>
          <div className="bg-gray-50 dark:bg-zinc-800 rounded-lg p-6 my-6">
            <ul className="space-y-2 text-gray-700 dark:text-zinc-300">
              <li><strong>Nombre de dominio:</strong> tcsystems.es</li>
              <li><strong>Nombre comercial:</strong> Sistemas De T-Cobro S.L.</li>
              <li><strong>Denominación social:</strong> Sistemas De T-Cobro S.L.</li>
              <li><strong>CIF/NIF:</strong> B86989951</li>
              <li><strong>Domicilio social:</strong> C/ Centauro 15, 28971, Griñón, Madrid</li>
              <li><strong>Teléfono:</strong> +34 629 76 86 36</li>
              <li><strong>E-mail:</strong> consultoria@tcsystems.es</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            2. Derechos de Propiedad Intelectual e Industrial
          </h2>
          <p className="mb-4">
            El sitio web, incluyendo pero no limitado a su programación, edición, compilación y demás elementos necesarios para su funcionamiento, así como los diseños, logotipos, textos y gráficos, son propiedad de Sistemas De T-Cobro S.L. o cuentan con licencia o autorización expresa de sus autores. Todos los contenidos están protegidos por la normativa vigente de propiedad intelectual e industrial.
          </p>
          <p className="mb-4">
            La reproducción total o parcial, uso, explotación, distribución o comercialización de los contenidos requiere autorización escrita previa de Sistemas De T-Cobro S.L.. El uso no autorizado se considerará un incumplimiento grave de los derechos de propiedad.
          </p>
          <p className="mb-4">
            Los diseños, logotipos, textos y gráficos ajenos a Sistemas De T-Cobro S.L. que pudieran aparecer en el sitio web pertenecen a sus respectivos titulares, quienes serán responsables de cualquier controversia derivada de los mismos.
          </p>
          <p className="mb-4">
            Para cualquier comunicación relacionada con posibles incumplimientos de derechos, pueden dirigirse al correo electrónico: consultoria@tcsystems.es.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            3. Exención de Responsabilidades
          </h2>
          <p className="mb-4">
            Sistemas De T-Cobro S.L. no se responsabiliza de los daños o perjuicios derivados del uso o acceso a la información publicada en su sitio web, salvo que exista conocimiento efectivo y negligencia demostrada por parte del RESPONSABLE para retirar o bloquear el acceso a información ilícita o incorrecta.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            4. Uso de Cookies
          </h2>
          <p className="mb-4">
            Este sitio web utiliza cookies técnicas indispensables para su correcto funcionamiento. Estas cookies son temporales y no recogen datos personales.
          </p>
          <p className="mb-4">
            Asimismo, se pueden usar cookies analíticas para mejorar la experiencia del usuario, que sólo se activarán con el consentimiento previo del usuario, que podrá configurar o rechazar mediante las opciones de su navegador.
          </p>
          <p className="mb-4">
            Para más información puede consultar nuestra <a href="/legal/cookies" className="text-[#0e9acd] hover:underline">Política de Cookies</a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            5. Política de Enlaces
          </h2>
          <p className="mb-4">
            En el sitio web de Sistemas De T-Cobro S.L. pueden aparecer enlaces a páginas de terceros, sobre los cuales el RESPONSABLE no tiene control ni responsabilidad alguna.
          </p>
          <p className="mb-4">
            El RESPONSABLE procederá a la retirada inmediata de cualquier enlace a sitios que incumplan la legislación, la moral o el orden público, y colaborará con las autoridades en caso de ser requerido.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            6. Direcciones IP
          </h2>
          <p className="mb-4">
            Los servidores podrán detectar automáticamente la dirección IP y nombre de dominio desde donde el usuario accede, para obtener datos estadísticos sobre visitas y accesos, conforme a la normativa vigente.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            7. Ley Aplicable y Jurisdicción
          </h2>
          <p className="mb-4">
            Para cualquier controversia relacionada con el sitio web o sus servicios, se aplicará la legislación española y serán competentes los Juzgados y Tribunales del domicilio del usuario o lugar del cumplimiento de la obligación.
          </p>
        </section>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-zinc-700">
          <p className="text-sm text-gray-500 dark:text-zinc-400">
            <strong>Última actualización:</strong> Diciembre 2024
          </p>
        </div>
      </div>
    </div>
  )
} 