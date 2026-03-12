import { PricingPlan } from '../interface';

export const pricingData: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    monthlyPrice: 19,
    yearlyPrice: 119,
    featured: false,
    ctaHref: '/contact',
    featureCategories: [
      {
        features: [
          'Smart Discount Suggestions',
          'AI-Driven Revenue Forecasting',
          'Competitive Price Tracking',
          'Customer Behavior Analysis',
          'Intelligent Pricing Strategies',
        ],
        limit: 10,
        checks: 2,
      },
      {
        features: [
          'AI Pricing Insights',
          'Dynamic Cost Adjustments',
          'Predictive Pricing Models',
          'Automated Price Optimization',
          'Real-time Market Analysis',
        ],
        limit: 10,
        checks: 2,
      },
      {
        features: [
          'Automated Profit Maximization',
          'AI-Powered Cost Analysis',
          'Dynamic Pricing Alerts',
          'Custom Pricing Solutions',
          'AI-Enhanced Price Testing',
        ],
        limit: 10,
        checks: 2,
      },
    ],
  },
  {
    id: 'business',
    name: 'Business',
    monthlyPrice: 29,
    yearlyPrice: 299,
    featured: true,
    ctaHref: '/contact',
    featureCategories: [
      {
        features: [
          'Smart Discount Suggestions',
          'AI-Driven Revenue Forecasting',
          'Competitive Price Tracking',
          'Customer Behavior Analysis',
          'Intelligent Pricing Strategies',
        ],
        limit: 25,
        checks: 3,
      },
      {
        features: [
          'AI Pricing Insights',
          'Dynamic Cost Adjustments',
          'Predictive Pricing Models',
          'Automated Price Optimization',
          'Real-time Market Analysis',
        ],
        limit: 25,
        checks: 3,
      },
      {
        features: [
          'Automated Profit Maximization',
          'AI-Powered Cost Analysis',
          'Dynamic Pricing Alerts',
          'Custom Pricing Solutions',
          'AI-Enhanced Price Testing',
        ],
        limit: 25,
        checks: 3,
      },
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    monthlyPrice: 49,
    yearlyPrice: 499,
    featured: false,
    ctaHref: '/contact',
    featureCategories: [
      {
        features: [
          'Smart Discount Suggestions',
          'AI-Driven Revenue Forecasting',
          'Competitive Price Tracking',
          'Customer Behavior Analysis',
          'Intelligent Pricing Strategies',
        ],
        limit: 25,
        checks: 4,
      },
      {
        features: [
          'AI Pricing Insights',
          'Dynamic Cost Adjustments',
          'Predictive Pricing Models',
          'Automated Price Optimization',
          'Real-time Market Analysis',
        ],
        limit: 25,
        checks: 4,
      },
      {
        features: [
          'Automated Profit Maximization',
          'AI-Powered Cost Analysis',
          'Dynamic Pricing Alerts',
          'Custom Pricing Solutions',
          'AI-Enhanced Price Testing',
        ],
        limit: 25,
        checks: 4,
      },
    ],
  },
];
