"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[49477],{38063:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a={key:"v-24afdf4b",path:"/devices/E1525_E1745.html",title:"IKEA E1525/E1745 control via MQTT",lang:"en-US",frontmatter:{title:"IKEA E1525/E1745 control via MQTT",description:"Integrate your IKEA E1525/E1745 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2021-10-30T12:58:50.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Binding",slug:"binding",children:[]}]},{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Occupancy (binary)",slug:"occupancy-binary",children:[]},{level:3,title:"Requested_brightness_level (numeric)",slug:"requested-brightness-level-numeric",children:[]},{level:3,title:"Requested_brightness_percent (numeric)",slug:"requested-brightness-percent-numeric",children:[]},{level:3,title:"Illuminance_above_threshold (binary)",slug:"illuminance-above-threshold-binary",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/E1525_E1745.md",git:{updatedTime:1641213077e3}}},19110:(e,t,i)=>{i.r(t),i.d(t,{default:()=>g});var a=i(66252);const d=(0,a.uE)('<h1 id="ikea-e1525-e1745" tabindex="-1"><a class="header-anchor" href="#ikea-e1525-e1745" aria-hidden="true">#</a> IKEA E1525/E1745</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>E1525/E1745</td></tr><tr><td>Vendor</td><td>IKEA</td></tr><tr><td>Description</td><td>TRADFRI motion sensor</td></tr><tr><td>Exposes</td><td>battery, occupancy, requested_brightness_level, requested_brightness_percent, illuminance_above_threshold, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/E1525-E1745.jpg" alt="IKEA E1525/E1745"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Pair the sensor to Zigbee2MQTT by pressing the pair button 4 times in a row. The red light on the front side should flash a few times and then turn off. After a few seconds it turns back on and pulsate. When connected, the light turns off.</p><h3 id="binding" tabindex="-1"><a class="header-anchor" href="#binding" aria-hidden="true">#</a> Binding</h3>',6),n=(0,a.Uk)("The E1745 can be bound to groups using "),r=(0,a.Uk)("binding"),o=(0,a.Uk)("."),s=(0,a._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,a.Uk)(" OTA updates")],-1),c=(0,a.Uk)("This device supports OTA updates, for more information see "),l=(0,a.Uk)("OTA updates"),h=(0,a.Uk)("."),u=(0,a._)("h2",{id:"options",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,a.Uk)(" Options")],-1),p=(0,a.Uk)("How to use device type specific configuration"),b=(0,a.uE)('<ul><li><p><code>occupancy_timeout</code>: Time in seconds after which occupancy is cleared after detecting it (default 90 seconds). The value must be a number with a minimum value of <code>0</code></p></li><li><p><code>illuminance_below_threshold_check</code>: Set to false to also send messages when illuminance is above threshold in night mode (default true). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary" aria-hidden="true">#</a> Occupancy (binary)</h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="requested-brightness-level-numeric" tabindex="-1"><a class="header-anchor" href="#requested-brightness-level-numeric" aria-hidden="true">#</a> Requested_brightness_level (numeric)</h3><p>Value can be found in the published state on the <code>requested_brightness_level</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>76</code> and the maximum value is <code>254</code>.</p><h3 id="requested-brightness-percent-numeric" tabindex="-1"><a class="header-anchor" href="#requested-brightness-percent-numeric" aria-hidden="true">#</a> Requested_brightness_percent (numeric)</h3><p>Value can be found in the published state on the <code>requested_brightness_percent</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>30</code> and the maximum value is <code>100</code>.</p><h3 id="illuminance-above-threshold-binary" tabindex="-1"><a class="header-anchor" href="#illuminance-above-threshold-binary" aria-hidden="true">#</a> Illuminance_above_threshold (binary)</h3><p>Indicates whether the device detected bright light (works only in night mode). Value can be found in the published state on the <code>illuminance_above_threshold</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> illuminance_above_threshold is ON, if <code>false</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',14),m={},g=(0,i(83744).Z)(m,[["render",function(e,t){const i=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[d,(0,a._)("p",null,[n,(0,a.Wm)(i,{to:"/guide/usage/binding.html"},{default:(0,a.w5)((()=>[r])),_:1}),o]),s,(0,a._)("p",null,[c,(0,a.Wm)(i,{to:"/guide/usage/ota_updates.html"},{default:(0,a.w5)((()=>[l])),_:1}),h]),u,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[p])),_:1})])]),b],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,a]of t)e[i]=a;return e}}}]);