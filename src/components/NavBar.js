import './NavBar.css';
const NavBar = () => {

    return (
       <header >
           <div className="container">
                
                <a className="logo" href=""><h1>PRISMA</h1></a>
                <nav className="navbar navbar-expand-lg navbar-dark">
                       <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                       <span className="navbar-toggler-icon"></span>
                       </button>
                       <div className="collapse navbar-collapse " id="navbarNavDropdown">
                       <ul className="navbar-nav ms-auto">
                           <li className="nav-item">
                           <a className="nav-link active" aria-current="page" href="#">Home</a>
                           </li>
                           <li className="nav-item">
                           <a className="nav-link " aria-current="page" href="#">Productos</a>
                           </li>
                           <li className="nav-item dropdown">
                           <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                               Categorías
                           </a>
                           <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                               <li><a className="dropdown-item" href="#">Hombres</a></li>
                               <li><a className="dropdown-item" href="#">Mujeres</a></li>
                               <li><a className="dropdown-item" href="#">Niños</a></li>
                           </ul>
                           </li>
                           <li className="nav-item">
                           <a className="nav-link" href="#">Contacto</a>
                           </li>
                           
                           
                       </ul>
                       </div>
                   
               </nav>
                </div>
       </header>
    )
}

export default NavBar;