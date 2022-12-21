import React from 'react';
import {Img} from 'remotion';

export const Logo: React.FC<{
	size?: number;
}> = ({size = 150}) => {

	return (
		<div
			style={{
				height: size,
				width: size,
			}}
			className="items-center justify-center rounded-full overflow-hidden"
		>
      <Img src="https://yt3.ggpht.com/JzlBX8_X38PikzIggJTCgHR03Nosi7s0Fqfy9TYRXejKS1ZfCG_0R7Iv3sU4Hp2mFnXL-AdD-Is=s176-c-k-c0x00ffffff-no-rj" />
		</div>
	);
};
