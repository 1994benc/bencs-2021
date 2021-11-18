import { ReactElement, useEffect, useState } from 'react';
import { DotIcon } from './DotIcon';

export function AnimatingDots() {
  const [dots, setDots] = useState<number[]>([]);

  useEffect(() => {
    let last = 0;
    let dotIndex = 0;
    let currentDirection = 'up';
    const render = (now) => {
      if (!last || now - last >= 2 * 500) {
        last = now;
        if (currentDirection === 'up') {
          dotIndex++;
          dots.push(dotIndex)
          setDots([...dots])
          if (dotIndex === 5) {
            currentDirection = 'down';
          }
        } else if (currentDirection === 'down') {
          dotIndex--;
          dots.pop();
          setDots([...dots])
          if (dotIndex === 1) {
            currentDirection = 'up';
          }
        }
      }
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render)
  }, [])
  return (<div className='flex items-center'>
    {dots.map((dotIndex => <DotIcon key={dotIndex} />))}
  </div>);
}
