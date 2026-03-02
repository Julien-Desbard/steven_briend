export default function Hero() {
	return (
		<>
			<div
				id="hero"
				className="min-h-[85vh] flex flex-col justify-center items-center text-center pt-35 pb-25 px-15 bg-brand-lightgray relative overflow-hidden max-md:min-h-[70vh] max-md:pt-30 max-md:pb-20 max-md:px-6"
			>
				<div className="absolute inset-0 bg-linear-to-br from-[rgba(250,250,250,0.95)] to-[rgba(245,245,245,0.9)] z-10"></div>
				<div className="relative z-20 max-w-225">
					<h1 className="text-[72px] font-normal tracking-tightest leading-[1.1] mb-8 font-serif max-md:text-[42px]">
						Clarté stratégique
					</h1>
					<p className="text-[28px] text-brand-gray mb-12 font-light leading-normal max-md:text-[22px]">
						J&apos;aide les dirigeants à voir clair
						<br />
						et à exprimer juste.
					</p>
					<p className="text-[20px] leading-[1.7] max-w-175 mx-auto mb-12 text-brand-accent max-md:text-lg">
						Quand quelque chose coince dans votre positionnement, votre
						discours, ou votre organisation. Je construis en profondeur, pas en
						volume.
					</p>
					<a
						href="#contact"
						className="cta inline-block bg-brand-black text-brand-white py-4.5 px-12 no-underline text-[15px] font-medium tracking-[0.5px] transition-all duration-300 font-sans uppercase"
					>
						Parlons-en
					</a>
				</div>
			</div>
		</>
	)
}
