import React, {Component} from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './styles/global.css'
import Pesquisa from './components/Pesquisa';
import CadastroProcesso from './components/CadastroProcesso';
import CadastroSetor from './components/CadastroSetor';
import CadastroAssunto from './components/CadastroAssunto';
import CadastroCaixa from './components/CadastroCaixa';
import EditarProcesso from './components/EditarProcesso';
import EditarSetor from './components/EditarSetor';
import EditarAssunto from './components/EditarAssunto';
import EditarCaixa from './components/EditarCaixa';
import { Row, Container, Badge, Nav, NavItem, NavLink, TabContent, TabPane, Col } from 'reactstrap';
import classnames from 'classnames';

class App extends Component {
  
  state = {
    activeTab : '1'
  }

  toggle = (tab) => {
    if(this.state.activeTab !== tab) this.setState({activeTab : tab});
  }

  render () {
    return (
      <Provider store={store}>
        <div className='main'>
          <Container>
            <Row>
              <h1 className='title mb-3'>Controle de Processos <Badge>SODF</Badge></h1>
            </Row>
            <Nav tabs className='mb-3'>
            <NavItem>
              <NavLink
                className={classnames({ active : this.state.activeTab === '1' })}
                onClick={() => {
                  this.forceUpdate(); this.toggle('1'); }}>
                Pesquisar
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active : this.state.activeTab === '2' })}
                onClick={() => { this.toggle('2'); }}>
                Registrar
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active : this.state.activeTab === '3' })}
                onClick={() => { this.toggle('3'); }}>
                Editar
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId='1'>
                <Pesquisa/>
            </TabPane>
            <TabPane tabId='2'>
              <Row >
                <Col>
                  <CadastroProcesso/>
                  <CadastroAssunto/>
                </Col>
                <Col>
                  <CadastroSetor/>
                  <CadastroCaixa/>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId='3'>
              <Row>
                <Col>
                  <EditarProcesso/>
                </Col>
                </Row>
                <Row>
                <Col>
                <EditarSetor/>
                </Col>
                <Col className='col-lg-5'>
                <EditarAssunto/>
                </Col>
              </Row>
              <Row>
                <Col>
                  <EditarCaixa/>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
          </Container>
        </div>
      </Provider>
  )};
}

export default App;
