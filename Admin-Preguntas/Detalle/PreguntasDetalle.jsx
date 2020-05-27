import React, { useState, useRef } from 'react';
import './PreguntasDetalle.css';
import Toggle from '../../shared/Toggle/Toggle';
import Loader from '../../shared/Loader/Loader.jsx';
import editIcon from '../../media/icons/edit.svg';
import deleteIcon from '../../media/icons/delete.svg';
import axiosInstance from '../../AxiosAPI';
function PreguntasDetalle(props) {
    let [loading, setLoading] = useState(false);
    let [editing, setEditing] = useState(false);
    let [activo, setActivo] = useState(props.pregunta.activo);
    let [destacado, setDestacado] = useState(props.pregunta.destacado);

    let preguntaRef = useRef();
    let respuestaRef = useRef();

    let handleCancelar = () => {
        setActivo(props.pregunta.activo);
        setDestacado(props.pregunta.destacado);
        setEditing(false);
    };

    let renderLoader = () => {
        if (loading) {
            return <Loader />;
        }
    };

    let handleGuardar = () => {
        setLoading(true);
        axiosInstance
            .put(
                `/preguntas/${props.moduloActual.nombre}/${props.pregunta._id}`
            )
            .then((resp) => {
                setLoading(false);
                //actualizar estado
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <React.Fragment>
            <div className="containerDetallePregunta">
                {renderLoader()}
                <div className="container-fluid">
                    <div className="row">
                        <div className="rowPreguntaEditBtns">
                            <div className="preguntasDetalleContainerBtns">
                                <img
                                    src={editIcon}
                                    className="editIcon"
                                    onClick={() => setEditing(true)}
                                />
                                <img src={deleteIcon} className="deleteIcon" />
                            </div>
                        </div>
                    </div>
                    <div className="row rowPreguntaDetalle">
                        <div className="col-md-9 colPregDetall">
                            <div className="row">
                                <div className="titlePreguntaDetalle">
                                    Pregunta:
                                </div>
                                <p className="preguntaDetallep">
                                    {props.pregunta.texto}
                                </p>
                            </div>
                            <hr className="hrDetallePregunta" />
                            <div className="row">
                                <div className="titlePreguntaDetalleRespuesta">
                                    Respuesta:
                                </div>
                                <p className="preguntaDetallep">
                                    {props.pregunta.respuesta}
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 preguntaDetalleContainerToggles">
                            <div className="preguntaDetalleToggles">
                                <div className="preguntaDetalleVisibleContainer">
                                    Visible:
                                    <div className="preguntasDetalleToggle">
                                        <Toggle
                                            checked={activo}
                                            handleCheck={() => {
                                                if (!editing) {
                                                    setEditing(true);
                                                }
                                                setActivo(!activo);
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="preguntaDetalleDestacadoContainer">
                                    Destacada:
                                    <div className="preguntasDetalleToggle">
                                        <Toggle
                                            checked={destacado}
                                            handleCheck={() => {
                                                if (!editing) {
                                                    setEditing(true);
                                                }
                                                setDestacado(!destacado);
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="divrowPreguntaDetalleRowUltimaEdicion">
                            <div className="preguntaDetalleRowUltimaEdicion">
                                <span className="preguntaDetalleSpan">
                                    Última Edición:
                                </span>
                                {props.pregunta.fechaEdicion +
                                    ' por ' +
                                    props.pregunta.ultimoEditor}
                            </div>
                        </div>
                    </div>
                    {editing && (
                        <div className="row preguntasDetalleEditContainer">
                            <button
                                className="preguntasEditCancelar"
                                onClick={handleCancelar}
                            >
                                Cancelar
                            </button>
                            <button
                                className="preguntasEditGuardar"
                                onClick={handleGuardar}
                            >
                                Guardar
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </React.Fragment>
    );
}

export default PreguntasDetalle;
