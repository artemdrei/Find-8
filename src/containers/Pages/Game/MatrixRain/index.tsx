import React, { useEffect } from 'react';

import { CONFIG } from './config';

import s from './styles.scss';

const MatrixRain = () => {
  useEffect(() => {
    const { content, fontSize, backgroundColor, fontColor } = CONFIG;
    const canvas = document.getElementById('matrixCanvas') as HTMLCanvasElement;
    const wrapper = canvas?.closest('#content') as HTMLDivElement;
    const canvasContext = canvas?.getContext('2d') as CanvasRenderingContext2D;
    const height = wrapper?.clientHeight;
    const width = wrapper?.clientWidth;

    canvas.height = height;
    canvas.width = width;

    const columns = canvas.width / fontSize;
    let drops: number[] = [];
    for (let x = 0; x < columns; x++) drops[x] = 1;

    //drawing the characters
    const draw = () => {
      canvasContext.fillStyle = backgroundColor;
      canvasContext.fillRect(0, 0, width, height);
      canvasContext.fillStyle = fontColor;
      canvasContext.font = fontSize + 'px arial';

      for (let i = 0; i < drops.length; i++) {
        const randomText = content[Math.floor(Math.random() * content.length)];
        //x = i*fontSize, y = value of drops[i]*fontSize
        canvasContext.fillText(randomText, i * fontSize, drops[i] * fontSize);

        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;

        //incrementing Y coordinate
        drops[i]++;
      }
    };

    setInterval(draw, 33);
  }, []);

  return <canvas className={s.matrixRain} id="matrixCanvas"></canvas>;
};

export default MatrixRain;
