'use client'

import { useLanguage } from '@/context/LanguageContext'
import { useSocial } from '@/context/SocialProvider'

export default function PricingTables() {
  const { language } = useLanguage()
  const { whatsappLink } = useSocial()

  /* ────────────────  Text dictionary  ──────────────── */
  const t = {
    free:   { en: 'Free Start',            es: 'Inicio Gratis' },
    week:   { en: 'Weekly Coaching',       es: 'Coaching Semanal' },
    ai:     { en: 'AI Deep-Dive',          es: 'Inmersión IA' },
    audit:  { en: 'Western English Audit', es: 'Auditoría de Inglés Occidental' },
    content:{ en: 'Content Assistance',    es: 'Asistencia de Contenido' },

    once:   { en: '/ once',    es: '/ una vez' },
    weekly: { en: '/ week',    es: '/ semana' },
    hour:   { en: '/ hour',    es: '/ hora' },
    proj:   { en: '/ project', es: '/ proyecto' },

    includes: { en: 'Includes:', es: 'Incluye:' },

    freeDesc:   {
      en: 'Follow-first model. Start learning with free videos, tasks, and challenges.',
      es: 'Modelo “síguenos primero”. Empieza con videos, tareas y retos gratuitos.',
    },
    weeklyDesc: {
      en: 'Stay on track with a 10-min weekly call, voice feedback, and unlock our MP3 pack.',
      es: 'Mantente al día con una llamada semanal de 10 min, feedback de voz y acceso al paquete MP3.',
    },
    aiDesc: {
      en: 'Practice English live using ChatGPT Voice mode. You speak, we guide.',
      es: 'Practica inglés en vivo con el modo de voz de ChatGPT. Tú hablas, nosotros guiamos.',
    },
    auditDesc: {
      en: 'We’ll analyse your local store — signage, speech, tone — and suggest how to sound more native.',
      es: 'Analizaremos tu tienda — letreros, discurso y tono — y te diremos cómo sonar más nativo.',
    },
    contentDesc: {
      en: 'Need help editing videos or crafting engaging content in English? We’ve got you.',
      es: '¿Necesitas ayuda editando videos o creando contenido atractivo en inglés? Te ayudamos.',
    },

    bullets: {
      purpose:  { en: '✅ Purpose Talk',                 es: '✅ Charla de Propósito' },
      playlist: { en: '🎥 Video playlists',              es: '🎥 Listas de reproducción' },
      tasks:    { en: '📱 WhatsApp proof tasks',         es: '📱 Tareas de WhatsApp' },

      check:    { en: '📞 Weekly check-ins',             es: '📞 Revisiones semanales' },
      mp3:      { en: '🎧 Full MP3/MP4 pack access',     es: '🎧 Acceso completo a MP3/MP4' },
      pron:     { en: '🗣️ Feedback on pronunciation',   es: '🗣️ Feedback de pronunciación' },
      goals:    { en: '📲 WhatsApp goal tracking',       es: '📲 Seguimiento de objetivos' },

      guided:   { en: '🧠 Guided voice sessions',        es: '🧠 Sesiones de voz guiadas' },
      livePron: { en: '🗣️ Real-time pronunciation FB',  es: '🗣️ Pronunciación en tiempo real' },
      convo:    { en: '🎓 Conversation training',        es: '🎓 Entrenamiento conversacional' },
      pack5:    { en: '📦 5-hour pack: $35',             es: '📦 Paquete 5 h: $35' },

      vibe:     { en: '🕵️ English vibe audit',          es: '🕵️ Auditoría de vibra' },
      videoBio: { en: '📊 Video & bio feedback',         es: '📊 Feedback de video y bio' },
      tips:     { en: '🎯 Accent, phrases, energy tips', es: '🎯 Consejos de acento y energía' },
      deliver:  { en: '📥 Delivered in 48 hours',        es: '📥 Entrega en 48 h' },

      edit:     { en: '✂️ Video editing tips/support',   es: '✂️ Consejos/soporte de edición' },
      caption:  { en: '📄 Caption clean-up',             es: '📄 Limpieza de subtítulos' },
      hooks:    { en: '🎬 Feedback on hooks & delivery', es: '🎬 Feedback en hooks y delivery' },
      script:   { en: '🧑‍🎨 Script & story collaboration', es: '🧑‍🎨 Colaboración en guion e historia' },
    },

    cta: {
      free:    { en: 'Join Free',       es: 'Únete Gratis' },
      week:    { en: 'Start Coaching',  es: 'Empezar Coaching' },
      ai:      { en: 'Book Session',    es: 'Reservar Sesión' },
      audit:   { en: 'Get Audit',       es: 'Obtener Auditoría' },
      content: { en: 'Request Support', es: 'Solicitar Soporte' },
    },
  }

  const b = (k: keyof typeof t.bullets) => t.bullets[k][language]

  function PlanCard({
    title,
    price,
    suffix,
    desc,
    bullets,
    cta,
    wa,
    delay = '0',
  }: {
    title: string
    price: string
    suffix: string
    desc: string
    bullets: string[]
    cta: string
    wa: string
    delay?: string
  }) {
   

    return (
      <div
        className="relative flex flex-col h-full px-6 py-5 bg-white shadow-lg"
        data-aos="fade-up"
        {...(delay !== '0' && { 'data-aos-delay': delay })}
      >
        <div className="mb-4 pb-4 border-b border-slate-200">
          <div className="text-lg font-semibold text-slate-800 mb-1">{title}</div>
          <div className="inline-flex items-baseline mb-3">
            <span className="h3 font-medium text-slate-500">$</span>
            <span className="h2 leading-7 font-playfair-display text-slate-800">{price}</span>
            <span className="font-medium text-slate-400"> {suffix}</span>
          </div>
          <div className="text-slate-500">{desc}</div>
        </div>

        <div className="font-medium mb-3">{t.includes[language]}</div>
        <ul className="text-slate-500 space-y-3 grow mb-6">
          {bullets.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>

        <div className="p-3 rounded-sm bg-slate-50">
          <a
            href={`${whatsappLink}?text=Hi!%20I%20want%20${wa}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-sm text-white bg-slate-600 hover:bg-slate-700 w-full group"
          >
            {cta}
            <span className="text-slate-300 group-hover:translate-x-0.5 ml-1 transition-transform">
              -&gt;
            </span>
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none pt-4 mb-12">
        <PlanCard
          title={t.free[language]}
          price="0"
          suffix={t.once[language]}
          desc={t.freeDesc[language]}
          bullets={[b('purpose'), b('playlist'), b('tasks')]}
          cta={t.cta.free[language]}
          wa="the%20Free%20Start%20plan"
        />
        <PlanCard
          title={t.week[language]}
          price="7"
          suffix={t.weekly[language]}
          desc={t.weeklyDesc[language]}
          bullets={[b('check'), b('mp3'), b('pron'), b('goals')]}
          cta={t.cta.week[language]}
          wa="Weekly%20Coaching"
          delay="100"
        />
        <PlanCard
          title={t.ai[language]}
          price="7"
          suffix={t.hour[language]}
          desc={t.aiDesc[language]}
          bullets={[b('guided'), b('livePron'), b('convo'), b('pack5')]}
          cta={t.cta.ai[language]}
          wa="an%20AI%20Deep-Dive%20session"
          delay="200"
        />
      </div>

      <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none pt-4">
        <PlanCard
          title={t.audit[language]}
          price="20"
          suffix={t.once[language]}
          desc={t.auditDesc[language]}
          bullets={[b('vibe'), b('videoBio'), b('tips'), b('deliver')]}
          cta={t.cta.audit[language]}
          wa="a%20Western%20English%20Audit"
        />
        <PlanCard
          title={t.content[language]}
          price="TBD"
          suffix={t.proj[language]}
          desc={t.contentDesc[language]}
          bullets={[b('edit'), b('caption'), b('hooks'), b('script')]}
          cta={t.cta.content[language]}
          wa="Content%20Assistance"
          delay="100"
        />
      </div>
    </div>
  )
}
