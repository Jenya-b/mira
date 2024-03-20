declare module '*.svg' {
	import React = require('react');

	export const SvgComponent: React.FC<React.SVGProps<SVGSVGElement>>;
}
