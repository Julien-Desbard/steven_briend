import Link from "next/link";

export default function Nav() {
	return (
		<nav className="fixed top-0 left-0 right-0 bg-[rgba(250,250,250,0.98)] backdrop-blur-xl border-b border-black/8 py-6 z-1000 font-sans">
			<div className="max-w-350 mx-auto px-15 flex justify-between items-center max-md:px-6">
				<div className="text-[15px] font-semibold tracking-[0.5px] uppercase">
					Stéven Briend
				</div>
				<ul className="list-none flex gap-10 max-md:gap-6">
					<li>
						<Link
							href="#accueil"
							className="text-brand-black no-underline text-sm tracking-[0.3px] hover:opacity-50 transition-opacity duration-300"
						>
							Accueil
						</Link>
					</li>
					<li>
						<Link
							href="#ce-que-je-fais"
							className="text-brand-black no-underline text-sm tracking-[0.3px] hover:opacity-50 transition-opacity duration-300"
						>
							Ce que je fais
						</Link>
					</li>
					<li>
						<Link
							href="#qui-je-suis"
							className="text-brand-black no-underline text-sm tracking-[0.3px] hover:opacity-50 transition-opacity duration-300"
						>
							Qui je suis
						</Link>
					</li>
					<li>
						<Link
							href="#contact"
							className="text-brand-black no-underline text-sm tracking-[0.3px] hover:opacity-50 transition-opacity duration-300"
						>
							Contact
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}
