import React, { useState, useEffect } from 'react';
import axiosInstance from '../AxiosAPI.js';
import { withRouter } from 'react-router-dom';
import './Preguntas.css';
import Table from '../shared/Table/Table';
import Row from '../shared/Table/Row/Row';
import Modal from '../shared/Modal/Modal.jsx';
import SearchBar from '../shared/SearchBar/SearchBar';
import FormModal from './Crear/FormModal';
import CreateButton from '../shared/BotonAgregar/CreateButton';
import Card from '../shared/Card/Card';

import PreguntasDetalle from './Detalle/PreguntasDetalle.jsx';
let PreguntasTemp = [
    {
        texto:
            'Esto es una pregunta? Esto es una pregunta?Esto es una pregunta?Esto es una pregunta?Esto es una pregunta?Esto es una pregunta?vEsto es una pregunta?Esto es una pregunta?vvEsto es una pregunta?v',
        respuesta: 'Claro que lo es!',
        activo: true,
        destacado: false,
        megusta: 0,
        nomegusta: 0,
        visitas: 10,
        fechaCreacion: '1234',
        fechaEdicion: '1234 asdasdasdasdasd',
        ultimoEditor: 'Katherine Nieto',
    },
    {
        texto: 'Esto es una preguntaabcd?',
        respuesta: 'Claro que lo es!',
        activo: true,
        destacado: false,
        megusta: 0,
        nomegusta: 0,
        visitas: 10,
        fechaCreacion: '1234',
        fechaEdicion: '1234',
        ultimoEditor: 'Katherine Nieto',
    },
    {
        texto: 'Esto es una pregunta?',
        respuesta: 'Claro que lo es!',
        activo: true,
        destacado: false,
        megusta: 0,
        nomegusta: 0,
        visitas: 10,
        fechaCreacion: '1234',
        fechaEdicion: '1234',
        ultimoEditor: 'Katherine Nieto',
    },
    {
        texto: 'Esto es una preguntaabcd?',
        respuesta: 'Claro que lo es!',
        activo: true,
        destacado: false,
        megusta: 0,
        nomegusta: 0,
        visitas: 10,
        fechaCreacion: '1234',
        fechaEdicion: '1234',
        ultimoEditor: 'Katherine Nieto',
    },
    {
        texto: 'Esto es una pregunta?',
        respuesta: 'Claro que lo es!',
        activo: true,
        destacado: false,
        megusta: 0,
        nomegusta: 0,
        visitas: 10,
        fechaCreacion: '1234',
        fechaEdicion: '1234',
        ultimoEditor: 'Katherine Nieto',
    },
    {
        texto: 'Esto es una preguntaabcd?',
        respuesta: 'Claro que lo es!',
        activo: true,
        destacado: false,
        megusta: 0,
        nomegusta: 0,
        visitas: 10,
        fechaCreacion: '1234',
        fechaEdicion: '1234',
        ultimoEditor: 'Katherine Nieto',
    },
    {
        texto: 'Esto es una pregunta?',
        respuesta: 'Claro que lo es!',
        activo: true,
        destacado: false,
        megusta: 0,
        nomegusta: 0,
        visitas: 10,
        fechaCreacion: '1234',
        fechaEdicion: '1234',
        ultimoEditor: 'Katherine Nieto',
    },
    {
        texto: 'Esto es una preguntaabcd?',
        respuesta: 'Claro que lo es!',
        activo: true,
        destacado: false,
        megusta: 0,
        nomegusta: 0,
        visitas: 10,
        fechaCreacion: '1234',
        fechaEdicion: '1234',
        ultimoEditor: 'Katherine Nieto',
    },
    {
        texto: 'Esto es una pregunta?',
        respuesta: 'Claro que lo es!',
        activo: true,
        destacado: false,
        megusta: 0,
        nomegusta: 0,
        visitas: 10,
        fechaCreacion: '1234',
        fechaEdicion: '1234',
        ultimoEditor: 'Katherine Nieto',
    },
    {
        texto: 'Esto es una preguntaabcd?',
        respuesta: 'Claro que lo es!',
        activo: true,
        destacado: false,
        megusta: 0,
        nomegusta: 0,
        visitas: 10,
        fechaCreacion: '1234',
        fechaEdicion: '1234',
        ultimoEditor: 'Katherine Nieto',
    },
    {
        texto: 'Esto es una pregunta?',
        respuesta: 'Claro que lo es!',
        activo: true,
        destacado: false,
        megusta: 0,
        nomegusta: 0,
        visitas: 10,
        fechaCreacion: '1234',
        fechaEdicion: '1234',
        ultimoEditor: 'Katherine Nieto',
    },
    {
        texto: 'Esto es una preguntaabcd?',
        respuesta: 'Claro que lo es!',
        activo: true,
        destacado: false,
        megusta: 0,
        nomegusta: 0,
        visitas: 10,
        fechaCreacion: '1234',
        fechaEdicion: '1234',
        ultimoEditor: 'Katherine Nieto',
    },
];

function Preguntas(props) {
    const [showModal, setShowModal] = useState(false);
    let [sorting, setSorting] = useState({
        attribute: 'nombre',
        ascending: false,
    });
    const [searchQuery, setSearchQuery] = useState('');
    const [preguntas, setPreguntas] = useState([]);
    useEffect(() => {
        if (props.moduloActual !== null) {
            axiosInstance
                .get('/preguntas/' + props.moduloActual.nombre) //TODO CAMBIAR ESO
                .then((resp) => {
                    setPreguntas(PreguntasTemp);
                })
                .catch((err) => {
                    setPreguntas(PreguntasTemp);
                    throw err;
                });
            const queries = new URLSearchParams(window.location.search);
            let tempSorting = queries.get('sorting');
            let tempAscending = queries.get('ascending');
            let filtros = ['texto'];

            if (
                queries.has('sorting') &&
                queries.has('ascending') &&
                filtros.filter((filter) => tempSorting === filter).length > 0 &&
                (tempAscending === 'true' || tempAscending === 'false')
            ) {
                setSorting({
                    attribute: tempSorting,
                    ascending: tempAscending === 'true',
                });
            } else {
                if (queries.has('busqueda')) {
                    props.history.push(
                        `/preguntas/${
                            props.moduloActual.nombre
                        }?sorting=texto&ascending=false&busqueda=${queries.get(
                            'busqueda'
                        )}`
                    );
                } else {
                    props.history.push(
                        `/preguntas/${props.moduloActual.nombre}?sorting=texto&ascending=false`
                    );
                }
            }
            if (queries.has('busqueda')) {
                setSearchQuery(queries.get('busqueda').split('_').join(' '));
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.moduloActual]);

    let handleCreatePregunta = () => {
        setShowModal(true);
        props.setShowCurtain(true);
    };

    let search = (query) => {
        if (query !== '') {
            props.history.push(
                `/preguntas/${props.moduloActual.nombre}?busqueda=${query
                    .split(' ')
                    .join('_')}&sorting=${sorting.attribute}&ascending=${
                    sorting.ascending
                }`
            );
        }
        if (query === '') {
            props.history.push(
                `/preguntas/${props.moduloActual.nombre}?sorting=${sorting.attribute}&ascending=${sorting.ascending}`
            );
        }
        setSearchQuery(query);
    };

    let handleSort = (attribute) => {
        props.history.push(
            `/preguntas/${
                props.moduloActual.nombre
            }?sorting=${attribute}&ascending=${!sorting.ascending}${
                searchQuery !== ''
                    ? '&busqueda=' + searchQuery.split(' ').join('_')
                    : ''
            }`
        );
        setSorting({ attribute: attribute, ascending: !sorting.ascending });
    };

    let renderRows = () => {
        let list = [...preguntas];
        //Buscar
        if (searchQuery !== '') {
            list = list.filter((pregunta) =>
                pregunta.texto.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        //Sorting
        list.sort((a, b) => {
            if (a[sorting.attribute] === b[sorting.attribute]) {
                return 0;
            } else if (
                a[sorting.attribute] < b[sorting.attribute] &&
                sorting.ascending
            ) {
                return 1;
            } else if (
                a[sorting.attribute] > b[sorting.attribute] &&
                !sorting.ascending
            ) {
                return 1;
            } else {
                return -1;
            }
        });

        return list.map((pregunta, i) => (
            <Row key={i} element={pregunta}>
                <PreguntasDetalle
                    pregunta={pregunta}
                    moduloActual={props.moduloActual}
                />
            </Row>
        ));
    };

    if (
        props.moduloActual !== null &&
        (props.role === 'admin' || props.role === 'superadmin')
    ) {
        return (
            <React.Fragment>
                <Modal
                    withSideBar={true}
                    show={showModal}
                    set={setShowModal}
                    setShowCurtain={props.setShowCurtain}
                    moduloActual={props.moduloActual}
                >
                    <FormModal moduloActual={props.moduloActual}></FormModal>
                </Modal>
                <div className="contenedorPreguntas">
                    <div className="preguntasTitleRow">
                        <img
                            className="preguntasTitleImg"
                            src={props.moduloActual.titlePath}
                            alt={props.moduloActual.nombre}
                        />
                    </div>
                    <Card>
                        <div className="cardTitleRow">
                            {
                                <div className="createPreguntaButtonWrapper">
                                    <CreateButton
                                        color={props.moduloActual.color}
                                        handleClick={handleCreatePregunta}
                                    />
                                </div>
                            }
                            <div className="searchPreguntaButtonWrapper">
                                <SearchBar
                                    handleSearch={search}
                                    value={searchQuery}
                                />
                            </div>
                        </div>
                        <div className="preguntasTableWrapper">
                            <Table
                                hasDetail={true}
                                handleSort={handleSort}
                                sorting={sorting}
                                color={props.moduloActual.color}
                                mainField={{
                                    name: 'Pregunta',
                                    'min-width': '200px',
                                    dataName: 'texto',
                                }}
                                fields={[
                                    {
                                        name: 'Activo',
                                        'min-width': '200px',
                                        dataName: 'activo',
                                    },
                                    {
                                        name: 'MeGusta',
                                        'min-width': '200px',
                                        dataName: 'megusta',
                                    },
                                    {
                                        name: 'NoMeGusta',
                                        'min-width': '200px',
                                        dataName: 'nomegusta',
                                    },
                                    {
                                        name: 'Visitas',
                                        'min-width': '200px',
                                        dataName: 'visitas',
                                    },
                                ]}
                            >
                                {renderRows()}
                            </Table>
                        </div>
                    </Card>
                </div>
            </React.Fragment>
        );
    }
    //Que mostrar si no hay pregunta seleccionada?
    else {
        return <div></div>;
    }
}

export default withRouter(Preguntas);
