
import { lazy } from 'react';

export const LazyReviewsSection = lazy(() => 
  import('./ReviewsSection').then(module => ({ default: module.default }))
);

export const LazyPromotionsSection = lazy(() => 
  import('./PromotionsSection').then(module => ({ default: module.PromotionsSection }))
);

export const LazyWhyChooseUsSection = lazy(() => 
  import('./WhyChooseUsSection').then(module => ({ default: module.WhyChooseUsSection }))
);
