import { Application, Assets, BlurFilter, Container, Sprite, Texture, } from 'pixi.js';

import iconSeven from '../images/icon-7.png';
import iconOHF from '../images/icon-150.png';
import iconBell from '../images/icon-bell.png';
import iconChery from '../images/icon-chery.png';
import iconCoin from '../images/icon-coin.png';
import iconGrape from '../images/icon-grape.png';
import iconPlum from '../images/icon-plum.png';
import iconMajor from '../images/icon-major.png';
import iconMega from '../images/icon-mega.png';
import iconMinor from '../images/icon-minor.png';
import iconJoker from '../images/icon-joker.png';

(async () => {
	// Create a new application
	const app = new Application();

	// Initialize the application
	await app.init({ backgroundAlpha: 0, width: 900, height: 600, text: 'center' });

	// Append the application canvas to the document body
	document.getElementById('app').appendChild(app.canvas);

	// Load the textures
	await Assets.load([
		iconSeven,
		iconOHF,
		iconBell,
		iconChery,
		iconCoin,
		iconGrape,
		iconPlum,
		iconMajor,
		iconMega,
		iconMinor,
		iconJoker,
	]);

	const REEL_WIDTH = 340;
	const SYMBOL_SIZE = 200;

	// Create different slot symbols
	const slotTextures = [
		Texture.from(iconSeven),
		Texture.from(iconOHF),
		Texture.from(iconBell),
		Texture.from(iconChery),
		Texture.from(iconCoin),
		Texture.from(iconGrape),
		Texture.from(iconPlum),
		Texture.from(iconMajor),
		Texture.from(iconMega),
		Texture.from(iconMinor),
		Texture.from(iconJoker),
	];

	// Build the reels
	const reels = [];
	const reelContainer = new Container();

	for (let i = 0; i < 3; i++) {
		const rc = new Container();

		rc.x = i * REEL_WIDTH;
		reelContainer.addChild(rc);

		const reel = {
			container: rc,
			symbols: [],
			position: 0,
			previousPosition: 0,
			blur: new BlurFilter(),
		};

		reel.blur.blurX = 0;
		reel.blur.blurY = 0;
		rc.filters = [reel.blur];

		// Build the symbols
		for (let j = 0; j < 10; j++) {
			const symbol = new Sprite(slotTextures[Math.floor(Math.random() * slotTextures.length)]);
			// Scale the symbol to fit symbol area.

			symbol.y = j * SYMBOL_SIZE;
			symbol.scale.x = symbol.scale.y = Math.min(SYMBOL_SIZE / symbol.width, SYMBOL_SIZE / symbol.height);
			symbol.x = Math.round((SYMBOL_SIZE - symbol.width) / 2);
			reel.symbols.push(symbol);
			rc.addChild(symbol);
		}
		reels.push(reel);
	}

	app.stage.addChild(reelContainer);

	let running = false;

	// Function to start playing.
	function startPlay() {
		if (running) return;
		running = true;

		for (let i = 0; i < reels.length; i++) {
			const r = reels[i];
			const extra = 8;
			const target = r.position + 10 + i * 15 + extra;
			const time = 2500 + i * 200 + extra * 200;

			tweenTo(r, 'position', target, time, backout(0.5), null, i === reels.length - 1 ? reelsComplete : null);
		}
	}

	// Reels done handler.
	function reelsComplete() {
		running = false;
	}

	// Listen for animate update.
	app.ticker.add(() => {
		// Update the slots.
		for (let i = 0; i < reels.length; i++) {
			const r = reels[i];
			// Update blur filter y amount based on speed.
			// This would be better if calculated with time in mind also. Now blur depends on frame rate.

			r.blur.blurY = (r.position - r.previousPosition) * 8;
			r.previousPosition = r.position;

			// Update symbol positions on reel.
			for (let j = 0; j < r.symbols.length; j++) {
				const s = r.symbols[j];
				const prevy = s.y;

				s.y = ((r.position + j) % r.symbols.length) * SYMBOL_SIZE - SYMBOL_SIZE;
				if (s.y < 0 && prevy > SYMBOL_SIZE) {
					// Detect going over and swap a texture.
					// This should in proper product be determined from some logical reel.
					s.texture = slotTextures[Math.floor(Math.random() * slotTextures.length)];
					s.scale.x = s.scale.y = Math.min(SYMBOL_SIZE / s.texture.width, SYMBOL_SIZE / s.texture.height);
					s.x = Math.round((SYMBOL_SIZE - s.width) / 2);
				}

				if ((i === 0 && j === 4) || (i === 1 && j === 9) || (i === 2 && j === 4) || (i === 3 && j === 9) || (i === 4 && j === 4)) {
					s.texture = slotTextures[Math.floor(7)];
					s.scale.x = s.scale.y = Math.min(SYMBOL_SIZE / s.texture.width, SYMBOL_SIZE / s.texture.height);
					s.x = Math.round((SYMBOL_SIZE - s.width) / 2);
				}
			}
		}
	});

	// Very simple tweening utility function. This should be replaced with a proper tweening library in a real product.
	const tweening = [];

	function tweenTo(object, property, target, time, easing, onchange, oncomplete) {
		const tween = {
			object,
			property,
			propertyBeginValue: object[property],
			target,
			easing,
			time,
			change: onchange,
			complete: oncomplete,
			start: Date.now(),
		};

		tweening.push(tween);

		return tween;
	}

	// Listen for animate update.
	app.ticker.add(() => {
		const now = Date.now();
		const remove = [];

		for (let i = 0; i < tweening.length; i++) {
			const t = tweening[i];
			const phase = Math.min(1, (now - t.start) / t.time);

			t.object[t.property] = lerp(t.propertyBeginValue, t.target, t.easing(phase));
			if (t.change) t.change(t);
			if (phase === 1) {
				t.object[t.property] = t.target;
				if (t.complete) t.complete(t);
				remove.push(t);
			}
		}
		for (let i = 0; i < remove.length; i++) {
			tweening.splice(tweening.indexOf(remove[i]), 1);
		}
	});

	// Basic lerp funtion.
	function lerp(a1, a2, t) {
		return a1 * (1 - t) + a2 * t;
	}

	// Backout function from tweenjs.
	function backout(amount) {
		return (t) => --t * t * ((amount + 1) * t + amount) + 1;
	}

	const elements = {
		btn: document.querySelector('.btn_spin'),
		winner: document.querySelector('.winner'),
		winElements: document.querySelectorAll('.win'),
		modalOverlay: document.querySelector('.modal_overlay'),
		modalSignup: document.querySelector('.modal_signup'),
		textSpin: document.querySelector('.text-win'),
		arrows: document.querySelector('.arrows-wrap'),
		sounds: {
			win: new Audio('https://n1md7.github.io/slot-game/sound/win.mp3'),
			spin: new Audio('https://n1md7.github.io/slot-game/sound/spin.mp3'),
		}
	};

	const addClassWithDelay = (elements, className, delay) => {
		elements.forEach((element, index) => {
			setTimeout(() => {
				element.classList.add(className);
			}, index * delay);
		});
	};

	const showModal = (overlay, modal, delay) => {
		setTimeout(() => {
			overlay.classList.add('show');
			modal.classList.add('show');
		}, delay);
	};

	const winnerShow = () => {
		setTimeout(() => {
			elements.sounds.win.play();
			elements.winner.classList.add('active');
			addClassWithDelay(elements.winElements, 'active', 10);
		}, 3800);
		setTimeout(() => {
			elements.arrows.classList.add('active');
		}, 4200);
		setTimeout(() => {
			elements.textSpin.classList.add('active');
		}, 5500);
		showModal(elements.modalOverlay, elements.modalSignup, 9000);
	};

	elements.btn.addEventListener('click', () => {
		//updateTimer();
		elements.sounds.spin.play();
		startPlay();
		winnerShow();
		elements.btn.style.opacity = 0.5;
		elements.btn.style.pointerEvents = 'none';
	});
})();
