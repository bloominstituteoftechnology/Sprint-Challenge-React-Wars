import React, { useEffect, useState } from "react";
import axios from "axios";

export default function NextPage (props) {

  return (
    <div className = "buttonWrapper">
      <button onClick= {() =>
        props.pageDown()
      }>
        Previous Page
      </button>
      <button onClick= {() =>
        props.pageUp()
      }>
        Next Page
      </button>
    </div>

  )
}
