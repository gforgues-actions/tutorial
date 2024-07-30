import {Container, Image, SimpleGrid, Text, Title} from '@mantine/core';
import image from '../../assets/logo-big.png';
import classes from './MainBody.module.css';

export function MainBody() {

    return (
        <Container my="md">
            <SimpleGrid cols={{base: 1, sm: 2}} spacing="xl">
                <div style={{width:'100%'}}>
                    <Image src={image} className={classes.image}/>
                </div>
                <div>
                    <Title className={classes.title}>
                        Les SexMaitresses
                    </Title>
                    <Text c="dimmed" mt="md">
                        Salut! Vous écoutez les SexMaitresses, Audrey, Sarah et Valérie, diplômées de la maîtrise en
                        sexologie et féministes du plus profond de notre âme. Que vous soyez calé(e)s ou novices en la
                        matière, on vous parle de sujets sexo, de sujets féministes parsemés d’anecdotes cocasses. De
                        notre salon, on vous invite à nos conversations pour rire, rager… et peut-être en apprendre un
                        peu. Bonne écoute!
                    </Text>
                </div>
            </SimpleGrid>
        </Container>
    );
}