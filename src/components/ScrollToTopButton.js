import { useState, useEffect } from 'react';

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      className={`scroll-top${visible ? ' scroll-top--visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Наверх"
      title="Наверх"
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 4L3 11h4v5h6v-5h4L10 4z" fill="currentColor"/>
      </svg>
    </button>
  );
}
