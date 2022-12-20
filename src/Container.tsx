import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';

export const Container: React.FC<{
	height?: number;
	offset?: number;
	framesToAppear?: number;
}> = ({height = 200, offset = 10, framesToAppear = 20}) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, framesToAppear], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const translateY = interpolate(
		frame,
		[0, framesToAppear],
		[height + offset, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	return (
		<div
			style={{
				opacity,
				height,
				bottom: offset,
				transform: `translateY(${translateY}px)`,
			}}
			className="items-center justify-center flex w-full absolute"
		>
			<div
				className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg py-10"
				style={{width: 800}}
			>
				Edit <code>src/Container.tsx</code> and save to reload.
			</div>
		</div>
	);
};
