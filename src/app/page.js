import Image from 'next/image';
import HomeHero from '@/Components/HomeHero';
import HomeHeroReactTyped from '@/Components/HomeHeroReactTyped';
import Navbar from '@/Components/Navbar';
import NavbarContainer from '@/Components/NavbarContainer';
import HomeHeroImage from '@/Components/HomeHeroImage';
import StatsAnimatedNumbers from '@/Components/StatsAnimatedNumbers';
import StatsSection from '@/Components/StatsSection';
import FAQ from '@/Components/FAQ/FAQ';
import FAQContainer from '@/Components/FAQ/FAQContainer';

export default function Home() {
    return (
        <>
            {/* HERO SECTION */}
            <section className='text-white overflow-x-hidden overflow-y-hidden'>
                <HomeHero>
                    <div className='col-span-1 md:col-span-9 lg:col-span-8 text-center justify-center flex flex-col md:text-left'>
                        <p className='text-5xl font-bold p-2'>Hi, I'm</p>
                        <HomeHeroReactTyped />
                        <p className='max-[480px]:text-base text-xl md:max-w-[600px] border-l-3 border-[#00df9a] font-bold text-gray-500 pl-6'>I build responsive, functional web applications — from front-end behavior to back-end logic — prioritizing readability, efficiency, and performance as I continue to refine my craft.</p>
                        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
                    </div>
                    <div className='flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-4 py-8 md:py-0'>
                        <HomeHeroImage>
                            <Image src='/images/graduationphotoshoot.JPG' className='mx-auto object-cover md:object-contain w-3/4 md:w-full max-h-[700px] md:max-h-[400px] rounded-xl' width={300} height={300} priority={true} alt='John Angelo&apos;s Graduation Photoshoot'
                            />
                            <div className='absolute rounded-xl -bottom-[5%] md:-bottom-[7%] left-[3%] md:-left-[15%] w-3/4 md:w-full h-3/4 bg-[#00df9a] -z-99'>

                            </div>
                        </HomeHeroImage>
                    </div>
                </HomeHero>
            </section>
            {/* HERO SECTION */}

            {/* STATS SECTION */}
            {/* <section className='py-8'>
                <div className='max-w-[1240px] mx-auto px-8'>
                    <div className='flex flex-col sm:flex-row lg:w-4/5 lg:mx-auto justify-center items-center gap-x-16 md:gap-x-48 sm:rounded-xl sm:border border-gray-500'>
                        <div className='flex flex-col items-center my-7'>
                            <h2 className='text-5xl text-[#00df9a] tracking-wider font-bold'><StatsAnimatedNumbers className='text-5xl text-[#00df9a] tracking-wider font-bold' /></h2>
                            <p className='text-gray-400 text-lg'>Projects</p>
                        </div>
                        <div className='flex flex-col items-center my-7'>
                            <h2 className='text-5xl text-[#00df9a] tracking-wider font-bold'><span>2</span></h2>
                            <p className='text-gray-400 text-lg'>Years</p>
                        </div>
                        <div className='flex flex-col items-center my-7'>
                            <h2 className='text-5xl text-[#00df9a] tracking-wider font-bold'><span>3</span></h2>
                            <p className='text-gray-400 text-lg'>Certifications</p>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* STATS SECTION */}

            {/* STATS SECTION */}
            <section className='py-8 pt-32'>
                <StatsSection>
                    <div className='flex flex-col sm:flex-row lg:w-4/5 lg:mx-auto justify-center items-center gap-x-16 md:gap-x-48 sm:rounded-xl sm:border sm:min-h-[170px] border-gray-500'>
                        <div className='flex flex-col items-center my-7'>
                            <h2 className='text-5xl text-[#00df9a] tracking-wider font-bold'><StatsAnimatedNumbers className='text-5xl text-[#00df9a] tracking-wider font-bold' /></h2>
                            <p className='text-gray-400 text-lg'>Projects</p>
                        </div>
                        <div className='flex flex-col items-center my-7'>
                            <h2 className='text-5xl text-[#00df9a] tracking-wider font-bold'><span>2</span></h2>
                            <p className='text-gray-400 text-lg'>Years</p>
                        </div>
                        <div className='flex flex-col items-center my-7'>
                            <h2 className='text-5xl text-[#00df9a] tracking-wider font-bold'><span>3</span></h2>
                            <p className='text-gray-400 text-lg'>Certifications</p>
                        </div>
                    </div>
                </StatsSection>
            </section>
            {/* STATS SECTION */}

            {/* FAQ SECTION */}
            <section className='bg-white py-16'> 
                <FAQContainer>
                    <FAQ />
                </FAQContainer>
            </section>
            {/* FAQ SECTION */}
        </>
    );
}
