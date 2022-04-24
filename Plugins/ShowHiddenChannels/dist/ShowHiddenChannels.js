function F(t){window.enmity.plugins.registerPlugin(t)}const c={byProps:(...t)=>window.enmity.modules.filters.byProps(...t),byName:t=>window.enmity.modules.filters.byName(t),byTypeName:t=>window.enmity.modules.filters.byTypeName(t),byTypeString:(...t)=>window.enmity.modules.filters.byTypeString(...t),byDefaultString:(...t)=>window.enmity.modules.filters.byDefaultString(...t),byString:(...t)=>window.enmity.modules.filters.byString(...t)};function v(...t){return window.enmity.modules.bulk(...t)}function b(...t){return window.enmity.modules.getByProps(...t)}function P(t){return window.enmity.patcher.create(t)}const e=window.enmity.react,d=e.React;e.memo,e.useCallback,e.useContext,e.useEffect,e.useImperativeHandle,e.useMemo,e.useReducer,e.useRef,e.useState,e.Alert,e.Button,e.FlatList,e.Image,e.ImageBackground,e.KeyboardAvoidingView,e.Modal,e.Pressable,e.RefreshControl,e.ScrollView,e.SectionList,e.StatusBar,e.StyleSheet,e.Switch,e.Text,e.TextInput,e.TouchableHighlight,e.TouchableOpacity,e.TouchableWithoutFeedback,e.Touchable;const T=e.View;e.VirtualizedList,e.Form,e.FormArrow,e.FormCTA,e.FormCTAButton,e.FormCardSection,e.FormCheckbox,e.FormDivider,e.FormHint,e.FormIcon,e.FormInput,e.FormLabel,e.FormRadio,e.FormRow,e.FormSection,e.FormSelect,e.FormSubLabel,e.FormSwitch,e.FormTernaryCheckBox,e.FormText,e.FormTextColors,e.FormTextSizes;function H(t={},h=n=>n,{ignore:s=[],walkable:r=["props","children"],maxProperties:o=100}={}){const n=[t],l=function(...i){try{return Reflect.apply(h,this,i)}catch{return!1}};for(;n.length&&o;){const i=n.shift();if(l(i))return i;if(Array.isArray(i))n.push(...i);else if(typeof i=="object"&&i!==null)if(r.length)for(const u in i){const y=i[u];~r.indexOf(u)&&!~s.indexOf(u)&&n.push(y)}else for(const u in i){const y=i[u];i&&~s.indexOf(u)||n.push(y)}o--}}const w=b("createThemedStyleSheet"),f=b("Svg");var x=d.memo(()=>{const t=w.createThemedStyleSheet({view:{verticalAlign:"center",justifyContent:"center",alignItems:"center"},lock:{color:w.ThemeColorMap.CHANNELS_DEFAULT}});return d.createElement(T,{style:t.view},d.createElement(f.Svg,{width:16,height:16,viewBox:"0 0 1190.000000 1280.000000"},d.createElement(f.G,{transform:"translate(0.000000,1280.000000) scale(0.100000,-0.100000)",stroke:"none",fill:t.lock.color},d.createElement(f.Path,{d:"M5625 11949 c-726 -55 -1331 -308 -1787 -748 -391 -376 -650 -839 -788 -1406 -97 -398 -102 -478 -103 -1607 l-2 -940 -27 -23 c-17 -15 -56 -30 -105 -40 -240 -51 -368 -97 -486 -174 -288 -189 -455 -502 -507 -956 -12 -104 -16 -3002 -4 -3230 21 -421 144 -691 405 -887 61 -46 199 -117 274 -141 77 -26 229 -55 345 -67 73 -7 1009 -11 3095 -10 3153 1 3139 0 3328 44 321 75 545 253 646 515 90 234 93 323 88 2111 -4 1464 -7 1563 -43 1775 -52 301 -176 554 -348 706 -21 19 -46 41 -56 50 -86 81 -249 170 -390 214 -164 51 -231 77 -240 95 -6 12 -10 333 -10 862 0 962 -6 1086 -66 1418 -26 142 -101 429 -139 530 -133 353 -235 558 -395 795 -121 180 -342 418 -516 557 -273 217 -666 404 -1015 482 -337 75 -775 104 -1154 75z m480 -1109 c217 -19 424 -64 585 -127 410 -161 718 -458 894 -858 48 -109 129 -345 121 -353 -2 -3 0 -12 5 -22 12 -23 47 -218 60 -340 7 -60 11 -420 10 -979 0 -983 4 -916 -68 -949 -34 -16 -173 -17 -1762 -17 -1620 0 -1728 1 -1782 18 -51 16 -58 21 -63 50 -3 17 -4 442 -2 942 4 998 2 977 67 1245 122 500 369 885 716 1116 92 61 275 150 376 183 253 83 553 115 843 91z"}))))});const a=P("show-hidden-channels"),[A,p,m,g,S,C,E,N,I]=v(t=>t.default.name==="BaseChannelItem",c.byProps("getChannelPermissions"),c.byProps("getChannel"),c.byProps("hasUnread"),c.byProps("Permissions"),c.byName("ChannelRecord"),c.byProps("fetchMessages"),c.byProps("selectChannel"),c.byProps("hasNavigated")),k={name:"ShowHiddenChannels",onStart(){var t;this.can=(t=p.can.__original)!=null?t:p.can;const h=this;C.prototype.isHidden=function(){return![1,3].includes(this.type)&&!h.can(S.Permissions.VIEW_CHANNEL,this)},a.after(p,"can",(s,[r])=>{if(r===S.Permissions.VIEW_CHANNEL)return!0}),a.after(g,"hasUnread",(s,r,o)=>{var n;return o&&!((n=m.getChannel(r[0]))!=null&&n.isHidden())}),a.after(g,"hasUnreadPins",(s,r,o)=>{if(!m.getChannel(r[0]))return!1}),a.after(g,"getMentionCount",(s,r,o)=>{var n;return(n=m.getChannel(r[0]))!=null&&n.isHidden()?0:o}),a.after(A,"default",(s,[r],o)=>{var n;const{channel:l}=(n=H(r,i=>i==null?void 0:i.channel))!=null?n:{};if(!(l!=null&&l.isHidden()))return o;o.props.children.push(d.createElement(x,null))}),a.instead(E,"fetchMessages",(s,r,o)=>{var n;const{channelId:l}=r[0],i=m.getChannel(l);if(!((n=i==null?void 0:i.isHidden)!=null&&n.call(i)))return o.apply(s,r)}),a.instead(N,"selectChannel",(s,r,o)=>{var n;const l=m.getChannel(r[1]);if(!((n=l==null?void 0:l.isHidden)!=null&&n.call(l)))return o.apply(s,r)}),a.instead(I,"transitionToGuild",(s,r,o)=>{var n;const l=m.getChannel(r[1]);if(!((n=l==null?void 0:l.isHidden)!=null&&n.call(l)))return o.apply(s,r)})},onStop(){delete C.prototype.isHidden,a.unpatchAll()}};F(k);
