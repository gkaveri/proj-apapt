import React, {useState} from 'react'
import './index.css'
import {IoMdArrowRoundBack} from 'react-icons/io'
import {IoMdArrowRoundForward} from 'react-icons/io'

export default function Category() {
  const itemsPerPage = 7
  const [currentPage, setCurrentPage] = useState(0)

  const items = [
    {
      image: (
        <img
          src="https://foodish-api.com/images/biryani/biryani5.jpg"
          className="items-slide"
        />
      ),
      name: 'Biryani',
    },
    {
      image: (
        <img
          src="https://foodish-api.com/images/burger/burger13.jpg"
          className="items-slide"
        />
      ),
      name: 'Burger',
    },
    {
      image: (
        <img
          src="https://foodish-api.com/images/butter-chicken/butter-chicken10.jpg"
          className="items-slide"
        />
      ),
      name: 'Butter Chicken',
    },
    {
      image: (
        <img
          src="https://foodish-api.com/images/dessert/dessert9.jpg"
          className="items-slide"
        />
      ),
      name: 'Dessert',
    },
    {
      image: (
        <img
          src="https://foodish-api.com/images/dosa/dosa45.jpg"
          className="items-slide"
        />
      ),
      name: 'Dosa',
    },
    {
      image: (
        <img
          src="https://foodish-api.com/images/idly/idly61.jpg"
          className="items-slide"
        />
      ),
      name: 'Idly',
    },
    {
      image: (
        <img
          src="https://foodish-api.com/images/pasta/pasta14.jpg"
          className="items-slide"
        />
      ),
      name: 'Pasta',
    },
    {
      image: (
        <img
          src="https://foodish-api.com/images/pizza/pizza53.jpg"
          className="items-slide"
        />
      ),
      name: 'Pizza',
    },
    {
      image: (
        <img
          src="https://foodish-api.com/images/rice/rice5.jpg"
          className="items-slide"
        />
      ),
      name: 'Rice',
    },
    {
      image: (
        <img
          src="https://foodish-api.com/images/samosa/samosa14.jpg"
          className="items-slide"
        />
      ),
      name: 'Samosa',
    },
    {
      image: (
        <img
          src="https://foodish-api.com/images/rice/rice20.jpg"
          className="items-slide"
        />
      ),
      name: 'Egg Rice',
    },
    {
      image: (
        <img
          src="https://foodish-api.com/images/pasta/pasta30.jpg"
          className="items-slide"
        />
      ),
      name: 'Noodles Pasta',
    },
    {
      image: (
        <img
          src="https://foodish-api.com/images/idly/idly56.jpg"
          className="items-slide"
        />
      ),
      name: 'Idly Sambar',
    },
    {
      image: (
        <img
          src="https://foodish-api.com/images/burger/burger15.jpg"
          className="items-slide"
        />
      ),
      name: 'Double Burger',
    },
    {
      image: (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRQUwzB7x51eY5bw65Z8Vm8LQoIOcNmu4vXcgAzNm3-A&s"
          className="items-slide"
        />
      ),
      name: 'Ice Cream',
    },
    {
      image: (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfnKReI1_ZIJ8lVt7yzI76sgfNh8_HHqhCGqd4DY9G5g&s"
          className="items-slide"
        />
      ),
      name: 'Sweet Dessert',
    },
    {
      image: (
        <img
          src="https://www.indianveggiedelight.com/wp-content/uploads/2022/08/curd-rice-featured-500x375.jpg"
          className="items-slide"
        />
      ),
      name: 'Curd Rice',
    },
    {
      image: (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZcUKXnxpGKks-l6evdJTftYi6QKYcwfPAVz5bbXO_zw&s"
          className="items-slide"
        />
      ),
      name: 'Fruit Salads',
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
    <div className="header">
      <div className="sec">
        <div>
          <h1>What's on your mind?</h1>
        </div>
        <div className="section1">
          <div className="slides" onClick={handlePrevPage}>
            <IoMdArrowRoundBack />
          </div>
          <div className="slides" onClick={handleNextPage}>
            <IoMdArrowRoundForward />
          </div>
        </div>
      </div>
      <div className="slide-items">
        {visibleItems.map((items, index) => {
          return (
            <div className="item-container" key={index}>
              {items.image}
              <span className="item-name">{items.name}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
