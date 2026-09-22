import { latestRelease } from "@/lib/release";

const featureItems = [
  ["01", "Live detection", "Spot cracks, potholes and road damage while you move.", "⌁"],
  ["02", "Photo scanning", "Turn a roadside photo into a useful report in seconds.", "◉"],
  ["03", "Community reports", "Give the people who know a street best a voice.", "⌘"],
  ["04", "Verified defects", "See which reports have been checked and confirmed.", "✓"],
  ["05", "Interactive map", "Understand what needs attention around you.", "⌖"],
  ["06", "Road insights", "Find patterns that help make better road decisions.", "↗"],
];

const faqs = [
  ["What is StreetSmart?", "StreetSmart is an Android app that helps people identify, report and track road defects in their community. It brings photo and live detection together with a shared map, so useful road information is easier to act on."],
  ["Is StreetSmart free?", "Yes. StreetSmart is free to download and use, with no subscription required. You only need an Android device that meets the minimum version shown on this page."],
  ["Which Android versions are supported?", `StreetSmart currently supports ${latestRelease.minAndroid}. If your device runs an older Android version, it may not be able to install or run the latest release reliably.`],
  ["Why does Android ask permission to install the APK?", "Android asks you to approve apps installed outside the Play Store. This permission lets your browser or file manager open the StreetSmart installer; you can turn it off again in your device settings after installation."],
  ["Is the APK safe?", "Use the official download button on this site to get the verified StreetSmart release. Avoid APK files from unofficial websites or messages, since they may not be the current version of the app."],
  ["How do I update StreetSmart?", "Download the latest APK from this page and install it over your existing app. Your Android device will guide you through the update, and your existing app data should remain available."],
];

function BrandMark() {
  return <img className="brand-mark" src="/logo/streetsmart_mark.png" alt="" aria-hidden="true" />;
}

function AndroidIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="android-icon"><path d="M7.2 9.4h9.6v8.2a1.5 1.5 0 0 1-1.5 1.5h-.6v2.4a.8.8 0 0 1-1.6 0v-2.4h-2.2v2.4a.8.8 0 0 1-1.6 0v-2.4h-.6a1.5 1.5 0 0 1-1.5-1.5V9.4Zm1-3.9L7 3.6m9 1.9 1.2-1.9M6.5 10v6.2m11-6.2v6.2M8.4 9.4a3.7 3.7 0 0 1 7.2 0H8.4Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="10.2" cy="7.5" r=".45" fill="currentColor"/><circle cx="13.8" cy="7.5" r=".45" fill="currentColor"/></svg>;
}

function Phone({ type = "detect" }: { type?: "home" | "detect" | "map" | "report" }) {
  const screens = {
    home: { src: "/screens/home.jpg", alt: "StreetSmart home screen" },
    detect: { src: "/screens/road-scan.jpg", alt: "StreetSmart road scan screen" },
    map: { src: "/screens/map.jpg", alt: "StreetSmart map screen" },
    report: { src: "/screens/reports.jpg", alt: "StreetSmart reports screen" },
  };
  const screen = screens[type];
  return <div className="phone actual-screen"><img src={screen.src} alt={screen.alt} /></div>;
  if (type === "map") return <div className="phone phone-map" aria-label="Map screen placeholder"><div className="phone-top"><span>9:41</span><b>● ● ●</b></div><div className="map-grid" /><div className="map-road r-one" /><div className="map-road r-two" /><div className="map-road r-three" /><span className="map-pin pin-one">!</span><span className="map-pin pin-two">!</span><span className="map-pin pin-three">!</span><div className="map-sheet"><span>Nearby reports</span><strong>12 road issues</strong><p>Updated just now</p></div></div>;
  if (type === "report") return <div className="phone phone-report" aria-label="Report screen placeholder"><div className="phone-top"><span>9:41</span><b>● ● ●</b></div><div className="report-head"><span>‹</span><b>New report</b><em>?</em></div><div className="report-photo"><div className="road-photo"><i /><i /><i /></div><span>Photo added</span></div><div className="form-line"><span>Defect type</span><b>Pothole</b></div><div className="form-line"><span>Location</span><b>Use current location</b></div><button className="submit-mock">Submit report</button></div>;
  return <div className="phone phone-detect" aria-label="Detection screen placeholder"><div className="phone-top"><span>9:41</span><b>● ● ●</b></div><div className="detect-head"><b>StreetSmart</b><span>◎</span></div><div className="camera-view"><div className="horizon" /><div className="road-lines" /><div className="detected-box"><i />Possible pothole <b>92%</b></div></div><div className="detect-panel"><span className="live-dot" /> Live scanning <button>□</button><strong>Road condition detected</strong><p>Tap to review and submit a report.</p></div></div>;
}

function DownloadButton({ light = false }: { light?: boolean }) {
  return <a href={latestRelease.downloadUrl} className={`download-button ${light ? "light" : ""}`}><AndroidIcon /> <span>Download APK<small>for Android</small></span><b>↓</b></a>;
}

function ReleaseMeta({ dark = false }: { dark?: boolean }) {
  return <div className={`release-meta ${dark ? "dark" : ""}`}><span><b>Latest</b>{latestRelease.version}</span><span><b>Size</b>{latestRelease.apkSize}</span><span><b>Requires</b>{latestRelease.minAndroid}</span></div>;
}

function MobileLanding() {
  return <div className="mobile-experience">
    <header className="mobile-app-bar">
      <a href="#mobile-top" className="brand"><BrandMark /><span>StreetSmart</span></a>
      <a className="mobile-app-bar-action" href="#mobile-download">Get app</a>
    </header>

    <section id="mobile-top" className="mobile-hero-section">
      <p className="mobile-overline">STREETSMART FOR ANDROID</p>
      <h1>Know the road.<br /><em>Help improve it.</em></h1>
      <p>Spot a problem, send a useful report and see what your community has noticed.</p>
      <DownloadButton />
      <p className="mobile-safe-note">Free to download · Official release</p>
      <div className="mobile-hero-phone"><Phone type="home" /></div>
    </section>

    <section className="mobile-purpose-section">
      <p className="mobile-overline">ONE SIMPLE LOOP</p>
      <h2>From what you see to something useful.</h2>
      <div className="mobile-purpose-list">
        <div><b>01</b><span><strong>Notice</strong><small>See a road issue while you are out.</small></span></div>
        <div><b>02</b><span><strong>Report</strong><small>Add a photo and the important details.</small></span></div>
        <div><b>03</b><span><strong>Follow</strong><small>Understand the bigger picture on the map.</small></span></div>
      </div>
    </section>

    <section className="mobile-screens-section">
      <div className="mobile-section-copy"><p className="mobile-overline">MADE FOR THE MOMENT</p><h2>Clear tools, right when you need them.</h2></div>
      <article className="mobile-screen-card scan-card"><div><span>01 / LIVE SCAN</span><h3>See potential road damage as you move.</h3><p>Use your phone camera to spot what needs a closer look.</p></div><Phone type="detect" /></article>
      <article className="mobile-screen-card report-card"><div><span>02 / REPORT</span><h3>Turn an observation into a clear report.</h3><p>Add context in a few focused steps.</p></div><Phone type="report" /></article>
      <article className="mobile-screen-card map-card"><div><span>03 / MAP</span><h3>See the road network more clearly.</h3><p>View reports around you and follow verified issues.</p></div><Phone type="map" /></article>
    </section>

    <section id="mobile-download" className="mobile-download-section">
      <p className="mobile-overline">READY WHEN YOU ARE</p><h2>Start with one road.</h2><p>Download StreetSmart and make the next observation count.</p><DownloadButton light /><ReleaseMeta dark />
    </section>

    <section className="mobile-faq-section">
      <p className="mobile-overline">GOOD TO KNOW</p><h2>Before you download.</h2>
      <div className="mobile-faq-list">{faqs.slice(0, 4).map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
    </section>
    <footer className="mobile-footer"><a href="#mobile-top" className="brand"><BrandMark /><span>StreetSmart</span></a><p>Made for better roads.</p></footer>
  </div>;
}

export default function Home() {
  return <main><MobileLanding /><div className="desktop-experience">
    <header className="site-header">
      <a href="#top" className="brand"><BrandMark /><span>StreetSmart</span></a>
      <nav aria-label="Main navigation"><a href="#features">Features</a><a href="#how-it-works">How it works</a><a href="#faq">FAQ</a></nav>
      <a href="#download" className="nav-download">Download <span>↓</span></a>
      <details className="mobile-menu"><summary aria-label="Open navigation">☰</summary><div><a href="#features">Features</a><a href="#how-it-works">How it works</a><a href="#faq">FAQ</a><a href="#download">Download APK</a></div></details>
    </header>

    <section id="top" className="hero">
      <div className="hero-copy"><p className="eyebrow"><span /> COMMUNITY ROAD INTELLIGENCE</p><h1>See the road.<br />Help <em>improve</em> it.</h1><p className="hero-text">StreetSmart turns everyday drives and local knowledge into clearer road-condition awareness — one report at a time.</p><div className="hero-actions"><DownloadButton /><a href="#how-it-works" className="text-link">How it works <span>→</span></a></div><ReleaseMeta /><p className="release-date">Last updated {latestRelease.releaseDate}</p></div>
      <div className="hero-visual" aria-label="StreetSmart app preview"><div className="hero-ring" /><div className="location-note note-one"><i>⌖</i><span><b>12 nearby reports</b><small>in your area</small></span></div><div className="location-note note-two"><i>✓</i><span><b>Verified</b><small>Road defect</small></span></div><div className="location-note note-three"><i>●</i><span><b>Live updates</b><small>Community reports</small></span></div><Phone type="home" /></div>
    </section>

    <section className="intro section-wrap"><div className="section-kicker">THE APP</div><div><h2>Road awareness works<br />better when it’s shared.</h2><p>StreetSmart gives residents a simple way to turn what they see on the road into a report that can make a difference. Detect issues, add context and see the bigger picture.</p><a href="#features" className="text-link">Explore the features <span>→</span></a></div><div className="intro-stat"><strong>One clear view</strong><span>of road issues, made together.</span></div></section>

    <section id="features" className="features"><div className="section-heading"><div><p className="eyebrow"><span /> WHAT YOU CAN DO</p><h2>Everything you need<br />to notice what matters.</h2></div><p>From a road under your wheels to a report that helps your community — StreetSmart keeps the process simple.</p></div><div className="feature-grid">{featureItems.map(([number, title, description, icon]) => <article className="feature" key={title}><div className="feature-number">{number}</div><div className="feature-icon">{icon}</div><h3>{title}</h3><p>{description}</p></article>)}</div></section>

    <section id="how-it-works" className="how section-wrap"><div className="how-copy"><p className="eyebrow"><span /> HOW IT WORKS</p><h2>Useful reports,<br />without the runaround.</h2><p>StreetSmart helps transform a moment on the road into information everyone can use.</p><ol><li><b>01</b><span><strong>Scan</strong>See something worth reporting? Open StreetSmart.</span></li><li><b>02</b><span><strong>Detect</strong>The app helps identify visible road defects.</span></li><li><b>03</b><span><strong>Submit &amp; verify</strong>Submit your report, then follow it through verification.</span></li><li><b>04</b><span><strong>Map &amp; insights</strong>See the road network more clearly.</span></li></ol></div><div className="how-visual"><div className="step-label"><b>STEP 02</b><span>Detection in progress</span></div><Phone type="detect" /><div className="step-card"><span className="mini-check">✓</span><div><b>Ready to report</b><small>A few taps is all it takes.</small></div></div></div></section>

    <section className="showcase"><div className="showcase-title"><p className="eyebrow"><span /> IN YOUR HANDS</p><h2>A clearer picture<br />of every journey.</h2><p>Designed for the road, from the first sighting to the shared map.</p></div><div className="showcase-devices"><div className="showcase-copy"><span>03 / SUBMIT &amp; VERIFY</span><h3>Turn an observation<br />into action.</h3><p>Submit your report, then follow it through verification.</p></div><Phone type="report" /><div className="map-phone-wrap"><Phone type="map" /><div className="showcase-copy map-copy"><span>04 / MAP &amp; INSIGHTS</span><h3>Find the<br />bigger pattern.</h3><p>See verified issues and community reports around you.</p></div></div></div></section>

    <section className="mission"><div className="mission-line" /><p className="eyebrow"><span /> BUILT FOR ROAD MONITORING</p><h2>Better roads begin<br />with <em>better visibility.</em></h2><p>StreetSmart is a community-first tool for seeing where road conditions need attention. Not just data for data’s sake — practical insight, closer to the people who use the roads.</p><div className="mission-points"><span>Community-led</span><span>Road-focused</span><span>Made to share</span></div></section>

    <section id="download" className="download-section"><div className="download-left"><p className="eyebrow"><span /> GET STREETSMART</p><h2>Ready when<br />the road is.</h2><p>Download StreetSmart for Android and start making every road observation count.</p><DownloadButton light /></div><div className="release-panel"><div className="release-panel-head"><span className="release-panel-brand"><BrandMark />STREETSMART FOR ANDROID</span><b>Latest release</b></div><div className="release-version"><strong>v{latestRelease.version}</strong><span>Released {latestRelease.releaseDate}</span></div><dl><div><dt>APK size</dt><dd>{latestRelease.apkSize}</dd></div><div><dt>Minimum Android</dt><dd>{latestRelease.minAndroid}</dd></div></dl><a href={latestRelease.downloadUrl} className="panel-download">Download APK <span>↓</span></a><p className="verified-note">✓ Official StreetSmart release</p></div></section>

    <section className="install section-wrap"><div><p className="eyebrow"><span /> FIRST TIME INSTALLING?</p><h2>Up and running<br />in a minute.</h2></div><div className="install-steps"><div><b>01</b><span>Download the APK</span></div><div><b>02</b><span>Open the downloaded file</span></div><div><b>03</b><span>Allow installation if Android asks</span></div><div><b>04</b><span>Install and open StreetSmart</span></div></div></section>

    <section id="faq" className="faq section-wrap"><div><p className="eyebrow"><span /> QUESTIONS, ANSWERED</p><h2>Good to know.</h2><p>Everything you need before downloading StreetSmart.</p></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></section>

    <footer><a href="#top" className="brand"><BrandMark /><span>StreetSmart</span></a><div className="footer-links"><a href="#top">About</a><a href="#download">Download</a><a href="#faq">FAQ</a><a href="#privacy">Privacy policy</a><a href="mailto:hello@streetsmart.app">Contact</a></div><p>© 2026 StreetSmart. Made for better roads.</p></footer>
  </div></main>;
}
