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
 *  TO CUSTOMIZE APIS IN ToDoApiGenerated.js PLEASE EDIT ../ToDoApi.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 
// Dependencies
import axios from "axios";
import { properties } from "../../config/properties";

class ToDoApiGenerated {

  static contextUrl = properties.endpoint + "/todo";

  // CRUD METHODS

  /**
  * ToDoService.create
  *   @description CRUD ACTION create
  *   @param ToDo obj Object to insert
  *
  */
  static createToDo(todo) {
    return axios.post(ToDoApiGenerated.contextUrl, todo )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * ToDoService.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id ToDo
  *
  */
  static deleteToDo(id) {
    return axios.delete(ToDoApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * ToDoService.findByResponsible
  *   @description CRUD ACTION findByResponsible
  *   @param Objectid key Id of the resource Responsible to search
  *
  */
  static findByResponsible(id) {
    return axios.get(ToDoApiGenerated.contextUrl + "/findByResponsible/" + id )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * ToDoService.findBySubject
  *   @description CRUD ACTION findBySubject
  *   @param Objectid key Id of the resource Subject to search
  *
  */
  static findBySubject(id) {
    return axios.get(ToDoApiGenerated.contextUrl + "/findBySubject/" + id )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * ToDoService.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id ToDo
  *   @returns ToDo
  *
  */
  static getOneToDo(id) {
    return axios.get(ToDoApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * ToDoService.list
  *   @description CRUD ACTION list
  *   @returns ARRAY OF ToDo
  *
  */
  static getToDoList() {
    return axios.get(ToDoApiGenerated.contextUrl)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * ToDoService.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id ToDo
  *   @returns ToDo
  *
  */
  static saveToDo(todo) {
    return axios.post(ToDoApiGenerated.contextUrl + "/" + todo._id, todo )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }



    // Custom APIs
}

export default ToDoApiGenerated;
