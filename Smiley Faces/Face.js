import {BackgroundCircle} from './BackgroundCircle'
import {Eyes} from './Eyes'
import {Mouth} from './Mouth'
import {FaceContainer} from './FaceContainer'

export const Face = ({
  width, 
  height, 
  centerX, 
  centerY, 
  r, 
  strokeWidth, 
  eyeRadiusX, 
  eyeRadiusY, 
  mouthRadius, 
  mouthWidth
}) => (
	<FaceContainer
    width={width}
    height={height}
    centerX={centerX}
    centerY={centerY}
    
  >
    <BackgroundCircle 
      radius={centerY - strokeWidth /2} 
      strokeWidth={strokeWidth}
    />

    <Eyes 
      radius={r} 
      eyeRadiusX={eyeRadiusX} 
      eyeRadiusY={eyeRadiusY}
    />

    <Mouth 
      mouthRadius={mouthRadius}
      mouthWidth={mouthWidth}
    />
      
  </FaceContainer>
);

