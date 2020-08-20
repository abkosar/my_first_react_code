export const Eyes = ({radius, eyeRadiusX, eyeRadiusY}) => (
   <> 
  	<ellipse 
      cx={-radius/4} 
      cy={-radius/3} 
      rx={eyeRadiusX} 
      ry={eyeRadiusY}
    />
  	<ellipse 
      cx={radius/4} 
      cy={-radius/3} 
      rx={eyeRadiusX} 
      ry={eyeRadiusY}
    />
  </>
);