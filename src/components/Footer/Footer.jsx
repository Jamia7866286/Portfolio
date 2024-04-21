import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer id="footer" className="section ">
    <div className="container px-lg-5">
      <div className="row">
        <div className="text-center text-lg-start">
          <p className="mb-3 mb-lg-0">
            Copyright © 2024{" "}
            <Link to='' className="fw-500">Web Tech Coding</Link>. All
            Rights Reserved.{" "}
          </p>
        </div>
      </div>
    </div>
  </footer>
  )
}
