import { achievements } from "@/data/achievements";

export default function Achievements() {
  const featured = achievements.find((item) => item.highlight);
  const others = achievements.filter((item) => !item.highlight);

  return (
    <section id="achievements" className="px-4 md:px-10 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black">
            Achievements &{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Certifications, hackathons, workshops and community achievements
            from my learning journey.
          </p>
        </div>

        {/* Featured Badge */}
        {featured && (
          <div
            className="
            mb-12
            grid
            lg:grid-cols-2
            gap-8
            rounded-3xl
            border border-yellow-500/20
            bg-gradient-to-r
            from-yellow-500/5
            via-purple-500/5
            to-cyan-500/5
            p-8
            "
          >
            <div className="flex justify-center items-center">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-52 md:w-64 h-auto object-contain"
              />
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{featured.icon}</span>

                <div>
                  <h3 className="text-2xl md:text-3xl font-bold">
                    {featured.title}
                  </h3>

                  <p className="text-gray-400">{featured.issuer}</p>
                </div>
              </div>

              <p className="text-gray-300">{featured.description}</p>

              <span className="mt-4 inline-block px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 w-fit">
                Verified Recognition
              </span>
            </div>
          </div>
        )}

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {others.map((achievement) => (
            <div
              key={achievement.title}
              className="
              group
              rounded-3xl
              border border-white/10
              bg-white/[0.03]
              p-6
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-purple-500/30
              hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]
              "
            >
              <img
                src={achievement.image}
                alt={achievement.title}
                className="
                  w-full
                  h-60
                  md:h-72
                  lg:h-80
                  object-contain
                  rounded-xl
                  bg-white
                  p-2
                  mb-5
                "
              />

              <div className="text-4xl mb-3">{achievement.icon}</div>

              <h3 className="text-xl font-semibold">{achievement.title}</h3>

              <p className="text-gray-400 mt-2">{achievement.issuer}</p>

              <p className="text-sm text-gray-500 mt-2">{achievement.year}</p>

              <p className="text-sm text-gray-400 mt-3">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
