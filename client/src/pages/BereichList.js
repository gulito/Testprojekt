// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import DialogDelete from "../components/DialogDelete";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import Button from "@material-ui/core/Button";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";

// Table
import EnhancedTable from "../components/EnhancedTable";

// Custom Actions


// START IMPORT ACTIONS
import BereichActions from "../redux/actions/BereichActions";

// END IMPORT ACTIONS

/** APIs

* actionsBereich.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsBereich.list
*	@description CRUD ACTION list
*

**/


class BereichList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsBereich.loadBereichList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsBereich.deleteBereich(this.state.idDelete).then(data => {
      this.props.actionsBereich.loadBereichList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "Bereichsbeschreibung",
        type: "string",
        label: "Bereichsbeschreibung"
      }, 
      {
        id: "Bereichsname",
        type: "string",
        label: "Bereichsname"
      }, 
      {
        id: "bereichsbild",
        type: "custom",
        label: "Bereichsbild"
      },
    ];
    const link = "/bereichs/";

    return (
      <div>
        <h1>Bereich List</h1>

        <EnhancedTable
          data={this.props.list}
          columns={columns}
          link={link}
          onDelete={this.delete.bind(this)}
        />

        <DialogDelete
          open={this.state.openDialogDelete}
          onClose={this.closeDialogDelete.bind(this)}
          onConfirm={this.confirmDialogDelete.bind(this)}
        />

        {/*
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Bereichsbeschreibung</TableCell>
              <TableCell align="right">Bereichsname</TableCell>
              <TableCell align="right">Bereichsbild</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/bereichs/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.Bereichsbeschreibung }</TableCell>
                <TableCell align="right">{ row.Bereichsname }</TableCell>
                <TableCell align="right">{ row.bereichsbild }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/bereichs/new">
            <Button variant="contained" color="primary">
              Add
            </Button>
          </Link>
        </div>
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
BereichList.propTypes = { 
  actionsBereich: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.BereichListReducer.listBereich
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BereichList);
