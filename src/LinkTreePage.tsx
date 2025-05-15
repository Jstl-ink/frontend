import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandThreads,
    IconWorld
} from '@tabler/icons-react';
import {IconBrandTwitter} from "@tabler/icons-react";
import {Page} from "./sdk";

interface LinkTreePageProps {
    page: Page
}

export default function LinkTreePage({page}: LinkTreePageProps) {
    return (
        <div className="min-h-screen text-white flex flex-col items-center font-sans">
            {page?.img && <img
                src={page?.img}
                alt={page?.name}
                className="mask-b-from-70% w-full h-60 object-top object-cover"
            />}
            <div className="p-8 w-full flex flex-col items-center">
                <h1 className="text-2xl font-bold">{page?.name}</h1>
                <p className="text-gray-400 mb-8">{page?.bio}</p>

                <div className="w-full max-w-sm flex flex-row flex-wrap justify-center gap-3">

                    {page?.socialLinks?.map((link) => (
                        <a
                            key={link.name}
                            href={link?.link}
                            className="text-white hover:text-gray-400"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {getSocialIcon(link.name)}
                        </a>
                    ))}
                </div>

                <div className="mt-5 w-full max-w-sm flex flex-col gap-3">

                    {page?.links?.map((link) => (
                        <a
                            key={link.name}
                            href={link?.link}
                            className="bg-gray-950 p-3 rounded-xl text-white no-underline flex justify-between items-center border border-gray-700"
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
        </div>
    )
}

function getSocialIcon(name: string) {
    switch (name.toLowerCase()) {
        case 'instagram':
            return <IconBrandInstagram size={46} stroke={1.5}/>;
        case 'twitter':
            return <IconBrandTwitter size={46} stroke={1.5}/>;
        case 'linkedin':
            return <IconBrandLinkedin size={46} stroke={1.5}/>;
        case 'facebook':
            return <IconBrandFacebook size={46} stroke={1.5}/>;
        case 'threads':
            return <IconBrandThreads size={46} stroke={1.5}/>;
        default:
            return <IconWorld size={46} stroke={1.5}/>;
    }
}