import '../../css/AboutComponent.css'
import carrer from '../../assets/Images/carrer.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import memberDetials from '../ProductJson/product.json'
import { useInView } from 'react-intersection-observer';

const AboutComponent = () => {
    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, [])
    const { ref: imgText1, inView: imgText1View } = useInView({
        triggerOnce: false,  // Animation triggers only once
        threshold: 0.5      // Trigger when 10% of the element is visible
    });
    const { ref: imgText2, inView: imgText2View } = useInView({
        triggerOnce: false,  // Animation triggers only once
        threshold: 0.5      // Trigger when 10% of the element is visible
    });
    const { ref: mainText1, inView: mainText1View } = useInView({
        triggerOnce: false,  // Animation triggers only once
        threshold: 0.3     // Trigger when 10% of the element is visible
    });
    const { ref: mainText2, inView: mainText2View } = useInView({
        triggerOnce: false,  // Animation triggers only once
        threshold: 0.3     // Trigger when 10% of the element is visible
    });
    const { ref: mainText3, inView: mainText3View } = useInView({
        triggerOnce: false,  // Animation triggers only once
        threshold: 0.3     // Trigger when 10% of the element is visible
    });

    return (
        <>
            <div className="about-page">
                <div className='image-container-about w-100'>
                    <img className='main-image' src={carrer} alt="" />
                    <div className={`slide-in-top img-text-about mb-0 ${imgText1View ? 'visible' : ''}`} ref={imgText1}>
                        <h4>
                            <span className='text-one' >Passionate</span> <br /><span className='text-two'>and sustainable</span>
                        </h4>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <div className='content-container-about'>
                            <div className={`slide-in-left text-one ${mainText1View ? 'visible' : ''}`} ref={mainText1}>
                                "Empowering the future with innovative solutions, our passion drives us to transform challenges into breakthroughs in the ever-evolving tech landscape."
                            </div>
                            <div className={`slide-in-right text-two ${mainText2View ? 'visible' : ''}`} ref={mainText2}>
                                Our work culture values collaboration, innovation, and continuous learning. We foster an inclusive environment where diverse perspectives thrive. Prioritizing work-life balance, we ensure personal and professional growth. Celebrating achievements and learning from challenges, we empower individuals to take initiative and contribute meaningfully to our shared goals.
                            </div>
                            <div className='secondary-image-container'>
                                <img className='secondary-image' src="https://officebanao.com/wp-content/uploads/2023/12/2150906110-1024x675.jpg" alt="" />
                                <div className={`slide-in-top secondary-text-about mb-0 ${imgText2View ? 'visible' : ''}`} ref={imgText2}>
                                    <h4>
                                        <span className='secondary-text-one'>Connecting ideas through digital</span> <br /><span className='secondary-text-two'> innovation</span>
                                    </h4>
                                </div>
                            </div>
                            <div>
                                <div className='mt-5 teams-container'>
                                    <p
                                        className='teams-text-one mb-0' > Our team</p>
                                    <h4 className={`slide-in-bottom teams-text-two mb-0 ${mainText3View ? 'visible' : ''}`} ref={mainText3}>Leadership team</h4>
                                    <p className='mt-3 teams-text-three'>We're building the future of software development.</p>
                                </div>
                                <div className='teams-wrapper d-flex'>
                                    {memberDetials.teamMembers.map((item, index) => (
                                        <div className='mt-3  d-flex justify-content-center'>
                                            <div className='teams-profile d-flex flex-column justify-content-center align-items-center'>
                                                <div className='profile-content-one '>
                                                    <img src={item.img} alt="" />
                                                </div>
                                                <div className='text-center team-container-content'>
                                                    <p className='mt-2 mb-0 team-name'>{item.name}</p>
                                                    <p className='mb-1 team-desgination'>{item.designation}</p>
                                                    <p className='team-project mb-2'>{item.skill}</p>
                                                    <p className='team-project mb-2'>{item.projects}</p>
                                                    <div className='icons-container d-flex justify-content-center'>
                                                        <FacebookIcon />
                                                        <XIcon />
                                                        <LinkedInIcon />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div >

        </>
    )
}
export default AboutComponent;