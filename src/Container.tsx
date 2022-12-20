import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';

export const Container: React.FC<{height?: number; offset?: number}> = ({
	height = 200,
	offset = 10,
}) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [30, 50], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<div
			style={{opacity, height, bottom: offset}}
			className='items-center justify-center flex w-full absolute'
		>
			{/* <div className="items-center justify-center bg-blue-300 flex bottom-0 absolute w-full"> */}

			<div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg py-10" style={{width: 800}}>
				Edit <code>src/Container.tsx</code> and save to reload.
			</div>
		</div>
	);
};
