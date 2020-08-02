// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Utils from "../utils/utils";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// Custom Actions


// START IMPORT ACTIONS
import BereichActions from "../redux/actions/BereichActions";

// END IMPORT ACTIONS

/** APIs

* actionsBereich.create
*	@description CRUD ACTION create
*
* actionsBereich.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsBereich.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*

**/

class BereichEdit extends Component {
  // Init bereich
  constructor(props) {
    super(props);
    this.state = {
      bereich: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsBereich.loadBereich(this.props.match.params.id);
    }
    
  }

  // Insert props bereich in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      bereich: props.bereich
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.bereich._id) {
      this.props.actionsBereich.saveBereich(this.state.bereich).then(data => {
        this.props.history.push("/bereichs/");
      });
    } else {
      this.props.actionsBereich.createBereich(this.state.bereich).then(data => {
        this.props.history.push("/bereichs/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Bereich Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="Bereichsbeschreibung"
            label="Bereichsbeschreibung"
            value={this.state.bereich.Bereichsbeschreibung || ""}
            onChange={Utils.handleChange.bind(this, "bereich")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.bereich.Bereichsbeschreibung && this.state.bereich.Bereichsbeschreibung === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="Bereichsname"
            label="Bereichsname"
            value={this.state.bereich.Bereichsname || ""}
            onChange={Utils.handleChange.bind(this, "bereich")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.bereich.Bereichsname && this.state.bereich.Bereichsname === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="bereichsbild"
            label="Bereichsbild"
            value={this.state.bereich.bereichsbild || ""}
            onChange={Utils.handleChange.bind(this, "bereich")}
            margin="normal"
            fullWidth
          />
          

          {/* Footer */}
          <div className="footer-card">
            <Link to="/bereichs/">Back to list</Link>

            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsBereich: bindActionCreators(BereichActions, dispatch),
  };
};

// Validate types
BereichEdit.propTypes = { 
  actionsBereich: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    bereich: state.BereichEditReducer.bereich
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BereichEdit);
