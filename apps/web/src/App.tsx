import { useState } from 'react';
const links = [ ['⌂','Inicio'], ['▤','Suscripciones'], ['▣','Biblioteca'], ['◷','Historial'] ] as const;
export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  return <div className="app" data-theme={theme}>
    <header className="top"><div className="brand"><span className="brand-icon" aria-hidden="true">♫</span><span>ritmo</span><span className="beta">FASE 0</span></div>
      <form className="search" onSubmit={e => e.preventDefault()} role="search"><label className="sr-only" htmlFor="search">Buscar canciones y videos</label><input id="search" type="search" placeholder="Buscar canciones y videos" disabled /><button disabled aria-label="Buscar">⌕</button></form>
      <div className="top-actions"><button className="theme" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Cambiar tema">{theme === 'dark' ? '☀' : '☾'}</button><button className="account" disabled>Ingresar</button></div></header>
    <div className="shell"><nav className="sidebar" aria-label="Navegación principal">{links.map(([icon, name], i) => <button key={name} className={i === 0 ? 'selected' : ''} disabled={i !== 0}><span aria-hidden="true">{icon}</span>{name}</button>)}</nav>
    <main><div className="chips" aria-label="Categorías"><span className="current">Todo</span><span>Música</span><span>Videos</span><span>En vivo</span></div>
      <div className="hero"><div className="eyebrow">TU PRÓXIMO DESCUBRIMIENTO</div><h1>Todo empieza con<br /><em>una canción.</em></h1><p>Una nueva forma de explorar música y videos, con tu propio ritmo.</p><div className="badge">● Base del proyecto · Fase 0</div></div>
      <section className="section" aria-labelledby="section-title"><div className="section-title"><div><h2 id="section-title">Explorá a tu manera</h2><p>Esta es la estructura inicial: todavía no hay videos ni búsqueda conectados.</p></div></div><div className="empty"><div className="empty-icon" aria-hidden="true">▶</div><div><strong>Tu biblioteca empieza acá</strong><p>En la próxima fase conectaremos la búsqueda y el reproductor oficial de YouTube.</p></div></div></section>
      <footer>Ritmo es un proyecto independiente, no afiliado a YouTube. <a href="https://www.youtube.com/t/terms" target="_blank" rel="noreferrer">Términos de YouTube</a> · <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Privacidad de Google</a></footer></main></div></div>;
}
