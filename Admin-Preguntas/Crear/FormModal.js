import React from 'react';
import PropTypes from 'prop-types';
import './FormModal.css';
import Toggle from '../../shared/Toggle/Toggle';
const FormModal = (props) => {
    return (
        <div className="forming">
            <h1>Agregar pregunta</h1>

            <form>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">
                        Pregunta:
                    </label>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                    ></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">
                        Respuesta:
                    </label>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    style={{
                        backgroundColor: props.moduloActual.color,
                    }}
                    className="botonCrearPregunta"
                >
                    Crear
                </button>
            </form>
        </div>
    );
};

export default FormModal;
