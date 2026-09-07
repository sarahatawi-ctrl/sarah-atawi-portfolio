import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Github, Linkedin, Mail, Menu, Minus, Phone, Plus, X, Database, Code2, LayoutDashboard, Search, Layers, Box, Cpu, Link as LinkIcon, AlertCircle, CheckCircle2 } from 'lucide-react';
import { SiAndroidstudio, SiDart, SiFirebase, SiFigma, SiFlutter, SiGithub, SiGooglechrome } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { Link, Route, Switch, useLocation, useParams } from 'wouter';
import { ErrorBoundary } from '@/components/error-boundary';
import { copy, experience, projects, leadershipCards, type LeadershipCard, type Language, type Project, type ProjectMedia, workshops } from '@/lib/content';

type Localized = { en: string; ar: string };

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sarah-atawi-332922291/', icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/sarahatawi-ctrl', icon: Github },
];

const contactLinks = [
  { label: 'LinkedIn', value: 'Sarah Atawi', href: 'https://www.linkedin.com/in/sarah-atawi-332922291/', icon: Linkedin },
  { label: 'GitHub', value: 'sarahatawi-ctrl', href: 'https://github.com/sarahatawi-ctrl', icon: Github },
  { label: 'Phone', value: '+966553592093', href: 'tel:+966553592093', icon: Phone },
  { label: 'Email', value: 'srh.alatwi@gmail.com', href: 'mailto:srh.alatwi@gmail.com', icon: Mail },
];

const certificateAssets = [
  { src: `${import.meta.env.BASE_URL}certificates/certificate-01.png`, alt: 'Certificate' },
  { src: `${import.meta.env.BASE_URL}certificates/certificate-02.png`, alt: 'Certificate' },
  { src: `${import.meta.env.BASE_URL}certificates/certificate-03.png`, alt: 'Certificate' },
  { src: `${import.meta.env.BASE_URL}certificates/certificate-04.png`, alt: 'Certificate' },
];

const cooperativeTrainingCertificate = `${import.meta.env.BASE_URL}experience/cooperative-training-certificate.png`;

function setSeo(title: string, description: string) {
  document.title = title;
  const ensureMeta = (name: string, content: string, property = false) => {
    const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
    let tag = document.head.querySelector(selector) as HTMLMetaElement | null;
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute(property ? 'property' : 'name', name);
      document.head.appendChild(tag);
    }
    tag.content = content;
  };
  ensureMeta('description', description);
  ensureMeta('og:title', title, true);
  ensureMeta('og:description', description, true);
  ensureMeta('og:type', 'website', true);
}

function localized(value: Localized, lang: Language) {
  return value[lang];
}

function projectAsset(path: string) {
  return `${import.meta.env.BASE_URL}projects/${path}`;
}

function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.12 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`scroll-reveal ${visible ? 'is-visible' : ''} ${className}`}>{children}</div>;
}

function LanguageGate({ onChoose }: { onChoose: (lang: Language) => void }) {
  const [hovered, setHovered] = useState<Language | null>(null);
  useEffect(() => setSeo('Sarah Atawi — Portfolio', 'The personal portfolio of Sarah Atawi, Computer Science graduate, mobile application developer, and UI/UX designer.'), []);
  return (
    <main className="language-gate relative grid min-h-[100dvh] place-items-center overflow-hidden bg-background px-6 py-8" data-testid="language-gate">
      <div className="language-gate__halo language-gate__halo--violet" />
      <div className="language-gate__halo language-gate__halo--blue" />

      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center text-center">
        <p className="mb-7 font-mono-custom text-[10px] uppercase tracking-[0.32em] text-primary sm:mb-9">Personal archive / portfolio</p>
        <h1 className="language-gate__title text-foreground" data-testid="text-gate-title">
          <span className="language-gate__title-name">Sarah Atawi</span>
          <span className="language-gate__title-word">Portfolio<b>.</b></span>
        </h1>
        <p className="mt-8 font-mono-custom text-[10px] uppercase tracking-[0.24em] text-muted-foreground">Choose a language</p>

        <div className="language-gate__choices" role="group" aria-label="Choose portfolio language">
          {(['en', 'ar'] as Language[]).map((language) => (
            <button
              key={language}
              type="button"
              onMouseEnter={() => setHovered(language)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(language)}
              onBlur={() => setHovered(null)}
              onClick={() => onChoose(language)}
              className={`language-orb language-orb--${language} ${hovered === language ? 'is-hovered' : ''}`}
              data-testid={`button-language-${language}`}
              aria-label={`Enter portfolio in ${language === 'en' ? 'English' : 'Arabic'}`}
            >
              <span className="language-orb__label">{language === 'en' ? 'English' : 'العربية'}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="absolute bottom-7 left-6 right-6 flex items-end justify-between border-t border-border/70 pt-4 font-mono-custom text-[9px] uppercase tracking-[0.18em] text-muted-foreground sm:bottom-9 sm:left-10 sm:right-10">
        <span>Computer Science · Mobile · UI/UX</span>
        <span className="hidden sm:inline">Select your language</span>
      </div>
    </main>
  );
}

function LanguageSwitcher({ lang, onChange }: { lang: Language; onChange: (language: Language) => void }) {
  return (
    <div className="flex items-center gap-1 border border-border/80 p-1 text-[10px] font-medium tracking-[0.12em]" aria-label="Language selector">
      {(['en', 'ar'] as Language[]).map((language) => (
        <button
          key={language}
          type="button"
          onClick={() => onChange(language)}
          className={`px-2 py-1.5 transition-colors ${lang === language ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
          data-testid={`button-switch-language-${language}`}
          aria-pressed={lang === language}
        >
          {language === 'en' ? 'EN' : 'ع'}
        </button>
      ))}
    </div>
  );
}

function SiteNav({ lang, onChange }: { lang: Language; onChange: (language: Language) => void }) {
  const [open, setOpen] = useState(false);
  const c = copy[lang];
  const links = [
    { href: '#about', label: c.nav[0] },
    { href: '#work', label: c.nav[1] },
    { href: '#experience', label: c.nav[2] },
    { href: '#contact', label: c.nav[3] },
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-border/50 bg-background/80 backdrop-blur-xl" data-testid="site-navigation">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-14">
        <a href="#top" className="group flex items-center gap-3" data-testid="link-home">
          <span className="grid h-7 w-7 place-items-center border border-primary/70 text-xs font-semibold text-primary">SA</span>
          <span className="hidden text-xs tracking-[0.12em] text-foreground sm:block">{lang === 'ar' ? 'ساره عطوي' : 'Sarah Atawi'}</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground" data-testid={`link-nav-${link.href.slice(1)}`}>
              {link.label}
            </a>
          ))}
          <LanguageSwitcher lang={lang} onChange={onChange} />
        </nav>
        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher lang={lang} onChange={onChange} />
          <button type="button" className="grid h-9 w-9 place-items-center border border-border text-foreground" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} data-testid="button-mobile-menu">
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border/60 px-6 py-5 md:hidden" aria-label="Mobile navigation">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-sm text-muted-foreground transition-colors hover:text-foreground" data-testid={`link-mobile-nav-${link.href.slice(1)}`}>{link.label}</a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

function SectionHeading({ children, number, id, className = '' }: { children: string; number: string; id?: string; className?: string }) {
  return (
    <h2 id={id} className={`global-section-heading font-display text-primary ${className}`}>
      <span>{number}</span>
      <span aria-hidden="true">-</span>
      <span>{children}</span>
    </h2>
  );
}

function CertificateGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedCertificate = selectedIndex === null ? null : certificateAssets[selectedIndex];

  useEffect(() => {
    if (selectedIndex === null) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedIndex(null);
      if (event.key === 'ArrowRight') setSelectedIndex((current) => current === null ? null : (current + 1) % certificateAssets.length);
      if (event.key === 'ArrowLeft') setSelectedIndex((current) => current === null ? null : (current - 1 + certificateAssets.length) % certificateAssets.length);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [selectedIndex]);

  return (
    <>
      <div className="certificate-grid grid gap-6 sm:grid-cols-2">
        {certificateAssets.map((certificate, index) => (
          <button
            key={certificate.src}
            type="button"
            onClick={() => setSelectedIndex(index)}
            className="certificate-card group relative overflow-hidden border border-border/80 bg-secondary/35 p-2 text-left transition-colors hover:border-primary/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Open certificate"
          >
            <img src={certificate.src} alt={certificate.alt} className="block h-auto w-full transition-transform duration-500 group-hover:scale-[1.015]" />
            <span className="absolute bottom-4 right-4 grid h-9 w-9 place-items-center border border-border/80 bg-background/85 text-primary opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100" aria-hidden="true">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </button>
        ))}
      </div>

      {selectedCertificate && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-background/95 p-4 backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Certificate preview"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedIndex(null);
          }}
        >
          <div className="relative flex max-h-full max-w-6xl items-center justify-center">
            <img src={selectedCertificate.src} alt={selectedCertificate.alt} className="max-h-[calc(100dvh-2rem)] max-w-full object-contain sm:max-h-[calc(100dvh-4rem)]" />
            <button
              type="button"
              onClick={() => setSelectedIndex(null)}
              className="absolute right-2 top-2 grid h-10 w-10 place-items-center border border-border/80 bg-background/90 text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:right-4 sm:top-4"
              aria-label="Close certificate preview"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function ProjectVisual({ project, large = false }: { project: Project; large?: boolean }) {
  const visualAsset = large ? project.heroAsset : project.cardAsset;
  const visualAlt = large ? project.heroAlt : project.cardAlt;
  return (
    <div className={`project-visual relative overflow-hidden border border-border/80 bg-secondary/60 ${large ? 'aspect-[16/8]' : 'aspect-[1.18/1]'}`} style={{ ['--project-accent' as string]: project.accent }} data-testid={`visual-project-${project.slug}`}>
      <div className="absolute inset-0 opacity-70" style={{ background: `radial-gradient(circle at 72% 25%, ${project.accent}40, transparent 34%), linear-gradient(135deg, transparent 35%, ${project.accent}10 36%, transparent 60%)` }} />
      <img src={projectAsset(visualAsset)} alt={localized(visualAlt, 'en')} className={`project-visual__image ${large ? '' : `project-visual__image--${project.slug}`} absolute inset-0 h-full w-full object-center transition-transform duration-700 group-hover:scale-[1.025]`} />
      <div className="absolute inset-0 bg-gradient-to-t from-background/75 via-transparent to-transparent" />
      <span className="absolute bottom-5 left-5 font-mono-custom text-[10px] tracking-[0.2em] text-foreground/75">{project.index} / STUDY</span>
      <span className="absolute right-5 top-5 h-2 w-2 rounded-full bg-[var(--project-accent)]" />
    </div>
  );
}

function ProjectCard({ project, lang }: { project: Project; lang: Language }) {
  const c = copy[lang];
  return (
    <Reveal>
      <Link href={`/work/${project.slug}`} className="project-card group block h-full" data-testid={`link-project-${project.slug}`}>
        <ProjectVisual project={project} />
        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-3xl tracking-[-0.04em] text-foreground">{lang === 'ar' ? project.arabicTitle : project.title}</h3>
            <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">{lang === 'ar' ? project.arabicCategory : project.category}</p>
          </div>
          <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
        </div>
        <p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">{lang === 'ar' ? project.arabicIntro : project.intro}</p>
        <span className="mt-5 inline-block text-[10px] uppercase tracking-[0.16em] text-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100">{c.viewCase} ↗</span>
      </Link>
    </Reveal>
  );
}

function ProjectHeroMedia({ project, lang }: { project: Project; lang: Language }) {
  const featured = project.gallery.find((media) => media.featured) ?? project.gallery[0];
  if (featured?.type === 'video') {
    return (
      <div className="project-hero-media project-hero-media--video">
        <video controls poster={projectAsset('banner-system/video/poster.jpg')} preload="metadata" playsInline aria-label={localized(featured.alt, lang)}>
          <source src={projectAsset(featured.src.replace(/\.mp4$/, '.webm'))} type="video/webm" />
          <source src={projectAsset(featured.src)} type="video/mp4" />
        </video>
        <span className="project-hero-media__caption">{lang === 'ar' ? 'عرض الفيديو' : 'Presentation video'}</span>
      </div>
    );
  }
  return <ProjectVisual project={project} large />;
}

function ProjectMediaGallery({ media, lang, compact = false }: { media: ProjectMedia[]; lang: Language; compact?: boolean }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selected = selectedIndex === null ? null : media[selectedIndex];

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedIndex(null);
      if (event.key === 'ArrowRight') setSelectedIndex((current) => current === null ? null : (current + 1) % media.length);
      if (event.key === 'ArrowLeft') setSelectedIndex((current) => current === null ? null : (current - 1 + media.length) % media.length);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedIndex, media.length]);

  return (
    <>
      <div className={`project-gallery ${compact ? 'project-gallery--compact grid grid-cols-2 md:grid-cols-4 gap-4' : ''}`} data-testid="project-gallery">
        {media.map((item, index) => (
          <button
            key={`${item.src}-${index}`}
            type="button"
            className={`project-gallery__item group overflow-hidden border border-border/50 bg-secondary/20 transition-colors hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${item.featured && !compact ? 'project-gallery__item--featured col-span-full' : ''} ${compact ? 'aspect-[9/19] rounded-xl relative' : ''}`}
            onClick={() => setSelectedIndex(index)}
            aria-label={`${lang === 'ar' ? 'فتح الوسائط' : 'Open media'} ${index + 1}`}
            data-testid={`button-project-media-${index}`}
          >
            {item.type === 'video' ? (
              <span className="project-gallery__video-poster block h-full w-full">
                <img src={projectAsset('banner-system/video/poster.jpg')} alt={localized(item.alt, lang)} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
                <span className="project-gallery__play absolute inset-0 m-auto grid h-12 w-12 place-items-center rounded-full bg-background/80 text-primary opacity-90 transition-opacity group-hover:opacity-100" aria-hidden="true"><ArrowRight className="h-5 w-5" /></span>
              </span>
            ) : (
              <img src={projectAsset(item.src)} alt={localized(item.alt, lang)} loading="lazy" className={`h-full w-full transition-transform duration-700 group-hover:scale-[1.03] ${compact ? 'object-contain object-top pt-2' : 'object-cover'}`} />
            )}
            <span className={`project-gallery__index absolute ${compact ? 'bottom-3 end-3 text-xs bg-background/90 px-2 py-1 rounded-md' : 'bottom-4 start-4 text-sm bg-background/80 px-3 py-1'} font-mono-custom text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100`}>{String(index + 1).padStart(2, '0')}</span>
          </button>
        ))}
      </div>
      {selected && (
        <div className="project-lightbox fixed inset-0 z-50 grid place-items-center bg-background/95 p-4 backdrop-blur-sm sm:p-8" role="dialog" aria-modal="true" aria-label={localized(selected.alt, lang)} onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedIndex(null); }}>
          <div className="project-lightbox__frame relative flex max-h-full max-w-6xl flex-col items-center justify-center">
            {selected.type === 'video' ? (
              <video controls poster={projectAsset('banner-system/video/poster.jpg')} preload="metadata" playsInline className="project-lightbox__media max-h-[calc(100dvh-6rem)] max-w-full">
                <source src={projectAsset(selected.src.replace(/\.mp4$/, '.webm'))} type="video/webm" />
                <source src={projectAsset(selected.src)} type="video/mp4" />
              </video>
            ) : (
              <img src={projectAsset(selected.src)} alt={localized(selected.alt, lang)} className="project-lightbox__media max-h-[calc(100dvh-6rem)] max-w-full object-contain" />
            )}
            <div className="mt-4 flex items-center gap-4">
              <p className="font-mono-custom text-xs text-muted-foreground">{String((selectedIndex ?? 0) + 1).padStart(2, '0')} / {String(media.length).padStart(2, '0')}</p>
              <div className="flex gap-2">
                <button type="button" className="grid h-10 w-10 place-items-center border border-border/80 bg-background/90 text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" onClick={() => setSelectedIndex((current) => current === null ? null : (current - 1 + media.length) % media.length)} aria-label={copy[lang].previous} data-testid="button-previous-project-media"><ChevronLeft className="h-4 w-4" /></button>
                <button type="button" className="grid h-10 w-10 place-items-center border border-border/80 bg-background/90 text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" onClick={() => setSelectedIndex((current) => current === null ? null : (current + 1) % media.length)} aria-label={copy[lang].next} data-testid="button-next-project-media"><ChevronRight className="h-4 w-4" /></button>
              </div>
            </div>
            <button type="button" className="absolute -top-12 end-0 grid h-10 w-10 place-items-center border border-border/80 bg-background/90 text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" onClick={() => setSelectedIndex(null)} aria-label={copy[lang].close} data-testid="button-close-project-media"><X className="h-5 w-5" /></button>
          </div>
        </div>
      )}
    </>
  );
}


function LeadershipFlipCard({ card, lang }: { card: LeadershipCard; lang: Language }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
      <article className={`flip-card group relative h-[340px] w-full ${isFlipped ? 'is-flipped' : ''}`} data-testid={`flipcard-${card.id}`}>
        <div className="flip-card__inner">
          <div className="flip-card__front absolute inset-0 flex flex-col justify-between border border-border/70 bg-card p-6 transition-colors hover:border-primary/50 sm:p-8" aria-hidden={isFlipped}>
            <div>
              <div className="flex items-start justify-between">
                <span className="leadership-logo" aria-hidden="true">{card.logo}</span>
                {card.period && <span className="font-mono-custom text-[10px] text-muted-foreground">{localized(card.period, lang)}</span>}
              </div>
              <p className="mt-8 text-[10px] uppercase tracking-[0.14em] text-primary">{localized(card.organization, lang)}</p>
              <h3 className="mt-3 font-display text-2xl text-foreground sm:text-3xl">{localized(card.role, lang)}</h3>
              {card.location && <p className="mt-4 text-xs leading-5 text-muted-foreground">{localized(card.location, lang)}</p>}
            </div>
            <div className="flex items-center justify-between border-t border-border/50 pt-5">
              {card.linkedinUrl ? (
                <a href={card.linkedinUrl} target="_blank" rel="noreferrer" className="text-muted-foreground transition-colors hover:text-primary" aria-label="LinkedIn" data-testid={`link-linkedin-${card.id}`}>
                  <Linkedin className="h-4 w-4" />
                </a>
              ) : <div />}
              <button
                type="button"
                onClick={() => setIsFlipped(true)}
                className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.12em] text-primary transition-colors hover:text-primary/80"
                aria-label={lang === 'ar' ? 'عرض التفاصيل' : 'View details'}
                aria-pressed={isFlipped}
                tabIndex={isFlipped ? -1 : 0}
              >
                {lang === 'ar' ? 'التفاصيل' : 'Details'} {lang === 'ar' ? <ArrowLeft className="h-3 w-3" /> : <ArrowRight className="h-3 w-3" />}
              </button>
            </div>
          </div>

          <div className="flip-card__back absolute inset-0 flex flex-col justify-between border border-primary/50 bg-secondary/30 p-6 sm:p-8" aria-hidden={!isFlipped}>
            <div>
              <p className="text-[10px] uppercase tracking-[0.14em] text-primary">{localized(card.organization, lang)}</p>
              <h3 className="mt-2 font-display text-xl text-foreground">{localized(card.role, lang)}</h3>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">{localized(card.backDetails, lang)}</p>
              {card.skills && <p className="mt-4 text-[11px] leading-5 text-primary/80">{localized(card.skills, lang)}</p>}

              {card.certificates && card.certificates.length > 0 && (
                <div className="mt-6">
                  <p className="mb-3 font-mono-custom text-[10px] uppercase tracking-[0.12em] text-foreground/60">{lang === 'ar' ? 'الشهادات' : 'Certificates'}</p>
                  <div className="flex flex-wrap gap-3">
                    {card.certificates.map((cert, idx) => (
                      <img key={idx} src={`${import.meta.env.BASE_URL}${cert.src}`} alt={localized(cert.alt, lang)} title={localized(cert.alt, lang)} className="leadership-certificate-thumb" />
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center justify-end border-t border-border/50 pt-5">
              <button
                type="button"
                onClick={() => setIsFlipped(false)}
                className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.12em] text-foreground/70 transition-colors hover:text-foreground"
                aria-label={lang === 'ar' ? 'الرجوع' : 'Go back'}
                tabIndex={isFlipped ? 0 : -1}
              >
                {lang === 'ar' ? <ArrowRight className="h-3 w-3" /> : <ArrowLeft className="h-3 w-3" />} {lang === 'ar' ? 'رجوع' : 'Back'}
              </button>
            </div>
          </div>
        </div>
      </article>
  );
}

function HomePage({ lang, onChange }: { lang: Language; onChange: (language: Language) => void }) {
  const c = copy[lang];
  const [expanded, setExpanded] = useState<number | null>(null);
  useEffect(() => {
    setSeo(
      lang === 'ar' ? 'ساره عطوي — ملف الأعمال' : 'Sarah Atawi — Portfolio',
      lang === 'ar' ? 'ملف الأعمال الشخصي لساره عطوي، خريجة علوم الحاسب ومطورة تطبيقات الجوال ومصممة UI/UX.' : 'The personal portfolio of Sarah Atawi, Computer Science graduate, mobile application developer, and UI/UX designer.',
    );
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);
  const splitTitle = (title: string) => title.split('\\n').map((line, index) => <span key={line} className="block">{line}{index === 0 && <br />}</span>);
  return (
    <div id="top" lang={lang} className={`min-h-[100dvh] overflow-hidden ${lang === 'ar' ? 'font-arabic' : ''}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <SiteNav lang={lang} onChange={onChange} />
      <main>
        <section className={`home-hero relative mx-auto min-h-[100dvh] max-w-[1440px] px-6 sm:px-10 lg:px-14 ${lang === 'ar' ? 'home-hero--ar' : 'home-hero--en'}`} aria-labelledby="hero-name">
          <span className="home-hero__ghost home-hero__ghost--one" aria-hidden="true">{lang === 'ar' ? 'ساره' : 'SARAH'}</span>
          <span className="home-hero__ghost home-hero__ghost--two" aria-hidden="true">{lang === 'ar' ? 'عطوي' : 'ATAWI'}</span>
          <div className="home-hero__layout">
            <div className="home-hero__identity reveal">
              <p className="home-hero__kicker">{lang === 'ar' ? 'ملف الأعمال' : 'Portfolio / 01'}</p>
               <h1 id="hero-name" className="home-hero__name font-display">{lang === 'ar' ? 'ساره عطوي' : 'Sarah Atawi'}</h1>
              {lang === 'ar' ? (
                <p className="home-hero__role home-hero__role--ar" lang="ar" dir="rtl">
                  <span>مطوّرة تطبيقات جوّال</span>
                  <span>مصممة UI/UX</span>
                </p>
              ) : (
                <p className="home-hero__role">
                  <span>Computer Science</span>
                  <span>Mobile Application Developer</span>
                  <span>UI/UX Designer</span>
                </p>
              )}
              <p className="home-hero__bio">{c.heroBody}</p>
              <div className="home-hero__actions">
                <a href="#work-heading" className="group inline-flex items-center gap-3 border border-foreground bg-foreground px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.13em] text-background transition-colors hover:bg-primary hover:text-primary-foreground" data-testid="link-view-work">
                  {c.viewWork}<ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 border border-border px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.13em] text-muted-foreground transition-colors hover:border-primary hover:text-foreground" data-testid="link-contact-me">{c.contactMe}</a>
              </div>
               <div className="home-hero__socials" aria-label="Social links">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a key={social.label} href={social.href} target="_blank" rel="noreferrer" data-testid={`link-hero-social-${social.label.toLowerCase()}`}>
                      <Icon className="h-3.5 w-3.5" aria-hidden="true" />{social.label}<span aria-hidden="true">↗</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
           <div className="home-hero__scroll font-mono-custom">
            <span className="h-px w-10 bg-border" /><span>{c.scroll}</span>
          </div>
        </section>

         <section id="about" className="about-section mx-auto max-w-[1440px] scroll-mt-20 px-6 py-28 sm:px-10 sm:py-40 lg:px-14" aria-labelledby="about-heading">
           <SectionHeading number="01" id="about-heading">{c.aboutLabel}</SectionHeading>
           <div className="max-w-3xl">
             <div className="max-w-xl">
              <p className="text-base leading-8 text-foreground/85">{c.aboutBody}</p>
              <p className="mt-6 text-sm leading-7 text-muted-foreground">{c.aboutBody2}</p>
              <div className="mt-12 border-l border-primary/60 pl-5">
                <p className="font-mono-custom text-[10px] uppercase tracking-[0.18em] text-primary">{c.currently}</p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{c.focus}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="scroll-mt-20 border-y border-border/70 bg-card/25" aria-labelledby="work-heading">
          <div className="mx-auto max-w-[1440px] px-6 py-28 sm:px-10 sm:py-40 lg:px-14">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <SectionHeading number="02" id="work-heading" className="mb-0">{c.selected}</SectionHeading>
              {c.selectedIntro && <p className="max-w-xs text-sm leading-7 text-muted-foreground">{c.selectedIntro}</p>}
            </div>
            <div className="mt-20 grid gap-16 md:grid-cols-3 md:gap-7 lg:gap-12">
              {projects.map((project) => <ProjectCard key={project.slug} project={project} lang={lang} />)}
            </div>
          </div>
        </section>

        <section id="experience" className="experience-section mx-auto max-w-[1440px] scroll-mt-20 px-6 py-28 sm:px-10 sm:py-40 lg:px-14">
          <SectionHeading number="03">{c.experience}</SectionHeading>
             <div className="experience-content grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-start">
               <div className="experience-list border-t border-border/80">
              {experience.map((item, index) => (
                <div key={item.name} className="experience-item border-b border-border/80 py-7">
                  <span className="block font-display text-3xl leading-tight tracking-[-0.04em]">{lang === 'ar' ? item.arabicName : item.name}</span>
                  <span className="text-xs uppercase tracking-[0.12em] text-muted-foreground">{localized(item.role, lang)}</span>
                  <span className="ml-3 text-xs text-primary">{String(index + 1).padStart(2, '0')}</span>
                  <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">{localized(item.note, lang)}</p>
                </div>
              ))}
              </div>
               <div className="experience-certificate mx-auto w-full max-w-[300px] border border-border/80 bg-card/50 p-3 lg:justify-self-end" data-testid="certificate-cooperative-training">
                <img src={cooperativeTrainingCertificate} alt={lang === 'ar' ? 'شهادة التدريب التعاوني' : 'Cooperative training certificate'} className="block h-auto w-full" />
              </div>
             </div>
        </section>

        <section id="leadership" className="leadership-section border-y border-border/70 bg-card/25">
          <div className="mx-auto max-w-[1440px] px-6 py-28 sm:px-10 sm:py-40 lg:px-14">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end mb-16">
              <SectionHeading number="04" className="mb-0">{c.leadership}</SectionHeading>
              <p className="max-w-xs text-sm leading-7 text-muted-foreground">{c.leadershipIntro}</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {leadershipCards.map((card) => (
                <LeadershipFlipCard key={card.id} card={card} lang={lang} />
              ))}
            </div>
          </div>
        </section>


         <section className="credentials-section mx-auto grid max-w-[1440px] gap-12 px-6 py-28 sm:px-10 sm:py-36 lg:grid-cols-2 lg:px-14" aria-label={`${c.workshops} and ${c.certifications}`}>
          {[{ title: c.workshops, items: workshops, kind: 'workshops' }, { title: c.certifications, items: [], kind: 'certifications' }].map((group) => (
             <div key={group.title} className={`${group.kind === 'certifications' ? 'certifications-panel lg:col-span-2' : 'workshops-panel'} border-t border-border pt-6`}>
              <div className="flex items-center justify-between">
                 <SectionHeading number={group.kind === 'certifications' ? '06' : '05'} className="mb-0">{group.title}</SectionHeading>
                <span className="font-mono-custom text-[10px] text-muted-foreground">/ 0{group.kind === 'certifications' ? certificateAssets.length : group.items.length}</span>
              </div>
              {group.kind === 'certifications' ? (
                <div className="mt-8">
                  <CertificateGallery />
                </div>
              ) : (
                <div className="mt-8">
                  {group.items.map((item, index) => (
                    <div key={item.en} className="flex items-center justify-between border-b border-border/70 py-5 text-sm">
                      <span>{localized(item, lang)}</span><span className="text-xs text-muted-foreground">{localized('detail' in item ? item.detail : { en: c.coming, ar: c.coming }, lang)}</span>
                      <span className="font-mono-custom text-[10px] text-primary">0{index + 1}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>

         <section id="contact" className="contact-section contact-section--final scroll-mt-20 border-t border-border/70" aria-labelledby="contact-heading">
          <div className="mx-auto max-w-[1440px] px-6 py-32 sm:px-10 sm:py-48 lg:px-14">
            <SectionHeading number="07" id="contact-heading">{c.contactLabel}</SectionHeading>
            <div className="mt-16 grid gap-10 border-t border-border pt-7 md:grid-cols-[1fr_auto] md:items-end">
              <p className="max-w-md text-sm leading-7 text-muted-foreground">{c.contactBody}</p>
              <a href="mailto:srh.alatwi@gmail.com" className="group inline-flex w-fit items-center gap-4 border-b border-primary pb-3 text-sm text-foreground transition-colors hover:text-primary" data-testid="link-say-hello">
                <Mail className="h-4 w-4 text-primary" aria-hidden="true" />{c.sayHello}<ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            </div>
             <div className="contact-links contact-links--row mt-20 grid border-t border-border/70 pt-6 sm:grid-cols-2 lg:grid-cols-4">
              {contactLinks.map((contact) => {
                const Icon = contact.icon;
                const external = contact.href.startsWith('http');
                return (
                  <a key={contact.label} href={contact.href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})} className="contact-link group flex items-center gap-3 border-b border-border/70 py-5 text-foreground transition-colors hover:text-primary sm:border-r sm:px-5 sm:first:pl-0 lg:border-b-0 lg:border-r lg:last:border-r-0" data-testid={`link-contact-${contact.label.toLowerCase()}`}>
                    <span className="grid h-9 w-9 shrink-0 place-items-center border border-border text-primary transition-colors group-hover:border-primary"><Icon className="h-4 w-4" aria-hidden="true" /></span>
                    <span className="min-w-0"><span className="block font-mono-custom text-[9px] uppercase tracking-[0.16em] text-muted-foreground">{contact.label}</span><span className="mt-1 block truncate text-sm">{contact.value}</span></span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-border/70 px-6 py-7 sm:px-10 lg:px-14">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-3 text-[10px] uppercase tracking-[0.17em] text-muted-foreground sm:flex-row">
          <span>{c.footer}</span><span>© {new Date().getFullYear()} / All rights reserved</span>
        </div>
      </footer>
    </div>
  );
}

const techIcons: Record<string, React.ElementType> = {
  'Flutter': SiFlutter,
  'Dart': SiDart,
  'Firebase': SiFirebase,
  'Figma': SiFigma,
  'GitHub': SiGithub,
  'VS Code': VscCode,
  'Google Chrome': SiGooglechrome,
  'Android Studio': SiAndroidstudio,
  'Agile': Layers,
  'AI Chatbot': Cpu,
  'Clean Architecture': Box,
  'API Integration': Code2,
  'audio_service': Code2,
  'just_audio': Code2,
  'MP3Quran API': Database,
  'UX Research': Search,
  'Design Thinking': LayoutDashboard,
  'Prototyping': LayoutDashboard,
  'Usability Testing': Search,
  'RTL': LayoutDashboard,
  'WebView': Code2,
};

function getSectionContent(project: Project, sectionKey: string, lang: Language) {
  const missing = { en: 'Content currently unavailable.', ar: 'المحتوى غير متاح حالياً.' };

  if (sectionKey === 'problem') {
    if (project.slug === 'talaqi') return { en: 'Young adults and lifelong learners in Saudi Arabia lack a dedicated, structured platform for direct peer-to-peer knowledge sharing. General social platforms and formal course providers do not combine local skill exchange with volunteer-hour tracking and guided learning support.', ar: 'يفتقر الشباب والمتعلمون مدى الحياة في المملكة العربية السعودية إلى منصة مخصصة ومنظمة لتبادل المعرفة مباشرة بين الأقران. ولا تجمع المنصات الاجتماعية العامة أو منصات الدورات الرسمية بين تبادل المهارات محليًا وتتبع الساعات التطوعية والدعم الإرشادي للتعلّم.' };
    if (project.slug === 'rateel') return { en: 'The need for a modern interface and integrated digital experience for daily spiritual practice.', ar: 'الحاجة إلى واجهة عصرية وتجربة رقمية متكاملة للممارسات الروحية اليومية.' };
    if (project.slug === 'banner-system') return { en: 'The redesign addressed schedule access, language switching and RTL layout, an overwhelming academic transcript, unclear attendance records, dead ends and navigation recovery, outdated visual design, complex academic processes and study plan, and inconsistent branding, typography, and logo.', ar: 'عالجت إعادة التصميم الوصول إلى الجدول، وتبديل اللغة وتخطيط RTL، والسجل الأكاديمي المربك، وعدم وضوح سجلات الحضور، والنهايات المغلقة واستعادة التنقل، والتصميم البصري القديم، وتعقيد الإجراءات الأكاديمية والخطة الدراسية، وعدم اتساق الهوية والخط والشعار.' };
  }
  if (sectionKey === 'solution') {
    if (project.slug === 'talaqi') return { en: 'Talaqi connects users as both learners and mentors through profiles, skill discovery, learning-session requests, and real-time messaging. It also records volunteer hours, awards milestone badges, provides a volunteer leaderboard, supports reporting and moderation, and offers educational guidance through an AI chatbot.', ar: 'يربط تلاقي المستخدمين بصفتهم متعلمين ومرشدين عبر الملفات الشخصية واكتشاف المهارات وطلبات الجلسات التعليمية والرسائل الفورية. كما يسجّل الساعات التطوعية، ويمنح شارات عند تحقيق الإنجازات، ويعرض لوحة للمتطوعين، ويدعم الإبلاغ والإشراف، ويوفّر إرشادًا تعليميًا عبر روبوت محادثة ذكي.' };
    if (project.slug === 'rateel') return { en: 'Rateel brought a modern interface and integrated digital experience to users’ daily spiritual journey, with dynamic Default and Ramadan theming and audio/API support.', ar: 'قدّم رتيل واجهة عصرية وتجربة رقمية متكاملة للرحلة الروحية اليومية للمستخدمين، مع سمات ديناميكية للوضعين الافتراضي ورمضان، ودعم للصوت وواجهات API.' };
    if (project.slug === 'banner-system') return { en: 'Solutions included a homepage schedule shortcut and weekly timetable, full RTL support, semester filtering, a collapsible transcript with GPA and credit emphasis, attendance filters and visual indicators, Back/Cancel and breadcrumbs, a modern PNU identity, a visual study-plan table with status colors, and direct shortcuts.', ar: 'شملت الحلول اختصار الجدول في الصفحة الرئيسية والجدول الأسبوعي، ودعم RTL الكامل، وتصفية الفصول، وسجلًا أكاديميًا قابلًا للطي مع إبراز المعدل والساعات، وفلاتر الحضور ومؤشرات بصرية، وأزرار الرجوع والإلغاء ومسارات التنقل، وهوية PNU عصرية، وجدولًا بصريًا للخطة الدراسية بألوان للحالات، واختصارات مباشرة.' };
  }
  return missing;
}

function getTalaqiChallenges(lang: Language) {
  const challenges = [
    {
      title: { en: 'Community safety', ar: 'سلامة المجتمع' },
      body: {
        en: 'Users can report inappropriate profiles or content. Administrators review each report and can block the user, send a warning, dismiss it, or keep it pending when evidence is insufficient.',
        ar: 'يمكن للمستخدمين الإبلاغ عن الملفات أو المحتوى غير المناسب. يراجع المشرفون كل بلاغ، ويمكنهم حظر المستخدم أو إرسال تحذير أو تجاهل البلاغ أو إبقاءه معلّقًا عند عدم كفاية الأدلة.',
      },
    },
    {
      title: { en: 'Connection failures', ar: 'أخطاء الاتصال' },
      body: {
        en: 'The documented flows handle Firebase database errors with a retry-later message, while an AI service timeout clearly informs the user that the assistant is temporarily unavailable.',
        ar: 'تعالج المسارات الموثقة أخطاء الاتصال بقاعدة Firebase عبر رسالة تطلب المحاولة لاحقًا، بينما يُبلغ تعطل اتصال خدمة الذكاء الاصطناعي المستخدم بوضوح أن المساعد غير متاح مؤقتًا.',
      },
    },
    {
      title: { en: 'Current scope', ar: 'النطاق الحالي' },
      body: {
        en: 'The current application supports Arabic, and volunteer hours are recorded inside Talaqi rather than certified through an external official volunteering system. English support and official integration are identified as future work.',
        ar: 'يدعم التطبيق حاليًا اللغة العربية، وتُسجّل الساعات التطوعية داخل تلاقي بدل اعتمادها عبر منصة تطوعية رسمية خارجية. وقد حُدد دعم الإنجليزية والتكامل الرسمي ضمن التطوير المستقبلي.',
      },
    },
  ];

  return challenges.map((challenge) => ({
    title: localized(challenge.title, lang),
    body: localized(challenge.body, lang),
  }));
}

function CaseStudyPage({ lang, onChange }: { lang: Language; onChange: (language: Language) => void }) {
  const params = useParams<{ slug: string }>();
  const project = projects.find((item) => item.slug === params.slug) ?? projects[0];
  const c = copy[lang];

  useEffect(() => {
    window.scrollTo(0, 0);
    setSeo(
      lang === 'ar' ? `${project.arabicTitle} — ساره عطوي` : `${project.title} — Sarah Atawi`,
      lang === 'ar' ? `دراسة حالة ${project.arabicTitle} ضمن ملف أعمال ساره عطوي.` : `${project.title} case study from Sarah Atawi's portfolio.`,
    );
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang, project]);

  const problemText = getSectionContent(project, 'problem', lang);
  const solutionText = getSectionContent(project, 'solution', lang);

  return (
    <div lang={lang} className={`min-h-[100dvh] bg-background text-foreground ${lang === 'ar' ? 'font-arabic' : ''}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <SiteNav lang={lang} onChange={onChange} />
      <main className="mx-auto max-w-[1440px] px-6 pb-24 pt-36 sm:px-10 sm:pb-40 lg:px-14">
        <Link href="/" className="group inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-primary" data-testid="link-back-portfolio">
          <ArrowLeft className={`h-4 w-4 transition-transform group-hover:-translate-x-1 ${lang === 'ar' ? 'rotate-180' : ''}`} />{c.back}
        </Link>

        <div className="mt-16 mb-24 grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-20 lg:items-center">
          <div>
            <p className="font-mono-custom text-[10px] uppercase tracking-[0.2em] text-primary">{project.index} / {lang === 'ar' ? project.arabicContext : project.context}</p>
            <h1 className="mt-6 font-display text-[clamp(3.5rem,8vw,8rem)] leading-[.85] tracking-[-0.075em] text-foreground">{lang === 'ar' ? project.arabicTitle : project.title}<span className="text-primary">.</span></h1>
            <p className="mt-8 text-base leading-8 text-muted-foreground">{localized(project.sections.overview.body, lang)}</p>
          </div>
          <div className="relative overflow-hidden border border-border/50 bg-secondary/20 p-2 lg:p-4 rounded-xl">
             {project.slug === 'talaqi' ? (
               <div className="aspect-[1.4/1] w-full flex items-center justify-center bg-secondary/40">
                  <img src={projectAsset(project.cardAsset)} alt={localized(project.cardAlt, lang)} className="w-[60%] h-auto object-contain" />
               </div>
             ) : (
               <ProjectHeroMedia project={project} lang={lang} />
             )}
          </div>
        </div>

        <div className="grid gap-16 lg:gap-24">
          {/* 01 Overview */}
          <Reveal>
            <section className="scroll-mt-24 border-t border-border/70 pt-10" id="section-01">
              <SectionHeading number="01">{lang === 'ar' ? 'نظرة عامة' : 'Overview'}</SectionHeading>
              <div className="max-w-3xl text-muted-foreground text-base leading-8">
                <p>{localized(project.sections.overview.body, lang)}</p>
              </div>
            </section>
          </Reveal>

          {/* 02 Problem & 03 Solution */}
          <Reveal>
            <section className="scroll-mt-24 border-t border-border/70 pt-10" id="section-02-03">
              <div className="grid md:grid-cols-2 gap-10 md:gap-16">
                <div className="bg-secondary/20 border border-border/50 p-8 rounded-xl relative overflow-hidden">
                  <div className="absolute top-0 end-0 p-4 opacity-5"><AlertCircle className="w-24 h-24" /></div>
                  <SectionHeading number="02">{lang === 'ar' ? 'المشكلة' : 'The Problem'}</SectionHeading>
                  <p className="mt-6 text-muted-foreground text-sm leading-7 relative z-10">{problemText[lang]}</p>
                </div>
                <div className="bg-primary/5 border border-primary/20 p-8 rounded-xl relative overflow-hidden">
                  <div className="absolute top-0 end-0 p-4 opacity-5 text-primary"><CheckCircle2 className="w-24 h-24" /></div>
                  <SectionHeading number="03">{lang === 'ar' ? 'الحل' : 'The Solution'}</SectionHeading>
                  <p className="mt-6 text-foreground text-sm leading-7 relative z-10">{solutionText[lang]}</p>
                </div>
              </div>
            </section>
          </Reveal>

          {/* 04 Tools & Technologies */}
          <Reveal>
            <section className="scroll-mt-24 border-t border-border/70 pt-10" id="section-04">
              <SectionHeading number="04">{lang === 'ar' ? 'التقنيات والأدوات' : 'Tools & Technologies'}</SectionHeading>
              {localized(project.sections.technologies.body, lang) && (
                <p className="max-w-3xl text-muted-foreground text-base leading-8 mb-8">{localized(project.sections.technologies.body, lang)}</p>
              )}
              <div className="flex flex-wrap gap-4">
                {project.sections.technologies.items?.map((item) => {
                  const itemName = item.en;
                  const Icon = techIcons[itemName] || Code2;
                  return (
                    <div key={itemName} className="flex items-center gap-3 bg-secondary/30 border border-border/60 px-4 py-2.5 rounded-lg text-sm text-foreground">
                      <Icon className="w-4 h-4 text-primary" />
                      <span>{localized(item, lang)}</span>
                    </div>
                  );
                })}
              </div>
            </section>
          </Reveal>

          {/* 05 Design & Development */}
          <Reveal>
            <section className="scroll-mt-24 border-t border-border/70 pt-10" id="section-05">
              <SectionHeading number="05">{lang === 'ar' ? 'التصميم والتطوير' : 'Design & Development'}</SectionHeading>
              <div className="text-muted-foreground text-base leading-8">
                <p className="mb-8 max-w-3xl">{localized(project.sections.process.body, lang)}</p>
                {project.sections.process.items && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {project.sections.process.items.map((item, i) => (
                      <div key={item.en} className="border border-border/50 bg-secondary/10 p-4 rounded-lg">
                        <span className="font-mono-custom text-[10px] text-primary block mb-2">0{i+1}</span>
                        <span className="text-sm font-medium text-foreground">{localized(item, lang)}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>
          </Reveal>

          {/* 06 Key Features */}
          <Reveal>
            <section className="scroll-mt-24 border-t border-border/70 pt-10" id="section-06">
              <SectionHeading number="06">{lang === 'ar' ? 'الميزات الرئيسية' : 'Key Features'}</SectionHeading>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {project.keyFeatures.map((feature, i) => (
                  <div key={feature.en} className="flex gap-4 p-5 bg-card/30 border border-border/50 rounded-xl transition-colors hover:border-primary/40">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 font-mono-custom text-[10px]">
                      0{i+1}
                    </div>
                    <p className="text-sm leading-6 text-foreground">{localized(feature, lang)}</p>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          {/* 07 Challenges & Solutions */}
          <Reveal>
            <section className="scroll-mt-24 border-t border-border/70 pt-10" id="section-07">
              <SectionHeading number="07">{lang === 'ar' ? 'التحديات والحلول' : 'Challenges & Solutions'}</SectionHeading>
              {project.slug === 'talaqi' ? (
                <div className="grid gap-4 md:grid-cols-3">
                  {getTalaqiChallenges(lang).map((challenge, index) => (
                    <div key={challenge.title} className="border border-border/50 bg-secondary/20 p-6 rounded-xl" data-testid={`card-talaqi-challenge-${index}`}>
                      <span className="font-mono-custom text-[10px] tracking-[0.16em] text-primary">0{index + 1}</span>
                      <p className="mt-4 text-sm font-semibold text-primary">{challenge.title}</p>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">{challenge.body}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="border border-border/50 bg-secondary/20 p-6 rounded-xl">
                    <AlertCircle className="mb-5 h-5 w-5 text-primary" />
                    <p className="text-sm leading-7 text-muted-foreground">{problemText[lang]}</p>
                  </div>
                  <div className="border border-primary/20 bg-primary/5 p-6 rounded-xl">
                    <CheckCircle2 className="mb-5 h-5 w-5 text-primary" />
                    <p className="text-sm leading-7 text-foreground">{solutionText[lang]}</p>
                  </div>
                </div>
              )}
            </section>
          </Reveal>

          {/* 08 Visual Showcase */}
          <Reveal>
            <section className="scroll-mt-24 border-t border-border/70 pt-10" id="section-08">
              <SectionHeading number="08">{lang === 'ar' ? 'العرض البصري' : 'Visual Showcase'}</SectionHeading>
              <ProjectMediaGallery media={project.gallery} lang={lang} compact={project.slug === 'talaqi'} />
            </section>
          </Reveal>

          {/* 09 Results / Impact */}
          <Reveal>
            <section className="scroll-mt-24 border-t border-border/70 pt-10" id="section-09">
              <SectionHeading number="09">{lang === 'ar' ? 'النتائج والأثر' : 'Results / Impact'}</SectionHeading>
              <div className="max-w-3xl text-muted-foreground text-base leading-8">
                <p>{localized(project.sections.impact.body, lang)}</p>
              </div>
            </section>
          </Reveal>

          {/* 10 Links / Demo */}
          <Reveal>
            <section className="scroll-mt-24 border-t border-border/70 pt-10" id="section-10">
              <SectionHeading number="10">{lang === 'ar' ? 'الروابط والعروض' : 'Links / Demo'}</SectionHeading>
              {project.repositoryUrl ? (
                <a
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-4 border border-primary/35 bg-primary/5 px-5 py-4 text-sm text-foreground transition-colors hover:border-primary hover:bg-primary/10"
                  data-testid="link-project-github"
                >
                  <SiGithub className="h-5 w-5 text-primary" aria-hidden="true" />
                  <span>GitHub</span>
                  <ArrowUpRight className="h-4 w-4 text-primary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
                </a>
              ) : (
                <div className="max-w-xl text-muted-foreground text-sm flex items-center gap-3 bg-secondary/10 p-4 border border-border/30 rounded-lg">
                  <LinkIcon className="w-4 h-4 shrink-0 text-primary" />
                  <p>{lang === 'ar' ? 'لا تتضمن المواد المتاحة رابطًا مباشرًا أو نسخة تجريبية للمشروع.' : 'The available materials do not include a live link or project demo.'}</p>
                </div>
              )}
            </section>
          </Reveal>
        </div>
      </main>
      <footer className="border-t border-border/70 px-6 py-7 sm:px-10 lg:px-14">
        <div className="mx-auto flex max-w-[1440px] justify-between text-[10px] uppercase tracking-[0.17em] text-muted-foreground">
          <span>{c.footer}</span>
          <Link href="/" className="hover:text-primary" data-testid="link-footer-home">{c.back}</Link>
        </div>
      </footer>
    </div>
  );
}

function NotFoundPage({ lang }: { lang: Language }) {
  const c = copy[lang];
  return <main className="grid min-h-[100dvh] place-items-center px-6 text-center"><div><p className="font-mono-custom text-xs text-primary">404</p><h1 className="mt-5 font-display text-6xl">Page not found.</h1><Link href="/" className="mt-8 inline-block border-b border-primary pb-2 text-sm text-muted-foreground hover:text-primary" data-testid="link-not-found-home">{c.back}</Link></div></main>;
}

function RoutedPages({ lang, onChange }: { lang: Language | null; onChange: (language: Language) => void }) {
  const [location] = useLocation();

  useLayoutEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    const previousScrollBehavior = document.documentElement.style.scrollBehavior;
    window.history.scrollRestoration = 'manual';
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    const frame = window.requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      document.documentElement.style.scrollBehavior = previousScrollBehavior;
    });

    return () => {
      window.cancelAnimationFrame(frame);
      document.documentElement.style.scrollBehavior = previousScrollBehavior;
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, [location]);

  return (
    <ErrorBoundary resetKey={location}>
      <Switch>
        <Route path="/" component={() => lang ? <HomePage lang={lang} onChange={onChange} /> : <LanguageGate onChoose={onChange} />} />
        <Route path="/work/:slug" component={() => lang ? <CaseStudyPage lang={lang} onChange={onChange} /> : <LanguageGate onChoose={onChange} />} />
        <Route component={() => lang ? <NotFoundPage lang={lang} /> : <LanguageGate onChoose={onChange} />} />
      </Switch>
    </ErrorBoundary>
  );
}

function App() {
  // Development mode intentionally starts at the welcome route every time.
  // Set this to false later to restore the saved-language startup behavior.
  const SHOW_WELCOME_ON_LOAD = true;
  const [language, setLanguage] = useState<Language | null>(() => {
    if (SHOW_WELCOME_ON_LOAD) return null;
    const saved = window.localStorage.getItem('sarah-atawi-language');
    return saved === 'ar' || saved === 'en' ? saved : null;
  });
  const chooseLanguage = (next: Language) => {
    window.localStorage.setItem('sarah-atawi-language', next);
    setLanguage(next);
  };
  return <RoutedPages lang={language} onChange={chooseLanguage} />;
}

export default App;