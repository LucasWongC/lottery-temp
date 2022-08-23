import React, { useState, useEffect, useRef} from 'react';
import { Container, Row, Col, Image} from 'react-bootstrap';
import './About.scss';
import Marquee from 'react-fast-marquee';
import Wheel from 'lottery-wheel';
import Button from 'react-bootstrap/Button';

const About = () => {
	const [img, setImg] = useState('');
	const setLevel = (level) => {
		if (level == 1) {
			const wheel = new Wheel({
				el: document.getElementById('wheel'),
				data: [{
					text: 'NFT1',
					color: '#ffffff',
					fontSize: 24
				}, {
					text: 'EMPTY',
					color: 'silver',
					fontSize: 24
				}, {
					text: 'EMPTY',
					color: 'silver',
					fontSize: 24
				}, {
					text: 'EMPTY',
					color: 'silver',
					fontSize: 24
				}, {
					text: 'SPECIAL',
					color: '#ffdbc5',
					fontSize: 24
				}, {
					text: 'EMPTY',
					color: 'silver',
					fontSize: 24
				}, {
					text: 'EMPTY',
					color: 'silver',
					fontSize: 24
				}, {
					text: 'NFT2',
					color: '#ffffff',
					fontSize: 24
				}, {
					text: 'EMPTY',
					color: 'silver',
					fontSize: 24
				}, {
					text: 'EMPTY',
					color: 'silver',
					fontSize: 24
				}, {
					text: 'EMPTY',
					color: 'silver',
					fontSize: 24
				}, {
					text: 'EMPTY',
					color: 'silver',
					fontSize: 24
				}],
				draw: true,
				buttonText: 'Play',
				radius: 300,
				onSuccess: (result) => {
					if (result.text == 'SPECIAL')
						setImg('./images/special.png');
					if (result.text == 'EMPTY')
						setImg('./images/empty.png');
					if ((result.text != "SPECIAL") && (result.text != 'EMPTY')) {
						setImg('./images/' + result.text.substr(3, 1) + '.png');

					}
				},
				onButtonHover: () => {
					setImg('');
				}
			});
		}
		if (level == 2) {
			const wheel = new Wheel({
				el: document.getElementById('wheel'),
				data: [{
					text: 'NFT1',
					color: '#ffffff',
					fontSize: 24
				}, {
					text: 'EMPTY',
					color: 'silver',
					fontSize: 24
				},{
					text: 'NFT2',
					color: '#ffffff',
					fontSize: 24
				}, {
					text: 'EMPTY',
					color: 'silver',
					fontSize: 24
				}, {
					text: 'SPECIAL',
					color: '#ffdbc5',
					fontSize: 24
				}, {
					text: 'EMPTY',
					color: 'silver',
					fontSize: 24
				}, {
					text: 'NFT3',
					color: '#ffffff',
					fontSize: 24
				}, {
					text: 'EMPTY',
					color: 'silver',
					fontSize: 24
				}, {
					text: 'EMPTY',
					color: 'silver',
					fontSize: 24
				}, {
					text: 'EMPTY',
					color: 'silver',
					fontSize: 24
				}, {
					text: 'NFT4',
					color: '#ffffff',
					fontSize: 24
				}, {
					text: 'EMPTY',
					color: 'silver',
					fontSize: 24
				}],
				draw: true,
				buttonText: 'Play',
				radius: 300,
				onSuccess: (result) => {
					if (result.text == 'SPECIAL')
						setImg('./images/special.png');
					if (result.text == 'EMPTY')
						setImg('./images/empty.png');
					if ((result.text != "SPECIAL") && (result.text != 'EMPTY')) {
						setImg('./images/' + result.text.substr(3, 1) + '.png');
					}
				},
				onButtonHover: () => {
					setImg('');
				}
			});
		}
		if (level == 3) {
			const wheel = new Wheel({
				el: document.getElementById('wheel'),
				data: [{
					text: 'NFT1',
					color: '#ffffff',
					fontSize: 24
				}, {
					text: 'NFT2',
					color: '#ffffff',
					fontSize: 24
				}, {
					text: 'NFT3',
					color: '#ffffff',
					fontSize: 24
				}, {
					text: 'NFT4',
					color: '#ffffff',
					fontSize: 24
				}, {
					text: 'SPECIAL',
					color: '#ffdbc5',
					fontSize: 24
				}, {
					text: 'NFT5',
					color: '#ffffff',
					fontSize: 24
				}, {
					text: 'NFT6',
					color: '#ffffff',
					fontSize: 24
				}, {
					text: 'NFT7',
					color: '#ffffff',
					fontSize: 24
				}, {
					text: 'NFT8',
					color: '#ffffff',
					fontSize: 24
				}, {
					text: 'NFT9',
					color: '#ffffff',
					fontSize: 24
				}],
				draw: true,
				buttonText: 'Play',
				radius: 300,
				onSuccess: (result) => {
					if (result.text == 'SPECIAL')
						setImg('./images/special.png');
					if (result.text == 'EMPTY')
						setImg('./images/empty.png');
					if ((result.text != "SPECIAL") && (result.text != 'EMPTY')) {
						setImg('./images/' + result.text.substr(3, 1) + '.png');
					}
				},
				onButtonHover: () => {
					setImg('');
				}
			});
		}
	};
	useEffect(() => {
		const wheel = new Wheel({
			el: document.getElementById('wheel'),
			data: [{
				text: 'NFT1',
				color: '#ffffff',
				fontSize: 24
			}, {
				text: 'EMPTY',
				color: 'silver',
				fontSize: 24
			}, {
				text: 'EMPTY',
				color: 'silver',
				fontSize: 24
			}, {
				text: 'EMPTY',
				color: 'silver',
				fontSize: 24
			}, {
				text: 'SPECIAL',
				color: '#ffdbc5',
				fontSize: 24
			}, {
				text: 'EMPTY',
				color: 'silver',
				fontSize: 24
			}, {
				text: 'EMPTY',
				color: 'silver',
				fontSize: 24
			}, {
				text: 'NFT2',
				color: '#ffffff',
				fontSize: 24
			}, {
				text: 'EMPTY',
				color: 'silver',
				fontSize: 24
			}, {
				text: 'EMPTY',
				color: 'silver',
				fontSize: 24
			}, {
				text: 'EMPTY',
				color: 'silver',
				fontSize: 24
			}, {
				text: 'EMPTY',
				color: 'silver',
				fontSize: 24
			}],
			draw: true,
			buttonText: 'Play',
			radius: 300,
			onSuccess: (result) => {
				if (result.text == 'SPECIAL')
						setImg('./images/special.png');
				if (result.text == 'EMPTY')
					setImg('./images/empty.png');
				if ((result.text != "SPECIAL") && (result.text != 'EMPTY')) {
					setImg('./images/' + result.text.substr(3, 1) + '.png');
				}
			},
			onButtonHover: () => {
				setImg('');
			}
		  });
	}, []);


	return (
		<section className="about" id="about">
			<Container>
				<Row>
					<Col lg="2">
						<div className='button-group'>
							<Button variant='outline-success' onClick={() => setLevel(1)}>Level 1</Button>{' '}
							<br/><br/>
							<Button variant='outline-success' onClick={() => setLevel(2)}>Level 2</Button>{' '}
							<br/><br/>
							<Button variant='outline-success' onClick={() => setLevel(3)}>Level 3</Button>{' '}
							<br/><br/>
						</div>
					</Col>
					<Col lg="5">
						<svg id="wheel"></svg>
					</Col>
					<Col lg="5">
						<img  class="resultImg" src={ img } style={{ width: '50%' }}></img>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default About;
