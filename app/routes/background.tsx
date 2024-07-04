import * as THREE from 'three'
import React, { Suspense, useState, useEffect } from 'react'
import { Canvas, useLoader } from 'react-three-fiber'
import { useTransition, a } from 'react-spring'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from '@react-three/drei'
import { Model } from './MehulBeheraAvatar';



export default function Background() {
    return (
        <>
            <div className="flex flex-col bg-slate-500 items-center justify-center">

                <Canvas style={{ width: '100%', height: '100%' }}>
                    <ambientLight intensity={Math.PI / 2} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                    <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
                    <Model position={[0, -1.5, 1]} />
                    <OrbitControls />
                </Canvas>
                <div className=" flex items-center justify-center">
                    <h2 className="text-white text-3xl font-bold">Placeholder</h2>
                </div>
            </div>
        </>
    )
}
