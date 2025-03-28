"use client"

import React, {useState, useRef, Suspense} from 'react'
import {Canvas, useFrame} from "@react-three/fiber"
import {Points, PointMaterial} from "@react-three/drei"
//@ts-ignore
import * as random from "maath/random/dist/maath-random.esm";


const StarBackground = (props: any) => {
    const ref: any = useRef(null);
    const [sphere] = useState(() => {
      const positions = new Float32Array(5000 * 3) // 5000 points, 3 coords each
      random.inSphere(positions, { radius: 1.2 })
      return positions;
  });
  
    useFrame((state, delta) => {
      if (ref.current) {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
      }
    })   

  return (
    <group rotation = {[0, 0, Math.PI / 4]}>
        <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
        >
            <PointMaterial
            transparent 
            color="#fff"
            size = {0.002}
            sizeAttenuation = {true}
            depthWrite = {false}
            />
        </Points>

    </group>
  )
};

const StarsCanvas = () => (
    <div className='w-full h-auto fixed inset-0 z-[20]'>
    <Canvas camera={{position: [0, 0, 1]}}>

        <Suspense fallback = {null}>
            <StarBackground/>
        </Suspense>
    </Canvas>  
    </div>
);
export default StarsCanvas;
// end fd