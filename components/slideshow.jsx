import style from '../styles/slideshow.module.scss'
import {Slide} from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css';
import Link from 'next/link';
const buttonStyle = {
    width: "50px",
    height:"50px",
    background: 'none',
    border: '0px'
};


const properties = {
    prevArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/> </svg></button>,
    nextArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/> </svg></button>
}
const Example = () => {
    const images = [
        "https://i.ibb.co/xfkP6nm/118881432-1287783021561580-7285460819354615494-n.jpg",
        "https://i.ibb.co/1X6dq5P/315289406-190829933515267-5721301070432097767-n.jpg",
        "https://i.ibb.co/mvTLL3T/309863254-196979712722037-5212740071344669044-n.jpg",
    ];

    return (
        <div className={style.main}>
            <Slide className={style.slide} {...properties}>
                <div className={style.eachslideeffect}>
                    <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                        <div className={style.card}>
                            <p className={style.title}>Interact club de sousse</p>
                            <div className={style.para}>
                                <p>Un club pas comme les autres !</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.eachslideeffect}>
                    <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                        <div className={style.card}>
                            <p className={style.title}>Notre Devise</p>
                            <div className={style.para}>
                                <p>Servir D'abord !</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.eachslideeffect}>
                    <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                        <div className={style.card}>
                            <p className={style.title}>Narach chnekteb</p>
                            <div className={style.para}>
                                <p>Walah la naref</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>
        </div>
    );
};

export default Example;