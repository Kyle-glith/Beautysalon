import Layout from "@/component/Layout";
import { Star, Sparkles, ArrowRight, Image as ImageIcon, Package as PackageIcon, Crown, X } from "lucide-react";
import { useRef, useState } from "react";
import BeforeAfterSlider from "@/component/BeforeAfterSlider";

const Index = () => {
  // wa.me butuh format internasional tanpa "0" di depan.
  // Contoh user: 0878... -> 62878...
  const WHATSAPP_NUMBER = "6287866242877";
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello BeautySalon, I'd like to book an appointment. Could you let me know the available schedule?",
  )}`;

  const servicesTrackRef = useRef<HTMLDivElement | null>(null);
  const dragStateRef = useRef<{
    isDown: boolean;
    startX: number;
    startScrollLeft: number;
  }>({ isDown: false, startX: 0, startScrollLeft: 0 });

  const [lightbox, setLightbox] = useState<{ title: string; image: string } | null>(null);
  const [showAllGallery, setShowAllGallery] = useState(false);

  const onServicesPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = servicesTrackRef.current;
    if (!el) return;
    dragStateRef.current.isDown = true;
    dragStateRef.current.startX = e.clientX;
    dragStateRef.current.startScrollLeft = el.scrollLeft;
    el.setPointerCapture(e.pointerId);
  };

  const onServicesPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = servicesTrackRef.current;
    if (!el) return;
    if (!dragStateRef.current.isDown) return;
    const delta = e.clientX - dragStateRef.current.startX;
    el.scrollLeft = dragStateRef.current.startScrollLeft - delta;
  };

  const onServicesPointerUpOrCancel = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = servicesTrackRef.current;
    dragStateRef.current.isDown = false;
    if (!el) return;
    try {
      el.releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  const services = [
    {
      title: "Hair Styling",
      desc: "Professional hair cutting, styling, and treatments.",
      image:
        "/assets/Rambut.jpg",
    },
    {
      title: "Eyelash Extension",
      desc: "Eyelash extensions for a more natural look.",
      image:
        "/assets/Eyelasesh.jpg",
    },
    {
      title: "Nail Art",
      desc: "Manicure and pedicure with beautiful designs.",
      image:
        "/assets/Nail.jpg",
    },
    {
      title: "Eyebrow Styling",
      desc: "Naturally shaped and defined eyebrows.",
      image:
        "/assets/Eyebrown.jpg",
    },
    {
      title: "Professional Makeup",
      desc: "Natural and flawless makeup for any occasion.",
      image:
        "/assets/Makeup.jpg",
    },
    {
      title: "Premium Spa",
      desc: "Experience ultimate relaxation and comfort.",
      image:
        "/assets/Spa.jpg",
    },
  ];

  const promos = [
    {
      title: "Eyebrow Styling",
      originalPrice: "Rp 200.000",
      price: "Rp 150.000",
      discount: "25% OFF",
      desc: "Neater and more natural eyebrows, perfect for daily look.",
      image: "/assets/Eyebrown2.jpg",
      label: "Weekly Promo",
    },
    {
      title: "Makeup",
      originalPrice: "Rp 350.000",
      price: "Rp 250.000",
      discount: "10% OFF",
      desc: "Flawless and long-lasting makeup for a natural look.",
      image: "/assets/Makeup1.jpg",
      label: "Best Seller",
    },
    {
      title: "Eyelash Extension",
      originalPrice: "Rp 300.000",
      price: "Rp 200.000",
      discount: "30% OFF",
      desc: "Longer and more natural eyelashes without thick extensions.",
      image: "/assets/Eyelasesh1.jpg",
      label: "Limited Offer",
    },
    {
      title: "Manicure & Pedicure",
      originalPrice: "Rp 280.000",
      price: "Rp 200.000",
      discount: "20% OFF",
      desc: "Complete nail care for beautiful hands and feet.",
      image: "/assets/Manicure.jpg",
      label: "Special Price",
    },
  ];

  const packages = [
  {
    title: "Luxury Glam Package",
    price: "Rp 250.000",
    desc: "Flawless and long-lasting makeup to make you look beautiful and confident in every special moment.",
    badge: "Best Value",
  },
  {
    title: "Radiant Hair Transformation",
    price: "Rp 450.000",
    desc: "Stylish hair coloring with neat cutting and styling that makes hair look fresher and shinier.",
    badge: "Popular",
  },
  {
    title: "Perfect Eye Beauty Package",
    price: "Rp 300.000",
    desc: "Lash lift and brow styling for a sharper eye look and fresher face.",
    badge: "New",
  },
];

  const gallery = [
    {
      title: "Hair Styling & Color",
      before: "/assets/hairbefore.jpg",
      after: "/assets/hairafter.jpg",
      description: "Hair color transformation with professional balayage technique"
    },
    {
      title: "Facial Treatment",
      before: "/assets/facialbefore.jpg",
      after: "/assets/facialafter.jpg",
      description: "Brighter and glowing skin after facial treatment"
    },
    {
      title: "Nail Art & Manicure",
      before: "/assets/nailbefore.jpg",
      after: "/assets/nailafter.jpg",
      description: "Beautiful nail art with custom design"
    },
    {
      title: "Eyelash Extension",
      before: "/assets/eyelasesbefore.jpg",
      after: "/assets/eyelasesafter.jpg",
      description: "Longer and more natural eyelashes with extensions"
    },
    {
      title: "Makeup Transformation",
      before: "/assets/makeupbefore.jpg",
      after: "/assets/makeupafter.jpg",
      description: "Flawless makeup for special events"
    },
    {
      title: "Eyebrow Styling",
      before: "/assets/eyebrownbefore.jpg",
      after: "/assets/eyebrownafter.jpg",
      description: "Neater and more natural eyebrows with microblading technique"
    },
    {
      title: "Spa & Relaxation",
      before: "/assets/spabefore.jpg",
      after: "/assets/spaafter.jpg",
      description: "Total relaxation with premium spa treatment"
    },
  ];

  const displayedGallery = showAllGallery ? gallery : gallery.slice(0, 6);

  const testimonials = [
    {
      name: "Nadia A.",
      role: "Regular Customer",
      content: "The best salon experience! The staff is very professional and the results are always satisfying.",
      stars: 5,
    },
    {
      name: "Sarah W.",
      role: "Bridal Client",
      content: "I loved my wedding makeup. It was natural but made me look stunning. Highly recommend!",
      stars: 5,
    },
    {
      name: "Rina S.",
      role: "Regular Customer",
      content: "Their spa treatment is so relaxing. The atmosphere is perfect for a self-care day.",
      stars: 5,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen bg-[url('/assets/bg1.jpg')] bg-cover bg-center flex items-center justify-center relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 text-center pt-40">
        <h1 className="font-display text-6xl md:text-6xl font-bold mb-6 text-yuma-300 leading-tight">
          Your Beauty, <br /> Our Masterpiece
        </h1>

        <p className="font-body text-lg md:text-lg text-yuma-300 max-w-3xl mx-auto mb-16">
          Experience premium beauty treatments that bring out your natural glow and elegance.
        </p>

        <a
          href={waLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-sage-600 text-white px-8 py-4 rounded-full font-body uppercase tracking-widest hover:bg-sage-500 transition-all transform hover:scale-105 shadow-xl"
        >
          Book Your Appointment <ArrowRight size={20} />
        </a>
      </div>
      </section>

      {/* Services Slider */}
      <section className="py-20 px-6 bg-yuma-200">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="inline-flex items-center gap-2 font-body text-xs tracking-[0.3em] uppercase text-sage-700/80">
              <Sparkles size={16} /> Our Premium Services
            </p>
            <h2 className="font-display text-4xl font-bold mt-3 text-sage-600">Tailored For You</h2>
          </div>

          <div className="relative -mx-6 px-6">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-14 bg-gradient-to-r from-yuma-200 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-yuma-200 to-transparent" />

            <div
              ref={servicesTrackRef}
              className="flex gap-6 overflow-x-auto pb-2 -mb-2 scroll-smooth select-none cursor-grab active:cursor-grabbing hide-scrollbar"
              style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-y" }}
              onPointerDown={onServicesPointerDown}
              onPointerMove={onServicesPointerMove}
              onPointerUp={onServicesPointerUpOrCancel}
              onPointerCancel={onServicesPointerUpOrCancel}
              onPointerLeave={onServicesPointerUpOrCancel}
              aria-label="Daftar layanan (bisa di-drag)"
            >
              {services.map((service, idx) => (
                <div
                  key={service.title}
                  className="group relative min-w-[280px] w-[280px] sm:min-w-[360px] sm:w-[360px] rounded-2xl overflow-hidden border border-yuma-100 bg-white/60 shadow-sm hover:shadow-lg transition-all duration-300 animate-pop-in will-change-transform"
                  style={{ animationDelay: `${idx * 120}ms` }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.8),transparent_60%)]" />
                  <div className="h-62 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      draggable={false}
                    />
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-2xl font-semibold mb-3 text-yuma-900">{service.title}</h3>
                    <p className="font-body text-yuma-600 mb-5">{service.desc}</p>
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 font-body text-sm text-sage-700 hover:text-sage-900 transition-colors"
                      draggable={false}
                      onDragStart={(ev) => ev.preventDefault()}
                    >
                      Booking via WhatsApp <ArrowRight size={16} />
                    </a>
                  </div>
                  <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ring-2 ring-yuma-400/50" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Promotions */}
      <section className="py-20 px-6 bg-yuma-200 border-t border-b">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="inline-flex items-center justify-center gap-2 font-body text-xs tracking-[0.3em] uppercase text-sage-700/80">
              <Crown size={16} /> Limited Time Offers
            </p>
            <h2 className="font-display text-4xl font-bold mt-3 text-sage-600">Special Promotions</h2>
            <p className="font-body text-sage-600 mt-3">Get premium treatments at special prices, limited time only!</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Featured promo */}
            <div className="lg:col-span-7">
              <div className="group relative rounded-3xl overflow-hidden border border-yuma-100 shadow-sm hover:shadow-xl transition-all duration-300 animate-pop-in h-full min-h-[360px]">
                <img
                  src={promos[0]?.image}
                  alt={promos[0]?.title}
                  className="absolute inset-0 h-full w-full object-cover opacity-90 scale-105 group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />

                {/* Discount Badge */}
                <div className="absolute top-5 left-5 bg-sage-500 text-white px-4 py-1.5 rounded-full font-body text-sm font-bold shadow-lg">
                  {promos[0]?.discount}
                </div>
                <div className="absolute top-5 right-5 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full font-body text-xs">
                  {promos[0]?.label}
                </div>

                <div className="relative p-8 sm:p-10 min-h-[360px] flex flex-col justify-end">
                  <h3 className="font-display text-4xl sm:text-5xl font-bold text-white mt-4">
                    {promos[0]?.title}
                  </h3>
                  <p className="font-body text-white mt-3 max-w-xl">{promos[0]?.desc}</p>

                  <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <div className="flex items-center gap-2">
                      <span className="font-body text-sm line-through text-white/50">{promos[0]?.originalPrice}</span>
                      <span className="font-body text-lg font-bold text-white">{promos[0]?.price}</span>
                    </div>
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-sage-500 text-white px-5 py-2 rounded-lg font-body uppercase tracking-wider hover:bg-sage-700 transition-colors"
                    >
                      Claim Promo <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Compact promo list */}
            <div className="lg:col-span-5 flex flex-col gap-4 justify-between">
              {promos.slice(1).map((item, idx) => (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-yuma-100 bg-white/70 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden animate-pop-in flex-1"
                  style={{ animationDelay: `${(idx + 1) * 110}ms` }}
                >
                  <div className="flex gap-4 p-5">
                    <div className="relative h-20 w-24 rounded-xl overflow-hidden shrink-0 border border-yuma-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        draggable={false}
                      />
                      {/* Discount badge on image */}
                      <div className="absolute top-1 left-1 bg-sage-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                        {item.discount}
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-display text-lg font-semibold text-sage-700 leading-tight">{item.title}</h4>
                        <span className="font-body text-xs px-2 py-0.5 rounded-full bg-sage-100 text-sage-600 whitespace-nowrap shrink-0">
                          {item.label}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="font-body text-xs line-through text-sage-400">{item.originalPrice}</span>
                        <span className="font-body text-sm font-bold text-sage-700">{item.price}</span>
                      </div>
                      <div className="mt-2">
                        <a
                          href={waLink}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 font-body text-sm text-sage-600 hover:text-sage-800 transition-colors"
                        >
                          Claim Promo <ArrowRight size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 px-6 bg-yuma-200">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="inline-flex items-center justify-center gap-2 font-body text-xs tracking-[0.3em] uppercase text-sage-700/80">
              <PackageIcon size={16} /> Curated Experiences
            </p>
            <h2 className="font-display text-4xl font-bold mt-3 text-sage-600">Beauty Packages</h2>
            <p className="font-body text-sm text-sage-600 mt-3">Choose from our signature packages designed for maximum rejuvenation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((p, idx) => (
              <div
                key={p.title}
                className="rounded-2xl border border-white/60 bg-yuma-200 backdrop-blur-sm shadow-sm hover:shadow-xl transition-all duration-300 animate-pop-in"
                style={{ animationDelay: `${idx * 120}ms` }}
              >
                <div className="p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-yuma-700">{p.title}</h3>
                      <p className="font-body text-sm text-yuma-400 mt-2">{p.desc}</p>
                    </div>
                    <span className="font-body text-xs px-3 py-1 rounded-full bg-white/20 text-white whitespace-nowrap">
                      {p.badge}
                    </span>
                  </div>

                  <div className="mt-6 flex items-end justify-between gap-4">
                    <div>
                      <div className="font-body text-xs uppercase tracking-wider text-white">Harga</div>
                      <div className="font-display text-3xl font-bold text-sage-700">{p.price}</div>
                    </div>
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-sage-500 text-white px-5 py-3 rounded-lg font-body uppercase tracking-wider hover:bg-sage-700 transition-colors"
                    >
                      Booking <ArrowRight size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery / Before After */}
      <section className="py-20 px-6 bg-yuma-200 border-t border-b">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="inline-flex items-center justify-center gap-2 font-body text-xs tracking-[0.3em] uppercase text-sage-600">
              <Sparkles size={16} /> Real Results
            </p>
            <h2 className="font-display text-4xl font-bold mt-3 text-sage-600">Transformation Gallery</h2>
            <p className="font-body text-sage-700/80 mt-3 max-w-2xl mx-auto">
              See the amazing transformations our clients have experienced. Slide to see the comparison.
            </p>
          </div>

          {/* Before/After Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedGallery.map((item, idx) => (
              <div
                key={`${item.title}-${idx}`}
                className="group rounded-3xl overflow-hidden border border-yuma-100 shadow-lg hover:shadow-2xl transition-all duration-500 animate-pop-in bg-white"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Before/After Slider */}
                <BeforeAfterSlider before={item.before} after={item.after} title={item.title} />

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-display text-xl font-semibold text-sage-700 mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-sage-600 mb-4">
                    {item.description}
                  </p>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 font-body text-sm font-semibold transition-colors"
                  >
                    Booking Treatment Ini <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* View More/Less Button */}
          {gallery.length > 6 && (
            <div className="text-center mt-12">
              <button
                type="button"
                onClick={() => setShowAllGallery(!showAllGallery)}
                className="inline-flex items-center gap-2 border-2 border-sage-600 text-sage-600 px-6 py-3 rounded-lg font-body uppercase tracking-wider hover:bg-sage-600 hover:text-white transition-all duration-300"
              >
                {showAllGallery ? "View Less" : "View Full Gallery" } <ArrowRight size={18} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Preview ${lightbox.title}`}
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative w-full max-w-5xl rounded-2xl overflow-hidden border border-white/10 bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute top-3 right-3 z-10 inline-flex items-center justify-center h-10 w-10 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
              onClick={() => setLightbox(null)}
              aria-label="Tutup"
            >
              <X size={18} />
            </button>
            <img src={lightbox.image} alt={lightbox.title} className="w-full max-h-[80vh] object-contain" />
            <div className="px-5 py-4 bg-black/70">
              <div className="font-body text-sm text-white/90">{lightbox.title}</div>
            </div>
          </div>
        </div>
      )}

      {/* Testimonials */}
      <section className="py-20 px-6 bg-yuma-200 border-t">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="inline-flex items-center gap-2 font-body text-xs tracking-[0.3em] uppercase text-sage-700">
              <Sparkles size={16} /> Testimonials
            </p>
            <h2 className="font-display text-4xl font-bold mt-3 text-sage-700">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={t.name}
                className="rounded-2xl border p-7 shadow-sm hover:shadow-lg transition-all duration-300 animate-pop-in"
                style={{ animationDelay: `${idx * 140}ms` }}
              >
                <div className="flex items-center gap-4 mb-5">
                  <img
                    src={t.image}
                    alt={`Foto ${t.name}`}
                    className="h-14 w-14 rounded-full object-cover ring-1 ring-white"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-body font-semibold leading-tight text-yuma-700">{t.name}</div>
                    <div className="font-body text-xs text-white/80">{t.role}</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-4 text-yuma-900">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="font-body text-sm text-sage-700 leading-relaxed">“{t.quote}”</p>
              </div>
            ))}
          </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 text-sage-700 text-center bg-gradient-to-b from-yuma-200 to-sage-500">
          <div className="container mx-auto px-6 max-w-2xl">
            <p className="font-body text-xs tracking-[0.4em] uppercase text-sage-700 mb-6">Experience Elegance</p>
            <h3 className="font-display text-4xl font-semibold mb-6">Ready to Reveal <br /> Your Best Self?</h3>
            <p className="font-body text-xl opacity-80 mb-8 leading-relaxed text-sage-700">Join our community of satisfied clients and let us help you achieve the beauty you deserve.</p>
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-sage-600 text-white px-7 py-3 rounded-lg font-body uppercase tracking-wider hover:bg-sage-800 transition-colors"
            >
              Book Appointment <ArrowRight size={18} />
            </a>
          </div>
      </section>
    </Layout>
  );
};

export default Index;
