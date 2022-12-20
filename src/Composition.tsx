import {AbsoluteFill} from 'remotion';
import {Container} from './Container';

export const MyComposition = () => {
	return (
		<AbsoluteFill className="bg-gray-500">
			<Container />
		</AbsoluteFill>
	);
};
