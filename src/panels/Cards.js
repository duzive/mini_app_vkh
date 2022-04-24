import React from "react";
import PropTypes from "prop-types";

import { Panel, PanelHeader, PanelHeaderBack } from "@vkontakte/vkui";

import photo from "../img/sh1.png";
import photo2 from "../img/sh2.png";
import photo3 from "../img/sh3.png";
import photo4 from "../img/sh4.png";
import photo5 from "../img/sh5.png";
import photo6 from "../img/sh6.png";
import photo7 from "../img/sh7.png";

import "./Cards.css";

const Photo = (props) => (
    <Panel id={props.id}>
        <PanelHeader
            left={<PanelHeaderBack onClick={props.go} data-to="home" />}
        >
            А вот и карточки
        </PanelHeader>
        <img className="Photo" src={photo} alt="Game Photo" />
        <img className="Photo" src={photo2} alt="Game Photo" />
        <img className="Photo" src={photo3} alt="Game Photo" />
        <img className="Photo" src={photo4} alt="Game Photo" />
        <img className="Photo" src={photo5} alt="Game Photo" />
        <img className="Photo" src={photo6} alt="Game Photo" />
        <img className="Photo" src={photo7} alt="Game Photo" />
        <div className="text_end">
            На чьей стороне ты? Выбирай, пока мы сделаем сам сервис
        </div>
    </Panel>
);

Photo.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default Photo;
