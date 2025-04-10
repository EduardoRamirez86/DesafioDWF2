"use client";
import React from 'react';
import Link from 'next/link';
import { deleteEmpleado } from '@/service/EmpleadoService';
import { useRouter } from 'next/navigation';

const EmpleadoCard = ({ empleado }) => {
  const router = useRouter();

  const handleDelete = async (e) => {
    e.preventDefault();
    if (confirm('¿Estás seguro de eliminar este empleado?')) {
      try {
        await deleteEmpleado(empleado.id);
        router.push('/dashboard');
      } catch (err) {
        console.log('Error al eliminar el empleado:', err);
      }
    }
  };

  return (
    <div className="empleado-card">
      <h3>{empleado.nombre} {empleado.apellido}</h3>
      <p><strong>Email:</strong> {empleado.email}</p>
      <p><strong>Cargo:</strong> {empleado.cargo}</p>
      <p><strong>Fecha de Ingreso:</strong> {empleado.fechaIngreso}</p>
      <div className="card-actions">
        <Link href={`/dashboard/editar-empleado/${empleado.id}`}>
          <button>Editar</button>
        </Link>
        <button onClick={handleDelete}>Eliminar</button>
      </div>
    </div>
  );
};

export default EmpleadoCard;
