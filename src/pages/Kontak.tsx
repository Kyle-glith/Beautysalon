import Layout from "@/component/Layout";
import { Mail, Phone, MapPin, Clock, Sparkles } from "lucide-react";

const Kontak = () => {
  return (
    <Layout>
      {/* Header */}
      <header className="pt-32 pb-16 px-6 bg-yuma-200 border-b">
        <div className="container mx-auto text-center">
          <p className="inline-flex items-center justify-center gap-2 font-body text-xs tracking-[0.3em] uppercase text-sage-600">
            <Sparkles size={16} /> Get In Touch
          </p>
          <h1 className="font-display text-5xl font-bold mt-4 text-sage-600">
            Contact
          </h1>
          <p className="font-body text-sage-600 mt-5 max-w-2xl mx-auto">
            We are ready to serve you with all our heart
          </p>
        </div>
      </header>

      <div className="py-20 px-6 bg-yuma-200">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div className="space-y-8 bg-yuma-300 p-8 rounded-lg">
              <h2 className="font-display text-3xl font-semibold mb-6 text-sage-600">Contact Information</h2>
              
              <div className="space-y-6 ">
                <div className="flex items-start gap-4">
                  <div className="bg-white/70 p-3 rounded-lg">
                    <Phone className="text-sage-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-body font-semibold mb-1 text-sage-600">Phone</h3>
                    <p className="font-body text-sage-400">+62 123-456-7890</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/70 p-3 rounded-lg">
                    <Mail className="text-sage-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-body font-semibold mb-1 text-sage-600">Email</h3>
                    <p className="font-body text-sage-400">casabiancabeauty@example.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/70 p-3 rounded-lg">
                    <MapPin className="text-sage-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-body font-semibold mb-1 text-sage-600">Address</h3>
                    <p className="font-body text-sage-400">
                      Jl. Kayu Aya No. 123<br />
                      Seminyak, Kuta, Bali 80361
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/70 p-3 rounded-lg">
                    <Clock className="text-sage-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-body font-semibold mb-1 text-sage-600">Operational Hours</h3>
                    <p className="font-body text-sage-400">
                      Monday - Friday: 09.00 - 20.00<br />
                      Saturday - Sunday: 10.00 - 18.00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-yuma-300 p-8 rounded-lg">
              <h2 className="font-display text-3xl font-semibold mb-6 text-sage-600">Send a Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="font-body text-sm font-medium mb-2 block text-sage-700">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-medium mb-2 block text-sage-700">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-medium mb-2 block text-sage-700">Message</label>
                  <textarea 
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background h-32 focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button 
                  type="button"
                  className="w-full py-3 bg-sage-600 text-white font-body uppercase tracking-wider rounded-lg hover:bg-sage-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Google Maps */}
          <div className="mt-12">
            <div className="w-full h-[450px] rounded-2xl overflow-hidden border border-yuma-100 shadow-lg">
              <iframe
                src="https://maps.google.com/maps?q=Seminyak,+Kuta,+Bali,+Indonesia&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi BeautySalon Seminyak Bali"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Kontak;
