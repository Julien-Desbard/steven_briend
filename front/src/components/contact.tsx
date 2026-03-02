export default function Contact() {
	return (
		<section
			id="contact"
			className="bg-brand-black text-brand-white text-center w-full py-30 px-15 max-md:py-20 max-md:px-6"
		>
			<h2 className="text-5xl font-serif font-normal tracking-tighter2 mb-8 leading-[1.2] text-brand-white max-md:text-[36px]">
				Si ça résonne
			</h2>
			<p className="text-white/80 text-[20px] mb-7">
				Contactez-moi.
				<br />
				On commence par une conversation. Pas de vente, juste un échange.
			</p>
			<p className="text-white/80 text-[20px]">
				Si ça matche, on avance.
				<br />
				Sinon, je vous dirai pourquoi.
			</p>

			<div className="mt-16 text-lg leading-loose">
				<p className="text-white/80">
					<strong>Email :</strong>{' '}
					<a
						href="mailto:briend@free.fr"
						className="text-white no-underline border-b border-white/30 hover:border-white transition-all duration-300"
					>
						briend@free.fr
					</a>
				</p>
				<p className="text-white/80">
					<strong>LinkedIn :</strong>{' '}
					<a
						href="https://www.linkedin.com/in/st%C3%A9ven-briend-1b272862/"
						target="_blank"
						className="text-white no-underline border-b border-white/30 hover:border-white transition-all duration-300"
					>
						Stéven Briend
					</a>
				</p>
				<p className="text-white/80">
					<strong>Téléphone :</strong> +33 6 22 19 04 90
				</p>
			</div>
		</section>
	)
}
