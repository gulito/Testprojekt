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
import ToolActions from "../redux/actions/ToolActions";

// END IMPORT ACTIONS

/** APIs

* actionsTool.create
*	@description CRUD ACTION create
*
* actionsTool.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsTool.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*

**/

class ToolEdit extends Component {
  // Init tool
  constructor(props) {
    super(props);
    this.state = {
      tool: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsTool.loadTool(this.props.match.params.id);
    }
    
  }

  // Insert props tool in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      tool: props.tool
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.tool._id) {
      this.props.actionsTool.saveTool(this.state.tool).then(data => {
        this.props.history.push("/tools/");
      });
    } else {
      this.props.actionsTool.createTool(this.state.tool).then(data => {
        this.props.history.push("/tools/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Tool Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="Inhalt"
            label="Inhalt"
            value={this.state.tool.Inhalt || ""}
            onChange={Utils.handleChange.bind(this, "tool")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.tool.Inhalt && this.state.tool.Inhalt === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="Tooltitel"
            label="Tooltitel"
            value={this.state.tool.Tooltitel || ""}
            onChange={Utils.handleChange.bind(this, "tool")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.tool.Tooltitel && this.state.tool.Tooltitel === ""
              ? { error: true }
              : {})}
          />
          

          {/* Footer */}
          <div className="footer-card">
            <Link to="/tools/">Back to list</Link>

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
    actionsTool: bindActionCreators(ToolActions, dispatch),
  };
};

// Validate types
ToolEdit.propTypes = { 
  actionsTool: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    tool: state.ToolEditReducer.tool
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolEdit);
