import { FC, useEffect, useRef } from 'react';

import img from '@/assets/images/sprite-desc.png';
import { Sprite } from '@/utils/sprite';

export const LoaderMessage: FC = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const coinImage = new Image();
	coinImage.src = img;

	useEffect(() => {
		if (canvasRef.current === null) {
			return;
		}

		// eslint-disable-next-line no-new
		new Sprite({
			ctx: canvasRef.current.getContext('2d') as CanvasRenderingContext2D,
			image: coinImage,
			width: 2556,
			height: 36,
			numberOfFrames: 71,
			ticksPerFrame: 4,
		});
	}, []);

	return (
		<div style={{ width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden' }}>
			<canvas id="canvas" ref={canvasRef} width={36} height={36} />
		</div>
	);
};
