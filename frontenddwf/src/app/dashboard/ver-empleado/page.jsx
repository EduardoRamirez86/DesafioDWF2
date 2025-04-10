"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getEmpleadoById } from "@/service/EmpleadoService";

const VerEmpleado = () => {
  const { id } = useParams(); // Extrae el id de la URL
  const [empleado, setEmpleado] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchEmpleado = async () => {
      setIsLoading(true);
      try {
        const { data } = await getEmpleadoById(id);
        setEmpleado(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchEmpleado();
    }
  }, [id]);

  if (isLoading) {
    return (
      <>
        <Header />
        <div className="container">
          <h2>Cargando empleado...</h2>
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header />
        <div className="container">
          <h2>Error: {error}</h2>
        </div>
        <Footer />
      </>
    );
  }

  if (!empleado) {
    return (
      <>
        <Header />
        <div className="container">
          <h2>No se encontró el empleado</h2>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="container my-5">
        <h2>Detalle del Empleado</h2>
        <div className="empleado-detalle">
          <p><strong>Nombre:</strong> {empleado.nombre} {empleado.apellido}</p>
          <p><strong>Email:</strong> {empleado.email}</p>
          <p><strong>Cargo:</strong> {empleado.cargo}</p>
          <p><strong>Fecha de Ingreso:</strong> {empleado.fechaIngreso}</p>
          {/* Agrega más detalles según corresponda */}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default VerEmpleado;
