import react from "react";
import "../styles/header.css";

export class Header extends react.Component {
  constructor(props) {
    super(props);
    this.activePage = props.activePage;
    this.searchNote = props.searchNote;

    this.state = { searchInput: "" };
    this.search = this.search.bind(this);
  }

  search(e) {
    e.preventDefault();
    this.searchNote(this.state.searchInput);
  }

  render() {
    return (
      <header>
        <h1>{this.activePage ? "Catatan Aktif" : "Arsip"}</h1>
        <form onSubmit={(e) => this.search(e)}>
          <div className="search">
            <input
              onChange={(e) => this.setState({ searchInput: e.target.value })}
              type="text"
              placeholder="cari catatan..."
            />

            <ion-icon
              name="search-outline"
              onClick={(e) => this.search(e)}
            ></ion-icon>
          </div>
        </form>
      </header>
    );
  }
}

export default Header;
