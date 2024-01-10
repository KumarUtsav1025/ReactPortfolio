import React ,{ Suspense } from 'react'
import { BsArrowRightCircle } from "react-icons/bs";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { motion } from "framer-motion";
import TypeWriter from 'typewriter-effect';




const About = () => {
    const handleDownload = () => {

        const googleDriveFileUrl = 'https://drive.google.com/file/d/1xEkVFFBleN1mAXBOgUV6CB0k9EMuto6W/view?usp=sharing';
        window.open(googleDriveFileUrl, '_blank');
      };

  return (
    <div id='about' 
    className='h-full w-full px-8 md:px-16'>
        <div className=' flex flex-col md:pt-0 items-center justify-center h-full md:flex-row text-white'>

            <div name = "left" className='w-9/10 pt-20 h-2/5 md:pt-0 md:w-3/5 md:px-16'>
                <div>
                    <h1 className= 'text-white font-karla text-3xl md:text-5xl'>
                       Hi! I'm Utsav 
                    </h1>
                    <h1 className='text-pink-600 font-bebas text-3xl md:text-6xl'>
                        <TypeWriter
                        options={{
                            strings : [
                                " Flutter Developer",
                                " Django Developer",
                                " ML Enthusiast",
                                // " NodeJs Developer",
                                " ReactJs Developer"
                            ],
                            autoStart : true,
                            loop: true,
                        }}>
                        </TypeWriter>
                    </h1>
                    <h2 className='py-6 overflow-hidden line-clamp-3 md:text-1xl md:line-clamp-none md:overflow-visible'>
                        Currently pursuing B.Tech in Electrical Engineering at NIT Raipur, I specialize in building
                         innovative solutions using technologies like Flutter, Django, and TensorFlow. 
                         With a strong foundation in computer fundamentals and a knack for problem-solving, 
                         I've contributed  to impactful research during my internship at IIT Delhi and led successful projects,
                          including a Plant Disease Classifier App.
                    </h2>
                </div>
                <div className='py-2'></div>
                <div className="inline-block border border-white rounded p-2 hover:scale-125 duration-300">
                    <button className="flex items-center font-bold" onClick={handleDownload}>
                        Download Resume
                        <span className="px-2 text-1xl">
                        <BsArrowRightCircle />
                        </span>
                    </button>
                </div>
            </div>
            <div className='py-45 md:h-screen md:px-6s'></div>
            <div name = "right" className='w-full h-2/5 md:w-2/5 md:h-screen flex items-center justify-center'>
                <div className='h-full  w-full relative z-0 md:h-full'>
                    <Canvas>
                        <Suspense fallback={null}>
                            <OrbitControls enableZoom={false} />
                            <ambientLight intensity={1} />
                            <directionalLight position={[3, 2, 1]} />
                            <Sphere args={[1, 100, 200]} scale={1.8}>
                                <MeshDistortMaterial
                                    color="#f5a623" // Orangish color
                                    attach="material"
                                    distort={0.5}
                                    speed={2}
                                />
                            </Sphere>
                        </Suspense>
                    </Canvas>
                </div>
                <div className='absolute h-1/5 flex w-8/10 items-center justify-center z-10 md:h-full'>
                    <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: [0, -20, 0], transition: { duration: 2, repeat: Infinity } }}
                        className="floating-element" // Position over the sphere
                        >
                        <img src='assets/astronaut.png' alt='astronaut' className='rounded-3xl size-72 md:size-96 items-center' />
                    </motion.div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default About;