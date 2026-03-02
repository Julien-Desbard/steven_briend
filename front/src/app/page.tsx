import Concretely from '@/components/concretely'
import Expectations from '@/components/expectations'
import Hero from '@/components/hero'
import What from '@/components/what'
import Who from '@/components/who'
import For from '@/components/for'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Nav from '@/components/nav'

export default function Home() {
	return (
		<div>
			<main className='font-serif'>
				<Nav />
				<Hero />
				{/* <!-- IMAGE 1 --> */}
				<div className="w-full h-125 bg-brand-lightgray my-20 flex items-center justify-center text-brand-gray text-sm font-sans tracking-[0.5px] uppercase relative overflow-hidden max-md:h-75 max-md:my-12">
					<span>[ ESPACE POUR VOTRE IMAGE 1 ]</span>
				</div>
				<For />
				<What />
				{/* <!-- IMAGE 2 --> */}
				<div className="w-full h-87.5 bg-brand-lightgray my-12 flex items-center justify-center text-brand-gray text-sm font-sans tracking-[0.5px] uppercase relative overflow-hidden max-md:h-62.5">
					<span>[ ESPACE POUR VOTRE IMAGE 2 ]</span>
				</div>
				<Concretely />
				<Expectations />

				{/* <!-- IMAGE 3 --> */}
				<div className="w-full h-125 bg-brand-lightgray my-20 flex items-center justify-center text-brand-gray text-sm font-sans tracking-[0.5px] uppercase relative overflow-hidden max-md:h-75 max-md:my-12">
					<span>[ ESPACE POUR VOTRE IMAGE 3 ]</span>
				</div>
				<Who />
				<Contact />
				<Footer />
			</main>
		</div>
	)
}
