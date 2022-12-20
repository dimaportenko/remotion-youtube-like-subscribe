import {AbsoluteFill} from 'remotion';
import {Container} from './Container';
import {Logo} from './Logo';
import {Subtitle} from './Subtitle';
import {Title} from './Title';

export const MyComposition = () => {
	return (
		<AbsoluteFill className="bg-gray-500">
			{/* <div className="m-10" /> */}
			{/* <Logo /> */}
			{/* <div className="m-3" /> */}
			{/* <Title /> */}
			<Container />
		</AbsoluteFill>
	);
};
