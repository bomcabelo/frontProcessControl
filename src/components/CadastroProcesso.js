import React, {useState} from 'react';
import { Form, FormGroup, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Input, Label, Card, CardTitle, CardBody, Button } from 'reactstrap';

const CadastroProcesso = () => {

    const [dropdownOpenSetor, setOpenSetor] = useState(false)
    const toggleSetor = () => setOpenSetor(!dropdownOpenSetor)
    
    const [dropdownOpenAssunto, setOpenAssunto] = useState(false)
    const toggleAssunto = () => setOpenAssunto(!dropdownOpenAssunto)

    const [dropdownOpenCaixa, setOpenCaixa] = useState(false)
    const toggleCaixa = () => setOpenCaixa(!dropdownOpenCaixa)

    const [labelSetor, setLabelSetor] = useState('Setor')
    const changeSetor = (e) => setLabelSetor(e.target.textContent)
    
    const [labelAssunto, setLabelAssunto] = useState('Assunto')
    const changeAssunto = (e) => setLabelAssunto(e.target.textContent)

    const [numeroProcesso, setNumeroProcesso] = useState('')
    const changeNumeroProcesso = (e) => setNumeroProcesso(e.target.value)

    const [labelCaixa, setLabelCaixa] = useState('Caixa')
    const changeCaixa = (e) => setLabelCaixa(e.target.textContent)

    const [data, setData] = useState('')
    const changeData = (e) => setData(e.target.value)

    const cleanForm = () => {
        setLabelSetor('Setor')
        setLabelAssunto('Assunto')
        setLabelCaixa('Caixa')
        setNumeroProcesso('')
        setData(null)
    }

    const storeProcesso = () => {
        
    }

    return (
        <Card className="p-3">
            <CardTitle><h3>Cadastro de processos</h3></CardTitle>
            <CardBody>
                <Form>
                    <FormGroup>
                        <Label for="processo">Número do processo</Label>
                        <Input value={numeroProcesso} id="processo" onChange={changeNumeroProcesso}/>
                        <Label for="data">Data autuação</Label>
                        <Input value={data} id="data" type="date" className='w-75' onChange={changeData}/>
                    </FormGroup>
                    <FormGroup>
                        <ButtonDropdown isOpen={dropdownOpenSetor} toggle={toggleSetor}>
                            <DropdownToggle caret>
                                {labelSetor}
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={changeSetor}>SUBLA</DropdownItem>
                                <DropdownItem>SUBLA</DropdownItem>
                                <DropdownItem>SUBLA</DropdownItem>
                            </DropdownMenu>
                        </ButtonDropdown>
                        <ButtonDropdown isOpen={dropdownOpenCaixa} toggle={toggleCaixa} className='ml-2'>
                            <DropdownToggle caret>
                                {labelCaixa}
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={changeCaixa}>22</DropdownItem>
                                <DropdownItem>23</DropdownItem>
                                <DropdownItem>24</DropdownItem>
                            </DropdownMenu>
                        </ButtonDropdown>
                        <ButtonDropdown className='ml-2' isOpen={dropdownOpenAssunto} toggle={toggleAssunto}>
                            <DropdownToggle caret>
                                {labelAssunto}
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={changeAssunto}>Teste 1</DropdownItem>
                                <DropdownItem>Teste 2</DropdownItem>
                                <DropdownItem>Teste 3</DropdownItem>
                            </DropdownMenu>
                        </ButtonDropdown>
                    </FormGroup>
                    <Button color="primary" onClick={storeProcesso}>Salvar</Button>
                    <Button className='ml-3' outline color="secondary" onClick={cleanForm}>Cancelar</Button>
                </Form>
            </CardBody>
       </Card>
    )
}

export default CadastroProcesso;