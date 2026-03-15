# Beauty Salon Website

Website untuk CasaBiancaBeauty Salon menggunakan React + TypeScript + Vite + Tailwind CSS.

## Setup yang Sudah Dilakukan

✅ Tailwind CSS sudah dikonfigurasi
✅ React Router sudah disetup
✅ Component Layout, Navbar, Footer sudah dibuat
✅ Path alias (@/) sudah dikonfigurasi
✅ Dependencies sudah terinstall

## Cara Menjalankan

```bash
cd Beautysalon
npm run dev
```

Buka browser di `http://localhost:5173`

## Struktur Project

```
src/
├── component/
│   ├── Layout.tsx      # Layout wrapper dengan Navbar & Footer
│   ├── Navbar.tsx      # Navigation bar dengan mobile menu
│   ├── Footer.tsx      # Footer component
│   └── NavLink.tsx     # Custom NavLink component
├── lib/
│   └── utils.ts        # Utility functions (cn untuk className)
├── page/               # Folder untuk halaman (belum dibuat)
├── hooks/              # Folder untuk custom hooks
├── App.tsx             # Main app dengan routing
├── main.tsx            # Entry point
└── index.css           # Tailwind CSS imports & custom styles
```

## Yang Perlu Dilakukan Selanjutnya

1. Buat halaman-halaman di folder `src/page/`:
   - Index.tsx (Homepage)
   - Layanan.tsx (Services page)
   - Tentang.tsx (About page)
   - Kontak.tsx (Contact page)

2. Update App.tsx untuk menggunakan halaman yang sudah dibuat

3. Tambahkan konten dan styling sesuai kebutuhan

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Lucide React (icons)
