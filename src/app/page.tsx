import React from "react";
import Link from 'next/link';
import { PortfolioProfilePhoto } from './portfolio-profile-photo';
import { Portfolio } from './portfolio';

export default function Home() {
  return (
    <>
      <PortfolioProfilePhoto userid={""} />
    </>
  );
}

