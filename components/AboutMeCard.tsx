// components/AboutMeCard.tsx
import React from 'react';
import { Card, CardBody, Badge } from 'reactstrap';
import Image from 'next/image';
import { AboutMeType } from '../types/sections';

const AboutMeCard: React.FC<AboutMeType> = ({ title, description, image, bullets }) => {
  return (
    <Card className="card-width shadow-lg--hover shadow mt-4 w-10 bg-light ">
      <CardBody className='w-10'>
        <div className="d-flex px-3">
          <div className="pl-4">
            <h5 className="text-dark">{title}</h5>
            <div style={{ width: '100px', height: '100px', position: 'relative' }}>
              <Image src={image} alt={title} fill className="rounded-full object-cover border-4 border-white" />
            </div>
            <p className="description mt-3">{description}</p>
            <ul>
              {bullets ? bullets.map((bullet, index) => <li key={index}>{bullet}</li>) : null}
            </ul>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default AboutMeCard;
