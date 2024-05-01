import * as React from "react";
import './skills.css'
import Button from "../../components/button/Button";

function ImageCard({ src, alt }) {
    return <img className="image-card" src={src} alt={alt} loading="lazy" />;
}

function Skills() {
    const images = [
        {
            src: "https://cdn.builder.io/api/v1/image/assets/TEMP/21b148dd068f73c57ca6a7805d47faadf998126bfdf770612e030d980f545218?apiKey=c18181df491445f49c3752cb0e8829d9&",
            alt: "Image 1",
        },
        {
            src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6e5b6a0277da1927f40df84f1d9e77fd1647868b0c0fc18605ce942747751a8c?apiKey=c18181df491445f49c3752cb0e8829d9&",
            alt: "Main image",
        },
        {
            src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9bc901c75773fab5aef62a0b10efc6ebcab0cd71991d6249aa6948acd987f5a8?apiKey=c18181df491445f49c3752cb0e8829d9&",
            alt: "Image 2",
        },
    ];

    return (
        <div className="skills-container">
            <div className="button-group">
                <Button label={"Languages"} />
            </div>
            <main className="image-grid">
                {images.map((image, index) => (
                    <ImageCard key={index} src={image.src} alt={image.alt} />
                ))}
            </main>
        </div>
    );
}

export default Skills