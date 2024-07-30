import {Avatar, Group, Text, Title} from "@mantine/core";
import About from "../../dto/About.ts";

function AboutItem({about, imageOnRight = false}: { about: About, imageOnRight?:boolean }) {

    function getImgUrl(image: string) {
        return new URL(`../../assets/${image}`, import.meta.url).href;
    }

    const imageDiv = (
        <div>
            <Avatar
                src={getImgUrl(about.image)}
                size={94}
                radius="md"
            />
        </div>
    );

    const textDiv = (
        <div>
            <Title order={2}>
                {about.name}
            </Title>
            <Title order={4}>
                {about.title}
            </Title>
            <Text>
                {about.primaryDescription}
            </Text>
            <Text>
                {about.secondaryDescription}
            </Text>
        </div>
    );

    return (
        <div>
            <Group wrap="nowrap">
                {imageOnRight ? [imageDiv, textDiv]: [textDiv, imageDiv]}

            </Group>
        </div>
    );
}

export default AboutItem;