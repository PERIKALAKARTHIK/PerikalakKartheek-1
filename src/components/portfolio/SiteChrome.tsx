import { useEffect, useState } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { person } from '@/data/portfolio';

const nav = [
  ['Home', 'home'], ['About', 'about'], ['Skills', 'skills'], ['Experience', 'experience'],
  ['Projects', 'projects'], ['DevOps', 'devops'], ['Certifications', 'certifications'],
  ['Education', 'education'], ['Contact', 'contact'],
] as const;

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const pathname = useRouterState({ select: state => state.location.pathname });

  useEffect(() => {
    const saved = localStorage.getItem('pk-theme');
    if (saved === 'light') setTheme('light');
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
    localStorage.setItem('pk-theme', theme);
  }, [theme]);
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);
  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
      setShowTop(window.scrollY > 650);
    };
    update(); window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [pathname]);

  return <div className="site-shell">
    <div className="scroll-progress" style={{ width: `${progress}%` }} />
    <header className="site-header">
      <div className="header-inner container-wide">
        <Link to="/" className="brand" onClick={() => { if (pathname === '/') window.scrollTo({ top: 0, behavior: 'smooth' }); }} aria-label="Perikala Kartheek home"><span className="brand-mark">PK<span className="brand-dot">.</span></span><span className="brand-caption">ENGINEER / BUILDER</span></Link>
        <nav className="desktop-nav" aria-label="Main navigation">{nav.map(([label, id]) => <a key={id} href={pathname === '/' ? `#${id}` : `/#${id}`}>{label}</a>)}</nav>
        <div className="header-actions">
          <Button variant="ghost" size="icon" aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'} title={theme === 'dark' ? 'Light mode' : 'Dark mode'} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme === 'dark' ? <Sun /> : <Moon />}</Button>
          <Button variant="outline" size="sm" asChild className="header-contact"><a href={`mailto:${person.email}`}>Let's talk <ArrowUpRight /></a></Button>
          <Button variant="ghost" size="icon" className="mobile-menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
        </div>
      </div>
      {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{nav.map(([label, id]) => <a key={id} href={pathname === '/' ? `#${id}` : `/#${id}`} onClick={() => setMenuOpen(false)}>{label}<ArrowUpRight size={15} /></a>)}</nav>}
    </header>
    {children}
    <footer className="site-footer"><div className="container-wide footer-inner"><span className="footer-brand">PK<span className="brand-dot">.</span></span><span>Designed around things built, learned, and explored.</span><span>© {new Date().getFullYear()} Perikala Kartheek</span></div></footer>
    {showTop && <Button variant="outline" size="icon" className="back-top" title="Back to top" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><span aria-hidden="true">↑</span></Button>}
  </div>;
}
