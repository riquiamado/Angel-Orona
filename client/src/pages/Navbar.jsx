import { Link } from "react-router-dom"; // Asegúrate de haber importado el componente Link de react-router-dom si estás usando rutas

const Navbar = () => {
  return (
    <nav className="bg-gray-400 p-3 flex items-center justify-between">
      <div className="text-2xl font-bold">Logo</div>

      <ul className="flex space-x-4 list-none mt-0">
        <li>
          <Link to="/" className="text-white px-4 py-2 rounded hover:text-cyan-400">Turnos</Link>
        </li>
        <li>
            <Link to="/about" className="text-white px-4 py-2 rounded hover:text-cyan-400">Servicios</Link>
          </li>
      </ul>

      <div className="flex items-center">
        <ul className="flex space-x-4 list-none mt-0">
          
          <li>
            <Link to="/login" className="text-white px-4 py-2 rounded hover:text-cyan-400">Iniciar sesión</Link>
          </li>
          <li>
            <Link to="/register" className="text-white px-4 py-2 rounded hover:text-cyan-400">Registrarse</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
