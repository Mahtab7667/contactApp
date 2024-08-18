import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { FaPlusCircle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import useDisclouse from "./hooks/useDisclouse";
import NotFoundContact from "./components/NotFoundContact";

const App = () => {
  let { isOpen, onOpen, onClose } = useDisclouse();

  /// data fetching ///
  let [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contact");
        onSnapshot(contactsRef, (snapshot) => {
          const contactList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactList);
          return contactList;
        });
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);
  /// data fetching ends here ///

  // searching filtering
  const filterContacts = (e) => {
    const val = e.target.value;

    const contactsRef = collection(db, "contact");
    onSnapshot(contactsRef, (snapshot) => {
      const contactList = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = contactList.filter((contact) =>
        contact.name.toLowerCase().includes(val.toLowerCase())
      );

      setContacts(filteredContacts);
      return filterContacts;
    });
  };

  return (
    <>
    <div className="max-w-[370px] m-auto mt-6 px-4 bg-yellow bg-opacity-100 border border-gray-300 rounded-lg shadow-lg pb-4">
  <Navbar />

  {/* search and add button start */}
  <div className="flex gap-4">
    <div className="flex relative items-center flex-grow">
      <FiSearch className="text-gray-600 text-2xl absolute ml-3" />
      <input
        onChange={filterContacts}
        type="text"
        className="bg-white border border-gray-300 rounded-md h-10 flex-grow text-gray-800 placeholder-gray-400 pl-10 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-300"
        placeholder="Search Contacts..."
      />
    </div>
    <FaPlusCircle
      onClick={onOpen}
      className="text-5xl text-purple-600 cursor-pointer hover:text-purple-500 transition duration-200 ease-in-out"
    />
  </div>
  {/* search and add button end */}

  {/* contacts displaying start */}
  <div className="mt-4 flex flex-col gap-2">
    {contacts.length <= 0 ? (
      <NotFoundContact />
    ) : (
      contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} />
      ))
    )}
  </div>
  {/* contacts displaying end */}

{/* footer strt */}
  <hr className="mt-4 text-purple-600"/>
  <div id="footer" className="mt-2 max-w-[370px] bg-gradient-to-r from-blue-500 to-purple-600 text-xl font-semibold text-white shadow-lg rounded-lg px-4 py-2">
    <p className="mx-auto">Effortlessly organize, update, and search through your contact list</p>
  </div>
{/* footer end */}

</div>
    <AddAndUpdateContact isOpen={isOpen} onClose={onClose} />
    <ToastContainer position="bottom-center" />
    </>
  );
};

export default App;

// upar snapshot method use krenge realtime data fetching ke liye.
// useEffect(()=>{
//   const getContacts = async()=>{
//    try {
//      const contactsRef = collection(db,"contact")
//      // console.log(contactsRef);
//      const contactsSnapshot= await getDocs(contactsRef);
//      // console.log(contactsSnapshot);
//      const contactList=contactsSnapshot.docs.map((doc)=>{
//        return{
//          id:doc.id,
//          ...doc.data()
//        }
//      });
//      // console.log(contactList);
//      setContacts(contactList)
//    } catch (error) {}
//   }
//   getContacts();
//  },[])
