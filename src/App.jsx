import { useState, useEffect, useRef } from "react";

// ─── TOKENS ──────────────────────────────────────────────────────────────────
const Y="#FCD308",BG="#0D0D0D",C1="#161616",C2="#1F1F1F",C3="#272727";
const LN="rgba(255,255,255,0.07)",LH="rgba(255,255,255,0.13)";
const WT="#F2F2F2",MT="#909090",DT="#555555";
const GD="#FFD060",SL="#B8C4CF",BZ="#D4845A",RED="#FF4444";

const idr=(n)=>{if(!n||n<=0)return"Rp 0";if(n>=1e9)return`Rp ${(n/1e9).toFixed(2)}M`;if(n>=1e6)return`Rp ${(n/1e6).toFixed(1)}JT`;if(n>=1e3)return`Rp ${Math.round(n/1e3)}rb`;return`Rp ${n}`;};
const fmtN=(n)=>{if(!n)return"0";if(n>=1e6)return(n/1e6).toFixed(1)+"JT";if(n>=1e3)return Math.round(n/1e3)+"K";return`${Math.round(n)}`;};
const lvC=(l)=>({"Lv.1":"#5B9EFF","Lv.2":"#2DD4A0","Lv.3":"#FBBF24","Lv.4":"#F87070"}[l]||"#888");
const EM=["🦁","🌸","🐯","🦅","🐼","🦊","🎭","🌴","💃","🎬","🎤","👑","✨","🎧","🍜","👨‍🍳","🌅","🏡","🗺️","🤝","🔥","💎","⚡","🎯","🎪","🧁","🎸","🌊","🦋","🐬"];
const avt=(n)=>EM[Math.abs([...(n||"")].reduce((a,c)=>a+c.charCodeAt(0),0))%EM.length];
const saveU=(d)=>{try{localStorage.setItem("ag5",JSON.stringify(d));}catch(e){}};
const loadU=()=>{try{const s=localStorage.getItem("ag5");return s?JSON.parse(s):null;}catch(e){return null;}};

const LB={
"70_w1":[{rank:1,name:"jalanhematbanget",level:"Lv.2",city:"Bogor",gmv:944965,posts:1169,views:203583,sessions:0},{rank:2,name:"dailytuffinhell",level:"Lv.2",city:"Bengkulu",gmv:0,posts:627,views:94600,sessions:0},{rank:3,name:"esi6769",level:"Lv.1",city:"Pariaman",gmv:0,posts:380,views:49683,sessions:0},{rank:4,name:"gimoimoo",level:"Lv.2",city:"Bengkulu",gmv:0,posts:369,views:55287,sessions:0},{rank:5,name:"krmla102",level:"Lv.1",city:"Indragiri Hilir",gmv:0,posts:341,views:279367,sessions:0},{rank:6,name:"jejessie12",level:"Lv.2",city:"Pasuruan",gmv:0,posts:310,views:45543,sessions:0},{rank:7,name:"terbaru_affiliatefyp",level:"Lv.1",city:"Pesawaran",gmv:0,posts:298,views:52065,sessions:0},{rank:8,name:"wowalaala",level:"Lv.1",city:"Palembang",gmv:0,posts:288,views:43696,sessions:0},{rank:9,name:"umi_sastra",level:"Lv.1",city:"Musi Rawas",gmv:0,posts:278,views:84722,sessions:0},{rank:10,name:"hematbareng0",level:"Lv.2",city:"Palembang",gmv:4224058,posts:277,views:893569,sessions:0},{rank:11,name:"elel_store1",level:"Lv.2",city:"West Tanjung Jabun",gmv:6311337,posts:267,views:403187,sessions:0},{rank:12,name:"syarif_jinan",level:"Lv.3",city:"Jember",gmv:6790371,posts:262,views:1293115,sessions:0},{rank:13,name:"nurulhabiba86",level:"Lv.1",city:"Pasuruan",gmv:0,posts:255,views:78168,sessions:0},{rank:14,name:"reandhawidiw",level:"Lv.2",city:"Palembang",gmv:0,posts:240,views:55106,sessions:0},{rank:15,name:"catheroes1992",level:"Lv.2",city:"Pangkajene Dan Kep",gmv:2248802,posts:231,views:174914,sessions:0},{rank:16,name:"smashincpum",level:"Lv.1",city:"Bandar Lampung",gmv:0,posts:215,views:95019,sessions:0},{rank:17,name:"fitriawaliyah21_",level:"Lv.2",city:"Lamongan",gmv:356001,posts:213,views:167933,sessions:0},{rank:18,name:"spillshopee.terracun",level:"Lv.1",city:"Kubu Raya",gmv:1053722,posts:212,views:298958,sessions:0},{rank:19,name:"cut_yusniar",level:"Lv.2",city:"Bireuen",gmv:4726390,posts:205,views:450456,sessions:0},{rank:20,name:"lie2sukses",level:"Lv.1",city:"Magelang",gmv:0,posts:189,views:66925,sessions:0},{rank:21,name:"roavelle.co",level:"Lv.1",city:"Sintang",gmv:504937,posts:186,views:145987,sessions:0},{rank:22,name:"mutiavzy",level:"Lv.2",city:"Palembang",gmv:0,posts:182,views:27553,sessions:0},{rank:23,name:"aji.cipluk",level:"Lv.1",city:"Pasuruan",gmv:0,posts:177,views:288326,sessions:0},{rank:24,name:"musdalifah.s_akun2",level:"Lv.0",city:"Indragiri Hilir",gmv:0,posts:175,views:52661,sessions:0},{rank:25,name:"urraaaaa03",level:"Lv.1",city:"Indragiri Hilir",gmv:0,posts:172,views:56618,sessions:0},{rank:26,name:"pencinta20makanan26",level:"Lv.1",city:"Indragiri Hilir",gmv:0,posts:171,views:24187,sessions:0},{rank:27,name:"happy.yulia8",level:"Lv.1",city:"Pasuruan",gmv:0,posts:166,views:36466,sessions:0},{rank:28,name:"candrasky13",level:"Lv.2",city:"Bandar Lampung",gmv:454659,posts:164,views:136970,sessions:0},{rank:29,name:"sarivitaa_",level:"Lv.2",city:"Sambas",gmv:83599,posts:163,views:60400,sessions:0},{rank:30,name:"adlyyyyzx",level:"Lv.1",city:"Bandar Lampung",gmv:0,posts:159,views:86603,sessions:0},{rank:31,name:"ny.agung_mei",level:"Lv.1",city:"Pasuruan",gmv:0,posts:157,views:209538,sessions:0},{rank:32,name:"sarasqy20",level:"Lv.1",city:"Palembang",gmv:0,posts:157,views:16424,sessions:0},{rank:33,name:"inisyiefa",level:"Lv.1",city:"Pasuruan",gmv:0,posts:156,views:105168,sessions:0},{rank:34,name:"meilaniwe94",level:"Lv.2",city:"Surabaya",gmv:389999,posts:154,views:77398,sessions:0},{rank:35,name:"hiiswifties",level:"Lv.1",city:"Melawi",gmv:0,posts:152,views:64493,sessions:0},{rank:36,name:"akunkeduajenongtv",level:"Lv.1",city:"Sukabumi City",gmv:0,posts:151,views:37628,sessions:0},{rank:37,name:"kiiwkiiiiw_",level:"Lv.2",city:"Rokan Hilir",gmv:2470523,posts:146,views:589681,sessions:0},{rank:38,name:"belanjarecehan_",level:"Lv.4",city:"Palembang",gmv:50311200,posts:145,views:1452414,sessions:0},{rank:39,name:"wiuwiuwiu655",level:"Lv.1",city:"West Tanjung Jabun",gmv:433110,posts:144,views:124941,sessions:0},{rank:40,name:"a_mhr3",level:"Lv.1",city:"Banda Aceh",gmv:0,posts:142,views:27266,sessions:0},{rank:41,name:"_cloudya6",level:"Lv.2",city:"Palembang",gmv:0,posts:140,views:62494,sessions:0},{rank:42,name:"boxercollection.id",level:"Lv.1",city:"North Lampung",gmv:0,posts:135,views:16205,sessions:0},{rank:43,name:"marius_purba_channel",level:"Lv.2",city:"Medan",gmv:1653883,posts:134,views:100981,sessions:0},{rank:44,name:"zakiaazzuhra",level:"Lv.1",city:"Indragiri Hilir",gmv:0,posts:134,views:45213,sessions:0},{rank:45,name:"instomalee",level:"Lv.0",city:"Bandar Lampung",gmv:0,posts:133,views:14124,sessions:0},{rank:46,name:"nulnulshp",level:"Lv.3",city:"Malang",gmv:0,posts:131,views:64879,sessions:0},{rank:47,name:"septikatika5",level:"Lv.1",city:"North Lampung",gmv:0,posts:131,views:38236,sessions:0},{rank:48,name:"revinarialdo_",level:"Lv.0",city:"Bandar Lampung",gmv:0,posts:128,views:23033,sessions:0},{rank:49,name:"erikaa.daily",level:"Lv.1",city:"Lamongan",gmv:0,posts:127,views:37009,sessions:0},{rank:50,name:"hierozone",level:"Lv.2",city:"Sidoarjo",gmv:187603,posts:126,views:18175,sessions:0}],
"70_w2":[{rank:1,name:"jalanhematbanget",level:"Lv.2",city:"Bogor",gmv:2929479,posts:952,views:305697,sessions:0},{rank:2,name:"esi6769",level:"Lv.1",city:"Pariaman",gmv:37900,posts:593,views:70070,sessions:0},{rank:3,name:"hierozone",level:"Lv.2",city:"Sidoarjo",gmv:209409,posts:377,views:276113,sessions:0},{rank:4,name:"jejessie12",level:"Lv.2",city:"Pasuruan",gmv:2084867,posts:348,views:228856,sessions:0},{rank:5,name:"wowalaala",level:"Lv.1",city:"Palembang",gmv:336250,posts:343,views:60721,sessions:0},{rank:6,name:"reandhawidiw",level:"Lv.2",city:"Palembang",gmv:620030,posts:314,views:113610,sessions:0},{rank:7,name:"gimoimoo",level:"Lv.2",city:"Bengkulu",gmv:975218,posts:314,views:60375,sessions:0},{rank:8,name:"rahmatreal_",level:"Lv.4",city:"Gowa",gmv:1373591,posts:280,views:373810,sessions:0},{rank:9,name:"nurulhabiba86",level:"Lv.1",city:"Pasuruan",gmv:0,posts:279,views:106858,sessions:0},{rank:10,name:"meilaniwe94",level:"Lv.2",city:"Surabaya",gmv:1647991,posts:235,views:115347,sessions:0},{rank:11,name:"catheroes1992",level:"Lv.2",city:"Pangkajene Dan Kep",gmv:2206926,posts:232,views:286496,sessions:0},{rank:12,name:"ny.agung_mei",level:"Lv.1",city:"Pasuruan",gmv:0,posts:230,views:188935,sessions:0},{rank:13,name:"radacio1125",level:"Lv.1",city:"Bandar Lampung",gmv:316323,posts:227,views:79248,sessions:0},{rank:14,name:"cut_yusniar",level:"Lv.2",city:"Bireuen",gmv:7644941,posts:226,views:785846,sessions:0},{rank:15,name:"mutiavzy",level:"Lv.2",city:"Palembang",gmv:0,posts:222,views:34775,sessions:0},{rank:16,name:"rforramaaa",level:"Lv.1",city:"Bekasi",gmv:0,posts:221,views:25191,sessions:0},{rank:17,name:"hemmmmm008",level:"Lv.1",city:"Pringsewu",gmv:0,posts:219,views:217400,sessions:0},{rank:18,name:"sarasqy20",level:"Lv.1",city:"Palembang",gmv:0,posts:207,views:28062,sessions:0},{rank:19,name:"elel_store1",level:"Lv.2",city:"West Tanjung Jabun",gmv:2686694,posts:207,views:341448,sessions:0},{rank:20,name:"belanjarecehan_",level:"Lv.4",city:"Palembang",gmv:194230932,posts:203,views:9668494,sessions:0},{rank:21,name:"umi_sastra",level:"Lv.1",city:"Musi Rawas",gmv:180001,posts:202,views:120519,sessions:0},{rank:22,name:"dailytuffinhell",level:"Lv.1",city:"Bengkulu",gmv:0,posts:202,views:32478,sessions:0},{rank:23,name:"idoymuah97",level:"Lv.1",city:"Bandar Lampung",gmv:0,posts:202,views:29199,sessions:0},{rank:24,name:"happy.yulia8",level:"Lv.1",city:"Pasuruan",gmv:0,posts:202,views:52040,sessions:0},{rank:25,name:"dailytuffinhell",level:"Lv.2",city:"Bengkulu",gmv:0,posts:202,views:101896,sessions:0},{rank:26,name:"septikatika5",level:"Lv.1",city:"North Lampung",gmv:0,posts:194,views:50698,sessions:0},{rank:27,name:"sarivitaa_",level:"Lv.2",city:"Sambas",gmv:531143,posts:192,views:80531,sessions:0},{rank:28,name:"smashincpum",level:"Lv.0",city:"Bandung",gmv:0,posts:180,views:29121,sessions:0},{rank:29,name:"racil9592",level:"Lv.1",city:"Bandar Lampung",gmv:238257,posts:170,views:32484,sessions:0},{rank:30,name:"ratufelice88",level:"Lv.1",city:"Denpasar",gmv:0,posts:170,views:42130,sessions:0},{rank:31,name:"adlyyyyzx",level:"Lv.1",city:"Bandar Lampung",gmv:303790,posts:169,views:47373,sessions:0},{rank:32,name:"lie2sukses",level:"Lv.1",city:"Magelang",gmv:0,posts:165,views:50995,sessions:0},{rank:33,name:"tuhfah.mlna.s_01",level:"Lv.3",city:"Malang City",gmv:21255295,posts:162,views:3232581,sessions:0},{rank:34,name:"syarif_jinan",level:"Lv.3",city:"Jember",gmv:3582002,posts:161,views:510121,sessions:0},{rank:35,name:"angelicazivania",level:"Lv.1",city:"Semarang City",gmv:0,posts:160,views:33702,sessions:0},{rank:36,name:"terbaru_affiliatefyp",level:"Lv.1",city:"Pesawaran",gmv:30999,posts:159,views:31534,sessions:0},{rank:37,name:"kak_nop",level:"Lv.2",city:"Palembang",gmv:880992,posts:156,views:206896,sessions:0},{rank:38,name:"ms.anss_17",level:"Lv.2",city:"Indragiri Hilir",gmv:0,posts:156,views:87203,sessions:0},{rank:39,name:"revinarialdo_",level:"Lv.0",city:"Bandar Lampung",gmv:0,posts:152,views:32844,sessions:0},{rank:40,name:"krmla102",level:"Lv.1",city:"Indragiri Hilir",gmv:0,posts:152,views:81899,sessions:0},{rank:41,name:"vidiomilikistianah03",level:"Lv.1",city:"Bondowoso",gmv:0,posts:152,views:39514,sessions:0},{rank:42,name:"roavelle.co",level:"Lv.1",city:"Sintang",gmv:0,posts:149,views:119338,sessions:0},{rank:43,name:"rusdiyanto457",level:"Lv.1",city:"Bandar Lampung",gmv:0,posts:148,views:65266,sessions:0},{rank:44,name:"niekhendevita57",level:"Lv.1",city:"Karawang",gmv:85700,posts:147,views:69062,sessions:0},{rank:45,name:"chaa_addict",level:"Lv.1",city:"Sleman",gmv:0,posts:146,views:64215,sessions:0},{rank:46,name:"amanda_a1028",level:"Lv.1",city:"Bekasi",gmv:0,posts:145,views:79552,sessions:0},{rank:47,name:"zakiaazzuhra",level:"Lv.1",city:"Indragiri Hilir",gmv:0,posts:137,views:42265,sessions:0},{rank:48,name:"fitriawaliyah21_",level:"Lv.1",city:"Lamongan",gmv:1902288,posts:136,views:1099608,sessions:0},{rank:49,name:"marius_purba_channel",level:"Lv.2",city:"Medan",gmv:2587264,posts:134,views:212679,sessions:0},{rank:50,name:"cholix1112",level:"Lv.1",city:"Pasuruan",gmv:356435,posts:133,views:58157,sessions:0}],
"70_w3":[{rank:1,name:"jalanhematbanget",level:"Lv.2",city:"Bogor",gmv:2846149,posts:954,views:435688,sessions:0},{rank:2,name:"esi6769",level:"Lv.1",city:"Pariaman",gmv:0,posts:624,views:73095,sessions:0},{rank:3,name:"dailytuffinhell",level:"Lv.2",city:"Bengkulu",gmv:100998,posts:534,views:321900,sessions:0},{rank:4,name:"krmla102",level:"Lv.1",city:"Indragiri Hilir",gmv:12001,posts:494,views:286610,sessions:0},{rank:5,name:"vidiomilikistianah03",level:"Lv.1",city:"Bondowoso",gmv:0,posts:416,views:113934,sessions:0},{rank:6,name:"catheroes1992",level:"Lv.2",city:"Pangkajene Dan Kep",gmv:4930997,posts:402,views:422541,sessions:0},{rank:7,name:"jejessie12",level:"Lv.2",city:"Pasuruan",gmv:0,posts:356,views:106215,sessions:0},{rank:8,name:"gimoimoo",level:"Lv.2",city:"Bengkulu",gmv:645983,posts:319,views:74008,sessions:0},{rank:9,name:"nurulhabiba86",level:"Lv.1",city:"Pasuruan",gmv:0,posts:309,views:175526,sessions:0},{rank:10,name:"reandhawidiw",level:"Lv.2",city:"Palembang",gmv:0,posts:300,views:87475,sessions:0},{rank:11,name:"wowalaala",level:"Lv.1",city:"Palembang",gmv:0,posts:287,views:20395,sessions:0},{rank:12,name:"rahmatreal_",level:"Lv.4",city:"Gowa",gmv:410500,posts:284,views:253975,sessions:0},{rank:13,name:"terbaru_affiliatefyp",level:"Lv.1",city:"Pesawaran",gmv:898336,posts:247,views:105463,sessions:0},{rank:14,name:"ny.agung_mei",level:"Lv.1",city:"Pasuruan",gmv:0,posts:244,views:199107,sessions:0},{rank:15,name:"belanjarecehan_",level:"Lv.4",city:"Palembang",gmv:100583683,posts:227,views:9297793,sessions:0},{rank:16,name:"happy.yulia8",level:"Lv.1",city:"Pasuruan",gmv:0,posts:224,views:168644,sessions:0},{rank:17,name:"cut_yusniar",level:"Lv.2",city:"Bireuen",gmv:4347730,posts:211,views:423854,sessions:0},{rank:18,name:"angelmovie_0",level:"Lv.1",city:"South Pesisir",gmv:0,posts:209,views:84281,sessions:0},{rank:19,name:"muliana3766",level:"Lv.1",city:"Indragiri Hilir",gmv:79997,posts:207,views:38122,sessions:0},{rank:20,name:"mutiavzy",level:"Lv.2",city:"Palembang",gmv:0,posts:202,views:33497,sessions:0},{rank:21,name:"ms.anss_17",level:"Lv.2",city:"Indragiri Hilir",gmv:903900,posts:201,views:127931,sessions:0},{rank:22,name:"shakilaad24",level:"Lv.1",city:"Sleman",gmv:0,posts:201,views:143349,sessions:0},{rank:23,name:"lie2sukses",level:"Lv.1",city:"Magelang",gmv:0,posts:198,views:92980,sessions:0},{rank:24,name:"gas_promo",level:"Lv.1",city:"Sleman",gmv:0,posts:194,views:13996,sessions:0},{rank:25,name:"mahendra.gazza",level:"Lv.1",city:"South Lampung",gmv:0,posts:189,views:4431,sessions:0},{rank:26,name:"meilaniwe94",level:"Lv.2",city:"Surabaya",gmv:0,posts:188,views:62833,sessions:0},{rank:27,name:"jajan.teross",level:"Lv.2",city:"Nganjuk",gmv:0,posts:184,views:100105,sessions:0},{rank:28,name:"adlyyyyzx",level:"Lv.1",city:"Bandar Lampung",gmv:0,posts:179,views:54427,sessions:0},{rank:29,name:".asepasep14",level:"Lv.1",city:"Sleman",gmv:0,posts:178,views:13851,sessions:0},{rank:30,name:"ceobandarlampung",level:"Lv.1",city:"Bandar Lampung",gmv:0,posts:178,views:26334,sessions:0},{rank:31,name:"syarif_jinan",level:"Lv.3",city:"Jember",gmv:3433154,posts:176,views:497915,sessions:0},{rank:32,name:"nulnulshp",level:"Lv.3",city:"Malang",gmv:0,posts:176,views:129329,sessions:0},{rank:33,name:"radacio1125",level:"Lv.1",city:"Bandar Lampung",gmv:0,posts:175,views:54027,sessions:0},{rank:34,name:"udandereskalibanjir",level:"Lv.1",city:"Banyuwangi",gmv:125297,posts:174,views:29240,sessions:0},{rank:35,name:"mahen_165",level:"Lv.1",city:"South Lampung",gmv:0,posts:172,views:22957,sessions:0},{rank:36,name:"dewifili",level:"Lv.1",city:"Pontianak",gmv:0,posts:172,views:24445,sessions:0},{rank:37,name:"jasmineputri010",level:"Lv.1",city:"Bandar Lampung",gmv:0,posts:168,views:49349,sessions:0},{rank:38,name:"ratufelice88",level:"Lv.1",city:"Denpasar",gmv:0,posts:166,views:22979,sessions:0},{rank:39,name:"syarif_jinan",level:"Lv.3",city:"Lumajang",gmv:2627709,posts:165,views:452139,sessions:0},{rank:40,name:"hemmmmm008",level:"Lv.1",city:"Pringsewu",gmv:0,posts:164,views:246055,sessions:0},{rank:41,name:"ikariaastika",level:"Lv.1",city:"Palembang",gmv:1000,posts:160,views:20330,sessions:0},{rank:42,name:"n_mallwdy",level:"Lv.1",city:"Palembang",gmv:0,posts:160,views:18388,sessions:0},{rank:43,name:"ball.tiktok06",level:"Lv.1",city:"Cilegon",gmv:0,posts:159,views:191029,sessions:0},{rank:44,name:"fitriawaliyah21_",level:"Lv.2",city:"Lamongan",gmv:545836,posts:157,views:79813,sessions:0},{rank:45,name:"put3_1818",level:"Lv.1",city:"Lubuklinggau",gmv:125993,posts:157,views:72909,sessions:0},{rank:46,name:"cholix1112",level:"Lv.1",city:"Pasuruan",gmv:0,posts:156,views:55039,sessions:0},{rank:47,name:"iyainiiyii",level:"Lv.2",city:"Indragiri Hilir",gmv:0,posts:156,views:95843,sessions:0},{rank:48,name:"septikatika5",level:"Lv.1",city:"North Lampung",gmv:0,posts:156,views:49667,sessions:0},{rank:49,name:"fitrieats",level:"Lv.1",city:"Cirebon",gmv:709793,posts:154,views:67298,sessions:0},{rank:50,name:"rforramaaa",level:"Lv.1",city:"Bekasi",gmv:47002,posts:153,views:15912,sessions:0}],
"70_w4":[{rank:1,name:"jalanhematbanget",level:"Lv.2",city:"Bogor",gmv:665679,posts:965,views:299095,sessions:0},{rank:2,name:"akunkeduajenongtv",level:"Lv.1",city:"Sukabumi City",gmv:0,posts:400,views:106480,sessions:0},{rank:3,name:"racil9592",level:"Lv.1",city:"Bandar Lampung",gmv:0,posts:383,views:56227,sessions:0},{rank:4,name:"ratufelice88",level:"Lv.1",city:"Denpasar",gmv:80646,posts:356,views:230810,sessions:0},{rank:5,name:"dailytuffinhell",level:"Lv.2",city:"Bengkulu",gmv:0,posts:356,views:46079,sessions:0},{rank:6,name:"jejessie12",level:"Lv.2",city:"Pasuruan",gmv:0,posts:351,views:54696,sessions:0},{rank:7,name:"reandhawidiw",level:"Lv.2",city:"Palembang",gmv:604091,posts:337,views:138662,sessions:0},{rank:8,name:"jelitsvd0i8",level:"Lv.1",city:"Bandar Lampung",gmv:43500,posts:331,views:4275,sessions:0},{rank:9,name:"esi6769",level:"Lv.1",city:"Pariaman",gmv:0,posts:317,views:33620,sessions:0},{rank:10,name:"angelicazivania",level:"Lv.1",city:"Semarang City",gmv:0,posts:309,views:71372,sessions:0},{rank:11,name:"happy.yulia8",level:"Lv.1",city:"Pasuruan",gmv:498768,posts:299,views:106638,sessions:0},{rank:12,name:"terbaru_affiliatefyp",level:"Lv.1",city:"Pesawaran",gmv:0,posts:298,views:59057,sessions:0},{rank:13,name:"vidiomilikistianah03",level:"Lv.1",city:"Bondowoso",gmv:0,posts:291,views:108381,sessions:0},{rank:14,name:"nurulhabiba86",level:"Lv.1",city:"Pasuruan",gmv:0,posts:277,views:114525,sessions:0},{rank:15,name:"dailytuffinhell",level:"Lv.1",city:"Bengkulu",gmv:49997,posts:270,views:47984,sessions:0},{rank:16,name:"gimoimoo",level:"Lv.2",city:"Bengkulu",gmv:415554,posts:261,views:86443,sessions:0},{rank:17,name:"slovenskyyy",level:"Lv.1",city:"Bekasi City",gmv:0,posts:256,views:35306,sessions:0},{rank:18,name:"rahmatreal_",level:"Lv.4",city:"Gowa",gmv:1562313,posts:255,views:326699,sessions:0},{rank:19,name:"giselaa.fd",level:"Lv.1",city:"Wonosobo",gmv:17999,posts:250,views:142601,sessions:0},{rank:20,name:"putridewirahayu",level:"Lv.1",city:"Balikpapan",gmv:0,posts:249,views:75888,sessions:0},{rank:21,name:"nzyyyyyy_22",level:"Lv.1",city:"Indragiri Hilir",gmv:145991,posts:248,views:84765,sessions:0},{rank:22,name:"dinateww_12",level:"Lv.1",city:"Bogor City",gmv:0,posts:245,views:59632,sessions:0},{rank:23,name:"adersonaffandi",level:"Lv.1",city:"Bandar Lampung",gmv:0,posts:242,views:53267,sessions:0},{rank:24,name:"septikatika5",level:"Lv.1",city:"North Lampung",gmv:699523,posts:232,views:68509,sessions:0},{rank:25,name:"krmla102",level:"Lv.1",city:"Indragiri Hilir",gmv:195757,posts:231,views:152093,sessions:0},{rank:26,name:"meilaniwe94",level:"Lv.2",city:"Surabaya",gmv:787843,posts:227,views:62006,sessions:0},{rank:27,name:"ny.agung_mei",level:"Lv.1",city:"Pasuruan",gmv:0,posts:224,views:140153,sessions:0},{rank:28,name:"belanjarecehan_",level:"Lv.4",city:"Palembang",gmv:84955449,posts:224,views:2128300,sessions:0},{rank:29,name:"genzzzsstt011",level:"Lv.1",city:"South Lampung",gmv:103794,posts:223,views:90207,sessions:0},{rank:30,name:"angelmovie_0",level:"Lv.1",city:"South Pesisir",gmv:0,posts:223,views:278554,sessions:0},{rank:31,name:"wowalaala",level:"Lv.1",city:"Palembang",gmv:0,posts:220,views:22827,sessions:0},{rank:32,name:"ritarian98",level:"Lv.1",city:"Banyuasin",gmv:0,posts:212,views:27278,sessions:0},{rank:33,name:"rusdiyanto457",level:"Lv.1",city:"Bandar Lampung",gmv:0,posts:211,views:229362,sessions:0},{rank:34,name:"wednes112",level:"Lv.1",city:"Sukabumi",gmv:96954,posts:210,views:90488,sessions:0},{rank:35,name:"mif_2705",level:"Lv.1",city:"East Lampung",gmv:0,posts:208,views:50577,sessions:0},{rank:36,name:"chaa_addict",level:"Lv.1",city:"Sleman",gmv:72000,posts:208,views:87123,sessions:0},{rank:37,name:"desianggrainih",level:"Lv.1",city:"South Lampung",gmv:0,posts:208,views:59817,sessions:0},{rank:38,name:"ikariaastika",level:"Lv.1",city:"Palembang",gmv:77997,posts:203,views:25105,sessions:0},{rank:39,name:"inisyiefa",level:"Lv.1",city:"Pasuruan",gmv:0,posts:200,views:50571,sessions:0},{rank:40,name:"mif_2705",level:"Lv.2",city:"East Lampung",gmv:64799,posts:200,views:42496,sessions:0},{rank:41,name:"kasmawatii01",level:"Lv.1",city:"Indragiri Hilir",gmv:24498,posts:200,views:67054,sessions:0},{rank:42,name:"bastami77",level:"Lv.1",city:"Pasuruan",gmv:0,posts:199,views:52280,sessions:0},{rank:43,name:"hasanahnurr17",level:"Lv.1",city:"Indragiri Hilir",gmv:27998,posts:197,views:39811,sessions:0},{rank:44,name:"ceobandarlampung",level:"Lv.1",city:"Bandar Lampung",gmv:19798,posts:196,views:48387,sessions:0},{rank:45,name:"syarif_jinan",level:"Lv.3",city:"Lumajang",gmv:5518089,posts:196,views:412955,sessions:0},{rank:46,name:"mamiin_shop",level:"Lv.1",city:"Jambi",gmv:0,posts:195,views:36891,sessions:0},{rank:47,name:"dindappdinda",level:"Lv.1",city:"Tanggamus",gmv:0,posts:195,views:323762,sessions:0},{rank:48,name:"_cloudya6",level:"Lv.1",city:"Palembang",gmv:359328,posts:189,views:86980,sessions:0},{rank:49,name:"catheroes1992",level:"Lv.2",city:"Pangkajene Dan Kep",gmv:2314330,posts:189,views:166488,sessions:0},{rank:50,name:"glowbylesta",level:"Lv.1",city:"Batam",gmv:0,posts:189,views:66479,sessions:0}],
"77_w1":[{rank:1,name:"jalanhematbanget",level:"Lv.2",city:"Bogor",gmv:944965,posts:1169,views:203583,sessions:0},{rank:2,name:"dailytuffinhell",level:"Lv.2",city:"Bengkulu",gmv:0,posts:627,views:94600,sessions:0},{rank:3,name:"esi6769",level:"Lv.1",city:"Pariaman",gmv:0,posts:380,views:49683,sessions:0},{rank:4,name:"gimoimoo",level:"Lv.2",city:"Bengkulu",gmv:0,posts:369,views:55287,sessions:0},{rank:5,name:"krmla102",level:"Lv.1",city:"Indragiri Hilir",gmv:0,posts:341,views:279367,sessions:0},{rank:6,name:"jejessie12",level:"Lv.2",city:"Pasuruan",gmv:0,posts:310,views:45543,sessions:0},{rank:7,name:"terbaru_affiliatefyp",level:"Lv.1",city:"Pesawaran",gmv:0,posts:298,views:52065,sessions:0},{rank:8,name:"wowalaala",level:"Lv.1",city:"Palembang",gmv:0,posts:288,views:43696,sessions:0},{rank:9,name:"umi_sastra",level:"Lv.1",city:"Musi Rawas",gmv:0,posts:278,views:84722,sessions:0},{rank:10,name:"hematbareng0",level:"Lv.2",city:"Palembang",gmv:4224058,posts:277,views:893569,sessions:0},{rank:11,name:"elel_store1",level:"Lv.2",city:"West Tanjung Jabun",gmv:6311337,posts:267,views:403187,sessions:0},{rank:12,name:"syarif_jinan",level:"Lv.3",city:"Jember",gmv:6790371,posts:262,views:1293115,sessions:0},{rank:13,name:"nurulhabiba86",level:"Lv.1",city:"Pasuruan",gmv:0,posts:255,views:78168,sessions:0},{rank:14,name:"reandhawidiw",level:"Lv.2",city:"Palembang",gmv:0,posts:240,views:55106,sessions:0},{rank:15,name:"catheroes1992",level:"Lv.2",city:"Pangkajene Dan Kep",gmv:2248802,posts:231,views:174914,sessions:0},{rank:16,name:"smashincpum",level:"Lv.1",city:"Bandar Lampung",gmv:0,posts:215,views:95019,sessions:0},{rank:17,name:"fitriawaliyah21_",level:"Lv.2",city:"Lamongan",gmv:356001,posts:213,views:167933,sessions:0},{rank:18,name:"spillshopee.terracun",level:"Lv.1",city:"Kubu Raya",gmv:1053722,posts:212,views:298958,sessions:0},{rank:19,name:"cut_yusniar",level:"Lv.2",city:"Bireuen",gmv:4726390,posts:205,views:450456,sessions:0},{rank:20,name:"lie2sukses",level:"Lv.1",city:"Magelang",gmv:0,posts:189,views:66925,sessions:0},{rank:21,name:"roavelle.co",level:"Lv.1",city:"Sintang",gmv:504937,posts:186,views:145987,sessions:0},{rank:22,name:"mutiavzy",level:"Lv.2",city:"Palembang",gmv:0,posts:182,views:27553,sessions:0},{rank:23,name:"aji.cipluk",level:"Lv.1",city:"Pasuruan",gmv:0,posts:177,views:288326,sessions:0},{rank:24,name:"musdalifah.s_akun2",level:"Lv.0",city:"Indragiri Hilir",gmv:0,posts:175,views:52661,sessions:0},{rank:25,name:"urraaaaa03",level:"Lv.1",city:"Indragiri Hilir",gmv:0,posts:172,views:56618,sessions:0},{rank:26,name:"pencinta20makanan26",level:"Lv.1",city:"Indragiri Hilir",gmv:0,posts:171,views:24187,sessions:0},{rank:27,name:"happy.yulia8",level:"Lv.1",city:"Pasuruan",gmv:0,posts:166,views:36466,sessions:0},{rank:28,name:"candrasky13",level:"Lv.2",city:"Bandar Lampung",gmv:454659,posts:164,views:136970,sessions:0},{rank:29,name:"sarivitaa_",level:"Lv.2",city:"Sambas",gmv:83599,posts:163,views:60400,sessions:0},{rank:30,name:"adlyyyyzx",level:"Lv.1",city:"Bandar Lampung",gmv:0,posts:159,views:86603,sessions:0},{rank:31,name:"ny.agung_mei",level:"Lv.1",city:"Pasuruan",gmv:0,posts:157,views:209538,sessions:0},{rank:32,name:"sarasqy20",level:"Lv.1",city:"Palembang",gmv:0,posts:157,views:16424,sessions:0},{rank:33,name:"inisyiefa",level:"Lv.1",city:"Pasuruan",gmv:0,posts:156,views:105168,sessions:0},{rank:34,name:"meilaniwe94",level:"Lv.2",city:"Surabaya",gmv:389999,posts:154,views:77398,sessions:0},{rank:35,name:"hiiswifties",level:"Lv.1",city:"Melawi",gmv:0,posts:152,views:64493,sessions:0},{rank:36,name:"akunkeduajenongtv",level:"Lv.1",city:"Sukabumi City",gmv:0,posts:151,views:37628,sessions:0},{rank:37,name:"kiiwkiiiiw_",level:"Lv.2",city:"Rokan Hilir",gmv:2470523,posts:146,views:589681,sessions:0},{rank:38,name:"belanjarecehan_",level:"Lv.4",city:"Palembang",gmv:50311200,posts:145,views:1452414,sessions:0},{rank:39,name:"wiuwiuwiu655",level:"Lv.1",city:"West Tanjung Jabun",gmv:433110,posts:144,views:124941,sessions:0},{rank:40,name:"a_mhr3",level:"Lv.1",city:"Banda Aceh",gmv:0,posts:142,views:27266,sessions:0},{rank:41,name:"_cloudya6",level:"Lv.2",city:"Palembang",gmv:0,posts:140,views:62494,sessions:0},{rank:42,name:"boxercollection.id",level:"Lv.1",city:"North Lampung",gmv:0,posts:135,views:16205,sessions:0},{rank:43,name:"marius_purba_channel",level:"Lv.2",city:"Medan",gmv:1653883,posts:134,views:100981,sessions:0},{rank:44,name:"zakiaazzuhra",level:"Lv.1",city:"Indragiri Hilir",gmv:0,posts:134,views:45213,sessions:0},{rank:45,name:"instomalee",level:"Lv.0",city:"Bandar Lampung",gmv:0,posts:133,views:14124,sessions:0},{rank:46,name:"nulnulshp",level:"Lv.3",city:"Malang",gmv:0,posts:131,views:64879,sessions:0},{rank:47,name:"septikatika5",level:"Lv.1",city:"North Lampung",gmv:0,posts:131,views:38236,sessions:0},{rank:48,name:"revinarialdo_",level:"Lv.0",city:"Bandar Lampung",gmv:0,posts:128,views:23033,sessions:0},{rank:49,name:"erikaa.daily",level:"Lv.1",city:"Lamongan",gmv:0,posts:127,views:37009,sessions:0},{rank:50,name:"hierozone",level:"Lv.2",city:"Sidoarjo",gmv:187603,posts:126,views:18175,sessions:0}],
"77_w2":[{rank:1,name:"jalanhematbanget",level:"Lv.2",city:"Bogor",gmv:2929479,posts:952,views:305697,sessions:0},{rank:2,name:"esi6769",level:"Lv.1",city:"Pariaman",gmv:37900,posts:593,views:70070,sessions:0},{rank:3,name:"hierozone",level:"Lv.2",city:"Sidoarjo",gmv:209409,posts:377,views:276113,sessions:0},{rank:4,name:"jejessie12",level:"Lv.2",city:"Pasuruan",gmv:2084867,posts:348,views:228856,sessions:0},{rank:5,name:"wowalaala",level:"Lv.1",city:"Palembang",gmv:336250,posts:343,views:60721,sessions:0},{rank:6,name:"reandhawidiw",level:"Lv.2",city:"Palembang",gmv:620030,posts:314,views:113610,sessions:0},{rank:7,name:"gimoimoo",level:"Lv.2",city:"Bengkulu",gmv:975218,posts:314,views:60375,sessions:0},{rank:8,name:"rahmatreal_",level:"Lv.4",city:"Gowa",gmv:1373591,posts:280,views:373810,sessions:0},{rank:9,name:"nurulhabiba86",level:"Lv.1",city:"Pasuruan",gmv:0,posts:279,views:106858,sessions:0},{rank:10,name:"meilaniwe94",level:"Lv.2",city:"Surabaya",gmv:1647991,posts:235,views:115347,sessions:0},{rank:11,name:"catheroes1992",level:"Lv.2",city:"Pangkajene Dan Kep",gmv:2206926,posts:232,views:286496,sessions:0},{rank:12,name:"ny.agung_mei",level:"Lv.1",city:"Pasuruan",gmv:0,posts:230,views:188935,sessions:0},{rank:13,name:"radacio1125",level:"Lv.1",city:"Bandar Lampung",gmv:316323,posts:227,views:79248,sessions:0},{rank:14,name:"cut_yusniar",level:"Lv.2",city:"Bireuen",gmv:7644941,posts:226,views:785846,sessions:0},{rank:15,name:"mutiavzy",level:"Lv.2",city:"Palembang",gmv:0,posts:222,views:34775,sessions:0},{rank:16,name:"rforramaaa",level:"Lv.1",city:"Bekasi",gmv:0,posts:221,views:25191,sessions:0},{rank:17,name:"hemmmmm008",level:"Lv.1",city:"Pringsewu",gmv:0,posts:219,views:217400,sessions:0},{rank:18,name:"sarasqy20",level:"Lv.1",city:"Palembang",gmv:0,posts:207,views:28062,sessions:0},{rank:19,name:"elel_store1",level:"Lv.2",city:"West Tanjung Jabun",gmv:2686694,posts:207,views:341448,sessions:0},{rank:20,name:"belanjarecehan_",level:"Lv.4",city:"Palembang",gmv:194230932,posts:203,views:9668494,sessions:0},{rank:21,name:"umi_sastra",level:"Lv.1",city:"Musi Rawas",gmv:180001,posts:202,views:120519,sessions:0},{rank:22,name:"dailytuffinhell",level:"Lv.1",city:"Bengkulu",gmv:0,posts:202,views:32478,sessions:0},{rank:23,name:"idoymuah97",level:"Lv.1",city:"Bandar Lampung",gmv:0,posts:202,views:29199,sessions:0},{rank:24,name:"happy.yulia8",level:"Lv.1",city:"Pasuruan",gmv:0,posts:202,views:52040,sessions:0},{rank:25,name:"dailytuffinhell",level:"Lv.2",city:"Bengkulu",gmv:0,posts:202,views:101896,sessions:0},{rank:26,name:"septikatika5",level:"Lv.1",city:"North Lampung",gmv:0,posts:194,views:50698,sessions:0},{rank:27,name:"sarivitaa_",level:"Lv.2",city:"Sambas",gmv:531143,posts:192,views:80531,sessions:0},{rank:28,name:"smashincpum",level:"Lv.0",city:"Bandung",gmv:0,posts:180,views:29121,sessions:0},{rank:29,name:"racil9592",level:"Lv.1",city:"Bandar Lampung",gmv:238257,posts:170,views:32484,sessions:0},{rank:30,name:"ratufelice88",level:"Lv.1",city:"Denpasar",gmv:0,posts:170,views:42130,sessions:0},{rank:31,name:"adlyyyyzx",level:"Lv.1",city:"Bandar Lampung",gmv:303790,posts:169,views:47373,sessions:0},{rank:32,name:"lie2sukses",level:"Lv.1",city:"Magelang",gmv:0,posts:165,views:50995,sessions:0},{rank:33,name:"tuhfah.mlna.s_01",level:"Lv.3",city:"Malang City",gmv:21255295,posts:162,views:3232581,sessions:0},{rank:34,name:"syarif_jinan",level:"Lv.3",city:"Jember",gmv:3582002,posts:161,views:510121,sessions:0},{rank:35,name:"angelicazivania",level:"Lv.1",city:"Semarang City",gmv:0,posts:160,views:33702,sessions:0},{rank:36,name:"terbaru_affiliatefyp",level:"Lv.1",city:"Pesawaran",gmv:30999,posts:159,views:31534,sessions:0},{rank:37,name:"kak_nop",level:"Lv.2",city:"Palembang",gmv:880992,posts:156,views:206896,sessions:0},{rank:38,name:"ms.anss_17",level:"Lv.2",city:"Indragiri Hilir",gmv:0,posts:156,views:87203,sessions:0},{rank:39,name:"revinarialdo_",level:"Lv.0",city:"Bandar Lampung",gmv:0,posts:152,views:32844,sessions:0},{rank:40,name:"krmla102",level:"Lv.1",city:"Indragiri Hilir",gmv:0,posts:152,views:81899,sessions:0},{rank:41,name:"vidiomilikistianah03",level:"Lv.1",city:"Bondowoso",gmv:0,posts:152,views:39514,sessions:0},{rank:42,name:"roavelle.co",level:"Lv.1",city:"Sintang",gmv:0,posts:149,views:119338,sessions:0},{rank:43,name:"rusdiyanto457",level:"Lv.1",city:"Bandar Lampung",gmv:0,posts:148,views:65266,sessions:0},{rank:44,name:"niekhendevita57",level:"Lv.1",city:"Karawang",gmv:85700,posts:147,views:69062,sessions:0},{rank:45,name:"chaa_addict",level:"Lv.1",city:"Sleman",gmv:0,posts:146,views:64215,sessions:0},{rank:46,name:"amanda_a1028",level:"Lv.1",city:"Bekasi",gmv:0,posts:145,views:79552,sessions:0},{rank:47,name:"zakiaazzuhra",level:"Lv.1",city:"Indragiri Hilir",gmv:0,posts:137,views:42265,sessions:0},{rank:48,name:"fitriawaliyah21_",level:"Lv.1",city:"Lamongan",gmv:1902288,posts:136,views:1099608,sessions:0},{rank:49,name:"marius_purba_channel",level:"Lv.2",city:"Medan",gmv:2587264,posts:134,views:212679,sessions:0},{rank:50,name:"cholix1112",level:"Lv.1",city:"Pasuruan",gmv:356435,posts:133,views:58157,sessions:0}],
"77_w3":[{rank:1,name:"jalanhematbanget",level:"Lv.2",city:"Bogor",gmv:2846149,posts:954,views:435688,sessions:0},{rank:2,name:"esi6769",level:"Lv.1",city:"Pariaman",gmv:0,posts:624,views:73095,sessions:0},{rank:3,name:"dailytuffinhell",level:"Lv.2",city:"Bengkulu",gmv:100998,posts:534,views:321900,sessions:0},{rank:4,name:"krmla102",level:"Lv.1",city:"Indragiri Hilir",gmv:12001,posts:494,views:286610,sessions:0},{rank:5,name:"vidiomilikistianah03",level:"Lv.1",city:"Bondowoso",gmv:0,posts:416,views:113934,sessions:0},{rank:6,name:"catheroes1992",level:"Lv.2",city:"Pangkajene Dan Kep",gmv:4930997,posts:402,views:422541,sessions:0},{rank:7,name:"jejessie12",level:"Lv.2",city:"Pasuruan",gmv:0,posts:356,views:106215,sessions:0},{rank:8,name:"gimoimoo",level:"Lv.2",city:"Bengkulu",gmv:645983,posts:319,views:74008,sessions:0},{rank:9,name:"nurulhabiba86",level:"Lv.1",city:"Pasuruan",gmv:0,posts:309,views:175526,sessions:0},{rank:10,name:"reandhawidiw",level:"Lv.2",city:"Palembang",gmv:0,posts:300,views:87475,sessions:0},{rank:11,name:"wowalaala",level:"Lv.1",city:"Palembang",gmv:0,posts:287,views:20395,sessions:0},{rank:12,name:"rahmatreal_",level:"Lv.4",city:"Gowa",gmv:410500,posts:284,views:253975,sessions:0},{rank:13,name:"terbaru_affiliatefyp",level:"Lv.1",city:"Pesawaran",gmv:898336,posts:247,views:105463,sessions:0},{rank:14,name:"ny.agung_mei",level:"Lv.1",city:"Pasuruan",gmv:0,posts:244,views:199107,sessions:0},{rank:15,name:"belanjarecehan_",level:"Lv.4",city:"Palembang",gmv:100583683,posts:227,views:9297793,sessions:0},{rank:16,name:"happy.yulia8",level:"Lv.1",city:"Pasuruan",gmv:0,posts:224,views:168644,sessions:0},{rank:17,name:"cut_yusniar",level:"Lv.2",city:"Bireuen",gmv:4347730,posts:211,views:423854,sessions:0},{rank:18,name:"angelmovie_0",level:"Lv.1",city:"South Pesisir",gmv:0,posts:209,views:84281,sessions:0},{rank:19,name:"muliana3766",level:"Lv.1",city:"Indragiri Hilir",gmv:79997,posts:207,views:38122,sessions:0},{rank:20,name:"mutiavzy",level:"Lv.2",city:"Palembang",gmv:0,posts:202,views:33497,sessions:0},{rank:21,name:"ms.anss_17",level:"Lv.2",city:"Indragiri Hilir",gmv:903900,posts:201,views:127931,sessions:0},{rank:22,name:"shakilaad24",level:"Lv.1",city:"Sleman",gmv:0,posts:201,views:143349,sessions:0},{rank:23,name:"lie2sukses",level:"Lv.1",city:"Magelang",gmv:0,posts:198,views:92980,sessions:0},{rank:24,name:"gas_promo",level:"Lv.1",city:"Sleman",gmv:0,posts:194,views:13996,sessions:0},{rank:25,name:"mahendra.gazza",level:"Lv.1",city:"South Lampung",gmv:0,posts:189,views:4431,sessions:0},{rank:26,name:"meilaniwe94",level:"Lv.2",city:"Surabaya",gmv:0,posts:188,views:62833,sessions:0},{rank:27,name:"jajan.teross",level:"Lv.2",city:"Nganjuk",gmv:0,posts:184,views:100105,sessions:0},{rank:28,name:"adlyyyyzx",level:"Lv.1",city:"Bandar Lampung",gmv:0,posts:179,views:54427,sessions:0},{rank:29,name:".asepasep14",level:"Lv.1",city:"Sleman",gmv:0,posts:178,views:13851,sessions:0},{rank:30,name:"ceobandarlampung",level:"Lv.1",city:"Bandar Lampung",gmv:0,posts:178,views:26334,sessions:0},{rank:31,name:"syarif_jinan",level:"Lv.3",city:"Jember",gmv:3433154,posts:176,views:497915,sessions:0},{rank:32,name:"nulnulshp",level:"Lv.3",city:"Malang",gmv:0,posts:176,views:129329,sessions:0},{rank:33,name:"radacio1125",level:"Lv.1",city:"Bandar Lampung",gmv:0,posts:175,views:54027,sessions:0},{rank:34,name:"udandereskalibanjir",level:"Lv.1",city:"Banyuwangi",gmv:125297,posts:174,views:29240,sessions:0},{rank:35,name:"mahen_165",level:"Lv.1",city:"South Lampung",gmv:0,posts:172,views:22957,sessions:0},{rank:36,name:"dewifili",level:"Lv.1",city:"Pontianak",gmv:0,posts:172,views:24445,sessions:0},{rank:37,name:"jasmineputri010",level:"Lv.1",city:"Bandar Lampung",gmv:0,posts:168,views:49349,sessions:0},{rank:38,name:"ratufelice88",level:"Lv.1",city:"Denpasar",gmv:0,posts:166,views:22979,sessions:0},{rank:39,name:"syarif_jinan",level:"Lv.3",city:"Lumajang",gmv:2627709,posts:165,views:452139,sessions:0},{rank:40,name:"hemmmmm008",level:"Lv.1",city:"Pringsewu",gmv:0,posts:164,views:246055,sessions:0},{rank:41,name:"ikariaastika",level:"Lv.1",city:"Palembang",gmv:1000,posts:160,views:20330,sessions:0},{rank:42,name:"n_mallwdy",level:"Lv.1",city:"Palembang",gmv:0,posts:160,views:18388,sessions:0},{rank:43,name:"ball.tiktok06",level:"Lv.1",city:"Cilegon",gmv:0,posts:159,views:191029,sessions:0},{rank:44,name:"fitriawaliyah21_",level:"Lv.2",city:"Lamongan",gmv:545836,posts:157,views:79813,sessions:0},{rank:45,name:"put3_1818",level:"Lv.1",city:"Lubuklinggau",gmv:125993,posts:157,views:72909,sessions:0},{rank:46,name:"cholix1112",level:"Lv.1",city:"Pasuruan",gmv:0,posts:156,views:55039,sessions:0},{rank:47,name:"iyainiiyii",level:"Lv.2",city:"Indragiri Hilir",gmv:0,posts:156,views:95843,sessions:0},{rank:48,name:"septikatika5",level:"Lv.1",city:"North Lampung",gmv:0,posts:156,views:49667,sessions:0},{rank:49,name:"fitrieats",level:"Lv.1",city:"Cirebon",gmv:709793,posts:154,views:67298,sessions:0},{rank:50,name:"rforramaaa",level:"Lv.1",city:"Bekasi",gmv:47002,posts:153,views:15912,sessions:0}],
"77_w4":[{rank:1,name:"jalanhematbanget",level:"Lv.2",city:"Bogor",gmv:665679,posts:965,views:299095,sessions:0},{rank:2,name:"akunkeduajenongtv",level:"Lv.1",city:"Sukabumi City",gmv:0,posts:400,views:106480,sessions:0},{rank:3,name:"racil9592",level:"Lv.1",city:"Bandar Lampung",gmv:0,posts:383,views:56227,sessions:0},{rank:4,name:"ratufelice88",level:"Lv.1",city:"Denpasar",gmv:80646,posts:356,views:230810,sessions:0},{rank:5,name:"dailytuffinhell",level:"Lv.2",city:"Bengkulu",gmv:0,posts:356,views:46079,sessions:0},{rank:6,name:"jejessie12",level:"Lv.2",city:"Pasuruan",gmv:0,posts:351,views:54696,sessions:0},{rank:7,name:"reandhawidiw",level:"Lv.2",city:"Palembang",gmv:604091,posts:337,views:138662,sessions:0},{rank:8,name:"jelitsvd0i8",level:"Lv.1",city:"Bandar Lampung",gmv:43500,posts:331,views:4275,sessions:0},{rank:9,name:"esi6769",level:"Lv.1",city:"Pariaman",gmv:0,posts:317,views:33620,sessions:0},{rank:10,name:"angelicazivania",level:"Lv.1",city:"Semarang City",gmv:0,posts:309,views:71372,sessions:0},{rank:11,name:"happy.yulia8",level:"Lv.1",city:"Pasuruan",gmv:498768,posts:299,views:106638,sessions:0},{rank:12,name:"terbaru_affiliatefyp",level:"Lv.1",city:"Pesawaran",gmv:0,posts:298,views:59057,sessions:0},{rank:13,name:"vidiomilikistianah03",level:"Lv.1",city:"Bondowoso",gmv:0,posts:291,views:108381,sessions:0},{rank:14,name:"nurulhabiba86",level:"Lv.1",city:"Pasuruan",gmv:0,posts:277,views:114525,sessions:0},{rank:15,name:"dailytuffinhell",level:"Lv.1",city:"Bengkulu",gmv:49997,posts:270,views:47984,sessions:0},{rank:16,name:"gimoimoo",level:"Lv.2",city:"Bengkulu",gmv:415554,posts:261,views:86443,sessions:0},{rank:17,name:"slovenskyyy",level:"Lv.1",city:"Bekasi City",gmv:0,posts:256,views:35306,sessions:0},{rank:18,name:"rahmatreal_",level:"Lv.4",city:"Gowa",gmv:1562313,posts:255,views:326699,sessions:0},{rank:19,name:"giselaa.fd",level:"Lv.1",city:"Wonosobo",gmv:17999,posts:250,views:142601,sessions:0},{rank:20,name:"putridewirahayu",level:"Lv.1",city:"Balikpapan",gmv:0,posts:249,views:75888,sessions:0},{rank:21,name:"nzyyyyyy_22",level:"Lv.1",city:"Indragiri Hilir",gmv:145991,posts:248,views:84765,sessions:0},{rank:22,name:"dinateww_12",level:"Lv.1",city:"Bogor City",gmv:0,posts:245,views:59632,sessions:0},{rank:23,name:"adersonaffandi",level:"Lv.1",city:"Bandar Lampung",gmv:0,posts:242,views:53267,sessions:0},{rank:24,name:"septikatika5",level:"Lv.1",city:"North Lampung",gmv:699523,posts:232,views:68509,sessions:0},{rank:25,name:"krmla102",level:"Lv.1",city:"Indragiri Hilir",gmv:195757,posts:231,views:152093,sessions:0},{rank:26,name:"meilaniwe94",level:"Lv.2",city:"Surabaya",gmv:787843,posts:227,views:62006,sessions:0},{rank:27,name:"ny.agung_mei",level:"Lv.1",city:"Pasuruan",gmv:0,posts:224,views:140153,sessions:0},{rank:28,name:"belanjarecehan_",level:"Lv.4",city:"Palembang",gmv:84955449,posts:224,views:2128300,sessions:0},{rank:29,name:"genzzzsstt011",level:"Lv.1",city:"South Lampung",gmv:103794,posts:223,views:90207,sessions:0},{rank:30,name:"angelmovie_0",level:"Lv.1",city:"South Pesisir",gmv:0,posts:223,views:278554,sessions:0},{rank:31,name:"wowalaala",level:"Lv.1",city:"Palembang",gmv:0,posts:220,views:22827,sessions:0},{rank:32,name:"ritarian98",level:"Lv.1",city:"Banyuasin",gmv:0,posts:212,views:27278,sessions:0},{rank:33,name:"rusdiyanto457",level:"Lv.1",city:"Bandar Lampung",gmv:0,posts:211,views:229362,sessions:0},{rank:34,name:"wednes112",level:"Lv.1",city:"Sukabumi",gmv:96954,posts:210,views:90488,sessions:0},{rank:35,name:"mif_2705",level:"Lv.1",city:"East Lampung",gmv:0,posts:208,views:50577,sessions:0},{rank:36,name:"chaa_addict",level:"Lv.1",city:"Sleman",gmv:72000,posts:208,views:87123,sessions:0},{rank:37,name:"desianggrainih",level:"Lv.1",city:"South Lampung",gmv:0,posts:208,views:59817,sessions:0},{rank:38,name:"ikariaastika",level:"Lv.1",city:"Palembang",gmv:77997,posts:203,views:25105,sessions:0},{rank:39,name:"inisyiefa",level:"Lv.1",city:"Pasuruan",gmv:0,posts:200,views:50571,sessions:0},{rank:40,name:"mif_2705",level:"Lv.2",city:"East Lampung",gmv:64799,posts:200,views:42496,sessions:0},{rank:41,name:"kasmawatii01",level:"Lv.1",city:"Indragiri Hilir",gmv:24498,posts:200,views:67054,sessions:0},{rank:42,name:"bastami77",level:"Lv.1",city:"Pasuruan",gmv:0,posts:199,views:52280,sessions:0},{rank:43,name:"hasanahnurr17",level:"Lv.1",city:"Indragiri Hilir",gmv:27998,posts:197,views:39811,sessions:0},{rank:44,name:"ceobandarlampung",level:"Lv.1",city:"Bandar Lampung",gmv:19798,posts:196,views:48387,sessions:0},{rank:45,name:"syarif_jinan",level:"Lv.3",city:"Lumajang",gmv:5518089,posts:196,views:412955,sessions:0},{rank:46,name:"mamiin_shop",level:"Lv.1",city:"Jambi",gmv:0,posts:195,views:36891,sessions:0},{rank:47,name:"dindappdinda",level:"Lv.1",city:"Tanggamus",gmv:0,posts:195,views:323762,sessions:0},{rank:48,name:"_cloudya6",level:"Lv.1",city:"Palembang",gmv:359328,posts:189,views:86980,sessions:0},{rank:49,name:"catheroes1992",level:"Lv.2",city:"Pangkajene Dan Kep",gmv:2314330,posts:189,views:166488,sessions:0},{rank:50,name:"glowbylesta",level:"Lv.1",city:"Batam",gmv:0,posts:189,views:66479,sessions:0}],
"79_w1":[{rank:1,name:"tuhfah.mlna.s_01",level:"Lv.3",city:"Malang City",gmv:50657449,posts:126,views:5033178,sessions:0},{rank:2,name:"belanjarecehan_",level:"Lv.4",city:"Palembang",gmv:50311200,posts:145,views:1452414,sessions:0},{rank:3,name:"udaudasad",level:"Lv.2",city:"Lima Puluh Kota",gmv:21218652,posts:19,views:1889115,sessions:0},{rank:4,name:"syarif_jinan",level:"Lv.3",city:"Jember",gmv:6790371,posts:262,views:1293115,sessions:0},{rank:5,name:"itslingga",level:"Lv.2",city:"Tangerang",gmv:6390932,posts:3,views:144662,sessions:0},{rank:6,name:"elel_store1",level:"Lv.2",city:"West Tanjung Jabun",gmv:6311337,posts:267,views:403187,sessions:0},{rank:7,name:"itslingga",level:"Lv.1",city:"Tangerang",gmv:5928609,posts:2,views:136459,sessions:0},{rank:8,name:"gittaevita",level:"Lv.3",city:"Banyuasin",gmv:5367504,posts:78,views:1680380,sessions:0},{rank:9,name:"ceyotravel",level:"Lv.2",city:"South Jakarta",gmv:5035026,posts:2,views:1613,sessions:0},{rank:10,name:"cut_yusniar",level:"Lv.2",city:"Bireuen",gmv:4726390,posts:205,views:450456,sessions:0},{rank:11,name:"hematbareng0",level:"Lv.2",city:"Palembang",gmv:4224058,posts:277,views:893569,sessions:0},{rank:12,name:"ysnyf_",level:"Lv.3",city:"Central Jakarta",gmv:3723616,posts:4,views:5126,sessions:0},{rank:13,name:"andiyus87",level:"Lv.2",city:"Bone",gmv:2767368,posts:45,views:592840,sessions:0},{rank:14,name:"mayamakan_29",level:"Lv.2",city:"Bogor",gmv:2499195,posts:63,views:676598,sessions:0},{rank:15,name:"kiiwkiiiiw_",level:"Lv.2",city:"Rokan Hilir",gmv:2470523,posts:146,views:589681,sessions:0},{rank:16,name:"catheroes1992",level:"Lv.2",city:"Pangkajene Dan Kep",gmv:2248802,posts:231,views:174914,sessions:0},{rank:17,name:"alice.azahra4",level:"Lv.1",city:"Palembang",gmv:2169388,posts:31,views:358724,sessions:0},{rank:18,name:"mamanyaune",level:"Lv.1",city:"Payakumbuh",gmv:1991233,posts:4,views:5095,sessions:0},{rank:19,name:"rahmatreal_",level:"Lv.4",city:"Gowa",gmv:1944221,posts:122,views:169794,sessions:0},{rank:20,name:"kenzsepalsepil",level:"Lv.1",city:"Bandung",gmv:1856757,posts:16,views:304218,sessions:0},{rank:21,name:"gabriellcova",level:"Lv.2",city:"South Lampung",gmv:1703753,posts:21,views:45433,sessions:0},{rank:22,name:"vettiie",level:"Lv.1",city:"Bekasi",gmv:1659440,posts:62,views:126976,sessions:0},{rank:23,name:"marius_purba_channel",level:"Lv.2",city:"Medan",gmv:1653883,posts:134,views:100981,sessions:0},{rank:24,name:"anik_sept",level:"Lv.2",city:"Melawi",gmv:1617347,posts:44,views:75639,sessions:0},{rank:25,name:"taula_official",level:"Lv.1",city:"Palembang",gmv:1611470,posts:22,views:24851,sessions:0},{rank:26,name:"rookibye",level:"Lv.2",city:"West Jakarta",gmv:1378520,posts:6,views:15344,sessions:0},{rank:27,name:"shavniamastasia5",level:"Lv.2",city:"Mesuji",gmv:1278777,posts:82,views:52940,sessions:0},{rank:28,name:"inhkimmm",level:"Lv.1",city:"Tegal City",gmv:1261001,posts:8,views:182015,sessions:0},{rank:29,name:"glattris",level:"Lv.3",city:"Sidoarjo",gmv:1244289,posts:58,views:1565008,sessions:0},{rank:30,name:"anditukangpromo",level:"Lv.2",city:"West Jakarta",gmv:1195899,posts:79,views:129547,sessions:0},{rank:31,name:"wadidawbroo",level:"Lv.2",city:"Tebo",gmv:1155023,posts:90,views:478148,sessions:0},{rank:32,name:"sobat.kuliner",level:"Lv.2",city:"North Jakarta",gmv:1091005,posts:100,views:171790,sessions:0},{rank:33,name:"spillshopee.terracun",level:"Lv.1",city:"Kubu Raya",gmv:1053722,posts:212,views:298958,sessions:0},{rank:34,name:"ekasafiraa_",level:"Lv.4",city:"Batam",gmv:1050041,posts:47,views:209593,sessions:0},{rank:35,name:"jumadil.m13",level:"Lv.3",city:"Sidenreng Rappang",gmv:948010,posts:25,views:31642,sessions:0},{rank:36,name:"jalanhematbanget",level:"Lv.2",city:"Bogor",gmv:944965,posts:1169,views:203583,sessions:0},{rank:37,name:"denasepp",level:"Lv.1",city:"Tangerang",gmv:919266,posts:102,views:115186,sessions:0},{rank:38,name:"yanimegiechiean07",level:"Lv.1",city:"Pesawaran",gmv:859979,posts:22,views:9934,sessions:0},{rank:39,name:"ijalklm",level:"Lv.1",city:"Banyumas",gmv:848688,posts:7,views:329737,sessions:0},{rank:40,name:"viha561",level:"Lv.1",city:"Bekasi",gmv:836722,posts:21,views:19297,sessions:0},{rank:41,name:"azysinuhaji2",level:"Lv.2",city:"Denpasar",gmv:773812,posts:10,views:10422,sessions:0},{rank:42,name:"sayalarimba",level:"Lv.2",city:"South Jakarta",gmv:753017,posts:9,views:4751002,sessions:0},{rank:43,name:"babanayima",level:"Lv.3",city:"Batanghari",gmv:752163,posts:98,views:228154,sessions:0},{rank:44,name:"heyitsaghnia",level:"Lv.3",city:"Boyolali",gmv:751612,posts:63,views:424376,sessions:0},{rank:45,name:"me.cahaya",level:"Lv.3",city:"Makassar",gmv:727801,posts:33,views:77704,sessions:0},{rank:46,name:"retnoismii",level:"Lv.2",city:"Cirebon City",gmv:705715,posts:66,views:95209,sessions:0},{rank:47,name:"randomshop556",level:"Lv.1",city:"Nias",gmv:702846,posts:24,views:112869,sessions:0},{rank:48,name:"nafia.kediri",level:"Lv.2",city:"Kediri",gmv:651991,posts:30,views:170718,sessions:0},{rank:49,name:"uwaktanggang",level:"Lv.1",city:"Medan",gmv:647405,posts:24,views:39183,sessions:0},{rank:50,name:"neng.dhinda",level:"Lv.1",city:"Bogor City",gmv:644017,posts:2,views:79539,sessions:0}],
"79_w2":[{rank:1,name:"belanjarecehan_",level:"Lv.4",city:"Palembang",gmv:194230932,posts:203,views:9668494,sessions:0},{rank:2,name:"tuhfah.mlna.s_01",level:"Lv.3",city:"Malang City",gmv:21255295,posts:162,views:3232581,sessions:0},{rank:3,name:"udaudasad",level:"Lv.2",city:"Lima Puluh Kota",gmv:14224305,posts:11,views:1576390,sessions:0},{rank:4,name:"cut_yusniar",level:"Lv.2",city:"Bireuen",gmv:7644941,posts:226,views:785846,sessions:0},{rank:5,name:"cikalnajme",level:"Lv.2",city:"Depok",gmv:6536994,posts:4,views:56422,sessions:0},{rank:6,name:"anditukangpromo",level:"Lv.2",city:"West Jakarta",gmv:6211197,posts:75,views:489405,sessions:0},{rank:7,name:"heyitsaghnia",level:"Lv.2",city:"Boyolali",gmv:4857766,posts:21,views:40889,sessions:0},{rank:8,name:"sobat.kuliner",level:"Lv.2",city:"North Jakarta",gmv:4525625,posts:57,views:228806,sessions:0},{rank:9,name:"ysnyf_",level:"Lv.3",city:"Batam",gmv:4416525,posts:6,views:4352,sessions:0},{rank:10,name:"dailylifemeufood",level:"Lv.2",city:"Medan",gmv:4349811,posts:4,views:14859,sessions:0},{rank:11,name:"me.cahaya",level:"Lv.3",city:"Makassar",gmv:4315901,posts:111,views:596811,sessions:0},{rank:12,name:"syarif_jinan",level:"Lv.3",city:"Jember",gmv:3582002,posts:161,views:510121,sessions:0},{rank:13,name:"kiiwkiiiiw_",level:"Lv.2",city:"Rokan Hilir",gmv:3355150,posts:117,views:276658,sessions:0},{rank:14,name:"jalanhematbanget",level:"Lv.2",city:"Bogor",gmv:2929479,posts:952,views:305697,sessions:0},{rank:15,name:"evitakamal",level:"Lv.2",city:"West Jakarta",gmv:2862316,posts:24,views:88688,sessions:0},{rank:16,name:"ayusrg19",level:"Lv.4",city:"Bekasi",gmv:2723449,posts:73,views:207646,sessions:0},{rank:17,name:"elel_store1",level:"Lv.2",city:"West Tanjung Jabun",gmv:2686694,posts:207,views:341448,sessions:0},{rank:18,name:"by.riskaah",level:"Lv.2",city:"Pasaman",gmv:2659237,posts:4,views:14357,sessions:0},{rank:19,name:"marius_purba_channel",level:"Lv.2",city:"Medan",gmv:2587264,posts:134,views:212679,sessions:0},{rank:20,name:"babanayima",level:"Lv.3",city:"Batanghari",gmv:2534887,posts:108,views:317175,sessions:0},{rank:21,name:"catheroes1992",level:"Lv.2",city:"Pangkajene Dan Kep",gmv:2206926,posts:232,views:286496,sessions:0},{rank:22,name:"jejessie12",level:"Lv.2",city:"Pasuruan",gmv:2084867,posts:348,views:228856,sessions:0},{rank:23,name:"irwansengeti",level:"Lv.3",city:"Muaro Jambi",gmv:2032600,posts:32,views:188666,sessions:0},{rank:24,name:"andiyus87",level:"Lv.2",city:"Bone",gmv:2001492,posts:28,views:405501,sessions:0},{rank:25,name:"ceyotravel",level:"Lv.2",city:"Central Jakarta",gmv:1974511,posts:4,views:831,sessions:0},{rank:26,name:"kwalitasbagus1",level:"Lv.4",city:"South Jakarta",gmv:1958561,posts:15,views:73221,sessions:0},{rank:27,name:"fitriawaliyah21_",level:"Lv.1",city:"Lamongan",gmv:1902288,posts:136,views:1099608,sessions:0},{rank:28,name:"aku.owl",level:"Lv.1",city:"Padang",gmv:1885013,posts:89,views:98411,sessions:0},{rank:29,name:"gabriellcova",level:"Lv.2",city:"South Lampung",gmv:1813303,posts:19,views:70777,sessions:0},{rank:30,name:"strawbeyrose",level:"Lv.2",city:"Malang",gmv:1805708,posts:61,views:54974,sessions:0},{rank:31,name:"ekasafiraa_",level:"Lv.3",city:"Batam",gmv:1803355,posts:21,views:60159,sessions:0},{rank:32,name:"nanaabdul_17",level:"Lv.3",city:"Sidoarjo",gmv:1746069,posts:2,views:13541,sessions:0},{rank:33,name:"teduhruang",level:"Lv.2",city:"Bantul",gmv:1674560,posts:7,views:15996,sessions:0},{rank:34,name:"meilaniwe94",level:"Lv.2",city:"Surabaya",gmv:1647991,posts:235,views:115347,sessions:0},{rank:35,name:"ra.shop1995",level:"Lv.1",city:"Semarang City",gmv:1623710,posts:93,views:126647,sessions:0},{rank:36,name:"yukbisayukkk6",level:"Lv.1",city:"Trenggalek",gmv:1615098,posts:81,views:148342,sessions:0},{rank:37,name:"lambehotelier",level:"Lv.2",city:"Semarang City",gmv:1566469,posts:41,views:142306,sessions:0},{rank:38,name:"shavniamastasia5",level:"Lv.2",city:"Mesuji",gmv:1524913,posts:74,views:46133,sessions:0},{rank:39,name:"nafia.kediri",level:"Lv.1",city:"Kediri",gmv:1514302,posts:22,views:136004,sessions:0},{rank:40,name:"wadidawbroo",level:"Lv.2",city:"Tebo",gmv:1486210,posts:81,views:651943,sessions:0},{rank:41,name:"gittaevita",level:"Lv.4",city:"Banyuasin",gmv:1399998,posts:46,views:262591,sessions:0},{rank:42,name:"celsfoodiary",level:"Lv.1",city:"South Tangerang",gmv:1390262,posts:24,views:151755,sessions:0},{rank:43,name:"rahmatreal_",level:"Lv.4",city:"Gowa",gmv:1373591,posts:280,views:373810,sessions:0},{rank:44,name:"akun.promosi.10",level:"Lv.1",city:"Sleman",gmv:1249629,posts:91,views:28886,sessions:0},{rank:45,name:"eroofa",level:"Lv.2",city:"Cilacap",gmv:1249113,posts:4,views:81063,sessions:0},{rank:46,name:"mise.ya",level:"Lv.1",city:"Indramayu",gmv:1244039,posts:8,views:42666,sessions:0},{rank:47,name:"mayamakan_29",level:"Lv.1",city:"Bogor",gmv:1238606,posts:33,views:140187,sessions:0},{rank:48,name:"sayalarimba",level:"Lv.2",city:"South Jakarta",gmv:1234471,posts:10,views:2708298,sessions:0},{rank:49,name:"bunda_jamail",level:"Lv.1",city:"Tangerang",gmv:1234349,posts:6,views:37733,sessions:0},{rank:50,name:"heyitsaghnia",level:"Lv.3",city:"Boyolali",gmv:1205407,posts:30,views:151673,sessions:0}],
"79_w3":[{rank:1,name:"belanjarecehan_",level:"Lv.4",city:"Palembang",gmv:100583683,posts:227,views:9297793,sessions:0},{rank:2,name:"gittaevita",level:"Lv.4",city:"Banyuasin",gmv:14023278,posts:42,views:680699,sessions:0},{rank:3,name:"tuhfah.mlna.s_01",level:"Lv.4",city:"Malang City",gmv:10071417,posts:152,views:1820416,sessions:0},{rank:4,name:"spillshopee.terracun",level:"Lv.2",city:"Kubu Raya",gmv:5602950,posts:118,views:106307,sessions:0},{rank:5,name:"mayamakan_29",level:"Lv.2",city:"Bogor",gmv:5103645,posts:53,views:1448023,sessions:0},{rank:6,name:"catheroes1992",level:"Lv.2",city:"Pangkajene Dan Kep",gmv:4930997,posts:402,views:422541,sessions:0},{rank:7,name:"ayusrg19",level:"Lv.4",city:"Bekasi",gmv:4788622,posts:20,views:415136,sessions:0},{rank:8,name:"cut_yusniar",level:"Lv.2",city:"Bireuen",gmv:4347730,posts:211,views:423854,sessions:0},{rank:9,name:"syarif_jinan",level:"Lv.3",city:"Jember",gmv:3433154,posts:176,views:497915,sessions:0},{rank:10,name:"babanayima",level:"Lv.3",city:"Batanghari",gmv:3165044,posts:86,views:278642,sessions:0},{rank:11,name:"glattris",level:"Lv.3",city:"Sidoarjo",gmv:2877243,posts:68,views:765358,sessions:0},{rank:12,name:"jalanhematbanget",level:"Lv.2",city:"Bogor",gmv:2846149,posts:954,views:435688,sessions:0},{rank:13,name:"nafia.kediri",level:"Lv.2",city:"Kediri",gmv:2746299,posts:49,views:485097,sessions:0},{rank:14,name:"mamanyaune",level:"Lv.1",city:"Payakumbuh",gmv:2655693,posts:8,views:115057,sessions:0},{rank:15,name:"syarif_jinan",level:"Lv.3",city:"Lumajang",gmv:2627709,posts:165,views:452139,sessions:0},{rank:16,name:"ysnyf_",level:"Lv.3",city:"Central Jakarta",gmv:2500014,posts:3,views:2203,sessions:0},{rank:17,name:"koneng.2",level:"Lv.2",city:"Karawang",gmv:2426451,posts:64,views:587232,sessions:0},{rank:18,name:"me.cahaya",level:"Lv.3",city:"Makassar",gmv:2284954,posts:59,views:541393,sessions:0},{rank:19,name:"ekasafiraa_",level:"Lv.3",city:"Batam",gmv:2265452,posts:28,views:118351,sessions:0},{rank:20,name:"koh.harry",level:"Lv.3",city:"Pringsewu",gmv:2263023,posts:47,views:88394,sessions:0},{rank:21,name:"ekasafiraa_",level:"Lv.4",city:"Batam",gmv:2202788,posts:20,views:70511,sessions:0},{rank:22,name:"strawbeyrose",level:"Lv.2",city:"Malang",gmv:2125886,posts:83,views:107324,sessions:0},{rank:23,name:"erikaa.daily",level:"Lv.1",city:"Lamongan",gmv:2018451,posts:75,views:717648,sessions:0},{rank:24,name:"sobat.kuliner",level:"Lv.2",city:"Bandung City",gmv:1954822,posts:82,views:278165,sessions:0},{rank:25,name:"hematbareng0",level:"Lv.1",city:"Palembang",gmv:1858337,posts:126,views:344316,sessions:0},{rank:26,name:"cozyescapeid",level:"Lv.2",city:"Central Jakarta",gmv:1822001,posts:9,views:20241,sessions:0},{rank:27,name:"udaudasad",level:"Lv.3",city:"Lima Puluh Kota",gmv:1780591,posts:13,views:75131,sessions:0},{rank:28,name:"vaniopi",level:"Lv.1",city:"Muaro Jambi",gmv:1750435,posts:126,views:215493,sessions:0},{rank:29,name:"mayamakan_29",level:"Lv.1",city:"Bogor",gmv:1731484,posts:38,views:357394,sessions:0},{rank:30,name:"findbyprys",level:"Lv.3",city:"West Jakarta",gmv:1713556,posts:5,views:260964,sessions:0},{rank:31,name:"kak_nop",level:"Lv.2",city:"Palembang",gmv:1687887,posts:142,views:321049,sessions:0},{rank:32,name:"marius_purba_channel",level:"Lv.2",city:"Medan",gmv:1559313,posts:90,views:95883,sessions:0},{rank:33,name:"bellarhemaagnesiaa",level:"Lv.3",city:"Semarang City",gmv:1496101,posts:19,views:122804,sessions:0},{rank:34,name:"eroofatrip",level:"Lv.1",city:"Cilacap",gmv:1484875,posts:43,views:72171,sessions:0},{rank:35,name:"imanugoz",level:"Lv.1",city:"Kuningan",gmv:1433505,posts:5,views:82538,sessions:0},{rank:36,name:"_sangbayuu",level:"Lv.3",city:"Sukoharjo",gmv:1420866,posts:5,views:23449,sessions:0},{rank:37,name:"wadidawbroo",level:"Lv.2",city:"Tebo",gmv:1357715,posts:108,views:692940,sessions:0},{rank:38,name:"rystifamily",level:"Lv.2",city:"South Jakarta",gmv:1337540,posts:40,views:342266,sessions:0},{rank:39,name:"fahrit_mufama_cetar",level:"Lv.2",city:"Medan",gmv:1315203,posts:4,views:271095,sessions:0},{rank:40,name:"onie_169",level:"Lv.2",city:"Cilacap",gmv:1302867,posts:45,views:40472,sessions:0},{rank:41,name:"tripnchill.id",level:"Lv.2",city:"Bandung City",gmv:1291582,posts:39,views:71679,sessions:0},{rank:42,name:"reviewsya0",level:"Lv.1",city:"Musi Banyuasin",gmv:1228870,posts:65,views:23438,sessions:0},{rank:43,name:"sobat.kuliner",level:"Lv.2",city:"North Jakarta",gmv:1162137,posts:62,views:127170,sessions:0},{rank:44,name:"miaelmira",level:"Lv.2",city:"Bandar Lampung",gmv:1103649,posts:39,views:86433,sessions:0},{rank:45,name:"sis.silgumush24",level:"Lv.1",city:"South Jakarta",gmv:1092436,posts:4,views:593,sessions:0},{rank:46,name:"hemarjhela",level:"Lv.1",city:"Mimika",gmv:1090645,posts:4,views:139487,sessions:0},{rank:47,name:"mutiarahati99",level:"Lv.2",city:"Bantul",gmv:984789,posts:36,views:219892,sessions:0},{rank:48,name:"renialn",level:"Lv.2",city:"Karanganyar",gmv:979333,posts:63,views:378380,sessions:0},{rank:49,name:"urraaaaa03",level:"Lv.1",city:"Indragiri Hilir",gmv:965940,posts:108,views:29623,sessions:0},{rank:50,name:"anditukangpromo",level:"Lv.2",city:"West Jakarta",gmv:932843,posts:50,views:183899,sessions:0}],
"79_w4":[{rank:1,name:"belanjarecehan_",level:"Lv.4",city:"Palembang",gmv:84955449,posts:224,views:2128300,sessions:0},{rank:2,name:"tuhfah.mlna.s_01",level:"Lv.2",city:"Malang City",gmv:11898960,posts:58,views:847429,sessions:0},{rank:3,name:"syarif_jinan",level:"Lv.3",city:"Lumajang",gmv:5518089,posts:196,views:412955,sessions:0},{rank:4,name:"hematbareng0",level:"Lv.2",city:"Palembang",gmv:5469067,posts:163,views:774147,sessions:0},{rank:5,name:"gittaevita",level:"Lv.3",city:"Banyuasin",gmv:4192840,posts:91,views:518810,sessions:0},{rank:6,name:"mspurpleeee",level:"Lv.3",city:"South Minahasa",gmv:3670499,posts:11,views:27634,sessions:0},{rank:7,name:"anditukangpromo",level:"Lv.2",city:"West Jakarta",gmv:3409794,posts:59,views:180970,sessions:0},{rank:8,name:"ysnyf_",level:"Lv.3",city:"Central Jakarta",gmv:3135513,posts:5,views:4330,sessions:0},{rank:9,name:"sobat.kuliner",level:"Lv.2",city:"North Jakarta",gmv:2705292,posts:107,views:250958,sessions:0},{rank:10,name:"cut_yusniar",level:"Lv.2",city:"Bireuen",gmv:2548814,posts:136,views:316490,sessions:0},{rank:11,name:"catheroes1992",level:"Lv.2",city:"Pangkajene Dan Kep",gmv:2314330,posts:189,views:166488,sessions:0},{rank:12,name:"ceyotravel",level:"Lv.2",city:"Central Jakarta",gmv:2205879,posts:3,views:420,sessions:0},{rank:13,name:"kwalitasbagus1",level:"Lv.4",city:"South Jakarta",gmv:1815227,posts:17,views:17944,sessions:0},{rank:14,name:"anggunnurr",level:"Lv.2",city:"Sukabumi City",gmv:1784451,posts:18,views:148151,sessions:0},{rank:15,name:"sylvlogy",level:"Lv.1",city:"West Jakarta",gmv:1768043,posts:39,views:11904,sessions:0},{rank:16,name:"marius_purba_channel",level:"Lv.2",city:"Medan",gmv:1704938,posts:114,views:90129,sessions:0},{rank:17,name:"nnahasa",level:"Lv.1",city:"Kuningan",gmv:1665777,posts:16,views:80529,sessions:0},{rank:18,name:"syarif_jinan",level:"Lv.3",city:"Jember",gmv:1648402,posts:91,views:268211,sessions:0},{rank:19,name:"hierozone",level:"Lv.2",city:"Sidoarjo",gmv:1626923,posts:120,views:226263,sessions:0},{rank:20,name:"ayusrg19",level:"Lv.4",city:"Bekasi",gmv:1622392,posts:52,views:113462,sessions:0},{rank:21,name:"rahmatreal_",level:"Lv.4",city:"Gowa",gmv:1562313,posts:255,views:326699,sessions:0},{rank:22,name:"pramudi.santi",level:"Lv.1",city:"Magelang",gmv:1519453,posts:124,views:40755,sessions:0},{rank:23,name:"sayalarimba",level:"Lv.2",city:"South Jakarta",gmv:1479613,posts:15,views:4399268,sessions:0},{rank:24,name:"glattris",level:"Lv.3",city:"Sidoarjo",gmv:1369299,posts:44,views:154050,sessions:0},{rank:25,name:"kak_nop",level:"Lv.2",city:"Palembang",gmv:1292078,posts:89,views:85896,sessions:0},{rank:26,name:"andiyus87",level:"Lv.2",city:"Bone",gmv:1278517,posts:27,views:249647,sessions:0},{rank:27,name:"dlyfaaa",level:"Lv.2",city:"Rokan Hilir",gmv:1266610,posts:12,views:24909,sessions:0},{rank:28,name:"azysinuhaji2",level:"Lv.2",city:"Denpasar",gmv:1233045,posts:13,views:81944,sessions:0},{rank:29,name:"jejakdikota",level:"Lv.2",city:"Kediri",gmv:1166254,posts:62,views:175284,sessions:0},{rank:30,name:"febty01",level:"Lv.2",city:"Mesuji",gmv:1130448,posts:95,views:55485,sessions:0},{rank:31,name:"alvi_hasani",level:"Lv.1",city:"Garut",gmv:1105229,posts:142,views:53905,sessions:0},{rank:32,name:"udaudasad",level:"Lv.2",city:"Lima Puluh Kota",gmv:1104558,posts:4,views:26007,sessions:0},{rank:33,name:"yukbisayukkk6",level:"Lv.1",city:"Trenggalek",gmv:1093134,posts:36,views:87508,sessions:0},{rank:34,name:"ridwan.ridho06",level:"Lv.1",city:"Takalar",gmv:1067277,posts:13,views:46167,sessions:0},{rank:35,name:"vhii1130",level:"Lv.2",city:"Gunungsitoli",gmv:1065021,posts:52,views:23102,sessions:0},{rank:36,name:"renialn",level:"Lv.2",city:"Karanganyar",gmv:1055392,posts:52,views:225603,sessions:0},{rank:37,name:"me.cahaya",level:"Lv.3",city:"Makassar",gmv:1050978,posts:77,views:241547,sessions:0},{rank:38,name:"marshallong",level:"Lv.2",city:"Bogor",gmv:973123,posts:15,views:42192,sessions:0},{rank:39,name:"tienfp_",level:"Lv.1",city:"Pematangsiantar",gmv:932381,posts:18,views:237831,sessions:0},{rank:40,name:"maipicks_",level:"Lv.2",city:"South Jakarta",gmv:906542,posts:124,views:171900,sessions:0},{rank:41,name:"niasndy_",level:"Lv.2",city:"Tulungagung",gmv:872219,posts:23,views:178724,sessions:0},{rank:42,name:"adinnnnnnn38",level:"Lv.1",city:"Dharmasraya",gmv:862867,posts:24,views:17172,sessions:0},{rank:43,name:"ghiskashakayla",level:"Lv.1",city:"Depok",gmv:827982,posts:94,views:13986,sessions:0},{rank:44,name:"meilaniwe94",level:"Lv.2",city:"Surabaya",gmv:787843,posts:227,views:62006,sessions:0},{rank:45,name:"tastematcha",level:"Lv.1",city:"West Jakarta",gmv:780901,posts:26,views:42460,sessions:0},{rank:46,name:"ulfah_111",level:"Lv.1",city:"Banyuasin",gmv:773762,posts:146,views:275728,sessions:0},{rank:47,name:"elel_store1",level:"Lv.1",city:"West Tanjung Jabun",gmv:759288,posts:71,views:40645,sessions:0},{rank:48,name:"azzahraaa0105",level:"Lv.1",city:"Bandar Lampung",gmv:755893,posts:50,views:28138,sessions:0},{rank:49,name:"niekhendevita57",level:"Lv.1",city:"Karawang",gmv:752574,posts:122,views:60227,sessions:0},{rank:50,name:"ariffirmanew",level:"Lv.1",city:"Kediri City",gmv:740587,posts:10,views:161805,sessions:0}],
"84_w1":[{rank:1,name:"jalanhematbanget",level:"Lv.2",city:"Bogor",gmv:944965,posts:1169,views:203583,sessions:0},{rank:2,name:"dailytuffinhell",level:"Lv.2",city:"Bengkulu",gmv:0,posts:627,views:94600,sessions:0},{rank:3,name:"esi6769",level:"Lv.1",city:"Pariaman",gmv:0,posts:380,views:49683,sessions:0},{rank:4,name:"gimoimoo",level:"Lv.2",city:"Bengkulu",gmv:0,posts:369,views:55287,sessions:0},{rank:5,name:"krmla102",level:"Lv.1",city:"Indragiri Hilir",gmv:0,posts:341,views:279367,sessions:0},{rank:6,name:"jejessie12",level:"Lv.2",city:"Pasuruan",gmv:0,posts:310,views:45543,sessions:0},{rank:7,name:"terbaru_affiliatefyp",level:"Lv.1",city:"Pesawaran",gmv:0,posts:298,views:52065,sessions:0},{rank:8,name:"wowalaala",level:"Lv.1",city:"Palembang",gmv:0,posts:288,views:43696,sessions:0},{rank:9,name:"umi_sastra",level:"Lv.1",city:"Musi Rawas",gmv:0,posts:278,views:84722,sessions:0},{rank:10,name:"hematbareng0",level:"Lv.2",city:"Palembang",gmv:4224058,posts:277,views:893569,sessions:0},{rank:11,name:"elel_store1",level:"Lv.2",city:"West Tanjung Jabun",gmv:6311337,posts:267,views:403187,sessions:0},{rank:12,name:"syarif_jinan",level:"Lv.3",city:"Jember",gmv:6790371,posts:262,views:1293115,sessions:0},{rank:13,name:"nurulhabiba86",level:"Lv.1",city:"Pasuruan",gmv:0,posts:255,views:78168,sessions:0},{rank:14,name:"reandhawidiw",level:"Lv.2",city:"Palembang",gmv:0,posts:240,views:55106,sessions:0},{rank:15,name:"catheroes1992",level:"Lv.2",city:"Pangkajene Dan Kep",gmv:2248802,posts:231,views:174914,sessions:0},{rank:16,name:"smashincpum",level:"Lv.1",city:"Bandar Lampung",gmv:0,posts:215,views:95019,sessions:0},{rank:17,name:"fitriawaliyah21_",level:"Lv.2",city:"Lamongan",gmv:356001,posts:213,views:167933,sessions:0},{rank:18,name:"spillshopee.terracun",level:"Lv.1",city:"Kubu Raya",gmv:1053722,posts:212,views:298958,sessions:0},{rank:19,name:"cut_yusniar",level:"Lv.2",city:"Bireuen",gmv:4726390,posts:205,views:450456,sessions:0},{rank:20,name:"lie2sukses",level:"Lv.1",city:"Magelang",gmv:0,posts:189,views:66925,sessions:0},{rank:21,name:"roavelle.co",level:"Lv.1",city:"Sintang",gmv:504937,posts:186,views:145987,sessions:0},{rank:22,name:"mutiavzy",level:"Lv.2",city:"Palembang",gmv:0,posts:182,views:27553,sessions:0},{rank:23,name:"aji.cipluk",level:"Lv.1",city:"Pasuruan",gmv:0,posts:177,views:288326,sessions:0},{rank:24,name:"musdalifah.s_akun2",level:"Lv.0",city:"Indragiri Hilir",gmv:0,posts:175,views:52661,sessions:0},{rank:25,name:"urraaaaa03",level:"Lv.1",city:"Indragiri Hilir",gmv:0,posts:172,views:56618,sessions:0},{rank:26,name:"pencinta20makanan26",level:"Lv.1",city:"Indragiri Hilir",gmv:0,posts:171,views:24187,sessions:0},{rank:27,name:"happy.yulia8",level:"Lv.1",city:"Pasuruan",gmv:0,posts:166,views:36466,sessions:0},{rank:28,name:"candrasky13",level:"Lv.2",city:"Bandar Lampung",gmv:454659,posts:164,views:136970,sessions:0},{rank:29,name:"sarivitaa_",level:"Lv.2",city:"Sambas",gmv:83599,posts:163,views:60400,sessions:0},{rank:30,name:"adlyyyyzx",level:"Lv.1",city:"Bandar Lampung",gmv:0,posts:159,views:86603,sessions:0},{rank:31,name:"ny.agung_mei",level:"Lv.1",city:"Pasuruan",gmv:0,posts:157,views:209538,sessions:0},{rank:32,name:"sarasqy20",level:"Lv.1",city:"Palembang",gmv:0,posts:157,views:16424,sessions:0},{rank:33,name:"inisyiefa",level:"Lv.1",city:"Pasuruan",gmv:0,posts:156,views:105168,sessions:0},{rank:34,name:"meilaniwe94",level:"Lv.2",city:"Surabaya",gmv:389999,posts:154,views:77398,sessions:0},{rank:35,name:"hiiswifties",level:"Lv.1",city:"Melawi",gmv:0,posts:152,views:64493,sessions:0},{rank:36,name:"akunkeduajenongtv",level:"Lv.1",city:"Sukabumi City",gmv:0,posts:151,views:37628,sessions:0},{rank:37,name:"kiiwkiiiiw_",level:"Lv.2",city:"Rokan Hilir",gmv:2470523,posts:146,views:589681,sessions:0},{rank:38,name:"belanjarecehan_",level:"Lv.4",city:"Palembang",gmv:50311200,posts:145,views:1452414,sessions:0},{rank:39,name:"wiuwiuwiu655",level:"Lv.1",city:"West Tanjung Jabun",gmv:433110,posts:144,views:124941,sessions:0},{rank:40,name:"a_mhr3",level:"Lv.1",city:"Banda Aceh",gmv:0,posts:142,views:27266,sessions:0},{rank:41,name:"_cloudya6",level:"Lv.2",city:"Palembang",gmv:0,posts:140,views:62494,sessions:0},{rank:42,name:"boxercollection.id",level:"Lv.1",city:"North Lampung",gmv:0,posts:135,views:16205,sessions:0},{rank:43,name:"marius_purba_channel",level:"Lv.2",city:"Medan",gmv:1653883,posts:134,views:100981,sessions:0},{rank:44,name:"zakiaazzuhra",level:"Lv.1",city:"Indragiri Hilir",gmv:0,posts:134,views:45213,sessions:0},{rank:45,name:"instomalee",level:"Lv.0",city:"Bandar Lampung",gmv:0,posts:133,views:14124,sessions:0},{rank:46,name:"nulnulshp",level:"Lv.3",city:"Malang",gmv:0,posts:131,views:64879,sessions:0},{rank:47,name:"septikatika5",level:"Lv.1",city:"North Lampung",gmv:0,posts:131,views:38236,sessions:0},{rank:48,name:"revinarialdo_",level:"Lv.0",city:"Bandar Lampung",gmv:0,posts:128,views:23033,sessions:0},{rank:49,name:"erikaa.daily",level:"Lv.1",city:"Lamongan",gmv:0,posts:127,views:37009,sessions:0},{rank:50,name:"hierozone",level:"Lv.2",city:"Sidoarjo",gmv:187603,posts:126,views:18175,sessions:0}],
"84_w2":[{rank:1,name:"jalanhematbanget",level:"Lv.2",city:"Bogor",gmv:2929479,posts:952,views:305697,sessions:0},{rank:2,name:"esi6769",level:"Lv.1",city:"Pariaman",gmv:37900,posts:593,views:70070,sessions:0},{rank:3,name:"hierozone",level:"Lv.2",city:"Sidoarjo",gmv:209409,posts:377,views:276113,sessions:0},{rank:4,name:"jejessie12",level:"Lv.2",city:"Pasuruan",gmv:2084867,posts:348,views:228856,sessions:0},{rank:5,name:"wowalaala",level:"Lv.1",city:"Palembang",gmv:336250,posts:343,views:60721,sessions:0},{rank:6,name:"reandhawidiw",level:"Lv.2",city:"Palembang",gmv:620030,posts:314,views:113610,sessions:0},{rank:7,name:"gimoimoo",level:"Lv.2",city:"Bengkulu",gmv:975218,posts:314,views:60375,sessions:0},{rank:8,name:"rahmatreal_",level:"Lv.4",city:"Gowa",gmv:1373591,posts:280,views:373810,sessions:0},{rank:9,name:"nurulhabiba86",level:"Lv.1",city:"Pasuruan",gmv:0,posts:279,views:106858,sessions:0},{rank:10,name:"meilaniwe94",level:"Lv.2",city:"Surabaya",gmv:1647991,posts:235,views:115347,sessions:0},{rank:11,name:"catheroes1992",level:"Lv.2",city:"Pangkajene Dan Kep",gmv:2206926,posts:232,views:286496,sessions:0},{rank:12,name:"ny.agung_mei",level:"Lv.1",city:"Pasuruan",gmv:0,posts:230,views:188935,sessions:0},{rank:13,name:"radacio1125",level:"Lv.1",city:"Bandar Lampung",gmv:316323,posts:227,views:79248,sessions:0},{rank:14,name:"cut_yusniar",level:"Lv.2",city:"Bireuen",gmv:7644941,posts:226,views:785846,sessions:0},{rank:15,name:"mutiavzy",level:"Lv.2",city:"Palembang",gmv:0,posts:222,views:34775,sessions:0},{rank:16,name:"rforramaaa",level:"Lv.1",city:"Bekasi",gmv:0,posts:221,views:25191,sessions:0},{rank:17,name:"hemmmmm008",level:"Lv.1",city:"Pringsewu",gmv:0,posts:219,views:217400,sessions:0},{rank:18,name:"sarasqy20",level:"Lv.1",city:"Palembang",gmv:0,posts:207,views:28062,sessions:0},{rank:19,name:"elel_store1",level:"Lv.2",city:"West Tanjung Jabun",gmv:2686694,posts:207,views:341448,sessions:0},{rank:20,name:"belanjarecehan_",level:"Lv.4",city:"Palembang",gmv:194230932,posts:203,views:9668494,sessions:0},{rank:21,name:"umi_sastra",level:"Lv.1",city:"Musi Rawas",gmv:180001,posts:202,views:120519,sessions:0},{rank:22,name:"dailytuffinhell",level:"Lv.1",city:"Bengkulu",gmv:0,posts:202,views:32478,sessions:0},{rank:23,name:"idoymuah97",level:"Lv.1",city:"Bandar Lampung",gmv:0,posts:202,views:29199,sessions:0},{rank:24,name:"happy.yulia8",level:"Lv.1",city:"Pasuruan",gmv:0,posts:202,views:52040,sessions:0},{rank:25,name:"dailytuffinhell",level:"Lv.2",city:"Bengkulu",gmv:0,posts:202,views:101896,sessions:0},{rank:26,name:"septikatika5",level:"Lv.1",city:"North Lampung",gmv:0,posts:194,views:50698,sessions:0},{rank:27,name:"sarivitaa_",level:"Lv.2",city:"Sambas",gmv:531143,posts:192,views:80531,sessions:0},{rank:28,name:"smashincpum",level:"Lv.0",city:"Bandung",gmv:0,posts:180,views:29121,sessions:0},{rank:29,name:"racil9592",level:"Lv.1",city:"Bandar Lampung",gmv:238257,posts:170,views:32484,sessions:0},{rank:30,name:"ratufelice88",level:"Lv.1",city:"Denpasar",gmv:0,posts:170,views:42130,sessions:0},{rank:31,name:"adlyyyyzx",level:"Lv.1",city:"Bandar Lampung",gmv:303790,posts:169,views:47373,sessions:0},{rank:32,name:"lie2sukses",level:"Lv.1",city:"Magelang",gmv:0,posts:165,views:50995,sessions:0},{rank:33,name:"tuhfah.mlna.s_01",level:"Lv.3",city:"Malang City",gmv:21255295,posts:162,views:3232581,sessions:0},{rank:34,name:"syarif_jinan",level:"Lv.3",city:"Jember",gmv:3582002,posts:161,views:510121,sessions:0},{rank:35,name:"angelicazivania",level:"Lv.1",city:"Semarang City",gmv:0,posts:160,views:33702,sessions:0},{rank:36,name:"terbaru_affiliatefyp",level:"Lv.1",city:"Pesawaran",gmv:30999,posts:159,views:31534,sessions:0},{rank:37,name:"kak_nop",level:"Lv.2",city:"Palembang",gmv:880992,posts:156,views:206896,sessions:0},{rank:38,name:"ms.anss_17",level:"Lv.2",city:"Indragiri Hilir",gmv:0,posts:156,views:87203,sessions:0},{rank:39,name:"revinarialdo_",level:"Lv.0",city:"Bandar Lampung",gmv:0,posts:152,views:32844,sessions:0},{rank:40,name:"krmla102",level:"Lv.1",city:"Indragiri Hilir",gmv:0,posts:152,views:81899,sessions:0},{rank:41,name:"vidiomilikistianah03",level:"Lv.1",city:"Bondowoso",gmv:0,posts:152,views:39514,sessions:0},{rank:42,name:"roavelle.co",level:"Lv.1",city:"Sintang",gmv:0,posts:149,views:119338,sessions:0},{rank:43,name:"rusdiyanto457",level:"Lv.1",city:"Bandar Lampung",gmv:0,posts:148,views:65266,sessions:0},{rank:44,name:"niekhendevita57",level:"Lv.1",city:"Karawang",gmv:85700,posts:147,views:69062,sessions:0},{rank:45,name:"chaa_addict",level:"Lv.1",city:"Sleman",gmv:0,posts:146,views:64215,sessions:0},{rank:46,name:"amanda_a1028",level:"Lv.1",city:"Bekasi",gmv:0,posts:145,views:79552,sessions:0},{rank:47,name:"zakiaazzuhra",level:"Lv.1",city:"Indragiri Hilir",gmv:0,posts:137,views:42265,sessions:0},{rank:48,name:"fitriawaliyah21_",level:"Lv.1",city:"Lamongan",gmv:1902288,posts:136,views:1099608,sessions:0},{rank:49,name:"marius_purba_channel",level:"Lv.2",city:"Medan",gmv:2587264,posts:134,views:212679,sessions:0},{rank:50,name:"cholix1112",level:"Lv.1",city:"Pasuruan",gmv:356435,posts:133,views:58157,sessions:0}],
"84_w3":[{rank:1,name:"jalanhematbanget",level:"Lv.2",city:"Bogor",gmv:2846149,posts:954,views:435688,sessions:0},{rank:2,name:"esi6769",level:"Lv.1",city:"Pariaman",gmv:0,posts:624,views:73095,sessions:0},{rank:3,name:"dailytuffinhell",level:"Lv.2",city:"Bengkulu",gmv:100998,posts:534,views:321900,sessions:0},{rank:4,name:"krmla102",level:"Lv.1",city:"Indragiri Hilir",gmv:12001,posts:494,views:286610,sessions:0},{rank:5,name:"vidiomilikistianah03",level:"Lv.1",city:"Bondowoso",gmv:0,posts:416,views:113934,sessions:0},{rank:6,name:"catheroes1992",level:"Lv.2",city:"Pangkajene Dan Kep",gmv:4930997,posts:402,views:422541,sessions:0},{rank:7,name:"jejessie12",level:"Lv.2",city:"Pasuruan",gmv:0,posts:356,views:106215,sessions:0},{rank:8,name:"gimoimoo",level:"Lv.2",city:"Bengkulu",gmv:645983,posts:319,views:74008,sessions:0},{rank:9,name:"nurulhabiba86",level:"Lv.1",city:"Pasuruan",gmv:0,posts:309,views:175526,sessions:0},{rank:10,name:"reandhawidiw",level:"Lv.2",city:"Palembang",gmv:0,posts:300,views:87475,sessions:0},{rank:11,name:"wowalaala",level:"Lv.1",city:"Palembang",gmv:0,posts:287,views:20395,sessions:0},{rank:12,name:"rahmatreal_",level:"Lv.4",city:"Gowa",gmv:410500,posts:284,views:253975,sessions:0},{rank:13,name:"terbaru_affiliatefyp",level:"Lv.1",city:"Pesawaran",gmv:898336,posts:247,views:105463,sessions:0},{rank:14,name:"ny.agung_mei",level:"Lv.1",city:"Pasuruan",gmv:0,posts:244,views:199107,sessions:0},{rank:15,name:"belanjarecehan_",level:"Lv.4",city:"Palembang",gmv:100583683,posts:227,views:9297793,sessions:0},{rank:16,name:"happy.yulia8",level:"Lv.1",city:"Pasuruan",gmv:0,posts:224,views:168644,sessions:0},{rank:17,name:"cut_yusniar",level:"Lv.2",city:"Bireuen",gmv:4347730,posts:211,views:423854,sessions:0},{rank:18,name:"angelmovie_0",level:"Lv.1",city:"South Pesisir",gmv:0,posts:209,views:84281,sessions:0},{rank:19,name:"muliana3766",level:"Lv.1",city:"Indragiri Hilir",gmv:79997,posts:207,views:38122,sessions:0},{rank:20,name:"mutiavzy",level:"Lv.2",city:"Palembang",gmv:0,posts:202,views:33497,sessions:0},{rank:21,name:"ms.anss_17",level:"Lv.2",city:"Indragiri Hilir",gmv:903900,posts:201,views:127931,sessions:0},{rank:22,name:"shakilaad24",level:"Lv.1",city:"Sleman",gmv:0,posts:201,views:143349,sessions:0},{rank:23,name:"lie2sukses",level:"Lv.1",city:"Magelang",gmv:0,posts:198,views:92980,sessions:0},{rank:24,name:"gas_promo",level:"Lv.1",city:"Sleman",gmv:0,posts:194,views:13996,sessions:0},{rank:25,name:"mahendra.gazza",level:"Lv.1",city:"South Lampung",gmv:0,posts:189,views:4431,sessions:0},{rank:26,name:"meilaniwe94",level:"Lv.2",city:"Surabaya",gmv:0,posts:188,views:62833,sessions:0},{rank:27,name:"jajan.teross",level:"Lv.2",city:"Nganjuk",gmv:0,posts:184,views:100105,sessions:0},{rank:28,name:"adlyyyyzx",level:"Lv.1",city:"Bandar Lampung",gmv:0,posts:179,views:54427,sessions:0},{rank:29,name:".asepasep14",level:"Lv.1",city:"Sleman",gmv:0,posts:178,views:13851,sessions:0},{rank:30,name:"ceobandarlampung",level:"Lv.1",city:"Bandar Lampung",gmv:0,posts:178,views:26334,sessions:0},{rank:31,name:"syarif_jinan",level:"Lv.3",city:"Jember",gmv:3433154,posts:176,views:497915,sessions:0},{rank:32,name:"nulnulshp",level:"Lv.3",city:"Malang",gmv:0,posts:176,views:129329,sessions:0},{rank:33,name:"radacio1125",level:"Lv.1",city:"Bandar Lampung",gmv:0,posts:175,views:54027,sessions:0},{rank:34,name:"udandereskalibanjir",level:"Lv.1",city:"Banyuwangi",gmv:125297,posts:174,views:29240,sessions:0},{rank:35,name:"mahen_165",level:"Lv.1",city:"South Lampung",gmv:0,posts:172,views:22957,sessions:0},{rank:36,name:"dewifili",level:"Lv.1",city:"Pontianak",gmv:0,posts:172,views:24445,sessions:0},{rank:37,name:"jasmineputri010",level:"Lv.1",city:"Bandar Lampung",gmv:0,posts:168,views:49349,sessions:0},{rank:38,name:"ratufelice88",level:"Lv.1",city:"Denpasar",gmv:0,posts:166,views:22979,sessions:0},{rank:39,name:"syarif_jinan",level:"Lv.3",city:"Lumajang",gmv:2627709,posts:165,views:452139,sessions:0},{rank:40,name:"hemmmmm008",level:"Lv.1",city:"Pringsewu",gmv:0,posts:164,views:246055,sessions:0},{rank:41,name:"ikariaastika",level:"Lv.1",city:"Palembang",gmv:1000,posts:160,views:20330,sessions:0},{rank:42,name:"n_mallwdy",level:"Lv.1",city:"Palembang",gmv:0,posts:160,views:18388,sessions:0},{rank:43,name:"ball.tiktok06",level:"Lv.1",city:"Cilegon",gmv:0,posts:159,views:191029,sessions:0},{rank:44,name:"fitriawaliyah21_",level:"Lv.2",city:"Lamongan",gmv:545836,posts:157,views:79813,sessions:0},{rank:45,name:"put3_1818",level:"Lv.1",city:"Lubuklinggau",gmv:125993,posts:157,views:72909,sessions:0},{rank:46,name:"cholix1112",level:"Lv.1",city:"Pasuruan",gmv:0,posts:156,views:55039,sessions:0},{rank:47,name:"iyainiiyii",level:"Lv.2",city:"Indragiri Hilir",gmv:0,posts:156,views:95843,sessions:0},{rank:48,name:"septikatika5",level:"Lv.1",city:"North Lampung",gmv:0,posts:156,views:49667,sessions:0},{rank:49,name:"fitrieats",level:"Lv.1",city:"Cirebon",gmv:709793,posts:154,views:67298,sessions:0},{rank:50,name:"rforramaaa",level:"Lv.1",city:"Bekasi",gmv:47002,posts:153,views:15912,sessions:0}],
"84_w4":[{rank:1,name:"jalanhematbanget",level:"Lv.2",city:"Bogor",gmv:665679,posts:965,views:299095,sessions:0},{rank:2,name:"akunkeduajenongtv",level:"Lv.1",city:"Sukabumi City",gmv:0,posts:400,views:106480,sessions:0},{rank:3,name:"racil9592",level:"Lv.1",city:"Bandar Lampung",gmv:0,posts:383,views:56227,sessions:0},{rank:4,name:"ratufelice88",level:"Lv.1",city:"Denpasar",gmv:80646,posts:356,views:230810,sessions:0},{rank:5,name:"dailytuffinhell",level:"Lv.2",city:"Bengkulu",gmv:0,posts:356,views:46079,sessions:0},{rank:6,name:"jejessie12",level:"Lv.2",city:"Pasuruan",gmv:0,posts:351,views:54696,sessions:0},{rank:7,name:"reandhawidiw",level:"Lv.2",city:"Palembang",gmv:604091,posts:337,views:138662,sessions:0},{rank:8,name:"jelitsvd0i8",level:"Lv.1",city:"Bandar Lampung",gmv:43500,posts:331,views:4275,sessions:0},{rank:9,name:"esi6769",level:"Lv.1",city:"Pariaman",gmv:0,posts:317,views:33620,sessions:0},{rank:10,name:"angelicazivania",level:"Lv.1",city:"Semarang City",gmv:0,posts:309,views:71372,sessions:0},{rank:11,name:"happy.yulia8",level:"Lv.1",city:"Pasuruan",gmv:498768,posts:299,views:106638,sessions:0},{rank:12,name:"terbaru_affiliatefyp",level:"Lv.1",city:"Pesawaran",gmv:0,posts:298,views:59057,sessions:0},{rank:13,name:"vidiomilikistianah03",level:"Lv.1",city:"Bondowoso",gmv:0,posts:291,views:108381,sessions:0},{rank:14,name:"nurulhabiba86",level:"Lv.1",city:"Pasuruan",gmv:0,posts:277,views:114525,sessions:0},{rank:15,name:"dailytuffinhell",level:"Lv.1",city:"Bengkulu",gmv:49997,posts:270,views:47984,sessions:0},{rank:16,name:"gimoimoo",level:"Lv.2",city:"Bengkulu",gmv:415554,posts:261,views:86443,sessions:0},{rank:17,name:"slovenskyyy",level:"Lv.1",city:"Bekasi City",gmv:0,posts:256,views:35306,sessions:0},{rank:18,name:"rahmatreal_",level:"Lv.4",city:"Gowa",gmv:1562313,posts:255,views:326699,sessions:0},{rank:19,name:"giselaa.fd",level:"Lv.1",city:"Wonosobo",gmv:17999,posts:250,views:142601,sessions:0},{rank:20,name:"putridewirahayu",level:"Lv.1",city:"Balikpapan",gmv:0,posts:249,views:75888,sessions:0},{rank:21,name:"nzyyyyyy_22",level:"Lv.1",city:"Indragiri Hilir",gmv:145991,posts:248,views:84765,sessions:0},{rank:22,name:"dinateww_12",level:"Lv.1",city:"Bogor City",gmv:0,posts:245,views:59632,sessions:0},{rank:23,name:"adersonaffandi",level:"Lv.1",city:"Bandar Lampung",gmv:0,posts:242,views:53267,sessions:0},{rank:24,name:"septikatika5",level:"Lv.1",city:"North Lampung",gmv:699523,posts:232,views:68509,sessions:0},{rank:25,name:"krmla102",level:"Lv.1",city:"Indragiri Hilir",gmv:195757,posts:231,views:152093,sessions:0},{rank:26,name:"meilaniwe94",level:"Lv.2",city:"Surabaya",gmv:787843,posts:227,views:62006,sessions:0},{rank:27,name:"ny.agung_mei",level:"Lv.1",city:"Pasuruan",gmv:0,posts:224,views:140153,sessions:0},{rank:28,name:"belanjarecehan_",level:"Lv.4",city:"Palembang",gmv:84955449,posts:224,views:2128300,sessions:0},{rank:29,name:"genzzzsstt011",level:"Lv.1",city:"South Lampung",gmv:103794,posts:223,views:90207,sessions:0},{rank:30,name:"angelmovie_0",level:"Lv.1",city:"South Pesisir",gmv:0,posts:223,views:278554,sessions:0},{rank:31,name:"wowalaala",level:"Lv.1",city:"Palembang",gmv:0,posts:220,views:22827,sessions:0},{rank:32,name:"ritarian98",level:"Lv.1",city:"Banyuasin",gmv:0,posts:212,views:27278,sessions:0},{rank:33,name:"rusdiyanto457",level:"Lv.1",city:"Bandar Lampung",gmv:0,posts:211,views:229362,sessions:0},{rank:34,name:"wednes112",level:"Lv.1",city:"Sukabumi",gmv:96954,posts:210,views:90488,sessions:0},{rank:35,name:"mif_2705",level:"Lv.1",city:"East Lampung",gmv:0,posts:208,views:50577,sessions:0},{rank:36,name:"chaa_addict",level:"Lv.1",city:"Sleman",gmv:72000,posts:208,views:87123,sessions:0},{rank:37,name:"desianggrainih",level:"Lv.1",city:"South Lampung",gmv:0,posts:208,views:59817,sessions:0},{rank:38,name:"ikariaastika",level:"Lv.1",city:"Palembang",gmv:77997,posts:203,views:25105,sessions:0},{rank:39,name:"inisyiefa",level:"Lv.1",city:"Pasuruan",gmv:0,posts:200,views:50571,sessions:0},{rank:40,name:"mif_2705",level:"Lv.2",city:"East Lampung",gmv:64799,posts:200,views:42496,sessions:0},{rank:41,name:"kasmawatii01",level:"Lv.1",city:"Indragiri Hilir",gmv:24498,posts:200,views:67054,sessions:0},{rank:42,name:"bastami77",level:"Lv.1",city:"Pasuruan",gmv:0,posts:199,views:52280,sessions:0},{rank:43,name:"hasanahnurr17",level:"Lv.1",city:"Indragiri Hilir",gmv:27998,posts:197,views:39811,sessions:0},{rank:44,name:"ceobandarlampung",level:"Lv.1",city:"Bandar Lampung",gmv:19798,posts:196,views:48387,sessions:0},{rank:45,name:"syarif_jinan",level:"Lv.3",city:"Lumajang",gmv:5518089,posts:196,views:412955,sessions:0},{rank:46,name:"mamiin_shop",level:"Lv.1",city:"Jambi",gmv:0,posts:195,views:36891,sessions:0},{rank:47,name:"dindappdinda",level:"Lv.1",city:"Tanggamus",gmv:0,posts:195,views:323762,sessions:0},{rank:48,name:"_cloudya6",level:"Lv.1",city:"Palembang",gmv:359328,posts:189,views:86980,sessions:0},{rank:49,name:"catheroes1992",level:"Lv.2",city:"Pangkajene Dan Kep",gmv:2314330,posts:189,views:166488,sessions:0},{rank:50,name:"glowbylesta",level:"Lv.1",city:"Batam",gmv:0,posts:189,views:66479,sessions:0}],
"86_w1":[{rank:1,name:"tuhfah.mlna.s_01",level:"Lv.3",city:"Malang City",gmv:50657449,posts:126,views:5033178,sessions:0},{rank:2,name:"belanjarecehan_",level:"Lv.4",city:"Palembang",gmv:50311200,posts:145,views:1452414,sessions:0},{rank:3,name:"udaudasad",level:"Lv.2",city:"Lima Puluh Kota",gmv:21218652,posts:19,views:1889115,sessions:0},{rank:4,name:"syarif_jinan",level:"Lv.3",city:"Jember",gmv:6790371,posts:262,views:1293115,sessions:0},{rank:5,name:"itslingga",level:"Lv.2",city:"Tangerang",gmv:6390932,posts:3,views:144662,sessions:0},{rank:6,name:"elel_store1",level:"Lv.2",city:"West Tanjung Jabun",gmv:6311337,posts:267,views:403187,sessions:0},{rank:7,name:"itslingga",level:"Lv.1",city:"Tangerang",gmv:5928609,posts:2,views:136459,sessions:0},{rank:8,name:"gittaevita",level:"Lv.3",city:"Banyuasin",gmv:5367504,posts:78,views:1680380,sessions:0},{rank:9,name:"ceyotravel",level:"Lv.2",city:"South Jakarta",gmv:5035026,posts:2,views:1613,sessions:0},{rank:10,name:"cut_yusniar",level:"Lv.2",city:"Bireuen",gmv:4726390,posts:205,views:450456,sessions:0},{rank:11,name:"hematbareng0",level:"Lv.2",city:"Palembang",gmv:4224058,posts:277,views:893569,sessions:0},{rank:12,name:"ysnyf_",level:"Lv.3",city:"Central Jakarta",gmv:3723616,posts:4,views:5126,sessions:0},{rank:13,name:"andiyus87",level:"Lv.2",city:"Bone",gmv:2767368,posts:45,views:592840,sessions:0},{rank:14,name:"mayamakan_29",level:"Lv.2",city:"Bogor",gmv:2499195,posts:63,views:676598,sessions:0},{rank:15,name:"kiiwkiiiiw_",level:"Lv.2",city:"Rokan Hilir",gmv:2470523,posts:146,views:589681,sessions:0},{rank:16,name:"catheroes1992",level:"Lv.2",city:"Pangkajene Dan Kep",gmv:2248802,posts:231,views:174914,sessions:0},{rank:17,name:"alice.azahra4",level:"Lv.1",city:"Palembang",gmv:2169388,posts:31,views:358724,sessions:0},{rank:18,name:"mamanyaune",level:"Lv.1",city:"Payakumbuh",gmv:1991233,posts:4,views:5095,sessions:0},{rank:19,name:"rahmatreal_",level:"Lv.4",city:"Gowa",gmv:1944221,posts:122,views:169794,sessions:0},{rank:20,name:"kenzsepalsepil",level:"Lv.1",city:"Bandung",gmv:1856757,posts:16,views:304218,sessions:0},{rank:21,name:"gabriellcova",level:"Lv.2",city:"South Lampung",gmv:1703753,posts:21,views:45433,sessions:0},{rank:22,name:"vettiie",level:"Lv.1",city:"Bekasi",gmv:1659440,posts:62,views:126976,sessions:0},{rank:23,name:"marius_purba_channel",level:"Lv.2",city:"Medan",gmv:1653883,posts:134,views:100981,sessions:0},{rank:24,name:"anik_sept",level:"Lv.2",city:"Melawi",gmv:1617347,posts:44,views:75639,sessions:0},{rank:25,name:"taula_official",level:"Lv.1",city:"Palembang",gmv:1611470,posts:22,views:24851,sessions:0},{rank:26,name:"rookibye",level:"Lv.2",city:"West Jakarta",gmv:1378520,posts:6,views:15344,sessions:0},{rank:27,name:"shavniamastasia5",level:"Lv.2",city:"Mesuji",gmv:1278777,posts:82,views:52940,sessions:0},{rank:28,name:"inhkimmm",level:"Lv.1",city:"Tegal City",gmv:1261001,posts:8,views:182015,sessions:0},{rank:29,name:"glattris",level:"Lv.3",city:"Sidoarjo",gmv:1244289,posts:58,views:1565008,sessions:0},{rank:30,name:"anditukangpromo",level:"Lv.2",city:"West Jakarta",gmv:1195899,posts:79,views:129547,sessions:0},{rank:31,name:"wadidawbroo",level:"Lv.2",city:"Tebo",gmv:1155023,posts:90,views:478148,sessions:0},{rank:32,name:"sobat.kuliner",level:"Lv.2",city:"North Jakarta",gmv:1091005,posts:100,views:171790,sessions:0},{rank:33,name:"spillshopee.terracun",level:"Lv.1",city:"Kubu Raya",gmv:1053722,posts:212,views:298958,sessions:0},{rank:34,name:"ekasafiraa_",level:"Lv.4",city:"Batam",gmv:1050041,posts:47,views:209593,sessions:0},{rank:35,name:"jumadil.m13",level:"Lv.3",city:"Sidenreng Rappang",gmv:948010,posts:25,views:31642,sessions:0},{rank:36,name:"jalanhematbanget",level:"Lv.2",city:"Bogor",gmv:944965,posts:1169,views:203583,sessions:0},{rank:37,name:"denasepp",level:"Lv.1",city:"Tangerang",gmv:919266,posts:102,views:115186,sessions:0},{rank:38,name:"yanimegiechiean07",level:"Lv.1",city:"Pesawaran",gmv:859979,posts:22,views:9934,sessions:0},{rank:39,name:"ijalklm",level:"Lv.1",city:"Banyumas",gmv:848688,posts:7,views:329737,sessions:0},{rank:40,name:"viha561",level:"Lv.1",city:"Bekasi",gmv:836722,posts:21,views:19297,sessions:0},{rank:41,name:"azysinuhaji2",level:"Lv.2",city:"Denpasar",gmv:773812,posts:10,views:10422,sessions:0},{rank:42,name:"sayalarimba",level:"Lv.2",city:"South Jakarta",gmv:753017,posts:9,views:4751002,sessions:0},{rank:43,name:"babanayima",level:"Lv.3",city:"Batanghari",gmv:752163,posts:98,views:228154,sessions:0},{rank:44,name:"heyitsaghnia",level:"Lv.3",city:"Boyolali",gmv:751612,posts:63,views:424376,sessions:0},{rank:45,name:"me.cahaya",level:"Lv.3",city:"Makassar",gmv:727801,posts:33,views:77704,sessions:0},{rank:46,name:"retnoismii",level:"Lv.2",city:"Cirebon City",gmv:705715,posts:66,views:95209,sessions:0},{rank:47,name:"randomshop556",level:"Lv.1",city:"Nias",gmv:702846,posts:24,views:112869,sessions:0},{rank:48,name:"nafia.kediri",level:"Lv.2",city:"Kediri",gmv:651991,posts:30,views:170718,sessions:0},{rank:49,name:"uwaktanggang",level:"Lv.1",city:"Medan",gmv:647405,posts:24,views:39183,sessions:0},{rank:50,name:"neng.dhinda",level:"Lv.1",city:"Bogor City",gmv:644017,posts:2,views:79539,sessions:0}],
"86_w2":[{rank:1,name:"belanjarecehan_",level:"Lv.4",city:"Palembang",gmv:194230932,posts:203,views:9668494,sessions:0},{rank:2,name:"tuhfah.mlna.s_01",level:"Lv.3",city:"Malang City",gmv:21255295,posts:162,views:3232581,sessions:0},{rank:3,name:"udaudasad",level:"Lv.2",city:"Lima Puluh Kota",gmv:14224305,posts:11,views:1576390,sessions:0},{rank:4,name:"cut_yusniar",level:"Lv.2",city:"Bireuen",gmv:7644941,posts:226,views:785846,sessions:0},{rank:5,name:"cikalnajme",level:"Lv.2",city:"Depok",gmv:6536994,posts:4,views:56422,sessions:0},{rank:6,name:"anditukangpromo",level:"Lv.2",city:"West Jakarta",gmv:6211197,posts:75,views:489405,sessions:0},{rank:7,name:"heyitsaghnia",level:"Lv.2",city:"Boyolali",gmv:4857766,posts:21,views:40889,sessions:0},{rank:8,name:"sobat.kuliner",level:"Lv.2",city:"North Jakarta",gmv:4525625,posts:57,views:228806,sessions:0},{rank:9,name:"ysnyf_",level:"Lv.3",city:"Batam",gmv:4416525,posts:6,views:4352,sessions:0},{rank:10,name:"dailylifemeufood",level:"Lv.2",city:"Medan",gmv:4349811,posts:4,views:14859,sessions:0},{rank:11,name:"me.cahaya",level:"Lv.3",city:"Makassar",gmv:4315901,posts:111,views:596811,sessions:0},{rank:12,name:"syarif_jinan",level:"Lv.3",city:"Jember",gmv:3582002,posts:161,views:510121,sessions:0},{rank:13,name:"kiiwkiiiiw_",level:"Lv.2",city:"Rokan Hilir",gmv:3355150,posts:117,views:276658,sessions:0},{rank:14,name:"jalanhematbanget",level:"Lv.2",city:"Bogor",gmv:2929479,posts:952,views:305697,sessions:0},{rank:15,name:"evitakamal",level:"Lv.2",city:"West Jakarta",gmv:2862316,posts:24,views:88688,sessions:0},{rank:16,name:"ayusrg19",level:"Lv.4",city:"Bekasi",gmv:2723449,posts:73,views:207646,sessions:0},{rank:17,name:"elel_store1",level:"Lv.2",city:"West Tanjung Jabun",gmv:2686694,posts:207,views:341448,sessions:0},{rank:18,name:"by.riskaah",level:"Lv.2",city:"Pasaman",gmv:2659237,posts:4,views:14357,sessions:0},{rank:19,name:"marius_purba_channel",level:"Lv.2",city:"Medan",gmv:2587264,posts:134,views:212679,sessions:0},{rank:20,name:"babanayima",level:"Lv.3",city:"Batanghari",gmv:2534887,posts:108,views:317175,sessions:0},{rank:21,name:"catheroes1992",level:"Lv.2",city:"Pangkajene Dan Kep",gmv:2206926,posts:232,views:286496,sessions:0},{rank:22,name:"jejessie12",level:"Lv.2",city:"Pasuruan",gmv:2084867,posts:348,views:228856,sessions:0},{rank:23,name:"irwansengeti",level:"Lv.3",city:"Muaro Jambi",gmv:2032600,posts:32,views:188666,sessions:0},{rank:24,name:"andiyus87",level:"Lv.2",city:"Bone",gmv:2001492,posts:28,views:405501,sessions:0},{rank:25,name:"ceyotravel",level:"Lv.2",city:"Central Jakarta",gmv:1974511,posts:4,views:831,sessions:0},{rank:26,name:"kwalitasbagus1",level:"Lv.4",city:"South Jakarta",gmv:1958561,posts:15,views:73221,sessions:0},{rank:27,name:"fitriawaliyah21_",level:"Lv.1",city:"Lamongan",gmv:1902288,posts:136,views:1099608,sessions:0},{rank:28,name:"aku.owl",level:"Lv.1",city:"Padang",gmv:1885013,posts:89,views:98411,sessions:0},{rank:29,name:"gabriellcova",level:"Lv.2",city:"South Lampung",gmv:1813303,posts:19,views:70777,sessions:0},{rank:30,name:"strawbeyrose",level:"Lv.2",city:"Malang",gmv:1805708,posts:61,views:54974,sessions:0},{rank:31,name:"ekasafiraa_",level:"Lv.3",city:"Batam",gmv:1803355,posts:21,views:60159,sessions:0},{rank:32,name:"nanaabdul_17",level:"Lv.3",city:"Sidoarjo",gmv:1746069,posts:2,views:13541,sessions:0},{rank:33,name:"teduhruang",level:"Lv.2",city:"Bantul",gmv:1674560,posts:7,views:15996,sessions:0},{rank:34,name:"meilaniwe94",level:"Lv.2",city:"Surabaya",gmv:1647991,posts:235,views:115347,sessions:0},{rank:35,name:"ra.shop1995",level:"Lv.1",city:"Semarang City",gmv:1623710,posts:93,views:126647,sessions:0},{rank:36,name:"yukbisayukkk6",level:"Lv.1",city:"Trenggalek",gmv:1615098,posts:81,views:148342,sessions:0},{rank:37,name:"lambehotelier",level:"Lv.2",city:"Semarang City",gmv:1566469,posts:41,views:142306,sessions:0},{rank:38,name:"shavniamastasia5",level:"Lv.2",city:"Mesuji",gmv:1524913,posts:74,views:46133,sessions:0},{rank:39,name:"nafia.kediri",level:"Lv.1",city:"Kediri",gmv:1514302,posts:22,views:136004,sessions:0},{rank:40,name:"wadidawbroo",level:"Lv.2",city:"Tebo",gmv:1486210,posts:81,views:651943,sessions:0},{rank:41,name:"gittaevita",level:"Lv.4",city:"Banyuasin",gmv:1399998,posts:46,views:262591,sessions:0},{rank:42,name:"celsfoodiary",level:"Lv.1",city:"South Tangerang",gmv:1390262,posts:24,views:151755,sessions:0},{rank:43,name:"rahmatreal_",level:"Lv.4",city:"Gowa",gmv:1373591,posts:280,views:373810,sessions:0},{rank:44,name:"akun.promosi.10",level:"Lv.1",city:"Sleman",gmv:1249629,posts:91,views:28886,sessions:0},{rank:45,name:"eroofa",level:"Lv.2",city:"Cilacap",gmv:1249113,posts:4,views:81063,sessions:0},{rank:46,name:"mise.ya",level:"Lv.1",city:"Indramayu",gmv:1244039,posts:8,views:42666,sessions:0},{rank:47,name:"mayamakan_29",level:"Lv.1",city:"Bogor",gmv:1238606,posts:33,views:140187,sessions:0},{rank:48,name:"sayalarimba",level:"Lv.2",city:"South Jakarta",gmv:1234471,posts:10,views:2708298,sessions:0},{rank:49,name:"bunda_jamail",level:"Lv.1",city:"Tangerang",gmv:1234349,posts:6,views:37733,sessions:0},{rank:50,name:"heyitsaghnia",level:"Lv.3",city:"Boyolali",gmv:1205407,posts:30,views:151673,sessions:0}],
"86_w3":[{rank:1,name:"belanjarecehan_",level:"Lv.4",city:"Palembang",gmv:100583683,posts:227,views:9297793,sessions:0},{rank:2,name:"gittaevita",level:"Lv.4",city:"Banyuasin",gmv:14023278,posts:42,views:680699,sessions:0},{rank:3,name:"tuhfah.mlna.s_01",level:"Lv.4",city:"Malang City",gmv:10071417,posts:152,views:1820416,sessions:0},{rank:4,name:"spillshopee.terracun",level:"Lv.2",city:"Kubu Raya",gmv:5602950,posts:118,views:106307,sessions:0},{rank:5,name:"mayamakan_29",level:"Lv.2",city:"Bogor",gmv:5103645,posts:53,views:1448023,sessions:0},{rank:6,name:"catheroes1992",level:"Lv.2",city:"Pangkajene Dan Kep",gmv:4930997,posts:402,views:422541,sessions:0},{rank:7,name:"ayusrg19",level:"Lv.4",city:"Bekasi",gmv:4788622,posts:20,views:415136,sessions:0},{rank:8,name:"cut_yusniar",level:"Lv.2",city:"Bireuen",gmv:4347730,posts:211,views:423854,sessions:0},{rank:9,name:"syarif_jinan",level:"Lv.3",city:"Jember",gmv:3433154,posts:176,views:497915,sessions:0},{rank:10,name:"babanayima",level:"Lv.3",city:"Batanghari",gmv:3165044,posts:86,views:278642,sessions:0},{rank:11,name:"glattris",level:"Lv.3",city:"Sidoarjo",gmv:2877243,posts:68,views:765358,sessions:0},{rank:12,name:"jalanhematbanget",level:"Lv.2",city:"Bogor",gmv:2846149,posts:954,views:435688,sessions:0},{rank:13,name:"nafia.kediri",level:"Lv.2",city:"Kediri",gmv:2746299,posts:49,views:485097,sessions:0},{rank:14,name:"mamanyaune",level:"Lv.1",city:"Payakumbuh",gmv:2655693,posts:8,views:115057,sessions:0},{rank:15,name:"syarif_jinan",level:"Lv.3",city:"Lumajang",gmv:2627709,posts:165,views:452139,sessions:0},{rank:16,name:"ysnyf_",level:"Lv.3",city:"Central Jakarta",gmv:2500014,posts:3,views:2203,sessions:0},{rank:17,name:"koneng.2",level:"Lv.2",city:"Karawang",gmv:2426451,posts:64,views:587232,sessions:0},{rank:18,name:"me.cahaya",level:"Lv.3",city:"Makassar",gmv:2284954,posts:59,views:541393,sessions:0},{rank:19,name:"ekasafiraa_",level:"Lv.3",city:"Batam",gmv:2265452,posts:28,views:118351,sessions:0},{rank:20,name:"koh.harry",level:"Lv.3",city:"Pringsewu",gmv:2263023,posts:47,views:88394,sessions:0},{rank:21,name:"ekasafiraa_",level:"Lv.4",city:"Batam",gmv:2202788,posts:20,views:70511,sessions:0},{rank:22,name:"strawbeyrose",level:"Lv.2",city:"Malang",gmv:2125886,posts:83,views:107324,sessions:0},{rank:23,name:"erikaa.daily",level:"Lv.1",city:"Lamongan",gmv:2018451,posts:75,views:717648,sessions:0},{rank:24,name:"sobat.kuliner",level:"Lv.2",city:"Bandung City",gmv:1954822,posts:82,views:278165,sessions:0},{rank:25,name:"hematbareng0",level:"Lv.1",city:"Palembang",gmv:1858337,posts:126,views:344316,sessions:0},{rank:26,name:"cozyescapeid",level:"Lv.2",city:"Central Jakarta",gmv:1822001,posts:9,views:20241,sessions:0},{rank:27,name:"udaudasad",level:"Lv.3",city:"Lima Puluh Kota",gmv:1780591,posts:13,views:75131,sessions:0},{rank:28,name:"vaniopi",level:"Lv.1",city:"Muaro Jambi",gmv:1750435,posts:126,views:215493,sessions:0},{rank:29,name:"mayamakan_29",level:"Lv.1",city:"Bogor",gmv:1731484,posts:38,views:357394,sessions:0},{rank:30,name:"findbyprys",level:"Lv.3",city:"West Jakarta",gmv:1713556,posts:5,views:260964,sessions:0},{rank:31,name:"kak_nop",level:"Lv.2",city:"Palembang",gmv:1687887,posts:142,views:321049,sessions:0},{rank:32,name:"marius_purba_channel",level:"Lv.2",city:"Medan",gmv:1559313,posts:90,views:95883,sessions:0},{rank:33,name:"bellarhemaagnesiaa",level:"Lv.3",city:"Semarang City",gmv:1496101,posts:19,views:122804,sessions:0},{rank:34,name:"eroofatrip",level:"Lv.1",city:"Cilacap",gmv:1484875,posts:43,views:72171,sessions:0},{rank:35,name:"imanugoz",level:"Lv.1",city:"Kuningan",gmv:1433505,posts:5,views:82538,sessions:0},{rank:36,name:"_sangbayuu",level:"Lv.3",city:"Sukoharjo",gmv:1420866,posts:5,views:23449,sessions:0},{rank:37,name:"wadidawbroo",level:"Lv.2",city:"Tebo",gmv:1357715,posts:108,views:692940,sessions:0},{rank:38,name:"rystifamily",level:"Lv.2",city:"South Jakarta",gmv:1337540,posts:40,views:342266,sessions:0},{rank:39,name:"fahrit_mufama_cetar",level:"Lv.2",city:"Medan",gmv:1315203,posts:4,views:271095,sessions:0},{rank:40,name:"onie_169",level:"Lv.2",city:"Cilacap",gmv:1302867,posts:45,views:40472,sessions:0},{rank:41,name:"tripnchill.id",level:"Lv.2",city:"Bandung City",gmv:1291582,posts:39,views:71679,sessions:0},{rank:42,name:"reviewsya0",level:"Lv.1",city:"Musi Banyuasin",gmv:1228870,posts:65,views:23438,sessions:0},{rank:43,name:"sobat.kuliner",level:"Lv.2",city:"North Jakarta",gmv:1162137,posts:62,views:127170,sessions:0},{rank:44,name:"miaelmira",level:"Lv.2",city:"Bandar Lampung",gmv:1103649,posts:39,views:86433,sessions:0},{rank:45,name:"sis.silgumush24",level:"Lv.1",city:"South Jakarta",gmv:1092436,posts:4,views:593,sessions:0},{rank:46,name:"hemarjhela",level:"Lv.1",city:"Mimika",gmv:1090645,posts:4,views:139487,sessions:0},{rank:47,name:"mutiarahati99",level:"Lv.2",city:"Bantul",gmv:984789,posts:36,views:219892,sessions:0},{rank:48,name:"renialn",level:"Lv.2",city:"Karanganyar",gmv:979333,posts:63,views:378380,sessions:0},{rank:49,name:"urraaaaa03",level:"Lv.1",city:"Indragiri Hilir",gmv:965940,posts:108,views:29623,sessions:0},{rank:50,name:"anditukangpromo",level:"Lv.2",city:"West Jakarta",gmv:932843,posts:50,views:183899,sessions:0}],
"86_w4":[{rank:1,name:"belanjarecehan_",level:"Lv.4",city:"Palembang",gmv:84955449,posts:224,views:2128300,sessions:0},{rank:2,name:"tuhfah.mlna.s_01",level:"Lv.2",city:"Malang City",gmv:11898960,posts:58,views:847429,sessions:0},{rank:3,name:"syarif_jinan",level:"Lv.3",city:"Lumajang",gmv:5518089,posts:196,views:412955,sessions:0},{rank:4,name:"hematbareng0",level:"Lv.2",city:"Palembang",gmv:5469067,posts:163,views:774147,sessions:0},{rank:5,name:"gittaevita",level:"Lv.3",city:"Banyuasin",gmv:4192840,posts:91,views:518810,sessions:0},{rank:6,name:"mspurpleeee",level:"Lv.3",city:"South Minahasa",gmv:3670499,posts:11,views:27634,sessions:0},{rank:7,name:"anditukangpromo",level:"Lv.2",city:"West Jakarta",gmv:3409794,posts:59,views:180970,sessions:0},{rank:8,name:"ysnyf_",level:"Lv.3",city:"Central Jakarta",gmv:3135513,posts:5,views:4330,sessions:0},{rank:9,name:"sobat.kuliner",level:"Lv.2",city:"North Jakarta",gmv:2705292,posts:107,views:250958,sessions:0},{rank:10,name:"cut_yusniar",level:"Lv.2",city:"Bireuen",gmv:2548814,posts:136,views:316490,sessions:0},{rank:11,name:"catheroes1992",level:"Lv.2",city:"Pangkajene Dan Kep",gmv:2314330,posts:189,views:166488,sessions:0},{rank:12,name:"ceyotravel",level:"Lv.2",city:"Central Jakarta",gmv:2205879,posts:3,views:420,sessions:0},{rank:13,name:"kwalitasbagus1",level:"Lv.4",city:"South Jakarta",gmv:1815227,posts:17,views:17944,sessions:0},{rank:14,name:"anggunnurr",level:"Lv.2",city:"Sukabumi City",gmv:1784451,posts:18,views:148151,sessions:0},{rank:15,name:"sylvlogy",level:"Lv.1",city:"West Jakarta",gmv:1768043,posts:39,views:11904,sessions:0},{rank:16,name:"marius_purba_channel",level:"Lv.2",city:"Medan",gmv:1704938,posts:114,views:90129,sessions:0},{rank:17,name:"nnahasa",level:"Lv.1",city:"Kuningan",gmv:1665777,posts:16,views:80529,sessions:0},{rank:18,name:"syarif_jinan",level:"Lv.3",city:"Jember",gmv:1648402,posts:91,views:268211,sessions:0},{rank:19,name:"hierozone",level:"Lv.2",city:"Sidoarjo",gmv:1626923,posts:120,views:226263,sessions:0},{rank:20,name:"ayusrg19",level:"Lv.4",city:"Bekasi",gmv:1622392,posts:52,views:113462,sessions:0},{rank:21,name:"rahmatreal_",level:"Lv.4",city:"Gowa",gmv:1562313,posts:255,views:326699,sessions:0},{rank:22,name:"pramudi.santi",level:"Lv.1",city:"Magelang",gmv:1519453,posts:124,views:40755,sessions:0},{rank:23,name:"sayalarimba",level:"Lv.2",city:"South Jakarta",gmv:1479613,posts:15,views:4399268,sessions:0},{rank:24,name:"glattris",level:"Lv.3",city:"Sidoarjo",gmv:1369299,posts:44,views:154050,sessions:0},{rank:25,name:"kak_nop",level:"Lv.2",city:"Palembang",gmv:1292078,posts:89,views:85896,sessions:0},{rank:26,name:"andiyus87",level:"Lv.2",city:"Bone",gmv:1278517,posts:27,views:249647,sessions:0},{rank:27,name:"dlyfaaa",level:"Lv.2",city:"Rokan Hilir",gmv:1266610,posts:12,views:24909,sessions:0},{rank:28,name:"azysinuhaji2",level:"Lv.2",city:"Denpasar",gmv:1233045,posts:13,views:81944,sessions:0},{rank:29,name:"jejakdikota",level:"Lv.2",city:"Kediri",gmv:1166254,posts:62,views:175284,sessions:0},{rank:30,name:"febty01",level:"Lv.2",city:"Mesuji",gmv:1130448,posts:95,views:55485,sessions:0},{rank:31,name:"alvi_hasani",level:"Lv.1",city:"Garut",gmv:1105229,posts:142,views:53905,sessions:0},{rank:32,name:"udaudasad",level:"Lv.2",city:"Lima Puluh Kota",gmv:1104558,posts:4,views:26007,sessions:0},{rank:33,name:"yukbisayukkk6",level:"Lv.1",city:"Trenggalek",gmv:1093134,posts:36,views:87508,sessions:0},{rank:34,name:"ridwan.ridho06",level:"Lv.1",city:"Takalar",gmv:1067277,posts:13,views:46167,sessions:0},{rank:35,name:"vhii1130",level:"Lv.2",city:"Gunungsitoli",gmv:1065021,posts:52,views:23102,sessions:0},{rank:36,name:"renialn",level:"Lv.2",city:"Karanganyar",gmv:1055392,posts:52,views:225603,sessions:0},{rank:37,name:"me.cahaya",level:"Lv.3",city:"Makassar",gmv:1050978,posts:77,views:241547,sessions:0},{rank:38,name:"marshallong",level:"Lv.2",city:"Bogor",gmv:973123,posts:15,views:42192,sessions:0},{rank:39,name:"tienfp_",level:"Lv.1",city:"Pematangsiantar",gmv:932381,posts:18,views:237831,sessions:0},{rank:40,name:"maipicks_",level:"Lv.2",city:"South Jakarta",gmv:906542,posts:124,views:171900,sessions:0},{rank:41,name:"niasndy_",level:"Lv.2",city:"Tulungagung",gmv:872219,posts:23,views:178724,sessions:0},{rank:42,name:"adinnnnnnn38",level:"Lv.1",city:"Dharmasraya",gmv:862867,posts:24,views:17172,sessions:0},{rank:43,name:"ghiskashakayla",level:"Lv.1",city:"Depok",gmv:827982,posts:94,views:13986,sessions:0},{rank:44,name:"meilaniwe94",level:"Lv.2",city:"Surabaya",gmv:787843,posts:227,views:62006,sessions:0},{rank:45,name:"tastematcha",level:"Lv.1",city:"West Jakarta",gmv:780901,posts:26,views:42460,sessions:0},{rank:46,name:"ulfah_111",level:"Lv.1",city:"Banyuasin",gmv:773762,posts:146,views:275728,sessions:0},{rank:47,name:"elel_store1",level:"Lv.1",city:"West Tanjung Jabun",gmv:759288,posts:71,views:40645,sessions:0},{rank:48,name:"azzahraaa0105",level:"Lv.1",city:"Bandar Lampung",gmv:755893,posts:50,views:28138,sessions:0},{rank:49,name:"niekhendevita57",level:"Lv.1",city:"Karawang",gmv:752574,posts:122,views:60227,sessions:0},{rank:50,name:"ariffirmanew",level:"Lv.1",city:"Kediri City",gmv:740587,posts:10,views:161805,sessions:0}],
"monthly_76":[{rank:1,name:"belanjarecehan_",level:"Lv.4",city:"Palembang",gmv:430081265,posts:799,views:22547001,sessions:0},{rank:2,name:"tuhfah.mlna.s_01",level:"Lv.3",city:"Malang City",gmv:71912744,posts:288,views:8265759,sessions:0},{rank:3,name:"udaudasad",level:"Lv.2",city:"Lima Puluh Kota",gmv:36642520,posts:40,views:3503893,sessions:0},{rank:4,name:"cut_yusniar",level:"Lv.2",city:"Bireuen",gmv:19267875,posts:778,views:1976646,sessions:0},{rank:5,name:"syarif_jinan",level:"Lv.3",city:"Jember",gmv:15453930,posts:690,views:2569362,sessions:0},{rank:6,name:"gittaevita",level:"Lv.4",city:"Banyuasin",gmv:15423276,posts:93,views:945973,sessions:0},{rank:7,name:"tuhfah.mlna.s_01",level:"Lv.2",city:"Malang City",gmv:11898960,posts:58,views:847429,sessions:0},{rank:8,name:"anditukangpromo",level:"Lv.2",city:"West Jakarta",gmv:11749733,posts:263,views:983821,sessions:0},{rank:9,name:"catheroes1992",level:"Lv.2",city:"Pangkajene Dan Kep",gmv:11701056,posts:1054,views:1050439,sessions:0},{rank:10,name:"hematbareng0",level:"Lv.2",city:"Palembang",gmv:10903491,posts:644,views:1910713,sessions:0},{rank:11,name:"tuhfah.mlna.s_01",level:"Lv.4",city:"Malang City",gmv:10227630,posts:180,views:1864165,sessions:0},{rank:12,name:"gittaevita",level:"Lv.3",city:"Banyuasin",gmv:9635547,posts:242,views:2399308,sessions:0},{rank:13,name:"sobat.kuliner",level:"Lv.2",city:"North Jakarta",gmv:9484059,posts:326,views:778724,sessions:0},{rank:14,name:"ysnyf_",level:"Lv.3",city:"Central Jakarta",gmv:9359143,posts:16,views:14504,sessions:0},{rank:15,name:"elel_store1",level:"Lv.2",city:"West Tanjung Jabun",gmv:9243782,posts:638,views:789169,sessions:0},{rank:16,name:"ayusrg19",level:"Lv.4",city:"Bekasi",gmv:9134463,posts:149,views:757105,sessions:0},{rank:17,name:"syarif_jinan",level:"Lv.3",city:"Lumajang",gmv:8865132,posts:468,views:1026858,sessions:0},{rank:18,name:"mayamakan_29",level:"Lv.2",city:"Bogor",gmv:8764726,posts:233,views:2503008,sessions:0},{rank:19,name:"me.cahaya",level:"Lv.3",city:"Makassar",gmv:8379635,posts:280,views:1457455,sessions:0},{rank:20,name:"marius_purba_channel",level:"Lv.2",city:"Medan",gmv:7505398,posts:472,views:499672,sessions:0},{rank:21,name:"jalanhematbanget",level:"Lv.2",city:"Bogor",gmv:7386273,posts:4040,views:1244063,sessions:0},{rank:22,name:"itslingga",level:"Lv.2",city:"Tangerang",gmv:7212547,posts:9,views:246915,sessions:0},{rank:23,name:"andiyus87",level:"Lv.2",city:"Bone",gmv:6953574,posts:123,views:1419095,sessions:0},{rank:24,name:"babanayima",level:"Lv.3",city:"Batanghari",gmv:6840584,posts:358,views:960371,sessions:0},{rank:25,name:"cikalnajme",level:"Lv.2",city:"Depok",gmv:6536994,posts:4,views:56422,sessions:0},{rank:26,name:"glattris",level:"Lv.3",city:"Sidoarjo",gmv:6472879,posts:228,views:2986504,sessions:0},{rank:27,name:"itslingga",level:"Lv.1",city:"Tangerang",gmv:6023011,posts:13,views:401107,sessions:0},{rank:28,name:"spillshopee.terracun",level:"Lv.2",city:"Kubu Raya",gmv:5861864,posts:219,views:172835,sessions:0},{rank:29,name:"kiiwkiiiiw_",level:"Lv.2",city:"Rokan Hilir",gmv:5825673,posts:354,views:986984,sessions:0},{rank:30,name:"rahmatreal_",level:"Lv.4",city:"Gowa",gmv:5290625,posts:941,views:1124278,sessions:0},{rank:31,name:"heyitsaghnia",level:"Lv.2",city:"Boyolali",gmv:5184350,posts:57,views:400984,sessions:0},{rank:32,name:"nafia.kediri",level:"Lv.2",city:"Kediri",gmv:5070107,posts:113,views:869779,sessions:0},{rank:33,name:"ceyotravel",level:"Lv.2",city:"South Jakarta",gmv:5035026,posts:2,views:1613,sessions:0},{rank:34,name:"mamanyaune",level:"Lv.1",city:"Payakumbuh",gmv:4755037,posts:18,views:130870,sessions:0},{rank:35,name:"ysnyf_",level:"Lv.3",city:"Batam",gmv:4416525,posts:9,views:8270,sessions:0},{rank:36,name:"dailylifemeufood",level:"Lv.2",city:"Medan",gmv:4349811,posts:6,views:19141,sessions:0},{rank:37,name:"ekasafiraa_",level:"Lv.4",city:"Batam",gmv:4275944,posts:123,views:557612,sessions:0},{rank:38,name:"ceyotravel",level:"Lv.2",city:"Central Jakarta",gmv:4180390,posts:15,views:1884,sessions:0},{rank:39,name:"wadidawbroo",level:"Lv.2",city:"Tebo",gmv:4174739,posts:338,views:1900603,sessions:0},{rank:40,name:"ekasafiraa_",level:"Lv.3",city:"Batam",gmv:4068807,posts:49,views:178510,sessions:0},{rank:41,name:"strawbeyrose",level:"Lv.2",city:"Malang",gmv:4016588,posts:307,views:253122,sessions:0},{rank:42,name:"sayalarimba",level:"Lv.2",city:"South Jakarta",gmv:3977114,posts:48,views:14309932,sessions:0},{rank:43,name:"kak_nop",level:"Lv.2",city:"Palembang",gmv:3860957,posts:481,views:769543,sessions:0},{rank:44,name:"kwalitasbagus1",level:"Lv.4",city:"South Jakarta",gmv:3773788,posts:76,views:203540,sessions:0},{rank:45,name:"gabriellcova",level:"Lv.2",city:"South Lampung",gmv:3731275,posts:78,views:166549,sessions:0},{rank:46,name:"mspurpleeee",level:"Lv.3",city:"South Minahasa",gmv:3670499,posts:23,views:70751,sessions:0},{rank:47,name:"yukbisayukkk6",level:"Lv.1",city:"Trenggalek",gmv:3472276,posts:170,views:378180,sessions:0},{rank:48,name:"mayamakan_29",level:"Lv.1",city:"Bogor",gmv:3076127,posts:90,views:506506,sessions:0},{rank:49,name:"by.riskaah",level:"Lv.2",city:"Pasaman",gmv:3017485,posts:27,views:31519,sessions:0},{rank:50,name:"sobat.kuliner",level:"Lv.2",city:"Bandung City",gmv:3016612,posts:143,views:374319,sessions:0}],
"monthly_83":[{rank:1,name:"belanjarecehan_",level:"Lv.4",city:"Palembang",gmv:430081265,posts:799,views:22547001,sessions:0},{rank:2,name:"tuhfah.mlna.s_01",level:"Lv.3",city:"Malang City",gmv:71912744,posts:288,views:8265759,sessions:0},{rank:3,name:"udaudasad",level:"Lv.2",city:"Lima Puluh Kota",gmv:36642520,posts:40,views:3503893,sessions:0},{rank:4,name:"cut_yusniar",level:"Lv.2",city:"Bireuen",gmv:19267875,posts:778,views:1976646,sessions:0},{rank:5,name:"syarif_jinan",level:"Lv.3",city:"Jember",gmv:15453930,posts:690,views:2569362,sessions:0},{rank:6,name:"gittaevita",level:"Lv.4",city:"Banyuasin",gmv:15423276,posts:93,views:945973,sessions:0},{rank:7,name:"tuhfah.mlna.s_01",level:"Lv.2",city:"Malang City",gmv:11898960,posts:58,views:847429,sessions:0},{rank:8,name:"anditukangpromo",level:"Lv.2",city:"West Jakarta",gmv:11749733,posts:263,views:983821,sessions:0},{rank:9,name:"catheroes1992",level:"Lv.2",city:"Pangkajene Dan Kep",gmv:11701056,posts:1054,views:1050439,sessions:0},{rank:10,name:"hematbareng0",level:"Lv.2",city:"Palembang",gmv:10903491,posts:644,views:1910713,sessions:0},{rank:11,name:"tuhfah.mlna.s_01",level:"Lv.4",city:"Malang City",gmv:10227630,posts:180,views:1864165,sessions:0},{rank:12,name:"gittaevita",level:"Lv.3",city:"Banyuasin",gmv:9635547,posts:242,views:2399308,sessions:0},{rank:13,name:"sobat.kuliner",level:"Lv.2",city:"North Jakarta",gmv:9484059,posts:326,views:778724,sessions:0},{rank:14,name:"ysnyf_",level:"Lv.3",city:"Central Jakarta",gmv:9359143,posts:16,views:14504,sessions:0},{rank:15,name:"elel_store1",level:"Lv.2",city:"West Tanjung Jabun",gmv:9243782,posts:638,views:789169,sessions:0},{rank:16,name:"ayusrg19",level:"Lv.4",city:"Bekasi",gmv:9134463,posts:149,views:757105,sessions:0},{rank:17,name:"syarif_jinan",level:"Lv.3",city:"Lumajang",gmv:8865132,posts:468,views:1026858,sessions:0},{rank:18,name:"mayamakan_29",level:"Lv.2",city:"Bogor",gmv:8764726,posts:233,views:2503008,sessions:0},{rank:19,name:"me.cahaya",level:"Lv.3",city:"Makassar",gmv:8379635,posts:280,views:1457455,sessions:0},{rank:20,name:"marius_purba_channel",level:"Lv.2",city:"Medan",gmv:7505398,posts:472,views:499672,sessions:0},{rank:21,name:"jalanhematbanget",level:"Lv.2",city:"Bogor",gmv:7386273,posts:4040,views:1244063,sessions:0},{rank:22,name:"itslingga",level:"Lv.2",city:"Tangerang",gmv:7212547,posts:9,views:246915,sessions:0},{rank:23,name:"andiyus87",level:"Lv.2",city:"Bone",gmv:6953574,posts:123,views:1419095,sessions:0},{rank:24,name:"babanayima",level:"Lv.3",city:"Batanghari",gmv:6840584,posts:358,views:960371,sessions:0},{rank:25,name:"cikalnajme",level:"Lv.2",city:"Depok",gmv:6536994,posts:4,views:56422,sessions:0},{rank:26,name:"glattris",level:"Lv.3",city:"Sidoarjo",gmv:6472879,posts:228,views:2986504,sessions:0},{rank:27,name:"itslingga",level:"Lv.1",city:"Tangerang",gmv:6023011,posts:13,views:401107,sessions:0},{rank:28,name:"spillshopee.terracun",level:"Lv.2",city:"Kubu Raya",gmv:5861864,posts:219,views:172835,sessions:0},{rank:29,name:"kiiwkiiiiw_",level:"Lv.2",city:"Rokan Hilir",gmv:5825673,posts:354,views:986984,sessions:0},{rank:30,name:"rahmatreal_",level:"Lv.4",city:"Gowa",gmv:5290625,posts:941,views:1124278,sessions:0},{rank:31,name:"heyitsaghnia",level:"Lv.2",city:"Boyolali",gmv:5184350,posts:57,views:400984,sessions:0},{rank:32,name:"nafia.kediri",level:"Lv.2",city:"Kediri",gmv:5070107,posts:113,views:869779,sessions:0},{rank:33,name:"ceyotravel",level:"Lv.2",city:"South Jakarta",gmv:5035026,posts:2,views:1613,sessions:0},{rank:34,name:"mamanyaune",level:"Lv.1",city:"Payakumbuh",gmv:4755037,posts:18,views:130870,sessions:0},{rank:35,name:"ysnyf_",level:"Lv.3",city:"Batam",gmv:4416525,posts:9,views:8270,sessions:0},{rank:36,name:"dailylifemeufood",level:"Lv.2",city:"Medan",gmv:4349811,posts:6,views:19141,sessions:0},{rank:37,name:"ekasafiraa_",level:"Lv.4",city:"Batam",gmv:4275944,posts:123,views:557612,sessions:0},{rank:38,name:"ceyotravel",level:"Lv.2",city:"Central Jakarta",gmv:4180390,posts:15,views:1884,sessions:0},{rank:39,name:"wadidawbroo",level:"Lv.2",city:"Tebo",gmv:4174739,posts:338,views:1900603,sessions:0},{rank:40,name:"ekasafiraa_",level:"Lv.3",city:"Batam",gmv:4068807,posts:49,views:178510,sessions:0},{rank:41,name:"strawbeyrose",level:"Lv.2",city:"Malang",gmv:4016588,posts:307,views:253122,sessions:0},{rank:42,name:"sayalarimba",level:"Lv.2",city:"South Jakarta",gmv:3977114,posts:48,views:14309932,sessions:0},{rank:43,name:"kak_nop",level:"Lv.2",city:"Palembang",gmv:3860957,posts:481,views:769543,sessions:0},{rank:44,name:"kwalitasbagus1",level:"Lv.4",city:"South Jakarta",gmv:3773788,posts:76,views:203540,sessions:0},{rank:45,name:"gabriellcova",level:"Lv.2",city:"South Lampung",gmv:3731275,posts:78,views:166549,sessions:0},{rank:46,name:"mspurpleeee",level:"Lv.3",city:"South Minahasa",gmv:3670499,posts:23,views:70751,sessions:0},{rank:47,name:"yukbisayukkk6",level:"Lv.1",city:"Trenggalek",gmv:3472276,posts:170,views:378180,sessions:0},{rank:48,name:"mayamakan_29",level:"Lv.1",city:"Bogor",gmv:3076127,posts:90,views:506506,sessions:0},{rank:49,name:"by.riskaah",level:"Lv.2",city:"Pasaman",gmv:3017485,posts:27,views:31519,sessions:0},{rank:50,name:"sobat.kuliner",level:"Lv.2",city:"Bandung City",gmv:3016612,posts:143,views:374319,sessions:0}],
"76_t1":[{rank:1,name:"tuhfah.mlna.s_01",level:"Lv.3",city:"Malang City",gmv:71912744,posts:288,views:8265759,sessions:0}],
"76_t2":[{rank:1,name:"belanjarecehan_",level:"Lv.4",city:"Palembang",gmv:430081265,posts:799,views:22547001,sessions:0}],
"76_t3":[],
"83_t1":[{rank:1,name:"tuhfah.mlna.s_01",level:"Lv.3",city:"Malang City",gmv:71912744,posts:288,views:8265759,sessions:0}],
"83_t2":[{rank:1,name:"belanjarecehan_",level:"Lv.4",city:"Palembang",gmv:430081265,posts:799,views:22547001,sessions:0}],
"83_t3":[],
"83_t4":[],
"din_w1":[{rank:1,name:"tuhfah.mlna.s_01",level:"Lv.3",city:"Malang City",gmv:50657449,posts:126,views:5033178,sessions:0},{rank:2,name:"belanjarecehan_",level:"Lv.4",city:"Palembang",gmv:50311200,posts:145,views:1452414,sessions:0},{rank:3,name:"udaudasad",level:"Lv.2",city:"Lima Puluh Kota",gmv:21218652,posts:19,views:1889115,sessions:0},{rank:4,name:"syarif_jinan",level:"Lv.3",city:"Jember",gmv:6790371,posts:262,views:1293115,sessions:0},{rank:5,name:"itslingga",level:"Lv.2",city:"Tangerang",gmv:6390932,posts:3,views:144662,sessions:0},{rank:6,name:"elel_store1",level:"Lv.2",city:"West Tanjung Jabun",gmv:6311337,posts:267,views:403187,sessions:0},{rank:7,name:"itslingga",level:"Lv.1",city:"Tangerang",gmv:5928609,posts:2,views:136459,sessions:0},{rank:8,name:"gittaevita",level:"Lv.3",city:"Banyuasin",gmv:5367504,posts:78,views:1680380,sessions:0},{rank:9,name:"ceyotravel",level:"Lv.2",city:"South Jakarta",gmv:5035026,posts:2,views:1613,sessions:0},{rank:10,name:"cut_yusniar",level:"Lv.2",city:"Bireuen",gmv:4726390,posts:205,views:450456,sessions:0},{rank:11,name:"hematbareng0",level:"Lv.2",city:"Palembang",gmv:4224058,posts:277,views:893569,sessions:0},{rank:12,name:"ysnyf_",level:"Lv.3",city:"Central Jakarta",gmv:3723616,posts:4,views:5126,sessions:0},{rank:13,name:"andiyus87",level:"Lv.2",city:"Bone",gmv:2767368,posts:45,views:592840,sessions:0},{rank:14,name:"mayamakan_29",level:"Lv.2",city:"Bogor",gmv:2499195,posts:63,views:676598,sessions:0},{rank:15,name:"kiiwkiiiiw_",level:"Lv.2",city:"Rokan Hilir",gmv:2470523,posts:146,views:589681,sessions:0},{rank:16,name:"catheroes1992",level:"Lv.2",city:"Pangkajene Dan Kep",gmv:2248802,posts:231,views:174914,sessions:0},{rank:17,name:"alice.azahra4",level:"Lv.1",city:"Palembang",gmv:2169388,posts:31,views:358724,sessions:0},{rank:18,name:"mamanyaune",level:"Lv.1",city:"Payakumbuh",gmv:1991233,posts:4,views:5095,sessions:0},{rank:19,name:"rahmatreal_",level:"Lv.4",city:"Gowa",gmv:1944221,posts:122,views:169794,sessions:0},{rank:20,name:"kenzsepalsepil",level:"Lv.1",city:"Bandung",gmv:1856757,posts:16,views:304218,sessions:0},{rank:21,name:"gabriellcova",level:"Lv.2",city:"South Lampung",gmv:1703753,posts:21,views:45433,sessions:0},{rank:22,name:"vettiie",level:"Lv.1",city:"Bekasi",gmv:1659440,posts:62,views:126976,sessions:0},{rank:23,name:"marius_purba_channel",level:"Lv.2",city:"Medan",gmv:1653883,posts:134,views:100981,sessions:0},{rank:24,name:"anik_sept",level:"Lv.2",city:"Melawi",gmv:1617347,posts:44,views:75639,sessions:0},{rank:25,name:"taula_official",level:"Lv.1",city:"Palembang",gmv:1611470,posts:22,views:24851,sessions:0},{rank:26,name:"rookibye",level:"Lv.2",city:"West Jakarta",gmv:1378520,posts:6,views:15344,sessions:0},{rank:27,name:"shavniamastasia5",level:"Lv.2",city:"Mesuji",gmv:1278777,posts:82,views:52940,sessions:0},{rank:28,name:"inhkimmm",level:"Lv.1",city:"Tegal City",gmv:1261001,posts:8,views:182015,sessions:0},{rank:29,name:"glattris",level:"Lv.3",city:"Sidoarjo",gmv:1244289,posts:58,views:1565008,sessions:0},{rank:30,name:"anditukangpromo",level:"Lv.2",city:"West Jakarta",gmv:1195899,posts:79,views:129547,sessions:0},{rank:31,name:"wadidawbroo",level:"Lv.2",city:"Tebo",gmv:1155023,posts:90,views:478148,sessions:0},{rank:32,name:"sobat.kuliner",level:"Lv.2",city:"North Jakarta",gmv:1091005,posts:100,views:171790,sessions:0},{rank:33,name:"spillshopee.terracun",level:"Lv.1",city:"Kubu Raya",gmv:1053722,posts:212,views:298958,sessions:0},{rank:34,name:"ekasafiraa_",level:"Lv.4",city:"Batam",gmv:1050041,posts:47,views:209593,sessions:0},{rank:35,name:"jumadil.m13",level:"Lv.3",city:"Sidenreng Rappang",gmv:948010,posts:25,views:31642,sessions:0},{rank:36,name:"jalanhematbanget",level:"Lv.2",city:"Bogor",gmv:944965,posts:1169,views:203583,sessions:0},{rank:37,name:"denasepp",level:"Lv.1",city:"Tangerang",gmv:919266,posts:102,views:115186,sessions:0},{rank:38,name:"yanimegiechiean07",level:"Lv.1",city:"Pesawaran",gmv:859979,posts:22,views:9934,sessions:0},{rank:39,name:"ijalklm",level:"Lv.1",city:"Banyumas",gmv:848688,posts:7,views:329737,sessions:0},{rank:40,name:"viha561",level:"Lv.1",city:"Bekasi",gmv:836722,posts:21,views:19297,sessions:0},{rank:41,name:"azysinuhaji2",level:"Lv.2",city:"Denpasar",gmv:773812,posts:10,views:10422,sessions:0},{rank:42,name:"sayalarimba",level:"Lv.2",city:"South Jakarta",gmv:753017,posts:9,views:4751002,sessions:0},{rank:43,name:"babanayima",level:"Lv.3",city:"Batanghari",gmv:752163,posts:98,views:228154,sessions:0},{rank:44,name:"heyitsaghnia",level:"Lv.3",city:"Boyolali",gmv:751612,posts:63,views:424376,sessions:0},{rank:45,name:"me.cahaya",level:"Lv.3",city:"Makassar",gmv:727801,posts:33,views:77704,sessions:0},{rank:46,name:"retnoismii",level:"Lv.2",city:"Cirebon City",gmv:705715,posts:66,views:95209,sessions:0},{rank:47,name:"randomshop556",level:"Lv.1",city:"Nias",gmv:702846,posts:24,views:112869,sessions:0},{rank:48,name:"nafia.kediri",level:"Lv.2",city:"Kediri",gmv:651991,posts:30,views:170718,sessions:0},{rank:49,name:"uwaktanggang",level:"Lv.1",city:"Medan",gmv:647405,posts:24,views:39183,sessions:0},{rank:50,name:"neng.dhinda",level:"Lv.1",city:"Bogor City",gmv:644017,posts:2,views:79539,sessions:0}],
"acc_w1":[{rank:1,name:"tuhfah.mlna.s_01",level:"Lv.3",city:"Malang City",gmv:50657449,posts:126,views:5033178,sessions:0},{rank:2,name:"belanjarecehan_",level:"Lv.4",city:"Palembang",gmv:50311200,posts:145,views:1452414,sessions:0},{rank:3,name:"udaudasad",level:"Lv.2",city:"Lima Puluh Kota",gmv:21218652,posts:19,views:1889115,sessions:0},{rank:4,name:"syarif_jinan",level:"Lv.3",city:"Jember",gmv:6790371,posts:262,views:1293115,sessions:0},{rank:5,name:"itslingga",level:"Lv.2",city:"Tangerang",gmv:6390932,posts:3,views:144662,sessions:0},{rank:6,name:"elel_store1",level:"Lv.2",city:"West Tanjung Jabun",gmv:6311337,posts:267,views:403187,sessions:0},{rank:7,name:"itslingga",level:"Lv.1",city:"Tangerang",gmv:5928609,posts:2,views:136459,sessions:0},{rank:8,name:"gittaevita",level:"Lv.3",city:"Banyuasin",gmv:5367504,posts:78,views:1680380,sessions:0},{rank:9,name:"ceyotravel",level:"Lv.2",city:"South Jakarta",gmv:5035026,posts:2,views:1613,sessions:0},{rank:10,name:"cut_yusniar",level:"Lv.2",city:"Bireuen",gmv:4726390,posts:205,views:450456,sessions:0},{rank:11,name:"hematbareng0",level:"Lv.2",city:"Palembang",gmv:4224058,posts:277,views:893569,sessions:0},{rank:12,name:"ysnyf_",level:"Lv.3",city:"Central Jakarta",gmv:3723616,posts:4,views:5126,sessions:0},{rank:13,name:"andiyus87",level:"Lv.2",city:"Bone",gmv:2767368,posts:45,views:592840,sessions:0},{rank:14,name:"mayamakan_29",level:"Lv.2",city:"Bogor",gmv:2499195,posts:63,views:676598,sessions:0},{rank:15,name:"kiiwkiiiiw_",level:"Lv.2",city:"Rokan Hilir",gmv:2470523,posts:146,views:589681,sessions:0},{rank:16,name:"catheroes1992",level:"Lv.2",city:"Pangkajene Dan Kep",gmv:2248802,posts:231,views:174914,sessions:0},{rank:17,name:"alice.azahra4",level:"Lv.1",city:"Palembang",gmv:2169388,posts:31,views:358724,sessions:0},{rank:18,name:"mamanyaune",level:"Lv.1",city:"Payakumbuh",gmv:1991233,posts:4,views:5095,sessions:0},{rank:19,name:"rahmatreal_",level:"Lv.4",city:"Gowa",gmv:1944221,posts:122,views:169794,sessions:0},{rank:20,name:"kenzsepalsepil",level:"Lv.1",city:"Bandung",gmv:1856757,posts:16,views:304218,sessions:0},{rank:21,name:"gabriellcova",level:"Lv.2",city:"South Lampung",gmv:1703753,posts:21,views:45433,sessions:0},{rank:22,name:"vettiie",level:"Lv.1",city:"Bekasi",gmv:1659440,posts:62,views:126976,sessions:0},{rank:23,name:"marius_purba_channel",level:"Lv.2",city:"Medan",gmv:1653883,posts:134,views:100981,sessions:0},{rank:24,name:"anik_sept",level:"Lv.2",city:"Melawi",gmv:1617347,posts:44,views:75639,sessions:0},{rank:25,name:"taula_official",level:"Lv.1",city:"Palembang",gmv:1611470,posts:22,views:24851,sessions:0},{rank:26,name:"rookibye",level:"Lv.2",city:"West Jakarta",gmv:1378520,posts:6,views:15344,sessions:0},{rank:27,name:"shavniamastasia5",level:"Lv.2",city:"Mesuji",gmv:1278777,posts:82,views:52940,sessions:0},{rank:28,name:"inhkimmm",level:"Lv.1",city:"Tegal City",gmv:1261001,posts:8,views:182015,sessions:0},{rank:29,name:"glattris",level:"Lv.3",city:"Sidoarjo",gmv:1244289,posts:58,views:1565008,sessions:0},{rank:30,name:"anditukangpromo",level:"Lv.2",city:"West Jakarta",gmv:1195899,posts:79,views:129547,sessions:0},{rank:31,name:"wadidawbroo",level:"Lv.2",city:"Tebo",gmv:1155023,posts:90,views:478148,sessions:0},{rank:32,name:"sobat.kuliner",level:"Lv.2",city:"North Jakarta",gmv:1091005,posts:100,views:171790,sessions:0},{rank:33,name:"spillshopee.terracun",level:"Lv.1",city:"Kubu Raya",gmv:1053722,posts:212,views:298958,sessions:0},{rank:34,name:"ekasafiraa_",level:"Lv.4",city:"Batam",gmv:1050041,posts:47,views:209593,sessions:0},{rank:35,name:"jumadil.m13",level:"Lv.3",city:"Sidenreng Rappang",gmv:948010,posts:25,views:31642,sessions:0},{rank:36,name:"jalanhematbanget",level:"Lv.2",city:"Bogor",gmv:944965,posts:1169,views:203583,sessions:0},{rank:37,name:"denasepp",level:"Lv.1",city:"Tangerang",gmv:919266,posts:102,views:115186,sessions:0},{rank:38,name:"yanimegiechiean07",level:"Lv.1",city:"Pesawaran",gmv:859979,posts:22,views:9934,sessions:0},{rank:39,name:"ijalklm",level:"Lv.1",city:"Banyumas",gmv:848688,posts:7,views:329737,sessions:0},{rank:40,name:"viha561",level:"Lv.1",city:"Bekasi",gmv:836722,posts:21,views:19297,sessions:0}],
"ttd_w1":[{rank:1,name:"jalanhematbanget",level:"Lv.2",city:"Bogor",gmv:944965,posts:1169,views:203583,sessions:0},{rank:2,name:"dailytuffinhell",level:"Lv.2",city:"Bengkulu",gmv:0,posts:627,views:94600,sessions:0},{rank:3,name:"esi6769",level:"Lv.1",city:"Pariaman",gmv:0,posts:380,views:49683,sessions:0},{rank:4,name:"gimoimoo",level:"Lv.2",city:"Bengkulu",gmv:0,posts:369,views:55287,sessions:0},{rank:5,name:"krmla102",level:"Lv.1",city:"Indragiri Hilir",gmv:0,posts:341,views:279367,sessions:0},{rank:6,name:"jejessie12",level:"Lv.2",city:"Pasuruan",gmv:0,posts:310,views:45543,sessions:0},{rank:7,name:"terbaru_affiliatefyp",level:"Lv.1",city:"Pesawaran",gmv:0,posts:298,views:52065,sessions:0},{rank:8,name:"wowalaala",level:"Lv.1",city:"Palembang",gmv:0,posts:288,views:43696,sessions:0},{rank:9,name:"umi_sastra",level:"Lv.1",city:"Musi Rawas",gmv:0,posts:278,views:84722,sessions:0},{rank:10,name:"hematbareng0",level:"Lv.2",city:"Palembang",gmv:4224058,posts:277,views:893569,sessions:0},{rank:11,name:"elel_store1",level:"Lv.2",city:"West Tanjung Jabun",gmv:6311337,posts:267,views:403187,sessions:0},{rank:12,name:"syarif_jinan",level:"Lv.3",city:"Jember",gmv:6790371,posts:262,views:1293115,sessions:0},{rank:13,name:"nurulhabiba86",level:"Lv.1",city:"Pasuruan",gmv:0,posts:255,views:78168,sessions:0},{rank:14,name:"reandhawidiw",level:"Lv.2",city:"Palembang",gmv:0,posts:240,views:55106,sessions:0},{rank:15,name:"catheroes1992",level:"Lv.2",city:"Pangkajene Dan Kep",gmv:2248802,posts:231,views:174914,sessions:0},{rank:16,name:"smashincpum",level:"Lv.1",city:"Bandar Lampung",gmv:0,posts:215,views:95019,sessions:0},{rank:17,name:"fitriawaliyah21_",level:"Lv.2",city:"Lamongan",gmv:356001,posts:213,views:167933,sessions:0},{rank:18,name:"spillshopee.terracun",level:"Lv.1",city:"Kubu Raya",gmv:1053722,posts:212,views:298958,sessions:0},{rank:19,name:"cut_yusniar",level:"Lv.2",city:"Bireuen",gmv:4726390,posts:205,views:450456,sessions:0},{rank:20,name:"lie2sukses",level:"Lv.1",city:"Magelang",gmv:0,posts:189,views:66925,sessions:0},{rank:21,name:"roavelle.co",level:"Lv.1",city:"Sintang",gmv:504937,posts:186,views:145987,sessions:0},{rank:22,name:"mutiavzy",level:"Lv.2",city:"Palembang",gmv:0,posts:182,views:27553,sessions:0},{rank:23,name:"aji.cipluk",level:"Lv.1",city:"Pasuruan",gmv:0,posts:177,views:288326,sessions:0},{rank:24,name:"musdalifah.s_akun2",level:"Lv.0",city:"Indragiri Hilir",gmv:0,posts:175,views:52661,sessions:0},{rank:25,name:"urraaaaa03",level:"Lv.1",city:"Indragiri Hilir",gmv:0,posts:172,views:56618,sessions:0},{rank:26,name:"pencinta20makanan26",level:"Lv.1",city:"Indragiri Hilir",gmv:0,posts:171,views:24187,sessions:0},{rank:27,name:"happy.yulia8",level:"Lv.1",city:"Pasuruan",gmv:0,posts:166,views:36466,sessions:0},{rank:28,name:"candrasky13",level:"Lv.2",city:"Bandar Lampung",gmv:454659,posts:164,views:136970,sessions:0},{rank:29,name:"sarivitaa_",level:"Lv.2",city:"Sambas",gmv:83599,posts:163,views:60400,sessions:0},{rank:30,name:"adlyyyyzx",level:"Lv.1",city:"Bandar Lampung",gmv:0,posts:159,views:86603,sessions:0},{rank:31,name:"ny.agung_mei",level:"Lv.1",city:"Pasuruan",gmv:0,posts:157,views:209538,sessions:0},{rank:32,name:"sarasqy20",level:"Lv.1",city:"Palembang",gmv:0,posts:157,views:16424,sessions:0},{rank:33,name:"inisyiefa",level:"Lv.1",city:"Pasuruan",gmv:0,posts:156,views:105168,sessions:0},{rank:34,name:"meilaniwe94",level:"Lv.2",city:"Surabaya",gmv:389999,posts:154,views:77398,sessions:0},{rank:35,name:"hiiswifties",level:"Lv.1",city:"Melawi",gmv:0,posts:152,views:64493,sessions:0},{rank:36,name:"akunkeduajenongtv",level:"Lv.1",city:"Sukabumi City",gmv:0,posts:151,views:37628,sessions:0},{rank:37,name:"kiiwkiiiiw_",level:"Lv.2",city:"Rokan Hilir",gmv:2470523,posts:146,views:589681,sessions:0},{rank:38,name:"belanjarecehan_",level:"Lv.4",city:"Palembang",gmv:50311200,posts:145,views:1452414,sessions:0},{rank:39,name:"wiuwiuwiu655",level:"Lv.1",city:"West Tanjung Jabun",gmv:433110,posts:144,views:124941,sessions:0},{rank:40,name:"a_mhr3",level:"Lv.1",city:"Banda Aceh",gmv:0,posts:142,views:27266,sessions:0}],
"din_w2":[{rank:1,name:"belanjarecehan_",level:"Lv.4",city:"Palembang",gmv:194230932,posts:203,views:9668494,sessions:0},{rank:2,name:"tuhfah.mlna.s_01",level:"Lv.3",city:"Malang City",gmv:21255295,posts:162,views:3232581,sessions:0},{rank:3,name:"udaudasad",level:"Lv.2",city:"Lima Puluh Kota",gmv:14224305,posts:11,views:1576390,sessions:0},{rank:4,name:"cut_yusniar",level:"Lv.2",city:"Bireuen",gmv:7644941,posts:226,views:785846,sessions:0},{rank:5,name:"cikalnajme",level:"Lv.2",city:"Depok",gmv:6536994,posts:4,views:56422,sessions:0},{rank:6,name:"anditukangpromo",level:"Lv.2",city:"West Jakarta",gmv:6211197,posts:75,views:489405,sessions:0},{rank:7,name:"heyitsaghnia",level:"Lv.2",city:"Boyolali",gmv:4857766,posts:21,views:40889,sessions:0},{rank:8,name:"sobat.kuliner",level:"Lv.2",city:"North Jakarta",gmv:4525625,posts:57,views:228806,sessions:0},{rank:9,name:"ysnyf_",level:"Lv.3",city:"Batam",gmv:4416525,posts:6,views:4352,sessions:0},{rank:10,name:"dailylifemeufood",level:"Lv.2",city:"Medan",gmv:4349811,posts:4,views:14859,sessions:0},{rank:11,name:"me.cahaya",level:"Lv.3",city:"Makassar",gmv:4315901,posts:111,views:596811,sessions:0},{rank:12,name:"syarif_jinan",level:"Lv.3",city:"Jember",gmv:3582002,posts:161,views:510121,sessions:0},{rank:13,name:"kiiwkiiiiw_",level:"Lv.2",city:"Rokan Hilir",gmv:3355150,posts:117,views:276658,sessions:0},{rank:14,name:"jalanhematbanget",level:"Lv.2",city:"Bogor",gmv:2929479,posts:952,views:305697,sessions:0},{rank:15,name:"evitakamal",level:"Lv.2",city:"West Jakarta",gmv:2862316,posts:24,views:88688,sessions:0},{rank:16,name:"ayusrg19",level:"Lv.4",city:"Bekasi",gmv:2723449,posts:73,views:207646,sessions:0},{rank:17,name:"elel_store1",level:"Lv.2",city:"West Tanjung Jabun",gmv:2686694,posts:207,views:341448,sessions:0},{rank:18,name:"by.riskaah",level:"Lv.2",city:"Pasaman",gmv:2659237,posts:4,views:14357,sessions:0},{rank:19,name:"marius_purba_channel",level:"Lv.2",city:"Medan",gmv:2587264,posts:134,views:212679,sessions:0},{rank:20,name:"babanayima",level:"Lv.3",city:"Batanghari",gmv:2534887,posts:108,views:317175,sessions:0},{rank:21,name:"catheroes1992",level:"Lv.2",city:"Pangkajene Dan Kep",gmv:2206926,posts:232,views:286496,sessions:0},{rank:22,name:"jejessie12",level:"Lv.2",city:"Pasuruan",gmv:2084867,posts:348,views:228856,sessions:0},{rank:23,name:"irwansengeti",level:"Lv.3",city:"Muaro Jambi",gmv:2032600,posts:32,views:188666,sessions:0},{rank:24,name:"andiyus87",level:"Lv.2",city:"Bone",gmv:2001492,posts:28,views:405501,sessions:0},{rank:25,name:"ceyotravel",level:"Lv.2",city:"Central Jakarta",gmv:1974511,posts:4,views:831,sessions:0},{rank:26,name:"kwalitasbagus1",level:"Lv.4",city:"South Jakarta",gmv:1958561,posts:15,views:73221,sessions:0},{rank:27,name:"fitriawaliyah21_",level:"Lv.1",city:"Lamongan",gmv:1902288,posts:136,views:1099608,sessions:0},{rank:28,name:"aku.owl",level:"Lv.1",city:"Padang",gmv:1885013,posts:89,views:98411,sessions:0},{rank:29,name:"gabriellcova",level:"Lv.2",city:"South Lampung",gmv:1813303,posts:19,views:70777,sessions:0},{rank:30,name:"strawbeyrose",level:"Lv.2",city:"Malang",gmv:1805708,posts:61,views:54974,sessions:0},{rank:31,name:"ekasafiraa_",level:"Lv.3",city:"Batam",gmv:1803355,posts:21,views:60159,sessions:0},{rank:32,name:"nanaabdul_17",level:"Lv.3",city:"Sidoarjo",gmv:1746069,posts:2,views:13541,sessions:0},{rank:33,name:"teduhruang",level:"Lv.2",city:"Bantul",gmv:1674560,posts:7,views:15996,sessions:0},{rank:34,name:"meilaniwe94",level:"Lv.2",city:"Surabaya",gmv:1647991,posts:235,views:115347,sessions:0},{rank:35,name:"ra.shop1995",level:"Lv.1",city:"Semarang City",gmv:1623710,posts:93,views:126647,sessions:0},{rank:36,name:"yukbisayukkk6",level:"Lv.1",city:"Trenggalek",gmv:1615098,posts:81,views:148342,sessions:0},{rank:37,name:"lambehotelier",level:"Lv.2",city:"Semarang City",gmv:1566469,posts:41,views:142306,sessions:0},{rank:38,name:"shavniamastasia5",level:"Lv.2",city:"Mesuji",gmv:1524913,posts:74,views:46133,sessions:0},{rank:39,name:"nafia.kediri",level:"Lv.1",city:"Kediri",gmv:1514302,posts:22,views:136004,sessions:0},{rank:40,name:"wadidawbroo",level:"Lv.2",city:"Tebo",gmv:1486210,posts:81,views:651943,sessions:0},{rank:41,name:"gittaevita",level:"Lv.4",city:"Banyuasin",gmv:1399998,posts:46,views:262591,sessions:0},{rank:42,name:"celsfoodiary",level:"Lv.1",city:"South Tangerang",gmv:1390262,posts:24,views:151755,sessions:0},{rank:43,name:"rahmatreal_",level:"Lv.4",city:"Gowa",gmv:1373591,posts:280,views:373810,sessions:0},{rank:44,name:"akun.promosi.10",level:"Lv.1",city:"Sleman",gmv:1249629,posts:91,views:28886,sessions:0},{rank:45,name:"eroofa",level:"Lv.2",city:"Cilacap",gmv:1249113,posts:4,views:81063,sessions:0},{rank:46,name:"mise.ya",level:"Lv.1",city:"Indramayu",gmv:1244039,posts:8,views:42666,sessions:0},{rank:47,name:"mayamakan_29",level:"Lv.1",city:"Bogor",gmv:1238606,posts:33,views:140187,sessions:0},{rank:48,name:"sayalarimba",level:"Lv.2",city:"South Jakarta",gmv:1234471,posts:10,views:2708298,sessions:0},{rank:49,name:"bunda_jamail",level:"Lv.1",city:"Tangerang",gmv:1234349,posts:6,views:37733,sessions:0},{rank:50,name:"heyitsaghnia",level:"Lv.3",city:"Boyolali",gmv:1205407,posts:30,views:151673,sessions:0}],
"acc_w2":[{rank:1,name:"belanjarecehan_",level:"Lv.4",city:"Palembang",gmv:194230932,posts:203,views:9668494,sessions:0},{rank:2,name:"tuhfah.mlna.s_01",level:"Lv.3",city:"Malang City",gmv:21255295,posts:162,views:3232581,sessions:0},{rank:3,name:"udaudasad",level:"Lv.2",city:"Lima Puluh Kota",gmv:14224305,posts:11,views:1576390,sessions:0},{rank:4,name:"cut_yusniar",level:"Lv.2",city:"Bireuen",gmv:7644941,posts:226,views:785846,sessions:0},{rank:5,name:"cikalnajme",level:"Lv.2",city:"Depok",gmv:6536994,posts:4,views:56422,sessions:0},{rank:6,name:"anditukangpromo",level:"Lv.2",city:"West Jakarta",gmv:6211197,posts:75,views:489405,sessions:0},{rank:7,name:"heyitsaghnia",level:"Lv.2",city:"Boyolali",gmv:4857766,posts:21,views:40889,sessions:0},{rank:8,name:"sobat.kuliner",level:"Lv.2",city:"North Jakarta",gmv:4525625,posts:57,views:228806,sessions:0},{rank:9,name:"ysnyf_",level:"Lv.3",city:"Batam",gmv:4416525,posts:6,views:4352,sessions:0},{rank:10,name:"dailylifemeufood",level:"Lv.2",city:"Medan",gmv:4349811,posts:4,views:14859,sessions:0},{rank:11,name:"me.cahaya",level:"Lv.3",city:"Makassar",gmv:4315901,posts:111,views:596811,sessions:0},{rank:12,name:"syarif_jinan",level:"Lv.3",city:"Jember",gmv:3582002,posts:161,views:510121,sessions:0},{rank:13,name:"kiiwkiiiiw_",level:"Lv.2",city:"Rokan Hilir",gmv:3355150,posts:117,views:276658,sessions:0},{rank:14,name:"jalanhematbanget",level:"Lv.2",city:"Bogor",gmv:2929479,posts:952,views:305697,sessions:0},{rank:15,name:"evitakamal",level:"Lv.2",city:"West Jakarta",gmv:2862316,posts:24,views:88688,sessions:0},{rank:16,name:"ayusrg19",level:"Lv.4",city:"Bekasi",gmv:2723449,posts:73,views:207646,sessions:0},{rank:17,name:"elel_store1",level:"Lv.2",city:"West Tanjung Jabun",gmv:2686694,posts:207,views:341448,sessions:0},{rank:18,name:"by.riskaah",level:"Lv.2",city:"Pasaman",gmv:2659237,posts:4,views:14357,sessions:0},{rank:19,name:"marius_purba_channel",level:"Lv.2",city:"Medan",gmv:2587264,posts:134,views:212679,sessions:0},{rank:20,name:"babanayima",level:"Lv.3",city:"Batanghari",gmv:2534887,posts:108,views:317175,sessions:0},{rank:21,name:"catheroes1992",level:"Lv.2",city:"Pangkajene Dan Kep",gmv:2206926,posts:232,views:286496,sessions:0},{rank:22,name:"jejessie12",level:"Lv.2",city:"Pasuruan",gmv:2084867,posts:348,views:228856,sessions:0},{rank:23,name:"irwansengeti",level:"Lv.3",city:"Muaro Jambi",gmv:2032600,posts:32,views:188666,sessions:0},{rank:24,name:"andiyus87",level:"Lv.2",city:"Bone",gmv:2001492,posts:28,views:405501,sessions:0},{rank:25,name:"ceyotravel",level:"Lv.2",city:"Central Jakarta",gmv:1974511,posts:4,views:831,sessions:0},{rank:26,name:"kwalitasbagus1",level:"Lv.4",city:"South Jakarta",gmv:1958561,posts:15,views:73221,sessions:0},{rank:27,name:"fitriawaliyah21_",level:"Lv.1",city:"Lamongan",gmv:1902288,posts:136,views:1099608,sessions:0},{rank:28,name:"aku.owl",level:"Lv.1",city:"Padang",gmv:1885013,posts:89,views:98411,sessions:0},{rank:29,name:"gabriellcova",level:"Lv.2",city:"South Lampung",gmv:1813303,posts:19,views:70777,sessions:0},{rank:30,name:"strawbeyrose",level:"Lv.2",city:"Malang",gmv:1805708,posts:61,views:54974,sessions:0},{rank:31,name:"ekasafiraa_",level:"Lv.3",city:"Batam",gmv:1803355,posts:21,views:60159,sessions:0},{rank:32,name:"nanaabdul_17",level:"Lv.3",city:"Sidoarjo",gmv:1746069,posts:2,views:13541,sessions:0},{rank:33,name:"teduhruang",level:"Lv.2",city:"Bantul",gmv:1674560,posts:7,views:15996,sessions:0},{rank:34,name:"meilaniwe94",level:"Lv.2",city:"Surabaya",gmv:1647991,posts:235,views:115347,sessions:0},{rank:35,name:"ra.shop1995",level:"Lv.1",city:"Semarang City",gmv:1623710,posts:93,views:126647,sessions:0},{rank:36,name:"yukbisayukkk6",level:"Lv.1",city:"Trenggalek",gmv:1615098,posts:81,views:148342,sessions:0},{rank:37,name:"lambehotelier",level:"Lv.2",city:"Semarang City",gmv:1566469,posts:41,views:142306,sessions:0},{rank:38,name:"shavniamastasia5",level:"Lv.2",city:"Mesuji",gmv:1524913,posts:74,views:46133,sessions:0},{rank:39,name:"nafia.kediri",level:"Lv.1",city:"Kediri",gmv:1514302,posts:22,views:136004,sessions:0},{rank:40,name:"wadidawbroo",level:"Lv.2",city:"Tebo",gmv:1486210,posts:81,views:651943,sessions:0}],
"ttd_w2":[{rank:1,name:"jalanhematbanget",level:"Lv.2",city:"Bogor",gmv:2929479,posts:952,views:305697,sessions:0},{rank:2,name:"esi6769",level:"Lv.1",city:"Pariaman",gmv:37900,posts:593,views:70070,sessions:0},{rank:3,name:"hierozone",level:"Lv.2",city:"Sidoarjo",gmv:209409,posts:377,views:276113,sessions:0},{rank:4,name:"jejessie12",level:"Lv.2",city:"Pasuruan",gmv:2084867,posts:348,views:228856,sessions:0},{rank:5,name:"wowalaala",level:"Lv.1",city:"Palembang",gmv:336250,posts:343,views:60721,sessions:0},{rank:6,name:"reandhawidiw",level:"Lv.2",city:"Palembang",gmv:620030,posts:314,views:113610,sessions:0},{rank:7,name:"gimoimoo",level:"Lv.2",city:"Bengkulu",gmv:975218,posts:314,views:60375,sessions:0},{rank:8,name:"rahmatreal_",level:"Lv.4",city:"Gowa",gmv:1373591,posts:280,views:373810,sessions:0},{rank:9,name:"nurulhabiba86",level:"Lv.1",city:"Pasuruan",gmv:0,posts:279,views:106858,sessions:0},{rank:10,name:"meilaniwe94",level:"Lv.2",city:"Surabaya",gmv:1647991,posts:235,views:115347,sessions:0},{rank:11,name:"catheroes1992",level:"Lv.2",city:"Pangkajene Dan Kep",gmv:2206926,posts:232,views:286496,sessions:0},{rank:12,name:"ny.agung_mei",level:"Lv.1",city:"Pasuruan",gmv:0,posts:230,views:188935,sessions:0},{rank:13,name:"radacio1125",level:"Lv.1",city:"Bandar Lampung",gmv:316323,posts:227,views:79248,sessions:0},{rank:14,name:"cut_yusniar",level:"Lv.2",city:"Bireuen",gmv:7644941,posts:226,views:785846,sessions:0},{rank:15,name:"mutiavzy",level:"Lv.2",city:"Palembang",gmv:0,posts:222,views:34775,sessions:0},{rank:16,name:"rforramaaa",level:"Lv.1",city:"Bekasi",gmv:0,posts:221,views:25191,sessions:0},{rank:17,name:"hemmmmm008",level:"Lv.1",city:"Pringsewu",gmv:0,posts:219,views:217400,sessions:0},{rank:18,name:"sarasqy20",level:"Lv.1",city:"Palembang",gmv:0,posts:207,views:28062,sessions:0},{rank:19,name:"elel_store1",level:"Lv.2",city:"West Tanjung Jabun",gmv:2686694,posts:207,views:341448,sessions:0},{rank:20,name:"belanjarecehan_",level:"Lv.4",city:"Palembang",gmv:194230932,posts:203,views:9668494,sessions:0},{rank:21,name:"umi_sastra",level:"Lv.1",city:"Musi Rawas",gmv:180001,posts:202,views:120519,sessions:0},{rank:22,name:"dailytuffinhell",level:"Lv.1",city:"Bengkulu",gmv:0,posts:202,views:32478,sessions:0},{rank:23,name:"idoymuah97",level:"Lv.1",city:"Bandar Lampung",gmv:0,posts:202,views:29199,sessions:0},{rank:24,name:"happy.yulia8",level:"Lv.1",city:"Pasuruan",gmv:0,posts:202,views:52040,sessions:0},{rank:25,name:"dailytuffinhell",level:"Lv.2",city:"Bengkulu",gmv:0,posts:202,views:101896,sessions:0},{rank:26,name:"septikatika5",level:"Lv.1",city:"North Lampung",gmv:0,posts:194,views:50698,sessions:0},{rank:27,name:"sarivitaa_",level:"Lv.2",city:"Sambas",gmv:531143,posts:192,views:80531,sessions:0},{rank:28,name:"smashincpum",level:"Lv.0",city:"Bandung",gmv:0,posts:180,views:29121,sessions:0},{rank:29,name:"racil9592",level:"Lv.1",city:"Bandar Lampung",gmv:238257,posts:170,views:32484,sessions:0},{rank:30,name:"ratufelice88",level:"Lv.1",city:"Denpasar",gmv:0,posts:170,views:42130,sessions:0},{rank:31,name:"adlyyyyzx",level:"Lv.1",city:"Bandar Lampung",gmv:303790,posts:169,views:47373,sessions:0},{rank:32,name:"lie2sukses",level:"Lv.1",city:"Magelang",gmv:0,posts:165,views:50995,sessions:0},{rank:33,name:"tuhfah.mlna.s_01",level:"Lv.3",city:"Malang City",gmv:21255295,posts:162,views:3232581,sessions:0},{rank:34,name:"syarif_jinan",level:"Lv.3",city:"Jember",gmv:3582002,posts:161,views:510121,sessions:0},{rank:35,name:"angelicazivania",level:"Lv.1",city:"Semarang City",gmv:0,posts:160,views:33702,sessions:0},{rank:36,name:"terbaru_affiliatefyp",level:"Lv.1",city:"Pesawaran",gmv:30999,posts:159,views:31534,sessions:0},{rank:37,name:"kak_nop",level:"Lv.2",city:"Palembang",gmv:880992,posts:156,views:206896,sessions:0},{rank:38,name:"ms.anss_17",level:"Lv.2",city:"Indragiri Hilir",gmv:0,posts:156,views:87203,sessions:0},{rank:39,name:"revinarialdo_",level:"Lv.0",city:"Bandar Lampung",gmv:0,posts:152,views:32844,sessions:0},{rank:40,name:"krmla102",level:"Lv.1",city:"Indragiri Hilir",gmv:0,posts:152,views:81899,sessions:0}],
"din_w3":[{rank:1,name:"belanjarecehan_",level:"Lv.4",city:"Palembang",gmv:100583683,posts:227,views:9297793,sessions:0},{rank:2,name:"gittaevita",level:"Lv.4",city:"Banyuasin",gmv:14023278,posts:42,views:680699,sessions:0},{rank:3,name:"tuhfah.mlna.s_01",level:"Lv.4",city:"Malang City",gmv:10071417,posts:152,views:1820416,sessions:0},{rank:4,name:"spillshopee.terracun",level:"Lv.2",city:"Kubu Raya",gmv:5602950,posts:118,views:106307,sessions:0},{rank:5,name:"mayamakan_29",level:"Lv.2",city:"Bogor",gmv:5103645,posts:53,views:1448023,sessions:0},{rank:6,name:"catheroes1992",level:"Lv.2",city:"Pangkajene Dan Kep",gmv:4930997,posts:402,views:422541,sessions:0},{rank:7,name:"ayusrg19",level:"Lv.4",city:"Bekasi",gmv:4788622,posts:20,views:415136,sessions:0},{rank:8,name:"cut_yusniar",level:"Lv.2",city:"Bireuen",gmv:4347730,posts:211,views:423854,sessions:0},{rank:9,name:"syarif_jinan",level:"Lv.3",city:"Jember",gmv:3433154,posts:176,views:497915,sessions:0},{rank:10,name:"babanayima",level:"Lv.3",city:"Batanghari",gmv:3165044,posts:86,views:278642,sessions:0},{rank:11,name:"glattris",level:"Lv.3",city:"Sidoarjo",gmv:2877243,posts:68,views:765358,sessions:0},{rank:12,name:"jalanhematbanget",level:"Lv.2",city:"Bogor",gmv:2846149,posts:954,views:435688,sessions:0},{rank:13,name:"nafia.kediri",level:"Lv.2",city:"Kediri",gmv:2746299,posts:49,views:485097,sessions:0},{rank:14,name:"mamanyaune",level:"Lv.1",city:"Payakumbuh",gmv:2655693,posts:8,views:115057,sessions:0},{rank:15,name:"syarif_jinan",level:"Lv.3",city:"Lumajang",gmv:2627709,posts:165,views:452139,sessions:0},{rank:16,name:"ysnyf_",level:"Lv.3",city:"Central Jakarta",gmv:2500014,posts:3,views:2203,sessions:0},{rank:17,name:"koneng.2",level:"Lv.2",city:"Karawang",gmv:2426451,posts:64,views:587232,sessions:0},{rank:18,name:"me.cahaya",level:"Lv.3",city:"Makassar",gmv:2284954,posts:59,views:541393,sessions:0},{rank:19,name:"ekasafiraa_",level:"Lv.3",city:"Batam",gmv:2265452,posts:28,views:118351,sessions:0},{rank:20,name:"koh.harry",level:"Lv.3",city:"Pringsewu",gmv:2263023,posts:47,views:88394,sessions:0},{rank:21,name:"ekasafiraa_",level:"Lv.4",city:"Batam",gmv:2202788,posts:20,views:70511,sessions:0},{rank:22,name:"strawbeyrose",level:"Lv.2",city:"Malang",gmv:2125886,posts:83,views:107324,sessions:0},{rank:23,name:"erikaa.daily",level:"Lv.1",city:"Lamongan",gmv:2018451,posts:75,views:717648,sessions:0},{rank:24,name:"sobat.kuliner",level:"Lv.2",city:"Bandung City",gmv:1954822,posts:82,views:278165,sessions:0},{rank:25,name:"hematbareng0",level:"Lv.1",city:"Palembang",gmv:1858337,posts:126,views:344316,sessions:0},{rank:26,name:"cozyescapeid",level:"Lv.2",city:"Central Jakarta",gmv:1822001,posts:9,views:20241,sessions:0},{rank:27,name:"udaudasad",level:"Lv.3",city:"Lima Puluh Kota",gmv:1780591,posts:13,views:75131,sessions:0},{rank:28,name:"vaniopi",level:"Lv.1",city:"Muaro Jambi",gmv:1750435,posts:126,views:215493,sessions:0},{rank:29,name:"mayamakan_29",level:"Lv.1",city:"Bogor",gmv:1731484,posts:38,views:357394,sessions:0},{rank:30,name:"findbyprys",level:"Lv.3",city:"West Jakarta",gmv:1713556,posts:5,views:260964,sessions:0},{rank:31,name:"kak_nop",level:"Lv.2",city:"Palembang",gmv:1687887,posts:142,views:321049,sessions:0},{rank:32,name:"marius_purba_channel",level:"Lv.2",city:"Medan",gmv:1559313,posts:90,views:95883,sessions:0},{rank:33,name:"bellarhemaagnesiaa",level:"Lv.3",city:"Semarang City",gmv:1496101,posts:19,views:122804,sessions:0},{rank:34,name:"eroofatrip",level:"Lv.1",city:"Cilacap",gmv:1484875,posts:43,views:72171,sessions:0},{rank:35,name:"imanugoz",level:"Lv.1",city:"Kuningan",gmv:1433505,posts:5,views:82538,sessions:0},{rank:36,name:"_sangbayuu",level:"Lv.3",city:"Sukoharjo",gmv:1420866,posts:5,views:23449,sessions:0},{rank:37,name:"wadidawbroo",level:"Lv.2",city:"Tebo",gmv:1357715,posts:108,views:692940,sessions:0},{rank:38,name:"rystifamily",level:"Lv.2",city:"South Jakarta",gmv:1337540,posts:40,views:342266,sessions:0},{rank:39,name:"fahrit_mufama_cetar",level:"Lv.2",city:"Medan",gmv:1315203,posts:4,views:271095,sessions:0},{rank:40,name:"onie_169",level:"Lv.2",city:"Cilacap",gmv:1302867,posts:45,views:40472,sessions:0},{rank:41,name:"tripnchill.id",level:"Lv.2",city:"Bandung City",gmv:1291582,posts:39,views:71679,sessions:0},{rank:42,name:"reviewsya0",level:"Lv.1",city:"Musi Banyuasin",gmv:1228870,posts:65,views:23438,sessions:0},{rank:43,name:"sobat.kuliner",level:"Lv.2",city:"North Jakarta",gmv:1162137,posts:62,views:127170,sessions:0},{rank:44,name:"miaelmira",level:"Lv.2",city:"Bandar Lampung",gmv:1103649,posts:39,views:86433,sessions:0},{rank:45,name:"sis.silgumush24",level:"Lv.1",city:"South Jakarta",gmv:1092436,posts:4,views:593,sessions:0},{rank:46,name:"hemarjhela",level:"Lv.1",city:"Mimika",gmv:1090645,posts:4,views:139487,sessions:0},{rank:47,name:"mutiarahati99",level:"Lv.2",city:"Bantul",gmv:984789,posts:36,views:219892,sessions:0},{rank:48,name:"renialn",level:"Lv.2",city:"Karanganyar",gmv:979333,posts:63,views:378380,sessions:0},{rank:49,name:"urraaaaa03",level:"Lv.1",city:"Indragiri Hilir",gmv:965940,posts:108,views:29623,sessions:0},{rank:50,name:"anditukangpromo",level:"Lv.2",city:"West Jakarta",gmv:932843,posts:50,views:183899,sessions:0}],
"acc_w3":[{rank:1,name:"belanjarecehan_",level:"Lv.4",city:"Palembang",gmv:100583683,posts:227,views:9297793,sessions:0},{rank:2,name:"gittaevita",level:"Lv.4",city:"Banyuasin",gmv:14023278,posts:42,views:680699,sessions:0},{rank:3,name:"tuhfah.mlna.s_01",level:"Lv.4",city:"Malang City",gmv:10071417,posts:152,views:1820416,sessions:0},{rank:4,name:"spillshopee.terracun",level:"Lv.2",city:"Kubu Raya",gmv:5602950,posts:118,views:106307,sessions:0},{rank:5,name:"mayamakan_29",level:"Lv.2",city:"Bogor",gmv:5103645,posts:53,views:1448023,sessions:0},{rank:6,name:"catheroes1992",level:"Lv.2",city:"Pangkajene Dan Kep",gmv:4930997,posts:402,views:422541,sessions:0},{rank:7,name:"ayusrg19",level:"Lv.4",city:"Bekasi",gmv:4788622,posts:20,views:415136,sessions:0},{rank:8,name:"cut_yusniar",level:"Lv.2",city:"Bireuen",gmv:4347730,posts:211,views:423854,sessions:0},{rank:9,name:"syarif_jinan",level:"Lv.3",city:"Jember",gmv:3433154,posts:176,views:497915,sessions:0},{rank:10,name:"babanayima",level:"Lv.3",city:"Batanghari",gmv:3165044,posts:86,views:278642,sessions:0},{rank:11,name:"glattris",level:"Lv.3",city:"Sidoarjo",gmv:2877243,posts:68,views:765358,sessions:0},{rank:12,name:"jalanhematbanget",level:"Lv.2",city:"Bogor",gmv:2846149,posts:954,views:435688,sessions:0},{rank:13,name:"nafia.kediri",level:"Lv.2",city:"Kediri",gmv:2746299,posts:49,views:485097,sessions:0},{rank:14,name:"mamanyaune",level:"Lv.1",city:"Payakumbuh",gmv:2655693,posts:8,views:115057,sessions:0},{rank:15,name:"syarif_jinan",level:"Lv.3",city:"Lumajang",gmv:2627709,posts:165,views:452139,sessions:0},{rank:16,name:"ysnyf_",level:"Lv.3",city:"Central Jakarta",gmv:2500014,posts:3,views:2203,sessions:0},{rank:17,name:"koneng.2",level:"Lv.2",city:"Karawang",gmv:2426451,posts:64,views:587232,sessions:0},{rank:18,name:"me.cahaya",level:"Lv.3",city:"Makassar",gmv:2284954,posts:59,views:541393,sessions:0},{rank:19,name:"ekasafiraa_",level:"Lv.3",city:"Batam",gmv:2265452,posts:28,views:118351,sessions:0},{rank:20,name:"koh.harry",level:"Lv.3",city:"Pringsewu",gmv:2263023,posts:47,views:88394,sessions:0},{rank:21,name:"ekasafiraa_",level:"Lv.4",city:"Batam",gmv:2202788,posts:20,views:70511,sessions:0},{rank:22,name:"strawbeyrose",level:"Lv.2",city:"Malang",gmv:2125886,posts:83,views:107324,sessions:0},{rank:23,name:"erikaa.daily",level:"Lv.1",city:"Lamongan",gmv:2018451,posts:75,views:717648,sessions:0},{rank:24,name:"sobat.kuliner",level:"Lv.2",city:"Bandung City",gmv:1954822,posts:82,views:278165,sessions:0},{rank:25,name:"hematbareng0",level:"Lv.1",city:"Palembang",gmv:1858337,posts:126,views:344316,sessions:0},{rank:26,name:"cozyescapeid",level:"Lv.2",city:"Central Jakarta",gmv:1822001,posts:9,views:20241,sessions:0},{rank:27,name:"udaudasad",level:"Lv.3",city:"Lima Puluh Kota",gmv:1780591,posts:13,views:75131,sessions:0},{rank:28,name:"vaniopi",level:"Lv.1",city:"Muaro Jambi",gmv:1750435,posts:126,views:215493,sessions:0},{rank:29,name:"mayamakan_29",level:"Lv.1",city:"Bogor",gmv:1731484,posts:38,views:357394,sessions:0},{rank:30,name:"findbyprys",level:"Lv.3",city:"West Jakarta",gmv:1713556,posts:5,views:260964,sessions:0},{rank:31,name:"kak_nop",level:"Lv.2",city:"Palembang",gmv:1687887,posts:142,views:321049,sessions:0},{rank:32,name:"marius_purba_channel",level:"Lv.2",city:"Medan",gmv:1559313,posts:90,views:95883,sessions:0},{rank:33,name:"bellarhemaagnesiaa",level:"Lv.3",city:"Semarang City",gmv:1496101,posts:19,views:122804,sessions:0},{rank:34,name:"eroofatrip",level:"Lv.1",city:"Cilacap",gmv:1484875,posts:43,views:72171,sessions:0},{rank:35,name:"imanugoz",level:"Lv.1",city:"Kuningan",gmv:1433505,posts:5,views:82538,sessions:0},{rank:36,name:"_sangbayuu",level:"Lv.3",city:"Sukoharjo",gmv:1420866,posts:5,views:23449,sessions:0},{rank:37,name:"wadidawbroo",level:"Lv.2",city:"Tebo",gmv:1357715,posts:108,views:692940,sessions:0},{rank:38,name:"rystifamily",level:"Lv.2",city:"South Jakarta",gmv:1337540,posts:40,views:342266,sessions:0},{rank:39,name:"fahrit_mufama_cetar",level:"Lv.2",city:"Medan",gmv:1315203,posts:4,views:271095,sessions:0},{rank:40,name:"onie_169",level:"Lv.2",city:"Cilacap",gmv:1302867,posts:45,views:40472,sessions:0}],
"ttd_w3":[{rank:1,name:"jalanhematbanget",level:"Lv.2",city:"Bogor",gmv:2846149,posts:954,views:435688,sessions:0},{rank:2,name:"esi6769",level:"Lv.1",city:"Pariaman",gmv:0,posts:624,views:73095,sessions:0},{rank:3,name:"dailytuffinhell",level:"Lv.2",city:"Bengkulu",gmv:100998,posts:534,views:321900,sessions:0},{rank:4,name:"krmla102",level:"Lv.1",city:"Indragiri Hilir",gmv:12001,posts:494,views:286610,sessions:0},{rank:5,name:"vidiomilikistianah03",level:"Lv.1",city:"Bondowoso",gmv:0,posts:416,views:113934,sessions:0},{rank:6,name:"catheroes1992",level:"Lv.2",city:"Pangkajene Dan Kep",gmv:4930997,posts:402,views:422541,sessions:0},{rank:7,name:"jejessie12",level:"Lv.2",city:"Pasuruan",gmv:0,posts:356,views:106215,sessions:0},{rank:8,name:"gimoimoo",level:"Lv.2",city:"Bengkulu",gmv:645983,posts:319,views:74008,sessions:0},{rank:9,name:"nurulhabiba86",level:"Lv.1",city:"Pasuruan",gmv:0,posts:309,views:175526,sessions:0},{rank:10,name:"reandhawidiw",level:"Lv.2",city:"Palembang",gmv:0,posts:300,views:87475,sessions:0},{rank:11,name:"wowalaala",level:"Lv.1",city:"Palembang",gmv:0,posts:287,views:20395,sessions:0},{rank:12,name:"rahmatreal_",level:"Lv.4",city:"Gowa",gmv:410500,posts:284,views:253975,sessions:0},{rank:13,name:"terbaru_affiliatefyp",level:"Lv.1",city:"Pesawaran",gmv:898336,posts:247,views:105463,sessions:0},{rank:14,name:"ny.agung_mei",level:"Lv.1",city:"Pasuruan",gmv:0,posts:244,views:199107,sessions:0},{rank:15,name:"belanjarecehan_",level:"Lv.4",city:"Palembang",gmv:100583683,posts:227,views:9297793,sessions:0},{rank:16,name:"happy.yulia8",level:"Lv.1",city:"Pasuruan",gmv:0,posts:224,views:168644,sessions:0},{rank:17,name:"cut_yusniar",level:"Lv.2",city:"Bireuen",gmv:4347730,posts:211,views:423854,sessions:0},{rank:18,name:"angelmovie_0",level:"Lv.1",city:"South Pesisir",gmv:0,posts:209,views:84281,sessions:0},{rank:19,name:"muliana3766",level:"Lv.1",city:"Indragiri Hilir",gmv:79997,posts:207,views:38122,sessions:0},{rank:20,name:"mutiavzy",level:"Lv.2",city:"Palembang",gmv:0,posts:202,views:33497,sessions:0},{rank:21,name:"ms.anss_17",level:"Lv.2",city:"Indragiri Hilir",gmv:903900,posts:201,views:127931,sessions:0},{rank:22,name:"shakilaad24",level:"Lv.1",city:"Sleman",gmv:0,posts:201,views:143349,sessions:0},{rank:23,name:"lie2sukses",level:"Lv.1",city:"Magelang",gmv:0,posts:198,views:92980,sessions:0},{rank:24,name:"gas_promo",level:"Lv.1",city:"Sleman",gmv:0,posts:194,views:13996,sessions:0},{rank:25,name:"mahendra.gazza",level:"Lv.1",city:"South Lampung",gmv:0,posts:189,views:4431,sessions:0},{rank:26,name:"meilaniwe94",level:"Lv.2",city:"Surabaya",gmv:0,posts:188,views:62833,sessions:0},{rank:27,name:"jajan.teross",level:"Lv.2",city:"Nganjuk",gmv:0,posts:184,views:100105,sessions:0},{rank:28,name:"adlyyyyzx",level:"Lv.1",city:"Bandar Lampung",gmv:0,posts:179,views:54427,sessions:0},{rank:29,name:".asepasep14",level:"Lv.1",city:"Sleman",gmv:0,posts:178,views:13851,sessions:0},{rank:30,name:"ceobandarlampung",level:"Lv.1",city:"Bandar Lampung",gmv:0,posts:178,views:26334,sessions:0},{rank:31,name:"syarif_jinan",level:"Lv.3",city:"Jember",gmv:3433154,posts:176,views:497915,sessions:0},{rank:32,name:"nulnulshp",level:"Lv.3",city:"Malang",gmv:0,posts:176,views:129329,sessions:0},{rank:33,name:"radacio1125",level:"Lv.1",city:"Bandar Lampung",gmv:0,posts:175,views:54027,sessions:0},{rank:34,name:"udandereskalibanjir",level:"Lv.1",city:"Banyuwangi",gmv:125297,posts:174,views:29240,sessions:0},{rank:35,name:"mahen_165",level:"Lv.1",city:"South Lampung",gmv:0,posts:172,views:22957,sessions:0},{rank:36,name:"dewifili",level:"Lv.1",city:"Pontianak",gmv:0,posts:172,views:24445,sessions:0},{rank:37,name:"jasmineputri010",level:"Lv.1",city:"Bandar Lampung",gmv:0,posts:168,views:49349,sessions:0},{rank:38,name:"ratufelice88",level:"Lv.1",city:"Denpasar",gmv:0,posts:166,views:22979,sessions:0},{rank:39,name:"syarif_jinan",level:"Lv.3",city:"Lumajang",gmv:2627709,posts:165,views:452139,sessions:0},{rank:40,name:"hemmmmm008",level:"Lv.1",city:"Pringsewu",gmv:0,posts:164,views:246055,sessions:0}],
"din_w4":[{rank:1,name:"belanjarecehan_",level:"Lv.4",city:"Palembang",gmv:84955449,posts:224,views:2128300,sessions:0},{rank:2,name:"tuhfah.mlna.s_01",level:"Lv.2",city:"Malang City",gmv:11898960,posts:58,views:847429,sessions:0},{rank:3,name:"syarif_jinan",level:"Lv.3",city:"Lumajang",gmv:5518089,posts:196,views:412955,sessions:0},{rank:4,name:"hematbareng0",level:"Lv.2",city:"Palembang",gmv:5469067,posts:163,views:774147,sessions:0},{rank:5,name:"gittaevita",level:"Lv.3",city:"Banyuasin",gmv:4192840,posts:91,views:518810,sessions:0},{rank:6,name:"mspurpleeee",level:"Lv.3",city:"South Minahasa",gmv:3670499,posts:11,views:27634,sessions:0},{rank:7,name:"anditukangpromo",level:"Lv.2",city:"West Jakarta",gmv:3409794,posts:59,views:180970,sessions:0},{rank:8,name:"ysnyf_",level:"Lv.3",city:"Central Jakarta",gmv:3135513,posts:5,views:4330,sessions:0},{rank:9,name:"sobat.kuliner",level:"Lv.2",city:"North Jakarta",gmv:2705292,posts:107,views:250958,sessions:0},{rank:10,name:"cut_yusniar",level:"Lv.2",city:"Bireuen",gmv:2548814,posts:136,views:316490,sessions:0},{rank:11,name:"catheroes1992",level:"Lv.2",city:"Pangkajene Dan Kep",gmv:2314330,posts:189,views:166488,sessions:0},{rank:12,name:"ceyotravel",level:"Lv.2",city:"Central Jakarta",gmv:2205879,posts:3,views:420,sessions:0},{rank:13,name:"kwalitasbagus1",level:"Lv.4",city:"South Jakarta",gmv:1815227,posts:17,views:17944,sessions:0},{rank:14,name:"anggunnurr",level:"Lv.2",city:"Sukabumi City",gmv:1784451,posts:18,views:148151,sessions:0},{rank:15,name:"sylvlogy",level:"Lv.1",city:"West Jakarta",gmv:1768043,posts:39,views:11904,sessions:0},{rank:16,name:"marius_purba_channel",level:"Lv.2",city:"Medan",gmv:1704938,posts:114,views:90129,sessions:0},{rank:17,name:"nnahasa",level:"Lv.1",city:"Kuningan",gmv:1665777,posts:16,views:80529,sessions:0},{rank:18,name:"syarif_jinan",level:"Lv.3",city:"Jember",gmv:1648402,posts:91,views:268211,sessions:0},{rank:19,name:"hierozone",level:"Lv.2",city:"Sidoarjo",gmv:1626923,posts:120,views:226263,sessions:0},{rank:20,name:"ayusrg19",level:"Lv.4",city:"Bekasi",gmv:1622392,posts:52,views:113462,sessions:0},{rank:21,name:"rahmatreal_",level:"Lv.4",city:"Gowa",gmv:1562313,posts:255,views:326699,sessions:0},{rank:22,name:"pramudi.santi",level:"Lv.1",city:"Magelang",gmv:1519453,posts:124,views:40755,sessions:0},{rank:23,name:"sayalarimba",level:"Lv.2",city:"South Jakarta",gmv:1479613,posts:15,views:4399268,sessions:0},{rank:24,name:"glattris",level:"Lv.3",city:"Sidoarjo",gmv:1369299,posts:44,views:154050,sessions:0},{rank:25,name:"kak_nop",level:"Lv.2",city:"Palembang",gmv:1292078,posts:89,views:85896,sessions:0},{rank:26,name:"andiyus87",level:"Lv.2",city:"Bone",gmv:1278517,posts:27,views:249647,sessions:0},{rank:27,name:"dlyfaaa",level:"Lv.2",city:"Rokan Hilir",gmv:1266610,posts:12,views:24909,sessions:0},{rank:28,name:"azysinuhaji2",level:"Lv.2",city:"Denpasar",gmv:1233045,posts:13,views:81944,sessions:0},{rank:29,name:"jejakdikota",level:"Lv.2",city:"Kediri",gmv:1166254,posts:62,views:175284,sessions:0},{rank:30,name:"febty01",level:"Lv.2",city:"Mesuji",gmv:1130448,posts:95,views:55485,sessions:0},{rank:31,name:"alvi_hasani",level:"Lv.1",city:"Garut",gmv:1105229,posts:142,views:53905,sessions:0},{rank:32,name:"udaudasad",level:"Lv.2",city:"Lima Puluh Kota",gmv:1104558,posts:4,views:26007,sessions:0},{rank:33,name:"yukbisayukkk6",level:"Lv.1",city:"Trenggalek",gmv:1093134,posts:36,views:87508,sessions:0},{rank:34,name:"ridwan.ridho06",level:"Lv.1",city:"Takalar",gmv:1067277,posts:13,views:46167,sessions:0},{rank:35,name:"vhii1130",level:"Lv.2",city:"Gunungsitoli",gmv:1065021,posts:52,views:23102,sessions:0},{rank:36,name:"renialn",level:"Lv.2",city:"Karanganyar",gmv:1055392,posts:52,views:225603,sessions:0},{rank:37,name:"me.cahaya",level:"Lv.3",city:"Makassar",gmv:1050978,posts:77,views:241547,sessions:0},{rank:38,name:"marshallong",level:"Lv.2",city:"Bogor",gmv:973123,posts:15,views:42192,sessions:0},{rank:39,name:"tienfp_",level:"Lv.1",city:"Pematangsiantar",gmv:932381,posts:18,views:237831,sessions:0},{rank:40,name:"maipicks_",level:"Lv.2",city:"South Jakarta",gmv:906542,posts:124,views:171900,sessions:0},{rank:41,name:"niasndy_",level:"Lv.2",city:"Tulungagung",gmv:872219,posts:23,views:178724,sessions:0},{rank:42,name:"adinnnnnnn38",level:"Lv.1",city:"Dharmasraya",gmv:862867,posts:24,views:17172,sessions:0},{rank:43,name:"ghiskashakayla",level:"Lv.1",city:"Depok",gmv:827982,posts:94,views:13986,sessions:0},{rank:44,name:"meilaniwe94",level:"Lv.2",city:"Surabaya",gmv:787843,posts:227,views:62006,sessions:0},{rank:45,name:"tastematcha",level:"Lv.1",city:"West Jakarta",gmv:780901,posts:26,views:42460,sessions:0},{rank:46,name:"ulfah_111",level:"Lv.1",city:"Banyuasin",gmv:773762,posts:146,views:275728,sessions:0},{rank:47,name:"elel_store1",level:"Lv.1",city:"West Tanjung Jabun",gmv:759288,posts:71,views:40645,sessions:0},{rank:48,name:"azzahraaa0105",level:"Lv.1",city:"Bandar Lampung",gmv:755893,posts:50,views:28138,sessions:0},{rank:49,name:"niekhendevita57",level:"Lv.1",city:"Karawang",gmv:752574,posts:122,views:60227,sessions:0},{rank:50,name:"ariffirmanew",level:"Lv.1",city:"Kediri City",gmv:740587,posts:10,views:161805,sessions:0}],
"acc_w4":[{rank:1,name:"belanjarecehan_",level:"Lv.4",city:"Palembang",gmv:84955449,posts:224,views:2128300,sessions:0},{rank:2,name:"tuhfah.mlna.s_01",level:"Lv.2",city:"Malang City",gmv:11898960,posts:58,views:847429,sessions:0},{rank:3,name:"syarif_jinan",level:"Lv.3",city:"Lumajang",gmv:5518089,posts:196,views:412955,sessions:0},{rank:4,name:"hematbareng0",level:"Lv.2",city:"Palembang",gmv:5469067,posts:163,views:774147,sessions:0},{rank:5,name:"gittaevita",level:"Lv.3",city:"Banyuasin",gmv:4192840,posts:91,views:518810,sessions:0},{rank:6,name:"mspurpleeee",level:"Lv.3",city:"South Minahasa",gmv:3670499,posts:11,views:27634,sessions:0},{rank:7,name:"anditukangpromo",level:"Lv.2",city:"West Jakarta",gmv:3409794,posts:59,views:180970,sessions:0},{rank:8,name:"ysnyf_",level:"Lv.3",city:"Central Jakarta",gmv:3135513,posts:5,views:4330,sessions:0},{rank:9,name:"sobat.kuliner",level:"Lv.2",city:"North Jakarta",gmv:2705292,posts:107,views:250958,sessions:0},{rank:10,name:"cut_yusniar",level:"Lv.2",city:"Bireuen",gmv:2548814,posts:136,views:316490,sessions:0},{rank:11,name:"catheroes1992",level:"Lv.2",city:"Pangkajene Dan Kep",gmv:2314330,posts:189,views:166488,sessions:0},{rank:12,name:"ceyotravel",level:"Lv.2",city:"Central Jakarta",gmv:2205879,posts:3,views:420,sessions:0},{rank:13,name:"kwalitasbagus1",level:"Lv.4",city:"South Jakarta",gmv:1815227,posts:17,views:17944,sessions:0},{rank:14,name:"anggunnurr",level:"Lv.2",city:"Sukabumi City",gmv:1784451,posts:18,views:148151,sessions:0},{rank:15,name:"sylvlogy",level:"Lv.1",city:"West Jakarta",gmv:1768043,posts:39,views:11904,sessions:0},{rank:16,name:"marius_purba_channel",level:"Lv.2",city:"Medan",gmv:1704938,posts:114,views:90129,sessions:0},{rank:17,name:"nnahasa",level:"Lv.1",city:"Kuningan",gmv:1665777,posts:16,views:80529,sessions:0},{rank:18,name:"syarif_jinan",level:"Lv.3",city:"Jember",gmv:1648402,posts:91,views:268211,sessions:0},{rank:19,name:"hierozone",level:"Lv.2",city:"Sidoarjo",gmv:1626923,posts:120,views:226263,sessions:0},{rank:20,name:"ayusrg19",level:"Lv.4",city:"Bekasi",gmv:1622392,posts:52,views:113462,sessions:0},{rank:21,name:"rahmatreal_",level:"Lv.4",city:"Gowa",gmv:1562313,posts:255,views:326699,sessions:0},{rank:22,name:"pramudi.santi",level:"Lv.1",city:"Magelang",gmv:1519453,posts:124,views:40755,sessions:0},{rank:23,name:"sayalarimba",level:"Lv.2",city:"South Jakarta",gmv:1479613,posts:15,views:4399268,sessions:0},{rank:24,name:"glattris",level:"Lv.3",city:"Sidoarjo",gmv:1369299,posts:44,views:154050,sessions:0},{rank:25,name:"kak_nop",level:"Lv.2",city:"Palembang",gmv:1292078,posts:89,views:85896,sessions:0},{rank:26,name:"andiyus87",level:"Lv.2",city:"Bone",gmv:1278517,posts:27,views:249647,sessions:0},{rank:27,name:"dlyfaaa",level:"Lv.2",city:"Rokan Hilir",gmv:1266610,posts:12,views:24909,sessions:0},{rank:28,name:"azysinuhaji2",level:"Lv.2",city:"Denpasar",gmv:1233045,posts:13,views:81944,sessions:0},{rank:29,name:"jejakdikota",level:"Lv.2",city:"Kediri",gmv:1166254,posts:62,views:175284,sessions:0},{rank:30,name:"febty01",level:"Lv.2",city:"Mesuji",gmv:1130448,posts:95,views:55485,sessions:0},{rank:31,name:"alvi_hasani",level:"Lv.1",city:"Garut",gmv:1105229,posts:142,views:53905,sessions:0},{rank:32,name:"udaudasad",level:"Lv.2",city:"Lima Puluh Kota",gmv:1104558,posts:4,views:26007,sessions:0},{rank:33,name:"yukbisayukkk6",level:"Lv.1",city:"Trenggalek",gmv:1093134,posts:36,views:87508,sessions:0},{rank:34,name:"ridwan.ridho06",level:"Lv.1",city:"Takalar",gmv:1067277,posts:13,views:46167,sessions:0},{rank:35,name:"vhii1130",level:"Lv.2",city:"Gunungsitoli",gmv:1065021,posts:52,views:23102,sessions:0},{rank:36,name:"renialn",level:"Lv.2",city:"Karanganyar",gmv:1055392,posts:52,views:225603,sessions:0},{rank:37,name:"me.cahaya",level:"Lv.3",city:"Makassar",gmv:1050978,posts:77,views:241547,sessions:0},{rank:38,name:"marshallong",level:"Lv.2",city:"Bogor",gmv:973123,posts:15,views:42192,sessions:0},{rank:39,name:"tienfp_",level:"Lv.1",city:"Pematangsiantar",gmv:932381,posts:18,views:237831,sessions:0},{rank:40,name:"maipicks_",level:"Lv.2",city:"South Jakarta",gmv:906542,posts:124,views:171900,sessions:0}],
"ttd_w4":[{rank:1,name:"jalanhematbanget",level:"Lv.2",city:"Bogor",gmv:665679,posts:965,views:299095,sessions:0},{rank:2,name:"akunkeduajenongtv",level:"Lv.1",city:"Sukabumi City",gmv:0,posts:400,views:106480,sessions:0},{rank:3,name:"racil9592",level:"Lv.1",city:"Bandar Lampung",gmv:0,posts:383,views:56227,sessions:0},{rank:4,name:"ratufelice88",level:"Lv.1",city:"Denpasar",gmv:80646,posts:356,views:230810,sessions:0},{rank:5,name:"dailytuffinhell",level:"Lv.2",city:"Bengkulu",gmv:0,posts:356,views:46079,sessions:0},{rank:6,name:"jejessie12",level:"Lv.2",city:"Pasuruan",gmv:0,posts:351,views:54696,sessions:0},{rank:7,name:"reandhawidiw",level:"Lv.2",city:"Palembang",gmv:604091,posts:337,views:138662,sessions:0},{rank:8,name:"jelitsvd0i8",level:"Lv.1",city:"Bandar Lampung",gmv:43500,posts:331,views:4275,sessions:0},{rank:9,name:"esi6769",level:"Lv.1",city:"Pariaman",gmv:0,posts:317,views:33620,sessions:0},{rank:10,name:"angelicazivania",level:"Lv.1",city:"Semarang City",gmv:0,posts:309,views:71372,sessions:0},{rank:11,name:"happy.yulia8",level:"Lv.1",city:"Pasuruan",gmv:498768,posts:299,views:106638,sessions:0},{rank:12,name:"terbaru_affiliatefyp",level:"Lv.1",city:"Pesawaran",gmv:0,posts:298,views:59057,sessions:0},{rank:13,name:"vidiomilikistianah03",level:"Lv.1",city:"Bondowoso",gmv:0,posts:291,views:108381,sessions:0},{rank:14,name:"nurulhabiba86",level:"Lv.1",city:"Pasuruan",gmv:0,posts:277,views:114525,sessions:0},{rank:15,name:"dailytuffinhell",level:"Lv.1",city:"Bengkulu",gmv:49997,posts:270,views:47984,sessions:0},{rank:16,name:"gimoimoo",level:"Lv.2",city:"Bengkulu",gmv:415554,posts:261,views:86443,sessions:0},{rank:17,name:"slovenskyyy",level:"Lv.1",city:"Bekasi City",gmv:0,posts:256,views:35306,sessions:0},{rank:18,name:"rahmatreal_",level:"Lv.4",city:"Gowa",gmv:1562313,posts:255,views:326699,sessions:0},{rank:19,name:"giselaa.fd",level:"Lv.1",city:"Wonosobo",gmv:17999,posts:250,views:142601,sessions:0},{rank:20,name:"putridewirahayu",level:"Lv.1",city:"Balikpapan",gmv:0,posts:249,views:75888,sessions:0},{rank:21,name:"nzyyyyyy_22",level:"Lv.1",city:"Indragiri Hilir",gmv:145991,posts:248,views:84765,sessions:0},{rank:22,name:"dinateww_12",level:"Lv.1",city:"Bogor City",gmv:0,posts:245,views:59632,sessions:0},{rank:23,name:"adersonaffandi",level:"Lv.1",city:"Bandar Lampung",gmv:0,posts:242,views:53267,sessions:0},{rank:24,name:"septikatika5",level:"Lv.1",city:"North Lampung",gmv:699523,posts:232,views:68509,sessions:0},{rank:25,name:"krmla102",level:"Lv.1",city:"Indragiri Hilir",gmv:195757,posts:231,views:152093,sessions:0},{rank:26,name:"meilaniwe94",level:"Lv.2",city:"Surabaya",gmv:787843,posts:227,views:62006,sessions:0},{rank:27,name:"ny.agung_mei",level:"Lv.1",city:"Pasuruan",gmv:0,posts:224,views:140153,sessions:0},{rank:28,name:"belanjarecehan_",level:"Lv.4",city:"Palembang",gmv:84955449,posts:224,views:2128300,sessions:0},{rank:29,name:"genzzzsstt011",level:"Lv.1",city:"South Lampung",gmv:103794,posts:223,views:90207,sessions:0},{rank:30,name:"angelmovie_0",level:"Lv.1",city:"South Pesisir",gmv:0,posts:223,views:278554,sessions:0},{rank:31,name:"wowalaala",level:"Lv.1",city:"Palembang",gmv:0,posts:220,views:22827,sessions:0},{rank:32,name:"ritarian98",level:"Lv.1",city:"Banyuasin",gmv:0,posts:212,views:27278,sessions:0},{rank:33,name:"rusdiyanto457",level:"Lv.1",city:"Bandar Lampung",gmv:0,posts:211,views:229362,sessions:0},{rank:34,name:"wednes112",level:"Lv.1",city:"Sukabumi",gmv:96954,posts:210,views:90488,sessions:0},{rank:35,name:"mif_2705",level:"Lv.1",city:"East Lampung",gmv:0,posts:208,views:50577,sessions:0},{rank:36,name:"chaa_addict",level:"Lv.1",city:"Sleman",gmv:72000,posts:208,views:87123,sessions:0},{rank:37,name:"desianggrainih",level:"Lv.1",city:"South Lampung",gmv:0,posts:208,views:59817,sessions:0},{rank:38,name:"ikariaastika",level:"Lv.1",city:"Palembang",gmv:77997,posts:203,views:25105,sessions:0},{rank:39,name:"inisyiefa",level:"Lv.1",city:"Pasuruan",gmv:0,posts:200,views:50571,sessions:0},{rank:40,name:"mif_2705",level:"Lv.2",city:"East Lampung",gmv:64799,posts:200,views:42496,sessions:0}],
"live_22":[{rank:1,name:"belanjarecehan_",level:"Lv.4",city:"Palembang",gmv:430081265,posts:799,views:22547001,sessions:39},{rank:2,name:"tuhfah.mlna.s_01",level:"Lv.3",city:"Malang City",gmv:71912744,posts:288,views:8265759,sessions:14},{rank:3,name:"udaudasad",level:"Lv.2",city:"Lima Puluh Kota",gmv:36642520,posts:40,views:3503893,sessions:2},{rank:4,name:"cut_yusniar",level:"Lv.2",city:"Bireuen",gmv:19267875,posts:778,views:1976646,sessions:38},{rank:5,name:"syarif_jinan",level:"Lv.3",city:"Jember",gmv:15453930,posts:690,views:2569362,sessions:34},{rank:6,name:"gittaevita",level:"Lv.4",city:"Banyuasin",gmv:15423276,posts:93,views:945973,sessions:4},{rank:7,name:"tuhfah.mlna.s_01",level:"Lv.2",city:"Malang City",gmv:11898960,posts:58,views:847429,sessions:2},{rank:8,name:"anditukangpromo",level:"Lv.2",city:"West Jakarta",gmv:11749733,posts:263,views:983821,sessions:13},{rank:9,name:"catheroes1992",level:"Lv.2",city:"Pangkajene Dan Kep",gmv:11701056,posts:1054,views:1050439,sessions:52},{rank:10,name:"hematbareng0",level:"Lv.2",city:"Palembang",gmv:10903491,posts:644,views:1910713,sessions:32},{rank:11,name:"tuhfah.mlna.s_01",level:"Lv.4",city:"Malang City",gmv:10227630,posts:180,views:1864165,sessions:9},{rank:12,name:"gittaevita",level:"Lv.3",city:"Banyuasin",gmv:9635547,posts:242,views:2399308,sessions:12},{rank:13,name:"sobat.kuliner",level:"Lv.2",city:"North Jakarta",gmv:9484059,posts:326,views:778724,sessions:16},{rank:14,name:"ysnyf_",level:"Lv.3",city:"Central Jakarta",gmv:9359143,posts:16,views:14504,sessions:1},{rank:15,name:"elel_store1",level:"Lv.2",city:"West Tanjung Jabun",gmv:9243782,posts:638,views:789169,sessions:31},{rank:16,name:"ayusrg19",level:"Lv.4",city:"Bekasi",gmv:9134463,posts:149,views:757105,sessions:7},{rank:17,name:"syarif_jinan",level:"Lv.3",city:"Lumajang",gmv:8865132,posts:468,views:1026858,sessions:23},{rank:18,name:"mayamakan_29",level:"Lv.2",city:"Bogor",gmv:8764726,posts:233,views:2503008,sessions:11},{rank:19,name:"me.cahaya",level:"Lv.3",city:"Makassar",gmv:8379635,posts:280,views:1457455,sessions:14},{rank:20,name:"marius_purba_channel",level:"Lv.2",city:"Medan",gmv:7505398,posts:472,views:499672,sessions:23},{rank:21,name:"jalanhematbanget",level:"Lv.2",city:"Bogor",gmv:7386273,posts:4040,views:1244063,sessions:202},{rank:22,name:"itslingga",level:"Lv.2",city:"Tangerang",gmv:7212547,posts:9,views:246915,sessions:1},{rank:23,name:"andiyus87",level:"Lv.2",city:"Bone",gmv:6953574,posts:123,views:1419095,sessions:6},{rank:24,name:"babanayima",level:"Lv.3",city:"Batanghari",gmv:6840584,posts:358,views:960371,sessions:17},{rank:25,name:"cikalnajme",level:"Lv.2",city:"Depok",gmv:6536994,posts:4,views:56422,sessions:1},{rank:26,name:"glattris",level:"Lv.3",city:"Sidoarjo",gmv:6472879,posts:228,views:2986504,sessions:11},{rank:27,name:"itslingga",level:"Lv.1",city:"Tangerang",gmv:6023011,posts:13,views:401107,sessions:1},{rank:28,name:"spillshopee.terracun",level:"Lv.2",city:"Kubu Raya",gmv:5861864,posts:219,views:172835,sessions:10},{rank:29,name:"kiiwkiiiiw_",level:"Lv.2",city:"Rokan Hilir",gmv:5825673,posts:354,views:986984,sessions:17},{rank:30,name:"rahmatreal_",level:"Lv.4",city:"Gowa",gmv:5290625,posts:941,views:1124278,sessions:47},{rank:31,name:"heyitsaghnia",level:"Lv.2",city:"Boyolali",gmv:5184350,posts:57,views:400984,sessions:2},{rank:32,name:"nafia.kediri",level:"Lv.2",city:"Kediri",gmv:5070107,posts:113,views:869779,sessions:5},{rank:33,name:"ceyotravel",level:"Lv.2",city:"South Jakarta",gmv:5035026,posts:2,views:1613,sessions:1},{rank:34,name:"mamanyaune",level:"Lv.1",city:"Payakumbuh",gmv:4755037,posts:18,views:130870,sessions:1},{rank:35,name:"ysnyf_",level:"Lv.3",city:"Batam",gmv:4416525,posts:9,views:8270,sessions:1},{rank:36,name:"dailylifemeufood",level:"Lv.2",city:"Medan",gmv:4349811,posts:6,views:19141,sessions:1},{rank:37,name:"ekasafiraa_",level:"Lv.4",city:"Batam",gmv:4275944,posts:123,views:557612,sessions:6},{rank:38,name:"ceyotravel",level:"Lv.2",city:"Central Jakarta",gmv:4180390,posts:15,views:1884,sessions:1},{rank:39,name:"wadidawbroo",level:"Lv.2",city:"Tebo",gmv:4174739,posts:338,views:1900603,sessions:16},{rank:40,name:"ekasafiraa_",level:"Lv.3",city:"Batam",gmv:4068807,posts:49,views:178510,sessions:2},{rank:41,name:"strawbeyrose",level:"Lv.2",city:"Malang",gmv:4016588,posts:307,views:253122,sessions:15},{rank:42,name:"sayalarimba",level:"Lv.2",city:"South Jakarta",gmv:3977114,posts:48,views:14309932,sessions:2},{rank:43,name:"kak_nop",level:"Lv.2",city:"Palembang",gmv:3860957,posts:481,views:769543,sessions:24},{rank:44,name:"kwalitasbagus1",level:"Lv.4",city:"South Jakarta",gmv:3773788,posts:76,views:203540,sessions:3},{rank:45,name:"gabriellcova",level:"Lv.2",city:"South Lampung",gmv:3731275,posts:78,views:166549,sessions:3},{rank:46,name:"mspurpleeee",level:"Lv.3",city:"South Minahasa",gmv:3670499,posts:23,views:70751,sessions:1},{rank:47,name:"yukbisayukkk6",level:"Lv.1",city:"Trenggalek",gmv:3472276,posts:170,views:378180,sessions:8},{rank:48,name:"mayamakan_29",level:"Lv.1",city:"Bogor",gmv:3076127,posts:90,views:506506,sessions:4},{rank:49,name:"by.riskaah",level:"Lv.2",city:"Pasaman",gmv:3017485,posts:27,views:31519,sessions:1},{rank:50,name:"sobat.kuliner",level:"Lv.2",city:"Bandung City",gmv:3016612,posts:143,views:374319,sessions:7}],
"live_24":[{rank:1,name:"belanjarecehan_",level:"Lv.4",city:"Palembang",gmv:430081265,posts:799,views:22547001,sessions:39},{rank:2,name:"tuhfah.mlna.s_01",level:"Lv.3",city:"Malang City",gmv:71912744,posts:288,views:8265759,sessions:14},{rank:3,name:"udaudasad",level:"Lv.2",city:"Lima Puluh Kota",gmv:36642520,posts:40,views:3503893,sessions:2},{rank:4,name:"cut_yusniar",level:"Lv.2",city:"Bireuen",gmv:19267875,posts:778,views:1976646,sessions:38},{rank:5,name:"syarif_jinan",level:"Lv.3",city:"Jember",gmv:15453930,posts:690,views:2569362,sessions:34},{rank:6,name:"gittaevita",level:"Lv.4",city:"Banyuasin",gmv:15423276,posts:93,views:945973,sessions:4},{rank:7,name:"tuhfah.mlna.s_01",level:"Lv.2",city:"Malang City",gmv:11898960,posts:58,views:847429,sessions:2},{rank:8,name:"anditukangpromo",level:"Lv.2",city:"West Jakarta",gmv:11749733,posts:263,views:983821,sessions:13},{rank:9,name:"catheroes1992",level:"Lv.2",city:"Pangkajene Dan Kep",gmv:11701056,posts:1054,views:1050439,sessions:52},{rank:10,name:"hematbareng0",level:"Lv.2",city:"Palembang",gmv:10903491,posts:644,views:1910713,sessions:32},{rank:11,name:"tuhfah.mlna.s_01",level:"Lv.4",city:"Malang City",gmv:10227630,posts:180,views:1864165,sessions:9},{rank:12,name:"gittaevita",level:"Lv.3",city:"Banyuasin",gmv:9635547,posts:242,views:2399308,sessions:12},{rank:13,name:"sobat.kuliner",level:"Lv.2",city:"North Jakarta",gmv:9484059,posts:326,views:778724,sessions:16},{rank:14,name:"ysnyf_",level:"Lv.3",city:"Central Jakarta",gmv:9359143,posts:16,views:14504,sessions:1},{rank:15,name:"elel_store1",level:"Lv.2",city:"West Tanjung Jabun",gmv:9243782,posts:638,views:789169,sessions:31},{rank:16,name:"ayusrg19",level:"Lv.4",city:"Bekasi",gmv:9134463,posts:149,views:757105,sessions:7},{rank:17,name:"syarif_jinan",level:"Lv.3",city:"Lumajang",gmv:8865132,posts:468,views:1026858,sessions:23},{rank:18,name:"mayamakan_29",level:"Lv.2",city:"Bogor",gmv:8764726,posts:233,views:2503008,sessions:11},{rank:19,name:"me.cahaya",level:"Lv.3",city:"Makassar",gmv:8379635,posts:280,views:1457455,sessions:14},{rank:20,name:"marius_purba_channel",level:"Lv.2",city:"Medan",gmv:7505398,posts:472,views:499672,sessions:23},{rank:21,name:"jalanhematbanget",level:"Lv.2",city:"Bogor",gmv:7386273,posts:4040,views:1244063,sessions:202},{rank:22,name:"itslingga",level:"Lv.2",city:"Tangerang",gmv:7212547,posts:9,views:246915,sessions:1},{rank:23,name:"andiyus87",level:"Lv.2",city:"Bone",gmv:6953574,posts:123,views:1419095,sessions:6},{rank:24,name:"babanayima",level:"Lv.3",city:"Batanghari",gmv:6840584,posts:358,views:960371,sessions:17},{rank:25,name:"cikalnajme",level:"Lv.2",city:"Depok",gmv:6536994,posts:4,views:56422,sessions:1},{rank:26,name:"glattris",level:"Lv.3",city:"Sidoarjo",gmv:6472879,posts:228,views:2986504,sessions:11},{rank:27,name:"itslingga",level:"Lv.1",city:"Tangerang",gmv:6023011,posts:13,views:401107,sessions:1},{rank:28,name:"spillshopee.terracun",level:"Lv.2",city:"Kubu Raya",gmv:5861864,posts:219,views:172835,sessions:10},{rank:29,name:"kiiwkiiiiw_",level:"Lv.2",city:"Rokan Hilir",gmv:5825673,posts:354,views:986984,sessions:17},{rank:30,name:"rahmatreal_",level:"Lv.4",city:"Gowa",gmv:5290625,posts:941,views:1124278,sessions:47}],
};

// ─── EVENTS ───────────────────────────────────────────────────────────────────
// Rule: each campaign belongs to ONE industry (or null = all industries)
// Industry-specific campaigns only appear when that industry filter is active
// Auto-detect week status based on current date
const NOW=new Date();
const YEAR=NOW.getFullYear();
function parseWeekDate(s,isEnd=false){
  const months={Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11};
  const [d,m]=s.trim().split(" ");
  const mo=months[m]??5;
  // Cap day to last day of month
  const lastDay=new Date(YEAR,mo+1,0).getDate();
  const day=Math.min(parseInt(d),lastDay);
  const dt=new Date(YEAR,mo,day);
  if(isEnd){dt.setHours(23,59,59);}
  return dt;
}
function weekSt(startStr,endStr){
  const start=parseWeekDate(startStr);
  const end=parseWeekDate(endStr,true);
  if(NOW<start)return"upcoming";
  if(NOW>end)return"ended";
  return"live";
}
const WEEKS=[
  {w:1,s:"1 Jun", e:"7 Jun", st:weekSt("1 Jun","7 Jun")},
  {w:2,s:"8 Jun", e:"15 Jun",st:weekSt("8 Jun","15 Jun")},
  {w:3,s:"16 Jun",e:"23 Jun",st:weekSt("16 Jun","23 Jun")},
  {w:4,s:"24 Jun",e:"31 Jun",st:weekSt("24 Jun","31 Jun")},
];
// ─── DB FIELD MAPPING ─────────────────────────────────────────────────────────
// App field         → DB table.column
// event.id          → events.id / live_events.id
// event.key         → events.event_key / live_events.event_key
// event.label       → events.event_name / live_events.event_name
// event.icon        → events.icon
// event.type        → events.challenge_type ("weekly","monthly","levelup") / live_events (always "live")
// event.industry    → events.industry ("dining","accom","ttd")
// event.metric      → events.rank_by ("posts","gmv","views","sessions")
// event.gmvSource   → events.gmv_source ("nett","gross")
// event.creatorLevel→ events.creator_level
// event.city        → events.creator_city
// event.minPosts    → events.min_posts
// event.minGMV      → events.min_gmv_idr
// event.minViews    → events.min_views
// event.minSessions → live_events.min_sessions
// event.maxSlots    → events.max_slots / live_events.max_slots
// event.prizeType   → events.prize_type ("cash","item","pct")
// event.prizeAmount → events.prize_idr / live_events.prize_idr
// event.prizeItem   → events.prize_item
// event.isActive    → events.is_active / live_events.is_active
// event.status      → derived from events.is_active + dates
// event.startDate   → events.start_date / live_events.start_date
// event.endDate     → events.end_date / live_events.end_date
// event.sortOrder   → events.sort_order / live_events.sort_order
// event.desc        → events.description
// event.accent      → events.accent / live_events.accent
// event.winType     → live_events.win_type
// event.requireLvlUp→ events.requires_level_up
// event.levelFrom   → derived from creator_level_log.previous_level
// event.levelTo     → derived from creator_level_log.level
// event.gmvSource   → events.gmv_source / live_events.gmv_source
// week.w            → event_weeks.week_number
// week.s            → event_weeks.start_date
// week.e            → event_weeks.end_date
// week.slots        → event_weeks.max_slots
// week.prizeAmount  → event_weeks.prize_idr
// week.prizeItem    → event_weeks.prize_item
// week.prizeType    → event_weeks.prize_type
// tier.tier         → event_tiers.tier_number
// tier.minGMV       → event_tiers.min_gmv_idr
// tier.maxGMV       → event_tiers.max_gmv_idr
// tier.slots        → event_tiers.max_slots
// tier.prizeAmount  → event_tiers.prize_idr
// tier.prizeItem    → event_tiers.prize_item
// tier.prizeType    → event_tiers.prize_type
// tier.minMerchants → event_tiers.min_merchants
// banner.image_url  → banners.image_url
// banner.sort_order → banners.sort_order
// banner.type       → banners.type
// banner.caption    → banners.caption
// LB entry.name     → tiktok_go_video_summary.author_id
// LB entry.level    → tiktok_go_video_summary.creator_level
// LB entry.city     → tiktok_go_video_summary.creator_city
// LB entry.posts    → tiktok_go_video_summary.total_post
// LB entry.gmv      → tiktok_go_video_summary.redemption_amount (nett) or gmv_gross_idr
// LB entry.views    → tiktok_go_video_summary.poi_vv
// LB live.sessions  → COUNT(tiktok_live_sessions) WHERE live_duration_hours >= 2
// LB live.gmv       → SUM(tiktok_live_sessions.gmv_nett_idr) or gmv_gross_idr
// level_up          → creator_level_log: author_id, level (new), previous_level, observed_at
// ─────────────────────────────────────────────────────────────────────────────

const ALL_EVENTS=[
  // ── Dinings ──
  {id:70,key:"konten-terbanyak",  icon:"🎬",label:"Konten Terbanyak",          type:"weekly",metric:"posts",industry:"dining",creatorLevel:"Lv.1 & Lv.2",minPosts:15,minGMV:0,       maxSlots:25,prizeType:"cash",prizeAmount:150000, weekPrizes:{1:"Rp 150rb",2:"Rp 150rb",3:"Rp 150rb",4:"Rp 150rb"},desc:"Raih 15 post minimum per minggu. 25 kreator Dinings teratas menangkan hadiah tunai.",weeks:WEEKS,lbPrefix:"70"},
  {id:77,key:"creator-aktif",     icon:"⚡",label:"Creator Aktif",              type:"weekly",metric:"posts",industry:"dining",creatorLevel:"Lv.1",        minPosts:15,minGMV:0,       maxSlots:5, prizeType:"cash",prizeAmount:200000, weekPrizes:{1:"Rp 200rb",2:"Rp 200rb",3:"Rp 200rb",4:"Rp 200rb"},desc:"5 kreator Dinings dengan post terbanyak tiap minggu mendapatkan hadiah.",weeks:WEEKS,lbPrefix:"77"},
  {id:"d1",key:"dining-gmv",      icon:"💰",label:"Dinings GMV Weekly",         type:"weekly",metric:"gmv",  industry:"dining",creatorLevel:"Lv.2 & Lv.3",minPosts:10,minGMV:5000000,  maxSlots:15,prizeType:"cash",prizeAmount:750000, weekPrizes:{1:"Rp 750rb",2:"Rp 750rb",3:"Rp 750rb",4:"Rp 750rb"},desc:"GMV kuliner tertinggi tiap minggu. Min 10 post & GMV Rp 5JT.",weeks:WEEKS,lbPrefix:"din"},
  {id:"d2",key:"dining-jkt",      icon:"📍",label:"Dinings Jakarta",            type:"weekly",metric:"gmv",  industry:"dining",creatorLevel:"Lv.1 & Lv.2",minPosts:5, minGMV:2000000,  maxSlots:10,prizeType:"cash",prizeAmount:500000, weekPrizes:{1:"Rp 500rb",2:"Rp 500rb",3:"Rp 500rb",4:"Rp 500rb"},desc:"Eksklusif kreator Dinings domisili Jakarta. Top GMV tiap minggu.",weeks:WEEKS,lbPrefix:"din",city:"Jakarta"},
  {id:22,key:"raja-cuan",         icon:"💰",label:"Raja Cuan",                  type:"live",  metric:"gmv",     industry:"dining",creatorLevel:"Lv.2 & Lv.3",winType:"highest_gmv",minGMV:0,  minSessions:0, maxSlots:3, prizeType:"cash",prizeAmount:5000000,accent:"#8B5CF6",start:"Juni 2026",end:"Juni 2026",isActive:true, desc:"Raih GMV Nett tertinggi dari live streaming Dinings selama Juni. Top 3 menangkan Rp 5 Juta.",lbKey:"live_22"},
  {id:24,key:"live-marathon",     icon:"🔴",label:"Live Marathon",              type:"live",  metric:"sessions",industry:"dining",creatorLevel:"Lv.1 & Lv.2",winType:"criteria",  minGMV:0,  minSessions:21,maxSlots:20,prizeType:"cash",prizeAmount:500000, accent:"#FF4D4F",start:"Juni 2026",end:"Juni 2026",isActive:true, desc:"Kumpulkan valid live session terbanyak. Khusus kreator Dinings. Min 21 sesi.",lbKey:"live_24"},
  // ── Accommodations ──
  {id:79,key:"top-gmv-weekly",    icon:"💰",label:"Top GMV Mingguan",           type:"weekly",metric:"gmv",  industry:"accom", creatorLevel:"Lv.2 & Lv.3",minPosts:15,minGMV:500000,   maxSlots:5, prizeType:"cash",prizeAmount:500000, weekPrizes:{1:"Rp 500rb",2:"Rp 500rb",3:"Rp 500rb",4:"Rp 500rb"},desc:"GMV Accommodations tertinggi tiap minggu. Min 15 post & GMV Rp 500rb.",weeks:WEEKS,lbPrefix:"79"},
  {id:"a1",key:"accom-gmv",       icon:"🏨",label:"Accommodations GMV Weekly",  type:"weekly",metric:"gmv",  industry:"accom", creatorLevel:"Lv.2 & Lv.3",minPosts:5, minGMV:10000000, maxSlots:10,prizeType:"cash",prizeAmount:1000000,weekPrizes:{1:"Rp 1JT",2:"Rp 1JT",3:"Rp 1JT",4:"Rp 1JT"},  desc:"GMV hotel & villa tertinggi tiap minggu.",weeks:WEEKS,lbPrefix:"acc"},
  {id:"a2",key:"accom-bali",      icon:"📍",label:"Accommodations Bali",        type:"weekly",metric:"gmv",  industry:"accom", creatorLevel:"Lv.1 & Lv.2",minPosts:3, minGMV:5000000,  maxSlots:5, prizeType:"cash",prizeAmount:750000, weekPrizes:{1:"Rp 750rb",2:"Rp 750rb",3:"Rp 750rb",4:"Rp 750rb"},desc:"Eksklusif kreator Accommodations domisili Bali.",weeks:WEEKS,lbPrefix:"acc",city:"Bali"},
  {id:76,key:"gmv-bulanan-juni",  icon:"📈",label:"GMV Bulanan Juni",           type:"monthly",metric:"gmv",industry:"accom", creatorLevel:"Lv.1 & Lv.2",start:"Juni 2026",end:"Juni 2026",status:"live",
   desc:"Capai GMV Accommodations tertinggi selama Juni. Hadiah berbeda tiap tier.",
   tiers:[
     {tier:1,minGMV:50000000,  maxGMV:100000000, slots:5,prizeType:"cash",prizeAmount:750000, label:"Rp 750rb",lbKey:"76_t1",creatorLevel:"Lv.1"},
     {tier:2,minGMV:100000001, maxGMV:500000000, slots:3,prizeType:"cash",prizeAmount:3000000,label:"Rp 3JT",  lbKey:"76_t2",creatorLevel:"Lv.1 & Lv.2"},
     {tier:3,minGMV:500000001, maxGMV:null,      slots:1,prizeType:"item",prizeItem:"DJI Osmo Action 5 Pro",   lbKey:"76_t3",creatorLevel:"Lv.2"},
   ]},
  // ── Things to Do ──
  {id:84,key:"30-post",           icon:"🔥",label:"30 Post Challenge",          type:"weekly",metric:"posts",industry:"ttd",   creatorLevel:"Lv.1",        minPosts:30,minGMV:0,       maxSlots:10,prizeType:"cash",prizeAmount:250000, weekPrizes:{1:"Rp 250rb",2:"Rp 250rb",3:"Rp 250rb",4:"Rp 250rb"},desc:"Capai 30 post konten Things to Do per minggu dan masuk top 10.",weeks:WEEKS,lbPrefix:"84"},
  {id:86,key:"high-gmv",          icon:"🏆",label:"High GMV Weekly",            type:"weekly",metric:"gmv",  industry:"ttd",   creatorLevel:"Lv.3 & Lv.4",minPosts:0, minGMV:14000000, maxSlots:10,prizeType:"cash",prizeAmount:500000, weekPrizes:{1:"Rp 500rb",2:"Rp 500rb",3:"Rp 500rb",4:"Rp 500rb"},desc:"Kreator Things to Do redemption min Rp 14JT per minggu.",weeks:WEEKS,lbPrefix:"86"},
  {id:"t1",key:"ttd-post",        icon:"🎯",label:"Things to Do Post",          type:"weekly",metric:"posts",industry:"ttd",   creatorLevel:"Lv.1",        minPosts:8, minGMV:0,        maxSlots:10,prizeType:"cash",prizeAmount:500000, weekPrizes:{1:"Rp 500rb",2:"Rp 500rb",3:"Rp 500rb",4:"Rp 500rb"},desc:"Konten wisata & atraksi terbanyak tiap minggu menang.",weeks:WEEKS,lbPrefix:"ttd"},
  {id:"t2",key:"ttd-surabaya",    icon:"📍",label:"Things to Do Surabaya",      type:"weekly",metric:"posts",industry:"ttd",   creatorLevel:"Lv.1 & Lv.2",minPosts:5, minGMV:0,        maxSlots:5, prizeType:"cash",prizeAmount:250000, weekPrizes:{1:"Rp 250rb",2:"Rp 250rb",3:"Rp 250rb",4:"Rp 250rb"},desc:"Eksklusif kreator Things to Do domisili Surabaya.",weeks:WEEKS,lbPrefix:"ttd",city:"Surabaya"},
  {id:83,key:"super-creator-juni",icon:"🚀",label:"Super Creator Juni",         type:"monthly",metric:"gmv",industry:"ttd",   creatorLevel:"Lv.2 – Lv.4",start:"Juni 2026",end:"Juni 2026",status:"live",
   desc:"Tier hadiah eksklusif Things to Do. Min 10 merchant unik. Grand prize iPhone 17 Pro.",
   tiers:[
     {tier:1,minGMV:50000000,  maxGMV:150000000,  slots:5,prizeType:"cash",prizeAmount:2500000,label:"Rp 2.5JT",lbKey:"83_t1",minMerchants:10,creatorLevel:"Lv.2"},
     {tier:2,minGMV:150000001, maxGMV:500000000,  slots:3,prizeType:"cash",prizeAmount:5000000,label:"Rp 5JT",  lbKey:"83_t2",minMerchants:10,creatorLevel:"Lv.2 & Lv.3"},
     {tier:3,minGMV:500000001, maxGMV:1000000000, slots:3,prizeType:"item",prizeItem:"iPad Gen 10",             lbKey:"83_t3",minMerchants:10,creatorLevel:"Lv.3"},
     {tier:4,minGMV:1000000001,maxGMV:null,        slots:3,prizeType:"item",prizeItem:"iPhone 17 Pro",           lbKey:"83_t4",minMerchants:10,creatorLevel:"Lv.3 & Lv.4"},
   ]},
];

// Parse "Lv.1 & Lv.2" or "Lv.3" → ["Lv.1","Lv.2"] or ["Lv.3"]
const parseLevels=(s)=>(s||"").split(/[&,]/).map(x=>x.trim()).filter(x=>x.startsWith("Lv."));
const IND_MAP={"dining":"🍽 Dinings","accom":"🏨 Accommodations","ttd":"🎯 Things to Do"};
const WK_STATS={
  "70_w4":{total:3259,eligible:24,filled:"22/25"},"70_w3":{total:3212,eligible:25,filled:"25/25"},"70_w2":{total:3100,eligible:25,filled:"25/25"},"70_w1":{total:2980,eligible:25,filled:"25/25"},
  "77_w4":{total:3259,eligible:5, filled:"4/5"}, "79_w4":{total:3259,eligible:4, filled:"4/5"},
  "84_w4":{total:3259,eligible:0, filled:"0/10"},"86_w4":{total:3259,eligible:9, filled:"9/10"},
  "din_w4":{total:842,eligible:14,filled:"14/15"},"acc_w4":{total:421,eligible:8, filled:"8/10"},"ttd_w4":{total:318,eligible:9,filled:"9/10"},
  "76_t1":{total:3259,eligible:7,filled:"5/5"},"76_t2":{total:3259,eligible:3,filled:"3/3"},"76_t3":{total:3259,eligible:1,filled:"1/1"},
  "83_t1":{total:3259,eligible:5,filled:"5/5"},"83_t2":{total:3259,eligible:1,filled:"1/3"},"83_t3":{total:3259,eligible:0,filled:"0/3"},"83_t4":{total:3259,eligible:0,filled:"0/3"},
  "live_22":{total:181,eligible:3,filled:"3/3"},"live_24":{total:181,eligible:18,filled:"18/20"},
};
// Uses the actual adtreeGO branding: bubbly rounded wordmark + GO badge
function Logo({h=26}){
  // Real AdtreeGO logo from uploaded SVG
  const scale = h / 80;
  const w = Math.round(260 * scale);
  return(
    <svg height={h} width={w} viewBox="140 380 600 220" xmlns="http://www.w3.org/2000/svg" style={{display:"block"}}>
      <path d="M0 0 C1.20446777 0.01047363 2.40893555 0.02094727 3.64990234 0.03173828 C5.60283203 0.04140625 5.60283203 0.04140625 7.59521484 0.05126953 C8.9754258 0.06798149 10.35563413 0.08491139 11.73583984 0.10205078 C13.12385436 0.11208072 14.51187574 0.12120655 15.89990234 0.12939453 C19.3037201 0.15303215 22.70719491 0.18598211 26.11083984 0.22705078 C27.37569933 4.50729258 28.41467102 8.72522132 29.29833984 13.10205078 C31.33321937 21.27224548 36.09340832 27.62861226 43.16162109 32.23486328 C49.12013478 35.26785422 55.54599456 36.38898543 62.11083984 37.22705078 C63.11083984 38.22705078 63.11083984 38.22705078 63.22436523 41.00268555 C63.21912842 42.21239014 63.2138916 43.42209473 63.20849609 44.66845703 C63.20527344 45.97363281 63.20205078 47.27880859 63.19873047 48.62353516 C63.19037386 50.01220768 63.18190889 51.40087955 63.17333984 52.78955078 C63.1683265 54.18212734 63.16376331 55.5747056 63.15966797 56.96728516 C63.14783418 60.38724948 63.13134865 63.80712922 63.11083984 67.22705078 C58.92738519 69.62517278 55.76736366 69.07581213 51.17333984 68.22705078 C50.14756836 68.07429688 50.14756836 68.07429688 49.10107422 67.91845703 C41.91578609 66.64776797 35.61679217 63.42750379 29.11083984 60.22705078 C29.10204048 61.22064606 29.10204048 61.22064606 29.09306335 62.23431396 C29.02873123 69.17861514 28.94421237 76.1224698 28.84838867 83.06640625 C28.81529852 85.65195804 28.787218 88.2375793 28.7644043 90.82324219 C28.73056484 94.55710233 28.67823418 98.29033481 28.62255859 102.02392578 C28.61616867 103.16504822 28.60977875 104.30617065 28.60319519 105.48187256 C28.34015228 120.10280239 24.51054457 132.59098913 14.11083984 143.22705078 C0.45454472 154.16651254 -13.66435652 157.71839228 -30.88916016 156.22705078 C-44.46933938 153.81440192 -55.92131623 146.48142993 -63.88916016 135.22705078 C-71.00094432 121.90767017 -73.01310446 107.8652879 -68.93212891 93.24658203 C-64.44372111 80.25205309 -57.81800274 71.12421515 -45.88916016 64.22705078 C-34.21664146 58.98471199 -22.19481502 57.33051676 -9.88916016 61.22705078 C-9.86446441 65.32046577 -9.84630223 69.41385199 -9.83422852 73.50732422 C-9.82919585 74.90023555 -9.82236918 76.29314159 -9.8137207 77.68603516 C-9.80160864 79.68666324 -9.79645603 81.68732966 -9.79150391 83.68798828 C-9.78626709 84.89245605 -9.78103027 86.09692383 -9.77563477 87.33789062 C-9.88916016 90.22705078 -9.88916016 90.22705078 -10.88916016 92.22705078 C-11.72318359 92.12005859 -12.55720703 92.01306641 -13.41650391 91.90283203 C-20.43678194 91.15496736 -26.57537132 90.65423723 -32.88916016 94.22705078 C-37.20056648 98.5384571 -38.0391745 102.0793312 -38.07666016 108.03955078 C-38.02866323 112.44993524 -37.98462269 116.24567197 -35.88916016 120.22705078 C-34.05582682 121.56038411 -34.05582682 121.56038411 -31.88916016 122.22705078 C-31.29619141 122.56607422 -30.70322266 122.90509766 -30.09228516 123.25439453 C-25.91941592 125.09667191 -21.35662377 124.67315062 -16.88916016 124.22705078 C-13.43569867 122.87958554 -13.43569867 122.87958554 -10.88916016 121.22705078 C-10.22916016 121.22705078 -9.56916016 121.22705078 -8.88916016 121.22705078 C-4.7308917 113.56775732 -4.60039382 105.01143317 -4.69384766 96.48486328 C-4.69676819 95.46249069 -4.69968872 94.4401181 -4.70269775 93.38676453 C-4.71025966 91.18625933 -4.722439 88.98576598 -4.73883057 86.78530884 C-4.76450122 83.30582233 -4.77742344 79.82648931 -4.78710938 76.34692383 C-4.8098745 68.97356331 -4.84842182 61.60033098 -4.88916016 54.22705078 C-4.93633361 45.65355367 -4.97706863 37.08012677 -5.0010376 28.50653076 C-5.01403377 25.07294173 -5.03903716 21.63957105 -5.06445312 18.20605469 C-5.07171334 16.11539909 -5.0784174 14.02474146 -5.08447266 11.93408203 C-5.0948053 10.97515549 -5.10513794 10.01622894 -5.11578369 9.02824402 C-5.11592468 8.15646011 -5.11606567 7.28467621 -5.11621094 6.38647461 C-5.12065216 5.62700027 -5.12509338 4.86752594 -5.12966919 4.08503723 C-4.68921018 0.68239216 -3.21791495 0.25288667 0 0 Z" fill="#FED42B" transform="translate(344.88916015625,390.77294921875)"/>
      <path d="M0 0 C2.5355676 2.03251912 4.76031507 4.16176694 6.94921875 6.5625 C7.02269531 5.17224609 7.02269531 5.17224609 7.09765625 3.75390625 C7.17242187 2.55636719 7.2471875 1.35882813 7.32421875 0.125 C7.39382812 -1.06996094 7.4634375 -2.26492188 7.53515625 -3.49609375 C7.67179687 -4.46675781 7.8084375 -5.43742187 7.94921875 -6.4375 C11.06876003 -7.99727064 14.37881259 -7.55854126 17.80078125 -7.53515625 C18.57481293 -7.5337413 19.3488446 -7.53232635 20.14633179 -7.53086853 C22.62233317 -7.52526403 25.09824463 -7.51271083 27.57421875 -7.5 C29.25130078 -7.49498558 30.92838422 -7.49042257 32.60546875 -7.48632812 C36.72008681 -7.47529315 40.83463753 -7.45802554 44.94921875 -7.4375 C46.52104235 -4.64345718 47.19902357 -2.64088382 47.19645691 0.56069946 C47.2006514 1.34582413 47.20484589 2.13094879 47.20916748 2.93986511 C47.20354797 3.7919606 47.19792847 4.64405609 47.19213867 5.52197266 C47.19403702 6.42642624 47.19593536 7.33087982 47.19789124 8.26274109 C47.20159448 11.25076987 47.19090241 14.23855534 47.1796875 17.2265625 C47.17849549 19.301137 47.17804258 21.37571204 47.17829895 23.45028687 C47.17673494 27.7963194 47.16845045 32.14226946 47.1550293 36.48828125 C47.13801846 42.06834439 47.13421561 47.64831706 47.13497448 53.22840309 C47.13470304 57.51080189 47.12922639 61.79318078 47.12197304 66.07557297 C47.11878396 68.13374048 47.11681841 70.19191026 47.11607933 72.25008011 C47.1139195 75.12069829 47.10518361 77.99121904 47.09448242 80.86181641 C47.09493561 81.71796036 47.09538879 82.57410431 47.09585571 83.45619202 C47.06369755 89.3335424 47.06369755 89.3335424 45.94921875 91.5625 C40.69816433 91.58714928 35.4471433 91.60533568 30.19604492 91.61743164 C28.40827854 91.62247218 26.6205163 91.62930454 24.83276367 91.63793945 C22.26870707 91.6500173 19.70470478 91.65573094 17.140625 91.66015625 C15.93437218 91.66789818 15.93437218 91.66789818 14.70375061 91.67579651 C12.7852016 91.67599215 10.86676507 91.62451983 8.94921875 91.5625 C7.13805919 89.75134044 7.56722427 86.94971773 7.38671875 84.5 C7.26103516 82.84291016 7.26103516 82.84291016 7.1328125 81.15234375 C7.07222656 80.29769531 7.01164062 79.44304687 6.94921875 78.5625 C6.28921875 78.5625 5.62921875 78.5625 4.94921875 78.5625 C4.58183594 79.44228516 4.58183594 79.44228516 4.20703125 80.33984375 C-0.01556372 87.80151002 -8.64371826 90.99729756 -16.42578125 93.25 C-29.77408486 94.83908376 -42.86763684 91.77676756 -53.6484375 83.58984375 C-65.12851825 73.77203714 -71.89700457 62.1305757 -73.859375 47.12109375 C-74.64308603 32.5504662 -70.840759 19.00651999 -61.28515625 7.81640625 C-45.35359841 -8.25441346 -19.094075 -13.71208259 0 0 Z M-26.42578125 29.5 C-29.82507826 33.81449236 -30.5018048 37.83405811 -30.3671875 43.21875 C-29.6493037 48.53640775 -27.31294891 52.39048718 -23.42578125 56 C-18.20353053 59.43569127 -13.18010898 59.0117701 -7.05078125 58.5625 C-2.10817709 56.79728423 1.49184308 54.39596346 3.9296875 49.65625 C6.3681074 43.6081168 6.13417135 38.67822516 3.94921875 32.5625 C1.2277705 28.15187698 -2.06643534 25.65676017 -6.92578125 23.875 C-14.90990501 22.70086415 -20.26717943 24.47587746 -26.42578125 29.5 Z" fill="#FED32A" transform="translate(218.05078125,451.4375)"/>
      <path d="M0 0 C8.82401778 7.25420188 13.06820541 16.20258081 14.24609375 27.4921875 C14.36788994 28.94071548 14.48116762 30.38998483 14.5859375 31.83984375 C14.63911133 32.53851563 14.69228516 33.2371875 14.74707031 33.95703125 C14.95133079 37.73308985 14.93275907 39.16336139 12.7734375 42.40234375 C10.17819037 43.1263 7.72612469 43.66643402 5.08203125 44.12109375 C3.91487328 44.33711243 3.91487328 44.33711243 2.72413635 44.55749512 C0.22173898 45.01767889 -2.28342387 45.46018641 -4.7890625 45.90234375 C-6.41882963 46.19937177 -8.04838984 46.49753753 -9.67773438 46.796875 C-14.52424976 47.68306164 -19.37481022 48.54535643 -24.2265625 49.40234375 C-25.05549011 49.54913574 -25.88441772 49.69592773 -26.73846436 49.84716797 C-31.56724175 50.70225781 -36.39661182 51.55390715 -41.2265625 52.40234375 C-41.2265625 53.06234375 -41.2265625 53.72234375 -41.2265625 54.40234375 C-35.21052332 60.13190488 -29.82491757 61.76814062 -21.4765625 61.65234375 C-20.76991455 61.64557617 -20.0632666 61.63880859 -19.33520508 61.63183594 C-9.52746687 61.43902179 -1.30824895 58.95904985 7.7734375 55.40234375 C9.44752205 60.06638717 10.54683987 64.67317011 11.4609375 69.52734375 C11.60337891 70.22988281 11.74582031 70.93242188 11.89257812 71.65625 C13.20868305 78.58380725 13.20868305 78.58380725 11.7734375 81.40234375 C-0.90255633 91.79250263 -20.65113875 92.87997964 -36.2265625 91.40234375 C-50.62542777 89.41008696 -63.6805453 83.46071513 -73.09765625 72.15625 C-81.74294256 60.53624151 -85.11256018 48.73939716 -84.2265625 34.40234375 C-82.039472 20.45318386 -75.79628702 9.12193284 -64.62109375 0.359375 C-45.25836802 -12.74469191 -19.27495921 -13.83062863 0 0 Z M-40.2265625 15.40234375 C-43.20104214 18.37682339 -45.15798315 21.32231352 -46.2265625 25.40234375 C-45.93482362 27.74124178 -45.60521681 30.07593526 -45.2265625 32.40234375 C-41.25526846 31.73812081 -37.28611419 31.06244728 -33.31860352 30.37597656 C-31.96790894 30.14395541 -30.61666631 29.915102 -29.26489258 29.68945312 C-27.3249305 29.36505903 -25.38702894 29.02841672 -23.44921875 28.69140625 C-22.28140869 28.49240723 -21.11359863 28.2934082 -19.91040039 28.08837891 C-19.02473389 27.8619873 -18.13906738 27.6355957 -17.2265625 27.40234375 C-16.01907907 25.49432002 -16.01907907 25.49432002 -16.57421875 23.59765625 C-17.89405114 19.77519086 -18.88513965 17.70496855 -21.9765625 14.96484375 C-28.60031834 11.78034575 -33.8866799 11.81112485 -40.2265625 15.40234375 Z" fill="#FED329" transform="translate(669.2265625,453.59765625)"/>
      <path d="M0 0 C9.86465288 9.86465288 12.77435359 21.66987965 12.8125 35.25 C12.7966861 36.75006131 12.7776619 38.25011039 12.75 39.75 C6.70212455 42.71245285 0.74055141 43.87776769 -5.87109375 45.01171875 C-6.97099136 45.20723831 -8.07088898 45.40275787 -9.20411682 45.60420227 C-12.69722707 46.22326806 -16.19226748 46.83054346 -19.6875 47.4375 C-22.06459047 47.85664372 -24.44154533 48.27655727 -26.81835938 48.69726562 C-32.62736575 49.72376263 -38.43799934 50.74060247 -44.25 51.75 C-43.07002441 53.19656982 -43.07002441 53.19656982 -41.86621094 54.67236328 C-41.42372009 55.21482697 -40.98122925 55.75729065 -40.52532959 56.31619263 C-36.90887865 60.38203887 -31.59211203 60.62585809 -26.44921875 61.1015625 C-17.08861915 61.54938582 -9.22679085 60.02178728 -0.4453125 56.84375 C2.75 55.75 2.75 55.75 5.75 55.75 C8.31792376 64.00404065 9.90021931 72.08019995 9.75 80.75 C0.60113437 85.82497866 -7.77747766 89.21976843 -18.25 90.75 C-19.29671875 90.915 -20.3434375 91.08 -21.421875 91.25 C-37.85486175 93.21214767 -55.08380687 88.59073512 -68.1875 78.5 C-79.01156457 69.01302576 -85.10443608 57.060737 -86.25 42.75 C-86.40951172 28.07492216 -82.01468476 16.05296447 -71.99609375 5.33984375 C-52.14184833 -13.74955112 -22.47792901 -15.56164316 0 0 Z M-45.25 18.75 C-47.76173639 23.10311069 -48.29911443 26.77665263 -48.25 31.75 C-44.29828356 31.06021684 -40.34730677 30.36635857 -36.39697266 29.66870117 C-35.05276927 29.43189934 -33.70836839 29.19621575 -32.36376953 28.96166992 C-30.43210225 28.62451914 -28.50119482 28.28302389 -26.5703125 27.94140625 C-25.40773926 27.73717041 -24.24516602 27.53293457 -23.04736328 27.32250977 C-20.31054011 26.88810144 -20.31054011 26.88810144 -18.25 25.75 C-18.65290042 20.10939411 -20.46914326 17.71528877 -24.25 13.75 C-31.744377 10.0028115 -40.04326917 12.71376548 -45.25 18.75 Z" fill="#FED429" transform="translate(777.25,454.25)"/>
      <path d="M0 0 C0.87591797 -0.01224609 1.75183594 -0.02449219 2.65429688 -0.03710938 C3.49154297 -0.03904297 4.32878906 -0.04097656 5.19140625 -0.04296875 C5.95783447 -0.04707764 6.7242627 -0.05118652 7.51391602 -0.05541992 C9.4375 0.1875 9.4375 0.1875 11.4375 2.1875 C11.54204373 4.9173369 11.52686137 7.53515057 11.4140625 10.2578125 C11.37652359 11.45215408 11.37652359 11.45215408 11.33822632 12.67062378 C11.25593302 15.21834304 11.15938097 17.76529774 11.0625 20.3125 C11.00426988 22.037729 10.9469664 23.76298954 10.890625 25.48828125 C10.75208312 29.72195821 10.59428512 33.95430166 10.4375 38.1875 C18.0275 38.1875 25.6175 38.1875 33.4375 38.1875 C33.4375 46.4375 33.4375 54.6875 33.4375 63.1875 C25.8475 63.1875 18.2575 63.1875 10.4375 63.1875 C10.39135198 67.18955898 10.35159902 71.19093168 10.32763672 75.19311523 C10.31763757 76.55187118 10.30403376 77.91060594 10.28662109 79.26928711 C10.26210406 81.23281296 10.25203038 83.19650201 10.2421875 85.16015625 C10.23171387 86.33843994 10.22124023 87.51672363 10.21044922 88.73071289 C10.52021947 93.44688175 11.01253458 97.76253458 14.4375 101.1875 C20.48892153 101.72198184 26.47862565 101.31485461 32.4375 100.1875 C33.4375 101.1875 33.4375 101.1875 33.55102539 103.87133789 C33.54317017 105.62305298 33.54317017 105.62305298 33.53515625 107.41015625 C33.53032227 109.30024414 33.53032227 109.30024414 33.52539062 111.22851562 C33.51703403 112.56901109 33.50856907 113.90950588 33.5 115.25 C33.4949866 116.59439942 33.49042342 117.9388006 33.48632812 119.28320312 C33.47449488 122.58467941 33.45800971 125.88606803 33.4375 129.1875 C19.63340807 136.46450621 6.10466208 139.19256778 -9.33203125 135.3203125 C-18.30336508 132.17437924 -24.19595139 126.53756664 -28.5625 118.1875 C-31.59389339 110.96989669 -31.72070003 103.35680751 -31.84375 95.640625 C-31.87136414 94.30109772 -31.87136414 94.30109772 -31.89953613 92.93450928 C-31.97776157 89.13858278 -32.04614554 85.34249763 -32.11474609 81.54638672 C-32.16645141 78.76521008 -32.22367216 75.98418526 -32.28125 73.203125 C-32.29482544 72.34374329 -32.30840088 71.48436157 -32.3223877 70.59893799 C-32.39290443 67.23274102 -32.49112681 64.40161957 -33.5625 61.1875 C-36.8625 61.1875 -40.1625 61.1875 -43.5625 61.1875 C-43.5625 53.9275 -43.5625 46.6675 -43.5625 39.1875 C-41.87125 38.630625 -40.18 38.07375 -38.4375 37.5 C-28.7429499 33.90483436 -24.30333679 28.22610472 -19.5625 19.1875 C-18.10861583 15.57574563 -16.81664905 11.9535867 -15.60546875 8.25390625 C-13.93729638 3.34935454 -13.93729638 3.34935454 -12.5625 1.1875 C-8.36706908 -0.21097697 -4.39368623 0.00324737 0 0 Z" fill="#FED32A" transform="translate(459.5625,407.8125)"/>
      <path d="M0 0 C3.06 -0.0225 3.06 -0.0225 6.1875 -0.0625 C8.22747437 3.33378125 9.3125 6.0625 9.3125 9.9375 C9.30375 10.82003906 9.295 11.70257812 9.28601563 12.6125 C9.27042969 14.43171875 9.27042969 14.43171875 9.25453125 16.28703125 C9.23835937 18.5625 9.23835937 18.5625 8.3125 20.9375 C5.4375 21.9375 5.4375 21.9375 2.1875 21.9375 C0.8725 21.9375 -0.4425 21.9375 -1.8125 21.9375 C-5.0625 20.9375 -5.0625 20.9375 -6.0625 18.9375 C-7.1875 13.9375 -7.1875 13.9375 -7.1875 9.9375 C-5.8725 3.5625 -5.8725 3.5625 0 0 Z" fill="#FED32A" transform="translate(347.8125,391.0625)"/>
    </svg>
  );
}

// ─── RESPONSIVE ──────────────────────────────────────────────────────────────
function useDesktop(){
  const [d,setD]=useState(()=>typeof window!=="undefined"&&window.innerWidth>=768);
  useEffect(()=>{
    const fn=()=>setD(window.innerWidth>=768);
    window.addEventListener("resize",fn);
    return()=>window.removeEventListener("resize",fn);
  },[]);
  return d;
}

// ─── BANNER CAROUSEL - inline SVG, no external images ────────────────────────
const BANNERS=[
  {
    id:1,eventKey:"super-creator-juni",tag:"MONTHLY",tagBg:Y,tagColor:"#000",
    eyebrow:"🏆 GRAND PRIZE",title:"Super Creator Juni",sub:"iPhone 17 Pro menanti · GMV > Rp 1M",accent:Y,
    photo:"https://ik.imagekit.io/rpw/Adtree/Leaderboard/June%202026/1.png?updatedAt=1780374954694",
    svg:(w,h)=>{const W=w,H=h;return`
      <defs>
        <linearGradient id="b1a" x1="0" y1="0" x2="${W}" y2="${H}" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#1C1400"/><stop offset="100%" stop-color="#0A0800"/></linearGradient>
        <linearGradient id="b1b" x1="0" y1="0" x2="${W*.6}" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#1C1400" stop-opacity="1"/><stop offset="100%" stop-color="#1C1400" stop-opacity="0"/></linearGradient>
      </defs>
      <rect width="${W}" height="${H}" fill="url(#b1a)"/>
      <circle cx="${W*.82}" cy="${H*.5}" r="${H*.8}" fill="${Y}" fill-opacity="0.05"/>
      <rect width="${W*.65}" height="${H}" fill="url(#b1b)"/>
      <rect x="0" y="${H-3}" width="${W}" height="3" fill="${Y}" fill-opacity="0.4"/>
    `;}
  },
  {
    id:2,eventKey:"raja-cuan",tag:"🔴 LIVE",tagBg:"#8B5CF6",tagColor:"#fff",
    eyebrow:"💰 LIVE STREAMING",title:"Raja Cuan Live",sub:"Top 3 GMV Nett · menangkan Rp 5 Juta",accent:"#A78BFA",
    photo:"https://ik.imagekit.io/rpw/Adtree/Leaderboard/June%202026/2.png?updatedAt=1780374954694",
    svg:(w,h)=>{const W=w,H=h;return`
      <defs>
        <linearGradient id="b2a" x1="0" y1="0" x2="${W}" y2="${H}" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#0E0820"/><stop offset="100%" stop-color="#060412"/></linearGradient>
        <linearGradient id="b2b" x1="0" y1="0" x2="${W*.6}" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#0E0820" stop-opacity="1"/><stop offset="100%" stop-color="#0E0820" stop-opacity="0"/></linearGradient>
      </defs>
      <rect width="${W}" height="${H}" fill="url(#b2a)"/>
      <rect width="${W*.65}" height="${H}" fill="url(#b2b)"/>
      <rect x="0" y="${H-3}" width="${W}" height="3" fill="#8B5CF6" fill-opacity="0.5"/>
    `;}
  },
  {
    id:3,eventKey:"konten-terbanyak",tag:"WEEKLY",tagBg:"#FF8C00",tagColor:"#000",
    eyebrow:"🔥 WEEK 4 AKTIF",title:"Campaign Mingguan",sub:"5 campaign aktif · berakhir 31 Jun",accent:"#FFAB40",
    photo:"https://ik.imagekit.io/rpw/Adtree/Leaderboard/June%202026/3.png?updatedAt=1780374954694",
    svg:(w,h)=>{const W=w,H=h;return`
      <defs>
        <linearGradient id="b3a" x1="0" y1="0" x2="${W}" y2="${H}" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#1A0C00"/><stop offset="100%" stop-color="#0A0500"/></linearGradient>
        <linearGradient id="b3b" x1="0" y1="0" x2="${W*.6}" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#1A0C00" stop-opacity="1"/><stop offset="100%" stop-color="#1A0C00" stop-opacity="0"/></linearGradient>
      </defs>
      <rect width="${W}" height="${H}" fill="url(#b3a)"/>
      <rect width="${W*.65}" height="${H}" fill="url(#b3b)"/>
      <rect x="0" y="${H-3}" width="${W}" height="3" fill="#FF8C00" fill-opacity="0.45"/>
    `;}
  },
  {
    id:4,eventKey:"dining-gmv",tag:"DININGS",tagBg:"#FF6B35",tagColor:"#fff",
    eyebrow:"🍽 CAMPAIGN KULINER",title:"Dinings GMV Weekly",sub:"Kreator kuliner · top 15 menang hadiah",accent:"#FF8C5A",
    photo:"https://ik.imagekit.io/rpw/Adtree/Leaderboard/June%202026/4.png?updatedAt=1780374954694",
    svg:(w,h)=>{const W=w,H=h;return`
      <defs>
        <linearGradient id="b4a" x1="0" y1="0" x2="${W}" y2="${H}" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#1A0800"/><stop offset="100%" stop-color="#0A0400"/></linearGradient>
        <linearGradient id="b4b" x1="0" y1="0" x2="${W*.6}" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#1A0800" stop-opacity="1"/><stop offset="100%" stop-color="#1A0800" stop-opacity="0"/></linearGradient>
      </defs>
      <rect width="${W}" height="${H}" fill="url(#b4a)"/>
      <rect width="${W*.65}" height="${H}" fill="url(#b4b)"/>
      <rect x="0" y="${H-3}" width="${W}" height="3" fill="#FF6B35" fill-opacity="0.45"/>
    `;}
  },
  {
    id:5,eventKey:"accom-gmv",tag:"ACCOMMODATIONS",tagBg:"#6366F1",tagColor:"#fff",
    eyebrow:"🏨 CAMPAIGN HOTEL",title:"Accommodations GMV",sub:"GMV hotel & villa tertinggi · Rp 1JT slot",accent:"#818CF8",
    photo:"https://ik.imagekit.io/rpw/Adtree/Leaderboard/June%202026/5.png?updatedAt=1780374954694",
    svg:(w,h)=>{const W=w,H=h;return`
      <defs>
        <linearGradient id="b5a" x1="0" y1="0" x2="${W}" y2="${H}" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#08061A"/><stop offset="100%" stop-color="#04030E"/></linearGradient>
        <linearGradient id="b5b" x1="0" y1="0" x2="${W*.6}" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#08061A" stop-opacity="1"/><stop offset="100%" stop-color="#08061A" stop-opacity="0"/></linearGradient>
      </defs>
      <rect width="${W}" height="${H}" fill="url(#b5a)"/>
      <rect width="${W*.65}" height="${H}" fill="url(#b5b)"/>
      <rect x="0" y="${H-3}" width="${W}" height="3" fill="#6366F1" fill-opacity="0.5"/>
    `;}
  },
];
function BannerCarousel({onOpen}){
  const [cur,setCur]=useState(0);
  const [popup,setPopup]=useState(null); // banner object for popup
  const [dragX,setDragX]=useState(0);
  const [dragging,setDragging]=useState(false);
  const touchStart=useRef(null);
  const autoRef=useRef(null);
  const H=150;

  const evMap={};[...ALL_EVENTS,...(loadCampaigns()||[])].forEach(e=>{evMap[e.key]=e;});

  const resetAuto=()=>{
    if(autoRef.current)clearInterval(autoRef.current);
    autoRef.current=setInterval(()=>setCur(c=>(c+1)%BANNERS.length),5000);
  };
  useEffect(()=>{resetAuto();return()=>clearInterval(autoRef.current);},[]);

  const goTo=(n)=>{setCur((n+BANNERS.length)%BANNERS.length);resetAuto();};

  // Touch handlers
  const onTouchStart=(e)=>{touchStart.current=e.touches[0].clientX;setDragging(true);setDragX(0);};
  const onTouchMove=(e)=>{if(touchStart.current===null)return;setDragX(e.touches[0].clientX-touchStart.current);};
  const onTouchEnd=()=>{
    if(Math.abs(dragX)>40){dragX<0?goTo(cur+1):goTo(cur-1);}
    setDragging(false);setDragX(0);touchStart.current=null;
  };
  // Mouse drag for desktop
  const mouseStart=useRef(null);
  const onMouseDown=(e)=>{mouseStart.current=e.clientX;setDragging(true);};
  const onMouseMove=(e)=>{if(mouseStart.current===null)return;setDragX(e.clientX-mouseStart.current);};
  const onMouseUp=()=>{
    if(mouseStart.current!==null&&Math.abs(dragX)>40){dragX<0?goTo(cur+1):goTo(cur-1);}
    setDragging(false);setDragX(0);mouseStart.current=null;
  };

  const handleClick=()=>{
    if(Math.abs(dragX)>8)return; // was a drag, not a tap
    const b=BANNERS[cur];
    const img=evMap[b.eventKey]?.bannerUrl||b.photo;
    if(img)setPopup(b); // show popup if has image
    else{const ev=evMap[b.eventKey];if(ev)onOpen(ev);}
  };

  return(
    <>
      <div style={{padding:"12px 16px 0"}}>
        <div style={{position:"relative",borderRadius:16,overflow:"hidden",height:H,
          cursor:dragging?"grabbing":"pointer",WebkitTapHighlightColor:"transparent",userSelect:"none"}}
          onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp} onMouseLeave={onMouseUp}
          onClick={handleClick}>
          {BANNERS.map((b,i)=>{
            const ev=evMap[b.eventKey];
            const img=ev?.bannerUrl||b.photo;
            const offset=(i-cur)*100+(i===cur?dragX/3:0);
            return(
              <div key={b.id} style={{position:"absolute",inset:0,
                transform:`translateX(${i===cur?dragX*0.3:i<cur?-100:100}%)`,
                transition:dragging?"none":"transform .35s ease",
                opacity:i===cur?1:0.3}}>
                {img
                  ? <>
                      <img src={img} alt="" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}}
                        onError={e=>{e.target.style.display="none";}}/>
                      <div style={{position:"absolute",inset:0,background:"linear-gradient(90deg,rgba(0,0,0,0.85) 0%,rgba(0,0,0,0.55) 55%,rgba(0,0,0,0.1) 100%)"}}/>
                    </>
                  : <svg width="100%" height="100%" viewBox={`0 0 440 ${H}`} preserveAspectRatio="xMidYMid slice"
                      style={{position:"absolute",inset:0}} dangerouslySetInnerHTML={{__html:b.svg(440,H)}}/>
                }
                <div style={{position:"absolute",inset:0,padding:"12px 16px",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                  <span style={{fontSize:9,fontWeight:800,color:b.tagColor,background:b.tagBg,borderRadius:5,padding:"3px 9px",letterSpacing:.4,alignSelf:"flex-start"}}>{b.tag}</span>
                  <div>
                    {b.eyebrow&&<div style={{fontSize:10,fontWeight:600,color:b.accent,marginBottom:2}}>{b.eyebrow}</div>}
                    <div style={{fontSize:17,fontWeight:900,color:"#fff",lineHeight:1.2,marginBottom:3}}>{b.title}</div>
                    <div style={{fontSize:10,color:"rgba(255,255,255,0.72)",marginBottom:8}}>{b.sub}</div>
                    <div style={{display:"flex",gap:4}}>
                      {BANNERS.map((_,j)=>(
                        <div key={j} onClick={e=>{e.stopPropagation();goTo(j);}}
                          style={{width:j===cur?14:5,height:4,borderRadius:2,
                            background:j===cur?"#fff":"rgba(255,255,255,0.28)",transition:"all .3s",cursor:"pointer"}}/>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Banner popup - full image with CTA */}
      {popup&&(()=>{
        const ev=evMap[popup.eventKey];
        const img=ev?.bannerUrl||popup.photo;
        return(
          <div style={{position:"fixed",inset:0,zIndex:500,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-end",background:"rgba(0,0,0,0.85)",backdropFilter:"blur(8px)"}}
            onClick={()=>setPopup(null)}>
            <div style={{width:"100%",maxWidth:480,background:C1,borderRadius:"20px 20px 0 0",overflow:"hidden",paddingBottom:32}}
              onClick={e=>e.stopPropagation()}>
              {/* Full banner image */}
              <div style={{position:"relative",width:"100%",height:220}}>
                <img src={img} alt="" style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/>
                <div style={{position:"absolute",inset:0,background:"linear-gradient(180deg,transparent 40%,rgba(0,0,0,0.8) 100%)"}}/>
                {/* Close */}
                <button onClick={()=>setPopup(null)} style={{position:"absolute",top:12,right:12,
                  width:32,height:32,borderRadius:"50%",background:"rgba(0,0,0,0.5)",border:"none",
                  color:"#fff",fontSize:16,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>×</button>
                {/* Tag */}
                <span style={{position:"absolute",top:12,left:12,fontSize:9,fontWeight:800,
                  color:popup.tagColor,background:popup.tagBg,borderRadius:5,padding:"3px 9px"}}>{popup.tag}</span>
                {/* Title overlay */}
                <div style={{position:"absolute",bottom:14,left:16,right:16}}>
                  <div style={{fontSize:9,fontWeight:600,color:popup.accent,marginBottom:2}}>{popup.eyebrow}</div>
                  <div style={{fontSize:20,fontWeight:900,color:"#fff",lineHeight:1.2}}>{popup.title}</div>
                </div>
              </div>
              {/* CTA area */}
              <div style={{padding:"16px 16px 0"}}>
                <div style={{fontSize:12,color:MT,marginBottom:16,lineHeight:1.6}}>{popup.sub}</div>
                <button onClick={()=>{setPopup(null);if(ev)onOpen(ev);}}
                  style={{width:"100%",background:popup.tagBg||Y,border:"none",borderRadius:12,
                    height:48,fontSize:14,fontWeight:800,color:popup.tagColor||"#000",cursor:"pointer"}}>
                  Lihat Campaign →
                </button>
                <button onClick={()=>setPopup(null)}
                  style={{width:"100%",background:"transparent",border:"none",
                    height:36,fontSize:12,color:MT,cursor:"pointer",marginTop:4}}>
                  Tutup
                </button>
              </div>
            </div>
          </div>
        );
      })()}
    </>
  );
}

// ─── LIVE LEVEL FILTER - level only, no industry (live = always Dinings) ──────
function LiveLevelFilter({filter,setFilter}){
  const lvls=[{id:null,label:"All"},{id:"Lv.1",label:"L1"},{id:"Lv.2",label:"L2"},{id:"Lv.3",label:"L3"},{id:"Lv.4",label:"L4"}];
  return(
    <div style={{padding:"10px 16px 0"}}>
      <div style={{display:"flex",gap:5,alignItems:"center"}}>
        <span style={{fontSize:9,color:DT,flexShrink:0,fontWeight:600,letterSpacing:.3,textTransform:"uppercase",minWidth:32}}>Level</span>
        {lvls.map(lv=>{
          const a=filter.level===lv.id;
          const col=lv.id?lvC(lv.id):"#A0A0A0";
          return(
            <button key={String(lv.id)} onClick={()=>setFilter(f=>({...f,level:f.level===lv.id?null:lv.id}))}
              style={{flex:1,background:a?`${col}20`:"transparent",border:`1px solid ${a?col:LN}`,borderRadius:8,
                padding:"7px 2px",fontSize:11,fontWeight:a?700:400,color:a?col:MT,cursor:"pointer",transition:"all .15s",textAlign:"center"}}>
              {lv.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── FILTER BAR - full width, no empty space, minimal ────────────────────────
function FilterBar({filter,setFilter,availableInds,availableLvls}){
  const allInds=[{id:"dining",label:"Dinings",icon:"🍽"},{id:"accom",label:"Accommodations",icon:"🏨"},{id:"ttd",label:"Things to Do",icon:"🎯"}];
  const allLvls=[{id:null,label:"All"},{id:"Lv.1",label:"L1"},{id:"Lv.2",label:"L2"},{id:"Lv.3",label:"L3"},{id:"Lv.4",label:"L4"}];
  // Only show industries/levels that have at least one campaign
  const inds=availableInds?allInds.filter(i=>availableInds.includes(i.id)):allInds;
  const lvls=availableLvls?allLvls.filter(l=>l.id===null||availableLvls.includes(l.id)):allLvls;
  // If current selected industry has no campaigns, switch to first available
  if(inds.length>0&&!inds.find(i=>i.id===filter.industry)){
    setTimeout(()=>setFilter(f=>({...f,industry:inds[0].id,level:null})),0);
  }
  if(inds.length===0)return null;
  return(
    <div style={{padding:"10px 16px 0"}}>
      {inds.length>1&&<div style={{display:"flex",gap:5,marginBottom:0}}>
        {inds.map(ind=>{
          const a=filter.industry===ind.id;
          return(
            <button key={ind.id} onClick={()=>setFilter(f=>({...f,industry:ind.id,level:null}))}
              style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:4,
                background:a?Y:"transparent",border:`1px solid ${a?Y:LN}`,borderRadius:8,
                padding:"7px 2px",fontSize:10,fontWeight:a?700:400,
                color:a?"#000":MT,cursor:"pointer",transition:"all .15s",
                whiteSpace:"nowrap",overflow:"hidden"}}>
              <span style={{fontSize:12,flexShrink:0}}>{ind.icon}</span>
              <span style={{overflow:"hidden",textOverflow:"ellipsis"}}>{ind.label}</span>
            </button>
          );
        })}
      </div>}
      {lvls.length>1&&<div style={{display:"flex",gap:5,marginTop:6,alignItems:"center"}}>
        <span style={{fontSize:9,color:DT,flexShrink:0,fontWeight:600,letterSpacing:.3,textTransform:"uppercase",minWidth:32}}>Level</span>
        {lvls.map(lv=>{
          const a=filter.level===lv.id;
          const col=lv.id?lvC(lv.id):"#A0A0A0";
          return(
            <button key={String(lv.id)} onClick={()=>setFilter(f=>({...f,level:f.level===lv.id?null:lv.id}))}
              style={{flex:1,background:a?`${col}20`:"transparent",
                border:`1px solid ${a?col:LN}`,borderRadius:8,
                padding:"7px 2px",fontSize:11,fontWeight:a?700:400,
                color:a?col:MT,cursor:"pointer",transition:"all .15s",textAlign:"center"}}>
              {lv.label}
            </button>
          );
        })}
      </div>}
    </div>
  );
}

// ─── PODIUM ──────────────────────────────────────────────────────────────────
function Podium({entries,mode,winnerSlots}){
  if(!entries||entries.length<3)return null;
  const top3=entries.slice(0,3);const ord=[top3[1],top3[0],top3[2]];
  const hs=[80,112,62];
  const medals=["🥈","🥇","🥉"];
  const val=(e)=>mode==="sessions"?`${e.sessions} sesi`:mode==="posts"?`${fmtN(e.posts)} post`:idr(e.gmv||0);
  return(
    <div style={{padding:"18px 16px 10px",background:`linear-gradient(180deg,#111 0%,${BG} 100%)`,borderBottom:`1px solid ${LN}`}}>
      <div style={{display:"flex",alignItems:"flex-end",justifyContent:"center",gap:6}}>
        {ord.map((u,i)=>{
          if(!u)return null;
          const isElig=winnerSlots&&u.rank<=winnerSlots;
          const circleBg    = isElig ? "#081C0E" : "#181818";
          const circleBorder= isElig ? "#16A34A" : "#2A2A2A";
          const circleColor = isElig ? "#16A34A" : "#454545";
          const sz=i===1?46:36;
          return(
            <div key={u.rank} style={{flex:1,textAlign:"center",maxWidth:116}}>
              <div style={{width:sz,height:sz,borderRadius:"50%",
                margin:"0 auto 5px",
                background:circleBg,border:`2px solid ${circleBorder}`,
                display:"flex",alignItems:"center",justifyContent:"center",
                fontSize:i===1?17:13,fontWeight:700,color:circleColor}}>
                {initials(u.name)}
              </div>
              <div style={{fontSize:9,color:WT,overflow:"hidden",textOverflow:"ellipsis",
                whiteSpace:"nowrap",padding:"0 2px",marginBottom:1,fontWeight:500}}>
                @{u.name}
              </div>
              <div style={{fontSize:10,color:isElig?"#16A34A":"#555",fontWeight:700,marginBottom:4}}>{val(u)}</div>
              <div style={{position:"relative",height:hs[i],
                background:isElig?"rgba(22,163,74,0.08)":"rgba(255,255,255,0.03)",
                border:`1px solid ${isElig?"#16A34A33":"#222"}`,
                borderRadius:"8px 8px 0 0",
                display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",paddingTop:10}}>
                {isElig&&<div style={{position:"absolute",top:-9,right:-2,background:"#16A34A",borderRadius:6,padding:"1px 5px",fontSize:8,fontWeight:800,color:"#000",whiteSpace:"nowrap"}}>✓ ELIGIBLE</div>}
                <div style={{fontSize:20}}>{medals[i]}</div>
                <div style={{fontSize:13,fontWeight:900,color:isElig?"#16A34A":"#444",marginTop:2}}>#{u.rank}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── RANK ROW ────────────────────────────────────────────────────────────────
const NEON="#16A34A";
function initials(name){
  const s=(name||"").trim();
  // find first alphanumeric character
  const m=s.match(/[a-zA-Z0-9]/);
  return m?m[0].toUpperCase():"#";
}
function RankRow({entry,mode,username,winnerSlots,isUserRow}){
  const ukey = (s) => (s||"").toLowerCase().replace(/\s+/g,"").replace(/@/g,"");
  const match = username && ukey(entry.name) === ukey(username);
  const isMe = isUserRow || match;
  const isElig=!isUserRow&&!!winnerSlots&&typeof entry.rank==="number"&&entry.rank<=winnerSlots;
  const lc=lvC(entry.level);
  const val=mode==="sessions"?`${entry.sessions}`:mode==="posts"?fmtN(entry.posts||0):mode==="views"?fmtN(entry.views||0):idr(entry.gmv||0);
  const lbl=mode==="sessions"?"sesi":mode==="posts"?"post":mode==="views"?"views":"GMV";

  // Explicit colors - no template literal ambiguity
  const circleBg     = isMe ? "#2A2000" : isElig ? "#081C0E" : "#181818";
  const circleBorder = isMe ? "#FCD308" : isElig ? "#16A34A" : "#2A2A2A";
  const circleColor  = isMe ? "#FCD308" : isElig ? "#16A34A" : "#454545";
  const rowBg        = isMe ? "rgba(252,211,8,0.06)" : isElig ? "rgba(22,163,74,0.08)" : "transparent";
  const rowBorder    = isMe ? "#FCD308" : isElig ? "#16A34A" : "transparent";
  const rankColor    = isMe ? "#FCD308" : isElig ? "#16A34A" : "#3A3A3A";
  const nameColor    = isMe ? "#FCD308" : isElig ? "#F0F0F0" : "#383838";
  const valColor     = isElig ? "#F0F0F0" : "#2E2E2E";

  return(
    <div style={{display:"flex",alignItems:"center",gap:10,padding:"10px 16px",
      background:rowBg,
      borderBottom:"1px solid rgba(255,255,255,0.04)",
      borderLeft:`3px solid ${rowBorder}`}}>
      <div style={{width:32,textAlign:"right",fontSize:11,fontWeight:600,color:rankColor,flexShrink:0,fontVariantNumeric:"tabular-nums"}}>
        {typeof entry.rank==="number"?`#${entry.rank}`:entry.rank}
      </div>
      <div style={{width:36,height:36,borderRadius:"50%",flexShrink:0,
        background:circleBg,border:`1.5px solid ${circleBorder}`,
        display:"flex",alignItems:"center",justifyContent:"center",
        fontSize:14,fontWeight:700,color:circleColor}}>
        {initials(entry.name)}
      </div>
      <div style={{flex:1,minWidth:0}}>
        <div style={{display:"flex",alignItems:"center",gap:5,marginBottom:2,flexWrap:"nowrap",overflow:"hidden"}}>
          <div style={{fontSize:13,fontWeight:isElig?700:400,color:nameColor,
            overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:160}}>
            {isMe?`👤 @${entry.name}`:`@${entry.name}`}
          </div>
          {isElig&&<span style={{flexShrink:0,fontSize:8,fontWeight:800,color:"#000",background:"#16A34A",borderRadius:4,padding:"2px 6px"}}>✓ ELIGIBLE</span>}
        </div>
        <div style={{display:"flex",gap:5,alignItems:"center"}}>
          {entry.level&&<span style={{fontSize:9,fontWeight:isElig?600:400,
            color:isElig?lc:"#2E2E2E",background:"transparent",
            border:`1px solid ${isElig?lc+"33":"#242424"}`,
            borderRadius:4,padding:"1px 5px"}}>{entry.level}</span>}
          {entry.city&&<span style={{fontSize:10,color:isElig?"#606060":"#262626"}}>{entry.city}</span>}
        </div>
      </div>
      <div style={{textAlign:"right",flexShrink:0,minWidth:58}}>
        <div style={{fontSize:13,fontWeight:isElig?800:400,color:valColor}}>{val}</div>
        <div style={{fontSize:9,color:"#262626"}}>{lbl}</div>
      </div>
    </div>
  );
}

// ─── USER POSITION PANEL ──────────────────────────────────────────────────────
function UserPosition({entries,username,mode,winnerSlots,event}){
  if(!username)return null;
  const ukey=(s)=>(s||"").toLowerCase().replace(/\s+/g,"").replace(/@/g,"");
  const found=entries.find(e=>ukey(e.name)===ukey(username));
  const getVal=(e)=>mode==="posts"?(e.posts||0):mode==="gmv"?(e.gmv||0):mode==="views"?(e.views||0):(e.sessions||0);
  const fmt=(v)=>mode==="gmv"?idr(v):fmtN(v);
  const lbl=mode==="posts"?"post":mode==="gmv"?"GMV":mode==="views"?"views":"sesi";

  // Count how many eligible slots are filled
  const filledSlots=winnerSlots?entries.filter(e=>e.rank<=winnerSlots).length:0;
  const slotsFull=winnerSlots&&filledSlots>=winnerSlots;

  if(found){
    const rank=found.rank;
    const isElig=winnerSlots&&rank<=winnerSlots;
    const myVal=getVal(found);
    const cutoff=entries[Math.min((winnerSlots||1)-1,entries.length-1)];
    const cutoffVal=cutoff?getVal(cutoff):0;
    const gapToCutoff=!isElig&&cutoffVal>myVal?cutoffVal-myVal+1:0;
    const pct=cutoffVal>0?Math.min(100,Math.round(myVal/cutoffVal*100)):100;
    return(
      <div style={{margin:"12px 16px 0",background:isElig?"rgba(22,163,74,0.05)":"rgba(255,255,255,0.02)",
        border:`1px solid ${isElig?"#16A34A33":"rgba(255,255,255,0.09)"}`,borderRadius:12,padding:"12px 14px"}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:gapToCutoff>0?10:0}}>
          <div style={{fontSize:11,fontWeight:600,color:isElig?"#16A34A":"#FCD308"}}>
            {isElig?`✓ Eligible #${rank}`:`📍 Posisi kamu #${rank}`}
          </div>
          <div style={{fontSize:12,fontWeight:700,color:WT}}>{fmt(myVal)} <span style={{fontSize:9,color:MT,fontWeight:400}}>{lbl}</span></div>
        </div>
        {!isElig&&gapToCutoff>0&&<>
          <div style={{height:3,background:"rgba(255,255,255,0.06)",borderRadius:2,overflow:"hidden",marginBottom:6}}>
            <div style={{height:"100%",borderRadius:2,background:"#FCD308",width:pct+"%",transition:"width .4s"}}/>
          </div>
          <div style={{fontSize:10,color:MT}}>
            Butuh +{fmt(gapToCutoff)} {lbl} lagi untuk masuk top {winnerSlots}
            {slotsFull&&<span style={{color:DT}}> · Slot penuh, terus tingkatkan untuk geser posisi</span>}
          </div>
        </>}
      </div>
    );
  }

  // Not in top - only show if slots not yet full (first-come-first-serve)
  const filledPct=winnerSlots?Math.round(filledSlots/winnerSlots*100):0;
  if(slotsFull)return null; // Slots full - no point showing "kamu belum masuk"

  const cutoff=entries[Math.min((winnerSlots||1)-1,entries.length-1)];
  const cutoffVal=cutoff?getVal(cutoff):0;
  return(
    <div style={{margin:"12px 16px 0",background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:12,padding:"12px 14px"}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:8}}>
        <div style={{fontSize:11,color:MT}}>📍 Kamu belum masuk leaderboard ini</div>
        {winnerSlots&&<div style={{fontSize:10,color:filledSlots>0?"#FCD308":DT,flexShrink:0,fontWeight:600}}>{filledSlots}/{winnerSlots} slot terisi</div>}
      </div>
      {cutoffVal>0&&<div style={{fontSize:11,color:WT,fontWeight:600,marginBottom:5}}>
        Butuh min <span style={{color:Y}}>{fmt(cutoffVal)}</span> {lbl} untuk bersaing
      </div>}
      <div style={{fontSize:10,color:DT,lineHeight:1.6}}>
        ⚡ Sistem ini <span style={{color:MT,fontWeight:600}}>first come, first serve</span>: slot diberikan kepada {winnerSlots} kreator pertama yang memenuhi syarat. Segera capai targetmu sebelum slot penuh.
      </div>
    </div>
  );
}


// ─── TIER SECTION ─────────────────────────────────────────────────────────────
// Each person appears ONLY in the highest tier their GMV qualifies for
// (if GMV > 500JT → Tier 3 only, not Tier 1 or 2)
function buildTierEntries(allTierData, tiers) {
  // allTierData: flat array of all monthly entries with GMV
  // We assign each person to exactly their highest qualifying tier
  const assigned = {};
  allTierData.forEach(e => {
    let bestTier = null;
    for (let t = tiers.length; t >= 1; t--) {
      const tier = tiers[t - 1];
      if (e.gmv >= tier.minGMV && (!tier.maxGMV || e.gmv <= tier.maxGMV)) {
        bestTier = tier.tier;
        break;
      }
    }
    if (bestTier !== null) {
      if (!assigned[bestTier]) assigned[bestTier] = [];
      assigned[bestTier].push(e);
    }
  });
  // Re-rank within each tier
  Object.keys(assigned).forEach(t => {
    assigned[t] = assigned[t]
      .sort((a, b) => b.gmv - a.gmv)
      .map((e, i) => ({ ...e, rank: i + 1 }));
  });
  return assigned;
}

function TierSection({ tier, entries, username, accentColor, selectedTier }) {
  const [open, setOpen] = useState(tier.tier === selectedTier);
  const [showAll, setShowAll] = useState(false);

  // Auto-open/close when parent selects this tier
  useEffect(() => { setOpen(tier.tier === selectedTier); }, [selectedTier]);
  const all = entries || [];
  const top3 = all.slice(0, 3);
  const rest = all.filter(e => e.rank > 3);
  const vis = showAll ? rest : rest.slice(0, 7);
  const st = WK_STATS[tier.lbKey] || {};
  const filled = `${Math.min(all.length, tier.slots)}/${tier.slots}`;
  const isFull = all.length >= tier.slots;

  return (
    <div style={{ marginBottom: 8, borderRadius: 14, overflow: "hidden", border: `1px solid ${open ? accentColor + "50" : LN}`, background: C1 }}>
      {/* Tier header */}
      <div onClick={() => setOpen(o => !o)}
        style={{ cursor: "pointer", WebkitTapHighlightColor: "transparent" }}>
        {/* Top color bar */}
        <div style={{ height: 3, background: `linear-gradient(90deg,${accentColor},${accentColor}66)` }} />
        <div style={{ padding: "12px 14px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
            {/* Tier badge */}
            <div style={{ flexShrink: 0, width: 40, height: 40, borderRadius: 10, background: `${accentColor}18`, border: `1px solid ${accentColor}44`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 900, color: accentColor }}>T{tier.tier}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: WT, marginBottom: 2 }}>
                {idr(tier.minGMV)}{tier.maxGMV ? ` – ${idr(tier.maxGMV)}` : "+"}
              </div>
              <div style={{ display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap" }}>
                {tier.minMerchants && <span style={{ fontSize: 9, color: MT }}>Min {tier.minMerchants} merchant</span>}
                <span style={{ fontSize: 9, color: isFull ? NEON : accentColor, fontWeight: 700 }}>
                  {filled} slot {isFull ? "✓ Terpenuhi" : "tersedia"}
                </span>
              </div>
            </div>
            {/* Prize */}
            <div style={{ textAlign: "right", flexShrink: 0 }}>
              {tier.prizeType === "cash"
                ? <div style={{ fontSize: 15, fontWeight: 900, color: Y }}>{idr(tier.prizeAmount)}</div>
                : <div>
                  <div style={{ fontSize: 9, color: MT, marginBottom: 2 }}>🎁 Hadiah</div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: GD, maxWidth: 90, textAlign: "right" }}>{tier.prizeItem}</div>
                </div>}
              <div style={{ fontSize: 8, color: MT, marginTop: 1 }}>per pemenang</div>
            </div>
            <div style={{ color: DT, fontSize: 11, marginLeft: 2, flexShrink: 0, display: "inline-block", transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform .2s" }}>▾</div>
          </div>
          {/* Eligibility mini-strip - always visible */}
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            <span style={{ fontSize: 9, color: accentColor, background: `${accentColor}14`, border: `1px solid ${accentColor}30`, borderRadius: 5, padding: "2px 7px" }}>
              GMV ≥ {idr(tier.minGMV)}
            </span>
            {tier.maxGMV && <span style={{ fontSize: 9, color: MT, background: C2, border: `1px solid ${LN}`, borderRadius: 5, padding: "2px 7px" }}>
              Maks {idr(tier.maxGMV)}
            </span>}
            <span style={{ fontSize: 9, color: MT, background: C2, border: `1px solid ${LN}`, borderRadius: 5, padding: "2px 7px" }}>
              {tier.slots} slot
            </span>
          </div>
        </div>
      </div>

      {/* Expanded leaderboard */}
      {open && (
        <div style={{ borderTop: `1px solid ${LN}` }}>
          {all.length === 0
            ? <div style={{ padding: "20px 16px", textAlign: "center" }}>
              <div style={{ fontSize: 11, color: MT }}>Belum ada kreator di tier ini</div>
            </div>
            : <>
              {top3.length >= 3 && <Podium entries={top3} mode="gmv" winnerSlots={tier.slots} />}
              {top3.length > 0 && top3.length < 3 && top3.map(e => (
                <RankRow key={e.rank} entry={e} mode="gmv" username={username} winnerSlots={tier.slots} />
              ))}
              {rest.length > 0 && (
                <>
                  <div style={{ display: "flex", padding: "6px 16px 3px 82px", borderTop: `1px solid ${LN}` }}>
                    <div style={{ flex: 1, fontSize: 8, color: DT, textTransform: "uppercase", letterSpacing: .4 }}>Kreator</div>
                    <div style={{ fontSize: 8, color: DT, textTransform: "uppercase", minWidth: 60, textAlign: "right" }}>GMV</div>
                  </div>
                  <div>{vis.map(e => <RankRow key={e.rank} entry={e} mode="gmv" username={username} winnerSlots={tier.slots} />)}</div>
                  {!showAll && rest.length > 7 && (
                    <button onClick={() => setShowAll(true)} style={{ width: "100%", background: "none", border: "none", borderTop: `1px solid ${LN}`, color: MT, padding: "10px", fontSize: 11, cursor: "pointer" }}>
                      Tampilkan semua ({rest.length}) ↓
                    </button>
                  )}
                </>
              )}
              <UserPosition entries={all} username={username} mode="gmv" winnerSlots={tier.slots} event={event}/>
            </>}
        </div>
      )}
    </div>
  );
}

// ─── EVENT SHEET ──────────────────────────────────────────────────────────────
function EventSheet({event,username,globalLevel,onClose}){
  const isW=event.type==="weekly",isM=event.type==="monthly",isL=event.type==="live";
  const defW=isW?(event.weeks?.find(w=>w.st==="live")?.w||4):null;
  const [selW,setSelW]=useState(defW);
  const [levelF,setLevelF]=useState(globalLevel||null);
  const [showAll,setShowAll]=useState(false);
  const [selTier,setSelTier]=useState(isM&&event.tiers?event.tiers[0].tier:1);
  const acc=isL?event.accent:isM?GD:Y;
  const typeLabel=isL?"LIVE":isM?"MONTHLY":"WEEKLY";
  const lbKey=isL?event.lbKey:isW?`${event.lbPrefix}_w${selW}`:null;
  const rawEntries=lbKey?LB[lbKey]||[]:[];
  const mode=isL?(event.metric==="sessions"?"sessions":"gmv"):event.metric==="posts"?"posts":event.metric==="views"?"views":"gmv";
  // Filter by campaign's allowed levels (mandatory - set by admin per campaign)
  const allowedLvls=parseLevels(event.creatorLevel);
  const lvlFiltered=allowedLvls.length>0?rawEntries.filter(e=>allowedLvls.includes(e.level)):rawEntries;
  // Optional min thresholds - if set, only qualifying creators appear
  // Level Up uses Gross GMV (e.grossGmv if available, else e.gmv as fallback)
  const isLU=event.type==="levelup";
  const threshFiltered=lvlFiltered.filter(e=>{
    if(event.minGMV>0){
      const gmvVal=isLU?(e.grossGmv||e.gmv||0):(e.gmv||0);
      if(gmvVal<event.minGMV)return false;
    }
    if(event.minPosts>0&&(e.posts||0)<event.minPosts)return false;
    if(event.minViews>0&&(e.views||0)<event.minViews)return false;
    if(event.minSessions>0&&(e.sessions||0)<event.minSessions)return false;
    if(event.city&&e.city&&!e.city.toLowerCase().includes(event.city.toLowerCase()))return false;
    return true;
  });
  const allEntries=levelF?threshFiltered.filter(e=>e.level===levelF):threshFiltered;
  const top3=allEntries.slice(0,3);const listE=allEntries.filter(e=>e.rank>3);
  const vis=showAll?listE:listE.slice(0,12);
  const curWk=isW?event.weeks?.find(w=>w.w===selW):null;
  const stKey=isW?`${event.lbPrefix}_w${selW}`:isL?event.lbKey:null;
  const st=stKey?WK_STATS[stKey]||{}:{};
  const winnerSlots=event.maxSlots||0;
  const prizeStr=event.prizeType==="cash"?idr(event.prizeAmount||0):(isM?`${idr(Math.max(...(event.tiers||[]).map(t=>t.prizeAmount||0)))}+`:"Item");
  return(
    <div style={{position:"fixed",inset:0,zIndex:400,display:"flex",flexDirection:"column"}}>
      <div onClick={onClose} style={{flex:1,background:"rgba(0,0,0,0.84)",backdropFilter:"blur(8px)"}}/>
      <div style={{background:BG,borderRadius:"20px 20px 0 0",maxHeight:"95svh",overflowY:"auto",borderTop:`1px solid ${LH}`}}>
        <div style={{display:"flex",justifyContent:"center",padding:"10px 0 0"}}><div style={{width:36,height:4,borderRadius:2,background:DT}}/></div>
        {/* header */}
        <div style={{padding:"14px 18px",borderBottom:`1px solid ${LN}`}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
            <div style={{flex:1,minWidth:0,paddingRight:10}}>
              <div style={{display:"flex",gap:5,alignItems:"center",marginBottom:8,flexWrap:"wrap"}}>
                <span style={{fontSize:9,fontWeight:800,color:"#000",background:acc,borderRadius:4,padding:"2px 7px"}}>{typeLabel}</span>
                <span style={{fontSize:9,fontWeight:700,color:acc,background:`${acc}14`,border:`1px solid ${acc}40`,borderRadius:4,padding:"2px 7px"}}>● BERLANGSUNG</span>
                {event.industry&&<span style={{fontSize:9,color:MT,background:C2,border:`1px solid ${LN}`,borderRadius:4,padding:"2px 6px"}}>{IND_MAP[event.industry]}</span>}{event.city&&<span style={{fontSize:9,color:"#60A5FA",background:"rgba(96,165,250,0.1)",border:"1px solid rgba(96,165,250,0.25)",borderRadius:4,padding:"2px 6px"}}>📍 {event.city}</span>}
              </div>
              <div style={{display:"flex",alignItems:"center",gap:8}}>
                <span style={{fontSize:22}}>{event.icon}</span>
                <div style={{fontSize:17,fontWeight:800,color:WT}}>{event.label}</div>
              </div>
              <div style={{fontSize:12,color:MT,marginTop:5,lineHeight:1.55}}>{event.desc}</div>
            </div>
            <button onClick={onClose} style={{flexShrink:0,background:C2,border:`1px solid ${LN}`,color:MT,borderRadius:8,width:30,height:30,cursor:"pointer",fontSize:15}}>✕</button>
          </div>
        </div>
        {/* week tabs - ALL weeks so user can check past winners */}
        {isW&&(
          <div style={{padding:"10px 16px 4px",borderBottom:`1px solid ${LN}`}}>
            <div style={{fontSize:9,color:DT,letterSpacing:.5,textTransform:"uppercase",marginBottom:8}}>Pilih Minggu</div>
            <div style={{display:"flex",gap:6}}>
              {event.weeks?.map(w=>{
                const isLive=w.st==="live";
                const isSel=selW===w.w;
                return(
                  <button key={w.w} onClick={()=>{setSelW(w.w);setShowAll(false);}}
                    style={{flex:1,background:isSel?Y:C2,border:`1px solid ${isSel?Y:LN}`,borderRadius:10,padding:"8px 4px",cursor:"pointer",transition:"all .15s",position:"relative"}}>
                    {isLive&&!isSel&&<div style={{position:"absolute",top:-3,right:-3,width:8,height:8,borderRadius:"50%",background:"#16A34A",border:"1.5px solid #0A0A0A"}}/>}
                    <div style={{fontSize:12,fontWeight:700,color:isSel?"#000":isLive?"#16A34A":MT}}>W{w.w}</div>
                    <div style={{fontSize:8,color:isSel?"#333":DT,marginTop:2}}>{w.s}</div>
                    <div style={{fontSize:8,color:isSel?"#555":DT}}>{w.st==="ended"?"Selesai":"Live"}</div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
        {/* eligibility */}
        <div style={{padding:"14px 16px",borderBottom:`1px solid ${LN}`,background:C1}}>
          <div style={{fontSize:9,fontWeight:700,color:acc,letterSpacing:1,textTransform:"uppercase",marginBottom:12}}>✓ ELIGIBILITY CRITERIA</div>

          {/* Monthly: tier selector tabs + dynamic details */}
          {isM&&event.tiers&&(()=>{
            const t=event.tiers[selTier-1]||event.tiers[0];
            const prizeVal=t.prizeType==="cash"?idr(t.prizeAmount):`🎁 ${t.prizeItem}`;
            const prizeColor=t.prizeType==="cash"?Y:GD;
            return(<>
              {/* Tier tab pills */}
              <div style={{display:"flex",gap:5,marginBottom:12,overflowX:"auto",scrollbarWidth:"none"}}>
                {event.tiers.map(ti=>{
                  const active=selTier===ti.tier;
                  return(
                    <button key={ti.tier} onClick={()=>setSelTier(ti.tier)}
                      style={{flexShrink:0,flex:1,background:active?`${GD}22`:"transparent",
                        border:`1.5px solid ${active?GD:LN}`,borderRadius:8,
                        padding:"6px 4px",cursor:"pointer",transition:"all .15s"}}>
                      <div style={{fontSize:11,fontWeight:active?700:400,color:active?GD:MT}}>Tier {ti.tier}</div>
                      <div style={{fontSize:9,color:active?GD+"99":DT,marginTop:1}}>
                        {idr(ti.minGMV).replace("Rp ","")+`${ti.maxGMV?"":"+"}` }
                      </div>
                    </button>
                  );
                })}
              </div>
              {/* Dynamic 2x2 grid for selected tier */}
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:10}}>
                {[
                  {icon:"👤",label:"LEVEL KREATOR",val:t.creatorLevel||event.creatorLevel||"",color:WT},
                  {icon:"🏆",label:"SLOTS",val:`${t.slots} slot`,color:WT},
                  {icon:"🎁",label:"PRIZE",val:prizeVal,color:prizeColor},
                  {icon:"📈",label:"MIN GMV",val:idr(t.minGMV)+(t.maxGMV?` – ${idr(t.maxGMV)}`:"+"),color:WT},
                ].map((s,i)=>(
                  <div key={i} style={{background:C2,border:`1px solid ${LN}`,borderRadius:12,padding:"13px"}}>
                    <div style={{fontSize:19,marginBottom:7}}>{s.icon}</div>
                    <div style={{fontSize:9,color:MT,letterSpacing:.5,textTransform:"uppercase",marginBottom:4}}>{s.label}</div>
                    <div style={{fontSize:13,fontWeight:800,color:s.color,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{s.val}</div>
                  </div>
                ))}
              </div>
              {t.minMerchants&&<div style={{background:C2,border:`1px solid ${LN}`,borderRadius:10,padding:"9px 12px",display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
                <span style={{fontSize:11,color:MT}}>Min Merchant Unik</span>
                <span style={{fontSize:12,fontWeight:800,color:WT}}>{t.minMerchants} merchant</span>
              </div>}
              <div style={{background:C2,border:`1px solid ${LN}`,borderRadius:10,padding:"9px 12px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <span style={{fontSize:11,color:MT}}>Periode</span>
                <span style={{fontSize:12,fontWeight:700,color:WT}}>Juni 2026</span>
              </div>
            </>);
          })()}

          {/* Weekly / Live: static criteria */}
          {!isM&&(<>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:10}}>
              {[
                {icon:"👤",label:"LEVEL KREATOR",val:event.creatorLevel||"Semua Level"},
                {icon:"🏆",label:"SLOTS",val:event.maxSlots},
                {icon:"🎁",label:"PRIZE",val:prizeStr},
                {icon:"📅",label:"PERIODE",val:isW&&curWk?`${curWk.s} s/d ${curWk.e}`:event.start||""},
              ].map((s,i)=>(
                <div key={i} style={{background:C2,border:`1px solid ${LN}`,borderRadius:12,padding:"13px"}}>
                  <div style={{fontSize:19,marginBottom:7}}>{s.icon}</div>
                  <div style={{fontSize:9,color:MT,letterSpacing:.5,textTransform:"uppercase",marginBottom:4}}>{s.label}</div>
                  <div style={{fontSize:13,fontWeight:800,color:WT,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{s.val}</div>
                </div>
              ))}
            </div>
            {event.minPosts>0&&<div style={{background:C2,border:`1px solid ${LN}`,borderRadius:10,padding:"9px 12px",display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}><span style={{fontSize:11,color:MT}}>Min Posts</span><span style={{fontSize:12,fontWeight:800,color:WT}}>{event.minPosts} post</span></div>}
            {event.minGMV>0&&<div style={{background:C2,border:`1px solid ${LN}`,borderRadius:10,padding:"9px 12px",display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}><span style={{fontSize:11,color:MT}}>Min GMV {event.type==="levelup"?"(Gross)":"(Nett)"}</span><span style={{fontSize:12,fontWeight:800,color:WT}}>{idr(event.minGMV)}</span></div>}
            {event.minViews>0&&<div style={{background:C2,border:`1px solid ${LN}`,borderRadius:10,padding:"9px 12px",display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}><span style={{fontSize:11,color:MT}}>Min Views</span><span style={{fontSize:12,fontWeight:800,color:WT}}>{fmtN(event.minViews)}</span></div>}
            {isL&&event.minSessions>0&&<div style={{background:C2,border:`1px solid ${LN}`,borderRadius:10,padding:"9px 12px",display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}><span style={{fontSize:11,color:MT}}>Min Sesi</span><span style={{fontSize:12,fontWeight:800,color:WT}}>{event.minSessions} sesi</span></div>}
          {isL&&<div style={{background:"rgba(252,211,8,0.06)",border:"1px solid rgba(252,211,8,0.18)",borderRadius:9,padding:"8px 12px",marginBottom:6,fontSize:11,color:"rgba(252,211,8,0.85)",lineHeight:1.6}}>⏱ <span style={{fontWeight:700}}>1 sesi = min 2 jam live.</span> Sesi di bawah 2 jam tidak dihitung.</div>}
            {st.total&&<div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:6}}>
              {[{l:"CREATORS",v:st.total||""},{l:"ELIGIBLE",v:st.eligible||""},{l:"FILLED",v:st.filled||"",hi:true},{l:"PER WINNER",v:event.prizeType==="item"?"Item":idr(event.prizeAmount||0)}].map((s,i)=>(
                <div key={i} style={{background:BG,border:`1px solid ${LN}`,borderRadius:9,padding:"8px 5px",textAlign:"center"}}>
                  <div style={{fontSize:8,color:MT,textTransform:"uppercase",marginBottom:3,lineHeight:1.3,letterSpacing:.2}}>{s.l}</div>
                  <div style={{fontSize:11,fontWeight:800,color:s.hi?acc:WT,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{s.v}</div>
                </div>
              ))}
            </div>}
          </>)}
        </div>
        {/* monthly tier - TAB system, only selected tier's leaderboard shows */}
        {isM&&(()=>{
          const allMonthly=LB[event.tiers[event.tiers.length-1].lbKey]||[];
          const allFlat=[...allMonthly];
          event.tiers.slice(0,-1).forEach(t=>{
            const td=LB[t.lbKey]||[];
            td.forEach(e=>{ if(!allFlat.find(x=>x.name===e.name)) allFlat.push(e); });
          });
          const tierAssigned=buildTierEntries(allFlat,event.tiers);
          const curTier=event.tiers.find(t=>t.tier===selTier)||event.tiers[0];
          // Filter by THIS tier's creatorLevel (each tier can have different allowed levels)
          const tierAllowedLvls=parseLevels(curTier.creatorLevel||event.creatorLevel);
          const rawTierEntries=tierAssigned[curTier.tier]||[];
          const lvlTierEntries=tierAllowedLvls.length>0
            ?rawTierEntries.filter(e=>tierAllowedLvls.includes(e.level))
            :rawTierEntries;
          // Apply event-level optional min thresholds
          const tierEntries=lvlTierEntries.filter(e=>{
            if(event.minPosts>0&&(e.posts||0)<event.minPosts)return false;
            if(event.minViews>0&&(e.views||0)<event.minViews)return false;
            if(event.city&&e.city&&!e.city.toLowerCase().includes(event.city.toLowerCase()))return false;
            return true;
          });
          const tierTop3=tierEntries.slice(0,3);
          const tierRest=tierEntries.filter(e=>e.rank>3);
          const filled=`${Math.min(tierEntries.length,curTier.slots)}/${curTier.slots}`;
          const isFull=tierEntries.length>=curTier.slots;
          return(
            <div>
              {/* Tier tab row */}
              <div style={{display:"flex",gap:0,borderBottom:`1px solid ${LN}`}}>
                {event.tiers.map(ti=>{
                  const active=selTier===ti.tier;
                  return(
                    <button key={ti.tier} onClick={()=>{setSelTier(ti.tier);setShowAll(false);}}
                      style={{flex:1,background:active?`${GD}18`:"transparent",
                        borderBottom:`2px solid ${active?GD:"transparent"}`,
                        border:"none",borderRadius:0,padding:"10px 4px",
                        cursor:"pointer",transition:"all .15s"}}>
                      <div style={{fontSize:11,fontWeight:active?700:400,color:active?GD:MT}}>Tier {ti.tier}</div>
                      <div style={{fontSize:9,color:active?GD+"99":DT,marginTop:1}}>
                        {idr(ti.minGMV).replace("Rp ","")}{ti.maxGMV?"":"+"}
                      </div>
                    </button>
                  );
                })}
              </div>
              {/* Selected tier info bar */}
              <div style={{padding:"12px 16px",background:C1,borderBottom:`1px solid ${LN}`,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div>
                  <div style={{fontSize:11,color:MT,marginBottom:3}}>
                    GMV {idr(curTier.minGMV)}{curTier.maxGMV?` – ${idr(curTier.maxGMV)}`:"+"}
                    {curTier.minMerchants?` · min ${curTier.minMerchants} merchant`:""}
                  </div>
                  <div style={{fontSize:11,fontWeight:600,color:isFull?NEON:GD}}>
                    {filled} slot {isFull?"✓ Terpenuhi":"tersedia"}
                  </div>
                </div>
                <div style={{textAlign:"right"}}>
                  {curTier.prizeType==="cash"
                    ?<div style={{fontSize:16,fontWeight:900,color:Y}}>{idr(curTier.prizeAmount)}</div>
                    :<div style={{fontSize:12,fontWeight:700,color:GD}}>🎁 {curTier.prizeItem}</div>}
                  <div style={{fontSize:9,color:MT,marginTop:1}}>per pemenang</div>
                </div>
              </div>
              {/* Podium for this tier */}
              {tierTop3.length>=3&&<Podium entries={tierTop3} mode="gmv" winnerSlots={curTier.slots}/>}
              {/* Col header */}
              <div style={{display:"flex",padding:"7px 16px 3px 82px"}}>
                <div style={{flex:1,fontSize:8,color:DT,textTransform:"uppercase",letterSpacing:.4}}>Kreator</div>
                <div style={{fontSize:8,color:DT,textTransform:"uppercase",minWidth:58,textAlign:"right"}}>GMV</div>
              </div>
              {/* Top 3 if less than 3 */}
              {tierTop3.length>0&&tierTop3.length<3&&<div style={{borderTop:`1px solid ${LN}`}}>{tierTop3.map(e=><RankRow key={e.rank} entry={e} mode="gmv" username={username} winnerSlots={curTier.slots}/>)}</div>}
              {/* Rest */}
              <div style={{borderTop:`1px solid ${LN}`}}>
                {tierRest.slice(0,showAll?999:12).map(e=><RankRow key={e.rank} entry={e} mode="gmv" username={username} winnerSlots={curTier.slots}/>)}
              </div>
              {!showAll&&tierRest.length>12&&(
                <button onClick={()=>setShowAll(true)} style={{width:"100%",background:"none",border:"none",borderTop:`1px solid ${LN}`,color:MT,padding:"11px",fontSize:12,cursor:"pointer"}}>
                  Lihat lebih banyak ({tierRest.length}) ↓
                </button>
              )}
              {tierEntries.length===0&&(
                <div style={{textAlign:"center",padding:"32px 20px"}}>
                  <div style={{fontSize:24,marginBottom:8}}>📋</div>
                  <div style={{fontSize:13,color:MT}}>Belum ada kreator di tier ini</div>
                </div>
              )}
              <UserPosition entries={tierEntries} username={username} mode="gmv" winnerSlots={curTier.slots} event={event}/>
            </div>
          );
        })()}
        {/* weekly/live flat leaderboard - no level filter, level is admin-set per campaign */}
        {(isW||isL)&&<>
          {/* week prize info for currently selected week */}
          {isW&&curWk&&(
            <div style={{padding:"8px 16px",background:`${Y}08`,borderBottom:`1px solid ${LN}`,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <div style={{fontSize:11,color:MT}}>Prize Week {selW}:</div>
              <div style={{fontSize:12,fontWeight:800,color:Y}}>{(event.weekPrizes&&event.weekPrizes[selW])||idr(event.prizeAmount)} × {event.maxSlots} pemenang</div>
            </div>
          )}
          {top3.length>=3&&<Podium entries={top3} mode={mode} winnerSlots={winnerSlots}/>}
          <div style={{display:"flex",padding:"7px 16px 3px 82px"}}><div style={{flex:1,fontSize:8,color:DT,textTransform:"uppercase",letterSpacing:.4}}>Kreator</div><div style={{fontSize:8,color:DT,textTransform:"uppercase",minWidth:58,textAlign:"right"}}>{mode==="posts"?"Post":mode==="sessions"?"Sesi":"GMV"}</div></div>
          <div style={{borderTop:`1px solid ${LN}`}}>{vis.map(e=><RankRow key={e.rank} entry={e} mode={mode} username={username} winnerSlots={winnerSlots}/>)}</div>
          {!showAll&&listE.length>12&&<button onClick={()=>setShowAll(true)} style={{width:"100%",background:"none",border:"none",borderTop:`1px solid ${LN}`,color:MT,padding:"11px",fontSize:12,cursor:"pointer"}}>Lihat lebih banyak ({listE.length}) ↓</button>}
          {allEntries.length===0&&<div style={{textAlign:"center",padding:"32px 20px"}}><div style={{fontSize:26,marginBottom:8}}>📋</div><div style={{fontSize:13,color:MT}}>Belum ada data</div></div>}
          <UserPosition entries={allEntries} username={username} mode={mode} winnerSlots={winnerSlots} event={event}/>
        </>}
        {/* Disclaimer - only inside event sheet */}
        <div style={{margin:"16px 16px 8px",background:"rgba(252,211,8,0.05)",border:"1px solid rgba(252,211,8,0.15)",borderRadius:12,padding:"12px 16px",textAlign:"center"}}>
          <div style={{fontSize:10,color:"rgba(252,211,8,0.7)",lineHeight:1.65}}>
            ⚠️ Data diperbarui dengan <span style={{fontWeight:700}}>delay 2 hari</span> dari aktivitas aktual.<br/>
            Data final mengacu hasil validasi TikTok di akhir bulan.
          </div>
        </div>
        <div style={{height:24}}/>
      </div>
    </div>
  );
}

// ─── EVENT CARD ───────────────────────────────────────────────────────────────
function EventCard({event,onOpen}){
  const isL=event.type==="live",isM=event.type==="monthly",isW=event.type==="weekly";
  const acc=isL?event.accent:isM?GD:Y;
  const typeLabel=isL?"LIVE":isM?"MONTHLY":"WEEKLY";
  const liveWk=isW?event.weeks?.find(w=>w.st==="live"):null;
  const topPrize=isM?event.tiers?.at(-1):{prizeType:event.prizeType,prizeAmount:event.prizeAmount};
  return(
    <div onClick={()=>onOpen(event)}
      style={{background:C1,border:`1px solid ${acc}32`,borderRadius:13,padding:"14px 16px",cursor:"pointer",marginBottom:8,boxShadow:`0 2px 12px ${acc}0A`,WebkitTapHighlightColor:"transparent"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:9}}>
        <div style={{flex:1,minWidth:0,paddingRight:8}}>
          <div style={{display:"flex",gap:5,alignItems:"center",marginBottom:7,flexWrap:"wrap"}}>
            <span style={{fontSize:9,fontWeight:800,color:"#000",background:acc,borderRadius:4,padding:"2px 7px"}}>{typeLabel}</span>
            <span style={{fontSize:9,fontWeight:700,color:acc,background:`${acc}12`,border:`1px solid ${acc}35`,borderRadius:4,padding:"2px 7px"}}>● BERLANGSUNG</span>
            {event.industry&&<span style={{fontSize:9,color:MT,background:C2,border:`1px solid ${LN}`,borderRadius:4,padding:"2px 6px"}}>{IND_MAP[event.industry]}</span>}{event.city&&<span style={{fontSize:9,color:"#60A5FA",background:"rgba(96,165,250,0.1)",border:"1px solid rgba(96,165,250,0.25)",borderRadius:4,padding:"2px 6px"}}>📍 {event.city}</span>}
          </div>
          <div style={{display:"flex",alignItems:"center",gap:8}}>
            <span style={{fontSize:20,flexShrink:0}}>{event.icon}</span>
            <div>
              <div style={{fontSize:14,fontWeight:800,color:WT}}>{event.label}</div>
              <div style={{fontSize:11,color:MT,marginTop:2}}>
                {isW&&liveWk?`Week ${liveWk.w} · ${liveWk.s} – ${liveWk.e}`:isM||isL?`${event.start} – ${event.end}`:""}
              </div>
            </div>
          </div>
        </div>
        <div style={{textAlign:"right",flexShrink:0}}>
          {topPrize?.prizeType==="cash"?<><div style={{fontSize:14,fontWeight:900,color:Y}}>{idr(topPrize.prizeAmount)}</div><div style={{fontSize:9,color:MT,marginTop:1}}>/pemenang</div></>
            :topPrize?.prizeItem?<><div style={{fontSize:11,fontWeight:800,color:GD,maxWidth:90,textAlign:"right"}}>{(topPrize.prizeItem||"").split(" ").slice(0,2).join(" ")}</div><div style={{fontSize:9,color:MT,marginTop:1}}>hadiah</div></>
            :null}
        </div>
      </div>
      <div style={{display:"flex",alignItems:"center",gap:6,marginTop:4,flexWrap:"wrap"}}>
        {/* Level badges - per campaign, admin-set */}
        {parseLevels(event.creatorLevel).map(lv=>(
          <span key={lv} style={{fontSize:9,fontWeight:700,color:lvC(lv),background:`${lvC(lv)}18`,border:`1px solid ${lvC(lv)}33`,borderRadius:5,padding:"2px 6px"}}>{lv}</span>
        ))}
        <span style={{fontSize:11,color:MT,flex:1}}>{event.maxSlots} slot{event.minPosts>0?` · min ${event.minPosts} post`:""}
          {event.minGMV>0?` · min GMV ${idr(event.minGMV)}`:""}
          {event.minViews>0?` · min ${fmtN(event.minViews)} views`:""}
          {event.minSessions>0?` · min ${event.minSessions} sesi`:""}
          {isM?" · per tier":""}</span>
        <span style={{fontSize:11,fontWeight:600,color:acc}}>Detail →</span>
      </div>
    </div>
  );
}

// ─── ONBOARDING ───────────────────────────────────────────────────────────────
function Onboarding({onDone}){
  const [v,setV]=useState(""); const [err,setErr]=useState("");
  const go=()=>{ const u=v.replace("@","").trim(); if(!u){setErr("Masukkan Uniq ID TikTok kamu");return;} saveU({username:u,at:Date.now()}); onDone({username:u}); };
  return(
    <div style={{minHeight:"100svh",background:BG,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"32px 20px"}}>
      <style>{`@keyframes rise{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}} input::placeholder{color:#3a3a3a}`}</style>
      <div style={{animation:"rise .5s ease",textAlign:"center",marginBottom:36}}>
        <div style={{display:"flex",justifyContent:"center",marginBottom:18}}><Logo h={38}/></div>
        <div style={{fontSize:22,fontWeight:800,color:WT,lineHeight:1.25,marginBottom:8}}>Creator<br/>Leaderboard</div>
        <div style={{fontSize:13,color:MT,lineHeight:1.65}}>Pantau peringkat semua campaign<br/>AdtreeGO × TikTok GO · Juni 2026</div>
      </div>
      <div style={{width:"100%",maxWidth:340,animation:"rise .5s ease .12s both"}}>
        <div style={{background:C1,border:`1px solid ${LH}`,borderRadius:18,padding:"26px 22px"}}>
          <div style={{fontSize:13,fontWeight:700,color:WT,marginBottom:5}}>Uniq ID TikTok kamu</div>
          <div style={{fontSize:12,color:MT,marginBottom:14,lineHeight:1.5}}>Masukkan Uniq ID agar kami bisa menandai posisimu di setiap leaderboard.</div>
          <div style={{display:"flex",alignItems:"center",background:C2,border:`1.5px solid ${err?"#FF4444":LH}`,borderRadius:11,padding:"0 14px",height:48,marginBottom:err?6:16}}>
            <span style={{color:Y,fontWeight:800,fontSize:16,marginRight:4}}>@</span>
            <input value={v} onChange={e=>{setV(e.target.value);setErr("");}} onKeyDown={e=>e.key==="Enter"&&go()} placeholder="uniq_id_kamu" autoCapitalize="none" autoCorrect="off" spellCheck="false" style={{flex:1,background:"none",border:"none",outline:"none",color:WT,fontSize:15,height:"100%"}}/>
          </div>
          {err&&<div style={{color:"#FF4444",fontSize:11,marginBottom:12}}>{err}</div>}
          <button onClick={go} style={{width:"100%",background:Y,border:"none",borderRadius:11,height:48,fontSize:15,fontWeight:800,color:"#000",cursor:"pointer"}}>Lihat Leaderboard →</button>
        </div>
        <div style={{textAlign:"center",marginTop:12,fontSize:11,color:DT}}>Gratis · Tidak perlu buat akun baru</div>
      </div>
    </div>
  );
}

// ─── EMPTY STATE ──────────────────────────────────────────────────────────────
function EmptyState({level}){
  return(
    <div style={{textAlign:"center",padding:"48px 24px"}}>
      <div style={{fontSize:36,marginBottom:14}}>🔍</div>
      <div style={{fontSize:15,fontWeight:700,color:WT,marginBottom:8}}>
        Tidak ada campaign{level?` untuk ${level}`:""}
      </div>
      <div style={{fontSize:13,color:MT,lineHeight:1.65}}>
        {level
          ? `Belum ada campaign aktif untuk industri & level ini.\nCoba pilih level lain atau hubungi tim AdtreeGO.`
          : "Belum ada campaign aktif untuk industri ini saat ini."}
      </div>
    </div>
  );
}

// ─── ADMIN SYSTEM ─────────────────────────────────────────────────────────────
const ADMIN_CREDS=[{user:"admin",pass:"adtree2026"},{user:"superadmin",pass:"go2026!"}];
const saveAdmin=(d)=>{try{localStorage.setItem("ag_admin",JSON.stringify(d));}catch(e){}};
const loadAdmin=()=>{try{const s=localStorage.getItem("ag_admin");return s?JSON.parse(s):null;}catch(e){return null;}};
const saveCampaigns=(d)=>{try{localStorage.setItem("ag_campaigns",JSON.stringify(d));}catch(e){}};
const loadCampaigns=()=>{try{const s=localStorage.getItem("ag_campaigns");return s?JSON.parse(s):null;}catch(e){return null;}};

// ── Admin Login ──────────────────────────────────────────────────────────────
function AdminLogin({onLogin}){
  const [u,setU]=useState(""); const [p,setP]=useState(""); const [err,setErr]=useState(""); const [show,setShow]=useState(false);
  const go=()=>{
    const match=ADMIN_CREDS.find(c=>c.user===u.trim()&&c.pass===p);
    if(match){saveAdmin({user:match.user,at:Date.now()});onLogin(match.user);}
    else setErr("Username atau password salah.");
  };
  return(
    <div style={{minHeight:"100svh",background:BG,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"32px 20px"}}>
      <style>{`input::placeholder{color:#3a3a3a}`}</style>
      <div style={{display:"flex",justifyContent:"center",marginBottom:24}}><Logo h={32}/></div>
      <div style={{width:"100%",maxWidth:360,background:C1,border:`1px solid ${LH}`,borderRadius:18,padding:"28px 24px"}}>
        <div style={{fontSize:16,fontWeight:800,color:WT,marginBottom:4}}>Admin Panel</div>
        <div style={{fontSize:12,color:MT,marginBottom:22}}>Login untuk kelola campaign & leaderboard</div>
        <div style={{marginBottom:12}}>
          <div style={{fontSize:11,color:MT,marginBottom:6}}>Username</div>
          <input value={u} onChange={e=>setU(e.target.value)} placeholder="admin"
            style={{width:"100%",background:C2,border:`1.5px solid ${LN}`,borderRadius:10,padding:"10px 14px",color:WT,fontSize:14,outline:"none",boxSizing:"border-box"}}/>
        </div>
        <div style={{marginBottom:err?8:20}}>
          <div style={{fontSize:11,color:MT,marginBottom:6}}>Password</div>
          <div style={{position:"relative"}}>
            <input value={p} onChange={e=>{setP(e.target.value);setErr("");}} type={show?"text":"password"} placeholder="••••••••"
              onKeyDown={e=>e.key==="Enter"&&go()}
              style={{width:"100%",background:C2,border:`1.5px solid ${err?"#FF4444":LN}`,borderRadius:10,padding:"10px 40px 10px 14px",color:WT,fontSize:14,outline:"none",boxSizing:"border-box"}}/>
            <button onClick={()=>setShow(s=>!s)} style={{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",color:MT,cursor:"pointer",fontSize:14}}>{show?"🙈":"👁"}</button>
          </div>
        </div>
        {err&&<div style={{fontSize:11,color:"#FF4444",marginBottom:14}}>{err}</div>}
        <button onClick={go} style={{width:"100%",background:Y,border:"none",borderRadius:10,height:46,fontSize:14,fontWeight:800,color:"#000",cursor:"pointer"}}>
          Masuk sebagai Admin →
        </button>
      </div>
      <button onClick={()=>{window.location.hash="";window.location.href=window.location.pathname}} style={{marginTop:16,background:"none",border:`1px solid ${LN}`,borderRadius:10,padding:"8px 20px",fontSize:12,color:MT,cursor:"pointer"}}>
        ← Kembali ke Leaderboard
      </button>
    </div>
  );
}

// ── Reusable field components ─────────────────────────────────────────────────
const FS={width:"100%",background:"#1A1A1A",border:"1px solid rgba(255,255,255,0.1)",borderRadius:8,padding:"9px 12px",color:WT,fontSize:13,outline:"none",boxSizing:"border-box",fontFamily:"inherit"};
const FLabel=({children,hint})=><div style={{fontSize:10,fontWeight:600,color:"#666",letterSpacing:.5,textTransform:"uppercase",marginBottom:6}}>{children}{hint&&<span style={{fontSize:9,color:DT,textTransform:"none",fontWeight:400,marginLeft:6}}>{hint}</span>}</div>;
const FInp=({val,onChange,type="text",placeholder=""})=><input value={val??""} onChange={e=>onChange(type==="number"?Number(e.target.value):e.target.value)} type={type} placeholder={placeholder} style={FS}/>;
const FRow=({label,hint,children,half})=>(
  <div style={{marginBottom:16,flex:half?"0 0 calc(50% - 6px)":undefined}}>
    <FLabel hint={hint}>{label}</FLabel>{children}
  </div>
);
const FSel=({val,onChange,opts})=>(
  <select value={val??""} onChange={e=>onChange(e.target.value)} style={{...FS,cursor:"pointer"}}>
    {opts.map(([v,l])=><option key={v} value={v}>{l}</option>)}
  </select>
);
const FGrid=({cols=2,children})=><div style={{display:"grid",gridTemplateColumns:`repeat(${cols},1fr)`,gap:12,marginBottom:0}}>{children}</div>;
const FSection=({title,children})=>(
  <div style={{background:"#111",border:"1px solid rgba(255,255,255,0.07)",borderRadius:12,padding:"16px",marginBottom:12}}>
    {title&&<div style={{fontSize:11,fontWeight:700,color:Y,letterSpacing:.6,textTransform:"uppercase",marginBottom:14}}>{title}</div>}
    {children}
  </div>
);
const FCheck=({checked,onChange,label})=>(
  <label style={{display:"flex",alignItems:"center",gap:8,cursor:"pointer",marginBottom:10}}>
    <input type="checkbox" checked={!!checked} onChange={e=>onChange(e.target.checked)}
      style={{width:14,height:14,accentColor:Y,cursor:"pointer"}}/>
    <span style={{fontSize:12,color:MT}}>{label}</span>
  </label>
);

// ── List Paste Editor (brands/SKUs/campaigns) ─────────────────────────────────
function ListPasteEditor({value,onChange,label,placeholder,hint}){
  const items=(value||[]);
  const [raw,setRaw]=useState(items.join('\n'));
  const sync=(v)=>{
    setRaw(v);
    const parsed=v.split('\n').map(s=>s.trim()).filter(Boolean);
    onChange(parsed);
  };
  return(
    <div style={{marginBottom:16}}>
      <FLabel hint={hint}>{label}</FLabel>
      <textarea value={raw} onChange={e=>sync(e.target.value)} rows={5} placeholder={placeholder}
        style={{...FS,resize:"vertical",fontFamily:"monospace",fontSize:12}}/>
      <div style={{fontSize:10,color:DT,marginTop:4}}>{items.length} item{items.length!==1?"s":""} · satu per baris</div>
    </div>
  );
}

// ── Level Picker (updated with all combos) ────────────────────────────────────
function LevelPicker({value,onChange,label="Level Kreator"}){
  const opts=[
    ["Semua Level","Semua"],
    ["Lv.1","L1"],["Lv.2","L2"],["Lv.3","L3"],["Lv.4","L4"],
    ["Lv.1 & Lv.2","L1+L2"],["Lv.2 & Lv.3","L2+L3"],["Lv.3 & Lv.4","L3+L4"],
    ["Lv.1 & Lv.2 & Lv.3","L1+L2+L3"],["Lv.2 & Lv.3 & Lv.4","L2+L3+L4"],
  ];
  return(
    <div style={{marginBottom:16}}>
      <FLabel>{label}</FLabel>
      <div style={{display:"flex",gap:5,flexWrap:"wrap"}}>
        {opts.map(([v,l])=>{const a=value===v;const base=v.split(" & ")[0];const col=v==="Semua Level"?"#A0A0A0":v.includes("&")?"#A78BFA":lvC(base);return(
          <button key={v} onClick={()=>onChange(v)}
            style={{background:a?`${col}22`:"transparent",border:`1.5px solid ${a?col:"rgba(255,255,255,0.1)"}`,borderRadius:7,padding:"6px 10px",fontSize:11,fontWeight:a?700:400,color:a?col:"#666",cursor:"pointer"}}>
            {l}
          </button>
        );})}
      </div>
    </div>
  );
}

// ── Universal Tier Editor (works for any campaign type) ───────────────────────
function TierEditor({tiers,onChange,metricLabel="GMV"}){
  const isGmv=metricLabel==="GMV";
  const newTier=(n)=>({tier:n,minVal:0,maxVal:null,slots:5,prizeType:"cash",prizeAmount:500000,prizeItem:"",creatorLevel:"Semua Level",minMerchants:0,lbKey:`t${n}`});
  const add=()=>onChange([...tiers,newTier(tiers.length+1)]);
  const del=(i)=>onChange(tiers.filter((_,j)=>j!==i).map((t,j)=>({...t,tier:j+1,lbKey:`t${j+1}`})));
  const upd=(i,k,v)=>onChange(tiers.map((t,j)=>j===i?{...t,[k]:v}:t));
  return(
    <div>
      {tiers.map((t,i)=>(
        <div key={i} style={{background:"#1A1A1A",border:`1px solid ${GD}33`,borderRadius:10,padding:"14px",marginBottom:10}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
            <div style={{display:"flex",alignItems:"center",gap:8}}>
              <div style={{background:`${GD}22`,border:`1px solid ${GD}44`,borderRadius:6,padding:"3px 9px",fontSize:11,fontWeight:700,color:GD}}>Tier {t.tier}</div>
              {i===tiers.length-1&&<span style={{fontSize:9,color:DT}}>top tier, tanpa batas max</span>}
            </div>
            <button onClick={()=>del(i)} style={{background:"none",border:"none",color:"#FF4444",cursor:"pointer",fontSize:13,padding:"2px 6px"}}>✕</button>
          </div>
          <FGrid cols={2}>
            <FRow label={`Min ${metricLabel}`}><FInp val={t.minVal||t.minGMV||0} onChange={v=>upd(i,"minVal",v)} type="number" placeholder="0"/></FRow>
            <FRow label={`Max ${metricLabel}`} hint={i===tiers.length-1?"tanpa batas":""}><FInp val={t.maxVal||t.maxGMV||0} onChange={v=>upd(i,"maxVal",v===0?null:Number(v))} type="number" placeholder="0"/></FRow>
            <FRow label="Slots"><FInp val={t.slots} onChange={v=>upd(i,"slots",v)} type="number" placeholder="5"/></FRow>
            <FRow label="Min Merchants/POIs"><FInp val={t.minMerchants||0} onChange={v=>upd(i,"minMerchants",v)} type="number" placeholder="0"/></FRow>
            <FRow label="Prize Type"><FSel val={t.prizeType} onChange={v=>upd(i,"prizeType",v)} opts={[["cash","💵 Cash (IDR)"],["item","🎁 Hadiah Fisik"],["pct","% dari GMV"]]}/></FRow>
            <FRow label={t.prizeType==="item"?"Nama Hadiah":t.prizeType==="pct"?"Persentase (%)":"Prize (IDR)"}>
              {t.prizeType==="item"?<FInp val={t.prizeItem} onChange={v=>upd(i,"prizeItem",v)} placeholder="iPhone 17 Pro"/>
               :t.prizeType==="pct"?<FInp val={t.prizePct||0} onChange={v=>upd(i,"prizePct",v)} type="number" placeholder="10"/>
               :<FInp val={t.prizeAmount} onChange={v=>upd(i,"prizeAmount",v)} type="number" placeholder="0"/>}
            </FRow>
          </FGrid>
          <LevelPicker value={t.creatorLevel||"Semua Level"} onChange={v=>upd(i,"creatorLevel",v)} label="Level Kreator (Tier ini)"/>
        </div>
      ))}
      <button onClick={add} style={{width:"100%",background:"transparent",border:`1px dashed ${GD}55`,borderRadius:8,padding:"10px",fontSize:12,color:GD,cursor:"pointer"}}>
        + Tambah Tier
      </button>
    </div>
  );
}

// ── Week Editor ───────────────────────────────────────────────────────────────
function WeekEditor({weeks,onChange}){
  const upd=(i,k,v)=>onChange(weeks.map((w,j)=>j===i?{...w,[k]:v}:w));
  return(
    <div>
      {weeks.map((w,i)=>(
        <div key={i} style={{background:"#1A1A1A",border:`1px solid ${Y}22`,borderRadius:10,padding:"14px",marginBottom:10}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
            <div style={{fontSize:12,fontWeight:700,color:Y}}>Week {w.w}</div>
            <FSel val={w.st} onChange={v=>upd(i,"st",v)} opts={[["live","● Berlangsung"],["ended","Selesai"]]}/>
          </div>
          <FGrid cols={2}>
            <FRow label="Start Date"><FInp val={w.s} onChange={v=>upd(i,"s",v)} placeholder="1 Jun"/></FRow>
            <FRow label="End Date"><FInp val={w.e} onChange={v=>upd(i,"e",v)} placeholder="7 Jun"/></FRow>
            <FRow label="Prize Type"><FSel val={w.prizeType||"cash"} onChange={v=>upd(i,"prizeType",v)} opts={[["cash","Cash (IDR)"],["item","Hadiah Fisik"]]}/></FRow>
            <FRow label={w.prizeType==="item"?"Nama Hadiah":"Prize Amount (IDR)"}>
              {w.prizeType==="item"?<FInp val={w.prizeItem||""} onChange={v=>upd(i,"prizeItem",v)} placeholder="iPhone 17 Pro"/>:<FInp val={w.prizeAmount||0} onChange={v=>upd(i,"prizeAmount",v)} type="number" placeholder="150000"/>}
            </FRow>
            <FRow label="Slots"><FInp val={w.slots||5} onChange={v=>upd(i,"slots",v)} type="number" placeholder="5"/></FRow>
          </FGrid>
          <LevelPicker value={w.creatorLevel||"Lv.1"} onChange={v=>upd(i,"creatorLevel",v)} label="Level Kreator (Week ini)"/>
        </div>
      ))}
    </div>
  );
}

// ── Campaign Form - clean tabbed ──────────────────────────────────────────────
function CampaignForm({initial,onSave,onCancel}){
  const defWeeks=[
    {w:1,s:"1 Jun",e:"7 Jun",  st:weekSt("1 Jun","7 Jun"),  prizeType:"cash",prizeAmount:150000,slots:5,creatorLevel:"Lv.1"},
    {w:2,s:"8 Jun",e:"15 Jun", st:weekSt("8 Jun","15 Jun"), prizeType:"cash",prizeAmount:150000,slots:5,creatorLevel:"Lv.1"},
    {w:3,s:"16 Jun",e:"23 Jun",st:weekSt("16 Jun","23 Jun"),prizeType:"cash",prizeAmount:150000,slots:5,creatorLevel:"Lv.1"},
    {w:4,s:"24 Jun",e:"31 Jun",st:weekSt("24 Jun","31 Jun"),prizeType:"cash",prizeAmount:150000,slots:5,creatorLevel:"Lv.1"},
  ];
  const blank={
    // maps to: events.event_name / live_events.event_name
    label:"", key:"", icon:"📋",
    // events.challenge_type
    type:"weekly",
    // events.industry
    industry:"dining",
    // events.rank_by
    metric:"posts",
    // events.gmv_source
    gmvSource:"nett",
    // events.creator_level
    creatorLevel:"Semua Level",
    // events.min_posts / min_gmv_idr / min_views / live_events.min_sessions
    minPosts:0, minGMV:0, minViews:0, minSessions:0,
    // events.max_slots
    maxSlots:5,
    // events.prize_type / prize_idr / prize_item
    prizeType:"cash", prizeAmount:0, prizeItem:"",
    // events.creator_city
    city:"",
    // events.description
    desc:"",
    // events.is_active
    isActive:true, status:"live",
    // banners.image_url
    bannerUrl:"",
    // events.accent
    accentColor:"#FCD308",
    // events.start_date / end_date
    startDate:"", endDate:"",
    // events.sort_order
    sortOrder:1,
    // event_weeks rows
    weeks:defWeeks,
    // event_tiers rows
    tiers:[],
    // events.requires_level_up
    requireLevelUp:false, isLevelUp:false,
    levelFrom:"Lv.1", levelTo:"Lv.2",
    // live_events.win_type
    winType:"highest_gmv",
    // events.period
    period:"monthly",
  };
  const [f,setF]=useState(()=>({...blank,...(initial||{})}));
  const set=(k,v)=>setF(p=>({...p,[k]:v}));
  const isLive=f.type==="live";
  const isMonthly=f.type==="monthly";
  const isWeekly=f.type==="weekly";
  const isLevelUp=f.type==="levelup";
  const isLiveGmvSession=f.type==="live_gmv_session";
  const isNewCreator=f.type==="new_creator";
  const isBrand=f.type==="brand";
  const isSku=f.type==="sku";
  const isSpecial=isLevelUp||isNewCreator||isBrand||isSku||isLiveGmvSession;

  return(
    <div style={{background:BG,minHeight:"100svh",fontFamily:"-apple-system,'SF Pro Text',sans-serif"}}>
      <style>{`select option{background:#1A1A1A;color:#F0F0F0} input[type=checkbox]{accent-color:#FCD308}`}</style>
      {/* Sticky header */}
      <div style={{position:"sticky",top:0,zIndex:20,background:"rgba(10,10,10,0.97)",backdropFilter:"blur(12px)",padding:"12px 16px",borderBottom:"1px solid rgba(255,255,255,0.07)",display:"flex",alignItems:"center",gap:10}}>
        <button onClick={onCancel} style={{background:"none",border:"1px solid rgba(255,255,255,0.1)",borderRadius:8,padding:"7px 12px",color:MT,fontSize:12,cursor:"pointer"}}>← Batal</button>
        <div style={{flex:1,fontSize:14,fontWeight:800,color:WT}}>{initial?"Edit Campaign":"Buat Campaign Baru"}</div>
        <button onClick={()=>onSave(f)} style={{background:Y,border:"none",borderRadius:8,padding:"8px 20px",fontSize:13,fontWeight:700,color:"#000",cursor:"pointer"}}>
          {initial?"Update":"Create"} Campaign
        </button>
      </div>

      <div style={{padding:"14px 16px 80px"}}>
        {/* ── Identity ── */}
        <FSection title="Identitas Campaign">
          <FGrid cols={2}>
            <FRow label="Event Name *"><FInp val={f.label} onChange={v=>set("label",v)} placeholder="e.g. GMV Challenge"/></FRow>
            <FRow label="Event Key *"><FInp val={f.key} onChange={v=>set("key",v)} placeholder="e.g. gmv-challenge"/></FRow>
            <FRow label="Icon"><FInp val={f.icon} onChange={v=>set("icon",v)} placeholder="📋"/></FRow>
            <FRow label="Accent Color"><div style={{display:"flex",gap:8,alignItems:"center"}}>
              <input type="color" value={f.accentColor||"#FCD308"} onChange={e=>set("accentColor",e.target.value)} style={{width:40,height:36,border:"none",background:"none",cursor:"pointer",padding:0}}/>
              <FInp val={f.accentColor} onChange={v=>set("accentColor",v)} placeholder="#FCD308"/>
            </div></FRow>
          </FGrid>
          <FRow label="Description"><textarea value={f.desc||""} onChange={e=>set("desc",e.target.value)} rows={3} placeholder="Deskripsi singkat campaign ini..." style={{...FS,resize:"vertical"}}/></FRow>
          <FRow label="Banner URL" hint="URL gambar promo"><FInp val={f.bannerUrl} onChange={v=>set("bannerUrl",v)} placeholder="https://example.com/banner.jpg"/>
            {f.bannerUrl&&<img src={f.bannerUrl} alt="" onError={e=>e.target.style.display="none"} style={{marginTop:8,width:"100%",height:72,objectFit:"cover",borderRadius:8,border:"1px solid rgba(255,255,255,0.1)"}}/>}
          </FRow>
          <FGrid cols={2}>
            <FRow label="Sort Order"><FInp val={f.sortOrder||1} onChange={v=>set("sortOrder",v)} type="number" placeholder="1"/></FRow>
            <FRow label="Status">
              <FSel val={isLive?String(f.isActive):f.status}
                onChange={v=>isLive?set("isActive",v==="true"):set("status",v)}
                opts={isLive?[["true","● Aktif"],["false","Selesai"]]:
                  [["live","● Berlangsung"],["ended","Selesai"]]}/>
            </FRow>
          </FGrid>
        </FSection>

        {/* ── Config ── */}
        <FSection title="Konfigurasi">
          <FGrid cols={2}>
            <FRow label="Challenge Type *">
              <FSel val={f.type} onChange={v=>{set("type",v);if(v==="levelup"||v==="live_gmv_session")set("gmvSource","gross");}} opts={[
                ["weekly","📅 Weekly"],
                ["monthly","📆 Monthly"],
                ["live","📺 Live Streaming"],
                ["live_gmv_session","💥 Live GMV Single Session"],
                ["levelup","⬆️ Level Up"],
                ["new_creator","🌱 New Creator"],
                ["brand","🏷️ Brand/POI Challenge"],
                ["sku","📦 SKU/Product Challenge"],
              ]}/>
            </FRow>
            {(isLive)&&<FRow label="Period" hint="untuk filter di leaderboard">
              <FSel val={f.period} onChange={v=>set("period",v)} opts={[["monthly","Monthly"],["weekly","Weekly"]]}/>
            </FRow>}
            <FRow label="Industry *">
              <FSel val={f.industry} onChange={v=>set("industry",v)} opts={[["dining","🍽 Dinings"],["accom","🏨 Accommodations"],["ttd","🎯 Things to Do"]]}/>
            </FRow>
            {!isSpecial&&<FRow label="Metric *">
              <FSel val={f.metric} onChange={v=>set("metric",v)} opts={[
                ["posts","📝 Posts"],
                ["gmv","💰 GMV"],
                ["views","👁 Views (Total)"],
                ["views_per_post","👁 Views per Post (rata-rata)"],
                ["mixed","📊 GMV + Posts"],
                ["sessions","🔴 Live Sessions"],
                ["live_gmv_single","💥 GMV Single Live Session"],
              ]}/>
            </FRow>}
            {(f.metric==="gmv"||f.metric==="mixed"||isLive)&&<FRow label="GMV Source">
              <FSel val={f.gmvSource||"nett"} onChange={v=>set("gmvSource",v)} opts={[["nett","Nett (Redemption amount)"],["gross","Gross (Sales value)"]]}/>
            </FRow>}
            {(isWeekly||isMonthly)&&<FRow label="Period">
              <FSel val={f.period||"monthly"} onChange={v=>set("period",v)} opts={[["monthly","Monthly"],["weekly","Weekly"]]}/>
            </FRow>}
          </FGrid>
          <FGrid cols={2}>
            <FRow label="Start Date"><FInp val={f.startDate} onChange={v=>set("startDate",v)} type="date"/></FRow>
            <FRow label="End Date"><FInp val={f.endDate} onChange={v=>set("endDate",v)} type="date"/></FRow>
          </FGrid>
        </FSection>

        {/* ── Eligibility ── */}
        <FSection title="Eligibility Criteria">
          {!isSpecial&&<LevelPicker value={f.creatorLevel||"Semua Level"} onChange={v=>set("creatorLevel",v)} label="Creator Level *"/>}
          {!isSpecial&&<FRow label="Creator City" hint="kosong = nasional"><FInp val={f.city} onChange={v=>set("city",v)} placeholder="e.g. Jakarta, Bandung, Surabaya"/></FRow>}
          {!isSpecial&&<FGrid cols={3}>
            {(f.metric==="posts"||f.metric==="mixed")&&<FRow label="Min Posts"><FInp val={f.minPosts||0} onChange={v=>set("minPosts",v)} type="number" placeholder="0"/></FRow>}
            {(f.metric==="gmv"||f.metric==="mixed")&&<FRow label="Min GMV (IDR)"><FInp val={f.minGMV||0} onChange={v=>set("minGMV",v)} type="number" placeholder="0"/></FRow>}
            {(f.metric==="views"||f.metric==="views_per_post")&&<FRow label="Min Views"><FInp val={f.minViews||0} onChange={v=>set("minViews",v)} type="number" placeholder="0"/></FRow>}
            {f.metric==="views_per_post"&&<FRow label="Min Posts (untuk hitung avg)" hint="avg = total views / total posts"><FInp val={f.minPosts||0} onChange={v=>set("minPosts",v)} type="number" placeholder="1"/></FRow>}
            {(f.metric==="sessions"||isLive)&&<FRow label="Min Sessions"><FInp val={f.minSessions||0} onChange={v=>set("minSessions",v)} type="number" placeholder="0"/></FRow>}
            {(f.metric==="sessions"||isLive)&&<div style={{gridColumn:"1/-1",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:8,padding:"8px 12px",fontSize:11,color:MT,lineHeight:1.6}}>⚠️ <span style={{color:Y,fontWeight:600}}>1 sesi = min 2 jam live.</span></div>}
            {isLive&&<FRow label="Win Type"><FSel val={f.winType||"highest_gmv"} onChange={v=>set("winType",v)} opts={[["highest_gmv","Highest GMV"],["criteria","Criteria (GMV + Sessions)"]]}/></FRow>}
            <FRow label="Min Campaigns Diikuti" hint="kreator harus ikut min N campaign berbeda"><FInp val={f.minCampaigns||0} onChange={v=>set("minCampaigns",v)} type="number" placeholder="0"/></FRow>
          </FGrid>}

          {/* ── Level Up ── */}
          {isLevelUp&&(
            <div style={{background:`${Y}0A`,border:`1px solid ${Y}25`,borderRadius:10,padding:"14px"}}>
              <div style={{fontSize:12,fontWeight:700,color:Y,marginBottom:10}}>⬆️ Level Up Campaign</div>
              <div style={{background:"rgba(255,165,0,0.08)",border:"1px solid rgba(255,165,0,0.3)",borderRadius:8,padding:"8px 12px",marginBottom:12,fontSize:11,color:"#FFA500"}}>
                📊 <b>GMV Source: Gross (Sales Value)</b> — menggunakan nilai Gross GMV, bukan Nett.
              </div>
              <FGrid cols={2}>
                <FRow label="Dari Level"><FSel val={f.levelFrom||"Lv.1"} onChange={v=>set("levelFrom",v)} opts={[["Lv.1","⭐ L1"],["Lv.2","⭐⭐ L2"],["Lv.3","⭐⭐⭐ L3"]]}/></FRow>
                <FRow label="Ke Level"><FSel val={f.levelTo||"Lv.2"} onChange={v=>set("levelTo",v)} opts={[["Lv.2","⭐⭐ L2"],["Lv.3","⭐⭐⭐ L3"],["Lv.4","⭐⭐⭐⭐ L4"]]}/></FRow>
              </FGrid>
              <LevelPicker value={f.creatorLevel||"Semua Level"} onChange={v=>set("creatorLevel",v)}/>
              <FRow label="Creator City" hint="kosong = nasional"><FInp val={f.city} onChange={v=>set("city",v)} placeholder="e.g. Jakarta"/></FRow>
              <FGrid cols={3}>
                <FRow label="Min Gross GMV (IDR)"><FInp val={f.minGMV||0} onChange={v=>set("minGMV",v)} type="number" placeholder="0"/></FRow>
                <FRow label="Min Posts"><FInp val={f.minPosts||0} onChange={v=>set("minPosts",v)} type="number" placeholder="0"/></FRow>
                <FRow label="Min Views"><FInp val={f.minViews||0} onChange={v=>set("minViews",v)} type="number" placeholder="0"/></FRow>
              </FGrid>
              <FCheck checked={f.requireLevelUp} onChange={v=>set("requireLevelUp",v)} label="Require level-up to qualify (tracked via creator_level_log)"/>
            </div>
          )}

          {/* ── Live GMV Single Session ── */}
          {isLiveGmvSession&&(
            <div style={{background:"rgba(255,77,79,0.06)",border:"1px solid rgba(255,77,79,0.25)",borderRadius:10,padding:"14px"}}>
              <div style={{fontSize:12,fontWeight:700,color:"#FF4D4F",marginBottom:10}}>💥 Live GMV Single Session</div>
              <div style={{fontSize:12,color:MT,lineHeight:1.65,marginBottom:12}}>Kreator yang berhasil mencapai target GMV dalam <b>1 sesi live saja</b> langsung menang (first come, first serve selama slot masih ada).</div>
              <FGrid cols={2}>
                <FRow label="Target GMV per Sesi (IDR)" hint="GMV dalam 1 sesi live"><FInp val={f.targetGmvPerSession||0} onChange={v=>set("targetGmvPerSession",v)} type="number" placeholder="5000000"/></FRow>
                <FRow label="GMV Source"><FSel val={f.gmvSource||"nett"} onChange={v=>set("gmvSource",v)} opts={[["nett","Nett (GMV Nett IDR)"],["gross","Gross (GMV Gross IDR)"]]}/></FRow>
                <FRow label="Min Durasi Sesi (jam)" hint="sesi harus min X jam"><FInp val={f.minSessionHours||2} onChange={v=>set("minSessionHours",v)} type="number" placeholder="2"/></FRow>
                <FRow label="Max Slots (pemenang)" hint="first come first serve"><FInp val={f.maxSlots||5} onChange={v=>set("maxSlots",v)} type="number" placeholder="5"/></FRow>
              </FGrid>
              <LevelPicker value={f.creatorLevel||"Semua Level"} onChange={v=>set("creatorLevel",v)}/>
              <div style={{background:`${Y}0A`,border:`1px solid ${Y}20`,borderRadius:8,padding:"8px 12px",fontSize:11,color:"rgba(252,211,8,0.8)"}}>
                ⚡ Slot langsung terisi saat kreator memenuhi syarat. DB field: <code>tiktok_live_sessions.gmv_nett_idr / gmv_gross_idr</code>
              </div>
            </div>
          )}

          {/* ── New Creator ── */}
          {isNewCreator&&(
            <div style={{background:"rgba(34,197,94,0.06)",border:"1px solid rgba(34,197,94,0.2)",borderRadius:10,padding:"14px"}}>
              <div style={{fontSize:12,fontWeight:700,color:"#22C55E",marginBottom:10}}>🌱 New Creator Campaign</div>
              <div style={{fontSize:12,color:MT,lineHeight:1.65,marginBottom:12}}>Hanya berlaku untuk kreator yang belum pernah aktif sebelumnya. Bulan berjalan valid — bulan berikutnya tidak eligible lagi jika sudah aktif.</div>
              <FGrid cols={2}>
                <FRow label="Inaktif Minimal (bulan)" hint="creator harus tidak ada aktivitas selama N bulan terakhir"><FInp val={f.minInactiveMonths||6} onChange={v=>set("minInactiveMonths",v)} type="number" placeholder="6"/></FRow>
                <FRow label="Atau: Join Date setelah"><FInp val={f.joinAfterDate||""} onChange={v=>set("joinAfterDate",v)} type="date" placeholder=""/></FRow>
              </FGrid>
              <LevelPicker value={f.creatorLevel||"Semua Level"} onChange={v=>set("creatorLevel",v)}/>
              <FRow label="Creator City" hint="kosong = nasional"><FInp val={f.city} onChange={v=>set("city",v)} placeholder="e.g. Jakarta"/></FRow>
              <FGrid cols={3}>
                <FRow label="Min Posts (bulan ini)"><FInp val={f.minPosts||0} onChange={v=>set("minPosts",v)} type="number" placeholder="0"/></FRow>
                <FRow label="Min GMV (IDR)"><FInp val={f.minGMV||0} onChange={v=>set("minGMV",v)} type="number" placeholder="0"/></FRow>
                <FRow label="Max Slots"><FInp val={f.maxSlots||10} onChange={v=>set("maxSlots",v)} type="number" placeholder="10"/></FRow>
              </FGrid>
              <div style={{background:"rgba(255,255,255,0.04)",borderRadius:8,padding:"8px 12px",fontSize:11,color:DT}}>
                DB: cek <code>tiktok_go_video_summary.author_id</code> tidak ada di data 6 bulan sebelumnya
              </div>
            </div>
          )}

          {/* ── Brand/POI Challenge ── */}
          {isBrand&&(
            <div style={{background:"rgba(167,139,250,0.06)",border:"1px solid rgba(167,139,250,0.2)",borderRadius:10,padding:"14px"}}>
              <div style={{fontSize:12,fontWeight:700,color:"#A78BFA",marginBottom:10}}>🏷️ Brand/POI Challenge</div>
              <div style={{fontSize:12,color:MT,lineHeight:1.65,marginBottom:12}}>Kreator harus memposting konten yang mengandung brand/POI dari daftar di bawah. Sistem akan mencocokkan nama brand/POI dari data transaksi.</div>
              <FGrid cols={2}>
                <FRow label="Min Brand dari Daftar" hint="kreator harus posting min N brand berbeda dari list"><FInp val={f.minBrandsFromList||1} onChange={v=>set("minBrandsFromList",v)} type="number" placeholder="1"/></FRow>
                <FRow label="Match Type"><FSel val={f.brandMatchType||"contains"} onChange={v=>set("brandMatchType",v)} opts={[["contains","Contains (nama mengandung)"],["exact","Exact Match"],["starts_with","Starts With"]]}/></FRow>
              </FGrid>
              <ListPasteEditor
                value={f.brandList||[]}
                onChange={v=>set("brandList",v)}
                label="Daftar Brand/POI (poi_name_en atau poi_l2_asci_name)"
                placeholder={"McDonald's Indonesia\nKFC\nIndomaret\nAlfamart"}
                hint="DB: tiktok_go_video_transactions.poi_name_en"/>
              <LevelPicker value={f.creatorLevel||"Semua Level"} onChange={v=>set("creatorLevel",v)}/>
              <FRow label="Creator City"><FInp val={f.city} onChange={v=>set("city",v)} placeholder="e.g. Jakarta"/></FRow>
              <FGrid cols={2}>
                <FRow label="Min Posts"><FInp val={f.minPosts||0} onChange={v=>set("minPosts",v)} type="number" placeholder="0"/></FRow>
                <FRow label="Min GMV (IDR)"><FInp val={f.minGMV||0} onChange={v=>set("minGMV",v)} type="number" placeholder="0"/></FRow>
              </FGrid>
            </div>
          )}

          {/* ── SKU/Product Challenge (Live) ── */}
          {isSku&&(
            <div style={{background:"rgba(251,146,60,0.06)",border:"1px solid rgba(251,146,60,0.2)",borderRadius:10,padding:"14px"}}>
              <div style={{fontSize:12,fontWeight:700,color:"#FB923C",marginBottom:10}}>📦 SKU/Product Challenge</div>
              <div style={{fontSize:12,color:MT,lineHeight:1.65,marginBottom:12}}>Khusus Live Streaming. Kreator harus menjual produk dari daftar SKU di bawah. Sistem mencocokkan nama produk dari data sesi live.</div>
              <FGrid cols={2}>
                <FRow label="Min SKU dari Daftar" hint="kreator harus jual min N produk berbeda dari list"><FInp val={f.minSkusFromList||1} onChange={v=>set("minSkusFromList",v)} type="number" placeholder="1"/></FRow>
                <FRow label="Match Type"><FSel val={f.skuMatchType||"contains"} onChange={v=>set("skuMatchType",v)} opts={[["contains","Contains (nama mengandung)"],["exact","Exact Match"]]}/></FRow>
                <FRow label="Min GMV dari SKU List (IDR)"><FInp val={f.minSkuGmv||0} onChange={v=>set("minSkuGmv",v)} type="number" placeholder="0"/></FRow>
                <FRow label="GMV Source"><FSel val={f.gmvSource||"nett"} onChange={v=>set("gmvSource",v)} opts={[["nett","Nett"],["gross","Gross"]]}/></FRow>
              </FGrid>
              <ListPasteEditor
                value={f.skuList||[]}
                onChange={v=>set("skuList",v)}
                label="Daftar Nama Produk/SKU"
                placeholder={"Indomie Goreng\nAqua 600ml\nPopMie Kuah"}
                hint="Dicocokkan dengan nama produk di live session"/>
              <LevelPicker value={f.creatorLevel||"Semua Level"} onChange={v=>set("creatorLevel",v)}/>
              <FRow label="Creator City"><FInp val={f.city} onChange={v=>set("city",v)} placeholder="e.g. Jakarta"/></FRow>
              <div style={{background:"rgba(255,255,255,0.04)",borderRadius:8,padding:"8px 12px",fontSize:11,color:DT}}>
                DB: cocokkan dengan <code>tiktok_live_sessions.room_title</code> atau product name field
              </div>
            </div>
          )}
        </FSection>

        {/* ── Slots & Prize ── */}
        {(isLive||isLevelUp||isLiveGmvSession||isNewCreator||isBrand||isSku||(!isMonthly&&!isWeekly))&&!isLiveGmvSession&&(
          <FSection title="Slots & Prize">
            <FGrid cols={2}>
              <FRow label="Max Slots *"><FInp val={f.maxSlots||5} onChange={v=>set("maxSlots",v)} type="number" placeholder="5"/></FRow>
              <FRow label="Prize Type"><FSel val={f.prizeType} onChange={v=>set("prizeType",v)} opts={[["cash","💵 Cash (IDR)"],["item","🎁 Hadiah Fisik"],["pct","% dari GMV"]]}/></FRow>
              {f.prizeType==="cash"&&<FRow label="Prize Amount (IDR)"><FInp val={f.prizeAmount||0} onChange={v=>set("prizeAmount",v)} type="number" placeholder="0"/></FRow>}
              {f.prizeType==="item"&&<FRow label="Nama Hadiah"><FInp val={f.prizeItem||""} onChange={v=>set("prizeItem",v)} placeholder="iPhone 17 Pro"/></FRow>}
              {f.prizeType==="pct"&&<FRow label="Persentase dari GMV (%)"><FInp val={f.prizePct||0} onChange={v=>set("prizePct",v)} type="number" placeholder="10"/></FRow>}
            </FGrid>
          </FSection>
        )}

        {/* Live GMV Session has its own prize section */}
        {isLiveGmvSession&&(
          <FSection title="Hadiah per Slot">
            <FGrid cols={2}>
              <FRow label="Prize Type"><FSel val={f.prizeType} onChange={v=>set("prizeType",v)} opts={[["cash","💵 Cash (IDR)"],["item","🎁 Hadiah Fisik"],["pct","% dari GMV Sesi"]]}/></FRow>
              {f.prizeType==="cash"&&<FRow label="Prize Amount (IDR)"><FInp val={f.prizeAmount||0} onChange={v=>set("prizeAmount",v)} type="number" placeholder="0"/></FRow>}
              {f.prizeType==="item"&&<FRow label="Nama Hadiah"><FInp val={f.prizeItem||""} onChange={v=>set("prizeItem",v)} placeholder="iPhone 17 Pro"/></FRow>}
              {f.prizeType==="pct"&&<FRow label="Persentase dari GMV Sesi (%)"><FInp val={f.prizePct||0} onChange={v=>set("prizePct",v)} type="number" placeholder="5"/></FRow>}
            </FGrid>
            <div style={{background:`${Y}0A`,borderRadius:8,padding:"8px 12px",fontSize:11,color:"rgba(252,211,8,0.8)"}}>
              ⚡ First come, first serve — saat kreator memenuhi target GMV dalam 1 sesi, slot langsung terisi.
            </div>
          </FSection>
        )}

        {/* ── Weekly: per-week config ── */}
        {isWeekly&&(
          <FSection title="Konfigurasi Per Minggu">
            <div style={{fontSize:11,color:MT,marginBottom:12}}>Setiap minggu bisa memiliki hadiah, slot, dan level berbeda.</div>
            <WeekEditor weeks={f.weeks} onChange={v=>set("weeks",v)}/>
          </FSection>
        )}

        {/* ── Tier config — available for ALL campaign types ── */}
        {(isMonthly||f.useTiers)&&(
          <FSection title={isMonthly?"Konfigurasi Tier":"Tier Hadiah (Opsional)"}>
            <div style={{fontSize:11,color:MT,marginBottom:12}}>
              {isMonthly?"Setiap kreator hanya masuk ke tier tertinggi yang mereka capai.":"Tambah tier untuk memberikan hadiah berbeda berdasarkan pencapaian."}
            </div>
            <TierEditor tiers={f.tiers||[]} onChange={v=>set("tiers",v)}
              metricLabel={f.metric==="posts"?"Posts":f.metric==="views"||f.metric==="views_per_post"?"Views":f.metric==="sessions"?"Sessions":"GMV"}/>
          </FSection>
        )}
        {!isMonthly&&!isWeekly&&(
          <div style={{marginBottom:12}}>
            <FCheck checked={!!f.useTiers} onChange={v=>set("useTiers",v)} label="Aktifkan Tier Hadiah (opsional — untuk campaign non-weekly/monthly)"/>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Admin Panel ───────────────────────────────────────────────────────────────
function AdminPanel({adminUser,onLogout}){
  const isDesktop=useDesktop();
  const [tab,setTab]=useState("events"); // events | live | banners
  const [view,setView]=useState("list");
  const [editTarget,setEditTarget]=useState(null);
  const [campaigns,setCampaigns]=useState(()=>loadCampaigns()||[]);
  const [filterInd,setFilterInd]=useState("dining");
  const [filterType,setFilterType]=useState("all");
  const [toast,setToast]=useState(null);
  const showToast=(msg,ok=true)=>{setToast({msg,ok});setTimeout(()=>setToast(null),3000);};

  const loadDeleted=()=>{try{return JSON.parse(localStorage.getItem("ag_deleted")||"[]");}catch(e){return[];}};
  const [deletedIds,setDeletedIds]=useState(loadDeleted);

  const saveCamp=(f)=>{
    if(!f.label.trim()){showToast("Event name wajib diisi",false);return;}
    if(!f.key.trim()){showToast("Event key wajib diisi",false);return;}
    const id=editTarget?editTarget.id:`c_${Date.now()}`;
    const updated=editTarget
      ?campaigns.map(c=>c.id===id?{...c,...f,id}:c)
      :[...campaigns,{...f,id,createdAt:Date.now()}];
    setCampaigns(updated);saveCampaigns(updated);
    showToast(editTarget?"Campaign diupdate!":"Campaign dibuat! ✓");
    setView("list");setEditTarget(null);
  };
  const [confirmDelete,setConfirmDelete]=useState(null);
  const deleteCamp=(id)=>{
    // Remove from localStorage campaigns
    const u=campaigns.filter(c=>String(c.id)!==String(id));
    setCampaigns(u);saveCampaigns(u);
    // If built-in, also track as deleted so it hides from homepage + admin
    const isBuiltin=ALL_EVENTS.some(e=>String(e.id||e.key)===String(id)||String(e.key)===String(id));
    if(isBuiltin){
      const next=[...deletedIds,String(id)];
      setDeletedIds(next);
      try{localStorage.setItem("ag_deleted",JSON.stringify(next));}catch(e){}
    }
    setConfirmDelete(null);showToast("Campaign dihapus");
  };
  const toggleActive=(id)=>{
    // For built-in: create an override in campaigns
    const isBuiltin=ALL_EVENTS.some(e=>String(e.id||e.key)===String(id));
    if(isBuiltin){
      const existing=campaigns.find(c=>String(c.id)===String(id));
      if(!existing){
        const orig=ALL_EVENTS.find(e=>String(e.id||e.key)===String(id));
        const override={...orig,id:String(id),_override:true,status:orig.status==="live"?"ended":"live",isActive:!(orig.isActive??true)};
        const u=[...campaigns,override];setCampaigns(u);saveCampaigns(u);
      } else {
        const u=campaigns.map(c=>String(c.id)===String(id)?{...c,status:c.status==="live"?"ended":"live",isActive:!(c.isActive??true)}:c);
        setCampaigns(u);saveCampaigns(u);
      }
    } else {
      const u=campaigns.map(c=>String(c.id)===String(id)?{...c,status:c.status==="live"?"ended":"live",isActive:!(c.isActive??true)}:c);
      setCampaigns(u);saveCampaigns(u);
    }
    showToast("Status diubah");
  };
  const duplicateCamp=(c)=>{const dup={...c,id:`c_${Date.now()}`,label:c.label+" (copy)",key:c.key+"-copy",status:"ended",isActive:false,_builtin:false,createdAt:Date.now()};const u=[...campaigns,dup];setCampaigns(u);saveCampaigns(u);showToast("Diduplikasi! 📋");};

  const inds=[{id:"dining",icon:"🍽",label:"Dinings"},{id:"accom",icon:"🏨",label:"Accom"},{id:"ttd",icon:"🎯",label:"TTD"}];
  const typeOpts=[{id:"all",label:"Semua"},{id:"weekly",label:"Weekly"},{id:"monthly",label:"Monthly"},{id:"live",label:"Live"},{id:"live_gmv_session",label:"Live GMV"},{id:"levelup",label:"Level Up"},{id:"new_creator",label:"New Creator"},{id:"brand",label:"Brand"},{id:"sku",label:"SKU"}];
  // Merge ALL_EVENTS (built-in, excluding deleted) + localStorage campaigns
  // If a built-in has an override in localStorage, use override values
  const builtIn=ALL_EVENTS
    .filter(e=>!deletedIds.includes(String(e.id||e.key))&&!deletedIds.includes(String(e.key)))
    .map(e=>{
      const override=campaigns.find(c=>String(c.id)===String(e.id||e.key)&&c._override);
      return{...e,...(override||{}),_builtin:!override,id:String(e.id||e.key),createdAt:0};
    });
  const customCampaigns=campaigns.filter(c=>!c._override);
  const allAdminCampaigns=[...builtIn,...customCampaigns];
  const tabCampaigns=tab==="live"
    ?allAdminCampaigns.filter(c=>c.type==="live")
    :allAdminCampaigns.filter(c=>c.type!=="live");
  const filtered=tabCampaigns.filter(c=>c.industry===filterInd&&(filterType==="all"||c.type===filterType));
  const stats={total:allAdminCampaigns.length,active:allAdminCampaigns.filter(c=>c.status==="live"||(c.isActive??true)).length};
  const typeColor={weekly:Y,monthly:GD,live:"#FF4D4F",levelup:"#A78BFA"};

  if(view==="form"||view==="edit")return <CampaignForm initial={editTarget} onSave={saveCamp} onCancel={()=>{setView("list");setEditTarget(null);}}/>;

  return(
    <div style={{minHeight:"100svh",background:BG,fontFamily:"-apple-system,'SF Pro Text',sans-serif",color:WT}}>
      <style>{`select option{background:#1A1A1A;color:#F0F0F0} *{box-sizing:border-box} textarea,input{font-family:inherit} ::-webkit-scrollbar{display:none}`}</style>
      <div style={{maxWidth:isDesktop?"100%":480,margin:"0 auto",background:"#0D0D0D",minHeight:"100svh"}}>

      {/* Header */}
      <div style={{position:"sticky",top:0,zIndex:200,background:"rgba(13,13,13,0.97)",backdropFilter:"blur(18px)",borderBottom:"1px solid rgba(255,255,255,0.07)"}}>
        <div style={{padding:"0 16px",height:52,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            <Logo h={21}/>
            <div style={{background:`${Y}18`,border:`1px solid ${Y}40`,borderRadius:5,padding:"2px 8px",fontSize:9,fontWeight:700,color:Y}}>ADMIN</div>
          </div>
          <div style={{display:"flex",alignItems:"center",gap:8}}>
            <span style={{fontSize:11,color:DT}}>@{adminUser}</span>
            <button onClick={()=>{window.location.hash="";window.location.href=window.location.pathname}} style={{background:"none",border:`1px solid ${LN}`,borderRadius:7,padding:"5px 10px",fontSize:11,color:MT,cursor:"pointer"}}>← Home</button>
            <button onClick={onLogout} style={{background:"none",border:`1px solid ${LN}`,borderRadius:7,padding:"5px 10px",fontSize:11,color:MT,cursor:"pointer"}}>Keluar</button>
          </div>
        </div>
        {/* Tabs */}
        <div style={{display:"flex",borderTop:"1px solid rgba(255,255,255,0.06)"}}>
          {[{id:"events",icon:"📋",label:"Events"},{id:"live",icon:"🔴",label:"Live"},{id:"banners",icon:"🖼",label:"Banners"}].map(t=>(
            <button key={t.id} onClick={()=>{setTab(t.id);setFilterType("all");}} style={{flex:1,background:"none",border:"none",cursor:"pointer",padding:"9px 6px 8px",display:"flex",flexDirection:"column",alignItems:"center",gap:2,position:"relative"}}>
              <span style={{fontSize:14}}>{t.icon}</span>
              <span style={{fontSize:10,fontWeight:activeTab===t.id?700:400,color:activeTab===t.id?WT:MT}}>{t.label}</span>
              {activeTab===t.id&&<div style={{position:"absolute",bottom:0,left:"20%",right:"20%",height:2,background:Y,borderRadius:"2px 2px 0 0"}}/>}
            </button>
          ))}
        </div>
      </div>

      {tab==="banners"&&(
        <div style={{padding:"20px 16px",textAlign:"center"}}>
          <div style={{fontSize:28,marginBottom:8}}>🖼</div>
          <div style={{fontSize:14,fontWeight:700,color:WT,marginBottom:6}}>Banner Management</div>
          <div style={{fontSize:12,color:MT,lineHeight:1.6}}>Banner diambil otomatis dari campaign yang aktif berdasarkan sort order. Untuk mengubah banner, edit campaign dan update Banner URL + Sort Order.</div>
          <div style={{marginTop:20,background:C1,border:`1px solid ${LN}`,borderRadius:12,padding:"14px",textAlign:"left"}}>
            <div style={{fontSize:11,fontWeight:700,color:Y,marginBottom:10,textTransform:"uppercase",letterSpacing:.5}}>Campaign Aktif (by Sort Order)</div>
            {campaigns.filter(c=>c.status==="live"||c.isActive).sort((a,b)=>(a.sortOrder||99)-(b.sortOrder||99)).map(c=>(
              <div key={c.id} style={{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:`1px solid ${LN}`}}>
                <div style={{fontSize:13}}>{c.icon}</div>
                <div style={{flex:1,minWidth:0}}>
                  <div style={{fontSize:12,fontWeight:600,color:WT,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{c.label}</div>
                  {c.bannerUrl&&<div style={{fontSize:10,color:"#60A5FA",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{c.bannerUrl}</div>}
                  {!c.bannerUrl&&<div style={{fontSize:10,color:DT}}>Tidak ada banner URL</div>}
                </div>
                <div style={{fontSize:10,color:MT,flexShrink:0}}>#{c.sortOrder||""}</div>
              </div>
            ))}
            {campaigns.filter(c=>c.status==="live"||c.isActive).length===0&&<div style={{fontSize:12,color:MT,textAlign:"center",padding:"12px 0"}}>Belum ada campaign aktif</div>}
          </div>
        </div>
      )}

      {tab!=="banners"&&(<>
        {/* Stats + Create */}
        <div style={{padding:isDesktop?"12px 32px 8px":"12px 16px 8px",display:"flex",gap:8,alignItems:"center"}}>
          <div style={{background:C1,border:`1px solid ${LN}`,borderRadius:8,padding:"8px 14px",display:"flex",gap:12,alignItems:"center"}}>
            <div style={{textAlign:"center"}}><div style={{fontSize:16,fontWeight:900,color:Y}}>{stats.total}</div><div style={{fontSize:8,color:MT}}>TOTAL</div></div>
            <div style={{width:1,height:24,background:LN}}/>
            <div style={{textAlign:"center"}}><div style={{fontSize:16,fontWeight:900,color:"#16A34A"}}>{stats.active}</div><div style={{fontSize:8,color:MT}}>AKTIF</div></div>
          </div>
          <button onClick={()=>{setEditTarget(null);setView("form");}} style={{flex:1,background:Y,border:"none",borderRadius:8,height:42,fontSize:13,fontWeight:700,color:"#000",cursor:"pointer"}}>
            + Buat Campaign
          </button>
        </div>

        {/* Industry filter */}
        <div style={{display:"flex",gap:5,padding:isDesktop?"0 32px 6px":"0 16px 6px"}}>
          {inds.map(i=>{const a=filterInd===i.id;return(
            <button key={i.id} onClick={()=>setFilterInd(i.id)}
              style={{flex:1,background:a?Y:"transparent",border:`1px solid ${a?Y:"rgba(255,255,255,0.1)"}`,borderRadius:8,padding:"7px 4px",fontSize:10,fontWeight:a?700:400,color:a?"#000":MT,cursor:"pointer"}}>
              {i.icon} {i.label}
            </button>
          );})}
        </div>

        {/* Type filter */}
        <div style={{display:"flex",gap:4,padding:isDesktop?"0 32px 10px":"0 16px 10px",overflowX:"auto",scrollbarWidth:"none"}}>
          {(tab==="live"?[{id:"all",label:"Semua"},{id:"live",label:"Live"}]:typeOpts.filter(t=>t.id!=="live")).map(t=>{const a=filterType===t.id;return(
            <button key={t.id} onClick={()=>setFilterType(t.id)}
              style={{flexShrink:0,background:a?`${Y}14`:"transparent",border:`1px solid ${a?Y:"rgba(255,255,255,0.1)"}`,borderRadius:6,padding:"5px 10px",fontSize:10,fontWeight:a?700:400,color:a?Y:MT,cursor:"pointer"}}>
              {t.label}
            </button>
          );})}
        </div>

        {/* Campaign list */}
        <div style={{padding:"0 16px 40px"}}>
          {filtered.length===0?(
            <div style={{textAlign:"center",padding:"48px 0"}}>
              <div style={{fontSize:32,marginBottom:10}}>📋</div>
              <div style={{fontSize:14,fontWeight:600,color:MT}}>Belum ada campaign</div>
              <div style={{fontSize:11,color:DT,marginTop:4}}>Klik "+ Buat Campaign" untuk memulai</div>
            </div>
          ):filtered.sort((a,b)=>(a.sortOrder||99)-(b.sortOrder||99)).map(c=>{
            const isActive=c.status==="live"||c.isActive;
            const lvls=parseLevels(c.creatorLevel||"");
            const tc=typeColor[c.type]||Y;
            return(
              <div key={c.id} style={{background:"#111",border:`1px solid ${isActive?tc+"33":"rgba(255,255,255,0.07)"}`,borderRadius:12,overflow:"hidden",marginBottom:10}}>
                {c.bannerUrl&&<img src={c.bannerUrl} alt="" onError={e=>e.target.style.display="none"} style={{width:"100%",height:56,objectFit:"cover",display:"block"}}/>}
                <div style={{padding:"12px 14px"}}>
                  <div style={{display:"flex",gap:5,alignItems:"center",marginBottom:6,flexWrap:"wrap"}}>
                    <span style={{fontSize:9,fontWeight:800,color:"#000",background:tc,borderRadius:4,padding:"2px 7px"}}>{c.type?.toUpperCase()}</span>
                    {c._builtin&&<span style={{fontSize:9,fontWeight:700,color:"#888",background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:4,padding:"2px 6px"}}>BUILT-IN</span>}
                    {c.period&&c.type==="live"&&<span style={{fontSize:9,color:tc,background:`${tc}14`,border:`1px solid ${tc}33`,borderRadius:4,padding:"2px 6px"}}>{c.period}</span>}
                    <span style={{fontSize:9,color:isActive?"#16A34A":"#FF4444",fontWeight:600}}>● {isActive?"Aktif":"Nonaktif"}</span>
                    {c.city&&<span style={{fontSize:9,color:"#60A5FA"}}>📍{c.city}</span>}
                    <span style={{fontSize:9,color:DT}}>#{c.sortOrder||""}</span>
                  </div>
                  <div style={{fontSize:14,fontWeight:700,color:WT,marginBottom:7}}>{c.icon} {c.label}</div>
                  <div style={{display:"flex",gap:4,flexWrap:"wrap",marginBottom:10}}>
                    {lvls.map(lv=><span key={lv} style={{fontSize:9,fontWeight:700,color:lvC(lv),background:`${lvC(lv)}18`,border:`1px solid ${lvC(lv)}30`,borderRadius:4,padding:"1px 5px"}}>{lv}</span>)}
                    {c.type==="levelup"&&c.levelFrom&&c.levelTo&&<span style={{fontSize:9,fontWeight:700,color:"#A78BFA",background:"rgba(167,139,250,0.12)",border:"1px solid rgba(167,139,250,0.3)",borderRadius:4,padding:"1px 6px"}}>{c.levelFrom} → {c.levelTo}</span>}
                    {c.type==="levelup"&&<span style={{fontSize:9,fontWeight:600,color:"#FFA500",background:"rgba(255,165,0,0.08)",border:"1px solid rgba(255,165,0,0.25)",borderRadius:4,padding:"1px 5px"}}>Gross GMV</span>}
                    {c.metric&&<span style={{fontSize:9,color:MT,background:"rgba(255,255,255,0.05)",borderRadius:4,padding:"1px 5px"}}>{c.metric}</span>}
                    {c.type==="monthly"&&c.tiers?.length>0&&<span style={{fontSize:9,color:GD}}>{c.tiers.length} tier</span>}
                    {c.maxSlots&&<span style={{fontSize:9,color:MT}}>{c.maxSlots} slot</span>}
                    {c.prizeAmount>0&&<span style={{fontSize:9,color:Y,fontWeight:600}}>{idr(c.prizeAmount)}</span>}
                    {c.prizeItem&&<span style={{fontSize:9,color:GD}}>🎁 {c.prizeItem}</span>}
                  </div>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 36px",gap:6}}>
                    <button onClick={()=>toggleActive(c.id)}
                      style={{background:"transparent",border:`1px solid ${isActive?"rgba(255,68,68,0.4)":"rgba(22,163,74,0.4)"}`,borderRadius:7,padding:"7px",fontSize:10,color:isActive?"#FF6B6B":"#4ADE80",cursor:"pointer",fontWeight:600}}>
                      {isActive?"⏹ Nonaktif":"▶ Aktifkan"}
                    </button>
                    <button onClick={()=>{setEditTarget(c);setView("edit");}}
                      style={{background:"transparent",border:"1px solid rgba(255,255,255,0.1)",borderRadius:7,padding:"7px",fontSize:10,color:MT,cursor:"pointer"}}>
                      ✏️ Edit
                    </button>
                    <button onClick={()=>duplicateCamp(c)}
                      style={{background:"transparent",border:"1px solid rgba(255,255,255,0.1)",borderRadius:7,padding:"7px",fontSize:10,color:MT,cursor:"pointer"}}>
                      📋 Duplikat
                    </button>
                    {confirmDelete===c.id?(
                      <div style={{display:"flex",gap:4}}>
                        <button onClick={()=>deleteCamp(c.id)} style={{flex:1,background:"#FF4444",border:"none",borderRadius:7,padding:"7px",fontSize:10,color:"#fff",cursor:"pointer",fontWeight:700}}>✓</button>
                        <button onClick={()=>setConfirmDelete(null)} style={{flex:1,background:"transparent",border:"1px solid rgba(255,255,255,0.1)",borderRadius:7,padding:"7px",fontSize:10,color:MT,cursor:"pointer"}}>✕</button>
                      </div>
                    ):(
                      <button onClick={()=>setConfirmDelete(c.id)}
                        style={{background:"transparent",border:"1px solid rgba(255,68,68,0.25)",borderRadius:7,padding:"7px",fontSize:11,color:"#FF4444",cursor:"pointer"}}>
                        🗑
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>)}

      {toast&&<div style={{position:"fixed",bottom:24,left:"50%",transform:"translateX(-50%)",background:toast.ok?"#16A34A":"#FF4444",color:"#fff",borderRadius:10,padding:"10px 20px",fontSize:13,fontWeight:600,zIndex:999,boxShadow:"0 4px 20px rgba(0,0,0,0.5)",whiteSpace:"nowrap"}}>{toast.msg}</div>}
      </div>
    </div>
  );
}

export default function App(){
  // ALL hooks must be declared before any conditional returns (React rule)
  const [adminUser,setAdminUser]=useState(()=>{try{const a=loadAdmin();return a&&Date.now()-a.at<86400000?a.user:null;}catch(e){return null;}});
  const checkAdmin=()=>{try{const h=window.location.hash.replace(/^#\/?/,"").trim();return h==="admin";}catch(e){return false;}};
  const [isAdminMode,setIsAdminMode]=useState(checkAdmin);
  const [user,setUser]=useState(null);
  const [ready,setReady]=useState(false);
  const [tab,setTab]=useState("weekly");
  const [sheet,setSheet]=useState(null);
  const [filter,setFilter]=useState({industry:"dining",level:null});
  const isDesktop=useDesktop();

  useEffect(()=>{
    // Re-check on mount in case useState initializer ran before hash was ready
    setIsAdminMode(checkAdmin());
    const fn=()=>setIsAdminMode(checkAdmin());
    window.addEventListener("hashchange",fn);
    return()=>window.removeEventListener("hashchange",fn);
  },[]);
  useEffect(()=>{ const u=loadU(); setUser(u); setReady(true); },[]);

  // Conditional renders AFTER all hooks
  if(isAdminMode){
    if(!adminUser)return <AdminLogin onLogin={u=>{setAdminUser(u);saveAdmin({user:u,at:Date.now()});}}/>;
    return <AdminPanel adminUser={adminUser} onLogout={()=>{try{localStorage.removeItem("ag_admin");}catch(e){}setAdminUser(null);}}/>;
  }
  if(!ready)return <div style={{minHeight:"100svh",background:BG}}/>;
  if(!user)return <Onboarding onDone={u=>{setUser(u);setTab("weekly");}}/>;
  // Only show tabs that have campaigns (About always shows)
  // Exclude built-in events that admin has deleted
  const deletedBuiltins=(()=>{try{return JSON.parse(localStorage.getItem("ag_deleted")||"[]");}catch(e){return[];}})();
  const adminCampaigns=(loadCampaigns()||[]).map(c=>({
    ...c,
    // Auto-detect week status based on current date
    weeks: (c.weeks||WEEKS).map(w=>({...w,st:weekSt(w.s,w.e)})),
    tiers: c.tiers||[],
    lbPrefix: c.lbPrefix||c.key,
    lbKey: c.lbKey||`live_22`,
    start: c.startDate||"Juni 2026",
    end: c.endDate||"Juni 2026",
    accent: c.accentColor||"#8B5CF6",
    isActive: c.isActive??true,
    status: c.status||"live",
  }));
  const overrideIds=new Set(adminCampaigns.filter(c=>c._override).map(c=>String(c.id)));
  const filteredBuiltins=ALL_EVENTS.filter(e=>
    !deletedBuiltins.includes(String(e.id||e.key))&&
    !deletedBuiltins.includes(String(e.key))&&
    !overrideIds.has(String(e.id||e.key))
  );
  const ALL_ACTIVE=[...filteredBuiltins,...adminCampaigns];

  const getEvs=(type)=>ALL_ACTIVE.filter(e=>{
    if(e.type!==type)return false;
    if(type==="weekly"&&!e.weeks?.some(w=>w.st==="live"))return false;
    if(type==="monthly"&&e.status!=="live")return false;
    if(type==="live"&&!e.isActive)return false;
    if(e.industry!==filter.industry)return false;
    if(filter.level){
      const allowed=parseLevels(e.creatorLevel);
      if(!allowed.includes(filter.level))return false;
    }
    return true;
  });
  const wEvs=getEvs("weekly");const mEvs=getEvs("monthly");const lEvs=getEvs("live");


  // Hide tabs that have no campaigns for the CURRENT filter (industry + level)
  const ALL_TABS=[{id:"weekly",label:"Weekly",icon:"🗓"},{id:"monthly",label:"Monthly",icon:"📅"},{id:"live",label:"Livestreaming",icon:"📺"},{id:"about",label:"Tentang",icon:"ℹ️"}];
  const anyWeekly=ALL_ACTIVE.some(e=>e.type==="weekly"&&e.weeks?.some(w=>w.st==="live"));
  const anyMonthly=ALL_ACTIVE.some(e=>e.type==="monthly"&&e.status==="live");
  const anyLive=ALL_ACTIVE.some(e=>e.type==="live"&&(e.isActive??true));
  const tabHasCampaigns={weekly:anyWeekly,monthly:anyMonthly,live:anyLive,about:true};
  const TABS=ALL_TABS.filter(t=>tabHasCampaigns[t.id]);
  const activeTab=tabHasCampaigns[tab]?tab:(TABS[0]?.id||"about");
  if(activeTab!==tab){setTab(activeTab);}

  // Compute which industries & levels have campaigns for the current tab
  const getAvailable=(type)=>{
    const evs=ALL_ACTIVE.filter(e=>{
      if(e.type!==type)return false;
      if(type==="weekly"&&!e.weeks?.some(w=>w.st==="live"))return false;
      if(type==="monthly"&&e.status!=="live")return false;
      if(type==="live"&&!e.isActive)return false;
      return true;
    });
    const inds=[...new Set(evs.map(e=>e.industry).filter(Boolean))];
    const lvls=[...new Set(evs.flatMap(e=>parseLevels(e.creatorLevel)))];
    return{inds,lvls};
  };
  const avail=getAvailable(activeTab==="live"?"live":activeTab==="monthly"?"monthly":"weekly");

  const DW=isDesktop?"100%":"480px";

  return(
    <div style={{minHeight:"100svh",background:BG,fontFamily:"-apple-system,'Nunito','SF Pro Text','Segoe UI',sans-serif",color:WT,WebkitFontSmoothing:"antialiased"}}>
      <style>{`
        *{box-sizing:border-box;-webkit-tap-highlight-color:transparent}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:.15}}
        @keyframes up{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
        button:active{opacity:.65}
        ::-webkit-scrollbar{display:none}
        input::placeholder{color:#3a3a3a}
        input,select,textarea{font-size:16px !important}
      `}</style>
      <div style={{maxWidth:DW,margin:"0 auto",background:BG,minHeight:"100svh",position:"relative"}}>
      {/* HEADER */}
      <div style={{position:"sticky",top:0,zIndex:200,background:"rgba(10,10,10,0.97)",backdropFilter:"blur(18px)",borderBottom:`1px solid ${LN}`}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 16px",height:54}}>
          <Logo h={26}/>
          <div style={{display:"flex",alignItems:"center",gap:8}}>
            <div onClick={()=>{try{localStorage.removeItem("ag5");}catch(e){}setUser(null);}} style={{width:30,height:30,borderRadius:"50%",background:C2,border:`1px solid ${LH}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,cursor:"pointer",color:MT,fontWeight:700}}>@</div>
          </div>
        </div>
        <div style={{display:"flex",borderTop:`1px solid ${LN}`}}>
          {TABS.map(t=>(
            <button key={t.id} onClick={()=>{setTab(t.id);if(t.id==="live")setFilter(f=>({...f,industry:"dining"}));}} style={{flex:1,background:"none",border:"none",cursor:"pointer",padding:"9px 6px 8px",display:"flex",flexDirection:"column",alignItems:"center",gap:2,position:"relative"}}>
              <span style={{fontSize:15}}>{t.icon}</span>
              <span style={{fontSize:10,fontWeight:activeTab===t.id?700:400,color:activeTab===t.id?WT:MT,transition:"color .15s"}}>{t.label}</span>
              {activeTab===t.id&&<div style={{position:"absolute",bottom:0,left:"18%",right:"18%",height:2,background:Y,borderRadius:"2px 2px 0 0"}}/>}
            </button>
          ))}
        </div>
      </div>
      {/* CONTENT */}
      <div style={{animation:"up .18s ease"}}>
        <div style={{padding:isDesktop?"16px 32px 4px":"13px 16px 4px",fontSize:13,color:MT}}>Hai, <span style={{color:WT,fontWeight:600}}>{user.username}</span> 👋</div>
        <BannerCarousel onOpen={setSheet} isDesktop={isDesktop}/>
        {activeTab==="live"
          ?null
          :activeTab!=="about"&&<FilterBar filter={filter} setFilter={setFilter} availableInds={avail.inds} availableLvls={avail.lvls} isDesktop={isDesktop}/>}
        <div style={{padding:isDesktop?"10px 32px 40px":"10px 16px 40px"}}>
          {activeTab==="weekly"&&(<>
            <div style={{fontSize:10,color:MT,letterSpacing:.5,textTransform:"uppercase",marginBottom:12,marginTop:8}}>Campaign Mingguan · Juni 2026</div>
            <div style={isDesktop?{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(340px,1fr))",gap:12}:{}}>
              {wEvs.length===0?<EmptyState level={filter.level}/>:wEvs.map(e=><EventCard key={e.key} event={e} onOpen={setSheet}/>)}
            </div>
          </>)}
          {activeTab==="monthly"&&(<>
            <div style={{fontSize:10,color:MT,letterSpacing:.5,textTransform:"uppercase",marginBottom:12,marginTop:8}}>Campaign Bulanan · Juni 2026</div>
            <div style={isDesktop?{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(340px,1fr))",gap:12}:{}}>
              {mEvs.length===0?<EmptyState level={filter.level}/>:mEvs.map(e=><EventCard key={e.key} event={e} onOpen={setSheet}/>)}
            </div>
          </>)}
          {activeTab==="live"&&(<>
            <div style={{fontSize:10,color:MT,letterSpacing:.5,textTransform:"uppercase",marginBottom:12,marginTop:8}}>Campaign Live Streaming · Juni 2026</div>
            <div style={isDesktop?{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(340px,1fr))",gap:12}:{}}>
              {lEvs.length===0?<EmptyState level={filter.level}/>:lEvs.map(e=><EventCard key={e.key} event={e} onOpen={setSheet}/>)}
            </div>
          </>)}
          {activeTab==="about"&&(
            <div style={{paddingTop:8,paddingBottom:40}}>
              {/* Hero */}
              <div style={{background:`linear-gradient(135deg,#1a1200 0%,#0d0d0d 100%)`,border:`1px solid ${Y}22`,borderRadius:16,padding:"20px 18px",marginBottom:12,textAlign:"center"}}>
                <div style={{fontSize:28,marginBottom:8}}>🏆</div>
                <div style={{fontSize:18,fontWeight:900,color:Y,marginBottom:6}}>AdtreeGO Leaderboard</div>
                <div style={{fontSize:12,color:MT,lineHeight:1.7}}>Platform reward resmi untuk kreator TikTok GO yang bermitra dengan AdtreeGO. Setiap campaign dirancang untuk menghargai performa terbaik kamu.</div>
              </div>

              {/* How it works */}
              <div style={{background:C1,border:`1px solid ${LN}`,borderRadius:14,padding:"16px 18px",marginBottom:10}}>
                <div style={{fontSize:11,fontWeight:700,color:Y,letterSpacing:.5,textTransform:"uppercase",marginBottom:14}}>Cara Kerja</div>
                {[
                  {icon:"1️⃣",title:"Login dengan Uniq ID",desc:"Masukkan Uniq ID TikTok kamu. Sistem akan menandai posisimu di setiap leaderboard secara otomatis."},
                  {icon:"2️⃣",title:"Pilih Campaign",desc:"Setiap campaign punya metrik berbeda, yaitu berdasarkan jumlah post, GMV, views, atau live session."},
                  {icon:"3️⃣",title:"Capai Target",desc:"Penuhi syarat minimum dan masuk ke zona eligible. Sistem first-come-first-serve: slot diberikan kepada kreator yang pertama memenuhi syarat."},
                  {icon:"4️⃣",title:"Menangkan Hadiah",desc:"Kreator yang masuk zona eligible di akhir periode campaign akan menerima hadiah sesuai ketentuan campaign."},
                ].map((s,i)=>(
                  <div key={i} style={{display:"flex",gap:12,alignItems:"flex-start",marginBottom:i<3?14:0}}>
                    <div style={{fontSize:20,flexShrink:0,marginTop:1}}>{s.icon}</div>
                    <div>
                      <div style={{fontSize:13,fontWeight:700,color:WT,marginBottom:3}}>{s.title}</div>
                      <div style={{fontSize:12,color:MT,lineHeight:1.6}}>{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Campaign types */}
              <div style={{background:C1,border:`1px solid ${LN}`,borderRadius:14,padding:"16px 18px",marginBottom:10}}>
                <div style={{fontSize:11,fontWeight:700,color:Y,letterSpacing:.5,textTransform:"uppercase",marginBottom:14}}>Tipe Campaign</div>
                {[
                  {icon:"🗓",label:"Weekly",color:"#FCD308",desc:"Campaign per minggu. Setiap minggu reset. Kamu bisa menang di lebih dari satu minggu."},
                  {icon:"📅",label:"Monthly",color:GD,desc:"Campaign bulanan dengan sistem tier. Semakin tinggi GMV-mu, semakin besar hadiahnya."},
                  {icon:"📺",label:"Livestreaming",color:"#FF4D4F",desc:"Campaign khusus live streaming. Diukur dari GMV nett atau jumlah sesi live valid (min 2 jam/sesi)."},
                  {icon:"⬆️",label:"Level Up",color:"#A78BFA",desc:"Hadiah untuk kreator yang berhasil naik level selama periode campaign. Menggunakan Gross GMV."},
                ].map((t,i)=>(
                  <div key={i} style={{display:"flex",gap:10,alignItems:"center",marginBottom:i<3?12:0}}>
                    <div style={{width:36,height:36,borderRadius:10,background:`${t.color}14`,border:`1px solid ${t.color}33`,
                      display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,flexShrink:0}}>{t.icon}</div>
                    <div>
                      <div style={{fontSize:12,fontWeight:700,color:t.color,marginBottom:2}}>{t.label}</div>
                      <div style={{fontSize:11,color:MT,lineHeight:1.5}}>{t.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Industries */}
              <div style={{background:C1,border:`1px solid ${LN}`,borderRadius:14,padding:"16px 18px",marginBottom:10}}>
                <div style={{fontSize:11,fontWeight:700,color:Y,letterSpacing:.5,textTransform:"uppercase",marginBottom:14}}>Industri</div>
                {[
                  {icon:"🍽",label:"Dinings",desc:"Restoran, kafe, warung makan, kuliner lokal."},
                  {icon:"🏨",label:"Accommodations",desc:"Hotel, villa, homestay, penginapan."},
                  {icon:"🎯",label:"Things to Do",desc:"Wisata, atraksi, aktivitas, hiburan."},
                ].map((ind,i)=>(
                  <div key={i} style={{display:"flex",gap:10,alignItems:"center",marginBottom:i<2?10:0}}>
                    <span style={{fontSize:22}}>{ind.icon}</span>
                    <div>
                      <div style={{fontSize:13,fontWeight:700,color:WT,marginBottom:1}}>{ind.label}</div>
                      <div style={{fontSize:11,color:MT}}>{ind.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Important notes */}
              <div style={{background:"rgba(252,211,8,0.04)",border:`1px solid ${Y}22`,borderRadius:14,padding:"16px 18px",marginBottom:10}}>
                <div style={{fontSize:11,fontWeight:700,color:Y,letterSpacing:.5,textTransform:"uppercase",marginBottom:12}}>⚠️ Ketentuan Penting</div>
                {[
                  "Data leaderboard diperbarui dengan delay 2 hari dari aktivitas aktual. Data final mengacu pada validasi resmi TikTok di akhir bulan.",
                  "Sistem first-come-first-serve: slot eligible diberikan kepada kreator yang pertama memenuhi syarat, bukan yang tertinggi di akhir.",
                  "1 sesi live valid = minimum 2 jam live streaming aktif.",
                  "Level Up campaign menggunakan Gross GMV (nilai penjualan), bukan Nett/Redemption.",
                  "Campaign per industri. Kamu hanya bisa ikut campaign sesuai industri merchant yang kamu promosikan.",
                ].map((note,i)=>(
                  <div key={i} style={{display:"flex",gap:8,marginBottom:i<4?10:0}}>
                    <span style={{color:Y,flexShrink:0,fontSize:11}}>•</span>
                    <div style={{fontSize:11,color:MT,lineHeight:1.6}}>{note}</div>
                  </div>
                ))}
              </div>

              {/* Contact */}
              <div style={{background:C1,border:`1px solid ${LN}`,borderRadius:14,padding:"16px 18px"}}>
                <div style={{fontSize:11,fontWeight:700,color:MT,letterSpacing:.5,textTransform:"uppercase",marginBottom:10}}>Bantuan & Kontak</div>
                <div style={{fontSize:12,color:MT,lineHeight:1.7}}>Ada pertanyaan tentang campaign atau hadiah? Hubungi tim AdtreeGO melalui:</div>
                <div style={{marginTop:10,fontSize:12,color:WT,lineHeight:1.8}}>
                  <div>🌐 adtreedigital.cloud</div>
                  <div>📧 go@adtreedigital.cloud</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div style={{borderTop:`1px solid ${LN}`,padding:"16px 0 32px",textAlign:"center"}}>
        <div style={{fontSize:10,color:DT}}><span style={{color:Y,fontWeight:700}}>AdtreeGO</span> · adtreedigital.cloud · Juni 2026</div>
        <div style={{marginTop:10}}>
          <button onClick={()=>{window.location.hash="#admin";}} style={{background:"none",border:`1px solid ${LN}`,borderRadius:8,padding:"5px 14px",fontSize:10,color:DT,cursor:"pointer"}}>⚙️ Admin Panel</button>
        </div>
      </div>
      {sheet&&<EventSheet event={sheet} username={user.username} globalLevel={filter.level} onClose={()=>setSheet(null)}/> }
      </div>
    </div>
  );
}
