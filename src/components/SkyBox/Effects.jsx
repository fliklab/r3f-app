import React from 'react'
import {Effects as StandardEffects} from '@react-three/drei'

export function Effects() {
  return <StandardEffects smaa edgeDetection={0.5} ao bloom={{ luminanceThreshold: 0.01 }} bloomOpacity={0.7} />
}
