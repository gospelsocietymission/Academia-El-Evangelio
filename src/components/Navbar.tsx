import React, { useState } from 'react';
import { BookOpen, Menu, X, GraduationCap, ChevronRight, MessageCircle, Heart, Users } from 'lucide-react';
import { INSTITUTION_INFO, buildWhatsAppUrl } from '../data/academyData';

export type NavPage = 'inicio' | 'programas' | 'quienes-somos' | 'facultad' | 'proyectos';

interface NavbarProps {
  currentPage: NavPage;
  onSelectPage: (page: NavPage) => void;
  onOpenEnrollment: () => void;
  onOpenDonation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onSelectPage,
  onOpenEnrollment,
  onOpenDonation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; page: NavPage }[] = [
    { label: 'Inicio', page: 'inicio' },
    { label: 'Programas', page: 'programas' },
    { label: 'Quiénes Somos', page: 'quienes-somos' },
    { label: 'Facultad Invitada', page: 'facultad' },
    { label: 'Proyectos Misioneros', page: 'proyectos' },
  ];

  const handlePageClick = (page: NavPage) => {
    onSelectPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-amber-500/20 text-white shadow-lg transition-all">
      {/* Top micro ribbon */}
      <div className="bg-amber-500/10 border-b border-amber-500/20 px-4 py-1.5 text-xs text-amber-200/90 text-center font-medium hidden sm:block">
        <span className="text-amber-400 font-semibold">{INSTITUTION_INFO.motto}</span>
        <span className="mx-2 opacity-40">|</span>
        <span>WhatsApp Pastoral Directo:</span>
        <a 
          href={buildWhatsAppUrl(INSTITUTION_INFO.whatsappText)}
          target="_blank"
          rel="noreferrer"
          className="hover:text-amber-300 font-bold ml-1 inline-flex items-center gap-1 text-emerald-400"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-emerald-400" />
          <span>{INSTITUTION_INFO.phone}</span>
        </a>
        <span className="mx-2 opacity-40">|</span>
        <a 
          href={`mailto:${INSTITUTION_INFO.email}`} 
          className="hover:text-amber-300 underline underline-offset-2 transition-colors ml-1"
        >
          {INSTITUTION_INFO.email}
        </a>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Brand */}
        <button 
          onClick={() => handlePageClick('inicio')}
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg p-1 shrink-0 text-left cursor-pointer"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 p-0.5 shadow-md flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center border border-amber-400/40">
              <BookOpen className="w-5 h-5 text-amber-400" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-sm sm:text-base tracking-wider text-white group-hover:text-amber-300 transition-colors whitespace-nowrap leading-tight">
              ACADEMIA BÍBLICA
            </span>
            <span className="text-[10px] font-semibold tracking-widest text-amber-400/90 uppercase font-sans">
              EL EVANGELIO
            </span>
          </div>
        </button>

        {/* 5 Page Nav Links */}
        <nav className="hidden xl:flex items-center gap-1.5 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <button
                key={item.page}
                onClick={() => handlePageClick(item.page)}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Medium screens (lg to xl) condensed links */}
        <nav className="hidden lg:flex xl:hidden items-center gap-1 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <button
                key={item.page}
                onClick={() => handlePageClick(item.page)}
                className={`px-2.5 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Donar + WhatsApp + Inscríbete + Mobile hamburger */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          
          {/* Prominent Donar Button */}
          <button
            onClick={onOpenDonation}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-rose-500/20 active:scale-95 transition-all cursor-pointer"
            title="Apoyar con una donación"
          >
            <Heart className="w-3.5 h-3.5 fill-white" />
            <span className="hidden sm:inline">Donar</span>
          </button>

          <a
            href={buildWhatsAppUrl(INSTITUTION_INFO.whatsappText)}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wide shadow-md active:scale-95 transition-all whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={onOpenEnrollment}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 sm:px-4 sm:py-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs tracking-wider uppercase shadow-md hover:shadow-amber-500/20 active:scale-95 transition-all whitespace-nowrap cursor-pointer"
          >
            <GraduationCap className="w-4 h-4" />
            <span>Inscríbete</span>
          </button>

          {/* Mobile Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-amber-500/30 px-5 pt-3 pb-6 space-y-3 shadow-2xl animate-in fade-in duration-200">
          <div className="text-xs uppercase tracking-widest text-amber-400/80 font-semibold pb-1 border-b border-slate-800">
            Páginas del Sitio
          </div>
          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handlePageClick(item.page)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-md transition-colors text-left cursor-pointer ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 font-bold'
                      : 'text-slate-200 hover:text-amber-400 hover:bg-slate-900'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDonation();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Hacer una Donación</span>
            </button>

            <a
              href={buildWhatsAppUrl(INSTITUTION_INFO.whatsappText)}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs tracking-wide shadow-md transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Directo ({INSTITUTION_INFO.phone})</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnrollment();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Solicitar Admisión</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
