"use client";
import React from "react";
import EmpleadoFormulario from "@/components/EmpleadoFormulario";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const EditarEmpleado = () => {
  // Si usas Next.js 13 puedes acceder a los parámetros de la URL, por ejemplo con useParams.
  return (
    <>
      <Header />
      <main className="container my-5">
        <h2>Editar Empleado</h2>
        <EmpleadoFormulario />
      </main>
      <Footer />
    </>
  );
};

export default EditarEmpleado;
