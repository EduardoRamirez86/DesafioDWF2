// /service/EmpleadoService.js

// Obtener la lista de empleados.
export const getEmpleados = async () => {
  try {
    const response = await fetch('http://localhost:8000/api/v1/empleado', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();
    console.log('Datos de empleados:', data);

    if (!response.ok) {
      console.log('Error en la respuesta:', data.message);
      return [];
    }
    // Se asume que la API envía un arreglo en data.data.
    return Array.isArray(data.data) ? data.data : [];
  } catch (error) {
    console.log('Error al obtener empleados:', error.message);
    return [];
  }
};

// Obtener un empleado por ID.
export const getEmpleadoById = async (id) => {
  try {
    const response = await fetch(`http://localhost:8000/api/v1/empleado/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();
    console.log('Datos del empleado:', data);

    if (!response.ok) {
      console.log('Error en la respuesta:', data.message);
      return null;
    }
    return data;
  } catch (error) {
    console.log('Error al obtener empleado:', error.message);
    return null;
  }
};

// Crear un nuevo empleado.
export const saveEmpleado = async (empleado) => {
  try {
    const response = await fetch('http://localhost:8000/api/v1/empleado', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      // Se envía el objeto empleado completo.
      body: JSON.stringify(empleado)
    });

    const data = await response.json();
    console.log('Datos:', data);

    if (!response.ok) {
      console.log('Error en la respuesta:', data.message);
      return null;
    }
    return data.data;
  } catch (error) {
    console.log('Error al crear empleado:', error.message);
    return null;
  }
};

// Actualizar un empleado existente.
export const updateEmpleado = async (id, empleado) => {
  try {
    const response = await fetch(`http://localhost:8000/api/v1/empleado/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(empleado)
    });

    const data = await response.json();
    console.log('Datos:', data);

    if (!response.ok) {
      console.log('Error en la respuesta:', data.message);
      return null;
    }
    return data.data;
  } catch (error) {
    console.log('Error al actualizar empleado:', error.message);
    return null;
  }
};

// Eliminar un empleado.
export const deleteEmpleado = async (id) => {
  try {
    const response = await fetch(`http://localhost:8000/api/v1/empleado/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();
    console.log('Datos:', data);

    if (!response.ok) {
      console.log('Error en la respuesta:', data.message);
      return null;
    }
    return data;
  } catch (error) {
    console.log('Error al eliminar empleado:', error.message);
    return null;
  }
};
