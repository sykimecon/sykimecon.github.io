import Image from 'next/image'
import placeholderImage from './../../public/images/sy.jpg';
import Link from 'next/link';

import AcademicCapDark from '../icons/academic_cap_dark';
import World from '../icons/world';
import MailIcon from '../icons/mail';
import TickIcon from '../icons/tick_icon';
import Misc from '../icons/misc';

const AboutComponent = () => {
  return (
    <div className="sm:grid-flow-row md:grid md:grid-cols-5">
        <div className="grid justify-center items-center bg-[#FBFFFB] rounded-lg p-2 md:h-32">
            <Image
            src={"./images/sy.jpg"}
            blurDataURL='sy'
            alt="seo kim"
            quality={10}
            placeholder="blur"
            width={200}
            height={200}
            unoptimized={true}
            // sizes={"100vw"}
            className=' object-contain rounded-xl mb-5 sm:flex'
            />
            <span className='sm:text-base text-xl font-inter'>Seongyoon Kim</span>
            <span className='sm:text-base font-nunito font-light'>
                Development Economics; Trade/Spatial Economics; Environmental Economics
            </span>

            <div className='justify-center md:justify-start flex font-nunito font-normal text-blue-400 mt-5'>
                <MailIcon />    
                <Link href="syoonkim@umich.edu" className='ml-2'>Mail</Link>
            </div>
        </div>

        <div className="grid col-span-3 rounded-lg p-2 font-nunito">
            <div>
                <h1 className='text-xl md:text-2xl font-medium m-2'>
<<<<<<< Updated upstream
                About Me: <span className='font-normal'></span>
=======
                About Me: <span className='font-normal'>by Day, Gamer by Night</span>
>>>>>>> Stashed changes
                </h1>

                <p className=' leading-loose text-justify mb-5 p-2 text-slate-700'>
                    I'm a third year PhD student in Economics at the University of Michigan. My research lies in the development economics, drawing inspiration from trade and spatial models. I am interested in firms, migration, and the effects of infrastructure development. 

                    I received my bachelors' degree from New York University Abu Dhabi (NYUAD) in Economics and Mathematics in 2020. I can be reached at syoonkim[at]umich.edu
                </p>
            </div>


            <div className="grid grid-cols-2 gap-2">
                <div>
                    <h2 className='flex flex-row text-xl font-medium m-2'>
                        <AcademicCapDark />
                        <span className='ml-2'>Education</span>
                    </h2>

                    <ul className="list-none">
                        <li className='text-slate-700 p-2'>
                            <div className="flex">
                                <TickIcon /> &nbsp;
                                PhD in Economics, 2021 - Present
                            </div>
                            <span className='text-sm'>University of Michigan</span>
                        </li>

                        <li className='text-slate-700 p-2'>
                            <div className="flex">
                                <TickIcon /> &nbsp;
                                Bachelor's in Economics and Mathematics, 2014 - 2020
                            </div>
                            <span className='text-sm'>University of Michigan</span>
                        </li>

                    </ul>

                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutComponent