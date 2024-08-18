<div className="max-w-[370px] m-auto px-4">
        <Navbar />

        {/* search and add button strt */}
        {/* <div className='flex gap-2'>
      <div className='flex relative items-center flex-grow'>
        <FiSearch className='text-white text-3xl absolute ml-1'/>
        <input
        onChange={filterContacts}
         type="text" 
         className='bg-transparent border border-white rounded-md h-10 flex-grow text-white
        pl-10'/>
      </div>
      <FaPlusCircle onClick={onOpen} className='text-5xl text-white cursor-pointer'/>
        </div> */}

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
            className="text-5xl text-white cursor-pointer"
          />
        </div>
        {/* search and add button end */}

        {/* contacts displaying strt*/}
        <div className="mt-4 flex flex-col gap-2">
          {contacts.length <= 0 ? (
            <NotFoundContact />
          ) : (
            contacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))
          )}
        </div>
        {/* contacts displaying end*/}
        
    </div>