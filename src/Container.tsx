import React from 'react';
import {interpolate, useCurrentFrame, Img} from 'remotion';
import {Logo} from './Logo';
import {Like} from './Like';
import {Subscribe} from './Subscribe';

export const Container: React.FC<{
	height?: number;
	offset?: number;
	framesToAppear?: number;
}> = ({height = 200, offset = 10, framesToAppear = 15}) => {
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
			className="flex w-full absolute justify-center"
		>
			<div
				className="flex flex-row items-center bg-white rounded-lg shadow-lg py-10"
				style={{width: 870}}
			>
				<div className="mx-10">
					<Logo />
				</div>

				<div>
					<div className="text-4xl">Dima Portenko</div>
					<div style={{height: 15}} />
					<div className="text-xl">React Native tutorials, coding topics</div>
				</div>

				<div className="flex flex-1 justify-end mr-10">
					<div className="flex flex-row items-center">
						<Like />

						<div style={{width: 20}} />

						<Subscribe />
					</div>
				</div>
			</div>
		</div>
	);
};
