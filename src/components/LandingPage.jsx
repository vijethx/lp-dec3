import React from "react";

const LandingPage = () => {
	return (
		<div className="landingPage">
			<img
				src="lp.svg"
				alt=""
			/>
			<div className="form">
				<h3>Enter your User ID to play</h3>
				<input
					type="text"
					placeholder="Enter your user id here..."
				/>
				<button>
					Play Now <span className="arrow">🡪</span>
				</button>
			</div>
		</div>
	);
};

export default LandingPage;
