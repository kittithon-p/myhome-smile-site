
import { lazy } from 'react';

export const LazyReviewsSection = lazy(() => 
  import('./ReviewsSection').then(module => ({ default: module.default }))
);

export const LazyWhyChooseUsSection = lazy(() => 
  import('./WhyChooseUsSection').then(module => ({ default: module.WhyChooseUsSection }))
);
