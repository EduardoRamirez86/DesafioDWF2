"use client";
import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getEmpleadoById, saveEmpleado, updateEmpleado } from '@/service/EmpleadoService';

const EmpleadoFormulario = () => {
  const params = useParams();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Estado del formulario con los campos del empleado.
  const [empleado, setEmpleado] = useState({
    nombre: '',
    apellido: '',
    email: '',
    fechaIngreso: '',
    cargo: ''
  });

  // Si existe el parámetro id, asume modo edición.
  useEffect(() => {
    if (!params?.id) return; // Validar si el id está disponible

    const cargarEmpleado = async () => {
      try {
        setIsLoading(true);
        const { data } = await getEmpleadoById(params.id);
        if (data) {
          setEmpleado({
            nombre: data.nombre,
            apellido: data.apellido,
            email: data.email,
            fechaIngreso: data.fechaIngreso,
            cargo: data.cargo
          });
        } else {
          setError("No se encontró el empleado.");
        }
      } catch (err) {
        setError(err.message || "Error al cargar los datos del empleado.");
      } finally {
        setIsLoading(false);
      }
    };

    cargarEmpleado();
  }, [params?.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmpleado(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      let response;
      if (params?.id) {
        // Editar empleado.
        response = await updateEmpleado(params.id, empleado);
      } else {
        // Crear nuevo empleado.
        response = await saveEmpleado(empleado);
      }
      router.push(`/dashboard/ver-empleado/${response.id}`);
    } catch (err) {
      setError(err.message || "Error al guardar los datos del empleado.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="form-container">
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <h3 className="form-title">{params?.id ? 'Editar Empleado' : 'Crear Nuevo Empleado'}</h3>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Nombre"
              value={empleado.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="apellido">Apellido</label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              placeholder="Apellido"
              value={empleado.apellido}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="ejemplo@correo.com"
              value={empleado.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="fechaIngreso">Fecha de Ingreso</label>
            <input
              type="date"
              id="fechaIngreso"
              name="fechaIngreso"
              value={empleado.fechaIngreso}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="cargo">Cargo</label>
          <input
            type="text"
            id="cargo"
            name="cargo"
            placeholder="Ej. Gerente de área"
            value={empleado.cargo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="button-group">
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Guardando...' : 'Guardar'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmpleadoFormulario;
