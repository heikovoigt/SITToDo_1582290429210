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
/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE FUNCTIONS IN ToDoActionsGenerated.js PLEASE EDIT ../ToDoActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import ToDoApi from "../../../api/ToDoApi";

let actionsFunction = {

  //CRUD METHODS

  // Create todo
  createToDo: function(todo) {
    return function(dispatch) {
      return ToDoApi
        .createToDo(todo)
        .then(todo => {
          dispatch(actionsFunction.createToDoSuccess(todo));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createToDoSuccess: function(todo) {
    return { type: types.CREATE_TODO_SUCCESS, payload: todo };
  },


  // Delete todo
  deleteToDo: function(id) {
    return function(dispatch) {
      return ToDoApi
        .deleteToDo(id)
        .then(todo => {
          dispatch(actionsFunction.deleteToDoSuccess(todo));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteToDoSuccess: function(todo) {
    return { type: types.DELETE_TODO_SUCCESS, payload: todo };
  },


  // Find by Responsible
  findByResponsible: function(key) {
    return function(dispatch) {
      return ToDoApi
        .findByResponsible(key)
        .then(item => {
          dispatch(actionsFunction.findByResponsibleSuccess(item));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  findByResponsibleSuccess: function(item) {
    return { type: types.FINDBYRESPONSIBLE_TODO_SUCCESS, payload: item };
  },


  // Find by Subject
  findBySubject: function(key) {
    return function(dispatch) {
      return ToDoApi
        .findBySubject(key)
        .then(item => {
          dispatch(actionsFunction.findBySubjectSuccess(item));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  findBySubjectSuccess: function(item) {
    return { type: types.FINDBYSUBJECT_TODO_SUCCESS, payload: item };
  },


  // Get todo
  loadToDo: function(id) {
    return function(dispatch) {
      return ToDoApi
        .getOneToDo(id)
        .then(todo => {
          dispatch(actionsFunction.loadToDoSuccess(todo));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadToDoSuccess: function(todo) {
    return { type: types.GET_TODO_SUCCESS, payload: todo };
  },

  // Load  list
  loadToDoList: function() {
    return function(dispatch) {
      return ToDoApi
        .getToDoList()
        .then(list => {
          dispatch(actionsFunction.loadToDoListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadToDoListSuccess: function(list) {
    return { type: types.LIST_TODO_SUCCESS, payload: list };
  },

	
  // Save todo
  saveToDo: function(todo) {
    return function(dispatch) {
      return ToDoApi
        .saveToDo(todo)
        .then(todo => {
          dispatch(actionsFunction.saveToDoSuccess(todo));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveToDoSuccess: function(todo) {
    return { type: types.UPDATE_TODO_SUCCESS, payload: todo };
  },


};

export default actionsFunction;
