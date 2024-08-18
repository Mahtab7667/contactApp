import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../config/firebase";
import useDisclouse from "../hooks/useDisclouse";
import AddAndUpdateContact from "./AddAndUpdateContact";
import { toast } from "react-toastify";

const ContactCard = ({ contact }) => {
  // editing contact
  let { isOpen, onOpen, onClose } = useDisclouse();

  // deleting contact
  const contactDelete = async (id) => {
    try {
      // const contactRef=doc(db,"contact",id) // yahan pr collection ka nhi , db ke andr contact collection ke andr id wale document ka refrence cjahye fr usko deleteDoc se delete kr denge
      // await deleteDoc(contactRef);

      await deleteDoc(doc(db, "contact", id));
      toast.success("Contact Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };
  // deleting contact end

  return (
    <>
      {/* <div className="bg-yellow flex justify-between items-center p-2 rounded-lg">
        <div className="flex gap-1">
          <HiOutlineUserCircle className="text-orange text-4xl" />

          <div className="">
            <h1 className="font-medium">{contact.name}</h1>
            <p className="text-sm">{contact.email}</p>
          </div>
        </div>

        <div className="flex text-3xl">
          <RiEditCircleLine className="cursor-pointer" onClick={onOpen} />
          <IoMdTrash
            onClick={() => contactDelete(contact.id)}
            className="text-orange cursor-pointer"
          />
        </div>
      </div> */}
  <div className="bg-white hover:bg-gray-100 flex justify-between items-center p-3 rounded-lg border border-gray-200 shadow-sm transition duration-200 ease-in-out">
  <div className="flex gap-3 items-center">
    <HiOutlineUserCircle className="text-4xl  text-purple-600 cursor-pointer hover:text-purple-500 transition duration-200 ease-in-out" />
    <div>
      <h1 className="font-medium text-gray-900">{contact.name}</h1>
      <p className="text-sm text-gray-600">{contact.email}</p>
    </div>
  </div>

  <div className="flex gap-4 text-xl">
    <div className="p-2 rounded-full flex items-center justify-center cursor-pointer hover:opacity-90 transition duration-200 ease-in-out">
      <RiEditCircleLine
        className="text-3xl  text-purple-600 cursor-pointer hover:text-purple-500 transition duration-200 ease-in-out"
        style={{
          background: 'linear-gradient(90deg, #FDBB2D 0%, #22C1C3 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
        onClick={onOpen}
      />
    </div>
    <div className="p-2 rounded-full flex items-center justify-center cursor-pointer hover:opacity-90 transition duration-200 ease-in-out">
      <IoMdTrash
        className="text-3xl  text-red-600 cursor-pointer hover:text-red-500 transition duration-200 ease-in-out"
        style={{
          background: 'linear-gradient(90deg, #FDBB2D 0%, #22C1C3 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
        onClick={() => contactDelete(contact.id)}
      />
    </div>
  </div>
</div>




      
      <AddAndUpdateContact
        isUpdate
        isOpen={isOpen}
        onClose={onClose}
        contact={contact}
      />
    </>
  );
};

export default ContactCard;
