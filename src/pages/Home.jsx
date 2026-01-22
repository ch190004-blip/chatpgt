const Home = () => {
  return (
    <section className="page">
      <h2>歡迎來到課程入口</h2>
      <p>
        請從上方導覽列選擇課程，快速切換至「國七 A+」或「國八
        B」。
      </p>
      <div className="page__grid">
        <article className="card">
          <h3>國七 A+</h3>
          <p>適合想要強化基礎概念的同學，涵蓋重點單元與練習。</p>
        </article>
        <article className="card">
          <h3>國八 B</h3>
          <p>聚焦進階題型與學習節奏管理，搭配課後回饋與追蹤。</p>
        </article>
      </div>
    </section>
  );
};

export default Home;
