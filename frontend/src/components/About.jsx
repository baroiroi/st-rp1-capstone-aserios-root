import Logo from '../assets/DentalSmileLogo.jpg'
import { AboutUs } from '../utils/data';

const About = () => {
  return (
    <div className='h-screen bg-aqua text-lightgray'>
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
          </div>
  )
}

export default About;