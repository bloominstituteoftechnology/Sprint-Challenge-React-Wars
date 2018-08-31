import React, { Component } from 'react';
import CardHeader from './CardHeader.js';
import CardContent from './CardContent.js';

import './Card.css';

export default function CardContainer(props) {
    return (
      <div className="card-container">
        <CardHeader />
        <CardContent />
      </div>
    );
}
