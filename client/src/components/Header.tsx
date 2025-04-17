function Header() {
  return (
    <header>
      <section className="menu-burger">
        <img
          src="./src/assets/images/menu_burger_red.svg"
          alt=""
          width="48px"
        />
      </section>
      <label htmlFor="recherche">Quel pokemon</label>
      <input type="text" placeholder="Recherche ton pokemon" name="recherche" />
      <section className="Logo">
        <img src="./src/assets/images/Wildex-logo-V1.png" alt="Logo du site" />
      </section>
      <nav>
        <ul>
          <li>Gen1</li>
          <li>Gen2</li>
          <li>Gen3</li>
          <li>Gen4</li>
          <li>Gen5</li>
          <li>Gen6</li>
          <li>Gen7</li>
          <li>Gen8</li>
          <li>Gen9</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
