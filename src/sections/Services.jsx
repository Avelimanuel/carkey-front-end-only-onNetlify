const Services = () => {
  const sections = [
    {
      title: "Lost Key Services",
      image: "/images/lexuslostkey.jpg",
      text: (
        <>
          At <span className="font-semibold text-red-500">CarKeyExperts</span>,
          we know losing your car keys can be a hassle. Our{" "}
          <span className="font-semibold text-red-500">lost car key services</span>{" "}
          are designed to get you back on the road fast. Equipped with
          cutting-edge technology, our skilled locksmiths can{" "}
          <span className="font-semibold text-red-600">cut and program new keys</span>{" "}
          for any vehicle on the spot. Whether your keys are lost, stolen, or
          damaged, our emergency mobile locksmiths are ready to assist you
          anywhere, anytime.
        </>
      ),
    },
    {
      title: "Spare Key Services",
      image: "/images/cx5.png",
      text: (
        <>
          Stay prepared with our reliable spare key services. Our expert
          technicians can quickly cut and program additional keys for any
          vehicle, ensuring you always have a backup. With{" "}
          <span className="font-semibold text-red-500">CarKeyExperts</span>,
          enjoy the peace of mind and convenience that comes with a spare key,
          crafted swiftly and professionally.
        </>
      ),
      reverse: true,
    },
    {
      title: "Emergency Car Door Unlocking",
      image: "/images/emergencydoorunlocking.jpg",
      text: (
        <>
          Locked out of your car?{" "}
          <span className="font-semibold text-red-500">CarKeyExperts</span>{" "}
          offers fast and reliable emergency car door unlocking services.
          Whether your keys are lost or left inside, our skilled technicians use
          advanced tools to unlock any vehicle safely and without damage. Count
          on us for prompt, professional service to get you back on your way, no
          matter the time or place.
        </>
      ),
    },
    {
      title: "Car Key Upgrade",
      image: "/images/keyupgrade.jpg",
      text: (
        <>
          Give your car a modern touch with our car key upgrade services.
          Whether you're switching to a flip key, smart key, or adding remote
          locking features, our technicians ensure a seamless upgrade process.
          At <span className="font-semibold text-red-500">CarKeyExperts</span>,
          we enhance your convenience and security with professionally upgraded
          keys tailored to your vehicle.
        </>
      ),
      reverse: true,
    },
    {
      title: "Remote Repair & Shell Replacement",
      image: "/images/remote-repair.jpg",
      text: (
        <>
          At <span className="font-semibold text-red-500">CarKeyExperts</span>,
          we also specialize in replacing damaged car key casings and shells,
          repairing faulty car key remotes, and fixing worn-out remote buttons.
          Our technicians restore the functionality and look of your remote keys
          with quality parts and fast service—so your key feels like new again.
        </>
      ),
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-8 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Our Services
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Expert solutions for all your car key and lock needs.
          </p>
        </div>

        {/* Services Grid */}
        {sections.map((section, idx) => (
          <div
            key={idx}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 ${
              section.reverse ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            {section.image && (
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg border border-gray-200 group">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            )}

            {/* Text */}
            <div className="flex flex-col items-start mt-6 lg:mt-0">
              <h2 className="text-3xl font-bold text-red-600 mb-4">
                {section.title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {section.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
