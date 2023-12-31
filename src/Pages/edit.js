import { Link } from "react-router-dom";
import { Form } from 'semantic-ui-react'
import { useState } from 'react';

const Edit = ({ handleSubmit, handleChangeM, handleChange, title, message, valid, todo }) => {

  const [arValid, setAvalid] = useState(true);
  
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
                <Form.Button><i className="fa-regular fa-floppy-disk"></i></Form.Button>
              </Form>
            </div>
            <div className="col-md-3">

            </div>

          </div> : <div className="display-flex justify-content flex-wrap">


            {
              todo.map(items => (
                <div className="col-md-30">

                  <ul className="todolist">
                    <li key={items.id}>
                    {
                      arValid ?  
                      <span className="edit-area">
                        <span className="float-left">
                          <span className="title"><b>{items.Title}</b></span><br />
                          <span className="message">{items.Message}</span>
                        </span>
                        <span className="float-right">
                          <i class="fa-solid fa-ellipsis" onClick={()=> setAvalid(false)}></i>
                        </span>
                      </span>
                      :
                        <span className="remove-area">
                          <i class="fa-solid fa-trash-can">Delete</i>
                          <i class="fa-solid fa-arrow-right" onClick={()=> setAvalid(true)}></i>
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