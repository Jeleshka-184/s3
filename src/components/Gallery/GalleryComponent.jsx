import PropTypes from "prop-types";
import styles from "./GalleryComponent.module.css";

function GalleryComponent({ images }) {
  return (
    <>
      <div className={`${styles.galleryContainer}`}>
        <p className={`${styles.galleryTitle}`}>
          Explore the brands joining Pattern Brands, the sales process & the
          founders behind them.👇🏽
        </p>
        <div className="container">
          <div className={`row ${styles.galleryRow}`}>
            {images.map((image, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className={`card ${styles.imageCard}`} style={{ border: "none" }}>
                  <div className={`${styles.imageContainer}`}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className={`${styles.squareImage}`}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className={`${styles.imageTitle}`}>
                      {image.title}
                    </h5>
                    <p className={`${styles.blogTitle}`}>
                      {image.blogTitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default GalleryComponent;

GalleryComponent.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};
