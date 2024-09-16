import {scroll, animate} from "https://cdn.skypack.dev/motion"


scroll(animate(".progress-bar", { scaleX: [0, 1] }));
document.querySelectorAll("section > div").forEach((item) => {
    scroll(animate(item, { opacity: [0, 1, 1, 0] }), {
      target: item,
      offset: ["start end", "end end", "start start", "end start"]
    });
});
