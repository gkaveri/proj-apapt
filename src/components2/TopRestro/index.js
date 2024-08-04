import React, {useState} from 'react'
import './index.css'
import {IoMdArrowRoundBack} from 'react-icons/io'
import {IoMdArrowRoundForward} from 'react-icons/io'
import {IoIosStarOutline} from 'react-icons/io'

export default function Category() {
  const itemsPerPage = 4
  const [currentPage, setCurrentPage] = useState(0)

  const items = [
    {
      image: (
        <img
          src="https://pbs.twimg.com/media/GCuqa0KbwAACujx.jpg"
          className="items-slide1"
        />
      ),
      offer: 'Items at ₹179',
      title: 'Pizza Hut',
      rating: 4.2,
      minTime: 30,
      maxTime: 40,
      name: 'Pizzas',
      place: 'New Jodhpur',
    },
    {
      image: (
        <img
          src="https://media-cdn.tripadvisor.com/media/photo-s/11/1c/96/d8/images-8-largejpg.jpg"
          className="items-slide1"
        />
      ),
      offer: '₹50 OFF ABOVE ₹199',
      title: 'Janta Sweet Home',
      rating: 4.5,
      minTime: 35,
      maxTime: 40,
      name: 'Sweets,South Indian',
      place: 'Shastri Nagar',
    },
    {
      image: (
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/z84pmnh9i096s92bqlfo"
          className="items-slide1"
        />
      ),
      offer: '₹85 OFF ABOVE ₹149',
      title: 'Parihaar Bhojnalay',
      rating: 4.3,
      minTime: 35,
      maxTime: 40,
      name: 'North India, Thalis',
      place: 'Sardarpura',
    },
    {
      image: (
        <img
          src="https://www.bigbasket.com/media/uploads/p/l/40163755_6-kwality-walls-frozen-dessert-dark-divine-chocolate-sensation.jpg"
          className="items-slide1"
        />
      ),
      offer: '₹70 OFF ABOVE ₹149',
      title: 'Kwality Walls Frozen',
      rating: 4.5,
      minTime: 25,
      maxTime: 25,
      name: 'Desserts,Ice Cream',
      place: 'Chopsani Housing Board',
    },
    {
      image: (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiDT84WoFiapgY1a0lqRveBFKLYG6SGfi7s59TK6DnoQ&s"
          className="items-slide1"
        />
      ),
      offer: '₹1-5 OFF ABOVE ₹179',
      title: 'The Good Bowl',
      rating: 4.4,
      minTime: 30,
      maxTime: 35,
      name: 'Biryani, North India',
      place: 'Shastri Nagar',
    },
    {
      image: (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFmiE7VFP4HvsEiA7Ni4ebwu7uiJQ6TCDxDWXhqUuHxg&s"
          className="items-slide1"
        />
      ),
      offer: '₹100 OFF ABOVE ₹499',
      title: 'NIC Ice Creams',
      rating: 4.7,
      minTime: 25,
      maxTime: 30,
      name: 'Desserts,Ice Cream',
      place: 'Sardarpura',
    },
    {
      image: (
        <img
          src="https://www.awesomecuisine.com/wp-content/uploads/2009/06/Plain-Dosa.jpg"
          className="items-slide1"
        />
      ),
      offer: 'Items at ₹109',
      title: 'Dosh Center',
      rating: 4.0,
      minTime: 35,
      maxTime: 40,
      name: 'South Indian',
      place: 'Chopsani Housing Board',
    },
    {
      image: (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsZ9pE8g-BSaloVOmAkscWmEokhxmtJO4KDQnAi32Daw&s"
          className="items-slide1"
        />
      ),
      offer: '₹125 OFF ABOVE ₹349',
      title: 'Lunch Box - Meals and Thalis',
      rating: 4.3,
      minTime: 30,
      maxTime: 35,
      name: 'Biryani, North India',
      place: 'Shastri Nagar',
    },
    {
      image: (
        <img
          src="https://b.zmtcdn.com/data/pictures/4/120824/012e38abbfc9893804c9326764cb80d0.jpg?fit=around|960:500&crop=960:500;*,*"
          className="items-slide1"
        />
      ),
      offer: '₹70 OFF ABOVE ₹249',
      title: "McDonald's",
      rating: 4.4,
      minTime: 30,
      maxTime: 35,
      name: 'American',
      place: 'Rawaton Ka Bass',
    },
    {
      image: (
        <img
          src="https://i1.fnp.com/images/pr/l/v20190520192511/black-forest-cake-half-kg_1.jpg"
          className="items-slide1"
        />
      ),
      offer: '₹100 OFF ABOVE ₹449',
      title: "Kajal's Cake",
      rating: 4.5,
      minTime: 35,
      maxTime: 40,
      name: 'Cake',
      place: 'Chopsani Housing Board',
    },
  ]
  const totalPages = Math.ceil(items.length / itemsPerPage)

  const handleNextPage = () => {
    setCurrentPage(prevPage => (prevPage + 1) % totalPages)
  }

  const handlePrevPage = () => {
    setCurrentPage(prevPage => (prevPage - 1 + totalPages) % totalPages)
  }

  const startIndex = currentPage * itemsPerPage
  const visibleItems = items.slice(startIndex, startIndex + itemsPerPage)

  return (
    <div className="header1">
      <div className="sec1">
        <div>
          <h1>Top Restaurants in Hyderabad</h1>
        </div>
        <div className="section1">
          <div className="slides1" onClick={handlePrevPage}>
            <IoMdArrowRoundBack />
          </div>
          <div className="slides1" onClick={handleNextPage}>
            <IoMdArrowRoundForward />
          </div>
        </div>
      </div>
      <div className="card">
        {visibleItems.map((items, index) => {
          return (
            <div className="card1" key={index}>
              {items.image}
              <div className="card-details">
                <h1>{items.offer}</h1>
                <p className="place1">{items.name}</p>
                <div className="rating">
                  <IoIosStarOutline />
                  {items.rating}.{items.minTime}-{items.maxTime} mins
                </div>
                <p className="place">{items.place}</p>
                <p className="place1">{items.title}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
