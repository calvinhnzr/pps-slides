/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"

export default function Stone(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/small-menhir/model.gltf"
  )
  return (
    <group ref={group} {...props} dispose={null} scale={0.1}>
      <mesh
        geometry={nodes.menhir_petit.geometry}
        material={materials["color_main.001"]}
      />
    </group>
  )
}

useGLTF.preload(
  "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/small-menhir/model.gltf"
)
