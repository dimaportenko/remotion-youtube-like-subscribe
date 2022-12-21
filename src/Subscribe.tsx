import React from 'react';
import {Img} from 'remotion';
import BELL_OUTLINED from '../assets/icons/bell-none-round-24px.svg';

const ICON_SIZE = 34;

export const Subscribe: React.FC = () => {
	return (
		<div
			style={{width: 180, height: 60}}
			className="flex flex-row items-center justify-center rounded-full overflow-hidden bg-red-500 text-white font-bold text-xl px-5 py-2"
		>
			<p className="mr-2 text-xl tracking-wide">Subscribe</p>
			<Img src={BELL_OUTLINED} style={{width: ICON_SIZE, height: ICON_SIZE}} />
		</div>
	);
};
