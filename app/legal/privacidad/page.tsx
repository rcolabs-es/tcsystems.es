import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidad | TCSystems',
  description: 'Política de privacidad y protección de datos personales de TCSystems - Sistemas de Cobro Automático.',
  robots: 'index, follow',
}

export default function PrivacidadPage() {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        Política de Privacidad
      </h1>
      
      <div className="space-y-8 text-gray-600 dark:text-zinc-300">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            1. Información al Usuario
          </h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              ¿Quién es el responsable del tratamiento de tus datos personales?
            </h3>
            <p className="mb-4">
              Sistemas De T-Cobro S.L. (tcsystems.es) es el RESPONSABLE del tratamiento de los datos personales del USUARIO y le informa de que estos datos serán tratados conforme a lo dispuesto en el Reglamento (UE) 2016/679, de 27 de abril (GDPR), y la Ley Orgánica 3/2018, de 5 de diciembre (LOPDGDD).
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              ¿Para qué tratamos tus datos personales?
            </h3>
            <p className="mb-4">
              En tcsystems.es tratamos la información personal del usuario con el objetivo de mantener una relación comercial que nos permita ofrecer y mejorar nuestros servicios. Las operaciones previstas para realizar dicho tratamiento incluyen:
            </p>
            <ul className="list-disc pl-6 space-y-3 mb-4">
              <li>
                <strong>Comunicaciones Comerciales:</strong> Envío de comunicaciones promocionales relacionadas con nuestros servicios, productos y actividades. Estas comunicaciones se realizarán por medios electrónicos o físicos, presentes o futuros, y estarán vinculadas directamente con nuestros productos o servicios, o con los de colaboradores o proveedores con quienes tengamos acuerdos de promoción. En ningún caso terceros tendrán acceso a los datos personales de los usuarios.
              </li>
              <li>
                <strong>Estudios de Mercado y Análisis Estadísticos:</strong> Realización de estudios de mercado y análisis que nos permitan mejorar y personalizar nuestros servicios, entendiendo mejor las necesidades y preferencias de los usuarios.
              </li>
              <li>
                <strong>Gestión de Solicitudes y Consultas:</strong> Tramitación de encargos, solicitudes y respuestas a consultas o cualquier tipo de petición realizada por el usuario a través de los canales disponibles en la web.
              </li>
              <li>
                <strong>Envío de Boletines Informativos:</strong> Remisión de boletines con novedades, ofertas y promociones relacionadas con nuestra actividad y servicios, manteniendo informado al usuario.
              </li>
            </ul>
            <p className="mb-4">
              Al proporcionar sus datos personales, el usuario acepta y consiente expresamente el tratamiento para las finalidades mencionadas. Sistemas De T-Cobro S.L. se compromete a tratar la información con confidencialidad y a aplicar las medidas de seguridad necesarias para garantizar su protección conforme a la normativa vigente.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              ¿Por qué motivo podemos tratar tus datos personales?
            </h3>
            <p className="mb-4">
              El tratamiento está legitimado según el artículo 6 del GDPR de la siguiente forma:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Con el consentimiento del USUARIO:</strong> para envío de comunicaciones comerciales y boletines informativos.</li>
              <li><strong>Por interés legítimo del RESPONSABLE:</strong> para realizar estudios de mercado, análisis estadísticos y tramitar solicitudes a petición del usuario.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              ¿Durante cuánto tiempo guardaremos tus datos personales?
            </h3>
            <p className="mb-4">
              Se conservarán no más tiempo del necesario para cumplir el fin del tratamiento o según prescripciones legales. Cuando no sean necesarios, se suprimirán aplicando medidas de seguridad para garantizar la anonimización o destrucción total de los datos.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              ¿A quién facilitamos tus datos personales?
            </h3>
            <p className="mb-4">
              No se comunicarán datos personales a terceros salvo que sea necesario para el desarrollo y ejecución de las finalidades, a proveedores de servicios con contratos de confidencialidad y encargados de tratamiento conforme a la normativa vigente.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              ¿Cuáles son tus derechos?
            </h3>
            <p className="mb-4">
              Los derechos del USUARIO son:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Retirar el consentimiento en cualquier momento.</li>
              <li>Acceder, rectificar, portar y suprimir sus datos, así como limitar u oponerse a su tratamiento.</li>
              <li>Presentar una reclamación ante la autoridad de control (<a href="https://www.aepd.es" className="text-[#0e9acd] hover:underline">www.aepd.es</a>) si considera que el tratamiento no cumple la normativa.</li>
            </ul>
            <div className="bg-gray-50 dark:bg-zinc-800 rounded-lg p-6 mt-4">
              <p className="font-semibold text-gray-900 dark:text-white mb-2">Datos de contacto para ejercer sus derechos:</p>
              <p className="mb-1">Sistemas De T-Cobro S.L.</p>
              <p>Correo electrónico: <strong>consultoria@tcsystems.es</strong></p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            2. Carácter Obligatorio o Facultativo de la Información Facilitada por el Usuario
          </h2>
          <p className="mb-4">
            Los usuarios, mediante la marcación de las casillas correspondientes y la entrada de datos en los formularios de contacto o descarga, aceptan expresamente y libremente que sus datos son necesarios para atender su petición. La inclusión de datos en campos no obligatorios es voluntaria.
          </p>
          <p className="mb-4">
            El usuario garantiza que los datos facilitados son veraces y se compromete a comunicar cualquier modificación.
          </p>
          <p className="mb-4">
            Si no se facilitan todos los datos obligatorios, no se garantiza que la información y servicios sean totalmente ajustados a sus necesidades.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            3. Medidas de Seguridad
          </h2>
          <p className="mb-4">
            Sistemas De T-Cobro S.L. cumple con las disposiciones de GDPR y LOPDGDD para garantizar que el tratamiento de datos personales se realiza conforme a los principios de licitud, lealtad, transparencia, adecuación, pertinencia y limitación al mínimo necesario.
          </p>
          <p className="mb-4">
            Se han implementado políticas técnicas y organizativas adecuadas para proteger los derechos y libertades de los usuarios y se les ha facilitado la información necesaria para ejercer sus derechos.
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