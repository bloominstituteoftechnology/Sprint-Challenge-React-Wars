import React, { useEffect, useState } from "react";
import PersonCard from "./PersonCard";
import axios from "axios";

import styled from "styled-components"

export default function PersonGrid(props) {

  return (
    <div className = "imageGridWrapper">
      <div className="imageGrid">
        {props.charData.map((data, index) =>
          <PersonCard
            key={index}
            name={data.name}
            birthYear={data.birth_year}
            gender={data.gender}
            height={data.height}
            weight={data.mass}
        />)}
      </div>
    </div>
  )
}
