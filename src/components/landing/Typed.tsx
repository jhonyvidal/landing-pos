import React from 'react';
import Typed from 'typed.js';

interface MyComponentProps {
  type: number;
}

function TypedComponent(props: MyComponentProps) {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  let dataString = [''];
  if(props.type === 1){
    dataString = ["Los Pedidos", "Las ventas", "El estock", "Los Gastos", "Los Informes"]
  }else if (props.type === 2){
    dataString = ["Resultados", "Ventas", "Tiempos de entrega", "Servicios"]
  }
 
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: dataString,
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 200,
      startDelay: 500,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    // <h2 className='mb-8 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
      <span ref={el} />
    // </h2>
  );
}

export default TypedComponent;