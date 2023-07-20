import { useEffect, useState } from 'react'
import { FaLocationDot } from 'react-icons/fa6'

const availableFlights = [
  {
    id: 1,
    departure: "City A",
    destination: "City B",
    date: "2023-07-25T08:00",
    flightNumber: "FL123",
  },
  {
    id: 2,
    departure: "City A",
    destination: "City B",
    date: "2023-07-25T09:00",
    flightNumber: "FL123",
  },
  {
    id: 3,
    departure: "City A",
    destination: "City B",
    date: "2023-07-25T10:00",
    flightNumber: "FL123",
  },
  {
    id: 4,
    departure: "City A",
    destination: "City B",
    date: "2023-07-25T11:00",
    flightNumber: "FL123",
  },
  {
    id: 5,
    departure: "City A",
    destination: "City B",
    date: "2023-07-25T12:00",
    flightNumber: "FL123",
  },
  {
    id: 6,
    departure: "City A",
    destination: "City B",
    date: "2023-07-25T13:00",
    flightNumber: "FL123",
  },
  {
    id: 7,
    departure: "City A",
    destination: "City B",
    date: "2023-07-25T14:00",
    flightNumber: "FL123",
  },
  {
    id: 8,
    departure: "City A",
    destination: "City B",
    date: "2023-07-25T15:00",
    flightNumber: "FL123",
  },
  {
    id: 9,
    departure: "City A",
    destination: "City B",
    date: "2023-07-25T16:00",
    flightNumber: "FL123",
  },
  {
    id: 10,
    departure: "City C",
    destination: "City D",
    date: "2023-07-25T17:30",
    flightNumber: "FL456",
  },

];


function App() {
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    setDateTime(`${year}-${month}-${day}`);

  }, [])

  const handleSearch = () => {
    const filteredResults = availableFlights.filter(
      (flight) =>
        flight.departure.toLowerCase() === departure.toLowerCase() &&
        flight.destination.toLowerCase() === destination.toLowerCase() &&
        new Date(flight.date).toISOString().split('T')[0] == dateTime
    );
    setSearchResults(filteredResults);
    console.log(filteredResults,dateTime,new Date(availableFlights[0].date).toISOString().split('T')[0]);
  };

  return (

    <div >
      <header className="w-full bg-[url('https://d1cj8q6w07zyiq.cloudfront.net/mytransfers/images/mytransfers-top.jpg')] bg-no-repeat bg-cover min-h-[350px] flex flex-col items-center pb-4 md:pb-0">
        <h1 className='text-3xl font-bold text-white text-center py-4'>Search Airport Transfers</h1>
        <div className='backdrop-blur-sm bg-white/30 w-[80%] m-auto rounded-lg px-4'>
          <div className=" flex flex-col md:flex-row items-center">
            <div className='flex flex-col w-full'>
              <div className='flex items-center bg-white rounded-md py-2 mt-4 w-full md:w-[80%] px-1'>
                <FaLocationDot size={22} className='mx-2' />
                <input
                  className='text-xl bg-transparent w-full border-none outline-none'
                  type="text"
                  placeholder="From: Start typing your pickup location"
                  value={departure}
                  onChange={(e) => setDeparture(e.target.value)}
                />
              </div>

              <input
                className='w-full md:w-[80%] text-xl rounded-md py-2 my-4 px-2 border-none outline-none'
                type="date"
                value={dateTime}
                onChange={(e) => setDateTime(e.target.value)}
              />
            </div>
            <div className='w-full flex flex-col md:flex-row items-center'>
              <div className='flex items-center bg-white rounded-md py-2 w-full md:w-[80%] px-1'>
                <FaLocationDot size={22} className='mx-2' />
                <input
                  className='text-xl bg-transparent w-full border-none outline-none'
                  type="text"
                  placeholder="To: Start typing your dropoff location"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>

              <button className='bg-red-100 w-full md:w-[15%] rounded-md py-2 my-4 md:ml-4' onClick={handleSearch}>Search</button>
            </div>

          </div>
          <div className='text-red-600 font-semibold mb-2'>
            <p>For testing use: City A ={'>'} City B or City C ={'>'} City D and use this date 7/25/2023</p>
          </div>
        </div>

      </header>

      <div className='grid grid-cols-1 md:grid-cols-4 my-4 gap-2 mx-4'>
        {
          searchResults.map((flight) => (
            <div className='backdrop-blur-sm bg-black/10 text-black rounded-sm p-2 text-lg' key={flight.id} >
              <p><span className='font-semibold'>Flight Number:</span> {flight.flightNumber}</p>
              <p><span className='font-semibold'>Departure:</span> {flight.departure}</p>
              <p><span className='font-semibold'>Destination:</span> {flight.destination}</p>
              <p><span className='font-semibold'>Date and Time:</span> {new Date(flight.date).toLocaleString()}</p>
            </div>
          ))

        }
      </div>
      {!searchResults.length && <p className='flex items-center justify-center h-[200px] text-xl text-gray-500 font-semibold'>No flights available for the selected criteria.</p>}

    </div>
  )
}

export default App
