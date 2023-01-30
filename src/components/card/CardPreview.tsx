/* eslint-disable @next/next/no-img-element */
'use client';

import { memo } from 'react';
import './styles.css';

/**
 * This component represents a preview of an item, the target output is an HTML markup that looks like /images/card.png
 * See `/cards` page for the output
 *
 * @todo:
 * - setup the HTML markup by replacing <img /> below by yours
 * - put and set all necessary css as you want in ./styles.css the main entry class is `preview-card`
 *
 * you can find all assets to use in /public/images and /public/icons
 */
function CardPreview() {
  return (
    <div className="preview-card">
      <div className="card-head">
          <div className='icon'>
            <img src="/icons/back.svg" alt="back" className='back' />
            <div className="market"> 
              <img src="/icons/market.svg" alt="market" className='market-icon'/>
              <div className="point"></div>
            </div>
            
          </div>
          <div className='content'>
            <div style={{ marginBlock : 15}}>
              <p className='title'>PLATFORM</p>
              <span className='text'>PS5</span>
            </div>
            <div  style={{ marginBlock : 15}}>
                 
              <p className='title'>RELEASE</p>
              <span className='text'>Fall 2020</span>
            </div>
           
           <div  style={{ marginBlock : 15}}>
              <p className='title'>PRICE</p>
              <span className='text'>$50</span>
           </div>
           
          </div>
          <img src="/images/ps5.png" alt='ps5' className='ps5' />
      </div>
      <div className="card-body">
        <div className="description">
          <h1 className='d-title'>Dual Sense</h1>
          <p className='d-text'>
            DualSense also adds a build-in microphone array, 
            which will enable players to easily chat
            with friends without a headest... 
          </p>
        </div>
        <div className="options">
          <div className='item'>
            <div className='option'></div>
            <div style={{ display: 'flex', flexDirection: 'column'}}>
              <p className='o-title'>Futuristic</p>
              <span className='o-text'>Design</span>
            </div>
          </div>
          <div className='item'>
            <div className='option'></div>
            <div style={{ display: 'flex', flexDirection: 'column'}}>
              <p className='o-title'>Buitl-in</p>
              <span className='o-text'>Microphone</span>
            </div>
          </div>
        </div>
        <div className="price">
          <p className='p-text'>0.78 ETH</p>
          <div className='button'>
            <p className='b-text'>Buy</p>
            <div className='line'></div>
            
            <img src='/icons/back.svg' alt='back' className='b-back'/>
            
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(CardPreview);
