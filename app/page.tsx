"use client"

/* ============= Packages ============== */
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import Image from "next/image";
import { FiChevronRight, FiChevronsLeft } from 'react-icons/fi';

/* ============ Images ================= */
import link from "@/images/programming coding GIF.gif"
import coading from "@/images/coading.jpg"
import candidate from "@/images/Home/candidate.jpg"
import melisa from "@/images/Home/melisa.jpg"
import problem from "@/images/Home/problem.webp"
import editor from "@/images/Home/editor.jpg"
import summary from "@/images/Home/summary.jpg"
import meeting from "@/images/Home/meeting.jpg"
import home from "@/images/Home.jpg"

/* =========== Components ============= */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"
import data from "@/components/Data"

gsap.registerPlugin(useGSAP, ScrollTrigger); // register the hook to avoid React version discrepancies 


export default function Home() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  // var tl = gsap.timeline()
 
  useGSAP(() => {
    //GSAP ANIMATION
    gsap.from("#box-1", {
      opacity:0,
      duration:1,
      x: -50,
      scrollTrigger:{
        trigger:"#section-1",
        scroller:"body",
        scrub:true,
        start:"top 30%",
        pin:true,
      }
    })
    gsap.from("#box-2", {
      opacity:0,
      duration:1,
      x: -50,
      scrollTrigger:{
        trigger:"#section-2",
        scroller:"body",
        scrub:true,
        start:"top 30%",
        pin:true,
      }
    })
    gsap.from("#box-3", {
      opacity:0,
      duration:1,
      x: -50,
      scrollTrigger:{
        trigger:"#section-3",
        scroller:"body",
        scrub:true,
        start:"top 30%",
        pin:true
      }
    })
    gsap.from("#box-4", {
      opacity:0,
      duration:1,
      x: 50,
      scrollTrigger:{
        trigger:"#section-1",
        scroller:"body",
        scrub:true,
        start:"top 30%"
      }
    })
    gsap.from("#box-5", {
      opacity:0,
      duration:1,
      x: 50,
      scrollTrigger:{
        trigger:"#section-2",
        scroller:"body",
        scrub:true,
        start:"top 30%"
      }
    })
    gsap.from("#box-6", {
      opacity:0,
      duration:1,
      x: 50,
      scrollTrigger:{
        trigger:"#section-3",
        scroller:"body",
        scrub:true,
        start:"top 30%"
      }
    })


    gsap.to("#animated-text",{
      opacity:10,
      duration:1,
      fontSize:"18px",
      // background:"crimson",
      // color:"white",
      yoyo:true,
      repeat:-1,
      ease:"bounce.in"

    })
    gsap.from("#text-animation h4",{
      // visibility:"hidden",
      duration:1,
      y:50,
      stagger:1,
      // delay:0.5,
      ease:"ease.out"

    })
    gsap.from("#text-animation div button",{
      // visibility:"hidden",
      duration:1,
      y:50,
      delay:2,
      // stagger:1,
      // delay:0.5,
      ease:"ease.out"

    })
  }); // <-- scope is for selector text (optional)

  
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  // autoslide, clearInterval = een cleanup functie noodzakelijk bij interval
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 1000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <div className="w-full">
      <Navbar/>
       <section className="bg-[#f3f3f3]">
          <div className="container mx-auto ">
              <div className="w-[90%] md:w-[70%] lg:w-[60%] mx-auto flex justify-center items-center py-24 lg:py-36">
                  <div id='text-animation'>
                    <h4 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:leading-relaxed xl:leading-normal text-center lg:w-[85%] xl:w-[69%] mx-auto">Skills speak louder than words</h4>
                    <h4 className="text-lg md:text-xl  text-center mt-7 leading-normal">We help companies develop the strongest tech teams around. We help candidates sharpen their tech skills and pursue job opportunities.</h4>
                    <div className=" flex justify-center w-full mt-10">
                      <button className="px-6 border border-[#525252] py-2 rounded-lg mr-5 text-sm">Request Demo</button>
                      <button className="px-6 bg-black text-white py-2 rounded-lg text-sm">Sign up</button>
                    </div>
                  </div>
              </div>
          </div>
       </section>
       <section className="h-40 w-full">
          <Image src={coading} alt="Coading Image" className="w-full h-full"/>
       </section>
       <section className="py-20 w-full">
          <div className="container mx-auto">
              <div className="w-full xl:w-[60%] mx-auto">
                  <h4 className="text-3xl lg:text-4xl px-3 text-center">It's not a pipeline problem</h4>
                  <h4 className="text-3xl lg:text-4xl text-center mt-4 text-[#ADEFD1FF]">It's a spotlight problem.</h4>
                  <p className="text-sm w-80% px-4 md:px-0 lg:text-xl text-center mt-14">Tech hiring needs a reset. From prepping for jobs and practicing coding to running a world-class technical interview, give developers the tools they need to showcase their skills, passion, and potential.</p>
              </div>
              <div className="w-full flex justify-center mt-8">
                <button className=" bg-[#00203FFF] py-2 px-5 text-white rounded-3xl ">Request demo</button>
              </div>
          </div>
       </section>
       <section className="px-10 py-20">
          <div className="container mx-auto bg-black flex flex-col md:flex-row justify-between rounded-2xl py-6">
              <div className="w-full lg:w-6/12 text-white flex justify-center items-center">
                <div className="w-10/12">
                    <div className="bg-white text-black w-fit px-5 py-2 rounded-3xl">
                      <p className="text-sm lg:text-lg">Coading Practice</p>
                    </div>
                    <h4 className="text-xl lg:text-2xl mt-4">Explore and expand your skills.</h4>
                    <p className="text-xs lg:text-sm mt-4">Every idea has a first line of code. Prep for jobs and sharpen your skills alongside a global community of developers. Access the content you need to develop new skills – and land the job you’ve dreamed of.</p>
                    <button className="border border-[#888] mt-5 rounded-xl py-2 px-4 text-xs lg:text-sm">Sign up and practice</button>
                </div>
              </div>
              <div className="w-full lg:w-6/12 flex justify-center mt-8 lg:mt-0">
                <Image src={candidate} alt="Candidate Image" className="w-11/12"/>
              </div>
          </div>
       </section>
       <section className="py-8 px-4 md:px-0">
          <div className="container mx-auto">
              <div>
                <p className="bg-[#ADEFD1FF] text-black py-2 px-5  rounded-full w-fit">Coading test</p>
                <p className="text-xl md:text-4xl font-semibold mt-8"><span className="text-[#ADEFD1FF]">Join the movement.</span> Screen on skills.</p>
              </div>
              <div className="mt-5">
                <div className="diff aspect-[16/9]">
                  <div className="diff-item-1">
                    <div className="h-[623px] overflow-hidden">
                      <Image src={home} alt="Melisa Pic" className='h-fit w-full'/>
                    </div>
                  </div>
                  <div className="diff-item-2">
                    <div className="h-[623px] overflow-hidden">
                      <Image src={melisa} alt="Melisa Pic" className='h-fit w-full'/>
                    </div>
                  </div>
                  <div className="diff-resizer bg-[#000] "></div>
                </div>
              </div>
          </div>
       </section>
       <section className='py-2 px-8' id='section-1'>
          <div className="container mx-auto flex flex-col md:flex-row justify-between">
            <div className='flex items-center w-full md:w-5/12' id='box-1'>
              <div>
                <h4 className='text-3xl font-semibold'>Leave the binary tree behind</h4>
                <p className='text-md mt-3'>Build coding questions using our library of dev-friendly content that challenges them to solve the problems they’d actually tackle on the job.</p>
                <button className='mt-5'>Start free trial ➜</button>
              </div>
            </div>
            <div className='w-full md:w-5/12' id='box-4'>
              <Image src={problem} alt='Problem Image'/>
            </div>
          </div>
       </section>

       <section className='py-2 px-8' id='section-2'>
          <div className="container mx-auto flex flex-col md:flex-row justify-between">
            <div className='flex items-center w-full md:w-5/12' id='box-2'>
              <div>
                <h4 className='text-3xl font-semibold'>Focus on what really matters: the code</h4>
                <p className='text-md mt-3'>Build skills-based coding tests with tech problems a developer would encounter on the job — and hire the team behind your next big idea.</p>
                <button className='mt-5'>Request Demo ➜</button>
              </div>
            </div>
            <div className='w-full md:w-5/12' id='box-4'id='box-5'>
              <Image src={editor} alt='Problem Image'/>
            </div>
          </div>
       </section>
       <section className='py-2 px-8' id='section-3'>
          <div className="container mx-auto flex flex-col md:flex-row justify-between">
            <div className='flex items-center w-full md:w-5/12' id='box-3'>
              <div>
                <h4 className='text-3xl font-semibold'>Identify top contenders</h4>
                <p className='text-md mt-3'>Identify top contenders and invite them to meet your team using data-driven decisions that help level the playing field for developers everywhere.</p>
                <button className='mt-5'>Learn more ➜</button>
              </div>
            </div>
            <div className='w-full md:w-5/12' id='box-6'>
              <Image src={summary} alt='Problem Image'/>
            </div>
          </div>
       </section>
       <section className='mt-20 py-20 px-8'>
        <div className="container mx-auto">
          <div className='w-full md:w-8/12 mx-auto'>
            <p className='bg-[#ADEFD1FF] text-md w-fit text-center rounded-full px-5 py-2 mx-auto' id='animated-text'>Technical interviews</p>
            <h4 className='text-2xl md:text-5xl font-bold text-center mt-8'>Interview like it’s <span>2025</span></h4>
            <p className='text-center text-sm md:text-xl mt-4'>Ditch out of reach and out of touch interview questions about golf balls and 747s — and turn off your clunky screen share for good. Code, create, and collaborate with an IDE built to showcase real-world skills in a real-world environment.</p>
            <button className='mt-12 block mx-auto px-5 py-2 rounded-md bg-[#ADEFD1FF]'>Learn more</button>
          </div>
        </div>
       </section>
       <section className='mt-20 px-8'>
        <div className="container">
          <div>
            <Image src={meeting} alt='Meeting'/>
          </div>
        </div>
       </section>
       <section className='px-8 mt-20 md:mt-0'>
        <div className="container mx-auto flex flex-col md:flex-row justify-between">
            <div className='w-full md:w-5/12 flex items-center'>
              <div>
                <h4 className='text-xl md:text-2xl font-bold'>Every company is a tech company.</h4>
                <h4 className='text-xl text-[#ADEFD1FF] mt-1'>We’re here to help them all.</h4>
                <p className='mt-4'>More than 3,000 tech teams, representing all industries and from countries around the world, trust HackerRank to connect with developers and add cutting-edge skills to their teams.</p>
                <p className='mt-4'>That includes 25% of the Fortune 100 — and that moonshot startup that just came out of stealth.</p>
              </div>
            </div>
            <div className='w-full md:w-5/12'>
              <section className="section">
                <div className="section-center">
                  {people.map((person, personIndex) => {
                    const { id, image, name, title, quote } = person;
                    let position = "nextSlide";
                    if (personIndex === index) {
                      position = "activeSlide";
                    }
                    if (
                      personIndex === index - 1 ||
                      (index === 0 && personIndex === people.length - 1)
                    ) {
                      position = "lastSlide";
                    }
                    return (
                      <article key={id} className={position}>
                        <img src={image} alt={name} className="person-img" />
                        <h4>{name}</h4>
                        <p className="title">{title}</p>
                        <p className="text">{quote}</p>
                      </article>
                    );
                  })}
                  <button className="prev" onClick={() => setIndex(index - 1)}>
                    <FiChevronsLeft />
                  </button>
                  <button className="next" onClick={() => setIndex(index + 1)}>
                    <FiChevronRight />
                  </button>
                </div>
              </section>
            </div>
        </div>
       </section>
       <section className='border-t-4 border-t-[#ADEFD1FF] px-8'>
            <div className='container mx-auto flex flex-col md:flex-row justify-between'>
                  <div className='w-full md:w-6/12 md:border-r-4 md:border-r-[#ADEFD1FF] py-20'>
                      <div className='w-full md:w-8/12 mx-auto'>
                        <h4 className='text-xl md:text-3xl font-bold'>Practice coding challenges and <span>prepare for interviews</span></h4>
                        <p className='mt-4 text-sm md:text-lg'>Start practicing your skills now and land the job of your dreams.</p>
                        <button className='mt-5 text-sm bg-[#ADEFD1FF] px-5 py-2 rounded-lg'>Join the Community</button>
                      </div>
                  </div>
                  <div className='w-full md:w-6/12 py-20'>
                      <div className='w-full md:w-8/12 mx-auto'>
                        <h4 className="text-xl md:text-3xl font-bold">Get started <span> hiring with HackerRank</span></h4>
                        <p className='mt-4 text-sm md:text-lg'>Join thousands of companies embracing the new way to hire and upskill developers.</p>
                        <button className='mt-5 text-sm bg-[#ADEFD1FF] px-5 py-2 rounded-lg'>Start a Free Trial</button>
                      </div>
                  </div>
            </div>
       </section>

       <Footer/>
    </div>
  );
}
