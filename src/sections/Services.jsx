const Services = () => {
  const sections = [
    {
      title: "Lost Car Key Replacement Services in Kenya",
      image: "/images/suzuki-swift-lost-key.jpg",
      text: (
        <>
          Losing your car keys can be stressful. At{" "}
          <span className="font-semibold text-red-500">
            CarKeyExperts Kenya
          </span>
          , we offer <strong>lost car key replacement</strong> and{" "}
          <strong>car key programming services</strong> for all car models. Our
          professional auto locksmiths use modern tools to{" "}
          <strong>cut and program new car keys</strong> on the spot — quickly
          and safely. Whether your keys are lost, stolen, or broken, our{" "}
          <strong>mobile car locksmiths in Nairobi</strong> and across Kenya are
          ready 24/7 to help you get back on the road.
        </>
      ),
    },
    {
      title: "Spare Car Key Cutting and Programming",
      image: "/images/toyotacross.jpg",
      text: (
        <>
          Don’t wait for an emergency. Our{" "}
          <strong>spare car key cutting and programming services</strong> ensure
          you always have a reliable backup. At{" "}
          <span className="font-semibold text-red-500">CarKeyExperts</span>, we
          create duplicate car keys for Toyota, Nissan, Mazda, BMW, Mercedes,
          and more. Enjoy peace of mind with a professionally made spare key
          from <strong>trusted car locksmiths in Kenya</strong>.
        </>
      ),
      reverse: true,
    },
    {
      title: "Latest Mercedes Benz Spare Key (From the year 2014 and up)",
      image: "/images/MercGLE.png",
      text: (
        <>
          Get a reliable <strong>Mercedes-Benz spare key</strong> for models
          from
          <strong> 2014 and above</strong>, professionally cut and programmed to
          factory standards. At{" "}
          <span className="font-semibold text-red-500">CarKeyExperts</span>, we
          specialize in{" "}
          <strong>
            Mercedes smart key duplication, replacement, and programming
          </strong>{" "}
          for GLE, C-Class, E-Class, S-Class, and more. Our{" "}
          <strong>experienced car locksmiths in Kenya</strong> ensure fast,
          secure, and fully functional spare keys for your Mercedes-Benz.
          <br />
          <br />
          <span className="text-sm text-gray-600 italic">
            Disclaimer: For{" "}
            <strong>Mercedes-Benz models from the year 2014 and up</strong>, a
            working original key is required to make a spare key. We are unable
            to offer spare key services if all keys are lost, damaged, or
            non-functional.
          </span>
        </>
      ),
      reverse: true,
    },

    {
      title: "Emergency Car Door Unlocking Services",
      image: "/images/emergencydoorunlocking.jpg",
      text: (
        <>
          Locked out of your car?{" "}
          <span className="font-semibold text-red-500">CarKeyExperts</span>{" "}
          provides <strong>emergency car unlocking services</strong> anywhere in
          Kenya. Our team safely unlocks vehicles without damage using
          specialized tools. Call our{" "}
          <strong>24-hour car locksmiths in Nairobi</strong> for quick, reliable
          car door unlocking whenever you need it.
        </>
      ),
    },
    {
      title: "Car Key Upgrade and Smart Key Conversion",
      image: "/images/rav4upgrade.png",
      text: (
        <>
          Upgrade your car keys for better convenience and security. Our{" "}
          <strong>car key upgrade services</strong> include converting regular
          keys into <strong>flip keys, smart keys, and remote keys</strong>. At{" "}
          <span className="font-semibold text-red-500">CarKeyExperts</span>, we
          provide seamless key upgrades for all car makes and models across
          Kenya.
        </>
      ),
      reverse: true,
    },
    {
      title: "Car Remote Repair and Broken Key Shell Replacement",
      image: "/images/brokenshell.jpeg",
      text: (
        <>
          Save money by repairing instead of replacing.{" "}
          <span className="font-semibold text-red-500">CarKeyExperts</span>{" "}
          specializes in <strong>car remote repair</strong> and{" "}
          <strong>broken key shell replacement</strong>. We fix worn-out
          buttons, damaged casings, and faulty remote circuits, restoring your
          car remote to look and work like new.
        </>
      ),
    },
  ];

  return (
    <section
      className="py-16 px-4 sm:px-8 lg:px-20 bg-gray-50"
      itemScope
      itemType="https://schema.org/Service"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <h1
            className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight"
            itemProp="name"
          >
            Car Key and Locksmith Services in Kenya
          </h1>
          <p
            className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
            itemProp="description"
          >
            Professional car key programming, replacement, unlocking, and remote
            repair services offered by{" "}
            <span className="font-semibold text-red-500">
              CarKeyExperts Kenya
            </span>
            .
          </p>
        </div>

        {/* Services Grid */}
        {sections.map((section, idx) => (
          <article
            key={idx}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 ${
              section.reverse ? "lg:flex-row-reverse" : ""
            }`}
            itemScope
            itemType="https://schema.org/Service"
          >
            {/* Image */}
            {section.image && (
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg border border-gray-200 group">
                <img
                  src={section.image}
                  alt={`${section.title} - CarKeyExperts Kenya`}
                  className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                  loading="lazy"
                  itemProp="image"
                />
              </div>
            )}

            {/* Text */}
            <div className="flex flex-col items-start mt-6 lg:mt-0">
              <h2
                className="text-3xl font-bold text-red-600 mb-4"
                itemProp="name"
              >
                {section.title}
              </h2>
              <p
                className="text-gray-700 leading-relaxed text-lg"
                itemProp="description"
              >
                {section.text}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
