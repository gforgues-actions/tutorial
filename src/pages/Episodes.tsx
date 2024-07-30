import {Accordion, Container, Title} from "@mantine/core";
import {useLoaderData} from "react-router-dom";
import EpisodeItem from "../components/EpisodeItem/EpisodeItem.tsx";
import parseRss from "../util/RssParser.ts";

function EpisodesPage() {

    const data = useLoaderData() as string;
    const episodes = parseRss(data);

    return (
        <>
            <Container>
                <Title>Episodes</Title>
                <Accordion variant="separated" defaultValue={episodes[0].title}>
                    {episodes.map((episode) => (
                        <EpisodeItem key={episode.title} episode={episode}/>
                    ))}
                </Accordion>

            </Container>

        </>
    );
}

export default EpisodesPage;
