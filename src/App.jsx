import { useEffect, useRef, useState } from "react";
import {
  profile,
  stack,
  stackCategories,
  nowPools,
  commitStubs,
  experience,
  projects,
  files,
  hobbies,
  keyboardBuilds,
} from "./portfolioData.js";

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

function relTime(iso) {
  const secs = Math.round((Date.now() - new Date(iso).getTime()) / 1000);
  if (secs < 60) return secs + "s ago";
  const mins = Math.round(secs / 60);
  if (mins < 60) return mins + "m ago";
  const hrs = Math.round(mins / 60);
  if (hrs < 24) return hrs + "h ago";
  return Math.round(hrs / 24) + "d ago";
}

const CACHE_KEY = "now-widget-gh";
const CACHE_TTL_MS = 10 * 60 * 1000;

const FORMATION_433 = [
  { role: "GK", x: 7, y: 50 },
  { role: "LB", x: 25, y: 15 },
  { role: "CB", x: 25, y: 38 },
  { role: "CB", x: 25, y: 62 },
  { role: "RB", x: 25, y: 85 },
  { role: "DM", x: 43, y: 50 },
  { role: "CM", x: 53, y: 29 },
  { role: "CM", x: 53, y: 71, you: true },
  { role: "LW", x: 79, y: 16 },
  { role: "ST", x: 82, y: 50 },
  { role: "RW", x: 79, y: 84 },
];

// Static syntax-highlighted Go snippet for the intro terminal. Marked-up as HTML
// because rebuilding it with per-token JSX would be a wall of span elements.
const GO_CODE_HTML = `<span class="k">package</span> <span class="t">main</span>

<span class="k">import</span> <span class="p">(</span>
    <span class="s">"fmt"</span>
    <span class="s">"os"</span>
    <span class="s">"strings"</span>
<span class="p">)</span>

<span class="c">// Download this source from Files and compile it yourself,</span>
<span class="c">// or feed it to your favorite AI with your requirements.</span>

<span class="k">type</span> <span class="t">Engineer</span> <span class="k">struct</span> <span class="p">{</span>
    <span class="id">Name</span>   <span class="t">string</span>
    <span class="id">Role</span>   <span class="t">string</span>
    <span class="id">Team</span>   <span class="t">string</span>
    <span class="id">Focus</span>  <span class="p">[]</span><span class="t">string</span>
    <span class="id">Ships</span>  <span class="t">string</span>
<span class="p">}</span>

<span class="k">func</span> <span class="p">(</span>e <span class="t">Engineer</span><span class="p">)</span> <span class="t">Opportunities</span><span class="p">(</span>pitch <span class="p">[]</span><span class="t">string</span><span class="p">)</span> <span class="t">bool</span> <span class="p">{</span>
    <span class="c">// True if any pitch keyword touches e.Focus.</span>
    <span class="k">for</span> _<span class="p">,</span> p <span class="p">:=</span> <span class="k">range</span> pitch <span class="p">{</span>
        <span class="k">for</span> _<span class="p">,</span> f <span class="p">:=</span> <span class="k">range</span> e<span class="p">.</span>Focus <span class="p">{</span>
            <span class="k">if</span> <span class="t">strings</span><span class="p">.</span><span class="t">Contains</span><span class="p">(</span>f<span class="p">,</span> p<span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="k">true</span> <span class="p">}</span>
        <span class="p">}</span>
    <span class="p">}</span>
    <span class="k">return</span> <span class="k">false</span>
<span class="p">}</span>

<span class="k">func</span> <span class="t">main</span><span class="p">()</span> <span class="p">{</span>
    <span class="c">// A software engineer focused on backend</span>
    <span class="c">// systems, infra automation, and dev tools.</span>
    tu <span class="p">:=</span> <span class="t">Engineer</span><span class="p">{</span>
        Name<span class="p">:</span>  <span class="s">"Tu Vu"</span><span class="p">,</span>
        Role<span class="p">:</span>  <span class="s">"Software Engineer"</span><span class="p">,</span>
        Team<span class="p">:</span>  <span class="s">"Puppet by Perforce"</span><span class="p">,</span>
        Focus<span class="p">:</span> <span class="p">[]</span><span class="t">string</span><span class="p">{</span>
            <span class="s">"infrastructure automation"</span><span class="p">,</span>
            <span class="s">"developer tools"</span><span class="p">,</span>
            <span class="s">"backend systems"</span><span class="p">,</span>
        <span class="p">},</span>
        Ships<span class="p">:</span> <span class="s">"security compliance across "</span> <span class="p">+</span>
               <span class="s">"Linux + Windows fleets"</span><span class="p">,</span>
    <span class="p">}</span>

    requirements <span class="p">:=</span> <span class="t">os</span><span class="p">.</span><span class="t">Args</span><span class="p">[</span><span class="n">1</span><span class="p">:]</span>
    <span class="k">if</span> <span class="t">len</span><span class="p">(</span>requirements<span class="p">)</span> <span class="p">==</span> <span class="n">0</span> <span class="p">{</span>
        requirements <span class="p">=</span> <span class="p">[]</span><span class="t">string</span><span class="p">{</span><span class="s">"backend"</span><span class="p">,</span> <span class="s">"automation"</span><span class="p">}</span>
    <span class="p">}</span>

    <span class="k">if</span> tu<span class="p">.</span><span class="t">Opportunities</span><span class="p">(</span>requirements<span class="p">)</span> <span class="p">{</span>
        <span class="t">fmt</span><span class="p">.</span><span class="t">Println</span><span class="p">(</span><span class="s">"→ Found a match. Feel free to reach out!"</span><span class="p">)</span>
        <span class="t">fmt</span><span class="p">.</span><span class="t">Println</span><span class="p">(</span><span class="s">"  tuvu2607@gmail.com"</span><span class="p">)</span>
    <span class="p">}</span> <span class="k">else</span> <span class="p">{</span>
        <span class="t">fmt</span><span class="p">.</span><span class="t">Println</span><span class="p">(</span><span class="s">"→ no match yet, but thanks for stopping by"</span><span class="p">)</span>
    <span class="p">}</span>
<span class="p">}</span><span class="caret" aria-hidden="true"></span>`;

function App() {
  const [clock, setClock] = useState({ time: "—", date: "—", zone: "PT" });
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setClock({
        time: new Intl.DateTimeFormat("en-US", {
          hour: "numeric", minute: "2-digit", hour12: true,
          timeZone: profile.timeZone,
        }).format(now),
        date: new Intl.DateTimeFormat("en-US", {
          month: "short", day: "numeric",
          timeZone: profile.timeZone,
        }).format(now),
        zone: new Intl.DateTimeFormat("en-US", {
          timeZone: profile.timeZone,
          timeZoneName: "short",
        }).formatToParts(now).find(({ type }) => type === "timeZoneName")?.value || "PT",
      });
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: light)").matches) {
      return "light";
    }
    return "dark";
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const [activeTab, setActiveTab] = useState("work");

  const [currentlyText] = useState(() => pick(nowPools.currently));
  const [fueledByText] = useState(() => pick(nowPools.fueled_by));
  const [hotTakeText]  = useState(() => pick(nowPools.hot_take));

  const [ghData, setGhData] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    loadGhData(controller.signal, setGhData);
    return () => controller.abort();
  }, []);

  return (
    <div className="page">
      <div className="topbar" role="banner">
        <div className="brand">
          <div className="avatar" aria-hidden="true">{profile.initials}</div>
          <div className="brand-text">
            Hi, I'm {profile.name.split(" ")[0]} <span className="wave" aria-hidden="true">👋</span>
          </div>
        </div>
        <div className="toprail">
          <span className="pill status-pill" title="Current status">
            <span className="dot"></span>
            {profile.status}
          </span>
          <span className="pill clock-pill" aria-label="Local time">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <circle cx="12" cy="12" r="9"/>
              <path d="M12 7v5l3 2"/>
            </svg>
            <span>{clock.time}</span>
            <span style={{ color: "var(--muted)" }}>{clock.date}</span>
          </span>
          <button
            className="toggle"
            onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
            aria-label="Toggle theme"
          >
            <span className="toggle-track"><span className="toggle-thumb"></span></span>
            <span>{theme === "light" ? "Light" : "Dark"}</span>
          </button>
        </div>
      </div>

      <div className="grid">
        <section className="card w-code" aria-label="Introduction">
          <div className="term-bar">
            <div className="traffic" aria-hidden="true">
              <span className="r"></span><span className="y"></span><span className="g"></span>
            </div>
            <div className="term-tab"><span className="fname">tu.go</span></div>
            <div className="term-path">~/portfolio/main</div>
          </div>
          <pre className="code" aria-label="About Tu in Go" dangerouslySetInnerHTML={{ __html: GO_CODE_HTML }} />
        </section>

        <section className="card w-stack" aria-label="Tech stack">
          <div className="card-header">
            <span className="eyebrow"><span className="led"></span>Stack</span>
            <span className="eyebrow" style={{ letterSpacing: "0.06em" }}>{stack.length} tools</span>
          </div>
          <div className="chips">
            {stack.map((s) => (
              <span key={s.label} className={`chip -${s.tone}`}>{s.label}</span>
            ))}
          </div>
          <div className="stack-cats" aria-hidden="true">
            {stackCategories.map((c) => (
              <span key={c.label} className={`l-${c.tone}`}>{c.label}</span>
            ))}
          </div>
        </section>

        <section className="card w-now" aria-label="Current status">
          <div className="card-header">
            <span className="eyebrow"><span className="led ok"></span>Current Status</span>
            <span className="eyebrow" style={{ letterSpacing: "0.06em" }}>Live</span>
          </div>
          <div className="sql-widget">
            <div className="sql-prompt">
              <span className="sql-user">tu</span>=# <span className="sql-kw">SELECT</span> * <span className="sql-kw">FROM</span> <span className="sql-tbl">current_status</span>;
            </div>
            <table className="sql-table">
              <tbody>
                <tr>
                  <th>latest_commit</th>
                  <td className="sql-bar">│</td>
                  <td className="sql-val">
                    {ghData ? (
                      <>
                        <span className="amber">{ghData.repo}</span>
                        {" — " + ghData.msg + " · "}
                        <span className="dim">{ghData.when}</span>
                      </>
                    ) : "…"}
                  </td>
                </tr>
                <tr>
                  <th>currently</th>
                  <td className="sql-bar">│</td>
                  <td className="sql-val">{currentlyText}</td>
                </tr>
                <tr>
                  <th>fueled_by</th>
                  <td className="sql-bar">│</td>
                  <td className="sql-val">{fueledByText}</td>
                </tr>
                <tr>
                  <th>hot_take</th>
                  <td className="sql-bar">│</td>
                  <td className="sql-val">{hotTakeText}</td>
                </tr>
              </tbody>
            </table>
            <div className="sql-count">(1 row)</div>
          </div>
        </section>

        <section className="card w-map" aria-label="Location">
          <div className="card-header">
            <span className="eyebrow"><span className="led"></span>Where</span>
            <span className="eyebrow" style={{ letterSpacing: "0.06em" }}>{clock.zone}</span>
          </div>
          <div className="map">
            <div className="map-graphic">
              <UsDotMap theme={theme} />
              <span
                className="map-beacon"
                tabIndex="0"
                aria-describedby="portland-map-tooltip"
              >
                <span className="beacon-core"></span>
                <span className="beacon-label" id="portland-map-tooltip" role="tooltip">
                  {clock.time} - Portland, OR
                </span>
              </span>
            </div>
            <div className="map-caption">
              <a
                className="map-credit"
                href="https://commons.wikimedia.org/wiki/File:Map_of_USA_with_state_names_2.svg"
                target="_blank"
                rel="noreferrer"
              >
                Map · CC BY-SA 3.0
              </a>
            </div>
          </div>
        </section>

        <section className="card w-exp" aria-label="Experience">
          <div className="card-header">
            <span className="eyebrow"><span className="led"></span>Experience</span>
            <div className="tabs" role="tablist">
              <button
                className={`tab ${activeTab === "work" ? "is-on" : ""}`}
                role="tab"
                aria-selected={activeTab === "work"}
                onClick={() => setActiveTab("work")}
              >
                Work
              </button>
              <button
                className={`tab ${activeTab === "edu" ? "is-on" : ""}`}
                role="tab"
                aria-selected={activeTab === "edu"}
                onClick={() => setActiveTab("edu")}
              >
                Education
              </button>
            </div>
          </div>
          <GitLog key={activeTab} entries={activeTab === "work" ? experience.work : experience.edu} />
        </section>

        <section className="card w-projects" aria-label="Selected projects">
          <div className="card-header">
            <span className="eyebrow"><span className="led"></span>Projects</span>
            <a className="btn" href={profile.githubUrl} aria-label="View all projects on GitHub">
              All on GitHub
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M13 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
          <div className="proj-grid">
            {projects.map((p) => (
              <article className="proj" key={p.title}>
                <div className="proj-head">
                  <div className="proj-title">{p.title}</div>
                  <span className="proj-status" title={p.active ? "Active" : "Archived"}>
                    <span className={`led ${p.active ? "" : "-archived"}`}></span>
                  </span>
                </div>
                <div className="proj-desc">{p.desc}</div>
                <div className="proj-tags">
                  {p.tags.map((t) => (
                    <span key={t.label} className={`chip -${t.tone}`}>{t.label}</span>
                  ))}
                </div>
                <div className="proj-foot">
                  <div className={`proj-lang -${p.lang.swatch}`}>
                    <span className="swatch"></span>{p.lang.label}
                  </div>
                  <a
                    className={p.liveApp ? "-live" : undefined}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {p.liveApp && <span className="live-dot" aria-hidden="true"></span>}
                    {p.cta || "View"} {p.liveApp ? "↗" : "→"}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="card w-files" aria-label="Files">
          <div className="card-header">
            <span className="eyebrow"><span className="led"></span>Files</span>
          </div>
          <div className="files-grid">
            {files.map((f) => (
              <a
                key={f.name}
                className="file"
                href={f.url}
                download={f.name}
                aria-label={`Download ${f.name}`}
                title={`Download ${f.name}`}
              >
                <div className={`file-icon -${f.tone}`}>{f.kind}</div>
                <div className="file-name">{f.name}</div>
              </a>
            ))}
          </div>
        </section>

        <section className="card w-beyond" aria-label="Hobbies and Passions">
          <div className="card-header">
            <span className="eyebrow"><span className="led"></span>Hobbies and Passions</span>
          </div>
          <div className="passion-layout">
            <article className="soccer-feature">
              <div className="soccer-copy">
                <div className="b-head">
                  <div className="b-icon" aria-hidden="true"><SoccerIcon /></div>
                  <div>
                    <div className="b-label">matchday.log</div>
                    <div className="b-title">{hobbies[0].title}</div>
                  </div>
                </div>
                <p>{hobbies[0].detail}</p>
              </div>

              <div className="soccer-pitch" role="img" aria-label="A 4-3-3 soccer formation with Tu highlighted at center midfield">
                <span className="formation-name" aria-hidden="true">4–3–3</span>
                <span className="pitch-halfway" aria-hidden="true"></span>
                <span className="pitch-circle" aria-hidden="true"></span>
                <span className="pitch-box -left" aria-hidden="true"></span>
                <span className="pitch-box -right" aria-hidden="true"></span>
                <span className="pitch-arc -left" aria-hidden="true"></span>
                <span className="pitch-arc -right" aria-hidden="true"></span>
                <span className="pitch-spot -left" aria-hidden="true"></span>
                <span className="pitch-spot -right" aria-hidden="true"></span>
                {FORMATION_433.map((player, index) => (
                  <span
                    className={`formation-player${player.you ? " -you" : ""}`}
                    style={{ "--player-x": `${player.x}%`, "--player-y": `${player.y}%` }}
                    aria-hidden="true"
                    key={`${player.role}-${index}`}
                  >
                    {player.you && <span>{profile.name}</span>}
                  </span>
                ))}
              </div>

              <dl className="soccer-stats">
                <div><dt>position</dt><dd>holding midfielder while being mid myself</dd></div>
                <div><dt>playstyle</dt><dd>sideway and backward passes with occasional terrible long-ball</dd></div>
                <div><dt>stamina</dt><dd>good for 65 minutes</dd></div>
                <div><dt>finishing</dt><dd>like Pelé at 75 years old</dd></div>
              </dl>
            </article>

            <div className="keyboard-collection">
              <div className="keyboard-collection-header">
                <div>
                  <div className="b-label">{hobbies[1].label}</div>
                  <div className="b-title">Mechanical keyboards</div>
                </div>
                <KeyboardIcon />
              </div>
              <div className="keyboard-gallery">
                {keyboardBuilds.map((keyboard) => (
                  <article className="keyboard-card" key={keyboard.title}>
                    <img src={keyboard.imageUrl} alt={`${keyboard.title} mechanical keyboard`} loading="lazy" />
                    <div className="keyboard-card-copy">
                      <div className="keyboard-card-title">{keyboard.title}</div>
                      <p>{keyboard.detail}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="card w-contact" aria-label="Contact">
          <div className="contact-msg">
            <strong>Let's talk.</strong> Opportunities, side projects, or a good keyboard rec.
          </div>
          <div className="contact-actions">
            <a className="btn -primary" href={`mailto:${profile.email}`}>
              <MailIcon />
              {profile.email}
            </a>
            <a
              className="btn"
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub (opens in a new tab)"
            >
              <GithubIcon /> GitHub
            </a>
            <a
              className="btn"
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn (opens in a new tab)"
            >
              <LinkedinIcon /> LinkedIn
            </a>
          </div>
        </section>
      </div>

      <div className="footer-sig">© {new Date().getFullYear()} {profile.name}. Built with React & Vite.</div>
    </div>
  );
}

function GitLog({ entries }) {
  const [expandedHash, setExpandedHash] = useState(null);

  return (
    <ol className="gitlog">
      {entries.map((e) => {
        const hasDetails = Boolean(e.details?.length);
        const isExpanded = expandedHash === e.hash;
        const detailsId = `experience-${e.hash}`;

        return (
          <li key={e.hash}>
            <div className="gitlog-line">
              <span className="marker">*</span>
              {hasDetails ? (
                <button
                  className="hash hash-button"
                  type="button"
                  aria-expanded={isExpanded}
                  aria-controls={detailsId}
                  onClick={() => setExpandedHash(isExpanded ? null : e.hash)}
                >
                  {e.hash}<span className="hash-caret" aria-hidden="true">▸</span>
                </button>
              ) : (
                <span className="hash">{e.hash}</span>
              )}
              {e.head && <> <span className="head">{e.head}</span></>}
              {e.role && <> <span className="role">{e.role}</span></>}
              {e.msg && <> <span className="msg">{e.msg}</span></>}
              <span className="where">{e.where}</span>
              <span className="date">{e.date}</span>
            </div>
            {isExpanded ? (
              <div className="experience-details" id={detailsId}>
                <div className="details-label">
                  <span>tu@puppet:~$</span> git log --oneline responsibilities
                </div>
                <ul>
                  {e.details.map((detail, index) => (
                    <li key={detail}>
                      <span className="detail-marker" aria-hidden="true">*</span>
                      <span className="detail-hash">{makeDetailHash(e.hash, detail, index)}</span>
                      <span className="detail-message">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}

function makeDetailHash(parentHash, detail, index) {
  let value = 2166136261;
  const source = `${parentHash}:${index}:${detail}`;
  for (let i = 0; i < source.length; i += 1) {
    value ^= source.charCodeAt(i);
    value = Math.imul(value, 16777619);
  }
  return (value >>> 0).toString(16).padStart(8, "0").slice(0, 7);
}

async function loadGhData(signal, setGhData) {
  const now = Date.now();

  // Fresh cache or active cooldown → skip network.
  const cached = readCache();
  if (cached && (now - cached.savedAt < CACHE_TTL_MS || now < (cached.blockedUntil || 0))) {
    setGhData({ repo: cached.data.repo, msg: cached.data.msg, when: relTime(cached.data.dateISO) });
    return;
  }

  try {
    const reposRes = await fetch(
      `https://api.github.com/users/${profile.githubUser}/repos?sort=pushed&per_page=1`,
      { signal }
    );
    if (reposRes.status === 403 || reposRes.status === 429) throw { rateLimited: true, res: reposRes };
    if (!reposRes.ok) throw new Error("repos " + reposRes.status);
    const repos = await reposRes.json();
    if (!repos.length) throw new Error("no repos");
    const top = repos[0];

    const commitsRes = await fetch(
      `https://api.github.com/repos/${top.full_name}/commits?per_page=1`,
      { signal }
    );
    if (commitsRes.status === 403 || commitsRes.status === 429) throw { rateLimited: true, res: commitsRes };
    if (!commitsRes.ok) throw new Error("commits " + commitsRes.status);
    const commits = await commitsRes.json();
    if (!commits.length) throw new Error("no commits");
    const c = commits[0];

    const data = { repo: top.name, msg: c.commit.message.split("\n")[0], dateISO: c.commit.author.date };
    writeCache(data, 0);
    setGhData({ repo: data.repo, msg: data.msg, when: relTime(data.dateISO) });
  } catch (err) {
    if (err && err.name === "AbortError") return;

    // Rate-limited: honor the reset header, keep last known data on screen.
    if (err && err.rateLimited && cached) {
      const reset = err.res.headers.get("X-RateLimit-Reset");
      const blockedUntil = reset ? parseInt(reset, 10) * 1000 : Date.now() + 60 * 60 * 1000;
      writeCache(cached.data, blockedUntil);
      setGhData({ repo: cached.data.repo, msg: cached.data.msg, when: relTime(cached.data.dateISO) });
      return;
    }
    if (cached) {
      setGhData({ repo: cached.data.repo, msg: cached.data.msg, when: relTime(cached.data.dateISO) });
      return;
    }
    const stub = pick(commitStubs);
    setGhData({ repo: stub.repo, msg: stub.msg, when: stub.when });
  }
}

function readCache() {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

function writeCache(data, blockedUntil) {
  try {
    localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({ data, savedAt: Date.now(), blockedUntil: blockedUntil || 0 })
    );
  } catch (e) {
    /* localStorage disabled or full — silently skip */
  }
}

function UsDotMap({ theme }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const source = new Image();
    let disposed = false;
    let resizeObserver;

    const draw = () => {
      if (disposed || !source.complete || !source.naturalWidth) return;

      const bounds = canvas.getBoundingClientRect();
      const width = Math.max(1, Math.round(bounds.width));
      const height = Math.max(1, Math.round(bounds.height));
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);

      const sample = document.createElement("canvas");
      sample.width = source.naturalWidth;
      sample.height = source.naturalHeight;
      const sampleContext = sample.getContext("2d", { willReadFrequently: true });
      sampleContext.drawImage(source, 0, 0);
      const pixels = sampleContext.getImageData(0, 0, sample.width, sample.height).data;

      const hasStatePixel = (x, y) => {
        const centerX = Math.floor((x / width) * sample.width);
        const centerY = Math.floor((y / height) * sample.height);

        const offsets = [-2, 0, 2];
        return offsets.some((offsetY) => offsets.some((offsetX) => {
          const sampleX = Math.min(sample.width - 1, Math.max(0, centerX + offsetX));
          const sampleY = Math.min(sample.height - 1, Math.max(0, centerY + offsetY));
          const index = (sampleY * sample.width + sampleX) * 4;
          return pixels[index + 3] > 32;
        }));
      };

      const context = canvas.getContext("2d");
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      context.clearRect(0, 0, width, height);

      const rootStyle = getComputedStyle(document.documentElement);
      context.fillStyle = rootStyle.getPropertyValue("--muted").trim();
      context.globalAlpha = theme === "dark" ? 0.42 : 0.34;

      const spacing = width < 360 ? 6 : 6.5;
      const radius = width < 360 ? 1 : 1.15;
      for (let y = spacing / 2; y < height; y += spacing) {
        for (let x = spacing / 2; x < width; x += spacing) {
          if (!hasStatePixel(x, y)) continue;
          context.beginPath();
          context.arc(x, y, radius, 0, Math.PI * 2);
          context.fill();
        }
      }
    };

    source.onload = draw;
    source.src = `${import.meta.env.BASE_URL}us-mainland-mask.svg`;
    resizeObserver = new ResizeObserver(draw);
    resizeObserver.observe(canvas);

    return () => {
      disposed = true;
      resizeObserver?.disconnect();
      source.onload = null;
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="us-dot-map"
      role="img"
      aria-label="Dotted map of the United States with Portland highlighted"
    />
  );
}

function SoccerIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9"/>
      <path d="M12 3v6l5 3-2 6-6-1-3-5 3-5z"/>
    </svg>
  );
}

function KeyboardIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2.5" y="6.5" width="19" height="11" rx="2"/>
      <path d="M6 10h.01M9 10h.01M12 10h.01M15 10h.01M18 10h.01M7 14h10"/>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2"/>
      <path d="m3 7 9 6 9-6"/>
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.7-1.4-1.7-1.1-.8.1-.8.1-.8 1.3.1 1.9 1.3 1.9 1.3 1.1 1.9 3 1.4 3.7 1 .1-.8.4-1.4.8-1.7-2.7-.3-5.5-1.3-5.5-6a4.7 4.7 0 0 1 1.2-3.2c-.1-.3-.6-1.6.1-3.3 0 0 1-.3 3.4 1.2a11.6 11.6 0 0 1 6.1 0C17 4.7 18 5 18 5c.7 1.7.2 3 .1 3.3a4.7 4.7 0 0 1 1.2 3.2c0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.3v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z"/>
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1V21H18.4v-5.35c0-1.28-.02-2.92-1.78-2.92-1.78 0-2.05 1.4-2.05 2.83V21H10z"/>
    </svg>
  );
}

export default App;
