import React from 'react'
import actions from './redux/actions'

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
import {connect} from 'react-redux'

const app = ({ip,ua, requestIP, requestUA, ipRequest, uaRequest}) => (
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
                                                                <CardText>{ip}</CardText>                                                                
                                                                {ipRequest ? <p>Carregando...</p> : <Button onClick={requestIP}>Descobrir IP</Button>}
                                                        </CardBlock>                                                
                                                </Col> 
                                                <Col >                                                                                                    
                                                        <CardBlock>
                                                                <CardTitle>Meu User-Agent</CardTitle>
                                                                <CardText>{ua}</CardText>
                                                                {uaRequest ? <p>Carregando...</p> : <Button onClick={requestUA}>Descobrir UA</Button>}                                                                
                                                        </CardBlock>                                                
                                                </Col>
                                        </Row>                                       
                                </Card>
                        </Col>
                </Row>
        </Container>
)

const mapStateToProps = state => ({
                ip: state.meuIP.ip,
                ua: state.meuUA.ua,
                ipRequest: state.meuIP.isFetching,
                uaRequest: state.meuUA.isFetching
})

const mapDispatchToProps = dispatch => ({
        requestIP: ()=> dispatch(actions.ipRequest()),
        requestUA: ()=> dispatch(actions.uaRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(app)

const Container = styled.section`
       text-align: center;
       width: 80vw;
       margin: auto;
`
