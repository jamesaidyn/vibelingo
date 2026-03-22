export default function FeaturesBlocks({ dict }: { dict: any }) {
  return (
    <section
      id="why-vibelingo-works"
      aria-labelledby="features-heading"
      className="bg-white text-slate-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          <div className="text-center max-w-3xl mx-auto mb-12">
            <header>
              <h2 id="features-heading" className="h2 font-playfair-display mb-4">
                {dict.home.features_blocks.title}
              </h2>
              <p className="text-xl text-slate-500">
                {dict.home.features_blocks.description}
              </p>
            </header>
          </div>

          <div
            className="relative max-w-sm mx-auto grid gap-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-20 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
            role="list"
            aria-label="VibeLingo Features"
          >

            {/* Feature Items mapped from the dictionary */}
            {dict.home.features_blocks.items.map((item: any, index: number) => (
              <div
                key={index}
                className="relative"
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-blocks]"
                data-aos-delay={index * 100}
                role="listitem"
              >
                <h3 className="h4 font-playfair-display mb-2">{item.title}</h3>
                <p className="text-lg text-slate-500">{item.desc}</p>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  )
}