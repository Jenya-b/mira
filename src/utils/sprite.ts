interface Options {
	ctx: CanvasRenderingContext2D;
	image: HTMLImageElement;
	width: number;
	height: number;
	numberOfFrames: number;
	ticksPerFrame: number;
}

export class Sprite {
	readonly ctx: CanvasRenderingContext2D;

	readonly image: HTMLImageElement;

	width: number;

	height: number;

	frameIndex: number;

	tickCount: number;

	ticksPerFrame: number;

	numberOfFrames: number;

	constructor(options: Options) {
		this.ctx = options.ctx;

		this.image = options.image;

		this.width = options.width;
		this.height = options.height;

		this.frameIndex = 0;
		this.tickCount = 0;
		this.ticksPerFrame = options.ticksPerFrame || 0;

		this.numberOfFrames = options.numberOfFrames || 1;

		this.start();
	}

	update(): void {
		this.tickCount += 2.5;

		if (this.tickCount > this.ticksPerFrame) {
			this.tickCount = 0;

			if (this.frameIndex < this.numberOfFrames - 1) {
				this.frameIndex += 1;
			} else {
				this.frameIndex = 0;
			}
		}
	}

	render(): void {
		this.ctx.clearRect(0, 0, this.width / this.numberOfFrames, this.height);
		this.ctx.drawImage(
			this.image,
			(this.frameIndex * this.width) / this.numberOfFrames,
			0,
			this.width / this.numberOfFrames,
			this.height,
			0,
			0,
			this.width / this.numberOfFrames,
			this.height
		);
	}

	start(): void {
		const loop = (): void => {
			this.update();
			this.render();

			window.requestAnimationFrame(loop);
		};

		window.requestAnimationFrame(loop);
	}
}
