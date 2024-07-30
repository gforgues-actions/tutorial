import Episode from "../../dto/Episode.ts";
import {Accordion, Collapse, Container, Text} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import classes from './EpisodeItem.module.css';
import AudioPlayer from "../AudioPlayer/AudioPlayer.tsx";

function EpisodeItem({episode}: { episode: Episode }) {

    const [opened, {toggle}] = useDisclosure(false);

    function createMarkup(content: string) {
        return {__html: content};
    }

    return (<Accordion.Item key={episode.title} value={episode.title}>
        <Accordion.Control>
            <div>
                <Text>{episode.title}</Text>
                <Text size="sm" c="dimmed" fw={400}>
                    {episode.date}
                </Text>
            </div>

        </Accordion.Control>

        <Accordion.Panel>
            <AudioPlayer url={episode.mp3} duration={episode.duration} />

            <Container>
                <Text dangerouslySetInnerHTML={createMarkup(episode.description)}/>
                {episode.references.length > 0 && (
                    <>
                    <Text className={classes.reference} onClick={toggle}>Références</Text>
                    <Collapse in={opened}>
                <Text dangerouslySetInnerHTML={createMarkup(episode.references)}/>
            </Collapse></>
            )}

        </Container>
    </Accordion.Panel>
</Accordion.Item>
)

}

export default EpisodeItem;