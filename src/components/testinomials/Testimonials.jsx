import { testimonials } from '../../assets/data';
import FeatureHead from '../UI/FeatureHead';
import Section from '../UI/Section';
import TestimonialCard from './TestimonialCard';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const Testimonials = () => {
  return (
    <Section>
      <FeatureHead
        heading={'What our happy client say'}
        message={'Things that make it the best place to start trading'}
      />

      <Swiper
        navigation={{
          prevEl: '.swiper-pre-button',
          nextEl: '.swiper-next-button',
        }}
        slidesPerView={1}
        spaceBetween={10}
        modules={[Navigation]}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mySwiper md:mb-12"
      >
        {testimonials.map((testimonial) => (
          <div className="SwiperSlide" key={testimonial.id}>
            <SwiperSlide key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
      <div className="flex gap-8 justify-center items-center mt-4">
        <button className="swiper-button-disabled swiper-pre-button w-12 h-12 rounded-full border border-gray-200 text-center flex justify-center items-center hover:bg-blue-600 hover:text-white transition-all duration-200 hover:shadow-gray-400 hover:shadow-md cursor-pointer">
          <BsChevronLeft className="size-6" />
        </button>
        <button className="swiper-button-disabled swiper-next-button w-12 h-12 rounded-full border border-gray-200 text-center flex justify-center items-center hover:bg-blue-600 hover:text-white transition-all duration-200 hover:shadow-gray-400 hover:shadow-md cursor-pointer">
          <BsChevronRight className="size-6" />
        </button>
      </div>
    </Section>
  );
};

export default Testimonials;
