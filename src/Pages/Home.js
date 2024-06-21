import React, { Component} from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import './Home.css';
import { Link } from 'react-router-dom';
import CardBody from '../../node_modules/react-bootstrap/esm/CardBody';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';


export default class Blog extends Component {
    render() {
      return (
        <div className="main-container">
          {/* <h1 className="text-center">Популярное</h1> */}
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://img.banket.ru/restaurants/restaurant_1469/gallery/file3ee775fa14eff9bd895c075bc9d13372.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>BASSCL</h3>
                <p>Севкабель порт</p>
              </Carousel.Caption>
            </Carousel.Item>
            {/* след карусель если надо */}
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://mc-guide.ru/wp-content/uploads/2022/07/glav.jpeg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>BASSCL</h3>
                <p>Севкабель порт</p>
          <hr/>
              </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                      <img
                          className="d-block w-100"
                          src="https://www.gdebar.ru/data/app/bar/img/gallery/10800/251430.webp"
                          alt="First slide"
                      />
                      <Carousel.Caption>
                          <h3>BASSCL</h3>
                <p>Севкабель порт</p>
                          <hr />
                      </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                      <img
                          className="d-block w-100"
                          src="https://eventmoskva.ru/bitrix/templates/EventMoskva/img/places/atmosphere/thumbs/4.jpg"
                          alt="First slide"
                      />
                      <Carousel.Caption>
                          <h3>BASSCL</h3>
                <p>Севкабель порт</p>
                          <hr />
                      </Carousel.Caption>
                  </Carousel.Item>
              </Carousel>

          <Container>
            <h2 className="text-center mt-5 mb-3">О клубе</h2>
              <Col md={12}>
                <Card>
                  <Card.Body>
                    <Card.Title>BASSCL</Card.Title>
                    <Card.Text> Что же такое BASSCL?

2500 кв.м площади, где можно проводить мероприятия любого формата: от камерных закрытых событий до масштабных концертов популярных артистов. Два этажа, которые можно зонировать абсолютно по разному: разделить на фан-зону и танцевальный партер, разместить сидячие места, добавить кресла или танцпол на балконе.</Card.Text>
                    <Link to="/blog">Подробнее</Link> 
                  </Card.Body>
                </Card>
              </Col>
              {/* след товар */}
            <h2 className="text-center mt-5 mb-3">Афиша</h2>
            <Row>
              <Col md={3}>
                <Card>
                  <Card.Img variant="top" src="https://images.radario.ru/images/afficheevent/cd68aae0fee144e5b5cb39987e621082.jpg" />
                  <CardBody>
                    <Link to="/gallery">Купить билет</Link> 
                  </CardBody>
                </Card>
              </Col>
              {/* след акции */}
              <Col md={3}>
                <Card>
                  <Card.Img variant="top" src="https://sun9-18.userapi.com/impf/c855136/v855136400/150778/DzF8z5H6HKM.jpg?size=604x403&quality=96&sign=3133a40beb80c517f22f07c6dcc940fb&type=album" />
                  <CardBody>
                    <Link to="/gallery">Купить билет</Link> 
                  </CardBody>
                </Card>
              </Col>
              {/*  след акции */}
              <Col md={3}>
                <Card>
                  <Card.Img variant="top" src="https://sun9-20.userapi.com/impg/AC2XfyLc7Zsg1VakjHCwpnWped_pvpEN0XszCg/JKgSsu90wZg.jpg?size=1920x1080&quality=95&sign=d5dd1d4f3cfc0e1a99db53f173387a3d&c_uniq_tag=2l91vGOqj0gTdUC6SWezXN-vGmJDObYpn2DF65bYkhc&type=album" />
                  <CardBody>
                    <Link to="/gallery">Купить билет</Link> 
                  </CardBody>
                </Card>
              </Col>
              <Col md={3}>
                <Card>
                  <Card.Img variant="top" src="https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_659dac1d89c0fd69095f5909_659dac48865a591d8bc9b667/scale_1200" />
                  <CardBody>
                    <Link to="/gallery">Купить билет</Link> 
                  </CardBody>
                </Card>
              </Col>
              <h2 className="text-center mt-5 mb-3">Как нас найти</h2>
              <Col md={12}>
                <Card>
                  <CardBody>
                    <YMaps>
                      <Map width='100%' height='500px'defaultState={{ center: [59.924172, 30.240778], zoom: 15 }}>
                        <Placemark defaultGeometry={[59.924172, 30.240778]} />
                      </Map>
                    </YMaps>
                    <Card.Text>Севкабель Порт, Кожевенная линия, 40Б, Санкт-Петербург</Card.Text>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      );
    };
}    