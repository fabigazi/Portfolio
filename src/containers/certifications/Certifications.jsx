import * as React from "react";
import './certifications.css'

function ImageCard({ src, alt }) {
  return (
    <img loading="lazy" src={src} alt={alt} className="cert-image-card" />
  );
}

function Certifications() {
  const imageData = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/81464bb6c5ccc24ad0de5ccd51e8f4767ae5b5b2825e3c7ff6e4e8d19421e0ed?apiKey=c18181df491445f49c3752cb0e8829d9&",
      alt: "Image 1"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/28ab73e91eee524b336ed905835a2ba5ac6bc0869bd8759badd334cec4e07833?apiKey=c18181df491445f49c3752cb0e8829d9&",
      alt: "Image 2"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/81464bb6c5ccc24ad0de5ccd51e8f4767ae5b5b2825e3c7ff6e4e8d19421e0ed?apiKey=c18181df491445f49c3752cb0e8829d9&",
      alt: "Image 3"
    }
  ];

  return (
    <>
      <main className="main-container">
        <section className="cert-image-grid">
          <div className="cert-image-column">
            <ImageCard src={imageData[0].src} alt={imageData[0].alt} />
          </div>
          <div className="image-column-wide">
            <ImageCard src={imageData[1].src} alt={imageData[1].alt} />
          </div>
          <div className="cert-image-column">
            <ImageCard src={imageData[2].src} alt={imageData[2].alt} />
          </div>
        </section>
      </main>
    </>
  );
}

export default Certifications
