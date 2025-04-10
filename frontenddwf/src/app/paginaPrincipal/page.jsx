"use client";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Ejemplo de componente Home para la página principal
const Home = () => {
  return (
    <div className="home container">
      <div className="logo-container">
        <img src="/img/Logo/logo_blanco.png" alt="Logo Empresa" className="logo" />
      </div>
      <h2 className="page-title">Bienvenido al Sistema de Gestión de Recurso Humano</h2>
      <p className="page-description">
        Accede a las funcionalidades principales del sistema desde las opciones a continuación.
      </p>
      <div className="card-container">
        <a href="/dashboard/crear-empleado" className="card">
          <h3>Crear Empleado</h3>
        </a>
        <a href="/dashboard/listado-empleados" className="card">
          <h3>Listado Empleados</h3>
        </a>
        <a href="/dashboard/estadisticas" className="card">
          <h3>Estadísticas</h3>
        </a>
      </div>
    </div>
  );
};

const PaginaPrincipal = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
};

export default PaginaPrincipal;
