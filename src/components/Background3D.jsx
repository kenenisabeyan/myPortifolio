import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, OrbitControls, Stars, Sphere } from '@react-three/drei'

const LabelOnSphere = ({ text, color, position }) => {
  const textRef = useRef()
  useFrame(() => {
    if (textRef.current) {
      textRef.current.lookAt(0, 0, 0)   // always face camera
    }
  })
  return (
    <Text
      ref={textRef}
      position={position}
      fontSize={0.55}
      color={color}
      anchorX="center"
      anchorY="middle"
      outlineWidth={0.02}
      outlineColor="#000000"
    >
      {text}
    </Text>
  )
}

const Background3D = () => {
  const techItems = useMemo(() => {
    const items = [
      { text: 'JS', color: '#f7df1e' },
      { text: 'TS', color: '#3178c6' },
      { text: 'NEXT', color: '#ffffff' },
      { text: 'REACT', color: '#61dafb' },
      { text: 'CSS', color: '#264de4' },
      { text: 'NODE', color: '#68a063' },
      { text: 'PY', color: '#3776ab' },
      { text: 'SQL', color: '#4479a1' },
      { text: 'GIT', color: '#f05032' },
      { text: 'TAILWIND', color: '#06b6d4' },
      { text: 'US', color: '#ffffff' },
      { text: 'EXPRESS', color: '#ffffff' },
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

  const groupRef = useRef()
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002
      groupRef.current.rotation.x += 0.001
    }
  })

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

        <group ref={groupRef}>
          {techItems.map((item, idx) => (
            <LabelOnSphere key={idx} text={item.text} color={item.color} position={item.pos} />
          ))}
        </group>

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
      <div className="absolute inset-0 bg-black/50 z-0 pointer-events-none"></div>
    </div>
  )
}

export default Background3D