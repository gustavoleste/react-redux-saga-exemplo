import React from 'react'
import {
        Button, 
        H1, 
        Row, 
        Col,
        Card,
        CardBlock,
        CardTitle,
        CardText,
        CardHeader
} from '@bootstrap-styled/v4'
import styled from 'styled-components'

const app = () => (
        <Container>                              
                <Row >
                        <Col>
                                <Card>
                                        <CardHeader>
                                                <H1>React | Redux-Saga - Exemplo</H1>
                                        </CardHeader>
                                        <Row>
                                                <Col >                                                                                                    
                                                        <CardBlock>
                                                                <CardTitle>Meu IP</CardTitle>
                                                                <CardText>0.0.0.0</CardText>
                                                                <Button>Submit</Button>
                                                        </CardBlock>                                                
                                                </Col> 
                                                <Col >                                                                                                    
                                                        <CardBlock>
                                                                <CardTitle>Meu Navegador</CardTitle>
                                                                <CardText>Desconhecido</CardText>
                                                                <Button>Submit</Button>
                                                        </CardBlock>                                                
                                                </Col>
                                        </Row>                                       
                                </Card>
                        </Col>
                </Row>
        </Container>
)

export default app

const Container = styled.section`
       text-align: center;
       width: 80vw;
       margin: auto;
`
