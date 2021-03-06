import React, { useState, FormEvent, ChangeEvent } from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

const Create = () => {
    const history = useHistory();

    const [formData, setFormData] = useState({
        description: '',
    });

    async function handleSubmit(evt: FormEvent) {
        evt.preventDefault();

        const { description } = formData;

        const data = {
            description
        };

        await api.post('/roles', data);

        history.push('/roles');
    }

    function handleInputChange(evt: ChangeEvent<HTMLInputElement>) {
        const { name, value } = evt.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    return (
        <Col className={"pt-2"}>
            <Form onSubmit={handleSubmit}>
                <Row form>
                    <Col>
                        <FormGroup>
                            <Label for="description">Descrição</Label>
                            <Input onChange={handleInputChange} type="text" name="description" id="description" placeholder="Insira o nome do cargo" maxLength={50} required />
                        </FormGroup>
                    </Col>
                </Row>
                <Button color={"success"}>Cadastrar</Button>
            </Form>
        </Col>
    )
};

export default Create;