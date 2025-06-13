import Image from 'next/image';
import HomeHero from '@/Components/HomeHero';
import HomeHeroReactTyped from '@/Components/HomeHeroReactTyped';
import Navbar from '@/Components/Navbar';
import NavbarContainer from '@/Components/NavbarContainer';

export default function Home() {
    return (
        <>
            {/* HERO SECTION */}
            <section className='text-white overflow-x-hidden overflow-y-hidden'>
                <HomeHero>
                    <div className='col-span-1 md:col-span-9 lg:col-span-8 text-center justify-center flex flex-col md:text-left'>
                        <p className='text-5xl font-bold p-2'>Hi, I'm</p>
                        <HomeHeroReactTyped />
                        <p className='text-xl md:max-w-[600px] font-bold text-gray-500'>I build responsive, functional web applications — from front-end behavior to back-end logic — prioritizing readability, efficiency, and performance as I continue to refine my craft.</p>
                        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
                    </div>
                    <div className='flex justify-center col-span-1 md:col-span-3 lg:col-span-4'>
                        <Image src='/images/graduationphotoshoot.JPG' className='mx-auto object-contain' priority={true} width={500} height={500} alt='John Angelo&apos;s Graduation Photoshoot'
                        />
                    </div>
                </HomeHero>
            </section>
            {/* HERO SECTION */}

            <section className='py-8'>
                <div className='rounded-xs border border-gray-500'>
                    Test
                </div>
            </section>
        </>
    );
}
