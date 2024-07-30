import {Header} from "../components/Header/Header.tsx";
import {Container, Text, Title} from "@mantine/core";

function ErrorPage() {

    return (
        <>
            <Header/>
            <main style={{margin: 'auto', width: '50%', textAlign: 'center', paddingTop: '5em'}}>
                <Container style={{padding: '2em'}}>
                    <Title> 404 </Title>
                    <Text>Désolées! La page que vous avez demandée est introuvable.</Text>
                </Container>
            </main>
        </>
    );
}

export default ErrorPage;