import {scroll, animate} from "https://cdn.skypack.dev/motion"     //biblioteca de animacion Motion One

///// Barra de progreso /////
scroll(animate(".progress-bar", { scaleX: [0, 1] }));

///// animacion de desplazamiento para cada seccion /////
document.querySelectorAll("section").forEach((item) => {
    scroll(animate(item, { opacity: [0, 1, 1, 0] }), {     //sincroniza desvanecimiento con el desplazamiento de la página
      target: item,
      offset: ["start end", "end end", "start start", "end start"]
    });
});
