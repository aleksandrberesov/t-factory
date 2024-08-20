import { initViewport } from '@telegram-apps/sdk';

 export default async function FullScreen(){
    const [viewport] = initViewport();
  
    const vp = await viewport;
  
    if (!vp.isExpanded) {
        vp.expand(); // will expand the Mini App, if it's not
    }
  }