import {Burger, Container, Drawer, Group} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import classes from './Header.module.css';
import {Link, NavLink} from "react-router-dom";
import {links} from "../../pages/Router.tsx";



export function Header() {
    const [opened, {toggle}] = useDisclosure(false);

    const linksComponent = (
        links.map((link) => (
            <NavLink
                to={link.link}
                key={link.label}
                className={classes.link}
                onClick={opened ? toggle : undefined}
            >
                {link.label}
            </NavLink>
        ))
    )

    return (
        <header className={classes.header}>
            <Container fluid className={classes.inner}>
                <Container fluid className={classes.left}>
                    <Link to="/" className={classes.titleLogo} >Les SexMaitresses</Link>

                </Container>
                <Group gap={30} visibleFrom="sm">
                    {linksComponent}
                </Group>
                <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="md"/>
                <Drawer
                    position="right"
                    offset={9}
                    opened={opened}
                    onClose={toggle}
                    title="Les SexMaitresses"
                    size="96%"
                >
                    {linksComponent}
                </Drawer>
            </Container>
        </header>
    );
}