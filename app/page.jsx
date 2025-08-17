"use client";
// app/layout.jsx
import "./globals.css";

export const metadata = {
  title: "Playbook visual del piloto — Promotores",
  description: "Playbook desplegado en Vercel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
