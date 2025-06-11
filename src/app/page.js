import HomeHero from '@/Components/HomeHero';
import HomeHeroReactTyped from '@/Components/HomeHeroReactTyped';
import Navbar from '@/Components/Navbar';
import NavbarContainer from '@/Components/NavbarContainer';
import Image from 'next/image';

export default function Home() {
    return (
        <>
            <section className='text-white overflow-x-hidden overflow-y-hidden'>
                <HomeHero>
                    <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
                    <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>
                    <div className='flex justify-center items-center flex-wrap'>
                        <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Fast, flexible financing for&nbsp;</p>
                        <HomeHeroReactTyped />
                    </div>
                    <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms</p>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
                </HomeHero>
            </section>
        </>
    );
}
