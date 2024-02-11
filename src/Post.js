import borisImg from './images/boris.jpg'
export default function Post() {
  return (
    //   <div className="post">
    //   <div className="image">
    //     <img src="https://techcrunch.com/wp-content/uploads/2024/02/genesis-gv60-exterior-ksk.jpg"></img>
    //   </div>
    //   <div className="texts">
    //     <h2>Motional loses a backer, another micromobility bankruptcy and a mobility startup unicorn is born</h2>
    //     <p className="info">
    //       <a className="author">author</a>
    //       <time>05-02-2024 7:42</time>
    //     </p>
    //     <p className="summary">  The funding pushed in school district customers in San Francisco, Los Angeles its fleet of vehicles to all EVs by 2027 while continuing to grow its footprint ok.
    //     </p>
    //   </div>
    // </div>
    <div class="post-card">
      <a href="single.html">
        <img src={borisImg} alt="" />
        <div class="post-container">
          <h3 class="post-header">Students take to streets again with 11-point demand</h3>
          <p class="post-excerpt">Demonstrating students from several educational institutions
            of
            the
            capital again took to the streets for safe roads and a few other demands in the
            capital’s Rampura on Friday.
          </p>
          <p class="upload-time">5 mins ago...</p>
        </div>
      </a>
    </div>
  );
}