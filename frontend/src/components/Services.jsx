import { serviceList } from '../utils/data';

const Services = () => {
  return (
    <>
    <div className='flex flex-col h-auto py-5 bg-aqua'>
        <span className='flex justify-center text-2xl font-extrabold text-lightgray'>Services and Specializations</span>
    <ol className='pt-10 pl-10 list-decimal text-lightgray'>
        {serviceList.map((serv, index) => {
            return(
                <li key={index}>
                    <div className='font-bold'>{serv.service}</div>
                    <div className='pb-5 pl-10'>{serv.description}</div>
                    </li>
                
            )
        })}
    </ol>
    </div>
    

    </>
  )
}

export default Services 