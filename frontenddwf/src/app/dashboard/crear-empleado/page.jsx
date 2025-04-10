"use client";
import React from "react";
import EmpleadoFormulario from "@/components/EmpleadoFormulario";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CrearEmpleado = () => {
  return (
    <>
      <Header />
      <main className="container my-5">
        <h2>Crear Nuevo Empleado</h2>
        <EmpleadoFormulario />
      </main>
      <Footer />
    </>
  );
};

export default CrearEmpleado;
