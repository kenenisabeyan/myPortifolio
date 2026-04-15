import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html, OrbitControls, Stars, Sphere } from '@react-three/drei'
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiCss3,
  SiNodedotjs,
  SiPython,
  SiMysql,
  SiGit,
  SiTailwindcss,
  SiFigma,
  SiExpress,
} from 'react-icons/si'

const LabelOnSphere = ({ icon: Icon, color, position }) => {
  return (
    <group position={position}>
      <Html center transform distanceFactor={5} occlude>
        <div className="flex items-center justify-center w-12 h-12 rounded-full border border-white/15 bg-black/80 shadow-lg shadow-cyan-500/10">
          <Icon size={24} color={color} />
        </div>
      </Html>
    </group>
  )
}

const TechGroup = ({ techItems }) => {
  const groupRef = useRef()
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002
      groupRef.current.rotation.x += 0.001
    }
  })
  return (
    <group ref={groupRef}>
      {techItems.map((item, idx) => (
        <LabelOnSphere key={idx} icon={item.icon} color={item.color} position={item.pos} />
      ))}
    </group>
  )
}

const Background3D = () => {
  const techItems = useMemo(() => {
    const items = [
      { icon: SiJavascript, color: '#f7df1e' },
      { icon: SiTypescript, color: '#3178c6' },
      { icon: SiNextdotjs, color: '#ffffff' },
      { icon: SiReact, color: '#61dafb' },
      { icon: SiCss3, color: '#264de4' },
      { icon: SiNodedotjs, color: '#68a063' },
      { icon: SiPython, color: '#3776ab' },
      { icon: SiMysql, color: '#4479a1' },
      { icon: SiGit, color: '#f05032' },
      { icon: SiTailwindcss, color: '#06b6d4' },
      { icon: SiFigma, color: '#f24e1e' },
      { icon: SiExpress, color: '#000000' },
    ]
    const radius = 2.8
    const positions = []
    const num = items.length
    for (let i = 0; i < num; i++) {
      const phi = Math.acos(1 - 2 * (i + 0.5) / num)
      const theta = Math.PI * 2 * i / num * (Math.sqrt(5) - 1) / 2
      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)
      positions.push({ ...items[i], pos: [x, y, z] })
    }
    return positions
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} />
        <pointLight position={[-3, 2, 4]} intensity={0.6} />

        <Stars radius={100} depth={50} count={2000} factor={4} fade />

        {/* Visible sphere – wireframe + glow */}
        <Sphere args={[2.8, 64, 64]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#3b82f6"
            wireframe
            transparent
            opacity={0.4}
            emissive="#1e3a8a"
            emissiveIntensity={0.5}
            roughness={0.3}
            metalness={0.8}
          />
        </Sphere>

        {/* Outer glow */}
        <Sphere args={[2.85, 64, 64]} position={[0, 0, 0]}>
          <meshBasicMaterial color="#3b82f6" transparent opacity={0.08} />
        </Sphere>

        <TechGroup techItems={techItems} />

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
      <div className="absolute inset-0 bg-black/50 z-0 pointer-events-none"></div>
    </div>
  )
}

export default Background3D