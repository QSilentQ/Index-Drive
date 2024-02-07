import React from 'react';
import Download from '../components/Download';
import Header from '../components/Header';
import Protection from '../components/Protection';
import Questions from '../components/Questions';
import SubTitle from '../components/SubTitle';
import Templates from '../components/Templates';
import Footer from '../components/Footer';

export default function LandingPage() {
	return (
		<div>
			<Header />
			<SubTitle />
			<Templates />
			<Protection />
			<Download />
			<Questions />
			<Footer />
		</div>
	);
}
