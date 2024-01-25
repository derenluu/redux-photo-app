/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink, useLocation } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import './Header.scss';

function Header(props) {
    const location = useLocation();
    return (
        <header className="header">
            <Container>
                <Row className=" justify-content-between ">
                    <Col xs="auto">
                        <a className="header__link header__title"
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer">
                            Easy Fontend
                        </a>
                    </Col>

                    <Col xs="auto">
                        <NavLink
                            className={ `header__link ${location.pathname === '/photos' ? 'header__link--active' : ''}` }
                            to="/photos">
                            Redux Project
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;
