import {useState} from 'react'
import profile from '../assets/images/photo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import hr from '../assets/images/curve-hr.svg'

export default function Home () {

    const [loaded, setLoaded] = useState(true);

    return (
        <>
        {loaded ?
        <div
            className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white flex flex-col items-center justify-center"
        >Loading...</div>
            :
            null
        }
        <div id="home" className="flex w-full h-screen flex-col md:flex-row  items-center justify-center text-white relative">
            <div className='md:w-3/6 md:p-4 desktop-view'>
                <img data-aos="flip-right" style={{borderRadius:'50%',height:"60%",width:"60%"}} data-aos-duration="1500" data-aos-offset="200"  src={profile} alt="profile" onLoad={() => setLoaded(false)} />
            </div>
            <div className='md:w-3/6 md:p-4 mobile-view'>
                <img data-aos="flip-right" style={{borderRadius:'50%',height:"100%",width:"100%"}} data-aos-duration="1500" data-aos-offset="200"  src={profile} alt="profile" onLoad={() => setLoaded(false)} />
            </div>
            <div className='md:w-3/6 ml-0' data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100" >
                <div className="flex flex-col w-full mt-8">
                    <h1 className="text-xl text-gray-400">Hi, I'm</h1>
                    <h1 className="text-2xl font-bold">Shubham Srivastava</h1><br/>
                    <p class="text-xl font-bold text-gray-300">Full Stack Developer (MERN)</p><br/><br/>
                    <p className="text-md font-light text-gray-400 mb-5">Enthusiastic and motivated self-learning in Information Technology.</p>
                    <p className="text-md font-bold text-gray-300 ">Contact Details</p>
                    <p className="text-md font-light text-gray-400 ">shubhamda111@gmail.com</p>
                    <p className="text-md font-light text-gray-400 ">+91-9695882929 ,&nbsp;+91-8368858039</p>
                    <p className="text-md font-light text-gray-400 ">Mumbai , India</p>
                </div>
                <ul className='flex mt-2 gap-4 items-center'>
                   <li>
                        <a href='https://github.com/srivastavshubham' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faGithub} /></a>
                   </li> 
                    <li>
                        <a href='https://instagram.com/shubham_shrivastav33?igshid=ZDdkNTZiNTM=' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faInstagram} /></a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/shubham-srivastava-258876159' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faLinkedinIn} /></a>
                    </li>
                </ul>
            </div>
            <img src={hr} className="w-full md:h-2 absolute bottom-0" alt="hr" />
        </div>
        </>
    )
}
