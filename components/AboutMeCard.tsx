// components/AboutMeCard.tsx
import React from 'react';
import { Card, CardBody, Badge } from 'reactstrap';
import Image from 'next/image';
import { AboutMeType } from '../types/sections';

// const AboutMeCard= ({ title, description, image, bullets}:AboutMeType) => {
const AboutMeCard: React.FC<AboutMeType> = ({ title, description, image, bullets }) => {
  return (
    <Card className="w-20 shadow-lg--hover shadow mt-4 bg-light  ">
      <CardBody className='w-10'>
        <div className="d-flex px-3">
          <div className="pl-0 ">
            <div style={{ width: '200px', height: '200px', position: 'relative' }} >
              <Image src={image} alt={title} fill className="rounded-full object-cover border-4 border-white "  />
            </div>
            <h3 className="text-dark mt-1  ">{title}</h3>
            <p className="description mt-3 text-black" style={{fontSize: '17px'}}>{description}</p>
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
