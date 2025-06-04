// components/Footer.tsx
'use client'
export default function Footer() {
  return (
    <div className="text-sm text-gray-400 text-center mt-12">
      © {new Date().getFullYear()} Diego Di Natale — All rights reserved
    </div>
  );
}
