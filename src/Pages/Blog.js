import React, { Component} from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';



export default class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
            <h2 className="text-center mt-5 mb-3"> </h2>
                <Col md={12}>
                    <Card className="mb-3">
                            <Card.Img variant="top" src="https://vklybe.tv/places/poster_577d55e897f92.png" />
                        <Card.Body>
                                <Card.Text>Для артистов и сотрудников работает служебных вход, есть въездные ворота, зона разгрузки оборудования и охраняемая парковка, кроме того, отдельные двери работают для VIP-гостей. Заведение расположено на территории самого событийного и динамично развивающегося пространства города «Севкабель Порт». Буквально 10 шагов до моря.

Главное – в BASSCL представлен лучший в Петербурге базовый комплект звука и света. 28 позиций усилителей, сабвуферов и акустических систем. Светодиодный экран, 19 световых приборов полного движения, дым-машины и вентиляторы. Для мощного шоу, ночной вечеринки или камерного мероприятия есть абсолютно всё.

BASSCL – это место, где город встречается с морем. И здесь рождается звук.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                </Row>
                </Container>
        )
    }
}
