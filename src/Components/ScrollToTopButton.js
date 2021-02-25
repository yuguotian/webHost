import React , {useEffect, useState } from 'react'

export default function ScrollToTop() {
	const [isVisible, setIsVisible] = useState(false);

	const changeVisibility = () => {
		if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	}

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}

	useEffect(() => {
		window.addEventListener("scroll", changeVisibility);
	}, []);

	return (
		<div className="scroll-to-top">
			{isVisible && (
				<button onClick={scrollToTop} id="topButton" title="Back to top"> Back to Top </button>
			)}
		</div>
	);
}