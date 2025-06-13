import React from 'react';
import WhiteLogo from '@assets/Images/logo/logo_white.svg?react';
import FaceBookIcon from '@assets/Images/icons/16px/icon_facebook.svg?react';
import InstagramIcon from '@assets/Images/icons/16px/icon_instagram.svg?react';
import TiktokIcon from '@assets/Images/icons/16px/icon_tiktok.svg?react';
import TwitterIcon from '@assets/Images/icons/16px/icon_twitter.svg?react';

const SECTION_ITEMS = [
  {
    title: 'Services',
    items: [
      'Bonus program',
      'Gift cards',
      'Credit and payment',
      'Service contracts',
      'Non-cash account',
      'Payment',
    ],
  },
  {
    title: 'Assistance to the buyer',
    items: [
      'Find an order',
      'Terms of delivery',
      'Exchange and return of goods',
      'Guarantee',
      'Frequently asked questions',
      'Terms of use of the site',
    ],
  },
];

const Footer = () => {
  return (
    <div className='mt-[300px] flex flex-col items-center justify-center gap-8 bg-black px-[32px] py-[48px] text-[#CFCFCF] md:items-start md:px-[160px] md:py-[104px]'>
      <div className='flex w-full flex-col items-center justify-between gap-8 md:max-w-[1120px] md:flex-row md:items-start'>
        <section className='flex flex-col items-center gap-4 md:items-start md:gap-6'>
          <WhiteLogo className='w-[65px]' />
          <div className='flex flex-col items-center text-[13px]/[24px] md:items-start md:text-[14px]/[171%]'>
            <div>We are a residential interior design firm located in</div>
            <div>Portland. Our boutique-studio offers more than</div>
          </div>
        </section>
        <section>
          <div className='flex flex-col items-center justify-between gap-8 md:w-[280px] md:flex-row xl:w-[623px]'>
            {SECTION_ITEMS.map(({ title, items }) => {
              return (
                <div key={title} className='flex flex-col items-center gap-2 md:items-start'>
                  <div className='text-[16px]/[16px] font-semibold text-white'>{title}</div>
                  {items.map((item) => (
                    <div
                      className='h-[32px] text-center text-sm/[32px] md:text-start md:text-sm'
                      key={item}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <div className='flex h-[16px] w-[174px] justify-between'>
        <FaceBookIcon className='w-[16px]' />
        <InstagramIcon className='w-[16px]' />
        <TiktokIcon className='w-[16px]' />
        <TwitterIcon className='w-[16px]' />
      </div>
    </div>
  );
};

export default Footer;
