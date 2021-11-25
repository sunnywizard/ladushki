import React from 'react';
import { aboutBlock } from '../../../core/utils/testdata';
import ForCompany from "../forcompany";
import '../../../theme/styles/settings.scss';
/**
 * About
 */
export default function OnlineLearning() {
  return (
    <div className="online-learning">
      <ForCompany />
      <h2 className="text-center">О нас</h2>
      {aboutBlock[0].titleDeclare}
    </div>
  );
}
