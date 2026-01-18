import './Technology.css';
import { Droplets, Leaf, Zap, Globe, Wind, CheckCircle } from 'lucide-react';

export default function Technology() {
  const features = [
    {
      icon: <Droplets />,
      title: 'No Dams Required',
      desc: 'Damless® technology preserves natural water flow without large infrastructure.'
    },
    {
      icon: <Leaf />,
      title: 'Aquatic Safe',
      desc: 'Fish-friendly turbines ensure zero harm to aquatic ecosystems.'
    },
    {
      icon: <Zap />,
      title: 'High Efficiency',
      desc: 'Vertical-axis turbines optimized for low-speed flow environments.'
    },
    {
      icon: <Globe />,
      title: 'Geographically Adaptable',
      desc: 'Works in canals, rivers, industrial outflows, and open channels.'
    }
  ];

  return (
    <section className="technology">
      <div className="container">

        {/* Header */}
        <div className="tech-header">
          <span>OUR CORE TECHNOLOGY</span>
          <h1>Patented Damless® Turbine</h1>
          <p>
            A proprietary vertical-axis turbine engineered to generate reliable,
            continuous power while remaining environmentally responsible.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="tech-features">
          {features.map((item, i) => (
            <div key={i} className="tech-card">
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Versatile Deployment */}
        <div className="tech-deploy">
          <div className="deploy-text">
            <h2>
              <Wind /> Versatile Deployment
            </h2>
            <p>
              Designed for both hydrokinetic and wind applications, our turbines
              can be deployed across diverse environments.
            </p>

            <ul>
              <li><CheckCircle /> Rooftops & Highways</li>
              <li><CheckCircle /> Irrigation Canals & Rivers</li>
              <li><CheckCircle /> Industrial Water Outflows</li>
            </ul>
          </div>

          {/* Abstract Turbine */}
          <div className="deploy-visual">
            <div className="outer-ring">
              <div className="inner-ring">
                <Zap />
              </div>
            </div>
            <span>Abstract Turbine Visualization</span>
          </div>
        </div>

      </div>
    </section>
  );
}
