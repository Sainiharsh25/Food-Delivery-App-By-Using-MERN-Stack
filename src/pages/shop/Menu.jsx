import React, { useEffect, useState } from 'react'
import Cards from '../../components/Cards';
import { FaFilter } from "react-icons/fa"

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const[filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory , setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  const [currentPage , setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);

  // loading data
  useEffect(()=>{
       // fetch data from the backend
       const fetchData = async () => {
        try{
          const response = await fetch("http://localhost:6001/menu");
          const data = await response.json();
          // console.log(data)
          setMenu(data);
          setFilteredItems(data);
        }catch(error){
          console.log("Error fetching data", error)
        }
       };
       // call the function
       fetchData();
  }, [])

  // filtering data based on category
    const filterItems = (category) => {
      const filtered = category === "all" 
      ? menu 
      : menu.filter((item) => item.category === category);

      setFilteredItems(filtered);
      setSelectedCategory(category);
      setCurrentPage(1);
    };

    // show all data function
    const showAll = () => {
      setFilteredItems(menu);
      setSelectedCategory("all");
      setCurrentPage(1);
    }
  
    // sorting based on  A-Z, Z-A , Low -High pricing
    const handleSortChange = (Option) => {
      setSortOption(Option);

      let sortedItems = [...filteredItems];

      // logic
      switch(Option) {
        case "A-Z":
          // code block
          sortedItems.sort((a,b) => a.name.localeCompare(b.name))
          break;
        case "Z-A":
          // code block
          sortedItems.sort((a,b) => b.name.localeCompare(a.name))
          break;
          case "Low-High":
          // code block
          sortedItems.sort((a,b) => a.price - b.price)
          break;
          case "High-Low":
          // code block
          sortedItems.sort((a,b) => b.price - a.price)
          break;
        default:
          // code block
          break;
      }

      setFilteredItems(sortedItems);
      setCurrentPage(1);
    }
    
    // pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem)
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {/* Menu banner */}
      <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%  ">
      <div className="py-48 flex flex-col  justify-center items-center gap-8">

        {/* texts */}
        <div className="text-center space-y-7 px-4">
          <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
             For the Love of Delicious {" "}
            <span className="text-orange-500">Food</span>
          </h2>
          <p className="text-xl text-[#4A4A4A] md:w-4/5 mx-auto">
          "Every Plate Tells a Story of Culinary Expertise and Passionate Craftsmanship."
          </p>
          <button className="btn bg-orange-500 px-8 py-3 font-semibold text-white rounded-full">
            Order Now
          </button>
        </div>
      </div>
    </div>

    {/* Menu shop section */}
    <div className='section-container'>
      {/* filtering  and sorting */}
      <div className='flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3  mb-8'>
        {/* all category btns */}
        <div className='flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap'>
              <button onClick={showAll}
              className={selectedCategory === "all" ? "active" : ""}
              >All</button>
              <button onClick={() => filterItems("salad")} 
              className={selectedCategory === "salad" ? "active" : ""}
              >Salad</button>
              <button onClick={() => filterItems("pizza")}
              className={selectedCategory === "pizza" ? "active" : ""}
              >Pizza</button>
              <button onClick={() => filterItems("soup")}
              className={selectedCategory === "soup" ? "active" : ""}
              >Soups</button>
              <button onClick={() => filterItems("dessert")}
              className={selectedCategory === "dessert" ? "active" : ""}
              >Desserts</button>
              <button onClick={() => filterItems("drinks")}
              className={selectedCategory === "drinks" ? "active" : ""}
              >Drinks</button>

        </div>

        {/* Sorting base filtering */}
        <div className='flex justify-end mb-4 rounded-sm'>
          <div className='bg-green p-2'>
             <FaFilter className='h-4 w-4 text-white'/>
          </div>

          {/* sorting options */}
          <select name="sort" id="sort"
          onChange={(e) => handleSortChange(e.target.value)}
          value={sortOption}
          className='bg-green text-white px-2 py-1 rounded-sm hover:bg-black'
          >
            <option value="default">Default</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="Low-High">Low-High</option>
            <option value="High-Low">High-Low</option>
          </select>
        </div>
      </div>

      {/* product card */}

      <div className='grid md:grid-cols-3 sm:grid-cols-4 grid-cols-1 gap-8 mt-6'>
        {
          currentItems.map((item) => (
            <Cards key={item.id} item={item}/>
          ))
        }
      </div>
    </div>

    {/* pagination section */}
    <div className='flex justify-center my-8'>
      {
        Array.from({length: Math.ceil(filteredItems.length / itemsPerPage)}).map((_,index) =>(
          <button key={index + 1}
          onClick={() => paginate(index + 1)}
          className={`mx-1 px-3 py-1 rounded-full ${currentPage === index + 1 ? "bg-green text-white" : "bg-gray-200"}`}
          >
            {index + 1}
          </button>
        ))
      }
    </div>
    </div>
  )
}

export default Menu