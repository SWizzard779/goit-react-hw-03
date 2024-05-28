import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import styles from './ContactForm.module.css';

const ContactForm = ({ addContact }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().min(3, 'Must be at least 3 characters').required('Required'),
      number: Yup.string()
      .matches(/^(\d{3}-\d{2}-\d{2})$/, 'Must be in the format XXX-XX-XX')
      .min(3, 'Must be at least 3 characters')
      .required('Required'),
    }),
    onSubmit: (values, { resetForm }) => {
      const newContact = {
        id: uuidv4(),
        name: values.name,
        number: values.number,
      };
      addContact(newContact);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? (
        <div className={styles.error}>{formik.errors.name}</div>
      ) : null}

      <label htmlFor="number">Number</label>
      <input
        id="number"
        name="number"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.number}
      />
      {formik.touched.number && formik.errors.number ? (
        <div className={styles.error}>{formik.errors.number}</div>
      ) : null}

      <button type="submit" className='button'>Add Contact</button>
    </form>
  );
};

export default ContactForm;
