import { React, View } from 'enmity-api/react';
import { getByProps } from 'enmity-api/modules';

const Colors = getByProps('createThemedStyleSheet');
const SVG = getByProps('Svg');

export default React.memo(() => {
   const style = Colors.createThemedStyleSheet({
      view: {
         verticalAlign: 'center',
         justifyContent: 'center',
         alignItems: 'center'
      },
      lock: {
         color: Colors.ThemeColorMap.CHANNELS_DEFAULT,
      }
   });

   return <View style={style.view}>
      <SVG.Svg width={16} height={16} viewBox='0 0 1190.000000 1280.000000'>
         <SVG.G transform='translate(0.000000,1280.000000) scale(0.100000,-0.100000)' stroke='none' fill={style.lock.color}>
            <SVG.Path d='M5625 11949 c-726 -55 -1331 -308 -1787 -748 -391 -376 -650 -839 -788 -1406 -97 -398 -102 -478 -103 -1607 l-2 -940 -27 -23 c-17 -15 -56 -30 -105 -40 -240 -51 -368 -97 -486 -174 -288 -189 -455 -502 -507 -956 -12 -104 -16 -3002 -4 -3230 21 -421 144 -691 405 -887 61 -46 199 -117 274 -141 77 -26 229 -55 345 -67 73 -7 1009 -11 3095 -10 3153 1 3139 0 3328 44 321 75 545 253 646 515 90 234 93 323 88 2111 -4 1464 -7 1563 -43 1775 -52 301 -176 554 -348 706 -21 19 -46 41 -56 50 -86 81 -249 170 -390 214 -164 51 -231 77 -240 95 -6 12 -10 333 -10 862 0 962 -6 1086 -66 1418 -26 142 -101 429 -139 530 -133 353 -235 558 -395 795 -121 180 -342 418 -516 557 -273 217 -666 404 -1015 482 -337 75 -775 104 -1154 75z m480 -1109 c217 -19 424 -64 585 -127 410 -161 718 -458 894 -858 48 -109 129 -345 121 -353 -2 -3 0 -12 5 -22 12 -23 47 -218 60 -340 7 -60 11 -420 10 -979 0 -983 4 -916 -68 -949 -34 -16 -173 -17 -1762 -17 -1620 0 -1728 1 -1782 18 -51 16 -58 21 -63 50 -3 17 -4 442 -2 942 4 998 2 977 67 1245 122 500 369 885 716 1116 92 61 275 150 376 183 253 83 553 115 843 91z' />
         </SVG.G>
      </SVG.Svg>
   </View>;
});