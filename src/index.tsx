import { render } from 'preact';

import { CoverGallery } from './components/CoverGallery';
import { Header } from './components/Header';

import './style.css';

export function App() {
	return (
		<div>
			<Header />
			<CoverGallery
				slides={[
					{
						id: 1,
						imgSrc: '/gallery/design.webp',
						content: (
							<div>
								<h2>Design</h2>
								<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>
							</div>
						),
					},
					{
						id: 2,
						imgSrc: '/gallery/motion.webp',
						content: (
							<div>
								<h2>Motion</h2>
								<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>
							</div>
						),
					},
					{
						id: 3,
						imgSrc: '/gallery/engine.webp',
						content: (
							<div>
								<h2>Engine</h2>
								<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>
							</div>
						),
					},
				]}
			/>
		</div>
	);
}

function Resource(props) {
	return (
		<a href={props.href} target="_blank" class="resource">
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	);
}

render(<App />, document.getElementById('app'));
