export default function Concretely() {
	return (
		<section className="max-w-300 mx-auto py-30 px-15 max-md:py-20 max-md:px-6">
			<h2 className="text-[48px] font-normal tracking-tighter2 mb-12 leading-[1.2] max-md:text-[36px]">
				Concrètement
			</h2>
			<p className="text-[24px] leading-[1.6] mb-12 text-brand-gray">
				Trois formats d&apos;intervention, selon vos besoins.
			</p>

			{/* <!-- Format block 1 --> */}
			<div className="format-block bg-white border border-black/8 p-12 my-12 transition-all duration-300 max-md:p-6 max-md:my-8">
				<h3 className="text-[32px] font-semibold mt-0 mb-6 font-sans">
					Session de clarté stratégique
				</h3>
				<p className="mb-7 text-[19px]">
					<strong>Durée :</strong> 1 à 2 jours
				</p>
				<p className="mb-7 text-[19px]">
					Un entretien individuel, franc et non complaisant.
				</p>
				<p className="mb-7 text-[19px]">
					On se pose, en tête à tête. Je questionne, j&apos;analyse, je
					reformule.
				</p>
				<p className="mb-7 text-[19px]">
					Vous repartez avec une vision synthétique :
				</p>
				<ul className="dash-list mb-8">
					<li>de ce qui bloque ou sonne faux,</li>
					<li>de ce qui peut être dit ou clarifié,</li>
					<li>de ce qui doit être acté, le cas échéant.</li>
				</ul>
				<p className="text-base text-brand-gray mt-6 italic">
					(Dans certains cas, je poursuis le travail sur un temps long —
					uniquement lorsque l&apos;enjeu le justifie et que la relation le
					permet.)
				</p>
			</div>

			{/* <!-- Format block 2 --> */}
			<div className="format-block bg-white border border-black/8 p-12 my-12 transition-all duration-300 max-md:p-6 max-md:my-8">
				<h3 className="text-[32px] font-semibold mt-0 mb-6 font-sans">
					Accompagnement éditorial
				</h3>
				<p className="mb-7 text-[19px]">
					<strong>Durée :</strong> 2 à 4 mois
				</p>
				<p className="mb-7 text-[19px]">
					Quand la session révèle des incohérences ou des angles morts dans
					votre discours, je poursuis le travail sur plusieurs mois :
				</p>
				<ul className="dash-list mb-8">
					<li>Clarification de votre stratégie de prise de parole</li>
					<li>
						Formalisation éditoriale (discours, manifestes, chartes,
						positionnements)
					</li>
					<li>
						Construction d&apos;une cohérence entre vos langages internes et
						externes
					</li>
				</ul>
				<p className="text-base text-brand-gray mt-6 italic">
					Format : sessions mensuelles + écriture.
				</p>
			</div>

			{/* <!-- Format block 3 --> */}
			<div className="format-block bg-white border border-black/8 p-12 my-12 transition-all duration-300 max-md:p-6 max-md:my-8">
				<h3 className="text-[32px] font-semibold mt-0 mb-6 font-sans">
					Direction créative
				</h3>
				<p className="mb-7 text-[19px]">
					Là aussi, lorsque le projet le requiert.
				</p>
			</div>
		</section>
	)
}
