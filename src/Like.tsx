import React from 'react';
import {Img} from 'remotion';
import LikeIcon from '../assets/icons/thumbup-outlined-24px.svg';

export const Like: React.FC<{size?: number}> = ({size = 34}) => {
	return (
		<div style={{width: size}}>
			<Img src={LikeIcon} style={{height: size, width: size}} />
		</div>
	);
};
