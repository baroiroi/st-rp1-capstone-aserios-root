import Logo from '../assets/DentalSmileLogo.jpg'

const About = () => {
  return (
    <div className='flex-col items-center justify-center w-auto h-screen overflow-hidden bg-center bg-no-repeat bg-cover'
        style={{backgroundImage: "url('./src/assets/DentalSmileLogo.jpg')",
          }}>
            <h1 className='flex justify-center my-5'>About Dental Smile</h1>
            <p className='flex justify-end'>Dental Smile Clinic is a state-of-the-art dental facility dedicated to providing exceptional oral healthcare and creating beautiful, confident smiles. Our clinic is committed to delivering the highest standards of dental services in a warm and welcoming environment. We prioritize patient comfort, advanced technology, and personalized care to ensure a positive experience for every individual who walks through our doors.</p>

          </div>
  )
}

export default About;