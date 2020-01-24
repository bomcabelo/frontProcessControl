import React, {useState} from 'react';
import './styles/global.css'
import Tabela from './components/Tabela'
import Pesquisa from './components/Pesquisa';
import { Row, Container, Badge, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';

function App() {

  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div className='main'>
      <Container>
        <Row>
          <h1 className='title'>Controle de Processos <Badge>SODF</Badge></h1>
        </Row>
        <Nav tabs className='mb-4'>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}>
            Pesquisar
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}>
            Registrar
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}>
            Editar
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId='1'>
          <Row>
            <Pesquisa/>
          </Row>
          <Row>
            <Tabela/>
          </Row>
        </TabPane>
        <TabPane tabId='2'>
          <Row>
            TESTE 1
          </Row>
        </TabPane>
        <TabPane tabId='3'>
          <Row>
            TESTE 2
          </Row>
        </TabPane>
      </TabContent>
      </Container>
    </div>
  );
}

export default App;
