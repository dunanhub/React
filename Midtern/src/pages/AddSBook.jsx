import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object({
  title: Yup.string().min(2, "Minimum 2 symbols").required('Title is required'),
  author: Yup.string().required('Author is required'),
  genre: Yup.string().oneOf(['Fiction', 'Non-Fiction', 'Tech'], 'Invalid genre').required('Genre is required'),
  rating: Yup.number().typeError("Invalid rating").min(0, 'Minimum 0').max(5, 'Maximum 5').required('Rating is required'),
});

export default function AddSBook({ onAdd }) {
  const navigate = useNavigate();

  return (
    <section>
      <h2>Add Book</h2>
      <Formik
        initialValues={{ title: '', author: '', genre: '', rating: '' }}
        validationSchema={schema}
        onSubmit={(values, { resetForm }) => {
          const book = {
            title: values.title.trim(),
            author: values.author.trim(),
            genre: values.genre,
            rating: Number(parseFloat(values.rating).toFixed(1)),
          };
          onAdd(book);
          resetForm();
          navigate('/books');
        }}
      >
        {({ isSubmitting }) => (
          <Form className='form'>
            <label>
              <span>Title:</span>
              <Field name="title" className="input" placeholder="Enter book title" />
              <ErrorMessage name="title" component="div" className="error" />
            </label>

            <label>
              <span>Author:</span>
              <Field name="author" className="input" placeholder="Enter author name" />
              <ErrorMessage name="author" component="div" className="error" />
            </label>

            <label>
              <span>Genre:</span>
              <Field name="genre" as="select" className="input">
                <option value="">Select genre</option>
                <option value="Fiction">Fiction</option>
                <option value="Non-Fiction">Non-Fiction</option>
                <option value="Tech">Tech</option>
              </Field>
              <ErrorMessage name="genre" component="div" className="error" />
            </label>

            <label>
              <span>Rating:</span>
              <Field name="rating" className="input" placeholder="Enter rating (0-5)" />
              <ErrorMessage name="rating" component="div" className="error" />
            </label>

            <button type="submit" className="btn" disabled={isSubmitting}>
              {isSubmitting ? 'Adding...' : 'Add Book'}
            </button>
          </Form>
        )}
      </Formik>
    </section>
  )
}