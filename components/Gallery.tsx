import { FC, useState } from "react";
import Image from "next/image";
import styles from "../styles/Gallery.module.scss";

type galleryProps = {
    slidesData: string[];
  };

const Gallery: FC<galleryProps> = ({ slidesData }) => {
    const [activeSlide, setActiveSlide] = useState('');
    const [isModal, setIsModal] = useState(false);
    const showModal = (data: string) => {
      setActiveSlide(data);
      setIsModal(true);
    }

  return (
    <div className={styles.gallery}>
        {slidesData.map((data, index) => <div key={index} className={styles.image}>
            <Image src={data} width="312.5px" height="160px" alt='thumbnail' onClick={() => showModal(data)}/>
        </div> )}
        {isModal && <>
          <div className={styles.shadow} />
          <div className={styles.modal}>
          <div className={styles.close_button} onClick={() => setIsModal(false)}>X</div>
          <div className={styles.image_full}>
            <Image src={activeSlide} width="1250px" height="640px" layout="responsive" alt='screen from project' />
          </div>
             </div>
        </>}
    </div>
  );
};

export default Gallery;
