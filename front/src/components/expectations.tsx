export default function Expectations() {
	return (
		<section className="bg-brand-lightgray w-full py-30 px-15 max-md:py-20 max-md:px-6">
			<div className="max-w-225 mx-auto">
				<h2 className="text-[48px] font-normal tracking-tighter2 mb-12 leading-[1.2] max-md:text-[36px]">
					Ce que vous pouvez (et ne pouvez pas) attendre
				</h2>

				<div className="grid grid-cols-2 gap-20 my-16 max-md:grid-cols-1 max-md:gap-12">
					<div>
						<h3 className="text-[28px] font-semibold mt-0 mb-6 font-sans max-md:text-2xl">
							Vous pouvez attendre
						</h3>
						<ul className="dash-list">
							<li>Un diagnostic sans filtre</li>
							<li>
								Une capacité à voir ce qui ne va pas, même si ce n&apos;est pas
								confortable
							</li>
							<li>La clarification de ce qui était confus</li>
							<li>La formalisation de vos langages</li>
							<li>
								L&apos;écriture stratégique : discours, manifestes,
								positionnements
							</li>
							<li>
								Une direction claire : ce qui doit être arrêté, simplifié ou
								déplacé
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-[28px] font-semibold mt-0 mb-6 font-sans max-md:text-2xl">
							Vous ne pouvez pas attendre
						</h3>
						<ul className="dash-list">
							<li>Un accompagnement long et confortable</li>
							<li>Une promesse de succès</li>
							<li>Des méthodes toutes faites ou des process corporate</li>
							<li>Des slides PowerPoint</li>
							<li>
								Quelqu&apos;un qui valide vos intuitions si elles sont fausses
							</li>
						</ul>
					</div>
				</div>

				<p className="font-semibold italic text-[19px] mb-7">
					Ce que je vais vous dire peut vous déplaire.
				</p>
				<p className="mb-7 text-[19px]">
					Si vous cherchez du réconfort, prenez un coach. <br />
					Si vous cherchez de la lucidité payante, on peut discuter.
				</p>

				<div className="w-20 h-0.5 bg-brand-black my-20"></div>

				<h2 className="text-[48px] font-normal tracking-tighter2 mb-12 leading-[1.2] max-md:text-[36px]">
					Mon positionnement
				</h2>
				<p className="mb-7 text-[19px]">
					Je construis en profondeur, pas en volume. Je ne suis pas confortable.
				</p>
				<p className="mb-7 text-[19px]">
					Je travaille en tête à tête, avec peu de clients, sur des enjeux qui
					me stimulent réellement.
				</p>
				<p className="font-semibold italic text-[19px]">
					Je préfère être payé pour dire ce qui dérange que bien payé pour faire
					ce qui rassure.
				</p>
			</div>
		</section>
	)
}
