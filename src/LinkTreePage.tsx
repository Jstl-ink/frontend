import {IconBrandInstagram} from '@tabler/icons-react';
import {Configuration, Link, Page, PageApi} from "./sdk";
import {useEffect, useState} from "react";

export default function LinkTreePage() {

    const pageApi = new PageApi(new Configuration({basePath: 'https://api.jstl.ink.paulus.rocks'}))
    const [page, setPage] = useState<Page>();
    const [error, setError] = useState(false);
    const [showLanding, setShowLanding] = useState(true);

    useEffect(() => {
        if (window.location.pathname.slice(1)) {
            setShowLanding(false);
            pageApi.getPageByHandle({handle: decodeURI(window.location.pathname.slice(1))})
                .then(value => setPage(value))
                .catch((v) => {
                    setError(true);
                    console.log(v)
                });
        }
    }, [])

    return (
        <div className="min-h-screen text-white flex flex-col items-center p-8 font-sans">
            <img
                src={page?.img}
                alt={page?.name}
                className="w-30 h-30 rounded-full border-2 border-gray-600 mb-4"
            />
            <h1 className="text-2xl font-bold">{page?.name}</h1>
            <p className="text-gray-400 mb-8">{page?.bio}</p>

            <div className="w-full max-w-sm flex flex-col gap-3">

                {page?.socialLinks?.map((link:Link) => (
                    <a
                        key={link.name}
                        href={link?.link}
                        className="bg-gray-800 p-3 rounded-xl text-white no-underline flex justify-between items-center border border-gray-700"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                                                         <span className="flex items-center gap-2">

                                                             <span>{link?.name}</span>
                                                         </span>
                        <span className="text-gray-500">↗</span>
                    </a>
                ))}
            </div>

            <div className="mt-5 w-full max-w-sm flex flex-col gap-3">

                {page?.links?.map((link:Link) => (
                    <a
                        key={link.name}
                        href={link?.link}
                        className="bg-gray-800 p-3 rounded-xl text-white no-underline flex justify-between items-center border border-gray-700"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                                                         <span className="flex items-center gap-2">

                                                             <span>{link?.name}</span>
                                                         </span>
                        <span className="text-gray-500">↗</span>
                    </a>
                ))}
            </div>
        </div>
    )
}