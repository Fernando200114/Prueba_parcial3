// src/components/CarouselSection.tsx
import { Carousel } from 'antd';
import img from '../assets/imagen1.jpg';


const contentStyle: React.CSSProperties = {
  height: '400px',
  background: `url(${img}) center/cover no-repeat`,
};

const CarouselSection = () => (
  <Carousel autoplay>
    <div>
      <div style={contentStyle}></div>
    </div>
  </Carousel>
);

export default CarouselSection;
