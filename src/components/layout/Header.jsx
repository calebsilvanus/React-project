import React from "react";
import { motion } from "framer-motion";
import DropdownMenu from './DropdownMenu';


<nav>
  <motion.div initial={{ x: "-100%" }} whileInView={{ x: 0 }}>
    <IoFastFoodOutline />
  </motion.div>
  <div>
    <Link to="/">Home</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/about">About</Link>
    <Link to="/cart">
      <FiShoppingCart />
    </Link>
    <DropdownMenu />
  </div>
</nav>
