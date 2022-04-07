import {useState} from 'react'
import { feedbacks } from '../../util/data'
import Slider from 'react-slick'
import MagicSliderDots from 'react-magic-slider-dots';

import styles from './styles/left-fixes.module.scss'

export default function LeftFixes() {

    const [sliderRef, setSliderRef] = useState(null)

    const sliderSettings = {
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true,
        appendDots: dots => {
            return <MagicSliderDots dots={dots} numDotsToShow={3} dotWidth={40} />;
        },
    };

  return (
    <div className={styles.left}>
        <svg id={styles.svg1} width="79" height="96" viewBox="0 0 79 96" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.1" d="M79 96L-46 -4.63768L57.1599 -32L79 96Z" fill="url(#paint0_linear_1_134)"/>
            <defs>
            <linearGradient id="paint0_linear_1_134" x1="-19.9777" y1="2.7826" x2="78.8351" y2="87.381" gradientUnits="userSpaceOnUse">
            <stop stopColor="white"/>
            <stop offset="1" stopColor="white" stopOpacity="0"/>
            </linearGradient>
            </defs>
        </svg>

        <svg id={styles.svg2} width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle opacity="0.1" cx="39" cy="39" r="39" fill="white"/>
        </svg>

        <div className={styles.wrapped}>
            <Slider ref={setSliderRef} {...sliderSettings}>
                {feedbacks.map((feedback) => (
                    <div key={feedback.name} className={styles.text}>
                        <h3>{feedback.name}</h3>
                        <small>{feedback.job}</small>
                        <p>
                            {feedback.content}
                        </p>
                    </div>
                ))}
            </Slider>    
        </div>
    </div>
  )
}
