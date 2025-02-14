import React from "react"
import { Container, Row, Col } from 'react-bootstrap'
import { sampleProducts } from "../data";
import { Link } from 'react-router-dom'

function HomePage() {
    return (
        <>
            <main>
                <Container>
                    <Row>
                        {sampleProducts.map((product) =>
                            <Col key={product.slug} lg={3} md={4} sm={6}  >
                                <Link to={'/product/' + product.slug}>
                                    <img src={product.image} alt={product.name} className='product-image' />
                                    <h2>{product.name}</h2>
                                    <p>$ {product.price}</p>
                                </Link>
                            </Col>
                        )}
                    </Row>
                </Container>
            </main>
        </>
    )
}

export default HomePage