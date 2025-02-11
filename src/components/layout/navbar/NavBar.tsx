const NavBar = () => {
  return (
    <ul style={{ display: "flex", gap: "5px", listStyle: "none" }}>
      <li>
        <a style={{ color: "white" }} href="/home">
          Home
        </a>
      </li>
      <li>
        <a href="/all-books">All Books</a>
      </li>
    </ul>
  );
};

export default NavBar;
