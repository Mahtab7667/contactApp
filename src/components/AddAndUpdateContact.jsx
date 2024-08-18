import React from 'react'
import Modal from './Modal'
import {Formik,Form, Field, ErrorMessage} from 'formik'
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore'
import { db } from '../config/firebase'
import { toast } from 'react-toastify'
import * as Yup from 'yup';


// validation
const contactsSchemaValidation=Yup.object().shape({
  name:Yup.string().required("Name is Neccesary to write"),
  email:Yup.string().email("enter a valid email").required("email also Neccesary to write")
})
// validation end


const AddAndUpdateContact = ({isOpen,onClose,isUpdate,contact}) => {
  // add code
  const addContact=async (contact)=>{
    try {
      const contactsRef=collection(db,"contact")
      await addDoc(contactsRef,contact);
      onClose();
      toast.success("Contact Addedd Successfully")
    } catch (error) {
      console.log(error);
    }
  }

  // update code
  const updateContact=async (contact,id)=>{
    try {
      const contactsRef=doc(db,"contact",id)
      await updateDoc(contactsRef,contact);
      onClose();
      toast.success("Contact Updated Successfully")
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <>
    <Modal isOpen={isOpen} onClose={onClose}>
    {/* child of modal start */}
    <Formik 
    validationSchema={contactsSchemaValidation}
    initialValues={isUpdate?{
       name:contact.name,
        email:contact.email
    }:{
        name:"",
        email:""
    }}
    onSubmit={(values)=>{
        console.log(values);
        isUpdate? updateContact(values,contact.id):
        addContact(values);
    }}
    > 
        <Form className='flex flex-col gap-3'>
          <div className='flex flex-col gap-1'>
            <label htmlFor='name'>Name</label>
            <Field name="name" className="border h-10"/>
            <div className='text-red-600 text-xs'>
              <ErrorMessage name='name'/>
            </div>
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor='email'>Email</label>
            <Field  name="email" className="border h-10"/>
            <div className='text-red-600 text-xs'>
              <ErrorMessage name='email'/>
            </div>
          </div>

          <button className='bg-orange px-3 py-1.5 border self-end'>{isUpdate?"Update":"Add"} Contact</button>
        </Form>
    </Formik>
    {/* child of modal end */}

    </Modal>
    </>
  )
}

export default AddAndUpdateContact