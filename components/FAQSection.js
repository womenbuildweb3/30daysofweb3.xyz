import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

const faqsEN = [
  {
    id: 1,
    question: "What is the time commitment for this curriculum?",
    answer:
      "This course is fully-online and asynchronous. You may participate at any pace and time commitment, but it was designed to take no more than 45mins per day.",
  },
  {
    id: 4,
    question: "What will I learn in this curriculum?",
    answer:
      "You'll learn how to build a dapp, end-to-end. You'll write the smart contract, the front end, and everything in between. Check out the home page for a more detailed overview of the content.",
  },
  {
    id: 5,
    question: "Can I participate if I'm a beginner?",
    answer:
      "Yes! This course is less focused on programming specifics and fundamentals, and more focused on helping developers build a mental model and an architectural reference for building a dapp. We will give you the code for all of the sections, and although it will be helpful, it is not required to have deep programming expereince.",
  },
  {
    id: 9,
    question: "What benefit do I get by being part of a partner community?",
    answer:
      "Members of partner communities will get access to register for the course before it becomes available to the general public. The first cohort will be capped, so this ensures that communities are able to get a seat in the course.",
  },
  {
    id: 2,
    question: "How can I get support if I get stuck?",
    answer: "Our team will be available to answer questions via Discord.",
  },
  {
    id: 3,
    question: "Will the workshops be recorded?",
    answer:
      "Yes. Workshops will be recorded and posted on our YouTube channel and linked on this website.",
  },
  {
    id: 6,
    question: "What comes next?",
    answer:
      "Women and nonbinary people who successfuly complete the curriculum and meet a standard of completion will be invited to join the DAO and participate in the second phase of this program. In this phase, builders can request money from our treasury to build *anything web3*.",
  },
  {
    id: 7,
    question: "Can I participate if I'm a man?",
    answer:
      "Yes! 30 Days of Web3 is a public good that is available to anyone, anytime. The content will be open-sourced, allowing any other groups to fork it and customize their curriculum.",
  },
  {
    id: 8,
    question: "Why do I have to provide my email and wallet address?",
    answer:
      "We'll be awarding on-chain, proof of knowledge tokens and will need your email and wallet address to notify you of and send you tokens.",
  },
  {
    id: 10,
    question:
      "After registering through your form, how do I know I'll be part of the learning cohort?",
    answer:
      "We'll send out an email confirming your access to our first ever learning cohort in our Discord server.",
  },
  // More items...
];

const faqsES = [
  {
    id: 1,
    question:
      "¿Cuál es el compromiso de tiempo para desarrollar este plan de estudios?",
    answer:
      "Este curso es completamente en línea y asíncrono. Usted podrá participar a cualquier ritmo y con cualquier dedicación horaria, pero fue diseñado para no tomar más de 45 minutos por día.",
  },
  {
    id: 4,
    question: "¿Qué aprenderé con este plan de estudios?",
    answer:
      "Aprenderá cómo crear una dApp, de principio a fin. Usted redactará el smart contract (contrato inteligente), el front-end/la interfaz gráfica, y todo lo demás. Revise la página principal para una descripción más detallada del contenido.",
  },
  {
    id: 5,
    question: "¿Puedo participar si soy principiante?",
    answer:
      "¡Si! Este curso no está tan enfocado en fundamentos y elementos específicos de programación, sino en ayudar a los desarrolladores a crear un modelo mental y una referencia estructural de cómo crear una dApp. Proveeremos todo el código para cada una de las secciones, y aunque será útil, no es necesario tener mayor experiencia en programación.",
  },
  {
    id: 9,
    question: "¿Qué beneficio recibo al ser parte de comunidades aliadas?",
    answer:
      "Los miembros de las comunidades aliadas tendrán acceso para registrarse al curso antes de que esté disponible al público en general. La primera cohorte tendrá un máximo, para asegurar que las comunidades puedan asegurar un lugar en el curso.",
  },
  {
    id: 2,
    question: "¿Cómo puedo obtener ayuda si me estanco?",
    answer:
      "Nuestro equipo estará disponible para responder preguntas a través de Discord.",
  },
  {
    id: 3,
    question: "¿Los talleres serán grabados?",
    answer:
      "Si. Los talleres serán grabados y publicados en nuestro canal de YouTube y su enlace estará disponible en esta página.",
  },
  {
    id: 6,
    question: "¿Qué sigue después?",
    answer:
      "Las mujeres y personas no binarias que completen el plan de estudios exitosamente y cumplan con un estándar de finalización serán invitadxs a unirse al DAO y participar en la segunda fase de este programa. En esa fase, los creadores podrán solicitar fondos de nuestra tesorería para crear * cualquier cosa de Web3 *.",
  },
  {
    id: 7,
    question: "¿Puedo participar si soy hombre?",
    answer:
      "¡Si! 30 días de Web3 es un bien público que está disponible para todos, en todo momento. El contenido será de código abierto, lo que permitirá que otros grupos lo ramifiquen y personalicen su plan de estudios.",
  },
  {
    id: 8,
    question:
      "¿Por qué debo compartir mi correo electrónico y la dirección de mi billetera?",
    answer:
      "Vamos a dar tokens de proof of knowledge sobre la cadena y necesitaremos su correo y dirección de billetera para notificarle al respecto y enviarle sus tokens.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function FAQSection({ locale }) {
  const faqs = locale !== "es" ? faqsEN : faqsES;

  return (
    <div id="faqs" className="py-12 sm:py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto divide-y divide-slate-500">
        <h2 className="text-center text-3xl font-extrabold text-slate-900 sm:text-4xl">
          {locale !== "es" ? "FAQs" : "Preguntas frecuentes"}
        </h2>
        <dl className="mt-6 space-y-6 divide-y divide-slate-500">
          {faqs.map((faq) => (
            <Disclosure as="div" key={faq.id} className="pt-6">
              {({ open }) => (
                <>
                  <dt className="text-lg">
                    <Disclosure.Button className="text-left w-full flex justify-between items-start text-slate-700">
                      <span className="font-medium text-slate-900">
                        {faq.question}
                      </span>
                      <span className="ml-6 h-7 flex items-center">
                        <ChevronDownIcon
                          className={classNames(
                            open ? "-rotate-180" : "rotate-0",
                            "h-6 w-6 transform"
                          )}
                          aria-hidden="true"
                        />
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    <p className="text-base text-slate-700">{faq.answer}</p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </div>
    </div>
  );
}
