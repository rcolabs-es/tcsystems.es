import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Cookies | TCSystems',
  description: 'Política de cookies del sitio web de TCSystems - Información sobre el uso de cookies y tecnologías similares.',
  robots: 'index, follow',
}

export default function CookiesPage() {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        Política de Cookies de Sistemas De T-Cobro S.L.
      </h1>
      
      <div className="space-y-8 text-gray-600 dark:text-zinc-300">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Información sobre cookies
          </h2>
          <p className="mb-4">
            De acuerdo con la legislación vigente (LSSI y RGPD), le informamos que este sitio web utiliza cookies propias y de terceros para mejorar su experiencia de navegación y obtener estadísticas anónimas.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            ¿Qué son las cookies?
          </h2>
          <p className="mb-4">
            Las cookies son pequeños archivos que se almacenan en su dispositivo cuando navega por la web, que permiten recordar sus preferencias y mejorar el funcionamiento del sitio.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Cookies utilizadas en este sitio
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 dark:border-zinc-600 text-sm">
              <thead>
                <tr className="bg-gray-50 dark:bg-zinc-800">
                  <th className="border border-gray-300 dark:border-zinc-600 p-3 text-left font-semibold">Tipo de Cookie</th>
                  <th className="border border-gray-300 dark:border-zinc-600 p-3 text-left font-semibold">Propietario</th>
                  <th className="border border-gray-300 dark:border-zinc-600 p-3 text-left font-semibold">Nombre(s) de Cookie</th>
                  <th className="border border-gray-300 dark:border-zinc-600 p-3 text-left font-semibold">Finalidad</th>
                  <th className="border border-gray-300 dark:border-zinc-600 p-3 text-left font-semibold">Duración</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-zinc-600 p-3">Técnicas y funcionales</td>
                  <td className="border border-gray-300 dark:border-zinc-600 p-3">Sistemas De T-Cobro S.L. (propia)</td>
                  <td className="border border-gray-300 dark:border-zinc-600 p-3">_session_id, PHPSESSID</td>
                  <td className="border border-gray-300 dark:border-zinc-600 p-3">Permiten la navegación y uso de funciones esenciales del sitio</td>
                  <td className="border border-gray-300 dark:border-zinc-600 p-3">Sesión</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-zinc-600 p-3">Analíticas</td>
                  <td className="border border-gray-300 dark:border-zinc-600 p-3">Google Analytics (tercera)</td>
                  <td className="border border-gray-300 dark:border-zinc-600 p-3">_ga, _gid, _gat</td>
                  <td className="border border-gray-300 dark:border-zinc-600 p-3">Analizan el uso del sitio web para mejorar servicios</td>
                  <td className="border border-gray-300 dark:border-zinc-600 p-3">1 año / 24h</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-zinc-600 p-3">Publicidad (si aplica)</td>
                  <td className="border border-gray-300 dark:border-zinc-600 p-3">Google Ads (tercera)</td>
                  <td className="border border-gray-300 dark:border-zinc-600 p-3">NID, IDE</td>
                  <td className="border border-gray-300 dark:border-zinc-600 p-3">Publicidad personalizada (solo con consentimiento)</td>
                  <td className="border border-gray-300 dark:border-zinc-600 p-3">6 meses</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Cookies de terceros
          </h2>
          <p className="mb-4">
            Los servicios de terceros son ajenos al control del editor. Los proveedores pueden modificar en todo momento sus condiciones de servicio, finalidad y utilización de las cookies, etc.
          </p>
          <p className="mb-4">
            <strong>Proveedores externos de este sitio web:</strong>
          </p>
          
          <div className="bg-gray-50 dark:bg-zinc-800 p-6 rounded-lg mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="text-left font-semibold pb-2">Editor</th>
                  <th className="text-left font-semibold pb-2">Política de privacidad</th>
                </tr>
              </thead>
              <tbody className="space-y-2">
                <tr>
                  <td className="py-1">Bing / Microsoft</td>
                  <td className="py-1">
                    <a href="https://account.microsoft.com/privacy" className="text-[#0e9acd] hover:underline">
                      https://account.microsoft.com/privacy
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="py-1">Google Analytics</td>
                  <td className="py-1">
                    <a href="https://privacy.google.com/take-control.html" className="text-[#0e9acd] hover:underline">
                      https://privacy.google.com/take-control.html
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="py-1">Google</td>
                  <td className="py-1">
                    <a href="https://privacy.google.com/take-control.html" className="text-[#0e9acd] hover:underline">
                      https://privacy.google.com/take-control.html
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="py-1">Google</td>
                  <td className="py-1">
                    <a href="https://safety.google/privacy/privacy-controls/" className="text-[#0e9acd] hover:underline">
                      https://safety.google/privacy/privacy-controls/
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Panel de configuración de cookies
          </h2>
          <p className="mb-4">
            Desde este panel podrá configurar las cookies que el sitio web puede instalar en su navegador, excepto las cookies técnicas o funcionales que son necesarias para la navegación y la utilización de las diferentes opciones o servicios que se ofrecen.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>[Panel de cookies]</strong> - Puede acceder al panel de configuración de cookies haciendo clic en el botón "Cookies" en la esquina inferior izquierda de la página.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Cómo gestionar las cookies desde el navegador
          </h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Eliminar las cookies del dispositivo
            </h3>
            <p className="mb-4">
              Las cookies que ya están en un dispositivo se pueden eliminar borrando el historial del navegador, con lo que se suprimen las cookies de todos los sitios web visitados. Sin embargo, también se puede perder parte de la información guardada (por ejemplo, los datos de inicio de sesión o las preferencias de sitio web).
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Gestionar las cookies específicas del sitio
            </h3>
            <p className="mb-4">
              Para tener un control más preciso de las cookies específicas de cada sitio, los usuarios pueden ajustar su configuración de privacidad y cookies en el navegador.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Bloquear las cookies
            </h3>
            <p className="mb-4">
              Aunque la mayoría de los navegadores modernos se pueden configurar para evitar que se instalen cookies en los dispositivos, eso puede obligar al ajuste manual de determinadas preferencias cada vez que se visite un sitio o página. Además, algunos servicios y características pueden no funcionar correctamente (por ejemplo, los inicios de sesión con perfil).
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Cómo eliminar las cookies de los navegadores más comunes
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Chrome</strong></li>
              <li><strong>Edge</strong></li>
              <li><strong>Internet Explorer</strong></li>
              <li><strong>Firefox</strong></li>
              <li><strong>Safari</strong></li>
              <li><strong>Opera</strong></li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Responsable del tratamiento de datos
          </h2>
          <div className="bg-gray-50 dark:bg-zinc-800 rounded-lg p-6">
            <p className="mb-2"><strong>Sistemas De T-Cobro S.L.</strong></p>
            <p className="mb-2"><strong>CIF:</strong> B86989951</p>
            <p className="mb-2"><strong>Dirección:</strong> C/ Centauro 15, 28971, Griñón, Madrid</p>
            <p className="mb-2"><strong>Email:</strong> consultoria@tcsystems.es</p>
            <p><strong>Teléfono:</strong> +34 629 76 86 36</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Derechos del usuario
          </h2>
          <p className="mb-4">
            Usted puede acceder, rectificar, cancelar y oponerse al tratamiento de sus datos personales conforme al RGPD. Para ejercer sus derechos puede contactar con Sistemas De T-Cobro S.L. en los datos arriba indicados.
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