import { Link } from "react-router-dom";
import { Form } from 'semantic-ui-react'


const Edit = ({ handleSubmit, handleChangeM, handleChange, title, message, valid, todo }) => {


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

          </div> : <div className="display-flex">
          
            {
              todo.map(items => {
            
              <ul>
                <li key={items.id}>
                  {items.Title}{items.Message}
                </li>
              </ul>

            })
            }
          </div>
      }
    </>
  )
}

export default Edit