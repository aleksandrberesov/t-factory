import { initViewport, retrieveLaunchParams } from '@telegram-apps/sdk';

export async function FullScreen(){
    const [viewport] = initViewport();
  
    const vp = await viewport;
  
    if (!vp.isExpanded) {
        vp.expand(); // will expand the Mini App, if it's not
    }
 }

export function GetUserData(){
    const { initDataRaw, initData } = retrieveLaunchParams();

    return initData;
}
 