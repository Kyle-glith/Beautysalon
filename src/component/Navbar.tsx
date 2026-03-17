import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";


const navLinks = [
    { to: "/", label: "Home" },
    { to: "/layanan", label: "Services" },
    { to: "/tentang", label: "About Us" },
    { to: "/kontak", label: "Contact" }
];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    return (
        <nav className="fixed inset-auto top-0 left-0 right-0 z-50 bg-background/10 backdrop-blur-sm">
            <div className="container mx-auto px-20 py-4 flex items-center justify-between">
                <Link to="/" className="font-display text-2xl text-sage-600 font-semibold tracking-wide">
                    BeautySalon
                </Link>

                { /* Desktop Navigation */ }
                <div className="hidden md:flex items-center gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className={` relative text-xs tracking-widest uppercase
                                         after:content-[''] after:absolute after:left-1/2 after:-bottom-1
                                         after:h-[2px] after:w-0 after:bg-sage-600
                                         after:transition-all after:duration-300
                                         hover:after:left-0 hover:after:w-full ${
                                location.pathname === link.to
                                    ? "text-sage-600"
                                    : "text-sage-500"
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                { /* Mobile Toggle */ }
                <button
                    className="md:hidden text-sage-600"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
                </div>

                { /* Mobile menu */}
                {open && (
                    <div className="md:hidden bg-background border-b border-border animate-fade-in">
                        <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    onClick={() => setOpen(false)}
                                    className={` text-sm font-body tracking-widest uppercase transition-colors hover:text-sage-600 ${
                                        location.pathname === link.to
                                            ? "text-sage-600"
                                            : "text-sage-400"
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
                </nav>
    );
};
export default Navbar;
