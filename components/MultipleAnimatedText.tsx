import { useEffect, useState } from "react";

interface IProps {
  texts: string[];
}

export function MultipleAnimatedText(props: IProps) {
  const [currText, setCurrText] = useState<string>();


  useEffect(() => {

    let last = 0;
    let currIndex = 0;
    const render = (now) => {
      if (!last || now - last >= 2 * 500) {
        last = now;
        if (currIndex >= props.texts.length) {
          currIndex = 0;
        }
        setCurrText(props.texts[currIndex]);
        currIndex++;
      }
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render)
  }, [])

  return (<span className='text-blue-500 text-5xl lg:text-9xl xl:text-9xl md:text-7xl sm:text-6xl'>{currText}</span>);
}
