import { Link } from "react-router-dom";
import { Form } from 'semantic-ui-react'
//import { useState } from 'react';

const Edit = ({ arValid, setAvalid, changeData, deleteData, btn, handleSubmit, handleChangeM, handleChange, title, message, valid, todo, editTodo }) => {


  return (
    <>
      <Link to="/"><i className="fa-solid fa-backward"></i></Link>
      {
        valid ?

          <div className="dialog mainpage">
            <div className="col-md-3"></div>
            <div className="col-md-4 form-box">
              <Form onSubmit={handleSubmit}>
                <Form.Group widths='equal'>
                  <Form.Input fluid placeholder='Title' required value={title} onChange={handleChange} />
                </Form.Group>

                <Form.TextArea placeholder='Message.....' required value={message} onChange={handleChangeM} />
                {
                  btn ?
                    <Form.Button id="btn-1"><i className="fa-regular fa-floppy-disk"></i></Form.Button>
                    :
                    <Form.Button id="btn-2"><i className="fa-regular fa-floppy-disk"></i></Form.Button>
                }

              </Form>
            </div>
            <div className="col-md-3"></div>

          </div> : <div className="display-flex justify-content flex-wrap">


            {
              todo.map((items) => (
                <div className="col-md-30" key={items.id}>

                  <ul className="todolist">
                    <li>
                      {
                        arValid ?
                          <span className="edit-area">
                            <span className="float-left">
                              <span className="title"><b>{items.Title}</b></span><br />
                              <span className="message">{items.Message}</span>
                            </span>
                            <span className="float-right">
                              <i className="fa-solid fa-pen-to-square" onClick={() => editTodo(items.id)}></i>
                              <i className="fa-solid fa-ellipsis" onClick={() => setAvalid(false)}></i>
                            </span>
                          </span>
                          :
                          <span className="remove-area">
                            <i className="fa-solid fa-trash-can" onClick={() => deleteData(items.id)}></i>
                            <i className="fa-solid fa-arrow-right" onClick={() => changeData(items.id)}></i>
                          </span>
                      }
                    </li>
                  </ul>
                </div>
              ))
            }
          </div>
      }
    </>
  )
}

export default Edit