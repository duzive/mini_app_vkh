import React from "react";
import PropTypes from "prop-types";

import {
    Panel,
    PanelHeader,
    Header,
    Button,
    Group,
    Div,
} from "@vkontakte/vkui";

const Home = ({ id, go, fetchedUser }) => (
    <Panel id={id}>
        <PanelHeader>Находка для шпиона</PanelHeader>
        {fetchedUser && (
            <Group
                header={
                    <Header mode="secondary">
                        Здесь вы можете посмотреть карточки для игры
                    </Header>
                }
            >
                {
                    <Header mode="secondary">
                        Для просмотра тыкните на кнопку
                    </Header>
                }
            </Group>
        )}
        <Div>
            <Button
                stretched
                size="l"
                mode="secondary"
                onClick={go}
                data-to="persik"
            >
                Тык
            </Button>
        </Div>
    </Panel>
);

Home.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    fetchedUser: PropTypes.shape({
        first_name: PropTypes.string,
        last_name: PropTypes.string,
    }),
};

export default Home;
