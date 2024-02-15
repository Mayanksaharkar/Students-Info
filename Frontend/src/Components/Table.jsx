import React, { useContext, useState } from "react";
import StudContext from "../StudContext";

function Table() {
  const { studs, update, Delete } = useContext(StudContext);
  const [data, setData] = useState({});
  const handleUpdate = () => {
    update(data);
  };

  const handleUpdateClick = (curr) => {
    setData({
      id: curr.id,
      fname: curr.fname,
      lname: curr.lname,
      address: curr.address,
      program: curr.program,
      maritalStatus: curr.maritalStatus,
      dob: curr.dob,
    });
    document.getElementById("my_modal_5").showModal();
  };

  return (
    <>
      <button
        className='btn'
        onClick={() => document.getElementById("my_modal_5").showModal()}
        style={{ display: "none" }}
      ></button>
      <dialog id='my_modal_5' className='modal modal-bottom sm:modal-middle'>
        <div className='modal-box'>
          <form className='w-full h-full mt-4'>
            <div className='grid grid-rows-8 w-full h-full place-content-center gap-2'>
              <div className=' '>
                <label className='form-control '>
                  id:
                  <input
                    type='text'
                    placeholder='ID Here'
                    className='input input-bordered w-full max-w-full rounded'
                    value={data.id}
                    onChange={(e) => {
                      setData({ id: e.target.value });
                    }}
                  />
                </label>
              </div>
              <div className='grid row-span-1 grid-cols-2 gap-3 columns-6'>
                <div className='flex col-md-6 w-full col-span-1 justify-center'>
                  <label className='form-control w-full max-w-xs'>
                    First name:
                    <input
                      type='text'
                      placeholder='First Name Here'
                      className='input input-bordered w-full max-w-full rounded'
                      value={data.fname}
                      onChange={(e) => {
                        setData({ fname: e.target.value });
                      }}
                    />
                  </label>
                </div>
                <div className='flex col-span-1 justify-center'>
                  <label className='form-control w-full min-w-full'>
                    Last name:
                    <input
                      type='text'
                      placeholder='Last Name Here'
                      className='input input-bordered w-full max-w-full rounded'
                      value={data.lname}
                      onChange={(e) => {
                        setData({ lname: e.target.value });
                      }}
                    />
                  </label>
                </div>
              </div>
              <div className=''>
                <label className='form-control'>
                  Date of Birth :
                  <input
                    type='text'
                    placeholder='Date of Birth Name Here'
                    className='input input-bordered w-full  rounded'
                    value={data.dob}
                    onChange={(e) => {
                      setData({ dob: e.target.value });
                    }}
                  />
                </label>
              </div>
              <div className=''>
                <label className='form-control w-full'>
                  Program:
                  <input
                    type='text'
                    placeholder='Program Here'
                    className='input input-bordered w-full  rounded'
                    value={data.program}
                    onChange={(e) => {
                      setData({ program: e.target.value });
                    }}
                  />
                </label>
              </div>
              <div className=''>
                <label className='form-control w-full max-w-full'>
                  Address:
                  <input
                    type='text'
                    placeholder='Address Here'
                    className='input input-bordered w-full max-w-full rounded'
                    value={data.address}
                    onChange={(e) => {
                      setData({ address: e.target.value });
                    }}
                  />
                </label>
              </div>
              <div className=''>
                <label className='form-control w-full max-w-full'>
                  Country:
                  <input
                    type='text'
                    placeholder='Country Here'
                    className='input input-bordered w-full max-w-full rounded'
                    value={data.country}
                    onChange={(e) => {
                      setData({ Country: e.target.value });
                    }}
                  />
                </label>
              </div>
              <div className=''>
                <label className='form-control w-full '>
                  Marital Status:
                  <input
                    type='text'
                    placeholder='Marital Status Here'
                    className='input input-bordered w-full  rounded'
                    value={data.maritalStatus}
                    onChange={(e) => {
                      setData({ maritalStatus: e.target.value });
                    }}
                  />
                </label>
              </div>
              <div className='flex col-md-6 mt-4 w-full justify-center '>
                <button
                  className='btn btn-active btn-primary w-full max-w-xs '
                  onClick={handleUpdate}
                >
                  Update Note
                </button>
              </div>
            </div>
          </form>

          <div className='modal-action'>
            <form method='dialog'>
              {/* if there is a button in form, it will close the modal */}
              <button className='btn' id='closeBtn'>
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>

      <table>
        <div className='overflow-x-auto'>
          <table className='table bg-base-100 rounded-xl text-center'>
            <thead className='bg-neutral text-primary text-lg '>
              <tr>
                <th>Student ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Date of Birth</th>
                <th>Program</th>
                <th>Address</th>
                <th>Country</th>
                <th>Marital Status</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {studs.map((stud) => (
                <tr key={stud.id}>
                  <td>{stud.id}</td>
                  <td>{stud.fname}</td>
                  <td>{stud.lname}</td>
                  <td>{stud.dob}</td>
                  <td>{stud.program}</td>
                  <td>{stud.address}</td>
                  <td>{stud.country}</td>
                  <td>{stud.maritalStatus}</td>
                  <td>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      height={16}
                      width={16}
                      viewBox='0 0 512 512'
                      className='flex justify-center align-middle cursor-pointer'
                      onClick={(e) => {
                        handleUpdateClick(stud);
                      }}
                    >
                      <path
                        fill='#6a75ef'
                        d='M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z'
                      />
                    </svg>
                  </td>

                  <td>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      height={16}
                      width={16}
                      viewBox='0 0 448 512'
                      className='grid place-items-center cursor-pointer'
                      onClick={(e) => {
                        e.preventDefault();
                        Delete(stud._id);
                      }}
                    >
                      <path
                        fill='#6a75ef'
                        d='M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z'
                      />
                    </svg>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </table>
    </>
  );
}

export default Table;
