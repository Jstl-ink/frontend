import {Configuration, Page, PageApi} from "./sdk";
import {useEffect, useState} from "react";
import NotFound from "./NotFound.tsx";
import LandingPage from "./LandingPage.tsx";
import LinkTreePage from "./LinkTreePage.tsx";

export default function App() {
    const pageApi = new PageApi(new Configuration({basePath: 'https://api.jstl.ink.paulus.rocks'}))
    const [page, setPage] = useState<Page>();
    const [error, setError] = useState(false);
    const [showLanding, setShowLanding] = useState(true);

    useEffect(() => {
        if (window.location.pathname.slice(1)) {
            setShowLanding(false);
            pageApi.getPageByHandle({handle: decodeURI(window.location.pathname.slice(1))})
                .then(value => setPage(value))
                .catch((v) => {setError(true); console.log(v)});
        }
    }, [])

    if(showLanding){
        return <LandingPage />
    } else if(error){
        return <NotFound />
    } else {
        return <LinkTreePage />
    }
}