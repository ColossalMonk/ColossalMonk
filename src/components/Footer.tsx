export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wordmark" aria-hidden="true">
        ColossalMonk<span className="spark">✺</span>
      </div>
      <div className="container-wide footer-inner">
        <p>© {new Date().getFullYear()} Siddhartha Satyarthi</p>
        <a className="footer-404" href="/404.html">
          psst: even the 404 is a game <span aria-hidden="true">↗</span>
        </a>
        <p className="footer-alias">
          a.k.a. <span className="spark">✺</span> ColossalMonk
        </p>
      </div>
    </footer>
  );
}
