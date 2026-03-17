import Layout from "@/component/Layout";
import { Award, Users, Calendar, Sparkles } from "lucide-react";

const stats = [
  { icon: Calendar, value: "11+", label: "Years of Experience" },
  { icon: Users, value: "1000+", label: "Happy Customers" },
  { icon: Award, value: "10+", label: "Awards Won" },
];

const Tentang = () => {
  const aboutImage =
    "/assets/bg2.jpg";

  return (
    <Layout>
      {/* Header */}
      <header className="pt-32 pb-16 px-6 bg-yuma-200 border-b">
        <div className="container mx-auto text-center">
          <p className="inline-flex items-center justify-center gap-2 font-body text-xs tracking-[0.3em] uppercase text-sage-600">
            <Sparkles size={16} /> Get to Know Us
          </p>
          <h1 className="font-display text-5xl font-bold mt-4 text-sage-600">About Us</h1>
          <p className="font-body text-sage-600 mt-5 max-w-2xl mx-auto">
            We are here to provide the best beauty experience with a personal touch and warmth.
          </p>
        </div>
      </header>

      {/* Story */}
      <section className="py-20 bg-yuma-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="overflow-hidden rounded-sm">
              <img src={aboutImage} alt="Interior Aurélia Salon" className="w-full h-[500px] object-cover" />
            </div>
            <div>
              <p className="font-body text-sm tracking-[0.3em] uppercase text-sage-600 mb-3">Our Story</p>
              <h2 className="font-display text-3xl font-semibold mb-6 text-sage-600">Beauty Starts Here</h2>
              <div className="space-y-4 font-body text-sm text-sage-600 leading-relaxed">
                <p>
                  BeautySalon was founded in 2015 with a simple vision: to provide the best beauty treatment experience with a personal touch and warmth.
                </p>
                <p>
                  We believe that everyone has a unique beauty that needs to be nurtured and highlighted. With a team of experienced professionals and high-quality products, we are committed to helping you look and feel your best.
                </p>
                <p>
                  Our salon atmosphere is designed to provide comfort and tranquility, making every visit a pleasant and pampering experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-yuma-200 text-sage-600 border-t border-b">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/80 mb-4">
                  <stat.icon size={24} />
                </div>
                <div className="font-display text-4xl font-bold mb-2">{stat.value}</div>
                <p className="font-body text-sm opacity-80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-yuma-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="inline-flex items-center justify-center gap-2 font-body text-xs tracking-[0.3em] uppercase text-sage-600 mb-3">
              <Sparkles size={16} /> Our Values
            </p>
            <h2 className="font-display text-4xl font-bold text-sage-600">What We Believe In</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                number: "01",
                title: "Quality",
                desc: "The best products and techniques for perfect results in every treatment we provide.",
              },
              {
                number: "02",
                title: "Comfort",
                desc: "An atmosphere that makes you feel relaxed and pampered from start to finish of your visit.",
              },
              {
                number: "03",
                title: "Trust",
                desc: "Long-term relationships with every customer based on honesty and integrity.",
              },
            ].map((v, i) => (
              <div
                key={i}
                className="p-8 rounded-sm bg-white/50 border border-yuma-50 hover:shadow-lg transition-all"
              >
                <div className="font-display text-5xl font-bold text-sage-600/10 mb-4">{v.number}</div>
                <h3 className="font-display text-xl font-semibold text-sage-600 mb-3">{v.title}</h3>
                <p className="font-body text-sm text-sage-600/80 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Tentang;
