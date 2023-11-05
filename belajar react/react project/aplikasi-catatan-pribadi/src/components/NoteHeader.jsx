import React from "react";

class NoteHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
        }
    }

    handleSearchChange = (e) => {
        this.setState({ searchQuery: e.target.value });
      };
    
      render() {
        const { onSearch } = this.props;
        const { searchQuery } = this.state;
    
        return (
          <div className="note-app__header">
            <h1>Notes</h1>
            <div>
              <input
                type="text"
                placeholder="Cari catatan..."
                value={searchQuery}
                onChange={this.handleSearchChange}
              />
              <button className="note-input button" onClick={() => onSearch(searchQuery)}>Cari</button>
            </div>
          </div>
        );
      }
    }
    
    export default NoteHeader;