import { FC, useEffect, useRef } from 'react';

import imgDesc from '@/assets/images/sprite-desc.png';
import { Sprite } from '@/utils/sprite';

import { Panel, Wrapper, Block, Logo } from './LoaderMessage.styled';

export const LoaderMessage: FC = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const coinImage = new Image();
	coinImage.src = imgDesc;

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
		<Wrapper>
			<Logo>
				<canvas id="canvas" ref={canvasRef} width={36} height={36} />
			</Logo>
			<Panel>
				<Block />
			</Panel>
		</Wrapper>
	);
};
