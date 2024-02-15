import { useContext, useState } from "react";
import StudContext from "../StudContext";

function Form() {
  const { fetchAllStuds } = useContext(StudContext);
  const [id, setId] = useState(null);
  const [fname, setFname] = useState(null);
  const [lname, setLname] = useState(null);
  const [address, setAddress] = useState(null);
  const [dob, setDob] = useState(null);
  const [country, setCountry] = useState(null);
  const [program, setProgram] = useState(null);
  const [maritalStatus, setMaritalStatus] = useState(null);

  const handleAddStudent = async () => {
    try {
      const response = await fetch("http://localhost:8080/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          fname: fname,
          lname: lname,
          dob: dob,
          maritalStatus: maritalStatus,
          address: address,
          country: country,
          program: program,
        }),
      });
      const status = await response.status;
      if (status === 200) {
        alert("Student Added!");
      } else if (status === 400) {
        alert("Student With Id Alreadt Exists");
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      alert(error);
    }
    fetchAllStuds();
    setId("");
    setFname("");
    setLname("");
    setCountry("");
    setDob("");
    setMaritalStatus("");
    setProgram("");
    setAddress("");
  };

  return (
    <div className='mx-auto max-w-md space-y-8'>
      <form
        action=''
        onSubmit={(e) => {
          e.preventDefault();
          handleAddStudent();
        }}
      >
        <div className='my-4'>
          <label
            className='text-md text-primary font-extrabold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            htmlFor='student-id'
          >
            Student ID
          </label>
          <input
            className='flex h-10 w-full text-white rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
            id='student-id'
            placeholder='Enter your student ID'
            onChange={(e) => {
              setId(e.target.value);
            }}
            value={id}
            required
          />
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <div className='my-2'>
            <label
              className='text-md text-primary font-extrabold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              htmlFor='first-name'
            >
              First Name
            </label>
            <input
              className='flex h-10 w-full text-white rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
              id='first-name'
              placeholder='Enter your first name'
              required
              onChange={(e) => {
                setFname(e.target.value);
              }}
              value={fname}
            />
          </div>
          <div className='my-2'>
            <label
              className='text-md text-primary  font-extrabold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              htmlFor='last-name'
            >
              Last Name
            </label>
            <input
              className='flex h-10 w-full text-white rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
              id='last-name'
              placeholder='Enter your last name'
              required
              onChange={(e) => {
                setLname(e.target.value);
              }}
              value={lname}
            />
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <div className='my-4'>
            <label
              className='text-md  text-primary font-extrabold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              htmlFor='dob'
            >
              Date of Birth
            </label>
            <input
              type='date'
              className='flex h-10 w-full text-white rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
              id='dob'
              placeholder='Enter your data of birth'
              required
              onChange={(e) => {
                setDob(e.target.value);
              }}
              value={dob}
            />
          </div>
          <div className='my-4'>
            <label
              className='text-md  text-primary font-extrabold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              htmlFor='country'
            >
              Country
            </label>
            <input
              className='flex h-10 w-full text-white rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
              id='country'
              placeholder='Enter your country'
              required
              onChange={(e) => {
                setCountry(e.target.value);
              }}
              value={country}
            />
          </div>
        </div>

        <div className='my-4'>
          <label
            className='text-md  text-primary font-extrabold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            htmlFor='address'
          >
            Address
          </label>
          <input
            className='flex h-10 w-full text-white rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
            id='address'
            placeholder='Enter your address'
            required
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            value={address}
          />
        </div>
        <div className='my-4'>
          <label
            className='text-md  text-primary font-extrabold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            htmlFor='program'
          >
            Program
          </label>
          <input
            className='flex h-10 w-full text-white rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
            id='program'
            placeholder='e.g. BTech , Bsc , etc'
            required
            onChange={(e) => {
              setProgram(e.target.value);
            }}
            value={program}
          />
        </div>
        <div className='my-4'>
          <label
            className='text-md  text-primary font-extrabold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            htmlFor='maritialStatus'
          >
            Maritial Status
          </label>
          <input
            className='flex h-10 w-full text-white rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
            id='maritialStatus'
            placeholder='Enter your Maritial Status'
            required
            onChange={(e) => {
              setMaritalStatus(e.target.value);
            }}
            value={maritalStatus}
          />
        </div>

        <button
          className='text-primary-content font-extrabold  inline-flex items-center justify-center whitespace-nowrap rounded-md text-md
        ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2'
          type='submit'
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
