import React from 'react';

import { Header } from '../common';
import { PropertyRoute } from '../../routes';

const Property = () => (
  <div>
    <Header selected="/property" />
    <PropertyRoute />
  </div>
);

export default Property;

export * from './Building';
export * from './Flat';
export * from './Home';
