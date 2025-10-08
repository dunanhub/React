import React from "react";
import { Formik, Form, Field, ErrorMessage } from "Formik";
import * as Yup from "yup";

const Schema = Yup.object({
  fullName: Yup.string().trim().required("Full Name is required"),
  email: Yup.string().trim().email("Invalid email format").required("Email is required"),
  password: Yup.string().trim().min(6, "Password must be at least 6 characters").required("Password is required"),
  course: Yup.string().oneOf(["Course A", "Course B", "Course C"]).required("Please select a course"),
  gender: Yup.string().oneOf(["Male", "Female"]).required("Please select a gender"),
  dateOfBirth: Yup.date().required("Date of Birth is required"),
  city: Yup.string().trim().required("City is required"),
  country: Yup.string().required("Country is required"),
  zipcode: Yup.string().matches(/^\d{5}(-\d{4})?$/, {message: "Zipcode must be in the format 12345 or 12345-6789", excludeEmptyString: true}),
})

// function validate(values) {
//   const errors = {};

//   if (!values.fullName.trim()) {
//     errors.fullName == "FullName is required";
//   }
//   if (!values.email.trim()) {
//     errors.email == "Email is required";
//   }
//   else {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
//     if (!emailRegex.test(values.email)) {
//       errors.email = "Invalid email format";
//     }
//   }
//   if (!values.password.trim()) {
//     errors.password == "Password is required";
//   }
//   else if (values.password.length < 6) {
//     errors.password = "Password must be at least 6 characters";
//   }
//   if (!values.course.trim()) {
//     errors.course = "Please select a course";
//   }
//   if (!values.gender.trim()) {
//     errors.gender = "Please select a gender";
//   }
//   if (!values.dateOfBirth.trim()) {
//     errors.dateOfBirth = "Date of Birth is required";
//   }
//   if (!values.city.trim()) {
//     errors.city = "City is required";
//   }
//   if (!values.country.trim()) {
//     errors.country = "Country is required";
//   }
//   if (values.zipcode && !/^\d{5}(-\d{4})?$/.test(values.zipcode)) {
//     errors.zipcode = "Zipcode must be in the format 12345 or 12345-6789";
//   }

//   return errors;
// };

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  course: "",
  gender: "",
  dateOfBirth: "",
  city: "",
  country: "",
  phone: "",
  education: "",
  address: "",
  state: "",
  zipcode: "",
};

export default function CourseApplicationForm() {
  return (
    <>
      <div className="ca-wrap">
        <h1 className="ca-title">
          Course Application
        </h1>

        <div className="ca-card">
          <Formik
            initialValues={initialValues}
            validationSchema={Schema}
            onSubmit={(values) => {
              alert(JSON.stringify(values, null, 2));
            }}
          >
            {({ errors, touched, values }) => (
              <Form className="ca-form">
                <div className="ca-group ca-full">
                  <label className="ca-label ca-req" htmlFor="fullName">Full Name</label>
                  <Field
                    id="fullName"
                    name="fullName"
                    type="text"
                    className={`ca-input ${touched.fullName && errors.fullName ? "error" : ""}`}
                    placeholder="Your Full Name"
                  >
                  </Field>
                  <ErrorMessage
                    name="fullName"
                    component="div"
                    className="ca-error"
                  ></ErrorMessage>
                </div>

                <div className="ca-row ca-full">
                  <div className="ca-group">
                    <label className="ca-label ca-req" htmlFor="email">Email</label>
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      className={`ca-input ${touched.email && errors.email ? "error" : ""}`}
                      placeholder="example@example.com"
                    >
                    </Field>
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="ca-error"
                    ></ErrorMessage>
                  </div>
                  <div className="ca-group">
                    <label className="ca-label ca-req" htmlFor="password">Password</label>
                    <Field
                      id="password"
                      name="password"
                      type="password"
                      className={`ca-input ${touched.password && errors.password ? "error" : ""}`}
                      placeholder="******"
                    >
                    </Field>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="ca-error"
                    ></ErrorMessage>
                  </div>
                </div>

                <div className="ca-row ca-full">
                  <div className="ca-group">
                    <span className="ca-label ca-req">Course</span>
                    <div className="ca-radio-row">
                      <label className="ca-radio">
                        <Field type="radio" name="course" value="Course A" />
                        Course A
                      </label>
                      <label className="ca-radio">
                        <Field type="radio" name="course" value="Course B" />
                        Course B
                      </label>
                      <label className="ca-radio">
                        <Field type="radio" name="course" value="Course C" />
                        Course C
                      </label>
                    </div>
                    <div>
                     { values.course === "Course B" ? <p>Вы выбрали курс Б</p> : null }
                    </div>
                    <ErrorMessage
                      name="course"
                      component="div"
                      className="ca-error"
                    ></ErrorMessage>
                  </div>
                </div>

                <div className="ca-row ca-full">
                  <div className="ca-group">
                    <span className="ca-label ca-req">Gender</span>
                    <div className="ca-radio-row">
                      <label className="ca-radio">
                        <Field type="radio" name="gender" value="Male" />
                        Male
                      </label>
                      <label className="ca-radio">
                        <Field type="radio" name="gender" value="Female" />
                        Female
                      </label>
                    </div>
                    <ErrorMessage
                      name="gender"
                      component="div"
                      className="ca-error"
                    ></ErrorMessage>
                  </div>
                </div>
                
                <div className="ca-row ca-full">
                  <div className="ca-group">
                    <label htmlFor="dateOfBirth" className="ca-label ca-req">Date of Birth</label>
                    <Field
                      id="dateOfBirth"
                      name="dateOfBirth"
                      type="date"
                      className={`ca-input ${touched.dateOfBirth && errors.dateOfBirth ? "error" : ""}`}
                    />
                    <ErrorMessage
                      name="dateOfBirth"
                      component="div"
                      className="ca-error"
                    />
                  </div>

                  <div className="ca-group">
                    <label htmlFor="phone" className="ca-label ca-req">Phone</label>
                    <Field
                      id="phone"
                      name="phone"
                      type="tel"
                      className={`ca-input ${touched.phone && errors.phone ? "error" : ""}`}
                      placeholder="+1 234 567 890"
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="ca-error"
                    />
                  </div>
                </div>

                <div className="ca-row ca-full">
                  <div className="ca-group">
                    <label className="ca-label" htmlFor="address">
                      Address
                    </label>
                    <Field
                      as="textarea"
                      id="address"
                      name="address"
                      className="ca-textarea"
                      placeholder="Street, house, apt."
                    />
                  </div>

                  <div className="ca-group">
                    <label className="ca-label" htmlFor="education">
                      Education
                    </label>
                    <Field
                      as="select"
                      id="education"
                      name="education"
                      className="ca-select"
                    >
                      <option value="">Select education</option>
                      <option value="School">School</option>
                      <option value="College">College</option>
                      <option value="University">University</option>
                    </Field>
                  </div>
                </div>

                <div className="ca-row ca-full">
                  <div className="ca-group">
                    <label className="ca-label ca-required" htmlFor="city">
                      City
                    </label>
                    <Field
                      id="city"
                      name="city"
                      type="text"
                      className={`ca-input ${
                        touched.city && errors.city ? "error" : ""
                      }`}
                      placeholder="City"
                    />
                    <ErrorMessage
                      name="city"
                      component="div"
                      className="ca-error"
                    />
                  </div>

                  <div className="ca-group">
                    <label className="ca-label" htmlFor="state">
                      State
                    </label>
                    <Field
                      id="state"
                      name="state"
                      type="text"
                      className="ca-input"
                      placeholder="State/Region"
                    />
                  </div>
                </div>

                <div className="ca-row ca-full">
                  <div className="ca-group">
                    <label className="ca-label ca-required" htmlFor="country">
                      Country
                    </label>
                    <Field
                      as="select"
                      id="country"
                      name="country"
                      className={`ca-select ${
                        touched.country && errors.country ? "error" : ""
                      }`}
                    >
                      <option value="">Select country</option>
                      <option value="Kazakhstan">Kazakhstan</option>
                      <option value="USA">USA</option>
                      <option value="UK">UK</option>
                      <option value="Germany">Germany</option>
                      <option value="Turkey">Turkey</option>
                      <option value="China">China</option>
                      <option value="India">India</option>
                      <option value="Other">Other</option>
                    </Field>
                    <ErrorMessage
                      name="country"
                      component="div"
                      className="ca-error"
                    />
                  </div>

                  <div className="ca-group">
                    <label className="ca-label" htmlFor="zipcode">
                      Zip Code
                    </label>
                    <Field
                      id="zipcode"
                      name="zipcode"
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      className={`ca-input ${
                        touched.zipcode && errors.zipcode ? "error" : ""
                      }`}
                      placeholder="e.g. 050000"
                    />
                    <ErrorMessage
                      name="zipcode"
                      component="div"
                      className="ca-error"
                    />
                  </div>
                </div>

                <div className="ca-full">
                  <button className="ca-submit" type="submit">Submit</button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  )
}