export default function Home() {
  return (
    <main>
      <header>
  <nav className="navigation">
    <div className="logo">A.N.</div>

    <div className="nav-links">
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#works">Works</a>
      <a href="#profile">Profile</a>
      <a href="#contact">Contact</a>
    </div>
  </nav>
</header>

<section className="hero">
  <div className="hero-content">
    <p className="hero-label">PORTFOLIO</p>
    <h1>A.N.</h1>
    <p className="hero-description">
      Office / Web / SNS
    </p>
    <a href="#works" className="hero-button">
      View my works
    </a>
  </div>
</section>

      <section id="about">
        <p className="section-label">ABOUT</p>
        <h2>多方面からのアプローチで"最先端"の有効活用を。</h2>
        <p>
          大学で専門的に学んだことを基礎として、実務経験を活かしたさらなる挑戦を続けます。<br />
          多方面からのアプローチと最先端へのアップデートを意識し、丁寧な業務を心がけております。
        </p>
      </section>

      <section id="skills">
        <p className="section-label">SKILLS</p>
        <h2>使用できるツール・スキル</h2>

        <div className="skill-list">
          <div className="skill-card">
            <h3>Microsoft Office</h3>
            <p>
              Excel / Word / PowerPoint 等<br />
              ※マクロ対応可
            </p>
          </div>

          <div className="skill-card">
            <h3>Google Workspace</h3>
            <p>Google スプレッドシート / Google ドキュメント / Google Drive / Google　スライド</p>
          </div>

           <div className="skill-card">
            <h3>Programing</h3>
            <p>Java / JavaScript / Python / C++ / VBA 等</p>
          </div>

          <div className="skill-card">
            <h3>Web</h3>
            <p>HTML / CSS / Next.js / VS Code 等</p>
          </div>

          <div className="skill-card">
            <h3>動画編集・画像編集 等</h3>
            <p>
              Adobe Premiere Pro / Adobe Media Encoder / Adobe Photoshop / Adobe Illustrator<br />
              Final Cut Pro / Logic Pro / CupCut 等</p>
          </div>

          <div className="skill-card">
            <h3>SNS等</h3>
            <p>TikTok / Instagram / X（旧Twitter） / YouTube / LINE / 公式LINE / Slack</p>
          </div>

          <div className="skill-card">
            <h3>AI活用</h3>
            <p>ChatGPT / Gemini / Siri / SUNO AI 等</p>
          </div>

         
        </div>
      </section>

      <section id="works">
        <p className="section-label">WORKS</p>
        <h2>制作例・業務実績</h2>

        <div className="work-list">
          <div className="work-card">
            <h3>サイト</h3>
            <p>
              本サイトをポートフォリオとして制作しております。随時更新中です。<br />
              使用環境：HTML,CSS,Next.js,VS Code,Mac OS 等
            </p>
          </div>
          <div className="work-card">
            <h3>アプリ制作</h3>
            <p>
              ※Javaなどを使用した制作物を掲載予定です。
            </p>
          </div>
          <div className="work-card">
            <h3>データ管理表</h3>
            <p>
              ※表計算ソフトとマクロを使用した制作物を掲載予定です。
            </p>
          </div>

          <div className="work-card">
            <h3>マニュアル（作成例）</h3>
            <p>
               <a
               href="https://docs.google.com/presentation/d/1fpo5UCiVAyW-GsNfDB8trqW5yS9oYv6cZsn9lJJFROw/edit?usp=sharing"
               target="_blank"
               rel="noopener noreferrer"
               className="text-link"
               >
              ●決算事確認事項マニュアル
               </a><br />
               使用ツール：Google ドキュメント<br />

            </p>
          </div>

          <div className="work-card">
            <h3>動画制作</h3>
            <p>
              ※動画編集ソフトを使用した動画を掲載予定です。
            </p>
          </div>
        </div>
      </section>

      <section id="profile">
        <p className="section-label">PROFILE</p>
        <p>
          2020年4月〜2024年3月<br />
          　大学にて情報学を専攻　AIの開発や活用について学習<br />

          2024年11月〜2025年11月<br />
          　大手テレビ局本社にて　報道フロアを含む編集室で編集補佐として勤務<br />
          　長尺番組や海外ロケ番組、ドローンやGoProなどの特殊機材による素材についても対応<br />
          　地上波だけでなく、サブスクやYouTube用も制作<br />

          2022年10月〜現在<br />
          　個別指導塾にて塾講師を開始<br />
          　5教科全てを担当（現代文・古文・漢文・英語・数学IA・数学IIB・数学IIIC・物理・化学・生物・世界史・日本史・地理）<br />
          　小学生〜高校生の受験対策やテスト対策を含む指導を行う<br />
          　現時点で担当生徒は全員第一志望に合格　得点は最大20点増加<br />

          2024年6月〜現在<br />
          　ハーレーダビットソンやカワサキバイクなどの正規二輪ディーラーを運営する企業の総務部にて<br />
          　経理・出退勤管理・有給管理・書類作成・コーポレートサイト作成・データ収集など多岐にわたって担当<br />
　　　　　　
        </p>
      </section>

      <footer>
        <p>© A.N. Portfolio</p>
      </footer>
    </main>
  );
}

