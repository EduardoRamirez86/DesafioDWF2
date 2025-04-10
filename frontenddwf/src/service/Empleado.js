// /service/EmpleadoService.js

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api";

export const getEmpleadoById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/empleados/${id}`);
  if (!response.ok) {
    throw new Error("Error al obtener el empleado");
  }
  const data = await response.json();
  return { data };
};

export const saveEmpleado = async (empleado) => {
  const response = await fetch(`${API_BASE_URL}/empleados`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(empleado)
  });
  if (!response.ok) {
    throw new Error("Error al crear el empleado");
  }
  const data = await response.json();
  return data;
};

export const updateEmpleado = async (id, empleado) => {
  const response = await fetch(`${API_BASE_URL}/empleados/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(empleado)
  });
  if (!response.ok) {
    throw new Error("Error al actualizar el empleado");
  }
  const data = await response.json();
  return data;
};

export const deleteEmpleado = async (id) => {
  const response = await fetch(`${API_BASE_URL}/empleados/${id}`, {
    method: "DELETE"
  });
  if (!response.ok) {
    throw new Error("Error al eliminar el empleado");
  }
  const data = await response.json();
  return data;
};
