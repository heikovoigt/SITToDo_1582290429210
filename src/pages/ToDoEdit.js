/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5e4fd5ab52a8e9561a0ce3a3
*
* You will get 10% discount for each one of your friends
* 
*/
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
import { DateTimePicker } from "material-ui-pickers";

// Custom Actions


// START IMPORT ACTIONS
import ToDoActions from "../redux/actions/ToDoActions";

// END IMPORT ACTIONS

/** APIs

* actionsToDo.create
*	@description CRUD ACTION create
*	@param ToDo obj - Object to insert
*
* actionsToDo.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id ToDo
*	@returns ToDo
*
* actionsToDo.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id ToDo
*	@returns ToDo
*

**/

class ToDoEdit extends Component {
  // Init todo
  constructor(props) {
    super(props);
    this.state = {
      todo: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsToDo.loadToDo(this.props.match.params.id);
    }
    
  }

  // Insert props todo in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      todo: props.todo
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.todo._id) {
      this.props.actionsToDo.saveToDo(this.state.todo).then(data => {
        this.props.history.push("/todos/");
      });
    } else {
      this.props.actionsToDo.createToDo(this.state.todo).then(data => {
        this.props.history.push("/todos/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>ToDo Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="Body"
            label="Body"
            value={this.state.todo.Body || ""}
            onChange={Utils.handleChange.bind(this, "todo")}
            margin="normal"
            fullWidth
          />
          
          <DateTimePicker
            id="DueDate"
            label="DueDate"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.todo.DueDate
                ? new Date(this.state.todo.DueDate)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "todo", "DueDate")}
            fullWidth
            autoOk
            disableFuture
            required
            {...(!this.state.todo.DueDate && this.state.todo.DueDate === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="Responsible"
            label="Responsible"
            value={this.state.todo.Responsible || ""}
            onChange={Utils.handleChange.bind(this, "todo")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.todo.Responsible && this.state.todo.Responsible === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="Subject"
            label="Subject"
            value={this.state.todo.Subject || ""}
            onChange={Utils.handleChange.bind(this, "todo")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.todo.Subject && this.state.todo.Subject === ""
              ? { error: true }
              : {})}
          />
          

          {/* Footer */}
          <div className="footer-card">
            <Link to="/todos/">Back to list</Link>

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
    actionsToDo: bindActionCreators(ToDoActions, dispatch),
  };
};

// Validate types
ToDoEdit.propTypes = { 
  actionsToDo: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    todo: state.ToDoEditReducer.todo
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoEdit);
