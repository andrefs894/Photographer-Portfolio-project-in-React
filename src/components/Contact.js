import '../css/Contact.css';
import {useFormik} from 'formik';
import * as yup from 'yup'

function Contact() {
  const formik = useFormik({
    initialValues: {
      name:"",
      email:"",
      subject:"",
      message:""
    },
    onSubmit:(e) => {
      e.preventDefault()
    },
    validationSchema: yup.object().shape({
      name: yup.string().required("Required."),
      email: yup.string().email("Please provide a valid email.").required("Required."),
      subject: yup.string().required("Required."),
      message: yup.string().required("Required.")
    })
  })
    return (
      <div className="contact-container" id="contact">
        <div>
          <h1>Contact</h1>
          <hr />
        </div>
        <form onSubmit={formik.handleSubmit} noValidate>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange} />
          { formik.errors.name && formik.touched.name && <p className='error'>{formik.errors.name}</p> }
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange} />
          { formik.errors.email && formik.touched.email && <p className='error'>{formik.errors.email}</p> }
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            value={formik.values.subject}
            onChange={formik.handleChange} />
          { formik.errors.subject && formik.touched.subject && <p className='error'>{formik.errors.subject}</p> }
          <label htmlFor="message">Message:</label>
          <textarea
            type="text"
            id="message"
            value={formik.values.message}
            onChange={formik.handleChange} />
          { formik.errors.message && formik.touched.message && <p className='error'>{formik.errors.message}</p> }
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }

  export default Contact;