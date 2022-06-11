import react from "react";
import "../styles/sidebar.css";

export class Sidebar extends react.Component {
  constructor(props) {
    super(props);
    this.changePage = props.changePage;
  }

  toggleActive = (e) => {
    const list = document.querySelectorAll(".navigasi");
    list.forEach((l) => l.classList.remove("active"));
    e.target.classList.add("active");

    e.target.id === "catatan" ? this.changePage(true) : this.changePage(false);
  };

  render() {
    return (
      <div className="sidebar">
        <h1>My Notes</h1>
        <ul>
          <li
            id="catatan"
            className="navigasi active"
            onClick={(e) => this.toggleActive(e)}
          >
            Catatan Aktif
          </li>
          <li
            id="arsip"
            className="navigasi "
            onClick={(e) => this.toggleActive(e)}
          >
            Arsip
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
