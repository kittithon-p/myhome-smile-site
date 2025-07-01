
import { lazy } from 'react';

export const LazyReviewsSection = lazy(() => 
  import('./ReviewsSection')
);

export const LazyPromotionsSection = lazy(() => 
  import('./PromotionsSection').then(module => ({ default: module.PromotionsSection }))
);

export const LazyWhyChooseUsSection = lazy(() => 
  import('./WhyChooseUsSection').then(module => ({ default: module.WhyChooseUsSection }))
);

export const LazyFacebookSection = lazy(() => 
  import('./FacebookSection').then(module => ({ default: module.FacebookSection }))
);
