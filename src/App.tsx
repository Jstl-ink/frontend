import {Page, PageApi} from "./sdk";
import {useEffect, useState} from "react";
import '@mantine/core/styles.css';
import {MantineProvider, Card, Image, Text} from '@mantine/core';

export default function App() {
    const pageApi = new PageApi()
    const [page, setPage] = useState({} as Page);

    useEffect(() => {
        pageApi.getPageById({pageId: "Arrgh!"}).then(value => setPage(value))
    }, [])

    console.log(page.img)

    return (
        <MantineProvider>
            <main className="p-10 h-screen bg-gray-700">
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <Card.Section component="a" href="https://mantine.dev/">
                        <Image
                            src={page.img}
                            height={160}
                            alt={page.id}
                        />
                    </Card.Section>

                    <Text fw={500}>{page.name}</Text>

                    <Text size="sm" c="dimmed">
                        {page.bio}
                    </Text>

                    {page?.links?.map(link => (
                        <a href={link.link} key={link.link}>
                            {link.name}
                        </a>
                    ))}
                </Card>
            </main>
        </MantineProvider>
    )
}