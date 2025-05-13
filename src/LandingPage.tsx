import {IconBrandGithub, IconChevronRight} from '@tabler/icons-react';
const handle = import.meta.env.VITE_SHOWCASE_PAGE_HANDLE

export default function LandingPage() {

    return (
        <div className=" pb-6 sm:pb-8 lg:pb-12">
            <div className="mx-auto max-w-screen-2xl px-8 md:px-8">
                <header className="mb-8 flex items-center justify-between py-4 md:mb-12 md:py-8 xl:mb-16">
                    <a href="/" className="inline-flex items-center gap-3 text-2xl font-bold md:text-3xl"
                       aria-label="logo">
                        <span>🤯</span> Jstl.ink
                    </a>
                </header>

                <section className="mb-8 flex flex-col justify-around gap-6 md:mb-16 lg:flex-row">
                    <div className="flex flex-col justify-center text-center lg:py-12 lg:text-left xl:w-5/12">

                        <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:mb-6 md:text-6xl">The bio link
                            reinvented<br/> - dramatically.</h1>

                        <p className="mb-8 italic font-semibold text-gray-500 md:mb-12 md:text-lg xl:text-xl">You're
                            welcome.</p>

                        <div className="flex gap-2.5 justify-center lg:justify-start">
                            <a href="/creator"
                               className="inline-block text-center outline-none ring-indigo-300
                               focus-visible:ring active:bg-indigo-700 md:text-base relative overflow-hidden
                               rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400
                               focus:ring-offset-2 focus:ring-offset-slate-50">
                                <span
                                    className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
                                <span
                                    className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950/90 px-6 py-4 md:text-2xl font-medium text-white backdrop-blur-3xl gap-2">
                                    Create your page
                                    <IconChevronRight/>
                                </span>
                            </a>
                        </div>
                    </div>

                    <div
                        className="h-full w-full lg:w-[70%] rounded-lg overflow-hidden shadow-lg lg:h-96 xl:w-5/12 border-slate-500 border-2">
                        <iframe
                            className="rounded-lg  h-full w-full object-cover object-center overflow-hidden"
                            src={"https://jstl.ink.paulus.rocks/" + handle}></iframe>
                    </div>
                </section>

                <section
                    className="flex flex-col items-center justify-between gap-10 border-t pt-8 lg:flex-row lg:gap-8">
                    <div className="-mx-6 grid grid-cols-2 gap-4 md:-mx-8 md:flex md:divide-x">
                        {[["100%", "Free"], ["Unlimited", "Links"], ["2+", "Users"]].map((item, index) => (
                            <div key={index} className="px-6 md:px-8">
                            <span
                                className="block text-center text-lg font-bold md:text-left md:text-xl">{item[0]}</span>
                                <span
                                    className="block text-center text-sm font-semibold text-gray-500 md:text-left md:text-base">{item[1]}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-center gap-4 lg:justify-start">
                        <div className="flex gap-4">
                            <a href="https://github.com/Jstl-ink" target="_blank"
                               className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                                <IconBrandGithub stroke={2}/>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}