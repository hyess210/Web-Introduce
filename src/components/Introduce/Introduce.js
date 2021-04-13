import React from 'react';
import './Introduce.scss';

import PROFILE_IMG from 'assets/images/profile_image.jpg';

const Introduce = () => {
    return(
        <div className='Introduce'>
            <div className='Introduce__img'>
                <img src={PROFILE_IMG} alt={PROFILE_IMG} />
            </div>
            <div className='Introduce__content'>
                <div className='Introduce__content-profile'>
                    <div className='Introduce__content-title'>도전하는 개발자 김혜선</div>
                    <div className='Introduce__content-des'>🔧 Web Front-End Developer</div>
                    <div className='Introduce__content-des'>👶 2003.07.30</div>
                    <div className='Introduce__content-des'>🏫  대구 소프트웨어 마이스터 고등학교</div>
                    <div className='Introduce__content-des'>💌 hyess210@gmail.com</div>
                </div>
            </div>
        </div>
    )
}

export default Introduce;