import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-sage-500 to-sage-600 text-foreground py-12">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="font-display text-2xl font-semibold mb-4 text-yuma-500">BeautySalon</h3>
                        <p className="font-body text-sm opacity-80 leading-relaxed text-center md:text-left text-yuma-50">Temukan Keindahan sejati Anda bersama kami.</p>
                    </div>

                    <div>
                        <h4 className="font-display text-lg font-semibold mb-4 text-yuma-500">Navigasi</h4>
                        <div className="flex flex-col gap-2">
                            <Link to="/" className="font-body text-sm opacity-80 hover:opacity-100 transition-opacity text-yuma-50 hover:text-yuma-600">Beranda</Link>
                            <Link to="/layanan" className="font-body text-sm opacity-80 hover:opacity-100 transition-opacity text-yuma-50 hover:text-yuma-600">Layanan</Link>
                            <Link to="/tentang" className="font-body text-sm opacity-80 hover:opacity-100 transition-opacity text-yuma-50 hover:text-yuma-600">Tentang Kami</Link>
                            <Link to="/kontak" className="font-body text-sm opacity-80 hover:opacity-100 transition-opacity text-yuma-50 hover:text-yuma-600">Kontak</Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-display text-lg font-semibold mb-4 text-yuma-500">Hubungi Kami</h4>
                        <div className="flex flex-col gap-3 text-yuma-50">
                            <div className="flex items-center gap-3">
                                <Phone size={16} />
                                <span className="font-body text-sm opacity-80">+62 123-456-7890</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin size={16} />
                                <span className="font-body text-sm opacity-80">Jl. Contoh, Kota Contoh</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail size={16} />
                                <span className="font-body text-sm opacity-80">info@beautysalon.com</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-display text-lg font-semibold mb-4 text-yuma-500">Jam Buka</h4>
                        <div className="flex flex-col gap-2 text-yuma-50">
                            <div className="flex items-start gap-2">
                                <Clock size={16} className="mt-0.5 flex-shrink-0" />
                                <div className="flex flex-col gap-1">
                                    <span className="font-body text-sm opacity-80">Senin - Jumat: 09:00 - 17:00</span>
                                    <span className="font-body text-sm opacity-80">Sabtu: 09:00 - 14:00</span>
                                    <span className="font-body text-sm opacity-80">Minggu: Tutup</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-8">
                    <h4 className="font-display text-lg font-semibold mb-4 text-center text-yuma-400">Ikuti Kami</h4>
                    <div className="flex justify-center gap-6">
                        {[
                            { icon: Instagram, label: "Instagram", color: "hover:text-violet-400" },
                            { icon: Facebook, label: "Facebook", color: "hover:text-blue-400" },
                            { icon: Twitter, label: "Twitter", color: "hover:text-sky-400" },
                            { icon: Youtube, label: "YouTube", color: "hover:text-red-400" },
                        ].map(({ icon: Icon, label, color }) => (
                            <div key={label} className="group relative flex flex-col items-center">
                                <div className={`text-yuma-50 opacity-50 cursor-not-allowed ${color} transition-colors duration-300`}>
                                    <Icon size={24} />
                                </div>
                                {/* Tooltip */}
                                <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-black/70 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                                    Segera Hadir
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="border-t border-white mt-6 pt-5 text-center">
                    <span className="font-body text-xs text-yuma-50">© 2025 BeautySalon. All rights reserved.</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;