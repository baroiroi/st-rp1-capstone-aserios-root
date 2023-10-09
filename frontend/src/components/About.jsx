import pic1 from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'
import pic3 from '../assets/pic3.jpg'
import { AboutUs, VisionMission } from '../utils/data';

const About = () => {
  return (
    <div className='h-auto bg-aqua text-lightgray'>
          <ul>
              {AboutUs.map((About, index)=> {
                return(
                  <li key={index}>
                    <div className='flex justify-center py-5'><h1>{About.name}</h1></div>
                    <div className='px-5'>{About.description}</div>
                  </li>
                ) 
              })}

          </ul>
          <div className='flex flex-wrap justify-between'>
            <img src={pic1} alt="sample pic1" className='px-5 w-96 h-72' />
            <img src={pic2} alt="sample pic2" className='px-5 w-96 h-72' />
            <img src={pic3} alt="sample pic3" className='px-5 w-96 h-72' />
          </div>
          <span className='flex justify-center py-5 pl-5'><h1>Our Vision and Mission</h1></span>
          <ul>
          {VisionMission.map((vismis, index)=> {
                return(
                  <li key={index}>
                    <div className='flex justify-start pl-5'><h2>{vismis.name}</h2></div>
                    <div className='px-5 mb-5'>{vismis.description}</div>
                  </li>
                )
          })}
          </ul>
    </div>
  )
}

export default About;